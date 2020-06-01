// links
function showcase_research_location(about_is_now, c_9_is_now, c_10_is_now, c_11_is_now, c_12_is_now) {

    if (about_is_now == true) {
        $('#li-about').addClass('selected')
        $('#li-c-9').removeClass('selected')
        $('#li-c-10').removeClass('selected')
        $('#li-c-11').removeClass('selected')
        $('#li-c-12').removeClass('selected')

        $('#about').css('display', 'block')
        $('#c-9').css('display', 'none')
        $('#c-10').css('display', 'none')
        $('#c-11').css('display', 'none')
        $('#c-12').css('display', 'none')

        window.scrollTo(0, 0);
        console.log('location 1')
    } else if (c_9_is_now == true) {

        $('#li-about').removeClass('selected')
        $('#li-c-9').addClass('selected')
        $('#li-c-10').removeClass('selected')
        $('#li-c-11').removeClass('selected')
        $('#li-c-12').removeClass('selected')

        $('#about').css('display', 'none')
        $('#c-9').css('display', 'block')
        $('#c-10').css('display', 'none')
        $('#c-11').css('display', 'none')
        $('#c-12').css('display', 'none')

        window.scrollTo(0, 0);
        console.log('location 2')
    } else if (c_10_is_now == true) {

        $('#li-about').removeClass('selected')
        $('#li-c-9').removeClass('selected')
        $('#li-c-10').addClass('selected')
        $('#li-c-11').removeClass('selected')
        $('#li-c-12').removeClass('selected')

        $('#about').css('display', 'none')
        $('#c-9').css('display', 'none')
        $('#c-10').css('display', 'block')
        $('#c-11').css('display', 'none')
        $('#c-12').css('display', 'none')

        window.scrollTo(0, 0);
        console.log('location 3')
    } else if (c_11_is_now == true) {

        $('#li-about').removeClass('selected')
        $('#li-c-9').removeClass('selected')
        $('#li-c-10').removeClass('selected')
        $('#li-c-11').addClass('selected')
        $('#li-c-12').removeClass('selected')

        $('#about').css('display', 'none')
        $('#c-9').css('display', 'none')
        $('#c-10').css('display', 'none')
        $('#c-11').css('display', 'block')
        $('#c-12').css('display', 'none')

        window.scrollTo(0, 0);
        console.log('location 4')
    } else if (c_12_is_now == true) {

        $('#li-about').removeClass('selected')
        $('#li-c-9').removeClass('selected')
        $('#li-c-10').removeClass('selected')
        $('#li-c-11').removeClass('selected')
        $('#li-c-12').addClass('selected')

        $('#about').css('display', 'none')
        $('#c-9').css('display', 'none')
        $('#c-10').css('display', 'none')
        $('#c-11').css('display', 'none')
        $('#c-12').css('display', 'block')

        window.scrollTo(0, 0);
        console.log('location 5')
    }
}

function about_now() {
    return about_is_now = true,
        c_9_is_now = false,
        c_10_is_now = false,
        c_11_is_now = false,
        c_12_is_now = false
}

function c_9_now() {
    return about_is_now = false,
        c_9_is_now = true,
        c_10_is_now = false,
        c_11_is_now = false,
        c_12_is_now = false
}

function c_10_now() {
    return about_is_now = false,
        c_9_is_now = false,
        c_10_is_now = true,
        c_11_is_now = false,
        c_12_is_now = false
}

function c_11_now() {
    return about_is_now = false,
        c_9_is_now = false,
        c_10_is_now = false,
        c_11_is_now = true,
        c_12_is_now = false
}

function c_12_now() {
    return about_is_now = false,
        c_9_is_now = false,
        c_10_is_now = false,
        c_11_is_now = false,
        c_12_is_now = true
}

$('#li-about').click(function() {
    about_now()

    showcase_research_location(about_is_now, c_9_is_now, c_10_is_now, c_11_is_now, c_12_is_now)
});
$('#li-c-9').click(function() {
    c_9_now()

    showcase_research_location(about_is_now, c_9_is_now, c_10_is_now, c_11_is_now, c_12_is_now)
});
$('#li-c-10').click(function() {
    c_10_now()

    showcase_research_location(about_is_now, c_9_is_now, c_10_is_now, c_11_is_now, c_12_is_now)
});
$('#li-c-11').click(function() {
    c_11_now()

    showcase_research_location(about_is_now, c_9_is_now, c_10_is_now, c_11_is_now, c_12_is_now)
});
$('#li-c-12').click(function() {
    c_12_now()

    showcase_research_location(about_is_now, c_9_is_now, c_10_is_now, c_11_is_now, c_12_is_now)
});