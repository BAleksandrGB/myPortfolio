$(document).ready(function () {
  const navId = [
    'hero',
    'about',
    'work',
    'services',
    'contacts'
  ]


  // bubled animation
  bublesAnimPg();

  // эфект перехода при нажатии на ссвлку в меню
  transitionPg();

  // аккордион
  // accordion();



  //function bubled animation
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


  //function transition page
  function transitionPg() {

    navId.forEach(el => {
      $(`#${el}`).click(function (e) {
        e.preventDefault();

        $('.radial').addClass('animation-radial');

        setTimeout(() => {


          $(`.visibleContent`).addClass('hiddenContent');
          $(`.visibleContent`).removeClass('visibleContent');

          if ($(`.${el}`).hasClass('hiddenContent')) {

            $(`.${el}`).removeClass('hiddenContent');
            $(`.${el}`).addClass('visibleContent');
          }

          if ($(`.${el}`).hasClass('active')) {
            $('.active').removeClass('active');
            $(`.${el}`).addClass('active')

          }

          // if ($(this).hasClass('work')) $('.work').toggleClass('d-none');
          // if ($(this).hasClass('services')) $('.services').toggleClass('d-none');
          // if ($(this).hasClass('contacts')) $('.contacts').toggleClass('d-none');

        }, 600);


        setTimeout(() => {
          $('.radial').removeClass('animation-radial');

        }, 1000);



      });


    });
  }



  // аккордион html шаблон добавление списка в тело аккордиона
  function html_acr_content(content) {
    return `<li class="list-item list-group-item-action">${content}</li>`
  }
  // аккордион html шаблон добавление элемента аккродиона
  function html_acr_list(count, itemAcrName) {
    return `
  <div class="accordion-item accordion-item-${count}">
  <h2 class="accordion-header">
    <button class="accordion-button  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${count}" aria-expanded="false" aria-controls="flush-collapse${count}">
      ${itemAcrName}
    </button>
  </h2>
  <div id="flush-collapse${count}" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
    <div class="accordion-body ui-scrollbar"><ul class="list-group"></ul></div>
  </div>
</div>
  `
  }


  const accоrdContent = [
    {
      title: "Верстка",
      content: [
        "Верстка по макетам в Figma",
        "Верстка по макетам в PSD",
        "Кроссбраузерная верстка",
        "Адаптивная верстка",
        "Блочная верстка",
        "Flex",
        "Grid",
        "Pixrl Perfect",
        "Семантическая верстка",
        "Использую методологию БЭМ",
        "Препроцессоры Sass(Scss)",
        "Библиотеки Bootstrap 5,Talwind"
      ]

    },
    {
      title: "Программирование",
      content: [
        "JavaScript",
        "React js (база)",
        "Node js (база)",
        "PHP"
      ]

    },
    {
      title: "Сборщики",
      content: [
        "Gulp",
        "WebPack"
      ]

    },
    {
      title: "Конфигурирование",
      content: [
        'Платворма 1С-Предприятие',
      ]

    },
    {
      title: "Версионирование",
      content: [
        "Git",
        "GitHub"
      ]

    },
    {
      title: "Работа в графических программах",
      content: [
        "Figma",
        "Photoshop",
        "Illustrator"
      ]

    }
  ]

  // function accordion(){
  for (let i = 0; i < accоrdContent.length; i++) {
    const itemList = accоrdContent[i];

    let stringHtml = html_acr_list((i + 1), itemList.title);
    $(stringHtml).appendTo('.accordion');

    for (let c = 0; c < itemList.content.length; c++) {
      stringHtml = html_acr_content((itemList.content[c]));
      $(stringHtml).appendTo('.accordion-body ul');
    }


    // }
  }


  // function bubles animation
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




  // найти по айдишнику элемент
  // узнать координаты скролла когда этот элемент находится в нужном положении
  // передать координаты элементу который будет всплывать
  // задать условие - если э



















  // Переменные:
  var current_scroll_position = 0;
  var scroll_target_position = 0;
  var previous_position = 0;
  var count = 0;
  var array_of_positions = [];
  var checkOnce = true;
  var target_position_images = 0;

 

  
  function cps() {
    if (previous_position < current_scroll_position) {
      scroll_target_position += array_of_positions[count] + 100;

      if (count >= 1) {

        $('#scene').animate({ scrollTop: target_position_images += $('.visualization-image').outerHeight() }, 500);
      }
    }
    else {
      previous_position -= array_of_positions[count] + 100;

      $('#scene').animate({ scrollTop: target_position_images -= $('.visualization-image').outerHeight() }, 500);
    }
    console.log(count);
  }

  function hendllerScroll(){
    current_scroll_position = Math.floor($('#contentId').scrollTop());
    
    if (checkOnce) {
      checkOnce = false;

      $(".paragraph").each(function () {
        array_of_positions.push($(this).height());
      })

      console.log(array_of_positions);
      cps();
    }



    if (current_scroll_position > scroll_target_position) {
      previous_position = scroll_target_position;

      if (count != 4) {
        count++;

        cps();
        

      }
      
    }

    if (current_scroll_position < previous_position) {
      scroll_target_position = previous_position;

      count--
      cps();
    }
  }

  var scrollTimeout;

  $('#contentId').on('wheel', function (e) {
 
  

     // Игнорировать дополнительные обработки при задержке
  if (scrollTimeout) {
    clearTimeout(scrollTimeout);
  }

  scrollTimeout = setTimeout(function() {
    hendllerScroll();
  
    console.log(current_scroll_position);

    // Сбросить таймаут
    scrollTimeout = null;
  }, 200); // Задержка в миллисекундах

  })
});
