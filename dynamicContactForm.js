$.noConflict();
$(document).ready(function(){
	var myFormTitle = '<h3><strong>Contact Form</strong></h3>';
	var myForm = jQuery('<form>' , {
				'id':'myForm',
				'name':'myForm',
				'action':'Dyanamic form with jquery.html'
	});
	myForm.append(myFormTitle);
	$("#dynamicForm").append(myForm);
});