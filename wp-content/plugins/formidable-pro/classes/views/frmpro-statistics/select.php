<?php
if ( ! defined( 'ABSPATH' ) ) {
	die( 'You are not allowed to call this page directly.' );
}
?>
<div id="form_reports_page" class="frm_wrap">
	<?php
	FrmAppHelper::get_admin_header(
		array(
			'label' => __( 'Reports', 'formidable-pro' ),
		)
	);
	?>

	<div class="wrap frmcenter" style="padding-top: 60px;">
		<img src="<?php echo esc_url( FrmProAppHelper::plugin_url() . '/images/no-items.svg' ); ?>" />
		<h2><?php esc_html_e( 'Select a report to view.', 'formidable-pro' ); ?></h2>

		<form method="get">
			<input type="hidden" name="frm_action" value="reports" />
			<input type="hidden" name="page" value="formidable" />
			<div class="frm-flex-box frm-gap-xs" style="justify-content: center;">
				<?php FrmFormsHelper::forms_dropdown( 'form', '', array( 'blank' => false ) ); ?>
				<input type="submit" class="button button-primary frm-button-primary" value="<?php esc_attr_e( 'Go', 'formidable-pro' ); ?>" />
			</div>
		</form>
	</div>
</div>
