
$(document).ready(function(){

    // var x = $('.move_bottom').detach()
    // x.appendTo('body')

    $('.move_bottom').detach().appendTo('body')



    $('#tbody_up').on("click", function() {

    })

    $('#tbody_down').on("click", function() {

    })

    $('#movehere1').on("click", function() {

        var x = $('#gametable').detach()

        $(this).parent().append(x)

        $(this).parent().parent().parent().parent().css("width", "100%")

        $(this).remove()
    })




})
