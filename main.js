//----------------------------------------------slide example-----------------------------------------


$("h1").on("click", function(){


    $("#features").slideToggle(3000)


})



//----------------------------------------------animated example-----------------------------------------
// $("#button1").click(function () {
//     $("#example1").animate({ left: '250px' });

// });
//------------------------------------------ multiple function + finish + queue animated example---------------------------

//     $("#button2").click(function(){
//       let div = $("#example2");
//       startAnimation();
//       function startAnimation(){
//         div.animate({height: 300}, "slow")
//         .animate({width: 300}, "slow")
//         .css("background-color", "red") 
//         .animate({height: 100}, "slow")
//         .animate({width: 100}, "slow"/*, startAnimation*/);
//       } 
//     });

//     $("#button3").click(function(){

//     $("#example2").stop()


//     // $("#example2").finish()

//     showIt()


//     })


//   function showIt() {
//     let n = $("#example2").queue( "fx" ); 
//         console.log(n);
        
    
//   }



//------------------------------------------ multiple function animated example 2---------------------------


// $("#button1").click(function () {
//     $("#example1").animate({
//         left: '250px',
//         opacity: '0.5',
//         height: '150px',
//         width: '150px'
//     });
// });



//------------------------------------------ fade example-------------------------------------------------

// $(document).ready(function(){
//     $("#hide").click(function(){
//       $("p").hide();
//     });
//     $("#show").click(function(){
//       $("p").show();
//     });
//   });


//------------------------------------------ toggle example-------------------------------------------------

// $(document).ready(function(){
//     $("button").click(function(){
//       $("p").toggle();
//     });
//   });


//------------------------------------------ progress bar example-------------------------------------------------


// $(document).ready(function(){
//     $("#btn").click(function(){
//       $("#boxbar").animate({
//         width: "400px"
//       }, {
//         duration: 5000,
//         easing: "linear",
//         step: function(x) {
//           $("#demo").text(Math.round(x * 100 / 400)  + "%");  
//         }
//       });
//     });
//   });