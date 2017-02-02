// How to create a jQuery accordion menu

//$('.inside').hide(); // initially hide the inside content
 
//set event listener to trigger on menu click
$('.menu-title').click(function() {
    
    $(this).next('.inside').slideToggle(); // find the next bottom content afterthe header and toggle it up or down depending on its current state.
    
});

$('.sub-inside').hide(); // initially hide the inside content
 

//set event listener to trigger on menu click
$('.sub-menu-title').click(function() {
    
    $(this).next('.sub-inside').slideToggle(); // find the next inside content afterthe header and toggle it up or down depending on its current state.
    
});


$('#accordion2 .Aileron-regular').click(function() {
     $('.container-2').css('font-family', 'aileron-regular')
     $('#colorleft .change-color-blue').css('background-color', '#0a5582');
     $('.container-2').css('color', '#0a5582');
 });

$('#accordion1 .Aileron-regular').click(function() {
     $('.container-1').css('font-family', 'aileron-regular')
     $('#colorright .change-color-blue').css('background-color', '#0a5582');
     $('.container-1').css('color', '#0a5582');
 });

$('#accordion2 .aileronbold-webfont').click(function() {
     $('.container-2').css('font-family', 'aileronbold-webfont')
     $('#colorleft .change-color-blue').css('background-color', '#0a5582');
     $('.container-2').css('color', '#0a5582');
 });

$('#accordion1 .aileronbold-webfont').click(function() {
     $('.container-1').css('font-family', 'aileronbold-webfont')
     $('#colorright .change-color-blue').css('background-color', '#0a5582');
     $('.container-1').css('color', '#0a5582');
 });

$('#accordion2 .youngserifregular-webfont').click(function() {
     $('.container-2').css('font-family', 'youngserifregular-webfont');
     $('#colorleft .change-color-blue').css('background-color', '#c83b3f');
     $('.container-2').css('color', '#c83b3f');
 });

$('#accordion1 .youngserifregular-webfont').click(function() {
     $('.container-1').css('font-family', 'youngserifregular-webfont')
     $('#colorright .change-color-blue').css('background-color', '#c83b3f');
     $('.container-1').css('color', '#c83b3f');
 });

$('#accordion2 .bagnardregular-webfont').click(function() {
     $('.container-2').css('font-family', 'bagnardregular-webfont')
     $('#colorleft .change-color-blue').css('background-color', '#f3df21');
     $('.container-2').css('color', '#f3df21');
 });

$('#accordion1 .bagnardregular-webfont').click(function() {
     $('.container-1').css('font-family', 'bagnardregular-webfont')
     $('#colorright .change-color-blue').css('background-color', '#f3df21');
     $('.container-1').css('color', '#f3df21');
 });

$('#accordion2 .sporting_grotesquenormal-webfont').click(function() {
     $('.container-2').css('font-family ', 'sporting_grotesquenormal-webfont')
     $('#colorleft .change-color-blue').css('background-color', '#ccdb49');
     $('.container-2').css('color', '#ccdb49');
 });

$('#accordion1 .sporting_grotesquenormal-webfont').click(function() {
     $('.container-1').css('font-family ', 'sporting_grotesquenormal-webfont')
     $('#colorright .change-color-blue').css('background-color', '#ccdb49');
     $('.container-1').css('color', '#ccdb49');
 });

$('#accordion2 .maximage_jululuregular-webfont').click(function() {
     $('.container-2').css('font-family', 'maximage_jululuregular-webfont')
     $('#colorleft .change-color-blue').css('background-color', '#b38b1f');
     $('.container-2').css('color', '#b38b1f');
 });

$('#accordion1 .maximage_jululuregular-webfont').click(function() {
     $('.container-1').css('font-family', 'maximage_jululuregular-webfont')
     $('#colorright .change-color-blue').css('background-color', '#b38b1f');
     $('.container-1').css('color', '#b38b1f');
 });

$('#accordion2 .maximage_jululu_outline-webfont').click(function() {
     $('.container-2').css('font-family', 'maximage_jululu_outline-webfont')
     $('#colorleft .change-color-blue').css('background-color', '#b38b1f');
     $('.container-2').css('color', '#b38b1f');
 });

$('#accordion1 .maximage_jululu_outline-webfont').click(function() {
     $('.container-1').css('font-family', 'maximage_jululu_outline-webfont')
     $('#colorright .change-color-blue').css('background-color', '#b38b1f');
     $('.container-1').css('color', '#b38b1f');
 });

$('#accordion2 .vtf_misterpixelregular').click(function() {
     $('.container-2').css('font-family', 'vtf_misterpixelregular')
     $('#colorleft .change-color-blue').css('background-color', '#4aa882');
     $('.container-2').css('color', '#4aa882');
 });

$('#accordion1 .vtf_misterpixelregular').click(function() {
     $('.container-1').css('font-family', 'vtf_misterpixelregular')
     $('#colorright .change-color-blue').css('background-color', '#4aa882');
     $('.container-1').css('color', '#4aa882');
 });

$('#accordion2 .vtf_misterpixeltools-webfont').click(function() {
     $('.container-2').css('font-family', 'vtf_misterpixeltools-webfont')
     $('#colorleft .change-color-blue').css('background-color', '#4aa882');
     $('.container-2').css('color', '#4aa882');
 });

$('#accordion1 .vtf_misterpixeltools-webfont').click(function() {
     $('.container-1').css('font-family', 'vtf_misterpixeltools-webfont')
     $('#colorright .change-color-blue').css('background-color', '#4aa882');
     $('.container-1').css('color', '#4aa882');
 });

$('#accordion2 .bluu_nextbold-webfont').click(function() {
     $('.container-2').css('font-family', 'bluu_nextbold-webfont')
     $('#colorleft .change-color-blue').css('background-color', '#efd577');
     $('.container-2').css('color', '#efd577');
 });

$('#accordion1 .bluu_nextbold-webfont').click(function() {
     $('.container-1').css('font-family', 'bluu_nextbold-webfont')
     $('#colorright .change-color-blue').css('background-color', '#efd577');
     $('.container-1').css('color', '#efd577');
 });

$('#accordion2 .Autobahn').click(function() {
     $('.container-2').css('font-family', 'autobahn')
     $('#colorleft .change-color-blue').css('background-color', '#c9298e');
     $('.container-2').css('color', '#c9298e');
 });

$('#accordion1 .Autobahn').click(function() {
     $('.container-1').css('font-family', 'autobahn')
     $('#colorright .change-color-blue').css('background-color', '#c9298e');
     $('.container-1').css('color', '#c9298e');
 });

$('#accordion2 .kaushan-script').click(function() {
     $('.container-2').css('font-family', 'kaushan-script')
     $('#colorleft .change-color-blue').css('background-color', '#c95124');
     $('.container-2').css('color', '#c95124');
 });

$('#accordion1 .kaushan-script').click(function() {
     $('.container-1').css('font-family', 'kaushan-script')
     $('#colorright .change-color-blue').css('background-color', '#c95124');
     $('.container-1').css('color', '#c95124');
 });

$('#accordion2 .lackregular-webfont').click(function() {
     $('.container-2').css('font-family', 'lackregular-webfont')
     $('#colorleft .change-color-blue').css('background-color', '#502e72');
     $('.container-2').css('color', '#502e72');
 });

$('#accordion1 .lackregular-webfont').click(function() {
     $('.container-1').css('font-family', 'lackregular-webfont')
     $('#colorright .change-color-blue').css('background-color', '#502e72');
     $('.container-1').css('color', '#502e72');
 });

//couleurs


$('#colorleft .change-color-blue').click(function() {
//on cherche la variable de la couleur
    var couleur = $('#colorleft .change-color-blue').css('background-color');
        $('.container-2').css('color', couleur);
 });

$('#colorright .change-color-blue').click(function() {
      var couleur = $('#colorright .change-color-blue').css('background-color');
      $('.container-1').css('color', couleur);
 });


//noir

$('#colorleft .change-color-black').click(function() {
     $('.container-2').css('color', 'black')
 });

$('#colorright .change-color-black').click(function() {
     $('.container-1').css('color', 'black')
 });

