
      var Body = {
        setColor : function(targetColor){
          //document.querySelector('body').style.color = targetColor;
          $('body').css('color', targetColor);
        },

        setBackgroundColor : function(targetColor){
          //document.querySelector('body').style.backgroundColor = targetColor;
          $('body').css('backgroundColor', targetColor);
        }

      }


      var Links = {
         setColor:function(targetColor){
        //     var links = document.querySelectorAll('a');
        //     for(var i=0; i<links.length; i++)
        //       links[i].style.color = targetColor;
        // 
              $('a').css('color', targetColor);
          }

      }

      function dayNightHandler(self){
           var target = document.querySelector('body');
            if(self.value==='Night'){
                Body.setBackgroundColor('black');
                Body.setColor('white');
                self.value = "Day";

                Links.setColor("powderblue");

            }
            else{
                Body.setBackgroundColor('white');
                Body.setColor('black');
                self.value='Night';

                Links.setColor("blue");
            }
        }