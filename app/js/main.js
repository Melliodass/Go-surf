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
$('.travel__slider').slick({
  infinite: true,
  fade: true,
  prevArrow: '<img class="slider-arrows slider-arrows__left slick-prev" src="img/arrow-left.svg">',
  nextArrow: '<img class="slider-arrows slider-arrows__right slick-next" src="img/arrow-right.svg">',
  asNavFor: '.slider-dots'
});
});