function validarFormulario() {
    var nombre = document.getElementById("exampleInputEmail1").value;
    var asunto = document.getElementById("exampleInputPassword1").value;
    var mensaje = document.getElementById("exampleFormControlTextarea1").value;

    if (nombre.trim() === "" || asunto.trim() === "" || mensaje.trim() === "") {
        alert("Por favor, completa todos los campos del formulario.");
        return false; // Evita que el formulario se envíe
    } else {
        alert("Se ha enviado exitosamente el formulario.");
        return true; // Permite que el formulario se envíe
    }
}