/********************  START WEB APP   *********************************/

$( document ).ready(function() {
	
	$(".dashboard").show();
	$(".mercato").hide();
	$(".rosa").hide();
	
});


/********************************* Switching Page ***************************/

/* Dashboard */
$("#id_dashboard").click(function(){
	$(".dashboard").show();
	$(".mercato").hide();
	$(".rosa").hide();
});

/* Rosa */
$("#id_rosa").click(function(){
	$(".rosa").show();
	$(".dashboard").hide();
	$(".mercato").hide();
});

/* Mercato */
$("#id_mercato").click(function(){
	$(".dashboard").hide();
	$(".mercato").show();
	$(".rosa").hide();
});