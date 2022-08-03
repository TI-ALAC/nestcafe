var content = document.getElementById('contenido');
var content2 = document.getElementById('contenido2');
var content3 = document.getElementById('contenido3');
var content4 = document.getElementById('contenido4');
var content5 = document.getElementById('contenido5');

async function init() {
    const panel = 1;
    const coord = await http.getPanels(`http://localhost:3000/playlist/panel/${panel}`);
    var latitud = coord[0].point.coordinates[0];
    var longitud = coord[0].point.coordinates[1];
    const response = await axios.get(`http://localhost:5023/api/clima/${latitud}/${longitud}`);
    console.log(response)
    const text_clima = response.data.data;
    if (text_clima == 'muy nuboso') {
      console.log("ingresando 1")
      content.style.display = "block";
    } else if (text_clima == 'cielo claro' || text_clima == 'nubes dispersas' || text_clima == 'algo de nubes') {
      console.log("ingresando 2")
      content2.style.display = "block";
    } else if (text_clima == 'nubes') {
      console.log("ingresando 3")
      content3.style.display = "block";
    } else if (text_clima == 'niebla') {
      console.log("ingresando 4")
      content4.style.display = "block";
    } else if (text_clima == 'lluvia ligera' || text_clima == 'tormenta con lluvia ligera') {
      console.log("ingresando 5")
      content5.style.display = "block";
    }

}

init();
