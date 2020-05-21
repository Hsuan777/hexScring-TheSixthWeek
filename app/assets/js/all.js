

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
  }
});
