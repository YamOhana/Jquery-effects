// $("#features").toggle(display)




//----------------------------------------------animated example-----------------------------------------
// $("#button1").click(function () {
//     $("#example1").animate({ left: '250px' });

// });

//------------------------------------------ multiple function animated example---------------------------


// $("#button1").click(function () {
//     $("#example1").animate({
//         left: '250px',
//         opacity: '0.5',
//         height: '150px',
//         width: '150px'
//     });
// });



//------------------------------------------ fade example-------------------------------------------------

$(document).ready(function(){
    $("#hide").click(function(){
      $("p").hide();
    });
    $("#show").click(function(){
      $("p").show();
    });
  });