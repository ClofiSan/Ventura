// fixed header

header = $('header');
main_menu = $('div#main_menu');
service_menu_height = $('nav #service_menu').outerHeight();

$(window).resize(function() {
    service_menu_height = $('nav #service_menu').outerHeight();
});

$(window).scroll(function(){
    if ($(window).scrollTop() >= service_menu_height) {
        header.height(header.height());
        main_menu.addClass('fixed_main_menu').width(header.width()).css({ left: header.offset().left+'px' });
    }
    else {
        main_menu.removeClass('fixed_main_menu').width('auto');
        header.height('auto');
    }
});







// quotes
$('#next-quote').on('click', function(){
    var active_bubble = $('.speech-bubble:visible');
    if (active_bubble.next().length) { active_bubble.next().show(); }
    else { $('.speech-bubble:first').show(); }
    active_bubble.hide();
});

$('#previous-quote').on('click', function(){
    var active_bubble = $('.speech-bubble:visible');
    if (active_bubble.prev().length) { active_bubble.prev().show(); }
    else { $('.speech-bubble:last').show(); }
    active_bubble.hide();
});









// smile picker
$('#smile-picker a').click( function(){
    $('input[name="smile"]').val( $(this).prop('rel'));
    $('#smile-picker a').removeClass('selected');
    $(this).addClass('selected');
    return false;
});









// slideshow
if ( $(".slideshow-container").length )
{
    $(".slideshow-container > div:gt(0)").hide();
    setInterval(function() {
        $('.slideshow-container > div:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('.slideshow-container');
    },  3000);
}















// form submission
$(document).on('submit', 'form.boo-form', function(){
    var form_id = $(this).prop('id');
    var response = $('#'+form_id+'-response');
    response.html('');
    $(this).addClass('disabled');
    $.ajax({
        cache: false,
        url: $(this).prop('action'),
        method: "POST",
        data: $(this).serialize(),
        dataType: 'json',
        success: function(data) {
            if (data.success)
            {
                response.show().html('<div class="alert alert-success">'+data.success+'</div>');
                $('#'+form_id).hide();
            }
            else if (data.redirect)
            {
                window.location = data.redirect;
            }
            else if (data.error)
            {
                response.show().html('<div class="alert alert-error">'+data.error+'</div>');
                $('#'+form_id).removeClass('disabled');
            }
        }
    });
    return false;
});








// show all comments
$('#show-all-comments').click( function(){
    $('div#comments-box p.hidden').show();
    $('div#show-all-comments-box').hide();
    return false;
});




// ajax download button
$(document).on('click','a#download-button', function(){
    $('#download-button-container').html('<div class="loader">...</div>').load($(this).attr('href'));
    return false;
});


// ready?
$(document).ready(function() {

    // form auto focus

    setTimeout(function(){ $('form.focus input[type="text"]:first').focus(); },100);



});


