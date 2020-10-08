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
        if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
            // scroll up
            alert('up')
        }
        else {
            // scroll down
            alert('down')
            l(event.deltaX)
            l(event.deltaY)
            l(event)
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
