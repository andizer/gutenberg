/**
 * External dependencies
 */
import clsx from 'clsx';

/**
 * WordPress dependencies
 */
import { useSelect } from '@wordpress/data';
import { useMediaQuery, useViewportMatch } from '@wordpress/compose';
import { __unstableMotion as motion } from '@wordpress/components';
import { store as preferencesStore } from '@wordpress/preferences';
import { useState } from '@wordpress/element';
import { PinnedItems } from '@wordpress/interface';
import {
	store as blockEditorStore,
	privateApis as blockEditorPrivateApis,
} from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import BackButton, { useHasBackButton } from './back-button';
import CollapsibleBlockToolbar from '../collapsible-block-toolbar';
import DocumentBar from '../document-bar';
import DocumentTools from '../document-tools';
import MoreMenu from '../more-menu';
import PostPreviewButton from '../post-preview-button';
import PostPublishButtonOrToggle from '../post-publish-button/post-publish-button-or-toggle';
import PostSavedState from '../post-saved-state';
import PostViewLink from '../post-view-link';
import PreviewDropdown from '../preview-dropdown';
import { store as editorStore } from '../../store';
import { unlock } from '../../lock-unlock';

const { useHasBlockToolbar } = unlock( blockEditorPrivateApis );

const toolbarVariations = {
	distractionFreeDisabled: { y: '-50px' },
	distractionFreeHover: { y: 0 },
	distractionFreeHidden: { y: '-50px' },
	visible: { y: 0 },
	hidden: { y: 0 },
};

const backButtonVariations = {
	distractionFreeDisabled: { x: '-100%' },
	distractionFreeHover: { x: 0 },
	distractionFreeHidden: { x: '-100%' },
	visible: { x: 0 },
	hidden: { x: 0 },
};

function Header( {
	customSaveButton,
	forceIsDirty,
	forceDisableBlockTools,
	setEntitiesSavedStatesCallback,
	title,
	icon,
} ) {
	const isWideViewport = useViewportMatch( 'large' );
	const isLargeViewport = useViewportMatch( 'medium' );
	const isTooNarrowForDocumentBar = useMediaQuery( '(max-width: 382px)' );
	const {
		isTextEditor,
		isPublishSidebarOpened,
		showIconLabels,
		hasFixedToolbar,
		isNestedEntity,
		isZoomedOutView,
	} = useSelect( ( select ) => {
		const { get: getPreference } = select( preferencesStore );
		const {
			getEditorMode,
			getEditorSettings,
			isPublishSidebarOpened: _isPublishSidebarOpened,
		} = select( editorStore );
		const { __unstableGetEditorMode } = select( blockEditorStore );

		return {
			isTextEditor: getEditorMode() === 'text',
			isPublishSidebarOpened: _isPublishSidebarOpened(),
			showIconLabels: getPreference( 'core', 'showIconLabels' ),
			hasFixedToolbar: getPreference( 'core', 'fixedToolbar' ),
			isNestedEntity:
				!! getEditorSettings().onNavigateToPreviousEntityRecord,
			isZoomedOutView: __unstableGetEditorMode() === 'zoom-out',
		};
	}, [] );

	const [ isBlockToolsCollapsed, setIsBlockToolsCollapsed ] =
		useState( true );

	const blockToolbar =
		useHasBlockToolbar() && hasFixedToolbar && isLargeViewport ? (
			<CollapsibleBlockToolbar
				isCollapsed={ isBlockToolsCollapsed }
				onToggle={ setIsBlockToolsCollapsed }
			/>
		) : null;

	const showDocumentBar =
		( ! blockToolbar || isBlockToolsCollapsed ) &&
		! isTooNarrowForDocumentBar;
	const hasBackButton = useHasBackButton();

	// The edit-post-header classname is only kept for backward compatibilty
	// as some plugins might be relying on its presence.
	return (
		<div
			className={ clsx( 'editor-header edit-post-header', {
				'has-back-button': hasBackButton,
				'has-center': showDocumentBar,
			} ) }
		>
			{ hasBackButton && (
				<motion.div
					variants={ backButtonVariations }
					transition={ { type: 'tween' } }
				>
					<BackButton.Slot />
				</motion.div>
			) }
			<motion.div
				variants={ toolbarVariations }
				className="editor-header__toolbar"
				transition={ { type: 'tween' } }
			>
				<DocumentTools
					disableBlockTools={ forceDisableBlockTools || isTextEditor }
				/>
				{ blockToolbar }
			</motion.div>
			{ ( title || showDocumentBar ) && (
				<motion.div
					className="editor-header__center"
					variants={ toolbarVariations }
					transition={ { type: 'tween' } }
				>
					<DocumentBar title={ title } icon={ icon } />
				</motion.div>
			) }
			<motion.div
				variants={ toolbarVariations }
				transition={ { type: 'tween' } }
				className="editor-header__settings"
			>
				{ ! customSaveButton && ! isPublishSidebarOpened && (
					// This button isn't completely hidden by the publish sidebar.
					// We can't hide the whole toolbar when the publish sidebar is open because
					// we want to prevent mounting/unmounting the PostPublishButtonOrToggle DOM node.
					// We track that DOM node to return focus to the PostPublishButtonOrToggle
					// when the publish sidebar has been closed.
					<PostSavedState forceIsDirty={ forceIsDirty } />
				) }
				<PreviewDropdown
					forceIsAutosaveable={ forceIsDirty }
					disabled={ isNestedEntity || isZoomedOutView }
				/>
				<PostPreviewButton
					className="editor-header__post-preview-button"
					forceIsAutosaveable={ forceIsDirty }
				/>
				<PostViewLink />
				{ ! customSaveButton && (
					<PostPublishButtonOrToggle
						forceIsDirty={ forceIsDirty }
						setEntitiesSavedStatesCallback={
							setEntitiesSavedStatesCallback
						}
					/>
				) }
				{ customSaveButton }
				{ ( isWideViewport || ! showIconLabels ) && (
					<PinnedItems.Slot scope="core" />
				) }
				<MoreMenu />
			</motion.div>
		</div>
	);
}

export default Header;
