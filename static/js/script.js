$(function(){


	
	$(document).on('click','.popClose, .popWrap, .popBtnClose',function(e){
		popClose();
	})
	$(document).on('click','.popCont',function(e){
		e.stopPropagation();
	})
})

function formVal(form){
	var valid = true;
	form.find(' :input[required]').each(function(i){
		if($(this).val() == ''){
			$(this).addClass('in_err');
			valid = false;
		}else{
			$(this).removeClass('in_err');
		}
	})
	return valid;
}

function popOpen(el){
	$('.'+el).addClass('active').parent().addClass('active');
}
function popClose() {
	$('.pop_wrap').removeClass('active').children().removeClass('active');
}

function goTo(el,panelHeight,speed){
	var delay = speed || 1000;
	var panelHeight = panelHeight || 0;
	var scrl = $(el).offset().top;
	scrl -= panelHeight;
	if($(document).width() <= 1200){
		window.scrollTo(0,scrl);
	}else{		
		$('html, body').animate({
			scrollTop: scrl
		}, delay);		
	}
}