(function ( $ ) {

    $.fn.shiftListDown = function(input) {
        var x = this.filter("ul")
        if (x.length === 0) {console.log('no good!')}
        x = x.first()

        if (input) {
            x.prepend(input)
        }

        var xx = x.children('li').last().detach()

        return xx
    };

    $.fn.shiftListUp = function(input) {
        var x = this.filter("ul")
        if (x.length === 0) {console.log('no good!')}
        x = x.first()

        if (input) {
            x.append(input)
        }

        var xx = x.children('li').first().detach()

        return xx
    };

}( jQuery ));
