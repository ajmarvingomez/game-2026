<?php

$game_2026_base_ac = get_post_meta($block->context['postId'], 'game_2026_base_ac', true);
?>

<div <?php echo get_block_wrapper_attributes(); ?>>
    <p>Base AC: <?php echo esc_html($game_2026_base_ac); ?></p>
</div>