// $('.email').change(function(){
//    $('.cc').val($(this).val());
// })

// $('form').submit(function(e){

// e.preventDefault();

// var action = $(this).attr('action');

//    $.ajax({
//      url: action,
//      type: "POST",
//      data: $('form').serialize(),
//      dataType: "json",
//      success: function(data){
//        console.log(data)
//      },
//      error: function(error){
//        alert("Please Type again")
//      }
//    })
// });
function stripTrailingSlash(str) {
    if(str.substr(-1) == '/') {
      return str.substr(0, str.length - 1);
    }
    return str;
  }

  var url = window.location.pathname;  
  var activePage = stripTrailingSlash(url);

  $('.nav > li > a, .nav > li > ul.dropdown-menu > li > a').each(function(){  
    var currentPage = stripTrailingSlash($(this).attr('href'));

    if (activePage == currentPage) {
      $(this).parent().addClass('active'); 
    } 
  });