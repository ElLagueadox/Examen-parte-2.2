$(document).ready(function () {

    $("#btnenviar").click(function (e) {
        if (validar() != "") {
            swal("Error de envio", validar(), "error");
        } else {
            swal("Datos enviados", "En brevedad nos contactaremos con usted", "success");
        }
        e.preventDefault();
    });
});

function validar() {

    var html = "";
    var nick = $("#txtnickname").val();
    var nombre = $("#txtnombre").val();
    var consulta = $("#txtconsulta").val();
    var servidor = $("#selservidor").val();

    if (nick == "") {
        html += "- Debe Ingresar un Nickname \n";
    }
    if (nombre == "") {
        html += "- Debe Ingresar un Nombre \n";
    }
    if (consulta == "") {
        html += "- Debe Ingresar una Consulta \n";
    }
    if (servidor == "0") {
        html += "- Debe Seleccionar un Servidor \n";
    }

    return html;
}