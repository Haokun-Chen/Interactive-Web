//Twitter
!function(d, s, id){
    var js,fjs=d.getElementsByTagName(s)[0],
    p=/^http:/.test(d.location)?'http':'https';
    if(!d.getElementById(id)){
        js=d.createElement(s);js.id=id;
        js.src=p+'//platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js,fjs);}
    }(document, 'script', 'twitter-wjs');

//Facebook
!function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8";
        fjs.parentNode.insertBefore(js, fjs);
         }(document, 'script', 'facebook-jssdk');


$(document).ready(function(){
    // Smooth scrolling
    var $root = $('html, body');
    $('.navbar-nav a').click(function() {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 500, function () {
            window.location.hash = href;
        });
        return false;
    });

    $('.col-md-3 a').click(function() {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 500, function () {
            window.location.hash = href;
        });
        return false;
    });

    //Change color
    alert("Use JS to chagne background-color in message-box!");
    $('.message-box').css("background-color","red");
});

 // Stellar
$.stellar();

  // Tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

// button clicked function
$('.submit').on('click',function(){
    var comment = $('.message-box').val();
    // get the string from textarea
    console.log(comment);
    $('.visible-comment').html(comment);
    $('.message-box').hide();
    return false;
});

//keyup
$('.message-box').on('keyup',function(){
    console.log("keyup happened");
    var charCount = 0;
    charCount = $('.message-box').val().length;
    $('.char-count').html(charCount);
    //Change background-color
    if(charCount > 30){
        $('.b-char-count').css("background-color","red");
    }else{
        $('.b-char-count').css("background-color","black");
    }
});

//Google Map API
function initMap() {
  var location =  {lat: 35.9190972, lng:-79.0638853};
  var map;
  map = new google.maps.Map(document.getElementById('map'), {
    center: location,
    zoom: 14
    });
  var marker = new google.maps.Marker({
          position: location,
          map: map
        });
};





