var content3 = document.getElementById('contenido3');
var content4 = document.getElementById('contenido4');
var content5 = document.getElementById('contenido5');
var dat = document.getElementById('date');
var millon = document.getElementById('millones');
var title = document.getElementById('title1');
var Unidad = document.getElementById('pozoUnidad');

const URL = window.location.href;
const idPanel = URL.split("?idPanel=")[1]
const province = URL.split("?province=")[2]
// const idPanel = 17
// const province = "lima"
console.log(URL.split("?province="))
document.getElementById("img-province-nublado").src="img/"+province+"/nublado.jpg"
document.getElementById("img-province-soleado").src="img/"+province+"/Soleado.jpg"
document.getElementById("img-province-lluvia").src="img/"+province+"/lluvia.jpg"

async function init() {
  const coord = await axios.get(`https://apialacplayer.alacoohperu.pe/playlist/panel/${idPanel}`);
  var latitud = coord.data.data[0].point.coordinates[0];
  var longitud = coord.data.data[0].point.coordinates[1];
  const response = await axios.get(`https://weatherstation.alacoohperu.pe/api/clima/${latitud}/${longitud}`);
  //const response2 = await axios.get(`https://weatherstation.alacoohperu.pe/api/climagrados/${latitud}/${longitud}`);
  const text_clima = response.data.data.weather[0].description;
  const datatemp = response.data.data.main.temp.toFixed(0);
  const result = datatemp.toString();
  const fecha = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateEs = fecha.toLocaleDateString('es-ES', options);
  const palabras = dateEs.split(",");
  const palabraDia = palabras[0][0].toUpperCase() + palabras[0].substr(1);
  const palabraFecha = palabras[1];
  const unir = palabraDia + "," + palabraFecha;
  document.getElementById('date').innerHTML = unir;
  document.getElementById('title1').innerHTML = result+'°';

  if (text_clima == 'nubes'  || text_clima == 'niebla' || text_clima == 'muy nuboso' ) {
    content3.style.display = "block";
  } else if (text_clima == 'cielo claro' || text_clima == 'algo de nubes'|| text_clima == 'nubes dispersas') {
    content4.style.display = "block";
    
  } else if (text_clima == 'lluvia ligera' || text_clima == 'tormenta con lluvia ligera') {
    content5.style.display = "block";
  }

}

init();
