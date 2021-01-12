


$("button").click(function () {
    if (this.id == "=") {
        $("#txtResultado").val(eval($("#txtResultado").val()))
    } else {
        $("#txtResultado").val($("#txtResultado").val() + this.id)
    }
    if (this.id == "c") {

        $("#txtResultado").val("")


    }


});