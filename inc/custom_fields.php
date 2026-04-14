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

function game_2026_register_stats_meta()
{
    $stats = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];
    foreach ($stats as $stat) {
        register_post_meta('monster', "game_2026_stats_$stat", array(
            'type' => 'integer',
            'single' => true,
            'show_in_rest' => true,
        ));
    }
}
add_action('init', 'game_2026_register_stats_meta');

function game_2026_register_selected_armor_meta()
{
    register_post_meta('monster', 'game_2026_selected_armor', array(
        'type' => 'integer',
        'single' => true,
        'show_in_rest' => true,
    ));
}
add_action('init', 'game_2026_register_selected_armor_meta');

function game_2026_register_base_ac_meta()
{
    register_post_meta('armor', 'game_2026_base_ac', array(
        'type' => 'integer',
        'single' => true,
        'show_in_rest' => true,
    ));
}
add_action('init', 'game_2026_register_base_ac_meta');

function game_2026_register_dexterity_modifier_meta()
{
    register_post_meta('armor', 'game_2026_dexterity_modifier', array(
        'type' => 'boolean',
        'single' => true,
        'show_in_rest' => true,
    ));
}
add_action('init', 'game_2026_register_dexterity_modifier_meta');
