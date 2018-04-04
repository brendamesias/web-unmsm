$(document).ready(function() {

      $(".button-collapse").sideNav();

      $(".carousel.carousel-slider").carousel({
            fullWidth: true,
            indicators: true
      });
      setInterval(function(){
            $(".carousel.carousel-slider").carousel('next');
      }, 8000);

      $.getScript("data.js");


            
            let containerEvents = $('.events-container')
            for (let i = 0; i < data.length; i++) {
                 var evento = $('#event');

                  var eventsCloned = evento.clone(true);

                  eventsCloned[0].childNodes[1].childNodes[1].childNodes[1].attributes[1].nodeValue = "assets/events/" + data[i].imagen;
                  eventsCloned[0].childNodes[1].childNodes[3].children[0].textContent = data[i].nombre;
                  eventsCloned[0].childNodes[1].childNodes[5].children[0].textContent = data[i].fecha;
                  //  console.log(eventsCloned[0].childNodes[1].childNodes[3].children[0].textContent);
             
                  eventsCloned.removeClass('none');
                  containerEvents.prepend(eventsCloned);

                  eventsCloned.click(function(event) {
                        $('.modal').modal();
                        var modalForEvent = $('#modal1');
                        var modalCloned = modalForEvent.clone(true);

                        modalCloned[0].children[0].children[0].textContent = data[i].nombre
                        modalCloned[0].children[0].children[1].children[0].attributes[1].nodeValue = "assets/events/" + data[i].imagen;
                        console.log(modalCloned[0].children[0].children[1].children[0].attributes[1].nodeValue)

                        // $('#modal1').remove();
                        // containerEvents.prepend(eventsCloned);
                        // $( "body" ).append(modalCloned.html());

                        $("#modal1").replaceWith(modalCloned);
                        $('.modal').modal();

                        
                  });
                  
            }
    
      

      

      // imgEven.click(function(event) {
      //       var user = firebase.auth().currentUser;
      //       var clonePost = structurePublication.cloneNode(true);
      //       var inputImgmodal = document.querySelector('#input_img_post');
      //       clonePost.querySelector('#tag-of-post').textContent = valorInputTag ;
      //       $('#tag-of-post').attr('class', 'tags-posts');
      //       clonePost.querySelector('#type-of-post').textContent = valorInputTypePost ;
      //       $('#type-of-post').attr('class', 'tags-posts')
      //       clonePost.querySelector('#description_post').textContent = inputDescriptionPostVal ;
      //       clonePost.querySelector('#time-of-post').textContent = moment().subtract(10, 'days').calendar() + '  ' + moment().format('LT');
        
      //       // Cambiamos la imagen default por la imagen del usuario en los posts
      //       $('#photo_user_post').attr('src', user.photoURL);
      //       $('#name_user_post').text(user.displayName);
        
      //       // Extraemos elemento html img por defecto del post clonado
      //       var imgPostClone = clonePost.querySelector('#img_post');
        
      //       // Extraemos img del input del modal
      //       var fileImgInputNewPost = inputImgmodal.files[0].name ;
      //       // console.log(fileImgInputNewPost);
      //       var reader = new FileReader();
        
      //       reader.onload = function(event) {
      //         // console.log(event.target.result);
      //         imgPostClone.setAttribute('src', event.target.result);
      //         imgPostClone.setAttribute('class', 'img-responsive');
      //       };
      //       reader.readAsDataURL(inputImgmodal.files[0]);
        
      //       clonePost.classList.remove('display_none');
      //       containerPublications.prepend(clonePost);
      //     });// Termina el evento de clik en  el boton submitt







});
