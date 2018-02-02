function colourId() {
    return Math.floor(Math.random() * 2);
}

$(document).ready(function() {
    $('a').hover(function() {
        if(colourId === 0) {
            $('a').toggleClass('orange');
        } else {
            $('a').toggleClass('green');
        }
    })
})