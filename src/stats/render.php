<?php

$stats = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];

?>

<div <?php echo get_block_wrapper_attributes(); ?>>

    <?php foreach ($stats as $stat) {
    ?>
        <p><?php echo esc_html(ucfirst($stat)); ?>: <?php echo esc_html(get_post_meta($block->context['postId'], "game_2026_stats_$stat", true)); ?></p>
    <?php
    }; ?>

</div>