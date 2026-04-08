import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data'
import { useEntityProp } from '@wordpress/core-data';
import { TextControl } from '@wordpress/components';
import './style.scss';
import metadata from './block.json';

registerBlockType( metadata.name, {
    edit: ({setAttributes, attributes}) => {
        const blockProps = useBlockProps();
        const postType = useSelect(
            (select) => select('core/editor').getCurrentPostType(), []
         )

         const [ meta, setMeta ] = useEntityProp( 'postType', postType, 'meta' );
         const metaHP = meta[ 'game_2026_hp' ];
         const updateHPValue = ( newValue ) => {
            setMeta( { ...meta, game_2026_hp: newValue } );
         }
         return(
            <div { ...blockProps }>
                <TextControl
                    __next40pxDefaultSize
                    label="HP"
                    value={ metaHP }
                    onChange={ updateHPValue }
                />
            </div>
         )
    },
    save: () => {
        return <p>HP: { metaHP }</p>;
    }
})