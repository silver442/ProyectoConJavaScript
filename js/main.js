$(document).ready(function(){

    // Slider
    if(window.location.href.indexOf('index') > -1){
        $('.galeria').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            Responsive: true
          });

      // Posts
      var posts = [
        {
            title: 'Prueba de titulo 1',
            date: "publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: "aliquam quisquam voluptas cupiditate iusto, culpa excepturi, sunt rerum numquam amet a quia. Lorem ipsum "
        },
        {
            title: 'Prueba de titulo 2',
            date: "publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: "aliquam quisquam voluptas cupiditate iusto, culpa excepturi, sunt rerum numquam amet a quia. Lorem ipsum "
        
        },
        {
            title: 'Prueba de titulo 3',
            date: "publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: "aliquam quisquam voluptas cupiditate iusto, culpa excepturi, sunt aliquam quisquam voluptas cupiditate iusto, culpa excepturi, sunt rerum numquam amet a quia. Lorem ipsum rerum numquam amet a quia. Lorem ipsum "
        
        },
        {
            title: 'Prueba de titulo 4',
            date: "publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: "aliquam quisquam voluptas cupiditate iusto, culpa excepturi, sunt aliquam quisquam voluptas cupiditate iusto, culpa excepturi, sunt rerum numquam amet a quia. Lorem ipsumaliquam quisquam voluptas cupiditate iusto, culpa excepturi, sunt rerum numquam amet a quia. Lorem ipsum rerum numquam amet a quia. Lorem ipsum "
        },
        {
            title: 'Prueba de titulo 5',
            date: "publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: "aliquam quisquam voluptas cupiditate iusto, culpa excepturi, sunt rerum numquam amet a quia. Lorem ipsum aliquam quisquam voluptas cupiditate iusto, culpa excepturi, sunt rerum numquam amet a quia. Lorem ipsumaliquam quisquam voluptas cupiditate iusto, culpa excepturi, sunt rerum numquam amet a quia. Lorem ipsumaliquam quisquam voluptas cupiditate iusto, culpa excepturi, sunt rerum numquam amet a quia. Lorem ipsum"
        },
        {
            title: 'Prueba de titulo 6',
            date: "publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: "aliquam quisquam voluptas cupiditate iustoaliquam quisquam voluptas cupiditate iustoaliquam quisquam voluptas cupiditate iustoaliquam quisquam voluptas cupiditate iustoaliquam quisquam voluptas cupiditate iusto, culpa excepturi, sunt rerum numquam amet a quia. Lorem ipsum "
        }
      ]

      posts.forEach((item, index) => {
        var post = `
                    <article class="post">
                        <h2>${item.title}</h2>
                        <span class="date">${item.date}</span>
                        <p> 
                            ${item.content}
                        </p>
                        <a href="#" class="button-more">Leer más</a>
                    </article>
        `;

        $("#posts").append(post);
      });
    }
      // Selector de tema
      var theme = $("#theme");

      $("#to-green").click(function(){
        theme.attr("href", "css/green.css");
      });

      $("#to-red").click(function(){
        theme.attr("href", "css/red.css");
      });

      $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css");
      });

      // Scroll arriba de la web
      $('.subir').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);

        return false;
      });

      // Login falso

      $("#login form").submit(function(){
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);

   });

   var form_name = localStorage.getItem("form_name");

   if(form_name != null && form_name != "underfined"){
        var about_parrafo = $("#about p");
        about_parrafo.html("<br><strong>Bienvenido, " + form_name + "</strong>");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");
        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
   }

   //Acordeon
   if(window.location.href.indexOf('about') > -1){

    $("#acordeon").accordion();

   }

   //Reloj
   if(window.location.href.indexOf('reloj') > -1){

    setInterval(function(){
        var reloj = moment().format("hh:mm:ss");

        $('#reloj').html(reloj);

    }, 1000);
   }
});