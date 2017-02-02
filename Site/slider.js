$(document).ready(function(){
    $(".mySlider").slider({
      min: 8,
      max: 150,
      value: 15,
      orientation: "horizontal",
    });

    var fontSize = $( ".mySlider" ).slider("value");
    $(".container-1").css('font-size',fontSize);

    $(".mySlider").on( "slide", function() {
      var fontSize = $( ".mySlider" ).slider("value");
      $(".container-1").css('font-size',fontSize);
    });
});

$(document).ready(function(){
    $(".mySecondSlider").slider({
      min: 8,
      max: 150,
      value: 8,
      orientation: "horizontal",
    });

    var fontSize = $( ".mySecondSlider" ).slider("value");
    $(".container-2").css('font-size',fontSize);

    $(".mySecondSlider").on( "slide", function() {
      var fontSize = $( ".mySecondSlider" ).slider("value");
      $(".container-2").css('font-size',fontSize);
    });
});
