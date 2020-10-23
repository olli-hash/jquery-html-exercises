$(document).ready(function(){



    $('.innermost').wrap('<div class="wrap1"></div>')
    $('.innermost').wrap('<div class="wrap1"></div>')
    $('.innermost').wrap('<div class="wrap1"></div>')


    $('.wrap1').prepend("hello")

    //$('.innermost').html()

    //  --------------------------------------------------------

    var chain = []

    for (var i = 0; i < 10; i++) {
        chain.push($('.multiply').children().clone())
    }

    $('.multiply').append(chain)


    // count all blue ones :










})
