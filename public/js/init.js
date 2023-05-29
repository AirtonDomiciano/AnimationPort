/*-----------------------------------------------------------------------------------
/*
/* Init JS
/*
-----------------------------------------------------------------------------------*/
// eslint-disable-next-line no-undef
jQuery(document).ready(function async($) {
  console.log("Init JQuery");

  let palavras = ["Back-End", "Front-End", "Design Responsivo", "Mobile"];
  let inicio = 0;
  let intervalo = 1500;
  $("#souDesenvolvedor").text(palavras[inicio++]);
  setInterval(function () {}, intervalo);
  setInterval(function () {
    $("#souDesenvolvedor").slideUp(function () {
      if (inicio >= palavras.length) {
        inicio = 0;
      }
      $(this)
        .text(palavras[inicio++])
        .slideDown();
    });
  }, intervalo);

  /*----------------------------------------------------*/
  /* Highlight the current section in the navigation bar
  /*----------------------------------------------------*/

  // var sections = $("section");
  // var navigation_links = $("#nav-wrap a");

  // sections.waypoint({
  //   handler: function(event, direction) {
  //     var active_section;

  //     active_section = $(this);
  //     if (direction === "up") {
  //       active_section = active_section.prev();
  //     }

  //     var active_link = "";
  //     if (active_section.attr("id") === undefined) {
  //       var active_link = $('#nav-wrap a[href="#' + "home" + '"]');
  //       $("ul#nav").css("width", "auto");
  //       $("ul#nav").css("margin", "0px 10px 0px 0px");
  //     } else {
  //       var active_link = $( 
  //         '#nav-wrap a[href="#' + active_section.attr("id") + '"]'
  //       );
  //       $("ul#nav").css("width", "80%");
  //       $("ul#nav").css("margin", "0 auto");
  //     }

  //     navigation_links.parent().removeClass("current");
  //     active_link.parent().addClass("current");
  //   },
  //   offset: "35%",
  // });

  /*----------------------------------------------------*/
  /* Smooth Scrolling
  /*----------------------------------------------------*/

  $(document).on("click", ".smoothscroll", function async(e) {
    console.log("smoothscroll click");
    e.preventDefault();
    var target = this.hash;
    const $target = $(target);

    console.log($target.offset().top, '=>', target );

    $('#content')
      .stop()
      .animate({ scrollTop: $target.offset().top }, 800, "swing", function() {
        window.location.hash = target;
      });
  });

  /*----------------------------------------------------*/
  /*	Fade In/Out Primary Navigation
  ------------------------------------------------------*/
  // usado para saber onde está o scroll
  // $('#content').on("scroll", function() {
  //   var h = $("header").height();
  //   var y = $(window).scrollTop();
  //   var nav = $("#nav-wrap");

  //   if (y > h * 0.2 && y < h && $(window).outerWidth() > 768) {
  //     nav.fadeOut("fast");
  //   } else {
  //     // Remove back-ground do header ao usar o scroll
  //     if (y < h * 0.2) {
  //       nav.removeClass("opaque").fadeIn("fast");
  //     } else {
  //       nav.addClass("opaque").fadeIn("fast");
  //     }
  //   }
  // })

});
