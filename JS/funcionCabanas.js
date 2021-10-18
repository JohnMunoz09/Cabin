const peticionHTTP = new XMLHttpRequest();
peticionHTTP.onload = function(){

        const valoresObtenidos = JSON.parse(this.responseText);
        const tamano = valoresObtenidos.items.length;

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
                "<td>" + valoresObtenidos.items[i].id + "</td>" + 
                "<td>" + valoresObtenidos.items[i].brand  + "</td>" + 
                "<td>" + valoresObtenidos.items[i].rooms  + "</td>" +
                "<td>" + valoresObtenidos.items[i].category_id + "</td>" +
                "<td>" + valoresObtenidos.items[i].name + "</td>" +
            "</tr>";

        }
    tablaCabanas = tablaCabanas +"</table>";

    console.log(tablaCabanas);
    document.getElementById("tabla").innerHTML = tablaCabanas;
    }
peticionHTTP.open("GET", "https://gf5175649d5157f-db202109302119.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/cabin/cabin");
peticionHTTP.send();