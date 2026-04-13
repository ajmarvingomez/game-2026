import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import { useEntityProp } from '@wordpress/core-data';
import { __experimentalNumberControl as NumberControl } from '@wordpress/components';
import './style.scss';
import metadata from './block.json';

registerBlockType( metadata.name, {
	edit: ( { setAttributes, attributes, context: { postID, postType } } ) => {
		const blockProps = useBlockProps();
		const [ meta, setMeta ] = useEntityProp( 'postType', postType, 'meta' );
		const stats = [
			'strength',
			'dexterity',
			'constitution',
			'intelligence',
			'wisdom',
			'charisma',
		];
		return (
			<div { ...blockProps }>
				{ stats.map( ( stat ) => {
					const metaKey = `game_2026_stats_${ stat }`;
					const capitalizedStat =
						stat.charAt( 0 ).toUpperCase() + stat.slice( 1 );
					return (
						<NumberControl
							__next40pxDefaultSize
							label={ capitalizedStat }
							value={ meta[ metaKey ] }
							onChange={ ( newValue ) => {
								setMeta( { ...meta, [ metaKey ]: newValue } );
							} }
						/>
					);
				} ) }
			</div>
		);
	},
	save: () => {
		return null;
	},
} );
