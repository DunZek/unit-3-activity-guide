$('#hamburger_btn').click(function() {
    // Hamburger
    $('#hamburger_btn').toggleClass('toggle')
    $('#hamburger_btn-top').toggleClass('toggle')
    $('#hamburger_btn-mid').toggleClass('toggle')
    $('#hamburger_btn-bottom').toggleClass('toggle')
        // <nav> & <main>
    $('nav').toggleClass('toggle')
    $('main').toggleClass('toggle')
})