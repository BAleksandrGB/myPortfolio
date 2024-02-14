$(document).ready(function () {
  // инициализация переменных
  var animParam = [
    "anim-title 1s 1.5s",
    "anim-title-stoke 1.5s ",
    'animListAbout 2s 1s'
  ];
  var chk = false;
  var offset = $('.about').offset();
  var top = offset.top;

  var canvas = $('#canvas');
  var svg__cicle__seccondaty = $('#svg-cicle-seccondaty');
  var svg__cicle__succes = $('#svg-cicle-succes');
  var svg__cicle__third = $("#svg-cicle-third");
  var competences__accord = $('.competences__accord');

  // функция для создания пузырей
  function bublesAnimPg() {
    var htmlString = `
  <div class="circle-container">
    <div class="circle"></div>
  </div>
  `;
    for (let i = 0; i < 100; i++) {
      $('body').append(htmlString);
    }
  }

  // функция для работы аккордиона
  function accordion_action(cls) {
    $(cls).each((ind, element) => {

      // вешаем события на иконку вкладки аккордиона
      $(element).click(function (e) {
        e.preventDefault();

        // добавление/удаление класса с анимацией икодки открытия вкладки
        $(`.competences__accord-btn:nth(${ind}) > .competences__accord-btn--icon > span`).each(function (idx, elem) {
          $(elem).toggleClass(`open${idx + 1}`);
        });

        // открытие/закрытие вкладки
        $(`.competences__accord-body:nth(${ind})`).toggle("slow");
      });
    });
  }

  // инициализация пузырей
  bublesAnimPg();

  // настройка работы аккордиона
  accordion_action('.competences__accord-btn');

  // прослушка прокрутки страницы
  $(window).on("scroll", function () {

    if (chk) {
      return;
    }

    if ($(window).scrollTop() > top - 200) {
      $('.about__content h1').eq(0).css('animation', `${animParam[0]} ease-in-out forwards`);
      $('.about__content h1').eq(1).css('animation', `${animParam[1]} ease-in-out forwards`);
      $('.about__content ul').css('animation', `${animParam[2]} ease-in-out forwards`);
      chk = true;
    }

  });

  // функция для работы бургера
  $('.burger').click(function () {
    slideToggle(".header");
  });







  // событие клик по кнопке "Верстка" [data-layout]
  $('[data-layout]').click(function () {
    $(".works__card").show();

    $('[data-AppsBtns]').slideUp("slow");
    $('.groupCards-apps').slideUp("slow")


    $("[data-LayoutBtns]").slideDown(1000);
    $(".groupCards-layout").slideDown(1000)


  });


  // событие клик по кнопке "Приложения" [data-apps]
  $('[data-apps]').click(function () {
    $(".works__card").show();

    $('[data-LayoutBtns]').slideUp("slow");

    $('.groupCards-layout').slideUp("slow");


    $("[data-AppsBtns]").slideDown(1000);

    $(".groupCards-apps").slideDown(1000);



  });




  $('.works__filter-btn').click(function () {
    let filterName = $(this).data("filter");

    $(".works__card").filter(`:not(.${filterName})`).hide();
    $(".works__card").filter(`.${filterName}`).show();

  })

  // функция для слайда туггла
  function slideToggle(elem) {
    $(elem).slideToggle("slow", function () {
      $('.burger > i').toggleClass('rotate-ico');
    });
  }

});