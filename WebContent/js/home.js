/********************  START WEB APP   *********************************/

var cookie = null;

$( document ).ready(function() {
	
	$("#btnEdit1").hide();
	$("#btnEdit2").hide();
	$("#btnEdit3").hide();
	$("#btnEdit4").hide();
	$("#btnEdit5").hide();
	$("#btnEdit6").hide();
	$("#btnEdit7").hide();
	$("#btnEdit8").hide();
	$("#btnEdit9").hide();
	$("#btnWrite1").hide();
	$("#btnWrite2").hide();
	$("#btnWrite3").hide();
	$("#btnWrite4").hide();
	$("#btnWrite5").hide();
	$("#btnWrite6").hide();
	$("#btnWrite7").hide();
	$("#btnWrite8").hide();
	$("#btnWrite9").hide();
	$("#btnClose1").hide();
	$("#btnClose2").hide();
	$("#btnClose3").hide();
	$("#btnClose4").hide();
	$("#btnClose5").hide();
	$("#btnClose6").hide();
	$("#btnClose7").hide();
	$("#btnClose8").hide();
	$("#btnClose9").hide();
	$("#upload1Block").hide();
	$("#upload2Block").hide();
	$("#upload3Block").hide();
	$("#upload4Block").hide();
	$("#upload5Block").hide();
	$("#upload6Block").hide();
	$("#upload7Block").hide();
	$("#upload8Block").hide();
	$("#upload9Block").hide();
	$("#navPublishTurnManager").hide();
	
	readVolumeAndNumber();
	
	/* GET COOKIE */
	cookie = getCookie("token");
	/* GET CONTROL */
	checkAuthorization(cookie);
	
});

function getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}

/********************************* ARTICLE 1 ***************************/

/* Edit button 1 */
$("#btnEdit1").click(function(){
		$('#collumn1').children('div[contenteditable="false"]').css('background','#8ecfff');
		$("#upload1Block").show();
		$('#upload1').css('background','#8ecfff');
		$('#figcaption1').css('background','#8ecfaf');
		$('#collumn1').children('.head').children('div[contenteditable="false"]').attr('contenteditable', true);
		$('#collumn1').children('div[contenteditable="false"]').attr('contenteditable', true);
		$('#collumn1').children('div').children('div[contenteditable="false"]').attr('contenteditable', true);
		$("#btnWrite1").show();
		$("#btnClose1").show();
});

/* Close button 1*/
$("#btnClose1").click(function(){
		$('#collumn1').children('div[contenteditable="true"]').css('background','#f4f4f4');
		$("#upload1Block").hide();
		$('#figcaption1').css('background','#f4f4f4');
		$('#collumn1').children('.head').children('div[contenteditable="true"]').attr('contenteditable', false);
		$('#collumn1').children('div[contenteditable="true"]').attr('contenteditable', false);
		$('#collumn1').children('div').children('div[contenteditable="true"]').attr('contenteditable', false);
		$("#btnWrite1").hide();
		$("#btnClose1").hide();
});

/* Write button 1 */
$("#btnWrite1").click(function(){
	var obj = {
		'volume' : $('.volume').text(),
		'number' : $('.number').text(),
		'article' : $('.article1').val(),
		'title' : $('div.headline.head.tit1').text(),
		'subtitle' : $('div.subheadline.head.sub1').text(),
		'paragraph' : [ {
			'one' : $('div.paragragh11').text(),
			'two' : $('div.paragragh12').text(),
			'three' : $('div.paragragh13').text()
		} ],
		'figure' : $('div#upload1').text(),
		'nameFigure' : $('div#figcaption1').text(),
		'sign' : $('div#sign1').text()
	};
	
	sendArticle(obj);
	
	$('#collumn1').children('div[contenteditable="true"]').css('background','#f4f4f4');
	$('#figcaption1').css('background','#f4f4f4');
	$('#collumn1').children('.head').children('div[contenteditable="true"]').attr('contenteditable', false);
	$('#collumn1').children('div[contenteditable="true"]').attr('contenteditable', false);	
	$('#collumn1').children('div').children('div[contenteditable="true"]').attr('contenteditable', false);
	$("#btnWrite1").hide();
	$("#btnClose1").hide();
	$('#upload1').css('background','#f4f4f4');
	$("img#img1").attr("src",$('div#upload1').text());
	$("#upload1Block").hide();
	editClick = true;
	
});	

/********************************* ARTICLE 2 ***************************/

/* Edit button 2 */
$("#btnEdit2").click(function(){
		$('#collumn2').children('div[contenteditable="false"]').css('background','#8ecfff');
		$("#upload2Block").show();
		$('#upload2').css('background','#8ecfff');
		$('#figcaption2').css('background','#8ecfaf');
		$('#collumn2').children('.head').children('div[contenteditable="false"]').attr('contenteditable', true);
		$('#collumn2').children('div[contenteditable="false"]').attr('contenteditable', true);
		$('#collumn2').children('div').children('div[contenteditable="false"]').attr('contenteditable', true);
		$("#btnWrite2").show();
		$("#btnClose2").show();
});

/* Close button 2 */
$("#btnClose2").click(function(){
		$('#collumn2').children('div[contenteditable="true"]').css('background','#f4f4f4');
		$("#upload2Block").hide();
		$('#figcaption2').css('background','#f4f4f4');
		$('#collumn2').children('.head').children('div[contenteditable="true"]').attr('contenteditable', false);
		$('#collumn2').children('div[contenteditable="true"]').attr('contenteditable', false);
		$('#collumn2').children('div').children('div[contenteditable="true"]').attr('contenteditable', false);
		$("#btnWrite2").hide();
		$("#btnClose2").hide();
});

/* Write button 2 */
$("#btnWrite2").click(function(){
	var obj = {
		'volume' : $('.volume').text(),
		'number' : $('.number').text(),
		'article' : $('.article2').val(),
		'title' : $('div.headline.head.tit2').text(),
		'subtitle' : $('div.subheadline.head.sub2').text(),
		'paragraph' : [ {
			'one' : $('div.paragragh21').text(),
			'two' : $('div.paragragh22').text(),
			'three' : $('div.paragragh23').text()
		} ],
		'figure' : $('div#upload2').text(),
		'nameFigure' : $('div#figcaption2').text(),
		'sign' : $('div#sign2').text()
	};
	
	sendArticle(obj);
	
	$('#collumn2').children('div[contenteditable="true"]').css('background','#f4f4f4');
	$('#figcaption2').css('background','#f4f4f4');
	$('#collumn2').children('.head').children('div[contenteditable="true"]').attr('contenteditable', false);
	$('#collumn2').children('div[contenteditable="true"]').attr('contenteditable', false);
	$('#collumn2').children('div').children('div[contenteditable="true"]').attr('contenteditable', false);
	$("#btnWrite2").hide();
	$("#btnClose2").hide();
	$('#upload2').css('background','#f4f4f4');
	$("img#img2").attr("src",$('div#upload2').text());
	$("#upload2Block").hide();
	editClick = true;
	
});	

/********************************* ARTICLE 3 ***************************/

/* Edit button 3 */
$("#btnEdit3").click(function(){
		$('#collumn3').children('div[contenteditable="false"]').css('background','#8ecfff');
		$("#upload3Block").show();
		$('#upload3').css('background','#8ecfff');
		$('#figcaption3').css('background','#8ecfaf');
		$('#collumn3').children('.head').children('div[contenteditable="false"]').attr('contenteditable', true);
		$('#collumn3').children('div[contenteditable="false"]').attr('contenteditable', true);
		$('#collumn3').children('div').children('div[contenteditable="false"]').attr('contenteditable', true);
		$("#btnWrite3").show();
		$("#btnClose3").show();
});

/* Edit button 3 */
$("#btnClose3").click(function(){
		$('#collumn3').children('div[contenteditable="true"]').css('background','#f4f4f4');
		$("#upload3Block").hide();
		$('#figcaption3').css('background','#f4f4f4');
		$('#collumn3').children('.head').children('div[contenteditable="true"]').attr('contenteditable', false);
		$('#collumn3').children('div[contenteditable="true"]').attr('contenteditable', false);
		$('#collumn3').children('div').children('div[contenteditable="true"]').attr('contenteditable', false);
		$("#btnWrite3").hide();
		$("#btnClose3").hide();
});

/* Write button 3 */
$("#btnWrite3").click(function(){
	var obj = {
		'volume' : $('.volume').text(),
		'number' : $('.number').text(),
		'article' : $('.article3').val(),
		'title' : $('div.headline.head.tit3').text(),
		'subtitle' : $('div.subheadline.head.sub3').text(),
		'paragraph' : [ {
			'one' : $('div.paragragh31').text(),
			'two' : $('div.paragragh32').text(),
			'three' : $('div.paragragh33').text()
		} ],
		'figure' : $('div#upload3').text(),
		'nameFigure' : $('div#figcaption3').text(),
		'sign' : $('div#sign3').text()
	};
	
	sendArticle(obj);
	
	$('#collumn3').children('div[contenteditable="true"]').css('background','#f4f4f4');
	$('#figcaption3').css('background','#f4f4f4');
	$('#collumn3').children('.head').children('div[contenteditable="true"]').attr('contenteditable', false);
	$('#collumn3').children('div[contenteditable="true"]').attr('contenteditable', false);
	$('#collumn3').children('div').children('div[contenteditable="true"]').attr('contenteditable', false);
	$("#btnWrite3").hide();
	$("#btnClose3").hide();
	$('#upload3').css('background','#f4f4f4');
	$("img#img3").attr("src",$('div#upload3').text());
	$("#upload3Block").hide();
	editClick = true;
	
});	

/********************************* ARTICLE 4 ***************************/

/* Edit button 4 */
$("#btnEdit4").click(function(){
		$('#collumn4').children('div[contenteditable="false"]').css('background','#8ecfff');
		$("#upload4Block").show();
		$('#upload4').css('background','#8ecfff');
		$('#figcaption4').css('background','#8ecfaf');
		$('#collumn4').children('.head').children('div[contenteditable="false"]').attr('contenteditable', true);
		$('#collumn4').children('div[contenteditable="false"]').attr('contenteditable', true);
		$('#collumn4').children('div').children('div[contenteditable="false"]').attr('contenteditable', true);
		$("#btnWrite4").show();
		$("#btnClose4").show();
});
	
/* Close button 4 */
$("#btnClose4").click(function(){
		$('#collumn4').children('div[contenteditable="true"]').css('background','#f4f4f4');
		$("#upload4Block").hide();
		$('#figcaption4').css('background','#f4f4f4');
		$('#collumn4').children('.head').children('div[contenteditable="true"]').attr('contenteditable', false);
		$('#collumn4').children('div[contenteditable="true"]').attr('contenteditable', false);
		$('#collumn4').children('div').children('div[contenteditable="true"]').attr('contenteditable', false);
		$("#btnWrite4").hide();
		$("#btnClose4").hide();
});

/* Write button 4 */
$("#btnWrite4").click(function(){
	var obj = {
		'volume' : $('.volume').text(),
		'number' : $('.number').text(),
		'article' : $('.article4').val(),
		'title' : $('div.headline.head.tit4').text(),
		'subtitle' : $('div.subheadline.head.sub4').text(),
		'paragraph' : [ {
			'one' : $('div.paragragh41').text(),
			'two' : $('div.paragragh42').text(),
			'three' : $('div.paragragh43').text()
		} ],
		'figure' : $('div#upload4').text(),
		'nameFigure' : $('div#figcaption4').text(),
		'sign' : $('div#sign4').text()
	};
	
	sendArticle(obj);
	
	$('#collumn4').children('div[contenteditable="true"]').css('background','#f4f4f4');
	$('#figcaption4').css('background','#f4f4f4');
	$('#collumn4').children('.head').children('div[contenteditable="true"]').attr('contenteditable', false);
	$('#collumn4').children('div[contenteditable="true"]').attr('contenteditable', false);
	$('#collumn4').children('div').children('div[contenteditable="true"]').attr('contenteditable', false);
	$("#btnWrite4").hide();
	$("#btnClose4").hide();
	$('#upload4').css('background','#f4f4f4');
	$("img#img4").attr("src",$('div#upload4').text());
	$("#upload4Block").hide();
	editClick = true;
	
});	

/********************************* ARTICLE 5 ***************************/

/* Edit button 5 */
$("#btnEdit5").click(function(){
		$('#collumn5').children('div[contenteditable="false"]').css('background','#8ecfff');
		$("#upload5Block").show();
		$('#upload5').css('background','#8ecfff');
		$('#figcaption5').css('background','#8ecfaf');
		$('#collumn5').children('.head').children('div[contenteditable="false"]').attr('contenteditable', true);
		$('#collumn5').children('div[contenteditable="false"]').attr('contenteditable', true);
		$('#collumn5').children('div').children('div[contenteditable="false"]').attr('contenteditable', true);
		$("#btnWrite5").show();
		$("#btnClose5").show();
});
	
/* Close button 5 */
$("#btnClose5").click(function(){
		$('#collumn5').children('div[contenteditable="true"]').css('background','#f4f4f4');
		$("#upload5Block").hide();
		$('#figcaption5').css('background','#f4f4f4');
		$('#collumn5').children('.head').children('div[contenteditable="true"]').attr('contenteditable', false);
		$('#collumn5').children('div[contenteditable="true"]').attr('contenteditable', false);
		$('#collumn5').children('div').children('div[contenteditable="true"]').attr('contenteditable', false);
		$("#btnWrite5").hide();
		$("#btnClose5").hide();
});

/* Write button 5 */
$("#btnWrite5").click(function(){
	var obj = {
		'volume' : $('.volume').text(),
		'number' : $('.number').text(),
		'article' : $('.article5').val(),
		'title' : $('div.headline.head.tit5').text(),
		'subtitle' : $('div.subheadline.head.sub5').text(),
		'paragraph' : [ {
			'one' : $('div.paragragh51').text(),
			'two' : $('div.paragragh52').text(),
			'three' : $('div.paragragh53').text()
		} ],
		'figure' : $('div#upload5').text(),
		'nameFigure' : $('div#figcaption5').text(),
		'sign' : $('div#sign5').text()
	};
	
	sendArticle(obj);
	
	$('#collumn5').children('div[contenteditable="true"]').css('background','#f4f4f4');
	$('#figcaption5').css('background','#f4f4f4');
	$('#collumn5').children('.head').children('div[contenteditable="true"]').attr('contenteditable', false);
	$('#collumn5').children('div[contenteditable="true"]').attr('contenteditable', false);
	$('#collumn5').children('div').children('div[contenteditable="true"]').attr('contenteditable', false);
	$("#btnWrite5").hide();
	$("#btnClose5").hide();
	$('#upload5').css('background','#f4f4f4');
	$("img#img5").attr("src",$('div#upload5').text());
	$("#upload5Block").hide();
	editClick = true;
	
});	

/********************************* ARTICLE 6 ***************************/

/* Edit button 6 */
$("#btnEdit6").click(function(){
		$('#collumn6').children('div[contenteditable="false"]').css('background','#8ecfff');
		$("#upload6Block").show();
		$('#upload6').css('background','#8ecfff');
		$('#figcaption6').css('background','#8ecfaf');
		$('#collumn6').children('.head').children('div[contenteditable="false"]').attr('contenteditable', true);
		$('#collumn6').children('div[contenteditable="false"]').attr('contenteditable', true);
		$('#collumn6').children('div').children('div[contenteditable="false"]').attr('contenteditable', true);
		$("#btnWrite6").show();
		$("#btnClose6").show();
});
	
/* Close button 6 */
$("#btnClose6").click(function(){
		$('#collumn6').children('div[contenteditable="true"]').css('background','#f4f4f4');
		$("#upload6Block").hide();
		$('#figcaption6').css('background','#f4f4f4');
		$('#collumn6').children('.head').children('div[contenteditable="true"]').attr('contenteditable', false);
		$('#collumn6').children('div[contenteditable="true"]').attr('contenteditable', false);
		$('#collumn6').children('div').children('div[contenteditable="true"]').attr('contenteditable', false);
		$("#btnWrite6").hide();
		$("#btnClose6").hide();
});

/* Write button 6 */
$("#btnWrite6").click(function(){
	var obj = {
		'volume' : $('.volume').text(),
		'number' : $('.number').text(),
		'article' : $('.article6').val(),
		'title' : $('div.headline.head.tit6').text(),
		'subtitle' : $('div.subheadline.head.sub6').text(),
		'paragraph' : [ {
			'one' : $('div.paragragh61').text(),
			'two' : $('div.paragragh62').text(),
			'three' : $('div.paragragh63').text()
		} ],
		'figure' : $('div#upload6').text(),
		'nameFigure' : $('div#figcaption6').text(),
		'sign' : $('div#sign6').text()
	};
	
	sendArticle(obj);
	
	$('#collumn6').children('div[contenteditable="true"]').css('background','#f4f4f4');
	$('#figcaption6').css('background','#f4f4f4');
	$('#collumn6').children('.head').children('div[contenteditable="true"]').attr('contenteditable', false);
	$('#collumn6').children('div[contenteditable="true"]').attr('contenteditable', false);
	$('#collumn6').children('div').children('div[contenteditable="true"]').attr('contenteditable', false);
	$("#btnWrite6").hide();
	$("#btnClose6").hide();
	$('#upload6').css('background','#f4f4f4');
	$("img#img6").attr("src",$('div#upload6').text());
	$("#upload6Block").hide();
	editClick = true;
	
});	

/********************************* ARTICLE 7 ***************************/

/* Edit button 7 */
$("#btnEdit7").click(function(){
		$('#collumn7').children('div[contenteditable="false"]').css('background','#8ecfff');
		$("#upload7Block").show();
		$('#upload7').css('background','#8ecfff');
		$('#figcaption7').css('background','#8ecfaf');
		$('#collumn7').children('.head').children('div[contenteditable="false"]').attr('contenteditable', true);
		$('#collumn7').children('div[contenteditable="false"]').attr('contenteditable', true);
		$('#collumn7').children('div').children('div[contenteditable="false"]').attr('contenteditable', true);
		$("#btnWrite7").show();
		$("#btnClose7").show();
});

/* Close button 7 */
$("#btnClose7").click(function(){
		$('#collumn7').children('div[contenteditable="true"]').css('background','#f4f4f4');
		$("#upload7Block").hide();
		$('#figcaption7').css('background','#f4f4f4');
		$('#collumn7').children('.head').children('div[contenteditable="true"]').attr('contenteditable', false);
		$('#collumn7').children('div[contenteditable="true"]').attr('contenteditable', false);
		$('#collumn7').children('div').children('div[contenteditable="true"]').attr('contenteditable', false);
		$("#btnWrite7").hide();
		$("#btnClose7").hide();
});

/* Write button 7 */
$("#btnWrite7").click(function(){
	var obj = {
		'volume' : $('.volume').text(),
		'number' : $('.number').text(),
		'article' : $('.article7').val(),
		'title' : $('div.headline.head.tit7').text(),
		'subtitle' : $('div.subheadline.head.sub7').text(),
		'paragraph' : [ {
			'one' : $('div.paragragh71').text(),
			'two' : $('div.paragragh72').text(),
			'three' : $('div.paragragh73').text()
		} ],
		'figure' : $('div#upload7').text(),
		'nameFigure' : $('div#figcaption7').text(),
		'sign' : $('div#sign7').text()
	};
	
	sendArticle(obj);
	
	$('#collumn7').children('div[contenteditable="true"]').css('background','#f4f4f4');
	$('#figcaption7').css('background','#f4f4f4');
	$('#collumn7').children('.head').children('div[contenteditable="true"]').attr('contenteditable', false);
	$('#collumn7').children('div[contenteditable="true"]').attr('contenteditable', false);
	$('#collumn7').children('div').children('div[contenteditable="true"]').attr('contenteditable', false);
	$("#btnWrite7").hide();
	$("#btnClose7").hide();
	$('#upload7').css('background','#f4f4f4');
	$("img#img7").attr("src",$('div#upload7').text());
	$("#upload7Block").hide();
	editClick = true;
	
});	

/********************************* ARTICLE 8 ***************************/

/* Edit button 8 */
$("#btnEdit8").click(function(){
		$('#collumn8').children('div[contenteditable="false"]').css('background','#8ecfff');
		$("#upload8Block").show();
		$('#upload8').css('background','#8ecfff');
		$('#figcaption8').css('background','#8ecfaf');
		$('#collumn8').children('.head').children('div[contenteditable="false"]').attr('contenteditable', true);
		$('#collumn8').children('div[contenteditable="false"]').attr('contenteditable', true);
		$('#collumn8').children('div').children('div[contenteditable="false"]').attr('contenteditable', true);
		$("#btnWrite8").show();
		$("#btnClose8").show();
});
	
/* Close button 8 */
$("#btnClose8").click(function(){
		$('#collumn8').children('div[contenteditable="true"]').css('background','#f4f4f4');
		$("#upload8Block").hide();
		$('#figcaption8').css('background','#f4f4f4');
		$('#collumn1').children('.head').children('div[contenteditable="true"]').attr('contenteditable', false);
		$('#collumn8').children('div[contenteditable="true"]').attr('contenteditable', false);
		$('#collumn8').children('div').children('div[contenteditable="true"]').attr('contenteditable', false);
		$("#btnWrite8").hide();
		$("#btnClose8").hide();
});

/* Write button 8 */
$("#btnWrite8").click(function(){
	var obj = {
		'volume' : $('.volume').text(),
		'number' : $('.number').text(),
		'article' : $('.article8').val(),
		'title' : $('div.headline.head.tit8').text(),
		'subtitle' : $('div.subheadline.head.sub8').text(),
		'paragraph' : [ {
			'one' : $('div.paragragh81').text(),
			'two' : $('div.paragragh82').text(),
			'three' : $('div.paragragh83').text()
		} ],
		'figure' : $('div#upload8').text(),
		'nameFigure' : $('div#figcaption8').text(),
		'sign' : $('div#sign8').text()
	};
	
	sendArticle(obj);
	
	$('#collumn8').children('div[contenteditable="true"]').css('background','#f4f4f4');
	$('#figcaption8').css('background','#f4f4f4');
	$('#collumn8').children('.head').children('div[contenteditable="true"]').attr('contenteditable', false);
	$('#collumn8').children('div[contenteditable="true"]').attr('contenteditable', false);
	$('#collumn8').children('div').children('div[contenteditable="true"]').attr('contenteditable', false);
	$("#btnWrite8").hide();
	$("#btnClose8").hide();
	$('#upload8').css('background','#f4f4f4');
	$("img#img8").attr("src",$('div#upload8').text());
	$("#upload8Block").hide();
	editClick = true;
	
});	

/********************************* ARTICLE 9 ***************************/

/* Edit button 9 */
$("#btnEdit9").click(function(){
		$('#collumn9').children('div[contenteditable="false"]').css('background','#8ecfff');
		$("#upload9Block").show();
		$('#upload9').css('background','#8ecfff');
		$('#figcaption9').css('background','#8ecfaf');
		$('#collumn9').children('.head').children('div[contenteditable="false"]').attr('contenteditable', true);
		$('#collumn9').children('div[contenteditable="false"]').attr('contenteditable', true);
		$('#collumn9').children('div').children('div[contenteditable="false"]').attr('contenteditable', true);
		$("#btnWrite9").show();
		$("#btnClose9").show();
});
	
/* Close button 9 */
$("#btnClose9").click(function(){
		$('#collumn9').children('div[contenteditable="true"]').css('background','#f4f4f4');
		$("#upload9Block").hide();
		$('#figcaption9').css('background','#f4f4f4');
		$('#collumn9').children('.head').children('div[contenteditable="true"]').attr('contenteditable', false);
		$('#collumn9').children('div[contenteditable="true"]').attr('contenteditable', false);
		$('#collumn9').children('div').children('div[contenteditable="true"]').attr('contenteditable', false);
		$("#btnWrite9").hide();
		$("#btnClose9").hide();
});

/* Write button 9 */
$("#btnWrite9").click(function(){
	var obj = {
		'volume' : $('.volume').text(),
		'number' : $('.number').text(),
		'article' : $('.article9').val(),
		'title' : $('div.headline.head.tit9').text(),
		'subtitle' : $('div.subheadline.head.sub9').text(),
		'paragraph' : [ {
			'one' : $('div.paragragh91').text(),
			'two' : $('div.paragragh92').text(),
			'three' : $('div.paragragh93').text()
		} ],
		'figure' : $('div#upload9').text(),
		'nameFigure' : $('div#figcaption9').text(),
		'sign' : $('div#sign9').text()
	};
	
	sendArticle(obj);
	
	$('#collumn9').children('div[contenteditable="true"]').css('background','#f4f4f4');
	$('#figcaption9').css('background','#f4f4f4');
	$('#collumn9').children('.head').children('div[contenteditable="true"]').attr('contenteditable', false);
	$('#collumn9').children('div[contenteditable="true"]').attr('contenteditable', false);
	$('#collumn9').children('div').children('div[contenteditable="true"]').attr('contenteditable', false);
	$("#btnWrite9").hide();
	$("#btnClose9").hide();
	$('#upload9').css('background','#f4f4f4');
	$("img#img9").attr("src",$('div#upload9').text());
	$("#upload9Block").hide();
	editClick = true;
	
});

/* Send to DB the article */

function sendArticle(obj) {
	
	console.log(obj);
	
	$.ajax({
	    url : 'chargeDB',
	    headers: { 'Authorization': "Bearer " + document.cookie.split("=")[1] },
	    type : 'POST',
	    dataType: 'json',
	    contentType : 'application/json',
	    data : JSON.stringify(obj)
	}).done(function(response, textStatus) {
		// Qui passa solo se ricevo dati dal backend [readNewspaper]
	});
}


/* Images ( browse images uploaded )*/

function btnImages() {
$("#imagesList").empty()
	
	$.ajax({
	    url : 'listImages',
	    type : 'GET',
	    dataType: 'json',
	    contentType : 'application/json',
	    async: false
	}).done(function(response, data) {
		
		for (var i = 0; i < response.length; i++) {
			$("#imagesList").append('<tr><td>' + i + '</td><td>' + response[i] + 
				'</td><td style="cursor: pointer;"><button style="cursor: pointer;" class="btnView" data-toggle="modal" data-target="#previewModal"><i class="fas fa-image mr-2 grey-text" aria-hidden="true"></i></button></td>'+
				'<td><button style="cursor: pointer;" class="btnDelete" data-dismiss="modal" data-toggle="modal" data-target="#deleteModal"><i class="fas fa-trash mr-2 grey-text" aria-hidden="true"></i></button></td>');
	    }
	});
}

/* View Images */

$("#images").on('click','.btnView',function(){
    // get the current row
    var currentRow=$(this).closest("tr");
    var namePicture=currentRow.find("td:eq(1)").text(); // get current row 2nd TD
    // Preview
    $("img#previewImage").attr("src", 'images/' + namePicture);
});

/* Delete Images */

$("#images").on('click','.btnDelete',function(){
    // get the current row
    var currentRow=$(this).closest("tr"); 
    var namePicture=currentRow.find("td:eq(1)").text(); // get current row 2nd TD
    
    $("#btnDeleteImage").click(function(){
    	$.ajax({
    	    url : 'deleteImage',
    	    headers: { 'Authorization': "Bearer " + document.cookie.split("=")[1] },
    	    type : 'POST',
    	    dataType: 'json',
    	    contentType : 'application/json',
    	    data : namePicture
        }).done(function(response, data) {
        });
    }); 
});


/* Publish */

$("#btnPublish").click(function(){
	
	var volume = $('.volume').text();
	var numero = $('.number').text();
	var date = $.datepicker.formatDate('dd M yy', new Date());
	
	var obj = {
			'volume' : volume,
			'number' : numero,
			'date' : date
	};
	
	$.ajax({
	    url : 'publish',
	    type : 'POST',
	    headers: { 'Authorization': "Bearer " + document.cookie.split("=")[1] },
	    dataType: 'json',
	    contentType : 'application/json',
	    async: false,
	    data : JSON.stringify(obj),
	    success: function (response, data) {
	    	readNewspaper(volume, numero);
	    }
	});
});

/* Turn Page */

$("#btnTurn").click(function(){
	readNewspaper($('.volume').text(), $('.number').text());
});

/* Logout */

$("#btnLogout").click(function(){
	/* Delete cookie */
	document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
	/* Reload the page */
	document.location.reload(true)
});

/* GET COOKIE */
function checkAuthorization(cookie) {
if(cookie != null) {
/* OnkeyDown press a combination of keyboard to edit the html

function KeyPress(e) {
	
    var keyboard = window.event? event : e
    		
    // Ability the editable property
    if ( keyboard.shiftKey && keyboard.keyCode == 77  ) { // shift + m
    */
		
    	$('#volume').css('background','#8ecfff');
    	$('#number').css('background','#8ecfff');
    	$('span[contenteditable="false"]').attr('contenteditable', true);
		$("#navPublishTurnManager").show();
		$("#btnEdit1").show();
		$("#btnEdit2").show();
		$("#btnEdit3").show();
		$("#btnEdit4").show();
		$("#btnEdit5").show();
		$("#btnEdit6").show();
		$("#btnEdit7").show();
		$("#btnEdit8").show();
		$("#btnEdit9").show();
		$("#upload1Block").hide();
		$("#upload2Block").hide();	
		$("#upload3Block").hide();
		$("#upload4Block").hide();
		$("#upload5Block").hide();	
		$("#upload6Block").hide();
		$("#upload7Block").hide();
		$("#upload8Block").hide();	
		$("#upload9Block").hide();
    }
    		
	if(cookie == null) {

    /* Disability the editable property
    if (keyboard.ctrlKey && keyboard.keyCode == 90 ) {  // ctrl + z
    */
    	
    	$('#volume').css('background','#f4f4f4');
    	$('#number').css('background','#f4f4f4');
    	$('span[contenteditable="true"]').attr('contenteditable', false);
		$("#navPublishTurnManager").hide();
		$("#btnEdit1").hide();
		$("#btnEdit2").hide();
		$("#btnEdit3").hide();
		$("#btnEdit4").hide();
		$("#btnEdit5").hide();
		$("#btnEdit6").hide();
		$("#btnEdit7").hide();
		$("#btnEdit8").hide();
		$("#btnEdit9").hide();
		$("#btnWrite1").hide();
		$("#btnWrite2").hide();
		$("#btnWrite3").hide();
		$("#btnWrite4").hide();
		$("#btnWrite5").hide();
		$("#btnWrite6").hide();
		$("#btnWrite7").hide();
		$("#btnWrite8").hide();
		$("#btnWrite9").hide();
		$('#upload1').css('background','#f4f4f4');
		$('#upload2').css('background','#f4f4f4');
		$('#upload3').css('background','#f4f4f4');
		$('#upload4').css('background','#f4f4f4');
		$('#upload5').css('background','#f4f4f4');
		$('#upload6').css('background','#f4f4f4');
		$('#upload7').css('background','#f4f4f4');
		$('#upload8').css('background','#f4f4f4');
		$('#upload9').css('background','#f4f4f4');
		$("#upload1Block").hide();
		$("#upload2Block").hide();
		$("#upload3Block").hide();
		$("#upload4Block").hide();
		$("#upload5Block").hide();
		$("#upload6Block").hide();
		$("#upload7Block").hide();
		$("#upload8Block").hide();
		$("#upload9Block").hide();
		
		/* Disable property editable */
		$('div[contenteditable="true"]').attr('contenteditable', false);
		$('#collumn1').children('div[contenteditable="true"]').css('background','#f4f4f4');
		$('#collumn2').children('div[contenteditable="true"]').css('background','#f4f4f4');
		$('#collumn3').children('div[contenteditable="true"]').css('background','#f4f4f4');
		$('#collumn4').children('div[contenteditable="true"]').css('background','#f4f4f4');
		$('#collumn5').children('div[contenteditable="true"]').css('background','#f4f4f4');
		$('#collumn6').children('div[contenteditable="true"]').css('background','#f4f4f4');
		$('#collumn7').children('div[contenteditable="true"]').css('background','#f4f4f4');
		$('#collumn8').children('div[contenteditable="true"]').css('background','#f4f4f4');
		$('#collumn9').children('div[contenteditable="true"]').css('background','#f4f4f4');
		$('#figcaption1').css('background','#f4f4f4');
		$('#figcaption2').css('background','#f4f4f4');
		$('#figcaption3').css('background','#f4f4f4');
		$('#figcaption4').css('background','#f4f4f4');
		$('#figcaption5').css('background','#f4f4f4');
		$('#figcaption6').css('background','#f4f4f4');
		$('#figcaption7').css('background','#f4f4f4');
		$('#figcaption8').css('background','#f4f4f4');
		$('#figcaption9').css('background','#f4f4f4');
		editClick = true;
		
		/* Reset dirty setting unsaved on the newspaper */
		/* Da provare se non necessitiamo il reload*/
		//readVolumeAndNumber();
   // }
   }
}
/* Listener of the keyboard */
//document.onkeydown = KeyPress;