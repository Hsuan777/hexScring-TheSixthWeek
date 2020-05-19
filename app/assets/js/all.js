

$(document).ready(() => {
  
  switch($('title').text()){
    case "Craftsman":
      $(".js__nav").addClass("fixed-top navbar-dark");
      // $(".js__nav .nav-link").addClass("text-white");
      
      break;
    case "ProductList":
      // $(".js__nav .nav-link").addClass("text-dark");
      $('a[href="productList.html"]').addClass('active');
      break;
  }
});
