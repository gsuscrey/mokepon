function iniciarPoder() {
  const botonFuego = document.getElementById('boton-fuego')
  const botonAgua  = document.getElementById('boton-agua')
  const botonTierra  = document.getElementById('boton-tierra')
  const botonViento  = document.getElementById('boton-viento')
  const  botonReiniciar  = document.getElementById('boton-reiniciar')
  botonFuego.addEventListener('click', selecionadoFuego)
  botonAgua.addEventListener('click', selecionadoAgua )
  botonTierra.addEventListener('click',selecionadoTierra)
  botonViento.addEventListener('click',selecionadoViento)
  botonReiniciar.addEventListener('click',reinicioTotal)

}

  function selecionadoFuego() {
    document.getElementById("mensaje1").innerHTML += "FIRE---🔥"
  }

  function selecionadoAgua() {
 //  alert('Seleccionaste Agua')
   document.getElementById("mensaje1").innerHTML += "WATER..💧"
  }

  function selecionadoTierra() {
//      alert('Seleccionaste Tierra')
  document.getElementById("mensaje1").innerHTML += "GROUND!!! 🌱"
  }

  function selecionadoViento() {
//      alert('Seleccionaste Tierra')
  document.getElementById("mensaje1").innerHTML += "Wind>>>🌬️"
  }

  function reinicioTotal(){
    location.reload();
  }
window.addEventListener('load', iniciarPoder)
