$('.switch').hover(function() {
    $(this).closest('.avg_words').hide();
    $(this).next('div').closest('.avg_num').show();
}, function() {
    $(this).next('div').closest('.avg_num').hide();
    $(this).closest('.avg_words').show();
});
