;(function () {

    'use strict';

    var carousels = function() {
        $(".owl-carousel1").owlCarousel(
            {
                loop:true,
                center: true,
                margin:0,
                responsiveClass:true,
                nav:false,
                responsive:{
                    0:{
                        items:1,
                        nav:false
                    },
                    600:{
                        items:1,
                        nav:false
                    },
                    1000:{
                        items:3,
                        nav:true,
                        loop:false
                    }
                }
            }
        );

        $(".owl-carousel2").owlCarousel(
            {
                loop:true,
                center: false,
                margin:0,
                responsiveClass:true,
                nav:true,
                responsive:{
                    0:{
                        items:1,
                        nav:false
                    },
                    600:{
                        items:2,
                        nav:false
                    },
                    1000:{
                        items:3,
                        nav:true,
                        loop:true
                    }
                }
            }
        );
    }


    // svg responsive in mobile mode
    var checkPosition = function() {
        if ($(window).width() < 767) {
            $("#bg-services").attr("viewBox", "0 0 1050 800");

        }
    };

    (function($) {
        carousels();
        checkPosition();
    })(jQuery);


    // 무료수업신청하기
    // $('.submit-button').on('click',function(){
    //     $('[name=form-request]').submit();
    // });    
    $('[name=form-request]').on('submit',function(){
        var $form = $(this), // $('[name=form-request]'), 
            $name = $form.find('[name=name]'),
            $pname = $form.find('[name=pname]'),
            // post1 = $form.find('[name=post1]').val(),
            // post2 = $form.find('[name=post2]').val(),
            // addr1 = $form.find('[name=addr1]').val(),
            // addr2 = $form.find('[name=addr2]').val(),
            $hp1 = $form.find('[name=hp1]'),
            $hp2 = $form.find('[name=hp2]'),
            $hp3 = $form.find('[name=hp3]'),
            $agree = $form.find('[name=agree]:checked'),
            params = $form.serialize();
        if($.trim($name.val())=='') {
            alert('아이 이름을 적어주세요.');
            $name.focus();
            return false;
        }
        if($.trim($pname.val())=='') {
            alert('보호자 이름을 적어주세요.');
            $pname.focus();
            return false;
        }
        // if(post1==''||post2=='') {
        //     alert('우편번호를 적어주세요.');
        //     return false;
        // }
        // if(addr1=='') {
        //     alert('주소를 적어주세요.');
        //     return false;
        // }
        if($.trim($hp1.val())==''||$.trim($hp2.val())==''||$.trim($hp3.val())=='') {
            alert('연락처를 적어주세요.');
            $hp1.focus();
            return false;
        }
        if($form.find('.form-check-input:checked').length<1) {
            alert('무료시연 받고 싶은 과목을 선택해주세요.');
            return false;
        }
        if($agree.val()!='yes') {
            alert('개인정보 취급방침에 동의해주십시오.');
            return false;
        }

        var ok = confirm('무료 수업을 신청하시겠습니까?');
        if(ok) {
            setTimeout(function(){
                $.post('http://www.frenesc.com/admin/exc/h_modi.php?req_DIV=inst', params, function(r){
                    $form.reset();
                });
            }, 10);
        }
        return false;

    });
		function reg(){
			var frm = document.frm;
			if(frm.name.value==''){
				alert('아이 성명을 입력해주십시오.');
			}else if(frm.hp1.value=='' || frm.hp2.value=='' || frm.hp3.value==''){
				alert('연락처를 입력해주십시오.');
			}else if(document.getElementById("agr1").checked==false){
				alert('개인정보 취급방침에 동의해주십시오.');
			}else{
				frm.submit();
			}
			return false;
        }
        
        // 우편번호
		$("#search_button").postcodifyPopUp();

}());

// menu toggle button
function myFunction(x) {
    x.classList.toggle("change");
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
