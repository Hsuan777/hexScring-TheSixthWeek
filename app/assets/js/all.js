

$(document).ready(() => {
  
  switch($('title').text()){
    case "Craftsman":
      $(".js__nav").addClass("fixed-top navbar-dark");
      
      break;
    case "ProductList":
      $('a[href="productList.html"]').addClass('active').removeClass('custom__text');
      break;
    case "Product":
      $('a[href="productList.html"]').addClass('active').removeClass('custom__text');
      break;
    case "Information":
      $('a[href="productList.html"]').removeClass('custom__text');
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
});
