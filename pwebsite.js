// Animate catch words and content for homepage

$(document).ready(function() {
		var wordOne = $('#target1'),
		 		wordTwo = $('#target2'),
				wordThree = $('#target3');

		wordOne.addClass('animated fadeInLeft').show();
		wordOne.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', 		function(){
			wordTwo.addClass('animated fadeInLeft').show();
		});
		wordTwo.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
				wordThree.addClass('animated fadeInLeft').show();
		});
    wordThree.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
      $(".content").addClass('animated fadeInUpBig').show();
    })
	});
