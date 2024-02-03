$(document).ready(function () {






  $('.navigationBox').hover(function () {
    // over
  }, function () {
    // out
    $('.menuToggle').toggleClass('menuToggle');
  }
  );


  var htmlString = ` 
    <div class="circle-container">
   <div class="circle"></div>
</div>
    `;
  for (let i = 0; i < 100; i++) {
    $('body').append(htmlString);
  }


  /*блоки взаимодействия
  menu
    about
    work
    services
    contacts
  
  
  hello 
      content1
  
  skills
  
  */




  const navId = [
    'hero',
    'about',
    'works',
    'services',
    'contacts'
  ]


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
        if ($(this).hasClass('work')) $('.work').toggleClass('d-none');
        if ($(this).hasClass('services')) $('.services').toggleClass('d-none');
        if ($(this).hasClass('contacts')) $('.contacts').toggleClass('d-none');

      }, 600);


      setTimeout(() => {
        $('.radial').removeClass('animation-radial');
      }, 1000);


    });


  });
});
