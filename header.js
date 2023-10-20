let baseurl = document.currentScript.getAttribute('data-baseurl');
let basetitle = document.currentScript.getAttribute('data-title');
let baseacc = document.currentScript.getAttribute('data-acc');

document.write(`
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>`+basetitle+`</title>
	<meta name="description" content="FurFam is your dedicated partner for lost fur family. Equipped with our complimentary QR tags, your pets are always one-scan away.">
	<meta name="keywords" content="">
	<meta name="robots" content="" />
	<meta property="og:image" content="`+baseurl+`files/site_preview.jpg">
	<link rel="shortcut icon" href="`+baseurl+`files/img-favicon.png">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" crossorigin="anonymous" referrerpolicy="no-referrer" />
	<link href="`+baseurl+`files/main.css" rel="stylesheet" />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Gloock&family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet">
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="`+baseurl+`files/jquery.scrollTo-min.js"></script>
</head>
`);
