const peticionHTTP = new XMLHttpRequest();
peticionHTTP.onload = function(){

    const valoresObtenidos = JSON.parse(this.responseText);
    const tamano = valoresObtenidos.items.length;

    //Creacion Tabla
    var tablaMensaje = "<table border='3'>"+
            "<tr>"+
            "<th>ID</th>"+
            "<th>MESSAGETEXT</th>"+
            "</tr>";
    
    //Llenar datos en la tabla
    for(var i=0;i<tamano;i++){
        tablaMensaje = tablaMensaje +"<tr>"+
            "<td>"+ valoresObtenidos.items[i].id+"</td>"+
            "<td>"+ valoresObtenidos.items[i].messagetext+"</td>"+
        "</tr>"
    }        

    tablaMensaje = tablaMensaje +"</table>";

    document.getElementById("tablaMensaje").innerHTML= tablaMensaje;
}

peticionHTTP.open("GET","https://gf5175649d5157f-db202109302119.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message");
peticionHTTP.send();