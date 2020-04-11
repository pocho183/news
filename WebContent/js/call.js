/* Read Volume and Number */

function readVolumeAndNumber() {
	
	var volume = "";
	var number = "";
	var data = "";
	
	$.ajax({
	    url : 'readVolumeAndNumber',
	    type : 'POST',
	    dataType: 'json',
	    contentType : 'application/json',
	}) .done(function(response) {
		
    	volume = response.volume;
    	number = response.number;
    	data = response.date;

    	/* Read article published */
    	$('.volume').text(volume);
    	$('.number').text(number);
    	$(".data").text(data);

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
			    $('div.headline.head.tit1').text(item.title);
			    $('div.subheadline.head.sub1').text(item.subtitle);
			    $('div.paragragh11').text(item.paragraph[0].one);
			    $('div.paragragh12').text(item.paragraph[0].two);
			    $('div.paragragh13').text(item.paragraph[0].three);
			    $('div#upload1').text(item.figure);
			    $('div#figcaption1').text(item.nameFigure);
			    $('div#sign1').text(item.sign);
			    $('#twitter1').attr('href', 'https://twitter.com/intent/tweet?url=https://seriebi.it&amp;via=seriebi;hashtags=seriebi;text=' + $("div.tit1").text() + ' - ' + $("div.sub1").text());
		    	$('#facebook1').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=https://seriebi.it&quote=' + $("div.tit1").text() + ' - ' + $("div.sub1").text());			
			    if(item.figure != "")
				    $("img#img1").attr("src",item.figure);
				else
			    	$("img#img1").css('display','none');
				break;
				
			case ('2'):
				/* Article 2 */
			    $('div.headline.head.tit2').text(item.title);
			    $('div.subheadline.head.sub2').text(item.subtitle);
			    $('div.paragragh21').text(item.paragraph[0].one);
			    $('div.paragragh22').text(item.paragraph[0].two);
			    $('div.paragragh23').text(item.paragraph[0].three);
			    $('div#upload2').text(item.figure);
			    $('div#figcaption2').text(item.nameFigure);
			    $('div#sign2').text(item.sign); 	
			    $('#twitter2').attr('href', 'https://twitter.com/intent/tweet?url=https://seriebi.it&amp;via=seriebi;hashtags=seriebi;text=' + $("div.tit2").text() + ' - ' + $("div.sub2").text());
		    	$('#facebook2').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=https://seriebi.it&quote=' + $("div.tit2").text() + ' - ' + $("div.sub2").text());			    
			    if(item.figure != "")
				    $("img#img2").attr("src",item.figure);
			    else
			    	$("img#img2").css('display','none');
				break;
				
			case ('3'):
				/* Article 3 */
			    $('div.headline.head.tit3').text(item.title);
			    $('div.subheadline.head.sub3').text(item.subtitle);
			    $('div.paragragh31').text(item.paragraph[0].one);
			    $('div.paragragh32').text(item.paragraph[0].two);
			    $('div.paragragh33').text(item.paragraph[0].three);
			    $('div#upload3').text(item.figure);
			    $('div#figcaption3').text(item.nameFigure);
			    $('div#sign3').text(item.sign);	
			    $('#twitter3').attr('href', 'https://twitter.com/intent/tweet?url=https://seriebi.it&amp;via=seriebi;hashtags=seriebi;text=' + $("div.tit3").text() + ' - ' + $("div.sub3").text());
		    	$('#facebook3').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=https://seriebi.it&quote=' + $("div.tit3").text() + ' - ' + $("div.sub3").text());			    
			    if(item.figure != "")
				    $("img#img3").attr("src",item.figure);
				else
			    	$("img#img3").css('display','none');
				break;
				
			case ('4'):
				/* Article 4 */
			    $('div.headline.head.tit4').text(item.title);
			    $('div.subheadline.head.sub4').text(item.subtitle);
			    $('div.paragragh41').text(item.paragraph[0].one);
			    $('div.paragragh42').text(item.paragraph[0].two);
			    $('div.paragragh43').text(item.paragraph[0].three);
			    $('div#upload4').text(item.figure);
			    $('div#figcaption4').text(item.nameFigure);
			    $('div#sign4').text(item.sign);	
			    $('#twitter4').attr('href', 'https://twitter.com/intent/tweet?url=https://seriebi.it&amp;via=seriebi;hashtags=seriebi;text=' + $("div.tit4").text() + ' - ' + $("div.sub4").text());
		    	$('#facebook4').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=https://seriebi.it&quote=' + $("div.tit4").text() + ' - ' + $("div.sub4").text());			    
			    if(item.figure != "")
				    $("img#img4").attr("src",item.figure);
				else
			    	$("img#img4").css('display','none');
				break;
				
			case ('5'):
				/* Article 5 */
			    $('div.headline.head.tit5').text(item.title);
			    $('div.subheadline.head.sub5').text(item.subtitle);
			    $('div.paragragh51').text(item.paragraph[0].one);
			    $('div.paragragh52').text(item.paragraph[0].two);
			    $('div.paragragh53').text(item.paragraph[0].three);
			    $('div#upload5').text(item.figure);
			    $('div#figcaption5').text(item.nameFigure);
			    $('div#sign5').text(item.sign); 	
			    $('#twitter5').attr('href', 'https://twitter.com/intent/tweet?url=https://seriebi.it&amp;via=seriebi;hashtags=seriebi;text=' + $("div.tit5").text() + ' - ' + $("div.sub5").text());
		    	$('#facebook5').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=https://seriebi.it&quote=' + $("div.tit5").text() + ' - ' + $("div.sub5").text());			    
			    if(item.figure != "")
				    $("img#img5").attr("src",item.figure);
				else
			    	$("img#img5").css('display','none');
				break;
				
			case ('6'):
				/* Article 6 */
			    $('div.headline.head.tit6').text(item.title);
			    $('div.subheadline.head.sub6').text(item.subtitle);
			    $('div.paragragh61').text(item.paragraph[0].one);
			    $('div.paragragh62').text(item.paragraph[0].two);
			    $('div.paragragh63').text(item.paragraph[0].three);
			    $('div#upload6').text(item.figure);
			    $('div#figcaption6').text(item.nameFigure);
			    $('div#sign6').text(item.sign);	
			    $('#twitter6').attr('href', 'https://twitter.com/intent/tweet?url=https://seriebi.it&amp;via=seriebi;hashtags=seriebi;text=' + $("div.tit6").text() + ' - ' + $("div.sub6").text());
		    	$('#facebook6').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=https://seriebi.it&quote=' + $("div.tit6").text() + ' - ' + $("div.sub6").text());			    
			    if(item.figure != "")
				    $("img#img6").attr("src",item.figure);
			    else
			    	$("img#img6").css('display','none');
				break;
				
			case ('7'):
				/* Article 7 */
			    $('div.headline.head.tit7').text(item.title);
			    $('div.subheadline.head.sub7').text(item.subtitle);
			    $('div.paragragh71').text(item.paragraph[0].one);
			    $('div.paragragh72').text(item.paragraph[0].two);
			    $('div.paragragh73').text(item.paragraph[0].three);
			    $('div#upload7').text(item.figure);
			    $('div#figcaption7').text(item.nameFigure);
			    $('div#sign7').text(item.sign);	
			    $('#twitter7').attr('href', 'https://twitter.com/intent/tweet?url=https://seriebi.it&amp;via=seriebi;hashtags=seriebi;text=' + $("div.tit7").text() + ' - ' + $("div.sub7").text());
		    	$('#facebook7').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=https://seriebi.it&quote=' + $("div.tit7").text() + ' - ' + $("div.sub7").text());			    
			    if(item.figure != "")
				    $("img#img7").attr("src",item.figure);
				else
			    	$("img#img7").css('display','none');
				break;
				
			case ('8'):
				/* Article 8 */
			    $('div.headline.head.tit8').text(item.title);
			    $('div.subheadline.head.sub8').text(item.subtitle);
			    $('div.paragragh81').text(item.paragraph[0].one);
			    $('div.paragragh82').text(item.paragraph[0].two);
			    $('div.paragragh83').text(item.paragraph[0].three);
			    $('div#upload8').text(item.figure);
			    $('div#figcaption8').text(item.nameFigure);
			    $('div#sign8').text(item.sign);	
			    $('#twitter8').attr('href', 'https://twitter.com/intent/tweet?url=https://seriebi.it&amp;via=seriebi;hashtags=seriebi;text=' + $("div.tit8").text() + ' - ' + $("div.sub8").text());
		    	$('#facebook8').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=https://seriebi.it&quote=' + $("div.tit8").text() + ' - ' + $("div.sub8").text());				   
			    if(item.figure != "")
				    $("img#img8").attr("src",item.figure);
				else
			    	$("img#img8").css('display','none');
				break;
				
			case ('9'):
				/* Article 9 */
			    $('div.headline.head.tit9').text(item.title);
			    $('div.subheadline.head.sub9').text(item.subtitle);
			    $('div.paragragh91').text(item.paragraph[0].one);
			    $('div.paragragh92').text(item.paragraph[0].two);
			    $('div.paragragh93').text(item.paragraph[0].three);
			    $('div#upload9').text(item.figure);
			    $('div#figcaption9').text(item.nameFigure);
			    $('div#sign9').text(item.sign);	
			    $('#twitter9').attr('href', 'https://twitter.com/intent/tweet?url=https://seriebi.it&amp;via=seriebi;hashtags=seriebi;text=' + $("div.tit9").text() + ' - ' + $("div.sub9").text());
		    	$('#facebook9').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=https://seriebi.it&quote=' + $("div.tit9").text() + ' - ' + $("div.sub9").text());
			    if(item.figure != "")
				    $("img#img9").attr("src",item.figure);
				else
			    	$("img#img9").css('display','none');
				break;
				
			default :
				console.log("No articles");
			}
		}
    });
}

/* Call Login */
$("#btnLogin").click(function(){
	
	var obj = {
		'username' : $('#inputEmail').val(),
		'password' : $('#inputPassword').val()
	};
	
	$.ajax({
	    url : 'postLogin',
	    type : 'POST',
	    dataType: 'json',
	    contentType : 'application/json',
	    data : JSON.stringify(obj),    
	    success: function (response, data) {
	    	/* With path, we declare which page is the owner of the token */
	    	document.cookie = "token=" + response.token + "; path=/";
			/* Redirect to home page */
			window.location.href = "/";
	    },
	    error: function (xhr, ajaxOptions, thrownError) {
	    	$('#errorLogin').show();
	    }
	});
});

