
      $(window).on('load', function () {
          //$("#persiana").css({visibility:"hidden",opacity:"0"});
          //$("#persiana").animate({opacity:"0",width: "0"},"slow");
          $("#persiana").animate({opacity:"0.4",width: "0"},{
          duration: 3000,
          easing: "linear",
          step: function(x) {
            $("#demo").text(Math.round(x * 100 / $( document ).width())  + "%");
            //$('#demo').hide();  
          }
        });
          $(".site-wrapper").fadeOut(0);
          //$('#demo').hide();
      });

      $(document).ready(function() {
          setTimeout(function() {
              $("#demo").fadeOut(1000);
          },3000);

          setTimeout(function() {
              $(".site-wrapper").fadeIn(3000);
          },1000);

          $('[data-toggle="tooltip"]').tooltip();
      });

      $(function() {
      $("#changethewords").changeWords({
        time: 3500,
        animate: "tada",
        selector: "span",
        repeat:true
      });
    });

      function cambiarModal(modalOrigen,modalDestino){
        $(modalOrigen+" .close").click();
        //$(modalDestino).trigger("click");
        //$("#about").show();
        setTimeout(function() {
              $(modalDestino).modal();
          },500);
        
        
      }