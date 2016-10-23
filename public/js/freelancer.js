// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

//youtube player functionality
$('#about .btn').click(function() {
    var src = '//www.youtube.com/embed/fOGR62qwpBk?autoplay=1&rel=0';
    $('#youtubeVideoModal').modal('show');
    $('#youtubeVideoModal iframe').attr('src', src);

    resizeYoutubeVideo();
        $('#youtubeVideoModal').modal('show');
            $('#youtubeVideoModal iframe').attr('src', src);
});

$('#youtubeVideoModal').on('hidden.bs.modal', function() {
    $('#youtubeVideoModal iframe').removeAttr('src');
});

$(window).resize(function() {
        resizeYoutubeVideo();
});

function resizeYoutubeVideo() {
    $('#youtubeIframe').width('100%');
    var newHeight = $('.modal-lg').width() * 480 / 832;
    $('#youtubeIframe').height(newHeight);
}

function printPDF() 
{
     var printContents = window.open("img/Specials.pdf");
     var originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents;

     window.print();

     //document.body.innerHTML = originalContents;
     location.reload();
}

function printDiv(divName) {
     var printContents = document.getElementById(divName).innerHTML;
     var originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents;

     window.print();

     //document.body.innerHTML = originalContents;
     location.reload();
}