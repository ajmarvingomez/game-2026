<?php

/**
 * Registers the monster custom post type.
 */

function game_2026_monster_custom_post_type()
{
    $labels = array(
        'name' => 'Monsters',
        'singular_name' => 'Monster',
        'menu_name' => 'Monsters'
    );
    $args = array(
        'labels' => $labels,
        'public' => true,
        'show_in_rest' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'revisions', 'custom-fields'),
    );
    register_post_type('monster', $args);
}

add_action('init', 'game_2026_monster_custom_post_type');
