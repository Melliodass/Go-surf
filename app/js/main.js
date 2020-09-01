$(function(){

$('.header__slider').slick({
  infinite: true,
  fade: true,
  prevArrow: '<img class="slider-arrows slider-arrows__left slick-prev" src="img/arrow-left.svg">',
  nextArrow: '<img class="slider-arrows slider-arrows__right slick-next" src="img/arrow-right.svg">',
  asNavFor: '.slider-dots'
});

$('.slider-dots').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: false,
  asNavFor: '.header__slider'
});
  
$('.surf-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-map',
  prevArrow: '<img class="slider-arrows slider-arrows__left slick-prev" src="img/arrow-left.svg">',
  nextArrow: '<img class="slider-arrows slider-arrows__right slick-next" src="img/arrow-right.svg">'
});

$('.slider-map').slick ({
  slidesToShow: 8,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.surf-slider',
  focusOnSelect: true,

});
$('.holder__slider').slick({
  infinite: true,
  fade: true,
  prevArrow: '<img class="slider-arrows slider-arrows__left slick-prev" src="img/arrow-left.svg">',
  nextArrow: '<img class="slider-arrows slider-arrows__right slick-next" src="img/arrow-right.svg">',
  asNavFor: '.slider-dots'
});

$('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
$('.quantity').each(function() {
  var spinner = $(this),
    input = spinner.find('input[type="number"]'),
    btnUp = spinner.find('.quantity-up'),
    btnDown = spinner.find('.quantity-down'),
    min = input.attr('min'),
    max = input.attr('max');

  btnUp.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue >= max) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

  btnDown.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue <= min) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

});
let summ = $('.nights').val() * $('.summ').data('price') * $('.guests').val();
  $('.summ').html('$ ' + summ);
$('.quantity-button').on('click',function(){
  let summ = $('.nights').val() * $('.summ').data('price') * $('.guests').val();
  $('.summ').html('$ ' + summ);
});

});