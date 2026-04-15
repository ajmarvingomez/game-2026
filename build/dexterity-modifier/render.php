<?php
$dexterity_modifier = get_post_meta($block->context['postId'], 'game_2026_dexterity_modifier', true); ?>
<div <?php echo get_block_wrapper_attributes(); ?>>
    <p>Dexterity Added?: <?php echo esc_html($dexterity_modifier ? 'Yes' : 'No'); ?></p>
</div>