<?php
// This file is generated. Do not modify it manually.
return array(
	'game-2026' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'game-2026/game-2026',
		'version' => '0.1.0',
		'title' => 'Game 2026',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'This is a game built with Wordpress as the principle cms to manage',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'game-2026',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'hp' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'game-2026/game-2026-hp',
		'version' => '0.1.0',
		'title' => 'Game 2026 HP',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Health Points',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'usesContext' => array(
			'postType',
			'postId'
		),
		'textdomain' => 'game-2026',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'stats' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'game-2026/game-2026-stats',
		'version' => '0.1.0',
		'title' => 'Game 2026 Stats',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Stats',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'usesContext' => array(
			'postType',
			'postId'
		),
		'attributes' => array(
			'strength' => array(
				'type' => 'number',
				'default' => 10
			),
			'dexterity' => array(
				'type' => 'number',
				'default' => 10
			),
			'constitution' => array(
				'type' => 'number',
				'default' => 10
			),
			'intelligence' => array(
				'type' => 'number',
				'default' => 10
			),
			'wisdom' => array(
				'type' => 'number',
				'default' => 10
			),
			'charisma' => array(
				'type' => 'number',
				'default' => 10
			)
		),
		'textdomain' => 'game-2026',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	)
);
