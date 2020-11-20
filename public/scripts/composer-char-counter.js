$(document).ready(function() {
  
  $('.new-tweet textarea').on('input', function() {
    const output = $(this).parent().find('output');
    let counter = 140 - $(this).val().length;
  
    if (counter < 0 && !$(output).hasClass('invalid-input')) {
      $(output).addClass('invalid-input');
    } else if (counter >= 0 && $(output).hasClass('invalid-input')) {
      $(output).removeClass('invalid-input');
    }
    $(output).text(counter);
  });
  
});