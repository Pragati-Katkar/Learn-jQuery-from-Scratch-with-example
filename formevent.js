
			$(document).ready(function(){
				$('#sname,#sclass,#scountry').focus(function(){
					$(this).css('background-color','lime');
				});
				
				$('#sname,#sclass,#scountry').blur(function(){
					$(this).css('background-color','');
				});
				
				$('#scountry').change(function(){
					var a = $(this).val();
					$('#test').html(a);
				});
					
				$('#sname,#sclass').select(function(){
					$(this).css('background-color','yellow');
				});
				
				$('#sform').submit(function(){
					var a = $('#sname').val();
					var b = $('#sclass').val();
					alert("hello"+ " " + a + " " + b);
				});
				
			});
		