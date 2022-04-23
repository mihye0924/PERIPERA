$(document).ready(function(){ 

    // 마우스 포인터 감지 - 립스틱 포인터 작게 바꾸기
    $(document).on('mousemove', function(e) {
      let pageX = e.pageX 
      let windowWidth = $(window).width() 

      if(windowWidth - 130 <= pageX) {
        $('body').addClass('mini')
      } else {
        $('body').removeClass('mini')
      } 

    })


    // 메인 슬라이드
    var main = new Swiper(".main", {
        pagination: {
          el: ".main-pagination",  
          slidesPerView: 1,
          clickable: true,
        },
    });


    var periMood = new Swiper(".periMood", {
      navigation: {
        nextEl: ".periMood-button-next",
        prevEl: ".periMood-button-prev",
      },
      pagination: {
        el: ".periMood-pagination",
      }, 
      autoplay: {
        delay: 1000, 
        disableOnInteraction: false
        
      },
      loop:true, 
      slidesPerView: 2, 
      spaceBetween: 10,
      on: {
        init() {
          this.el.addEventListener('mouseenter', () => {
            this.autoplay.stop();
          });
    
          this.el.addEventListener('mouseleave', () => {
            this.autoplay.start();
          });
        }
      },
      breakpoints: {
        1024:{
          slidesPerView : 4,
          spaceBetween : 10,
        },
        768: {
          slidesPerView: 3, 
          spaceBetween: 10,
         },
        480: {
          slidesPerView: 2, 
          spaceBetween: 10,
        }
      }
    });
 

    // 메인 재생, 멈춤 버튼
    $('.main-pagination').append('<div class="playBtn active"><img src="./img/play.png" alt="재생"/></div>' +
    '<div class="pasueBtn"><img src="./img/pause.png" alt="멈춤"/></div>')
 
    $('.playBtn').on('click', function(){ 
      $(this).css('display','none')
      $('.pasueBtn').css('display','inline-block')
      
      $('#video')[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
    
    })
    
    $('.pasueBtn').on('click', function(){
      $(this).css('display','none')
      $('.playBtn').css('display','inline-block')
    })
 

    // 메인 넘어갈때 fixed gnb
    var height = $('main').height()
    var width = $(window).width()
    console.log(width)
    // console.log(height,'높이') 

    $(window).on('scroll',function(){
      var top = $(this).scrollTop()  
      if( top > height ) {   
          $('header .gnb_wrap_clone').addClass('fixed')  
          $('header .gnbBtn_wrap').addClass('fixed')
        }else{
          $('header .gnb_wrap_clone').removeClass('fixed') 
          $('header .gnbBtn_wrap').removeClass('fixed') 
        }
      })

       // 엠디픽 옵션 버튼
      // mdPick btn
      $('#mdPick_wrap .btnBox .all').on('click',function(){
        $('.allInner').css({ display : 'flex' })
        $('.allBtn').css({ display : 'block' })
        $('.baseInner, .eyeInner, .lipInner').css({ display : 'none' })
        $('.baseBtn, .eyeBtn, .lipBtn').css({ display : 'none' })
        $(this).addClass('active')
        $('#mdPick_wrap .btnBox .base, #mdPick_wrap .btnBox .eye, #mdPick_wrap .btnBox .lip').removeClass('active')
      })

      $('#mdPick_wrap .btnBox .base').on('click',function(){
        $('.baseInner').css({ display : 'flex' })
        $('.baseBtn').css({ display : 'block' })
        $('.allInner, .eyeInner, .lipInner').css({ display : 'none' })
        $('.allBtn, .eyeBtn, .lipBtn').css({ display : 'none' })
        $(this).addClass('active')
        $('#mdPick_wrap .btnBox .all, #mdPick_wrap .btnBox .eye, #mdPick_wrap .btnBox .lip').removeClass('active')
      })

      $('#mdPick_wrap .btnBox .eye').on('click',function(){
        $('.eyeInner').css({ display : 'flex' })
        $('.eyeBtn').css({ display : 'block' })
        $('.allInner, .baseInner, .lipInner').css({ display : 'none' })
        $('.allBtn, .baseBtn, .lipBtn').css({ display : 'none' })
        $(this).addClass('active')
        $('#mdPick_wrap .btnBox .all, #mdPick_wrap .btnBox .base, #mdPick_wrap .btnBox .lip').removeClass('active')
      })

      $('#mdPick_wrap .btnBox .lip').on('click',function(){
        $('.lipInner').css({ display : 'flex' })
        $('.lipBtn').css({ display : 'block' })
        $('.allInner, .baseInner, .eyeInner').css({ display : 'none' })
        $('.allBtn, .baseBtn, .eyeBtn').css({ display : 'none' })
        $(this).addClass('active')
        $('#mdPick_wrap .btnBox .all, #mdPick_wrap .btnBox .base, #mdPick_wrap .btnBox .eye').removeClass('active')
      })


      // 네비
      // productsub  
        $('.product').on('mouseover',function(){
          $(this).addClass('hover')
          $('.product_sub').slideDown()
        }).on('mouseleave', function(){
          $(this).removeClass('hover')
          $('.product_sub').slideUp()
        })
      

      $('.brand').on('mouseover',function(){
        $(this).addClass('hover')  
        $('.brand_sub').slideDown()
      }).on('mouseleave', function(){
        $(this).removeClass('hover')
        $('.brand_sub').slideUp()
      })
   

      $('.media').on('mouseover',function(){ 
        $(this).addClass('hover') 
        $('.media_sub').slideDown()
      }).on('mouseleave', function(){
        $(this).removeClass('hover')
        $('.media_sub').slideUp()
      })
   


      // 사이드 네비   
  
      var loginImg = document.querySelector(".login > img");
      var cartImg = document.querySelector(".cart > img");
      var qnaImg = document.querySelector(".qna > img"); 

      $('.quickbar-bg').on('click',function(){
        $('#snb').animate({right:'-261px'},1000) 
        $('#snb .snbSlide_wra').css({ boxShadow : 'unset'}) 
        $('#snb .snbBtn li').removeClass('active')
        $('.quickbar-bg').removeClass('active')
      })
    

      $('#snb .snbBtn li:not(.kakao, .top)').on('click',function(){
        $('#snb').animate({right:'0'},1000)
          $('#snb .snbSlide_wrap').css({ boxShadow : '5px -14px 10px #000'}) 
          $('#snb .snbBtn li').removeClass('active')
          $(this).addClass('active')
          $('.quickbar-bg').addClass('active') 
      })
 
      $('#snb .snbBtn li.login').on('click',function(){  
          $('#snb .login_wrap').css({ display:'block'})
          $('#snb .cart_wrap, #snb .qna_wrap').css({ display:'none'})  
        })
      $('#snb .snbBtn li.cart').on('click', function(){  
        $('#snb .cart_wrap').css({ display:'block'})
        $('#snb .login_wrap, #snb .qna_wrap').css({ display:'none'}) 
      })    
      $('#snb .snbBtn li.qna').on('click', function(){  
        $('#snb .qna_wrap').css({ display:'block'})
        $('#snb .login_wrap, #snb .cart_wrap').css({ display:'none'}) 
      }) 
      
      
      $('#snb .snbSlide_wrap ul.snbBtn li.kakao').on('click', function(){
          $('#snb').animate({right:'-261px'},1000)

          $('#snb').animate({right:'-261px'},1000) 
          $('#snb .snbSlide_wrap').css({ boxShadow : 'unset'}) 
          $('#snb .snbBtn li.login').on('mouseover',function(){ 
            $(this).removeClass('active')
            loginImg.src='./img/user.png'
          })
          $('#snb .snbBtn li.cart').on('mouseover',function(){ 
            $(this).removeClass('active')
            cartImg.src='./img/cart.png'
          })
          $('#snb .snbBtn li.qna').on('mouseover',function(){ 
            $(this).removeClass('active')
            qnaImg.src='./img/qna.png'
          }) 
 

        }) 

      // 네비 모바일, 태블릿 토글버튼
      $('.openBtn').on('click',function(){
        $('body').css({overflow : 'hidden'})
        $('.closeBtn').css({display:'block'}).addClass('animate') 
        $('.gnbBtn_wrap').addClass('active')
        $(this).css({display:'none'})  
      })

       
      $('.closeBtn').on('click',function(){
        $('body').css({overflow : 'visible'})
        $('.openBtn').css({display:'block'}).addClass('animate')
        $('.gnbBtn_wrap').removeClass('active') 
        $(this).css({display:'none'}) 
      })
 
      //  네비 모바일, 태블릿 옵션
      var productMobile = $('.productMobile .optionList')
      var brandMobile = $('.brandMobile .optionList')
      var mediaMobile = $('.mediaMobile .optionList')  
      $('.shoppingMobile').on('click',function(){     
        if( brandMobile.css('display') === 'block'){
         brandMobile.slideUp()
         $('.brandMobile').removeClass('active')
        }else if( mediaMobile.css('display') === 'block'){
          mediaMobile.slideUp()
          $('.mediaMobile').removeClass('active')
        }else if(productMobile.css('display') === 'block'){
          productMobile.slideUp()
          $('.productMobile').removeClass('active')
        } 
      })

      $('.productMobile').on('click',function(){   
        $('.productMobile .optionList').slideToggle()  
        if ($(this).hasClass("active")) {
          $(".productMobile").removeClass("active");  
        }else {
          $(".productMobile").removeClass("active");
          $(this).addClass("active");
        }
        if( brandMobile.css('display') === 'block'){
         brandMobile.slideUp()
         $('.brandMobile').removeClass('active')
        }else if( mediaMobile.css('display') === 'block'){
          mediaMobile.slideUp()
          $('.mediaMobile').removeClass('active')
        }else if(productMobile){
          $('productMobile').removeClass('active')
        }
      }) 

      $('.brandMobile').on('click',function(){   
        $('.brandMobile .optionList').slideToggle()  
        if ($(this).hasClass("active")) {
          $(".brandMobile").removeClass("active");  
        }else {
          $(".brandMobile").removeClass("active");
          $(this).addClass("active");
        }
        if( productMobile.css('display') === 'block'){
          productMobile.slideUp()
         $('.productMobile').removeClass('active')
        }else if( mediaMobile.css('display') === 'block'){
          mediaMobile.slideUp()
          $('.mediaMobile').removeClass('active')
        }  
      })

      
      $('.mediaMobile').on('click',function(){   
        $('.mediaMobile .optionList').slideToggle()  
       if ($(this).hasClass("active")) {
          $(".mediaMobile").removeClass("active");  
        }else {
          $(".mediaMobile").removeClass("active");
          $(this).addClass("active");
        }
        if( productMobile.css('display') === 'block'){
          productMobile.slideUp()
         $('.productMobile').removeClass('active')
        }else if( brandMobile.css('display') === 'block'){
          brandMobile.slideUp()
          $('.brandMobile').removeClass('active')
        }  
      })


      // 셀렉트 박스 커스텀   
      var chk = $("input[type=checkbox]");
      console.log(chk)
        $('#optionList').on('click',function(){  
          if ($(this).hasClass("checked")) {
            $("#optionList").removeClass("checked");  
            $(chk).removeAttr('checked') 
          }else {
            $("#optionList").removeClass("checked");
            $(this).addClass("checked");
            $(chk).attr('checked','checked') 
          }
        })  
    }); //스크립트 마지막

      
    var player;
        
    function onYouTubeIframeAPIReady(){
      player = new YT.Player('player',{
        width: '780',
        height: '480',
        videoId:'uiRcKpBGhhw',
        playerVars : { 'autoplay' : 1, 'playsinline' :1, 'controls': 0, 'loop': 1 },
        events : { 'onReady' : onPlayerReady }
      });

      function onPlayerReady(e){
        e.target.mute();
        e.target.playVideo();
      }
    }