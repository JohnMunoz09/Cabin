const peticionHTTP = new XMLHttpRequest();
peticionHTTP.onload = function(){

    const valoresObtenidos = JSON.parse(this.responseText);
    const tamano = valoresObtenidos.items.length;

    //Creacion Tabla
    var tablaCliente = "<table border='3'>"+
            "<tr>"+
            "<th>ID</th>"+
            "<th>NAME</th>"+
            "<th>EMAIL</th>"+
            "<th>AGE</th>"+
            "</tr>";


    //Llenar datos en la tabla
    for(var i=0;i<tamano;i++){
        tablaCliente = tablaCliente + "<tr>" +
            "<td>"+ valoresObtenidos.items[i].id+"</td>"+
            "<td>"+ valoresObtenidos.items[i].name+"</td>"+
            "<td>"+ valoresObtenidos.items[i].email+"</td>"+
            "<td>"+ valoresObtenidos.items[i].age+"</td>"+
        "</tr>";
    }

    tablaCliente = tablaCliente + "</table";  

    document.getElementById("tablaCliente").innerHTML=tablaCliente;
}
 peticionHTTP.open ("GET", "https://gf5175649d5157f-db202109302119.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client");  
 peticionHTTP.send();