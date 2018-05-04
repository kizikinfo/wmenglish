console.log(document.getElementById('drmes'));
document.getElementById('drmes').style.display = 'none';
document.getElementById('nommes').style.display = 'none';
document.getElementById('skid').style.display = 'none';
document.getElementById("form_othermessenger").required = false;
document.getElementById("form_othermessenger").name = '';
document.getElementById("form_skid").required = false;

function selectchanged(){
	document.getElementById('drmes').style.display = 'none';
	document.getElementById('nommes').style.display = 'none';
	document.getElementById('skid').style.display = 'none';
	document.getElementById("form_othermessenger").required = false;
	document.getElementById("form_othermessenger").name = '';
	document.getElementById("form_skid").required = false;
	var yourSelect = document.getElementById( "form_messenger" );
	var selectval = yourSelect.options[ yourSelect.selectedIndex ].value;
	if(selectval==='Other' || selectval==='Другой'){
		document.getElementById('drmes').style.display = 'block';
		document.getElementById('nommes').style.display = 'block';
		document.getElementById("form_othermessenger").required = true;
		document.getElementById("form_othermessenger").name = 'f_othermessenger';
	}else{
		document.getElementById('nommes').style.display = 'block';
		document.getElementById("form_othermessenger").required = false;
		document.getElementById("form_othermessenger").name = '';
	}
	if(selectval==='Skype'){
		document.getElementById('skid').style.display = 'block';
		document.getElementById('nommes').style.display = 'none';
		document.getElementById("form_skid").required = true;
	}else{
		document.getElementById('skid').style.display = 'none';
		document.getElementById("form_skid").required = false;
	}
	console.log(selectval);
}