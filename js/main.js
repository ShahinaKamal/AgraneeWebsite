

$(document).ready(function() { 
    var dir = "./img/Branding";
    $pattern="(\.jpg$)|(\.png$)|(\.jpeg$)|(\.gif$)"; //valid image extensions
        var fileextension = ".jpeg";
  $(document).ready(function(){
        $.ajax({
            url: dir,
            success: function (data) {
                console.log($(data));
                // $(data).find("a:contains(" + fileextension + ")").each(function () {
                //     var filename = this.href.replace(window.location.host, "").replace("http://", "");
                //     $("body").append("<img src='" + dir + filename + "'>");
                // });
            }
        });
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