/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';
import { BottomSheetTextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { hasBlockSupport } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { InspectorControls } from '../components';
import { useBlockEditingMode } from '../components/block-editing-mode';

/**
 * Filters registered block settings, extending attributes to include `className`.
 *
 * @param {Object} settings Original block settings.
 *
 * @return {Object} Filtered block settings.
 */
export function addAttribute( settings ) {
	if ( hasBlockSupport( settings, 'customClassName', true ) ) {
		// Gracefully handle if settings.attributes is undefined.
		settings.attributes = {
			...settings.attributes,
			className: {
				type: 'string',
			},
		};
	}

	return settings;
}

/**
 * Override props assigned to save component to inject the className, if block
 * supports customClassName. This is only applied if the block's save result is an
 * element and not a markup string.
 *
 * @param {Object} extraProps Additional props applied to save element.
 * @param {Object} blockType  Block type.
 * @param {Object} attributes Current block attributes.
 *
 * @return {Object} Filtered props applied to save element.
 */
export function addSaveProps( extraProps, blockType, attributes ) {
	if (
		hasBlockSupport( blockType, 'customClassName', true ) &&
		attributes.className
	) {
		extraProps.className = classnames(
			extraProps.className,
			attributes.className
		);
	}

	return extraProps;
}

function CustomClassNameControlsPure( { className, setAttributes } ) {
	const blockEditingMode = useBlockEditingMode();
	if ( blockEditingMode !== 'default' ) {
		return null;
	}

	return (
		<InspectorControls group="advanced">
			<BottomSheetTextControl
				initialValue={ className || '' }
				onChange={ ( nextValue ) => {
					setAttributes( {
						className: nextValue !== '' ? nextValue : undefined,
					} );
				} }
				placeholder={ __( 'Add classes' ) }
				label={ __( 'Additional CSS class(es)' ) }
				footerNote={ __( 'Separate multiple classes with spaces.' ) }
				textInputProps={ {
					autoCapitalize: 'none',
					autoComplete: 'off',
					autoCorrect: false,
				} }
			/>
		</InspectorControls>
	);
}

addFilter(
	'blocks.registerBlockType',
	'core/custom-class-name/attribute',
	addAttribute
);

export default {
	edit: CustomClassNameControlsPure,
	addSaveProps,
	attributeKeys: [ 'className' ],
	hasSupport( name ) {
		return hasBlockSupport( name, 'customClassName', true );
	},
};
