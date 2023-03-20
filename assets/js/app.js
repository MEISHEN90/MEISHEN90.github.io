const enlace = document.querySelector('.btn-descargar');
enlace.addEventListener('click', function (event) {
  event.preventDefault();
  const archivo = this.getAttribute('href');
  const nombreArchivo = archivo.split('/').pop();
  const linkDescarga = document.createElement('a');
  linkDescarga.setAttribute('download', nombreArchivo);
  linkDescarga.setAttribute('href', archivo);
  linkDescarga.click();
});
//seccion para descargar las imagenes
const imagenes = document.querySelectorAll('.galeria img');
imagenes.forEach(img => {
  img.addEventListener('click', () => {
    const enlace = img.parentNode;
    enlace.click();
  });
});