import metadata from './block.json';
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import { useEntityProp } from '@wordpress/core-data';
import { CheckboxControl } from '@wordpress/components';
import './style.scss';

registerBlockType( metadata.name, {
	edit: ( { setAttributes, attributes, context: { postID, postType } } ) => {
		const blockProps = useBlockProps();
		const [ meta, setMeta ] = useEntityProp( 'postType', postType, 'meta' );
		const dexterityModifier = meta[ 'game_2026_dexterity_modifier' ];

		return (
			<div { ...blockProps }>
                <CheckboxControl
                    label="Dexterity Modifier"
                    checked={ dexterityModifier }
                    onChange={( newValue ) => {
                        setMeta( { ...meta, game_2026_dexterity_modifier: newValue } )
                    }}
                />
			</div>
		);
	},
} );