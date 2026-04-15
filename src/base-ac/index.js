import metadata from './block.json';
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import { useEntityProp } from '@wordpress/core-data';
import { __experimentalNumberControl as NumberControl } from '@wordpress/components';
import './style.scss';

registerBlockType( metadata.name, {
	edit: ( { setAttributes, attributes, context: { postID, postType } } ) => {
		const blockProps = useBlockProps();
		const [ meta, setMeta ] = useEntityProp( 'postType', postType, 'meta' );
		const baseAC = meta[ 'game_2026_base_ac' ];

		return (
			<div { ...blockProps }>
				<NumberControl
					__next40pxDefaultSize
					label="Base AC"
					value={ baseAC ? baseAC : 11 }
					onChange={ ( newValue ) => {
						setMeta( { ...meta, game_2026_base_ac: newValue } );
					} }
				/>
			</div>
		);
	},
} );
