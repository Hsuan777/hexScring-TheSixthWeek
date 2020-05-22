

$(document).ready(() => {
  
  switch($('title').text()){
    case "Craftsman":
      $(".js-layout__navbar").addClass("fixed-top navbar-dark");
      $('a[href="productList.html"]').addClass('custom__text');
      break;
    case "ProductList":
      $('a[href="productList.html"]').addClass('active');
      break;
    case "Product":
      $('a[href="productList.html"]').addClass('active');
      break;
    case "Information":
      $(".section__subscribe").hide();
      $(".js-layout__navbar__nav").hide();
      $(".js-layout__navbar__footer").hide();
      break;
    case "Payment":
      $(".section__subscribe").hide();
      $(".js-layout__navbar__footer").hide();
      break;
    case "Well Done":
      $(".section__subscribe").hide();
      $(".js-layout__navbar__footer").hide();
      break;
  }
  // 箭頭方向改變，提醒有折疊內容
  $(".js-btn ").click(function () {
    $(this).find(".js-btn__info").toggle();
    if($(this).find(".js-btn___more").text()!="expand_less"){
      $(this).find(".js-btn___more").text("expand_less");
    }else{
      $(this).find(".js-btn___more").text("expand_more");
    }
  });

  var swiper = new Swiper('.swiper-container', {
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },
  });
});
