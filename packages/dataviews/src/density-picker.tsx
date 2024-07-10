/**
 * WordPress dependencies
 */
import { RangeControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useViewportMatch } from '@wordpress/compose';
import { plus, lineSolid } from '@wordpress/icons';

export function useDensityValue( densityDelta: number ) {
	const isHuge = useViewportMatch( 'huge', '>=' );
	const isXlarge = useViewportMatch( 'xlarge', '>=' );
	const isMobile = useViewportMatch( 'mobile', '>=' );
	if ( isHuge ) {
		return 4 + densityDelta;
	}
	if ( isXlarge ) {
		return 3 + densityDelta;
	}
	if ( isMobile ) {
		return 2 + densityDelta;
	}
	return 1 + densityDelta;
}

export default function DensityPicker( {
	densityDelta,
	setDensityDelta,
}: {
	densityDelta: number;
	setDensityDelta: ( delta: number ) => void;
} ) {
	const densityValue = useDensityValue( densityDelta );
	const sumValue = densityValue - densityDelta;
	return (
		<>
			<Button
				size="compact"
				icon={ lineSolid }
				label={ __( 'Decrease density' ) }
				onClick={ () => {
					setDensityDelta( densityDelta - 1 );
				} }
			/>
			<RangeControl
				className="dataviews-density-picker__range-control"
				label={ __( 'Density' ) }
				hideLabelFromVision
				value={ densityValue }
				min={ 1 }
				max={ 10 }
				withInputField={ false }
				onChange={ ( value = 0 ) => {
					setDensityDelta( value - sumValue );
				} }
				step={ 1 }
			/>
			<Button
				size="compact"
				icon={ plus }
				label={ __( 'Increase density' ) }
				onClick={ () => {
					setDensityDelta( densityDelta + 1 );
				} }
			/>
		</>
	);
}
