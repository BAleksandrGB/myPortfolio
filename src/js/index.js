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


  // фильтрация моих работ
  filterWorks();

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





  function selectCategoryes() {
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

  }





  function filterWorks() {
    selectCategoryes()




    $('.works__filter-btn').click(function () {
      let filterName = $(this).data("filter");
      $(".works__card").filter(`:not(.${filterName})`).hide();
      $(".works__card").filter(`.${filterName}`).show();
    })
  }


  // функция для слайда туггла
  function slideToggle(elem) {
    $(elem).slideToggle("slow", function () {
      $('.burger > i').toggleClass('rotate-ico');
    });
  }


  prewCard()

  const CARDTILES = {
    status: "medium",//["light", "medium", "light"]
    rows: "1fr ",
    rowsPos: 1,

    /* methods*/
    gridTemplateRows(cl, sizeCol) {
      $(cl).css("gridTemplateRows", `repeat(${this.rowsPos},${sizeCol})`);
    },

    presentCardsHeight(cl, heighBlock) {
      $(cl).height(heighBlock);
    },

    gridRowStartEnd(cl, start, end) {
      $(cl).css("gridRowStart", `${start}`).css("gridRowEnd", `${end}`);
    },

    blockSize(el, h, w) {
      $(el).height(h).width(w);
    },

    blockHide(el) {
      $(el).hide(500);
    },

    jusContent(el) {
      $(el).css("justify-content", "space-around");
    },

    gap(el,val){
      $(el).css("column-gap", val);
    },

    removeInlineStyles(el) {
      $(el).slideDown(1000);
      setTimeout(() => {
        $(el).attr("style", "");
      }, 1100);
    },

    setStatus(status) {
      switch (status) {
        case "full":
          this.removeInlineStyles('.works__presentCards');
          this.removeInlineStyles(".top");
          this.removeInlineStyles(".bottomLeft");
          this.removeInlineStyles(".bottomRight");
          this.blockSize(".works__card-body", 160, 260);
          this.removeInlineStyles(".works__card-body--section:nth-child(3)");
          this.removeInlineStyles(".works__card-header");
          this.blockSize(".works__card", 360, 260);

          // this.removeInlineStyles(".works__card-body");
          // this.removeInlineStyles(".works__card");

          this.gap(".works__body-container",80);
          break;

        case "medium":
          this.blockHide(".top");
    
          this.blockSize(".works__card", 160, 260);

          this.presentCardsHeight('.works__presentCards', 12.5);
          this.presentCardsHeight(".bottomLeft", 12.5);
          this.presentCardsHeight(".bottomRight", 12.5);
          this.blockHide(".works__card-header");
          this.gap(".works__body-container",40);
          break;

        case "light":
          this.blockSize(".bottomLeft", 25, 25);
          this.blockHide(".bottomRight");
          this.blockSize(".works__card-body", 160, 160);
          this.blockSize(".works__card", 160, 160);
          this.blockHide(".works__card-body--section:nth-child(3)");
          this.jusContent(".works__card-body");
          this.gap(".works__body-container",20);
          break;
      }
    }
  }


  const LOOKWORK = {

  }


  function fullWork(){

  }


  function prewCard() {
    $('.works__presentCards').click(() => {

      if (CARDTILES.status == "medium") {
        CARDTILES.setStatus("medium");
        CARDTILES.status = "light";
        return;
      }

      if (CARDTILES.status == "light") {
        CARDTILES.setStatus("light");
        CARDTILES.status = "full";
        return;
      }
      CARDTILES.setStatus("full");
      CARDTILES.status = "medium";
    })
  }



  $(".g-form").submit(function (event) {
      event.preventDefault();
   
      // Ссылка, которую получили на этапе публикации приложения
      let appLink = "https://script.google.com/macros/s/AKfycbyEO5z6VkX-JmJBYP7a3WaQePBlN2klZQKUVPBE-yEjH1WPlp9dBXx3GZrhE0_6Yj6o/exec";
   
      // Сообщение при успешной отправке данных
      let successRespond = 'Сообщение успешно отправлено. Посмотрите результат <a target="_blank" href="https://docs.google.com/spreadsheets/d/1na4ZpOkptnsbsvz7JqueK1g9kVM3ifVAMHgZZdYWPZA/edit#gid=0">тут</a>';
   
      // Сообщение при ошибке в отправке данных
      let errorRespond = 'Не удалось отправить сообщение. Cвяжитесь с администратором сайта по адресу <a href="mailto:smart-landing@ya.ru">smart-landing@ya.ru</a>';
   
      // Id текущей формы
      let form = $('#' + $(this).attr('id'))[0];
   
      // h2 с ответом формы
      let formRespond = $(this).find('.g-form__title_respond');
   
      // h2 с заголовком формы
      let formTitle = $(this).find('.g-form__title_main');
   
      // Блок прелоадера
      let preloader = $(this).find('.g-form__preloader');
   
      // Кнопка отправки формы
      let submitButton = $(this).find('.g-form__button');
   
   
      // FormData
      let fd = new FormData(form);
   
   
      $.ajax({
   
        url: appLink,
        type: "POST",
        data: fd,
        processData: false,
        contentType: false,
        beforeSend: function(){
   
          if(fd.get('honeypot').length) {
            return false;
          } else {
            fd.delete('honeypot');
          }
   
        // Показываем прелоадер
        preloader.css('opacity', '1');
   
        // Делаем неактивной кнопку отправки
        submitButton.prop('disabled', true);
   
        // валидация других полей.
   
      },
   
    }).done(function(res, textStatus, jqXHR) {
   
      if(jqXHR.readyState === 4 && jqXHR.status === 200) {
   
      // Прячем заголовок формы
      formTitle.css({
        'display': 'none'
      });
   
      // Прячем прелоадер
      preloader.css('opacity', '0');
   
      // Выводим ответ формы.
      formRespond.html(successRespond).css('color', '#37b599');
       
      // Возвращаем активность кнопке отправки
      submitButton.prop('disabled', false);
   
        // Очищаем поля формы
        form.reset();
   
      } else {
        formTitle.css({
          'display': 'none'
        });
        formRespond.html(errorRespond).css('color', '#c64b4b');
        preloader.css('opacity', '0');
        setTimeout( () => {
          formRespond.css({
            'display': 'none'
          });
          formTitle.css({
            'display': 'block'
          });
   
          submitButton.prop('disabled', false);
        }, 5000);
   
        console.log('Гугл не ответил статусом 200');
      }
    }).fail(function(res, textStatus, jqXHR) {
      formTitle.css({
        'display': 'none'
      });
      preloader.css('opacity', '0');
      formRespond.html('Не удалось отправить сообщение. Cвяжитесь с администратором сайта другим способом').css('color', '#c64b4b');
      setTimeout( () => {
        formRespond.css({
          'display': 'none'
        });
        formTitle.css({
          'display': 'block'
        });
        submitButton.prop('disabled', false); 
      }, 5000);
   
      console.log('Не удалось выполнить запрос по указанному в скрипте пути');
    }); 
  });

});
