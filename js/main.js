$(document).ready(function () {

    M.AutoInit();

    $('#servicebg').css({
        'background-image': 'url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)',
    });
    $('#serviceinfo').append('<h3>Olvídate de las dietas y aprende a alimentarte</h3>')
    $('#diet').css({
        'border-bottom': '2px solid white'
    });
    $('#titleserviceinfo').append('<h1>Asesoramiento Dietético</h1>')

    $('#diet').click(function () {
        $('#servicebg').css({
            'background-image': 'url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)',
        });

        $('#serviceinfo').children().remove();
        $('#titleserviceinfo').children().remove();

        $('#serviceinfo').append('<h3>Olvídate de las dietas y aprende a alimentarte</h3>')
        $('#titleserviceinfo').append('<h1>Asesoramiento Dietético</h1>')
    })

    $('#training').click(function () {
        $('#servicebg').css({
            'background-image': 'url(https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)',
        });

        $('#serviceinfo').children().remove();
        $('#titleserviceinfo').children().remove();

        $('#serviceinfo').append('<h3>Mejora tu salud y condición física</h3>')
        $('#titleserviceinfo').append('<h1>Entrenamiento Personal</h1>')
    })

    $('#psico').click(function () {

        $('#servicebg').css({
            'background-image': 'url(https://images.unsplash.com/photo-1548808957-e80207091212?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        });

        $('#serviceinfo').children().remove();
        $('#titleserviceinfo').children().remove();

        $('#serviceinfo').append('<h3>Te acompañamos en tu cambio de hábitos</h3>');
        $('#titleserviceinfo').append('<h1>Psiconutrición</h1>')
    })

    $('#sport').click(function () {

        $('#servicebg').css({
            'background-image': 'url(https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)',
        });

        $('#serviceinfo').children().remove();
        $('#titleserviceinfo').children().remove();

        $('#serviceinfo').append('<h3>Salidas de senderismo y marcha nórdica</h3>');
        $('#titleserviceinfo').append('<h1>Deporte y Naturaleza</h1>')
    })

    $('.carousel').carousel({
        dist: 0,
        numVisible: 5
    });

    $('.next').click(function () {

        $('.carousel').carousel('next')

        const divactive = $('.carousel').children('.carousel-item.active').attr('id');
        if (divactive == 'sport') {
            $('#diet').click();
        } else {
            $('.carousel').children('.carousel-item.active').next().click();
        }
    })


    $('.prev').click(function () {

        $('.carousel').carousel('prev')

        const divactive = $('.carousel').children('.carousel-item.active').attr('id');

        if (divactive == 'diet') {
            $('#sport').click();
        } else {
            $('.carousel').children('.carousel-item.active').prev().click();
        }

    })

    setInterval('autoplay()', 8000);

})

function autoplay() {

    $('.carousel').carousel('next');

    const divactive = $('.carousel').children('.carousel-item.active').attr('id');

    if (divactive == 'sport') {
        $('#diet').click();
    } else {
        $('.carousel').children('.carousel-item.active').next().click();
    }

}