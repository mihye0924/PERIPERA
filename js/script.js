$(document).ready(function(){ 

    // 메인 슬라이드
    var main = new Swiper(".main", {
        pagination: {
          el: ".main-pagination",  
          slidesPerView: 1,
          clickable: true,
        },
    });

    // 메인 재생, 멈춤 버튼
    $('.main-pagination').append('<div class="playBtn active"><img src="../img/play.png" alt="재생"/></div>' +
    '<div class="pasueBtn"><img src="../img/pause.png" alt="멈춤"/></div>')

    $('.playBtn').on('click', function(){
      $(this).css('display','none')
      $('.pasueBtn').css('display','inline-block')
    })
    
    $('.pasueBtn').on('click', function(){
      $(this).css('display','none')
      $('.playBtn').css('display','inline-block')
    })


    // 메인 넘어갈때 fixed gnb
    var height = $('main').height()
    console.log(height,'높이') 

  
    $(document).on('scroll',function(){
      var top = $(this).scrollTop() 
      console.log(top,'스크롤')
      if( top > height ) {   
          $('header').addClass('fixed').css('borderBottom','1px solid #cccccc')
          $('header .gnb .logo').remove()
          $('header .gnb .shopping').before('<li class="logo"><a href="./peripera.html"><img src="./img/logo_peripera.png" alt="로고"></a></li>')
          $('header .gnb>li span').css({ 'color':'#343434' , 'font-size':'20px'})
          $('header .product_sub>li, header .brand_sub>li, header .media_sub>li').css({'border':'1px solid rgb(224, 224, 224)'})
          $('header .search, header .gnb_wrap').css({ display:'flex'}) 
          $('header .brand_sub').css({marginRight : '320px'})
          $('header .media_sub').css({right : '190px'})
          $('header .gnb_wrap').css('marginTop','0')


        }else{
          $('header').removeClass('fixed').css('borderBottom','0')
          $('header .gnb .logo').remove()
          $('header .gnb .product').after('<li class="logo"><a href="./peripera.html"><img src="./img/logo_peripera_white.png" alt="로고"></a></li>')
          $('header .gnb li span').css({ 'color':'#fff' , 'font-size':'22px'})
          $('header .product_sub>li, header .brand_sub>li, header .media_sub>li').css({'border':'0','border-bottom':'1px solid rgb(224, 224, 224)'})
          $('header .search').css('display','none')
          $('header .brand_sub').css({marginRight : '175px'})
          $('header .media_sub').css({right : '5px'})
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
 

})