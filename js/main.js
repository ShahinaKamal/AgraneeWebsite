!(function($) {
    "use strict";

// import {glob } from 'glob';
// import { readFile } from 'fs';
 
// let readFiles = function (path, forFile) {
//     path=path||'../img/Branding/*';
//     //pat = pat || '*.js';
//     forFile = forFile || function (content) {
//         console.log(content);
//     };
 
//     glob('*.js', function (err, files) {
 
//         if (err) {
 
//             console.log(err);
 
//         } else {
 
//             files.forEach(function (file) {
 
//                 readFile(file, function (err, data) {
 
//                     if (err) {
 
//                         console.log(err);
 
//                     } else {
 
//                         forFile(data.toString());
 
//                     }
 
//                 });
 
//             });
 
//         }
 
//     });
 
// };
 
// readFiles();


function loadFromFolder(folderName){
  $('.carousel-inner').html("");
  var carousel_item_div = document.createElement("div"); 
  var counter=1;

    carousel_item_div.setAttribute("class","carousel-item active")
   

  
 
    var dir = "./img/"+folderName;
   // $pattern="(\.jpg$)|(\.png$)|(\.jpeg$)|(\.gif$)"; //valid image extensions
   var fileextension = [".png", ".jpg"];
  // var container=document.getElementsByClassName('.portfoilo-container');
     $.ajax({
            url: dir,
            success: function (data) {
                console.log($(data));
               
                $(data).find("a:contains(" + (fileextension[0]) + "), a:contains(" + (fileextension[1]) + ")").each(function () {
                  console.log("counter"+counter);
                  if(counter>3 && counter %3==1){
                    carousel_item_div=document.createElement("div");
                    carousel_item_div.setAttribute("class","carousel-item");
                  }
                   
                    var filename = this.href.replace(window.location.host, "").replace("http://", "");
                    console.log(filename);
                    var slide_item = document.createElement("div");   // Create a <button> div.

                    if(folderName==='Latest'){
                      slide_item.setAttribute("class","col-md-4 mb-4 filter-latest"); 
                    }
                    else if(folderName==='Branding'){
                      slide_item.setAttribute("class","col-md-4 mb-4 filter-branding");
                    }
                    else if(folderName==='Events'){
                      slide_item.setAttribute("class","col-md-4 mb-4 filter-events");
                    }
                    else if(folderName==='Promotion'){
                      slide_item.setAttribute("class","col-md-4 mb-4  filter-promotions");
                    }
                    else if(folderName==='Stall_Design'){
                      slide_item.setAttribute("class","col-md-4 mb-4 filter-designs");
                    }

                    var card_div=document.createElement("div");
                    card_div.setAttribute("class","card");
                    var img=document.createElement("img");
                    img.src=filename;
                    img.classList.add('img-fluid');
                    console.log(img);
                    card_div.appendChild(img);
                    slide_item.appendChild(card_div);
                    carousel_item_div.appendChild( slide_item);
                    // console.log(carousel-item-div);
                   
                    counter=counter+1;
                   
                    $('.carousel-inner').append( carousel_item_div);

                    // $('.portfoilo-container').style.height="600px";
                    // $("body").append("<img src='" + "" + filename + "'>");
                    // $('.portfoilo-container').append("<img src='" + "" + filename + "'>");
                });
            }
        });


}






 // Back to top button
//  $(window).scroll(function() {
//     if ($(this).scrollTop() > 100) {
//       $('.back-to-top').fadeIn('slow');
//     } else {
//       $('.back-to-top').fadeOut('slow');
//     }
//   });

//   $('.back-to-top').click(function() {
//     $('html, body').animate({
//       scrollTop: 0
//     }, 1500, 'easeInOutExpo');
//     return false;
//   });



 // Porfolio isotope and filter
 $(window).on('load', function() {
   loadFromFolder('Latest');
       
    var portfolioIsotope = $('.portfoilo-container').isotope({
      itemSelector: '.portfolio-item'
    });
   

   
    $('#portfolio-filters li').on('click', function(event) {
         
        var filter=event.target.dataset.filter;
        console.log(filter);
       if(filter==='.filter-branding'){
        loadFromFolder('Branding');
       }
       else if(filter==='.filter-events'){
        loadFromFolder('Events');
       }
      else if(filter==='.filter-promotions'){
        loadFromFolder('Promotion');
       }
      
      else  if(filter==='.filter-designs'){
        loadFromFolder('Stall_Design')
       }
       else{
        loadFromFolder('Latest');
       }



      $("#portfolio-filters li").removeClass('filter-active');
      
      $(this).addClass('filter-active');
   
      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });

    //console.log($("#portfolio-filters li")[0].dataset.filter);

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
  });



  //Init AOS -Animate on scroll library
function aos_init(){
    AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true
      });
}
aos_init();

})(jQuery);