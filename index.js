$(document).ready(function() {
    // banner owl carousel

    $("#banner-area .owl-carousel").owlCarousel({
        dots: true,
        items: 1,
        autoplay: true
    });

    // top sale owl carousel
    $('#top-sale .owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            }, 
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    // command isotope filter
    var $grid = $(".grid").isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });

    // filter items on click of the button

    $(".button-group").on("click", "button", function() {
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({ filter: filterValue })
    });

    $('#new-phones .owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            }, 
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    // blogs owl carousel

    $("#blogs .owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            }, 
            600: {
                items: 3
            }
        }
    });

    let $qty_up = $(".qty .qty-up");
    let $qty_down = $(".qty .qty-down");
    // var $input = $(".qty .qty-input");

    // click events on these buttons

    $qty_up.click(function(e) {
        let $input = $(`.qty-input[data-id='${$(this).data("id")}']`);
        if($input.val() >= 1 && $input.val() <= 9) {
            $input.val(function(i, oldVal) {
                return ++oldVal;
            })
        }
    });

    $qty_down.click(function(e) {
        let $input = $(`.qty-input[data-id='${$(this).data("id")}']`);
        if($input.val() > 1 && $input.val() <= 10) {
            $input.val(function(i, oldVal) {
                return --oldVal;
            })
        }
    });
});