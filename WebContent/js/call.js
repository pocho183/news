/* Read Volume and Number */

function readVolumeAndNumber() {
	
	var volume = "";
	var number = "";
	
	$.ajax({
	    url : 'readVolumeAndNumber',
	    type : 'POST',
	    dataType: 'json',
	    contentType : 'application/json',
	}) .done(function(response) {
		
	    	volume = response.volume;
	    	number = response.number;

	    	/* Read article published */
	    	$('.volume').text(volume);
	    	$('.number').text(number);

	    	/* Read the article according number and volume */
	    	readNewspaper($('.volume').text(), $('.number').text());
	    });
}


/* Read Newspaper */

function readNewspaper(volume, numero) {
	
	var shortObj = { 'volume' :volume, 'number' : numero };
		
    $.ajax({
	    url : 'readArticle',
	    type : 'POST',
	    dataType: 'json',
	    contentType : 'application/json',
	    data : JSON.stringify(shortObj)
    }).done(function(response, data) {			
    	//console.log(JSON.stringify(response));    	
		$.each(response, function (i, item) {
		    for (var i in item) {
		        var article = JSON.stringify(item.article);
		        publicArticle(article, item);
		        break;
		     }
		 });

		function publicArticle(article, item) {
			
			switch(article) {
			
			case ('1'):
				/* Article 1 */
				if(item != null) {
			    	// Set article 1
				    $('div.headline.head.tit1').text(item.title);
				    $('div.subheadline.head.sub1').text(item.subtitle);
				    $('div.paragragh11').text(item.paragraph[0].one);
				    $('div.paragragh12').text(item.paragraph[0].two);
				    $('div.paragragh13').text(item.paragraph[0].three);
				    $('div#upload1').text(item.figure);
				    $('div#figcaption1').text(item.nameFigure);
				    $('div#sign1').text(item.sign);
				    if(item.figure != "") {
					    $("img#img1").attr("src",item.figure);
				        $('#twitter1').attr('href', 'https://twitter.com/intent/tweet?url=https://seriebi.it/' + $("img#img1").attr('src') + '&amp;via=seriebi;hashtags=seriebi;text=' + $("div.tit1").text() + ' - ' + $("div.sub1").text());
				        $('#facebook1').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=https://seriebi.it/' + $("img#img1").attr('src') + '&quote=' + $("div.tit1").text() + ' - ' + $("div.sub1").text());
				    }else {
				    	$("img#img1").css('display','none');
				    	$('#twitter1').attr('href', 'https://twitter.com/intent/tweet?url=https://seriebi.it&amp;via=seriebi;hashtags=seriebi;text=' + $("div.tit1").text() + ' - ' + $("div.sub1").text());
				    	$('#facebook1').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=https://seriebi.it&quote=' + $("div.tit1").text() + ' - ' + $("div.sub1").text());
				    }
				}else {
					$('div.headline.head.tit1').text("");
				    $('div.subheadline.head.sub1').text("");
				    $('div.paragragh11').text("");
				    $('div.paragragh12').text("");
				    $('div.paragragh13').text("");
				    $('div#upload1').text("");
				    $('div#figcaption1').text("");
				    $('div#sign1').text("");
				}
				break;
				
			case ('2'):
				/* Article 2 */
				if(item != null) {
			    	// Set article 2
				    $('div.headline.head.tit2').text(item.title);
				    $('div.subheadline.head.sub2').text(item.subtitle);
				    $('div.paragragh21').text(item.paragraph[0].one);
				    $('div.paragragh22').text(item.paragraph[0].two);
				    $('div.paragragh23').text(item.paragraph[0].three);
				    $('div#upload2').text(item.figure);
				    $('div#figcaption2').text(item.nameFigure);
				    $('div#sign2').text(item.sign);
				    if(item.figure != "") {
					    $("img#img2").attr("src",item.figure);
				        $('#twitter2').attr('href', 'https://twitter.com/intent/tweet?url=https://seriebi.it/' + $("img#img2").attr('src') + '&amp;via=seriebi;hashtags=seriebi;text=' + $("div.tit2").text() + ' - ' + $("div.sub2").text());
				        $('#facebook2').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=https://seriebi.it/' + $("img#img2").attr('src') + '&quote=' + $("div.tit2").text() + ' - ' + $("div.sub2").text());
				    }else {
				    	$("img#img2").css('display','none');
				    	$('#twitter2').attr('href', 'https://twitter.com/intent/tweet?url=https://seriebi.it&amp;via=seriebi;hashtags=seriebi;text=' + $("div.tit2").text() + ' - ' + $("div.sub2").text());
				    	$('#facebook2').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=https://seriebi.it&quote=' + $("div.tit2").text() + ' - ' + $("div.sub2").text());
				    }
				}else {
					$('div.headline.head.tit2').text("");
				    $('div.subheadline.head.sub2').text("");
				    $('div.paragragh21').text("");
				    $('div.paragragh22').text("");
				    $('div.paragragh23').text("");
				    $('div#upload2').text("");
				    $('div#figcaption2').text("");
				    $('div#sign2').text("");
				}
				break;
				
			case ('3'):
				/* Article 3 */
				if(item != null) {
			    	// Set article 3
				    $('div.headline.head.tit3').text(item.title);
				    $('div.subheadline.head.sub3').text(item.subtitle);
				    $('div.paragragh31').text(item.paragraph[0].one);
				    $('div.paragragh32').text(item.paragraph[0].two);
				    $('div.paragragh33').text(item.paragraph[0].three);
				    $('div#upload3').text(item.figure);
				    $('div#figcaption3').text(item.nameFigure);
				    $('div#sign3').text(item.sign);
				    if(item.figure != "") {
					    $("img#img3").attr("src",item.figure);
				        $('#twitter3').attr('href', 'https://twitter.com/intent/tweet?url=https://seriebi.it/' + $("img#img3").attr('src') + '&amp;via=seriebi;hashtags=seriebi;text=' + $("div.tit3").text() + ' - ' + $("div.sub3").text());
				        $('#facebook3').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=https://seriebi.it/' + $("img#img3").attr('src') + '&quote=' + $("div.tit3").text() + ' - ' + $("div.sub3").text());
				    }else {
				    	$("img#img3").css('display','none');
				    	$('#twitter3').attr('href', 'https://twitter.com/intent/tweet?url=https://seriebi.it&amp;via=seriebi;hashtags=seriebi;text=' + $("div.tit3").text() + ' - ' + $("div.sub3").text());
				    	$('#facebook3').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=https://seriebi.it&quote=' + $("div.tit3").text() + ' - ' + $("div.sub3").text());
				    }
				}else {
					$('div.headline.head.tit3').text("");
				    $('div.subheadline.head.sub3').text("");
				    $('div.paragragh31').text("");
				    $('div.paragragh32').text("");
				    $('div.paragragh33').text("");
				    $('div#upload3').text("");
				    $('div#figcaption3').text("");
				    $('div#sign3').text("");
				}
				break;
				
			case ('4'):
				/* Article 4 */
				if(item != null) {
			    	// Set article 4
				    $('div.headline.head.tit4').text(item.title);
				    $('div.subheadline.head.sub4').text(item.subtitle);
				    $('div.paragragh41').text(item.paragraph[0].one);
				    $('div.paragragh42').text(item.paragraph[0].two);
				    $('div.paragragh43').text(item.paragraph[0].three);
				    $('div#upload4').text(item.figure);
				    $('div#figcaption4').text(item.nameFigure);
				    $('div#sign4').text(item.sign);
				    if(item.figure != "") {
					    $("img#img4").attr("src",item.figure);
				        $('#twitter4').attr('href', 'https://twitter.com/intent/tweet?url=https://seriebi.it/' + $("img#img4").attr('src') + '&amp;via=seriebi;hashtags=seriebi;text=' + $("div.tit4").text() + ' - ' + $("div.sub4").text());
				        $('#facebook4').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=https://seriebi.it/' + $("img#img4").attr('src') + '&quote=' + $("div.tit4").text() + ' - ' + $("div.sub4").text());
				    }else {
				    	$("img#img4").css('display','none');
				    	$('#twitter4').attr('href', 'https://twitter.com/intent/tweet?url=https://seriebi.it&amp;via=seriebi;hashtags=seriebi;text=' + $("div.tit4").text() + ' - ' + $("div.sub4").text());
				    	$('#facebook4').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=https://seriebi.it&quote=' + $("div.tit4").text() + ' - ' + $("div.sub4").text());
				    }
				}else {
					$('div.headline.head.tit4').text("");
				    $('div.subheadline.head.sub4').text("");
				    $('div.paragragh41').text("");
				    $('div.paragragh42').text("");
				    $('div.paragragh43').text("");
				    $('div#upload4').text("");
				    $('div#figcaption4').text("");
				    $('div#sign4').text("");
				}
				break;
				
			case ('5'):
				/* Article 5 */
				if(item != null) {
			    	// Set article 5
				    $('div.headline.head.tit5').text(item.title);
				    $('div.subheadline.head.sub5').text(item.subtitle);
				    $('div.paragragh51').text(item.paragraph[0].one);
				    $('div.paragragh52').text(item.paragraph[0].two);
				    $('div.paragragh53').text(item.paragraph[0].three);
				    $('div#upload5').text(item.figure);
				    $('div#figcaption5').text(item.nameFigure);
				    $('div#sign5').text(item.sign);
				    if(item.figure != "") {
					    $("img#img5").attr("src",item.figure);
				        $('#twitter5').attr('href', 'https://twitter.com/intent/tweet?url=https://seriebi.it/' + $("img#img5").attr('src') + '&amp;via=seriebi;hashtags=seriebi;text=' + $("div.tit5").text() + ' - ' + $("div.sub5").text());
				        $('#facebook5').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=https://seriebi.it/' + $("img#img5").attr('src') + '&quote=' + $("div.tit5").text() + ' - ' + $("div.sub5").text());
				    }else {
				    	$("img#img5").css('display','none');
				    	$('#twitter5').attr('href', 'https://twitter.com/intent/tweet?url=https://seriebi.it&amp;via=seriebi;hashtags=seriebi;text=' + $("div.tit5").text() + ' - ' + $("div.sub5").text());
				    	$('#facebook5').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=https://seriebi.it&quote=' + $("div.tit5").text() + ' - ' + $("div.sub5").text());
				    }
				}else {
					$('div.headline.head.tit5').text("");
				    $('div.subheadline.head.sub5').text("");
				    $('div.paragragh51').text("");
				    $('div.paragragh52').text("");
				    $('div.paragragh53').text("");
				    $('div#upload5').text("");
				    $('div#figcaption5').text("");
				    $('div#sign5').text("");
				}
				break;
				
			case ('6'):
				/* Article 6 */
				if(item != null) {
			    	// Set article 6
				    $('div.headline.head.tit6').text(item.title);
				    $('div.subheadline.head.sub6').text(item.subtitle);
				    $('div.paragragh61').text(item.paragraph[0].one);
				    $('div.paragragh62').text(item.paragraph[0].two);
				    $('div.paragragh63').text(item.paragraph[0].three);
				    $('div#upload6').text(item.figure);
				    $('div#figcaption6').text(item.nameFigure);
				    $('div#sign6').text(item.sign);
				    if(item.figure != "") {
					    $("img#img6").attr("src",item.figure);
				        $('#twitter6').attr('href', 'https://twitter.com/intent/tweet?url=https://seriebi.it/' + $("img#img6").attr('src') + '&amp;via=seriebi;hashtags=seriebi;text=' + $("div.tit6").text() + ' - ' + $("div.sub6").text());
				        $('#facebook6').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=https://seriebi.it/' + $("img#img6").attr('src') + '&quote=' + $("div.tit6").text() + ' - ' + $("div.sub6").text());
				    }else {
				    	$("img#img6").css('display','none');
				    	$('#twitter6').attr('href', 'https://twitter.com/intent/tweet?url=https://seriebi.it&amp;via=seriebi;hashtags=seriebi;text=' + $("div.tit6").text() + ' - ' + $("div.sub6").text());
				    	$('#facebook6').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=https://seriebi.it&quote=' + $("div.tit6").text() + ' - ' + $("div.sub6").text());
				    }
				}else {
					$('div.headline.head.tit6').text("");
				    $('div.subheadline.head.sub6').text("");
				    $('div.paragragh61').text("");
				    $('div.paragragh62').text("");
				    $('div.paragragh63').text("");
				    $('div#upload6').text("");
				    $('div#figcaption6').text("");
				    $('div#sign6').text("");
				}
				break;
				
			case ('7'):
				/* Article 7 */
				if(item != null) {
			    	// Set article 7
				    $('div.headline.head.tit7').text(item.title);
				    $('div.subheadline.head.sub7').text(item.subtitle);
				    $('div.paragragh71').text(item.paragraph[0].one);
				    $('div.paragragh72').text(item.paragraph[0].two);
				    $('div.paragragh73').text(item.paragraph[0].three);
				    $('div#upload7').text(item.figure);
				    $('div#figcaption7').text(item.nameFigure);
				    $('div#sign7').text(item.sign);
				    if(item.figure != "") {
					    $("img#img7").attr("src",item.figure);
				        $('#twitter7').attr('href', 'https://twitter.com/intent/tweet?url=https://seriebi.it/' + $("img#img7").attr('src') + '&amp;via=seriebi;hashtags=seriebi;text=' + $("div.tit7").text() + ' - ' + $("div.sub7").text());
				        $('#facebook7').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=https://seriebi.it/' + $("img#img7").attr('src') + '&quote=' + $("div.tit7").text() + ' - ' + $("div.sub7").text());
				    }else {
				    	$("img#img7").css('display','none');
				    	$('#twitter7').attr('href', 'https://twitter.com/intent/tweet?url=https://seriebi.it&amp;via=seriebi;hashtags=seriebi;text=' + $("div.tit7").text() + ' - ' + $("div.sub7").text());
				    	$('#facebook7').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=https://seriebi.it&quote=' + $("div.tit7").text() + ' - ' + $("div.sub7").text());
				    }
				}else {
					$('div.headline.head.tit7').text("");
				    $('div.subheadline.head.sub7').text("");
				    $('div.paragragh11').text("");
				    $('div.paragragh72').text("");
				    $('div.paragragh13').text("");
				    $('div#upload7').text("");
				    $('div#figcaption7').text("");
				    $('div#sign7').text("");
				}
				break;
				
			case ('8'):
				/* Article 8 */
				if(item != null) {
			    	// Set article 8
				    $('div.headline.head.tit8').text(item.title);
				    $('div.subheadline.head.sub8').text(item.subtitle);
				    $('div.paragragh81').text(item.paragraph[0].one);
				    $('div.paragragh82').text(item.paragraph[0].two);
				    $('div.paragragh83').text(item.paragraph[0].three);
				    $('div#upload8').text(item.figure);
				    $('div#figcaption8').text(item.nameFigure);
				    $('div#sign8').text(item.sign);
				    if(item.figure != "") {
					    $("img#img8").attr("src",item.figure);
				        $('#twitter8').attr('href', 'https://twitter.com/intent/tweet?url=https://seriebi.it/' + $("img#img8").attr('src') + '&amp;via=seriebi;hashtags=seriebi;text=' + $("div.tit8").text() + ' - ' + $("div.sub8").text());
				        $('#facebook8').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=https://seriebi.it/' + $("img#img8").attr('src') + '&quote=' + $("div.tit8").text() + ' - ' + $("div.sub8").text());
				    }else {
				    	$("img#img8").css('display','none');
				    	$('#twitter8').attr('href', 'https://twitter.com/intent/tweet?url=https://seriebi.it&amp;via=seriebi;hashtags=seriebi;text=' + $("div.tit8").text() + ' - ' + $("div.sub8").text());
				    	$('#facebook8').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=https://seriebi.it&quote=' + $("div.tit8").text() + ' - ' + $("div.sub8").text());
				    }
				}else {
					$('div.headline.head.tit8').text("");
				    $('div.subheadline.head.sub8').text("");
				    $('div.paragragh81').text("");
				    $('div.paragragh82').text("");
				    $('div.paragragh83').text("");
				    $('div#upload8').text("");
				    $('div#figcaption8').text("");
				    $('div#sign8').text("");
				}
				break;
				
			case ('9'):
				/* Article 9 */
				if(item != null) {
			    	// Set article 9
				    $('div.headline.head.tit9').text(item.title);
				    $('div.subheadline.head.sub9').text(item.subtitle);
				    $('div.paragragh91').text(item.paragraph[0].one);
				    $('div.paragragh92').text(item.paragraph[0].two);
				    $('div.paragragh93').text(item.paragraph[0].three);
				    $('div#upload9').text(item.figure);
				    $('div#figcaption9').text(item.nameFigure);
				    $('div#sign9').text(item.sign);
				    if(item.figure != "") {
					    $("img#img9").attr("src",item.figure);
				        $('#twitter9').attr('href', 'https://twitter.com/intent/tweet?url=https://seriebi.it/' + $("img#img9").attr('src') + '&amp;via=seriebi;hashtags=seriebi;text=' + $("div.tit9").text() + ' - ' + $("div.sub9").text());
				        $('#facebook9').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=https://seriebi.it/' + $("img#img9").attr('src') + '&quote=' + $("div.tit9").text() + ' - ' + $("div.sub9").text());
				    }else {
				    	$("img#img9").css('display','none');
				    	$('#twitter9').attr('href', 'https://twitter.com/intent/tweet?url=https://seriebi.it&amp;via=seriebi;hashtags=seriebi;text=' + $("div.tit9").text() + ' - ' + $("div.sub9").text());
				    	$('#facebook9').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=https://seriebi.it&quote=' + $("div.tit9").text() + ' - ' + $("div.sub9").text());
				    }
				}else {
					$('div.headline.head.tit9').text("");
				    $('div.subheadline.head.sub9').text("");
				    $('div.paragragh91').text("");
				    $('div.paragragh92').text("");
				    $('div.paragragh93').text("");
				    $('div#upload9').text("");
				    $('div#figcaption9').text("");
				    $('div#sign9').text("");
				}
				break;
				
			default :
				console.log("No articles");
			}
		}
    });
}