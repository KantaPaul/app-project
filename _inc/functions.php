<?php 
define('THEME', 'Hello Task');

function get_header($version = 'v1',$title = 'Home'){
	include('headers/header-'.$version.'.php');
}

function get_breadcumb($breadcumb_one_title = '', $breadcumb_two_title = '', $version = '', $klass ='', $klass2 =''){
	include('breadcumbs/breadcumb-'.$version.'.php');
}

function get_breadcumb_two($breadcumb_one_title = '', $breadcumb_two_title = '', $breadcumb_three_title = '', $version = '', $klass ='', $klass2 =''){
	include('breadcumbs/breadcumb-'.$version.'.php');
}

function get_footer($version = 'v1', $klass = " "){
	include('footers/footer-'.$version.'.php');
}

function get_section($section = null, $klass = " "){
	include('sections/'.$section.'.php');
}