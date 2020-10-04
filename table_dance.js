

$( document ).ready(function()  {

    var x = $('table.gametable tbody tr').clone()
    $('table.gametable tbody').prepend(x)

    x.children().html(x.children().length)

    t1 = new TABLE_MODIFIER("gametable")

    t1.addrow_ontop([1, 2, 3, 4], "")
    t1.addrow_ontop([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "")
    t1.equal_columns()

    t1.assignColumnIds("col", 100)



})


TABLE_MODIFIER.prototype.assignColumnIds = function (prefix, indexstart) {
    var allBodyTr = $("#" + this.tableid + " tbody tr")
    allBodyTr.each(function(i,e){
        $(e).children().each(function(i,e){
            var n = indexstart + i
            // $(e).attr("olli", n)
            $(e).addClass(prefix + n)
        })
    })
}




TABLE_MODIFIER.prototype.equal_columns = function () {
    var all_tr = $("#" + this.tableid).find('tr')
    var highest = 0
    all_tr.each(function(i,e){
        var n = $(e).children().length
        if ( n > highest)
            { highest = n }
    })
    all_tr.each(function(i,e){
        var n = $(e).children().length
        if ( n < highest) {
            var diff = highest - n
            var str = ""
            for (var i = 0; i < diff; i++) {
                str += "<td></td>"
            }
            $(e).append(str)
        }
    })
}

TABLE_MODIFIER.prototype.addrow_ontop = function (content, attributes) {
    var tbody = $("#" + this.tableid).children('tbody')
    var str = ""

    for (var i = 0; i < content.length; i++ ) {
        str +="<td " + attributes + ">" + content[i]  + "</td>"
    }

    tbody.prepend("<tr>" +  str  + "</tr>")
}

TABLE_MODIFIER.prototype.addrow_ontop_considerfirst = function (content, attributes) {
    var tbody = $("#" + this.tableid).children('tbody')
    var n_columns = tbody.children("tr").first().children().length
    var str = ""

    // alert(n_columns)

    for (var i = 0; i < content.length && i < n_columns; i++ ) {
        str +="<td " + attributes + ">" + content[i]  + "</td>"
    }

    tbody.prepend("<tr>" +  str  + "</tr>")
}


function TABLE_MODIFIER (tableid) {
    this.tableid = tableid
}
