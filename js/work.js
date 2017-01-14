//array of images
var works = [ "https://www.petfinder.com/wp-content/uploads/2012/09/Blog-Kitty-Cam-solo.jpg",
  "http://www.animal-photography.com/thumbs/red_tabby_long_hair_kitten_~AP-0UJFTC-TH.jpg",
  "http://www.animal-photography.com/thumbs/silver_tabby_kittens~AP-0JO6Y9-TH.jpg",
  "http://www.animal-photography.com/thumbs/silver_tabby_kitten_looking_up~AP-0DLVMB-TH.jpg"];

//work section
for(var i = 0; i<works.length; i++){
    $("#work-img").append("\
    <div class='col-md-3 col-xs-6'>\
      <img class='img-responsive' src='"+works[i]+"'>\
    </div>\
    ");
    var images = $("#work-img img");
    if(i%2 === 0){
    $(images[i]).css("border", "2px solid DodgerBlue");
  } else {
    $(images[i]).css("border", "2px solid salmon");
  };
};