const peticion = async (nombre) => {
    let respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
    let json = await respuesta.json();
    // Destructuring
    const { name, height, weight, types } = json;
    
    console.log(json);
    console.log(`Nombre: ${name}`);
    console.log(`Altura: ${height}`);
    console.log(`Peso: ${weight}`);
    for(let tipo of types){
        console.log("tipo" + JSON.stringify(tipo.type));
    }

    return json;
}

