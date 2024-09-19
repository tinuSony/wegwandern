<?php
if ( ! defined( 'ABSPATH' ) ) {
	die( 'You are not allowed to call this page directly.' );
}

$important = ! empty( $defaults['important_style'] ) ? ' !important' : '';
?>
.frm_rootline_group{
	text-align: center;
	margin: 20px auto 30px<?php echo esc_html( $important ); ?>;
	width: 100%;
}

ul.frm_page_bar{
	list-style-type: none<?php echo esc_html( $important ); ?>;
	margin: 0 !important;
	padding: 0<?php echo esc_html( $important ); ?>;
	width: 100%<?php echo esc_html( $important ); ?>;
	display: flex<?php echo esc_html( $important ); ?>;
	flex-wrap: wrap<?php echo esc_html( $important ); ?>;
	box-sizing: border-box<?php echo esc_html( $important ); ?>;
}

ul.frm_rootline {
	align-items: baseline;
}

ul.frm_page_bar li{
	display: flex<?php echo esc_html( $important ); ?>;
	flex: 1;
	align-items: center;
	justify-content: center;
	flex-direction: column<?php echo esc_html( $important ); ?>;
}

.frm_page_bar.frm_hidden,
.frm_page_bar .frm_hidden {
	display: none !important;
}

ul.frm_rootline_hidden_steps {
	z-index: 1;
	display: flex;
	width: auto;
	position: absolute;
	background: #fff;
	padding: 16px;
	gap: 16px;
	flex-direction: column;
	border-radius: 6px;
	box-shadow: 0px 8px 24px rgb(40 47 54 / 15%);
	top: calc( var(--progress-size) + 10px );
}

.frm_show_titles ul.frm_rootline_hidden_steps {
	min-width: min(100%, 400px);
}

ul.frm_rootline_hidden_steps li {
	white-space: nowrap;
	text-align: start;
	z-index: 1;
	cursor: pointer;
	flex-direction: row<?php echo esc_html( $important ); ?>;
	gap: 16px;
	position: relative;
}

.frm_rootline_hidden_steps li span.frm_rootline_title.frm_prev_page_title{
	text-decoration: line-through;
	opacity: 0.45;
	font-weight: 400;
}

.frm_rtl .frm_rootline.frm_show_lines > .frm_rootline_single:first-child::after,
.frm_rootline.frm_show_lines ul.frm_rootline_hidden_steps li:after,
.frm_rootline.frm_show_lines > .frm_rootline_single:after {
	height: var(--progress-border-size);
	background: var(--progress-border-color)<?php echo esc_html( $important ); ?>;
	content: '';
	position: absolute;
	top: 12px; /* For IE */
	top: calc( ( var(--progress-size) / 2 ) - var(--progress-border-size) );<?php // Add 1 for border width. ?>
	left: 50%;
	width: 100%;
	z-index: -1;
}

.frm_rtl .frm_rootline.frm_show_lines > .frm_rootline_single::after {
	right: 50%;
	left: auto;
}

.frm_rootline.frm_show_lines ul.frm_rootline_hidden_steps li:last-child::after,
.frm_rootline.frm_show_lines > .frm_rootline_single:last-child::after {
	content: none;
}

.frm_rootline.frm_show_lines ul.frm_rootline_hidden_steps li:after {
	width: var(--progress-border-size);
	height: 100%;
	top: max( 50%, 20px ); /* For smaller circles */
	left: calc( ( var(--progress-size) / 2 ) - var(--progress-border-size) );
}

.frm_rtl .frm_rootline.frm_show_lines ul.frm_rootline_hidden_steps li:after {
	right: calc( ( var(--progress-size) / 2 ) + var(--progress-border-size) );
	left: auto;
}

.frm_rootline_hidden_steps .frm_rootline_title {
	flex: 1;
}

.frm_rootline_hidden_steps .frm_rootline_single input {
	margin: 0 !important;
}

.frm_page_bar .frm_rootline_single input{
	margin-bottom: 2px;
	font-size: 14px;
}

.frm_forms .frm_page_bar input,
.frm_forms .frm_page_bar input:disabled{
	transition: background-color 0.1s ease;
	color: var(--progress-color) <?php echo esc_html( $important ); ?>;
	background-color: var(--progress-bg-color) <?php echo esc_html( $important ); ?>;
	border-width: var(--progress-border-size) <?php echo esc_html( $important ); ?>;
	border-style: solid;
	border-color: var(--progress-border-color-b) <?php echo esc_html( $important ); ?>;
	cursor: pointer <?php echo esc_html( $important ); ?>;
}

.frm_forms .frm_page_bar input:hover,
.frm_forms .frm_page_bar input:focus{
	color: <?php echo esc_html( FrmStylesHelper::adjust_brightness( $defaults['progress_color'], -20 ) ); ?>;
	background-color: <?php echo esc_html( FrmStylesHelper::adjust_brightness( $defaults['progress_bg_color'], -20 ) . $important ); ?>;
}

.frm_forms .frm_rootline input {
	font-size: 14px;
	font-weight: 500;
}

.frm_forms .frm_rootline input:hover {
	opacity: 1;
}

.frm_forms .frm_rootline input:focus{
	outline: none;
}

.frm_forms .frm_rootline .frm_rootline_single input {
	border-width: 0<?php echo esc_html( $important ); ?>;
}

.frm_forms .frm_progress_line input.frm_page_back {
	background-color: var(--progress-active-bg-color) <?php echo esc_html( $important ); ?>;
}

.frm_forms .frm_rootline input.frm_page_back {
	background-color: var(--progress-color)<?php echo esc_html( $important ); ?>;
	color: var(--progress-active-color)<?php echo esc_html( $important ); ?>;
}

.frm_forms .frm_rootline input.frm_page_back:hover,
.frm_forms .frm_rootline input.frm_page_back:focus{
	background-color: <?php echo esc_html( FrmStylesHelper::adjust_brightness( $defaults['progress_color'], 45 ) . $important ); ?>;
	color: <?php echo esc_html( FrmStylesHelper::adjust_brightness( $defaults['progress_bg_color'], 45 ) . $important ); ?>;
}

.frm_forms .frm_page_bar .frm_current_page input[type="button"]{
	background-color: var(--progress-bg-color)<?php echo esc_html( $important ); ?>;
	border-color: var(--progress-border-color)<?php echo esc_html( $important ); ?>;
}

.frm_progress .frm_rootline_single{
	text-align: center;
	margin: 0<?php echo esc_html( $important ); ?>;
	padding: 0<?php echo esc_html( $important ); ?>;
}

.frm_rootline > .frm_rootline_single {
	min-width: 50px;
	position: relative;
	padding: 0 10px<?php echo esc_html( $important ); ?>;
	margin-left: 0;
	margin-right: 0;
}

.frm_rootline.frm_show_titles > .frm_rootline_single {
	min-width: min(150px, 30%);
}

.frm_rootline_single input{
	display: flex;
	text-align: center;
	justify-content: center;
	margin: auto;
}

.frm_rootline_hidden_steps .frm_rootline_single input{
	display: inline-block;
}

.frm_current_page .frm_rootline_title {
	color: var(--progress-active-bg-color) <?php echo esc_html( $important ); ?>;
}

.frm_rootline_title,
.frm_pages_complete,
.frm_percent_complete {
	font-size: 12px<?php echo esc_html( $important ); ?>;
	font-weight: 500;
	padding: 6px 0<?php echo esc_html( $important ); ?>;
	color: var(--text-color) <?php echo esc_html( $important ); ?>;
}

.frm_rootline_title {
	font-size: 14px<?php echo esc_html( $important ); ?>;
}

.frm_pages_complete {
	float: right;
}

.frm_percent_complete {
	float: left;
}

.frm_forms .frm_progress_line input,
.frm_forms .frm_progress_line input:disabled {
	width: 100%;
	border: none;
	border-top: 1px solid var(--progress-border-color)<?php echo esc_html( $important ); ?>;
	border-bottom: 1px solid var(--progress-border-color)<?php echo esc_html( $important ); ?>;
	box-shadow: inset 0 2px 10px -10px rgba(41, 58, 82, 0.31);
	margin: 0<?php echo esc_html( $important ); ?>;
	padding: 0<?php echo esc_html( $important ); ?>;
	border-radius: 0;
	font-size: 0<?php echo esc_html( $important ); ?>;
	line-height: 15px<?php echo esc_html( $important ); ?>;
}

.frm_forms .frm_progress_line.frm_show_lines input {
	border-left: 1px solid var(--progress-color)<?php echo esc_html( $important ); ?>;
	border-right: 1px solid var(--progress-color)<?php echo esc_html( $important ); ?>;
}

.frm_progress_line .frm_rootline_single {
	justify-content: flex-end<?php echo esc_html( $important ); ?>;
	margin: 0<?php echo esc_html( $important ); ?>;
}

.frm_forms .frm_progress_line li:first-of-type input {
	border-top-left-radius: 15px<?php echo esc_html( $important ); ?>;
	border-bottom-left-radius: 15px<?php echo esc_html( $important ); ?>;
	border-left: 1px solid var(--progress-active-bg-color)<?php echo esc_html( $important ); ?>;
}

.frm_forms .frm_progress_line li:last-of-type input {
	border-top-right-radius: 15px<?php echo esc_html( $important ); ?>;
	border-bottom-right-radius: 15px<?php echo esc_html( $important ); ?>;
	border-right: 1px solid var(--progress-active-bg-color)<?php echo esc_html( $important ); ?>;
}

.frm_forms .frm_progress_line li:last-of-type input.frm_page_skip {
	border-right: 1px solid var(--progress-border-color)<?php echo esc_html( $important ); ?>;
}

.frm_forms .frm_progress_line .frm_current_page input[type="button"] {
	border-left: 1px solid var(--progress-border-color)<?php echo esc_html( $important ); ?>;
}

.frm_forms .frm_progress_line.frm_show_lines .frm_current_page input[type="button"] {
	border-right: 1px solid var(--progress-color)<?php echo esc_html( $important ); ?>;
}

.frm_forms .frm_progress_line input.frm_page_back {
	border-color: var(--progress-active-bg-color)<?php echo esc_html( $important ); ?>;
}

.frm_forms .frm_progress_line.frm_show_lines input.frm_page_back {
	border-left-color: var(--progress-active-bg-color)<?php echo esc_html( $important ); ?>;
	border-right-color: var(--progress-color)<?php echo esc_html( $important ); ?>;
}

/* Start RTL */
.frm_rtl.frm_forms .frm_progress_line li:first-of-type input {
	border-top-right-radius: 15px<?php echo esc_html( $important ); ?>;
	border-bottom-right-radius: 15px<?php echo esc_html( $important ); ?>;
	border-top-left-radius:0px<?php echo esc_html( $important ); ?>;
	border-bottom-left-radius:0px<?php echo esc_html( $important ); ?>;
	border-right: 1px solid var(--progress-active-bg-color)<?php echo esc_html( $important ); ?>;
}

.frm_rtl.frm_forms .frm_progress_line li:last-of-type input	{
	border-top-left-radius: 15px<?php echo esc_html( $important ); ?>;
	border-bottom-left-radius: 15px<?php echo esc_html( $important ); ?>;
	border-top-right-radius:0px<?php echo esc_html( $important ); ?>;
	border-bottom-right-radius:0px<?php echo esc_html( $important ); ?>;
	border-left: 1px solid var(--progress-active-bg-color)<?php echo esc_html( $important ); ?>;
}

.frm_rtl.frm_forms .frm_progress_line li:last-of-type input.frm_page_skip {
	border-left: 1px solid var(--progress-border-color)<?php echo esc_html( $important ); ?>;
	border-right:none;
}

.frm_rtl.frm_forms .frm_progress_line .frm_current_page input[type="button"] {
	border-right: 1px solid var(--progress-border-color)<?php echo esc_html( $important ); ?>;
	border-left:none;
}

.frm_rtl.frm_forms .frm_progress_line.frm_show_lines .frm_current_page input[type="button"] {
	border-left: 1px solid var(--progress-color)<?php echo esc_html( $important ); ?>;
	border-right:none;
}
/* End RTL */

.frm_rootline_single > .frm_rootline_node {
	position: relative;
}

.frm_rootline.frm_show_lines{
	position: relative;
	z-index: 1;
}

.frm_rootline.frm_show_lines span{
	display: block;
}

.frm_forms .frm_rootline input {
	width: var(--progress-size)<?php echo esc_html( $important ); ?>;
	height: var(--progress-size)<?php echo esc_html( $important ); ?>;
	min-height: auto;
	border-radius: var(--progress-size)<?php echo esc_html( $important ); ?>;
	padding: 0<?php echo esc_html( $important ); ?>;
}

.frm_forms input.frm_rootline_show_more_btn {
	font-weight: 900;
}

.frm_forms .frm_rootline.frm_no_numbers input.frm_rootline_show_more_btn {
	color: var(--progress-color) !important;
}

.frm_page_bar input.frm_rootline_show_more_btn.active {
	opacity: 1;
}

.frm_forms .frm_rootline input:focus {
	border-color: var(--progress-active-bg-color) <?php echo esc_html( $important ); ?>;
}

.frm_forms .frm_rootline .frm_current_page input[type="button"] {
	border-color: <?php echo esc_html( FrmStylesHelper::adjust_brightness( $defaults['progress_active_bg_color'], -20 ) . $important ); ?>;
	background-color: var(--progress-active-bg-color)<?php echo esc_html( $important ); ?>;
	color: var(--progress-active-color)<?php echo esc_html( $important ); ?>;
}

.frm_forms .frm_progress_line input,
.frm_forms .frm_progress_line input:disabled,
.frm_forms .frm_progress_line .frm_current_page input[type="button"],
.frm_forms .frm_rootline.frm_no_numbers input,
.frm_forms .frm_rootline.frm_no_numbers .frm_current_page input[type="button"] {
	color: transparent !important;
}

.frm_rootline_show_hidden_steps_btn:not(.active)>.frm_rootline_title{
	display: none;
}

@media only screen and (max-width: 700px) {
	.frm_show_titles ul.frm_rootline_hidden_steps {
		min-width: 16px;
	}
}

@media only screen and (max-width: 500px) {
	.frm_rootline.frm_rootline_4 span.frm_rootline_title,
	.frm_rootline.frm_rootline_3 span.frm_rootline_title{
		display:none;
	}
}
