/* Set filename */
$('#inputFile').on('change',function(){
    //get the file name
    var fileName = $(this).val();
    //replace the "Choose a file" label
    $(this).next('.custom-file-label').html(fileName);
})

/* Send picture to the server */

$("#btn-save-upload").click(function() {

	var file = document.querySelector('input[type=file]').files[0];
	var formData = new FormData();
	formData.append('file', new File([ file ], file.name));
	var progressBar = document.getElementById("progressBar");
	var xmlHTTP = new XMLHttpRequest();

	xmlHTTP.onload = function() {
		if (xmlHTTP.status == 200) {
			alert("Sucess! Upload completed");
		} else {
			alert("Error! Upload failed");
		}
	};
	xmlHTTP.onerror = function() {
		alert("Error! Upload failed. Can not connect to the server.");
	};
	xmlHTTP.open('POST', '/upload', true);
	xmlHTTP.send(formData);
});