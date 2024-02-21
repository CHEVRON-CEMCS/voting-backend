exports.get=(message,link=null,btntext=null)=>{
    html=`
    <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<!--[if (gte mso 9)|(IE)]>
  <xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
</xml>
<![endif]-->
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1"> <!-- So that mobile will display zoomed in -->
<meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- enable media queries for windows phone 8 -->
<meta name="format-detection" content="telephone=no"> <!-- disable auto telephone linking in iOS -->
<meta name="format-detection" content="date=no"> <!-- disable auto date linking in iOS -->
<meta name="format-detection" content="address=no"> <!-- disable auto address linking in iOS -->
<meta name="format-detection" content="email=no"> <!-- disable auto email linking in iOS -->
<meta name="color-scheme" content="only">
<title></title>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai+Looped:wght@100;200;300;400;500;600;700&family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">

<style type="text/css">
/*Basics*/
body {margin:0px !important; padding:0px !important; display:block !important; min-width:100% !important; width:100% !important; -webkit-text-size-adjust:none;}
table {border-spacing:0; mso-table-lspace:0pt; mso-table-rspace:0pt;}
table td {border-collapse: collapse;mso-line-height-rule:exactly;}
td img {-ms-interpolation-mode:bicubic; width:auto; max-width:auto; height:auto; margin:auto; display:block!important; border:0px;}
td p {margin:0; padding:0;}
td div {margin:0; padding:0;}
td a {text-decoration:none; color: inherit;}
/*Outlook*/
.ExternalClass {width: 100%;}
.ExternalClass,.ExternalClass p,.ExternalClass span,.ExternalClass font,.ExternalClass td,.ExternalClass div {line-height:inherit;}
.ReadMsgBody {width:100%; background-color: #ffffff;}
/* iOS freya LINKS */
a[x-apple-data-detectors] {color:inherit !important; text-decoration:none !important; font-size:inherit !important; font-family:inherit !important; font-weight:inherit !important; line-height:inherit !important;} 
/*Gmail freya links*/
u + #body a {color:inherit;text-decoration:none;font-size:inherit;font-family:inherit;font-weight:inherit;line-height:inherit;}
/*Buttons fix*/
.undoreset a, .undoreset a:hover {text-decoration:none !important;}
.yshortcuts a {border-bottom:none !important;}
.ios-footer a {color:#aaaaaa !important;text-decoration:none;}
/* data-outer-table="800 - 600" */
.outer-table {width:640px!important;max-width:640px!important;}
/* data-inner-table="780 - 540" */
.inner-table {width:580px!important;max-width:580px!important;}
/*Responsive-Tablet*/
@media only screen and (max-width: 799px) and (min-width: 601px) {
  .outer-table.row {width:640px!important;max-width:640px!important;}
  .inner-table.row {width:580px!important;max-width:580px!important;}
}
/*Responsive-Mobile*/
@media only screen and (max-width: 600px) and (min-width: 320px) {
  table.row {width: 100%!important;max-width: 100%!important;}
  td.row {width: 100%!important;max-width: 100%!important;}
  .img-responsive img {width:100%!important;max-width: 100%!important;height: auto!important;margin: auto;}
  .center-float {float: none!important;margin:auto!important;}
  .center-text{text-align: center!important;}
  .container-padding {width: 100%!important;padding-left: 15px!important;padding-right: 15px!important;}
  .container-padding10 {width: 100%!important;padding-left: 10px!important;padding-right: 10px!important;}
  .hide-mobile {display: none!important;}
  .menu-container {text-align: center !important;}
  .autoheight {height: auto!important;}
  .m-padding-10 {margin: 10px 0!important;}
  .m-padding-15 {margin: 15px 0!important;}
  .m-padding-20 {margin: 20px 0!important;}
  .m-padding-30 {margin: 30px 0!important;}
  .m-padding-40 {margin: 40px 0!important;}
  .m-padding-50 {margin: 50px 0!important;}
  .m-padding-60 {margin: 60px 0!important;}
  .m-padding-top10 {margin: 30px 0 0 0!important;}
  .m-padding-top15 {margin: 15px 0 0 0!important;}
  .m-padding-top20 {margin: 20px 0 0 0!important;}
  .m-padding-top30 {margin: 30px 0 0 0!important;}
  .m-padding-top40 {margin: 40px 0 0 0!important;}
  .m-padding-top50 {margin: 50px 0 0 0!important;}
  .m-padding-top60 {margin: 60px 0 0 0!important;}
  .m-height10 {font-size:10px!important;line-height:10px!important;height:10px!important;}
  .m-height15 {font-size:15px!important;line-height:15px!important;height:15px!important;}
  .m-height20 {font-size:20px!important;line-height:20px!important;height:20px!important;}
  .m-height25 {font-size:25px!important;line-height:25px!important;height:25px!important;}
  .m-height30 {font-size:30px!important;line-height:30px!important;height:30px!important;}
  .radius6 {border-radius: 6px!important;}
  .fade-white {background-color: rgba(255, 255, 255, 0.8)!important;}
  .rwd-on-mobile {display: inline-block!important;padding: 5px!important;}
  .center-on-mobile {text-align: center!important;}
  .rwd-col {width:100%!important;max-width:100%!important;display:inline-block!important;}
  .type48 {font-size:48px!important;line-height:48px!important;}
}
</style>
<style type="text/css" class="export-delete"> 
  .composer--mobile table.row {width: 100%!important;max-width: 100%!important;}
  .composer--mobile td.row {width: 100%!important;max-width: 100%!important;}
  .composer--mobile .img-responsive img {width:100%!important;max-width: 100%!important;height: auto!important;margin: auto;}
  .composer--mobile .center-float {float: none!important;margin:auto!important;}
  .composer--mobile .center-text{text-align: center!important;}
  .composer--mobile .container-padding {width: 100%!important;padding-left: 15px!important;padding-right: 15px!important;}
  .composer--mobile .container-padding10 {width: 100%!important;padding-left: 10px!important;padding-right: 10px!important;}
  .composer--mobile .hide-mobile {display: none!important;}
  .composer--mobile .menu-container {text-align: center !important;}
  .composer--mobile .autoheight {height: auto!important;}
  .composer--mobile .m-padding-10 {margin: 10px 0!important;}
  .composer--mobile .m-padding-15 {margin: 15px 0!important;}
  .composer--mobile .m-padding-20 {margin: 20px 0!important;}
  .composer--mobile .m-padding-30 {margin: 30px 0!important;}
  .composer--mobile .m-padding-40 {margin: 40px 0!important;}
  .composer--mobile .m-padding-50 {margin: 50px 0!important;}
  .composer--mobile .m-padding-60 {margin: 60px 0!important;}
  .composer--mobile .m-padding-top10 {margin: 30px 0 0 0!important;}
  .composer--mobile .m-padding-top15 {margin: 15px 0 0 0!important;}
  .composer--mobile .m-padding-top20 {margin: 20px 0 0 0!important;}
  .composer--mobile .m-padding-top30 {margin: 30px 0 0 0!important;}
  .composer--mobile .m-padding-top40 {margin: 40px 0 0 0!important;}
  .composer--mobile .m-padding-top50 {margin: 50px 0 0 0!important;}
  .composer--mobile .m-padding-top60 {margin: 60px 0 0 0!important;}
  .composer--mobile .m-height10 {font-size:10px!important;line-height:10px!important;height:10px!important;}
  .composer--mobile .m-height15 {font-size:15px!important;line-height:15px!important;height:15px!important;}
  .composer--mobile .m-height20 {font-srobotoize:20px!important;line-height:20px!important;height:20px!important;}
  .composer--mobile .m-height25 {font-size:25px!important;line-height:25px!important;height:25px!important;}
  .composer--mobile .m-height30 {font-size:30px!important;line-height:30px!important;height:30px!important;}
  .composer--mobile .radius6 {border-radius: 6px!important;}
  .composer--mobile .fade-white {background-color: rgba(255, 255, 255, 0.8)!important;}
  .composer--mobile .rwd-on-mobile {display: inline-block!important;padding: 5px!important;}
  .composer--mobile .center-on-mobile {text-align: center!important;}
  .composer--mobile .rwd-col {width:100%!important;max-width:100%!important;display:inline-block!important;}
  .composer--mobile .type48 {font-size:48px!important;line-height:48px!important;}
</style>
</head>

<body data-bgcolor="Body" style="margin-top: 0; margin-bottom: 0; padding-top: 0; padding-bottom: 0; width: 100%; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;" bgcolor="#FAEEE7">

<span class="preheader-text" data-preheader-text style="color: transparent; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; visibility: hidden; width: 0; display: none; mso-hide: all;"></span>

<!-- Preheader white space hack -->
<div style="display: none; max-height: 0px; overflow: hidden;">
&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
</div>

<div data-primary-font="IBM Plex Sans Thai Looped" data-secondary-font="Roboto" style="display:none; font-size:0px; line-height:0px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; visibility:hidden; mso-hide:all;"></div>

<table border="0" align="center" cellpadding="0" cellspacing="0" width="100%" style="width:100%;max-width:100%;">
  <tr><!-- Outer Table -->
    <td align="center" data-bgcolor="Body" bgcolor="#FAEEE7" data-composer>

<table data-outer-table border="0" align="center" cellpadding="0" cellspacing="0" class="outer-table row" role="presentation" width="640" style="width:640px;max-width:640px;" data-module="freya-logo">
  <!-- freya-logo -->
  <tr>
    <td align="center">

<!-- Content -->
<table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="width:100%;max-width:100%;">
  <tr data-element="freya-brand-colors" data-label="Brand Colors">
    <td align="center">
      <!-- Brand Colors -->
        <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="width:100%;max-width:100%;">
          <tr>
            <td align="center" width="33.33%" height="10" data-bgcolor="1st Color" bgcolor="#2FA1D3" style="width:33.33%;"></td>
            <td align="center" width="33.33%" height="10" data-bgcolor="2nd Color" bgcolor="#E6192F" style="width:33.33%;"></td>
            <td align="center" width="33.33%" height="10" data-bgcolor="3rd Color" bgcolor="#2FA1D3" style="width:33.33%;"></td>
          </tr>
        </table>
        <!-- Brand Colors -->
    </td>
  </tr>
  <tr>
    <td height="40" style="font-size:40px;line-height:40px;" data-height="Spacing top">&nbsp;</td>
  </tr>
  <tr data-element="freya-logo" data-label="Logo">
    <td align="center">
      <table data-inner-table border="0" align="center" cellpadding="0" cellspacing="0" class="inner-table row container-padding" role="presentation" width="580" style="width:580px;max-width:580px;">
        <tr>
          <td align="left">
            <img style="width:100px;border:0px;display: inline!important;" src="https://osegbuecharles.com/cemcs-logo.png" width="160" border="0" editable="true" data-icon data-image-edit data-url data-label="Logo" data-image-width alt="logo">
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <tr>
    <td height="10" style="font-size:10px;line-height:10px;" data-height="Spacing bottom">&nbsp;</td>
  </tr>
</table>
<!-- Content -->

    </td>
  </tr>
  <!-- freya-logo -->
</table>

<table data-outer-table border="0" align="center" cellpadding="0" cellspacing="0" class="outer-table row container-padding" role="presentation" width="640" style="width:640px;max-width:640px;" data-module="freya-header-1">
  <!-- freya-header-1 -->
  <tr>
    <td align="center" bgcolor="#FFFFFF" data-bgcolor="BgColor" class="container-padding">

<table data-inner-table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation" class="inner-table row" width="580" style="width:580px;max-width:580px;">
  <tr>
    <td class="m-height15" height="30" style="font-size:30px;line-height:30px;" data-height="Spacing top">&nbsp;</td>
  </tr>
  <tr>
    <td align="center">
      <!-- content -->
      <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="width:100%;max-width:100%;">
      
        <tr data-element="freya-header-image" data-label="Header image">
          <td height="40" style="font-size:40px;line-height:40px;" data-height="Spacing under image">&nbsp;</td>
        </tr>
        <tr data-element="freya-header-headline" data-label="Header Headlines">
          <td class="type48" data-text-style="Header Headlines" align="left" style="font-family:'IBM Plex Sans Thai Looped',Arial,Helvetica,sans-serif;font-size:64px;line-height:64px;font-weight:300;font-style:normal;color:#325288;text-decoration:none;letter-spacing:0px;">
              <singleline>
                <div mc:edit data-text-edit>
                 <!--Hi There-->
                </div>
              </singleline>
          </td>
        </tr>
        <tr data-element="freya-header-headline" data-label="Header Headline">
          <td height="24" style="font-size:24px;line-height:24px;" data-height="Spacing under headline">&nbsp;</td>
        </tr>
        <tr data-element="freya-header-paragraph" data-label="Header Paragraph">
          <td data-text-style="Header Paragraph" align="left" style="font-family:'Roboto',Arial,Helvetica,sans-serif;font-size:18px;line-height:32px;font-weight:400;font-style:normal;color:#666666;text-decoration:none;letter-spacing:0px;">
              <singleline>
                <div mc:edit data-text-edit>
                  ${message}
                </div>
              </singleline>
          </td>
        </tr>
        <tr data-element="freya-header-paragraph" data-label="Header Paragraph">
          <td height="40" style="font-size:40px;line-height:40px;" data-height="Spacing under paragraph">&nbsp;</td>
        </tr>
        <tr data-element="freya-header-button" data-label="Header Button">
          <td align="center">
            <!-- Button -->
            <table border="0" cellspacing="0" cellpadding="0" role="presentation" align="left">
              <tr>
                <td align="center" data-border-radius-default="0,6,36" data-border-radius-custom="Header Button" data-bgcolor="Header Button" bgcolor="#24A19C" style="border-radius: 0px;">
            <!--[if (gte mso 9)|(IE)]>
              <table border="0" cellpadding="0" cellspacing="0" align="center">
                <tr>
                  <td align="center" width="34"></td>
                  <td align="center" height="60" style="height:60px;">
                  <![endif]-->
                    <singleline>
                        ${link!=null?'<a href="'+link+'" mc:edit data-button data-text-style="Header Button" style="font-family:Arial,Helvetica,sans-serif;font-size:18px;line-height:28px;font-weight:400;font-style:normal;color:#FFFFFF;text-decoration:none;letter-spacing:0px;padding: 16px 34px 16px 34px;display: inline-block;background-color: #E6192F;"><span>'+btntext+'</span></a>':''}                      
                    </singleline>
                  <!--[if (gte mso 9)|(IE)]>
                  </td>
                  <td align="center" width="34"></td>
                </tr>
              </table>
            <![endif]-->
                </td>
              </tr>
            </table>
            <!-- Buttons -->
          </td>
        </tr>
      </table>
      <!-- content -->
    </td>
  </tr>
  <tr>
    <td class="m-height15" height="30" style="font-size:30px;line-height:30px;" data-height="Spacing bottom">&nbsp;</td>
  </tr>
</table>

    </td>
  </tr>
  <tr>
    <td align="center">
      <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation" width="90.63%" style="width:90.63%;max-width:90.63%;">
        <tr>
          <td height="5" style="font-size:5px;line-height:5px;" bgcolor="#DDD2CC" data-bgcolor="Shadow Color">&nbsp;</td>
        </tr>
      </table>
    </td>
  </tr>
  <!-- freya-header-1 -->
</table>





<table data-outer-table border="0" align="center" cellpadding="0" cellspacing="0" class="outer-table row" role="presentation" width="640" style="width:640px;max-width:640px;" data-module="freya-footer">
  <!-- freya-footer -->
  <tr>
    <td align="center">



<table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="width:100%;max-width:100%;">
  <tr data-element="freya-brand-colors" data-label="Brand Colors">
    <td align="center">
      <!-- Brand Colors -->
        <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="width:100%;max-width:100%;">
          <tr>
            <td align="center" width="33.33%" height="10" data-bgcolor="1st Color" bgcolor="#2FA1D3" style="width:33.33%;"></td>
            <td align="center" width="33.33%" height="10" data-bgcolor="2nd Color" bgcolor="#E6192F" style="width:33.33%;"></td>
            <td align="center" width="33.33%" height="10" data-bgcolor="3rd Color" bgcolor="#2FA1D3" style="width:33.33%;"></td>
          </tr>
        </table>
        <!-- Brand Colors -->
    </td>
  </tr>
  <tr data-element="freya-footer-tags" data-label="Footer Tags">
    <td align="center" bgcolor="#FFFFFF" data-bgcolor="Footer BgColor">

      <table data-inner-table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation" class="inner-table row container-padding" width="580" style="width:580px;max-width:580px;">
        <tr>
          <td height="20" style="font-size:20px;line-height:20px;" data-height="Spacing under brand colors">&nbsp;</td>
        </tr>
        <tr data-element="freya-footer-permission-reminder" data-label="Permission reminder">
          <td data-text-style="Paragraphs" align="left" class="center-text" style="font-family:'Roboto',Arial,Helvetica,sans-serif;font-size:12px;line-height:28px;font-weight:400;font-style:normal;color:#333333;text-decoration:none;letter-spacing:0px;">
              <singleline>
                <div mc:edit data-text-edit>
                  You have received this email from Chevron CEMCS on behalf of the Chevron CEMCS exhibition site. 
                </div>
              </singleline>
          </td>
        </tr>
      
        <tr>
          <td height="30" style="font-size:30px;line-height:30px;" data-height="Spacing under tags">&nbsp;</td>
        </tr>
      </table>

    </td>
  </tr>
</table>

    </td>
  </tr>
  <tr class="hide-mobile">
    <td height="30" style="font-size:30px;line-height:30px;" data-height="Spacing bottom">&nbsp;</td>
  </tr>
  <!-- freya-footer -->
</table>

    </td>
  </tr><!-- Outer-Table -->
</table>

</body>
</html>

    `

    return html
}