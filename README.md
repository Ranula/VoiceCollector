Change to add a ssl sticker on the site

Add this before your </HEAD> tag
<script type="text/javascript">//<![CDATA[
var tlJsHost = ((window.location.protocol == "https:") ? "https://secure.comodo.com/" : "http://www.trustlogo.com/");
document.write(unescape("%3Cscript src='" + tlJsHost + "trustlogo/javascript/trustlogo.js' type='text/javascript'%3E%3C/script%3E"));
//]]>
</script>

Add this before your </BODY> tag
<script language="JavaScript" type="text/javascript">
TrustLogo("https://sinhalaassistant.projects.mrt.ac.lk/api/comodo_secure_seal_100x85_transp.png", "SC5", "none");
</script>
<a href="https://www.instantssl.com/ssl-certificate.html" id="comodoTL">Platinum SSL</a>
