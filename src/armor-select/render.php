<?php
$selected_armor = get_post_meta($block->context['postId'], 'game_2026_selected_armor', true);


?>
<div <?php echo get_block_wrapper_attributes(); ?>>
    <p>Armor: <a href="<?php echo get_the_permalink($selected_armor); ?>" title="<?php echo get_the_title($selected_armor); ?>"><?php echo get_the_title($selected_armor); ?></a></p>
</div>