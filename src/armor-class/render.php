<?php

$game_2026_stats_dexterity = get_post_meta($block->context['postId'], 'game_2026_stats_dexterity', true);
$calculated_ac = 10 + floor(($game_2026_stats_dexterity - 10) / 2);
?>

<div <?php echo get_block_wrapper_attributes(); ?>>
    <p>AC: <?php echo esc_html($calculated_ac); ?></p>
</div>