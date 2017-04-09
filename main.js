$('.nav-item').on('click', function(e) {
  $(this).siblings().removeClass('active')
  $(this).addClass('active')
  return false;
})

$('.login').on('click', function(e) {
  return false;
})
