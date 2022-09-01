function convertir_a_mayusculas() {

    const contenido = document.getElementById("txt_input").value;
    document.getElementById("txt_input").value = contenido.toUpperCase();

    if (document.getElementById("check_copy_auto").checked) {
        copy();
    }
}

function convertir_a_minusculas() {

    const contenido = document.getElementById("txt_input").value;
    document.getElementById("txt_input").value = contenido.toLowerCase();

    if (document.getElementById("check_copy_auto").checked) {
        copy();
    }
}

function paste() {
    
    navigator.clipboard.readText().then(clipText => document.getElementById("txt_input").value = clipText);
    
}


function copy() {

    const contenido = document.getElementById("txt_input").value;
    navigator.clipboard.writeText(contenido);
}
