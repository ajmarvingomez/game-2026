<?php

$game_2026_hp = get_post_meta($block->context['postId'], 'game_2026_hp', true);
?>

<div <?php echo get_block_wrapper_attributes(); ?>>
    <p>HP: <?php echo esc_html($game_2026_hp); ?></p>
</div>