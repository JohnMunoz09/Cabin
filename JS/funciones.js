//alert("Esto es una prueba de JavaScript");
//Funcion que obtiene la respuesta del link de oracle en un json 
async function obtenerRespuesta(){
    const respuesta= await fetch("https://gf5175649d5157f-db202109302119.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/cabin/cabin");
    const valorObtenido= respuesta.json();

    return valorObtenido;
}

//Funcion que recibe un parametro que contiene el json para usar y colocarlo en la tabla 
function visualizarTabla(valorObtenido){
    
    const tamano = valorObtenido.items.length;

    //Creacion de la tabla
    var tablaCabanas= "<table border='3'>" + 
                  "<tr>" +
                    "<th>ID</th>" +
                    "<th>BRAND</th>" + 
                    "<th>ROOMS</th>" + 
                    "<th>CATEGORY_ID</th>" + 
                    "<th>NAME</th>" +
                  "</tr>"; 

    //Llenar datos en la tabla 
    for(var i=0;i<tamano;i++){
        tablaCabanas=tablaCabanas + "<tr>"+
        "<td>" + valorObtenido.items[i].id + "</td>" + 
        "<td>" + valorObtenido.items[i].brand  + "</td>" + 
        "<td>" + valorObtenido.items[i].rooms  + "</td>" +
        "<td>" + valorObtenido.items[i].category_id + "</td>" +
        "<td>" + valorObtenido.items[i].name + "</td>" +
      "</tr>";

    }

    tablaCabanas = tablaCabanas +"</table>";
}