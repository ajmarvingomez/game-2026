import metadata from './block.json';
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import { useEntityProp } from '@wordpress/core-data';
import './style.scss';
import { SelectControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { store as coreDataStore } from '@wordpress/core-data';

registerBlockType( metadata.name, {
	edit: ( { setAttributes, attributes, context: { postID, postType } } ) => {
		const blockProps = useBlockProps();
		const [ meta, setMeta ] = useEntityProp( 'postType', postType, 'meta' );
        const { armors, hasResolved } = useSelect( ( select ) => {
            return {
                armors: select( coreDataStore ).getEntityRecords( 'postType', 'armor' ),
                hasResolved: select( coreDataStore ).hasFinishedResolution(
                    'getEntityRecords',
                    [ 'postType', 'armor' ]
                ),
            };
	    }, [] );
        console.log(armors)
        const armorOptions = armors ? armors.map( ( armor ) => ( { label: armor.title.rendered, value: armor.id } ) ) : [];

		return (
            <div { ...blockProps }>
                <SelectControl
                    label="Select Armor Type"
                    options={[{label: 'Select', value: null}, ...armorOptions]}
                />
            </div>
        )
	},
} );