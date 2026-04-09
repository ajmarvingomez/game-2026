<?php
function game_2026_register_hp_post_meta()
{
    register_post_meta('monster', 'game_2026_hp', array(
        'type' => 'integer',
        'single' => true,
        'show_in_rest' => true,
    ));
}
add_action('init', 'game_2026_register_hp_post_meta');
