import metadata from './block.json';
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import { useEntityProp } from '@wordpress/core-data';
import './style.scss';

registerBlockType( metadata.name, {
	edit: ( { setAttributes, attributes, context: { postID, postType } } ) => {
		const blockProps = useBlockProps();
		const [ meta, setMeta ] = useEntityProp( 'postType', postType, 'meta' );
		const dexterity = meta[ 'game_2026_stats_dexterity' ];
		const calculatedDexterityModifier = Math.floor(
			( dexterity - 10 ) / 2
		);
		const ac = 10 + calculatedDexterityModifier;
		return (
			<div { ...blockProps }>
				<p>AC: { ac }</p>
			</div>
		);
	},
} );
