$(document).ready(function(){

    $('li').on("click", function(event){

        var x = parseInt($(this).css("font-size"))
        if (event.ctrlKey) {
            x = Math.round( x * 1.16)
        } else if (event.altKey) {
            x = Math.round( x * 0.84)
        } else {
            $(this).toggleClass("selected")
        }
        $(this).css("font-size", x + "px")
    })

    $('.bignote').on("wheel", function(event){
        if (event.originalEvent.deltaY < 0) {
            l('up')
            var xx = $(this).find('.field_bottom ul').children('li').last().clone(true)

            var xx = $(this).find('.field_right ul').shiftListUp(xx)
            var xx = $(this).find('.field_top ul').shiftListUp(xx)
            var xx = $(this).find('.field_left ul').shiftListDown(xx)
            var xx = $(this).find('.field_bottom ul').shiftListDown(xx)

        }
        else {
            l('down')
            var xx = $(this).find('.field_top ul').children('li').last().clone(true)

            var xx = $(this).find('.field_right ul').shiftListDown(xx)
            var xx = $(this).find('.field_bottom ul').shiftListUp(xx)
            var xx = $(this).find('.field_left ul').shiftListUp(xx)
            var xx = $(this).find('.field_top ul').shiftListDown(xx)

        }
    })

})

function doc2objects() {

}


function NOTE (text, link_mainfield) {
    var x = link_mainfield ? link_mainfield : "field_big" ;
    this.main = { link : x , list : [text]}
    this.a0 = { link : "field_right" , list : []}
    this.a1 = { link : "field_bottom" , list : []}
    this.a2 = { link : "field_left" , list : []}
    this.a3 = { link : "field_top" , list : []}
}
