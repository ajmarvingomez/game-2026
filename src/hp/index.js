import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { useEntityProp } from '@wordpress/core-data';
import { __experimentalNumberControl as NumberControl } from '@wordpress/components';
import './style.scss';
import metadata from './block.json';

registerBlockType( metadata.name, {
	edit: ( { setAttributes, attributes, context: { postID, postType } } ) => {
		const blockProps = useBlockProps();

		const [ meta, setMeta ] = useEntityProp( 'postType', postType, 'meta' );
		const metaHP = meta[ 'game_2026_hp' ];
		//  console.log(metaHP)
		const updateHPValue = ( newValue ) => {
			setMeta( { ...meta, game_2026_hp: newValue } );
			// console.log( `game_2026_hp updated to: ${ newValue }` );
		};
		return (
			<div { ...blockProps }>
				<NumberControl
					__next40pxDefaultSize
					label="HP"
					value={ metaHP }
					onChange={ updateHPValue }
				/>
			</div>
		);
	},
	save: () => {
		return null;
	},
} );
