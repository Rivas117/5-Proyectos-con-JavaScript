async function obtenerData() {
    await fetch("http://127.0.0.1:5500/Consumo%20de%20Api/data.json")
        .then(Response => Response.json())
        .then(json => console.log(json))
        .catch(error => console.log("Solicitud fallida", error))
}

obtenerData();