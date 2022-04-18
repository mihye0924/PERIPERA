$(document).ready(function(){ 

    // 메인 슬라이드
    var main = new Swiper(".main", {
        pagination: {
          el: ".main-pagination",  
          slidesPerView: 1,
          clickable: true,
        },
    });


    var periMood = new Swiper(".periMood", {
      // navigation: {
      //   nextEl: ".periMood-button-next",
      //   prevEl: ".periMood-button-prev",
      // },
      pagination: {
        el: ".periMood-pagination",
      },
      autoplay: {
        delay: 1000, 
        disableOnInteraction: false
      },
      slidesPerView : 4,
      spaceBetween : 15,
      on: {
        init() {
          this.el.addEventListener('mouseenter', () => {
            this.autoplay.stop();
          });
    
          this.el.addEventListener('mouseleave', () => {
            this.autoplay.start();
          });
        }
      }
    });
 

    // 메인 재생, 멈춤 버튼
    $('.main-pagination').append('<div class="playBtn active"><img src="../img/play.png" alt="재생"/></div>' +
    '<div class="pasueBtn"><img src="../img/pause.png" alt="멈춤"/></div>')
 
    $('.playBtn').on('click', function(){
      console.log('중지')
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
    // console.log(height,'높이') 

    $(window).on('scroll',function(){
      var top = $(this).scrollTop() 
      // console.log(top,'스크롤')
      if( top > height ) {   
          $('header').addClass('fixed').css('borderBottom','1px solid #cccccc')
          $('header .gnb .logo').remove()
          $('header .gnb .shopping').before('<li class="logo"><a href="./peripera.html"><img src="./img/logo_peripera.png" alt="로고"></a></li>')
          $('header .gnb>li span').css({ 'color':'#343434' , 'font-size':'18px'})
          $('header .product_sub>li, header .brand_sub>li, header .media_sub>li').css({'border':'1px solid rgb(224, 224, 224)'})
          $('header .search, header .gnb_wrap').css({ display:'flex'}) 
          $('header .product_sub').css({marginLeft : '5px'})
          $('header .brand_sub').css({marginRight : '390px'})
          $('header .media_sub').css({right :'230px'})
          $('header .gnb_wrap').css('marginTop','0')


        }else{
          $('header').removeClass('fixed').css('borderBottom','0')
          $('header .gnb .logo').remove()
          $('header .gnb .product').after('<li class="logo"><a href="./peripera.html"><img src="./img/logo_peripera_white.png" alt="로고"></a></li>')
          $('header .gnb li span').css({ 'color':'#fff' , 'font-size':'18px'})
          $('header .product_sub>li, header .brand_sub>li, header .media_sub>li').css({'border':'0','border-bottom':'1px solid rgb(224, 224, 224)'})
          $('header .search').css('display','none')
          $('header .brand_sub').css({marginRight : '275px'})
          $('header .media_sub').css({right : '80px'})
          $('header .gnb_wrap').css('marginTop','40px')
        }
      })
      


      // 네비
      // productsub 
      $('header .gnb .product').on('mouseover',function(){
        $('.product_sub').slideDown()
        $(this).addClass('hover')  
      }).on('mouseleave',function(){
        $('.product_sub').slideUp() 
        $(this).removeClass('hover')
      })  

      $('header .gnb .brand').on('mouseover',function(){
        $('.brand_sub').slideDown()
        $(this).addClass('hover')
      
      }).on('mouseleave',function(){
        $('.brand_sub').slideUp()
        $(this).removeClass('hover')
      }) 

      $('header .gnb .media').on('mouseover',function(){
        $('.media_sub').slideDown()
        $(this).addClass('hover')
      
      }).on('mouseleave',function(){
        $('.media_sub').slideUp()
        $(this).removeClass('hover')
      }) 


      // 사이드 네비
      var on = false  
  
      var loginImg = document.querySelector(".login > img");
      var cartImg = document.querySelector(".cart > img");
      var qnaImg = document.querySelector(".qna > img");
  
      $('#snb .snbBtn li:not(.kakao, .top)').on('click',function(){
  
        if( on ){
          $('#snb').animate({right:'-261px'},1000) 
          $('#snb .snbSlide_wrap .snbBg').css({ boxShadow : 'unset'}) 
 
          on = false 


        }else{
          $('#snb').animate({right:'0'},1000)
          $('#snb .snbSlide_wrap .snbBg').css({ boxShadow : '5px -14px 10px #000'}) 

          $('#snb li.login').on('mouseover',function(){ 
          $('#snb li.login').addClass('active') 
          $('#snb li.cart, #snb li.qna').removeClass('active')
          $('#snb .login_wrap').css({ display:'block'})
          $('#snb .cart_wrap, #snb .qna_wrap').css({ display:'none'})
          loginImg.src ='./img/user_white.png'
          cartImg.src='./img/cart.png'
          qnaImg.src='./img/qna.png' 
          })
          $('#snb li.cart').on('mouseover', function(){ 
          $('#snb li.cart').addClass('active')
          $('#snb li.login, #snb li.qna').removeClass('active') 
          $('#snb .cart_wrap').css({ display:'block'})
          $('#snb .login_wrap, #snb .qna_wrap').css({ display:'none'})
          $('#snb li.login, #snb li.qna').removeClass('active')
          cartImg.src='./img/cart_white.png'
          loginImg.src='./img/user.png'
          qnaImg.src='./img/qna.png'
          })    
          $('#snb li.qna').on('mouseover', function(){ 
          $('#snb li.qna').addClass('active')
          $('#snb li.login, #snb li.cart').removeClass('active')
          $('#snb .qna_wrap').css({ display:'block'})
          $('#snb .login_wrap, #snb .cart_wrap').css({ display:'none'})
          $('#snb li.login, #snb li.cart').removeClass('active')
          qnaImg.src='./img/qna_white.png'
          cartImg.src='./img/cart.png'
          loginImg.src='./img/user.png'
          })  
          on = true 
        }
      })
      
      $('#snb .snbSlide_wrap ul.snbBtn li.kakao').on('click', function(){
        $('#snb').animate({right:'-261px'},1000)
        on = false
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
})