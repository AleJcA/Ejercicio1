function calcularArea() {
    
    let base = (document.getElementById('base').value);
    let altura = (document.getElementById('altura').value);
    
    if (base === "" & altura === ""){
        alerta()
    }

    base = parseInt(base);
    altura = parseInt(altura);

    if(base === 0 & altura === 0){
        alerta2()
    } else {

        let area = base * altura;
    
        document.getElementById("resultado").value = area;

    }

    
    
}

function alerta(){
    Swal.fire({
        title: "Si estas llenando los campos?",
        text: "Necesitas llenar los campos base y altura",
        icon: "question"
      });
}

function alerta2(){
    Swal.fire({
        title: "0 x 0 ?",
        text: "Necesitas digitar numeros validos para la multiplicacion",
        icon: "question"
      });
}

function limpiarFormulario() {
    document.getElementById("areaRectangulo").reset();
    document.getElementById("resultado").value = "";
}