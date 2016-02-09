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


var activemenu = $("#menu .nav li.active").text();

$('<h5 class="active-menu">'+activemenu+'</h5>').insertBefore("button.navbar-toggle");

$('li.dropdown > .dropdown-menu li').each(function(){
    if($(this).hasClass('active')) {
        $(this).parents('li.dropdown').find("a.dropdown-toggle").addClass("active");
    } 
});

//  var debug = true;  
//   $(document).on('submit', 'form#ss-form', function(e) {
//       e.preventDefault();
//     var form = $(this);
//     if ( debug){
//       console.log($(this).serialize());
//     }
//         $.ajax({
//           url: $(this).attr('action'),
//           type: "POST",
//           data: $(this).serialize(),
//           async : false,
          
//         }).always(function(){
          
//           form.find('input[type=text]').val('');

//       window.top.location = window.top.location;
//       alert('Thanks! Your response has been recorded.');
      
      
//         });

//     });

// var formID = 'ss-form';
// var labelName = 'ssTestLabel';
// var testField = 'ssTestValue';
// var submitted = false;


//  var ssForm = $('#'+formID);
//  var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
//  var string_length = 5;
//  var randomstring = '';

// for (var i=0; i<string_length; i++) {
//  var randomInt = Math.floor(Math.random()*chars.length);
//  randomstring += chars.substring(randomInt,randomInt+1);
  
// }
  
//  $('#'+labelName).html('<p>If you\'re human, type "<strong>'+ randomstring +'</strong>" in the box given below</p>');
  
//  ssForm.submit(function(evt){
  
// if($('#'+testField).val() == randomstring){
//    ssForm.attr({'action' : '//formspree.io/ayenzky101@gmail.com'});
//    return true;
//    }
// else{
//    alert('You need to repeat the number "' + randomstring + '"');
//     return false;
//   }
//  })