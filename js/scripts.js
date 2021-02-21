$(function(){
	$('.sing-in').click(function(){
		$('.sign-prof').css('display','block');
		$('.sign-btns').css('display','none');
	});
	$('.sing-up').click(function(){
		alert('Рега')
	});
	$('input[type="image"]').click(function(){
		var email = $('input[type="email"]').val();

		if (email == "") {
			alert('Введите Email')
		}
		else {
			console.log(email)
			alert('Email отправлен')
		}
	});
});