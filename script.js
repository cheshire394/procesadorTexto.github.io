



document.addEventListener('DOMContentLoaded', function() {

     
  //función para formatear texto, por ejemplo si el usuario selecciona la negrita, subrayado o cursiva se aplica el estilo
  
  const botonNegrita = document.getElementById('botonNegrita');
  botonNegrita.addEventListener('click', function() {
    document.execCommand('bold', false, null);
  });

  const botonCursiva = document.getElementById('botonCursiva');
  botonCursiva.addEventListener('click', function() {
    document.execCommand('italic', false, null);
  });

  const botonSubrayado = document.getElementById('botonSubrayado');
  botonSubrayado.addEventListener('click', function() {
    document.execCommand('underline', false, null);
  });


  // Variable para almacenar la imagen de fondo de la carta que seleccione el usuario
let fondoCarta = "";

//array que almacena las imágenes de las cartas disponibles
const fondos = ["recursos/carta1.jpg", "recursos/carta2.jpg", "recursos/carta3.jpg", "recursos/carta4.jpg","recursos/carta5.jpg","recursos/carta6.jpg","recursos/carta7.jpg","recursos/carta8.jpg"];
let indiceFondoActual = 0;


  // funciones para avanzar y retroceder en el menu de cartas, cuando se pulsa las flechas < y >
  const botonAnterior = document.getElementById('botonAnterior');
  botonAnterior.addEventListener('click', function() {

    indiceFondoActual = (indiceFondoActual - 1 + fondos.length) % fondos.length;

    document.querySelectorAll(".background-option").forEach((el, indice) => {
      el.src = fondos[(indice + indiceFondoActual) % fondos.length];
    });
  });

  const botonSiguiente = document.getElementById('botonSiguiente');
  botonSiguiente.addEventListener('click', function() {

    indiceFondoActual = (indiceFondoActual + 1) % fondos.length;

    document.querySelectorAll(".background-option").forEach((el, indice) => {
      el.src = fondos[(indice + indiceFondoActual) % fondos.length];
    });
  });



  // Obtener la primera imagen del selector, para que ya exista una carta por defecto selecionada al cargar la pagina
const primerFondo = document.querySelector('.background-option');

if (primerFondo) {
// Llamar a la función que cambia el fondo, pasando la imagen seleccionada
cambiarFondo(primerFondo);
}

// Asociar la función a los eventos de clic en las imágenes
document.querySelectorAll('.background-option').forEach(img => {
  img.addEventListener('click', function() {
    cambiarFondo(img);
  });
  });
  

function cambiarFondo(img) {

  //Array que contiene las imágenes de las cartas disponibles (querySelectoAll recoge todos los .class que coincida y crea un "array")
  // Y eliminamos de cada carta el elemento selected para deseleccionar la carta.
document.querySelectorAll(".background-option").forEach(el => el.classList.remove("selected"));

//creamos un nuevo elemento selected para la carta seleccionada
img.classList.add("selected");
fondoCarta = img.src;

  //Recogemos el html el div editor y aplicamos como fondo la carta que ha selecionado el usuario
const editor = document.getElementById('editor');
editor.style.backgroundImage = `url(${fondoCarta})`;


 // Ajustar el padding según la carta seleccionada, respetando los margenes dependiendo los dibujos de cada carta
const ajustes = {
  'carta1.jpg': { paddingTop: '12%', paddingLeft: '4%', paddingRight: '4%', maxHeight: '40%', lineHeight: '1.5' },
  'carta2.jpg': { paddingTop: '15%', paddingLeft: '9%', paddingRight: '9%', maxHeight: '40%', lineHeight: '1.5' },
  'carta3.jpg': { paddingTop: '25%', paddingLeft: '9%', paddingRight: '9%', maxHeight: '40%', lineHeight: '1.5' },
  'carta4.jpg': { paddingTop: '12%', paddingLeft: '7%', paddingRight: '7%', maxHeight: '40%', lineHeight: '1.5' },
  'carta5.jpg': { paddingTop: '18%', paddingLeft: '10%', paddingRight: '10%', maxHeight: '58%', lineHeight: '1.5' },
  'carta6.jpg': { paddingTop: '25%', paddingLeft: '14%', paddingRight: '14%', maxHeight: '50%', lineHeight: '1.3' },
  'carta7.jpg': { paddingTop: '31.5%', paddingLeft: '13%', paddingRight: '13%', maxHeight: '50%', lineHeight: '1.6' },
  'carta8.jpg': { paddingTop: '28%', paddingLeft: '14%', paddingRight: '14%', maxHeight: '40%', lineHeight: '1.5' }
};


 //Aplicar los ajustes guardados en el array ajustes con javaScript
const nombreCarta = img.src.split('/').pop();
if (ajustes[nombreCarta]) {
  editor.style.paddingTop = ajustes[nombreCarta].paddingTop;
  editor.style.paddingLeft = ajustes[nombreCarta].paddingLeft;
  editor.style.paddingRight = ajustes[nombreCarta].paddingRight;
  editor.style.maxHeight = ajustes[nombreCarta].maxHeight;
  editor.style.lineHeight = ajustes[nombreCarta].lineHeight;
  editor.style.overflowY = 'hidden';
  editor.style.display = 'block';
}
}





  // Guardar una carta en localStorge
  const botonGuardar = document.getElementById('botonGuardar');

  botonGuardar.addEventListener('click', function() {

    //recogemos las carta
    const carta = document.getElementById('editor').innerHTML;

    //pedimos al usuario que asigne un key al localStorge, será la clave para luego poder rescatar esa carta
    const titulo = prompt("La biblioteca de Howarts solicita que asignes un título a la carta: ");
    if (titulo) {

     //Asignamos la clave con el contenido que tiene .editor (la carta), es decir setItem guarda en localStorge el objeto titulo (key) y el contenido de la carta(valor)
      localStorage.setItem(titulo, carta);

      //mensaje de confirmación u error.
      alert("Howarts ha admitido tu carta, será almacenada en su biblioteca");
    } else {
      alert("La biblioteca de Howarts no admite cartas sin título, intentálo de nuevo");
    }
  });

  //recuperar una carta de localStorge
  const botonRecuperar = document.getElementById('botonRecuperar');
  botonRecuperar.addEventListener('click', function() {

    //preguntamos al usuario, que clave tiene la carta que esta almacenada en localStorge
    const titulo = prompt("¿Dobby necesita saber que título diste a la carta que deseas buscar en la biblioteca?");

    //obtenemos las carta de localStorge
    const cartaGuardada = localStorage.getItem(titulo);

    if (cartaGuardada) {
      //introducios la carta en el editor
      document.getElementById('editor').innerHTML = cartaGuardada;
      //avisamos al usaurio de que ya esta disponible, y si no existe ninguna carta con ese titulo, también le avisamos.
      alert("¡Dobby ha encontrado tu carta " + titulo + "!");
    } else {
      alert("Dobby no ha encontrado ninguna carta titulada " + titulo);
    }
  });

  //exportar una carta en formato texto plano
  const botonExportarTxt = document.getElementById('botonExportarTxt');
  botonExportarTxt.addEventListener('click', function() {

    //podemos obtener solo el texto (omitiendo el resto de elementos con innerText)
    const texto = document.getElementById('editor').innerText;

    //creamos un objeto de una clase predefinida en js (blob)
    const blob = new Blob([texto], { type: "text/plain" });

    //creamos una url para descargar la carta desde el navegador.
    const enlace = document.createElement('a');
    enlace.download = "cartaHarryPotter.txt";
    enlace.href = URL.createObjectURL(blob);
    enlace.click();
  });

  //exportar una carta a pdf
  const botonExportarPdf = document.getElementById('botonExportarPdf');
  botonExportarPdf.addEventListener('click', function() {

    //window.jspdf, lo que indica que jspdf debe estar cargado previamente en la página.
    const { jsPDF } = window.jspdf;
    const elementoEditor = document.getElementById('editor');


    ////Conversión del canvas a imagen y ajuste de escala
              //useCORS: true, para permitir la descarga de imágenes de otros dominios
              //scale: 2, para que la imagen no se distorsione
    html2canvas(elementoEditor, { useCORS: true, scale: 2 }).then(canvas => {


      // p : Orientación "portrait" (vertical).  
              //'mm': Unidades en milímetros.
              //'a4': Tamaño de papel A4.
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgData = canvas.toDataURL('image/png');
      
      //Se calcula ratio para asegurarse de que la imagen se ajuste dentro del tamaño del PDF.
      const ratio = Math.min(
        pdf.internal.pageSize.getWidth() / canvas.width,
        pdf.internal.pageSize.getHeight() / canvas.height
      );

      //Se inserta la imagen en el PDF ajustando su tamaño según el ratio calculado
      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width * ratio, canvas.height * ratio);

      //descargamos pdf
      pdf.save('cartaHarryPotter.pdf');

       //informamos si existe algun error por consola
    }).catch(err => console.error('Error al exportar el PDF:', err));
  });

 

  // CONTROL DE AUDIO

  // obtiene el div con los iconos de audio
  const controlAudio = document.getElementById('audioControl');

  //  Iconos de audio (altavoz activo/apagado)
  const audioOn = document.getElementById('audioOn');
  const audioOff = document.getElementById('audioOff');

  //obtiene el elemento que aplica el audio etiqueta <audio>
  const musica = document.getElementById('musica');

  //Si se hace click sobre el div con los iconos de audio, se ejecuta la función controlAudio
  controlAudio.addEventListener('click', function() {
    if (musica.paused) {

       //funcion predefinida de javaScript
      musica.play();

      //alternar los iconos
      audioOn.classList.remove('hidden');
      audioOff.classList.add('hidden');

      //eliminar el apagado
      controlAudio.classList.remove('muted');
    } else {

       //funcion predefinida de javaScript
      musica.pause();

      //alternar los iconos
      audioOn.classList.add('hidden');
      audioOff.classList.remove('hidden');

       //añadir el apagado
      controlAudio.classList.add('muted');
    }
  });


});
