$(document).ready(function() {
  $('.banner-title, .about, .works, .contact').addClass('opacity-on');
  $('.btn-mobile-list').on(('click'), function() {
    $('.navbar-list').toggleClass('navbar-list-on');
  });
  setTimeout(() => {
    $('.works-group-desktop .works-item:nth-child(1)').addClass('works-display');
  }, 1000);
  setTimeout(() => {
    $('.works-group-desktop .works-item:nth-child(2)').addClass('works-display');
  }, 1500);
  setTimeout(() => {
    $('.works-group-desktop .works-item:nth-child(3)').addClass('works-display');
  }, 2000);
  setTimeout(() => {
    $('.works-content').addClass('works-content-display');
  }, 3000);

  $('.btn-skills').on(('click'), function () {
    const widthArray = [90, 85, 75, 70, 80, 50, 65, 30];
    $('.skills').css({ 'width': '90%' });
    setTimeout(() => {
      $('.skills').css({ 'height': '90%' });
    }, 1500);
    setTimeout(() => {
      $('.skills-list').css({ 'height' : '80%', 'width' : '80%', 'padding-top' : '2%'});
    }, 3000);
    for (let count = 0; count <= 500 * 8; count += 500) {
      setTimeout(() => {
        $(`.skills-list li:nth-child(${count / 500 + 1}) .bar`).css({ 'width' : `${widthArray[count / 500]}%`});
        setTimeout(() => {
          $(`.skills-list li:nth-child(${count / 500 + 1}) p`).css({ 'opacity': '1' });
        }, 500);
      }, 4500 + count);
    }
    setTimeout(() => {
      $('.scale-bar').css({ 'width': '100%' });
    }, 4500);
    setTimeout(() => {
      $('.scale-bar span').css({ 'opacity' : '1' });
    }, 8500);
  })

  $('.close').on(('click'), function () {
    $('.skills').css({ 'height': '0px' });
    setTimeout(() => {
      $('.skills').css({ 'width': '0px' });
    }, 1500);
  })
});

function worksItemRemove() {
  $('.works-item').removeClass('works-display');
  $('.works-content').removeClass('works-content-display');
}