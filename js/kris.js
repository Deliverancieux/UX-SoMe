/* slide winners section */
$(document).ready(function () {


    $('.comp_winners').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        autoplay: true,
    });
});


/* mix-it buttons */
$(document).ready(function () {


    $('.orange').hide();
    $('.apple').hide();
    $('.cranberry').hide();
    $('.grape').hide();
    $('.ananas').hide();
    $('.tonic').hide();
    $('.rum').hide();
    $('.whiskey').hide();
    $('.tequila').hide();
    $('.gin').hide();
    $('.brandy').hide();
    $('.vodka').hide();
    $('.glass_back').hide();
    
    $('#spirits, #juices').click(function () {
        $('#glass').toggleClass('img')
    });

    $('#vodka').click(function () {
        $('.vodka').fadeIn(400)
    });
    
    $('#rum').click(function () {
        $('.rum').fadeIn(400)
    });
    
    $('#whiskey').click(function () {
        $('.whiskey').fadeIn(400)
    });
    
    $('#tequila').click(function () {
        $('.tequila').fadeIn(400)
    });
    
    $('#gin').click(function () {
        $('.gin').fadeIn(400)
    });
    
    $('#brandy').click(function () {
        $('.brandy').fadeIn(400)
    });
    
    $('#orange').click(function () {
        $('.orange').fadeIn(400)
    });
    
    $('#apple').click(function () {
        $('.apple').fadeIn(400)
    });
    
    $('#cranberry').click(function () {
        $('.cranberry').fadeIn(400)
    });
    
    $('#grape').click(function () {
        $('.grape').fadeIn(400)
    });
    
    $('#ananas').click(function () {
        $('.ananas').fadeIn(400)
    });
    
    $('#tonic').click(function () {
        $('.tonic').fadeIn(400)
    });

    $('.cross_orange').click(function () {
        $('.orange').fadeOut(400)
    });
    
    $('.cross_apple').click(function () {
        $('.apple').fadeOut(400)
    });
    
    $('.cross_cranberry').click(function () {
        $('.cranberry').fadeOut(400)
    });
    
    $('.cross_grape').click(function () {
        $('.grape').fadeOut(400)
    });
    
    $('.cross_ananas').click(function () {
        $('.ananas').fadeOut(400)
    });
    
    $('.cross_tonic').click(function () {
        $('.tonic').fadeOut(400)
    });
    
    $('.cross_vodka').click(function () {
        $('.vodka').fadeOut(400)
    });
    
    $('.cross_rum').click(function () {
        $('.rum').fadeOut(400)
    });
    
    $('.cross_whiskey').click(function () {
        $('.whiskey').fadeOut(400)
    });
    
    $('.cross_tequila').click(function () {
        $('.tequila').fadeOut(400)
    });
    
    $('.cross_gin').click(function () {
        $('.gin').fadeOut(400)
    });
    
    $('.cross_brandy').click(function () {
        $('.brandy').fadeOut(400)
    });
    
    

});



/* info button */
    $(function() {

 $("#infoBox").hide();

 $("#infowrp").hide();
        $('#infoBtn').on('click', function(){
            $('#infoBox').animate({width: 'toggle'});
            $('#infowrp').animate({opacity: 'toggle'},"fast");

        });
        $('#infoBox').on('click', function(){
            $('#infoBox').animate({width: 'toggle'});
            $('#infowrp').animate({opacity: 'toggle'},"fast");
        });


    });
