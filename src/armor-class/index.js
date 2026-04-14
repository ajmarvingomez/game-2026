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
        const selectedArmor = meta[ 'game_2026_selected_armor' ];
        const selectedArmorMeta = useEntityProp( 'postType', 'armor', 'meta', selectedArmor );
        const getArmorAC = (selectedArmorMeta) => {
            if (!selectedArmor) {
                return 10;
            }
            const armorMeta = selectedArmorMeta;
            // console.log('Armor Meta:', armorMeta);
            return armorMeta[0]['game_2026_base_ac'];
        }
		const calculatedDexterityModifier = (selectedArmorMeta) => {
            if (selectedArmorMeta[0]['game_2026_dexterity_modifier']) {
                // console.log('Dexterity Modifier:', Math.floor((dexterity - 10) / 2));
                return Math.floor((dexterity - 10) / 2);
            }
            return 0;
        };
		const ac = getArmorAC(selectedArmorMeta) + calculatedDexterityModifier(selectedArmorMeta);
		return (
			<div { ...blockProps }>
				<p>AC: { ac }</p>
			</div>
		);
	},
} );
