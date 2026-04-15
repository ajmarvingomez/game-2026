<?php

$game_2026_stats_dexterity = get_post_meta($block->context['postId'], 'game_2026_stats_dexterity', true);
$selected_armor = get_post_meta($block->context['postId'], 'game_2026_selected_armor', true);
$selected_armor_ac = get_post_meta($selected_armor, 'game_2026_base_ac', true);
$selected_armor_dexterity_bonus = get_post_meta($selected_armor, 'game_2026_dexterity_modifier', true);
$base_ac = $selected_armor_ac ? $selected_armor_ac : 10;

$dexterity_bonus = $selected_armor_dexterity_bonus ? floor(($game_2026_stats_dexterity - 10) / 2) : 0;

$calculated_ac = $base_ac + $dexterity_bonus;
?>

<div <?php echo get_block_wrapper_attributes(); ?>>
    <p>AC: <?php echo esc_html($calculated_ac); ?></p>
</div>