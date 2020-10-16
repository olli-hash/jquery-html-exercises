$(document).ready(function(){

    // make listener here
    // ?: make button here and attach to mainPanel

    var selected_last = {}


    // make buttons!!

    //


    // var b1_load = $('<button id="b1_load">load</button>')
    // var b2_save = $('<button id="b2_save">save</button>')
    // var b3_ = $('<button id="b3_">...</button>')

    var b1_load = '<button id="b1_load">load</button>'
    var b2_save = '<button id="b2_save">save</button>'
    var b3_ = '<button id="b3_">...</button>'

    // var chain = b1_load.after(b2_save)
    var chain = $( "<div class='highbuttons'>" + b1_load + b2_save + b3_ + "</div>" )

    // var wrap = chain.wrap( "<div class='highbuttons'></div>" )

    // $('#0001').find('.highlighter').append(wrap)
    $('#0001').find('.highlighter').append(chain)




    $('li').on("click", function(event){

        var x = parseInt($(this).css("font-size"))
        if (event.ctrlKey) {
            x = Math.round( x * 1.16)
        } else if (event.altKey) {
            x = Math.round( x * 0.84)
        } else {
            $(this).toggleClass("selected")
            selected_last = $(this)
        }
        $(this).css("font-size", x + "px")
    })



    $('li').append(  "<button class='b3_'>...</button>"           )




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

    $('.highlighter').on("click", function(event){
        var bignote_root_node = $(this).parent().parent()

        // l("bignote_root_node.length: " + bignote_root_node.length)
        // l(bignote_root_node.find(".field_big .highlighter").length)

        var obj = new NOTE ( bignote_root_node.find(".field_big .highlighter").html()  ,".field_big")

        getnode(obj.a0)
        getnode(obj.a1)
        getnode(obj.a2)
        getnode(obj.a3)

        // localStorage.setItem("first", JSON.stringify(obj))



        // var tmp = $('<div class="w1">' +  JSON_and_HTMLEscaping(obj)    + '</div>')
        // bignote_root_node.append(tmp)






        function JSON_and_HTMLEscaping(o) {
            var z =  Handlebars.compile("{{myText}}")
            var zz = z({myText: JSON.stringify(o, null, 10)})
            return zz
        }

        function getnode (to) {
            bignote_root_node.find(to.link + " ul li").each(function(i,e){
                to.list.push($(e).html())
            })
        }


    })

    $('#load_data').on("click", function(e){
        var y = localStorage.getItem("first")
        l(y)
    })

})

function doc2objects() {

}


function NOTE (text, link_mainfield) {
    var x = link_mainfield ? link_mainfield : ".field_big" ;
    this.main = { link : x , list : [text]}
    this.a0 = { link : ".field_right" , list : []}
    this.a1 = { link : ".field_bottom" , list : []}
    this.a2 = { link : ".field_left" , list : []}
    this.a3 = { link : ".field_top" , list : []}
}
