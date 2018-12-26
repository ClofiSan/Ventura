

//quotes
$('#next_quote').on('click',function () {
    var quote_bubble = $('.quote_box:visible');
    if (quote_bubble.next().length){
        quote_bubble.next().show();
    } else {
        $('.quote_box:first').show();
    }
    quote_bubble.hide();
});
$('#previous_quote').on('click',function () {
    var quote_bubble = $('.quote_box:visible');
    if (quote_bubble.prev().length){
        quote_bubble.prev().show();
    } else {
        $('.quote_box:last').show();
    }
    quote_bubble.hide();
});

