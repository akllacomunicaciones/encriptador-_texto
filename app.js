
//funcion de encripta texto
function encriptarTexto() {
  let texto = document.getElementById("input-text").value.toLowerCase();
  let desplazamiento = 3; // Puedes ajustar el desplazamiento aquí
  let alfabeto = "abcdefghijklmnopqrstuvwxyz";
  let resultado = "";

  for (let i = 0; i < texto.length; i++) {
      let letra = texto[i];
      let posicion = alfabeto.indexOf(letra);

      if (posicion !== -1) {
          let nuevaPosicion = (posicion + desplazamiento) % 26;
          resultado += alfabeto[nuevaPosicion];
      } else {
          resultado += letra;
      }
  }

  document.getElementById("output-message").textContent = resultado;
}

//funcion de desencripta texto

function desencriptarTexto() {
  let texto = document.getElementById("input-text").value.toLowerCase();
  let desplazamiento = 3;
  let alfabeto = "abcdefghijklmnopqrstuvwxyz";
  let resultado = "";

  for (let i = 0; i < texto.length; i++) {
      let letra = texto[i];
      let posicion = alfabeto.indexOf(letra);

      if (posicion !== -1) {
          let nuevaPosicion = (posicion - desplazamiento + 26) % 26;
          resultado += alfabeto[nuevaPosicion];
      } else {
          resultado += letra;
      }
  }

  document.getElementById("output-message").textContent = resultado;
}


//funcion para copiar
function copiarTexto() {
  let resultado = document.getElementById("output-message").textContent;
  navigator.clipboard.writeText(resultado).then(() => {
      alert("Texto copiado al portapapeles");
  });
}
