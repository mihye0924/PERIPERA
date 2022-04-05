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
      console.log(top)
        if( top > height ) { 
          $('header').css({'position':'fixed'})
        }else{
          $('header').css({'position':'absolute'})
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