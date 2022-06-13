const request = fetch("https://intense-oasis-55031.herokuapp.com/api/prueba")

document.addEventListener('DOMContentLoaded', () => {
    productos()
    buscarPorCategorias()
})

const productos = async() => {
    await fetch('https://intense-oasis-55031.herokuapp.com/api/prueba')
    .then((response) =>{
        return response.json();
    }).then((response) =>{
        productostotal = response.productos
        document.getElementById("producto").innerHTML = response.productos.map(producto => `
            <div class="card d-inline-block m-2" style="width: 17rem ;">
                <div class="card-header rounded text-center d-block ">
                    <img src="${producto.url_image}" alt="imagen producto" srcset="" style="width: 100px; height: 150px ;align-middle;">
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${producto.name}</li>
                    <li class="list-group-item">Valor : $ ${producto.price}</li>
                    <li class="list-group-item">Unidades Restantes :  ${producto.discount}</li>
                </ul>
            </div>    
        `).join('')
    })
    .catch(error => console.log(error))
}


const buscadorProductos = async () => {
    try {
        const texto = document.getElementById('buscar').value
        document.getElementById('buscar').value = ''
        if (texto === '') return
        const res = await fetch('https://intense-oasis-55031.herokuapp.com/api/search/' + texto)
        const data = await res.json()
        document.getElementById("busqueda").innerHTML = `<h3 class="text-center"> Articulos Filtrados </h3>` 
        + data.map(producto => `
        <div class="card d-inline-block m-2" style="width: 17rem ;">
            <div class="card-header rounded text-center d-block">
                <img src="${producto.url_image}" alt="imagen producto" srcset="" style="width: 100px; height: 150px ;align-middle;">
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${producto.name}</li>
                <li class="list-group-item">Valor : $ ${producto.price}</li>
                <li class="list-group-item">Unidades Restantes :  ${producto.discount}</li>
            </ul>
        </div>
        </div>     
    `)
    } catch (error) {
        console.log(error)
    }
}  


let porNombre = async() => {
    await fetch('https://intense-oasis-55031.herokuapp.com/api/prueba')
    .then((response) =>{
        return response.json();})
    .then((response) =>{
        const filtroAZ = response.productos.sort((a, b) => a.name.localeCompare(b.name));
        console.log(filtroAZ)
        document.getElementById("producto").innerHTML = filtroAZ.map(producto => `
            <div class="card d-inline-block m-2" style="width: 17rem ;">
                <div class="card-header rounded text-center d-block">
                    <img src="${producto.url_image}" alt="imagen producto" srcset="" style="width: 100px; height: 150px ;align-middle;">
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${producto.name}</li>
                    <li class="list-group-item">Valor : $ ${producto.price}</li>
                    <li class="list-group-item">Unidades Restantes :  ${producto.discount}</li>
                </ul>
            </div>    
        `)
    })
}

let porPrecioMenorMayor = async() => {
    await fetch('https://intense-oasis-55031.herokuapp.com/api/prueba')
    .then((response) =>{
        return response.json();})
    .then((response) =>{
        const filtroPrecioMenorMayor = response.productos.sort((a, b) => {
            return a.price - b.price;
        });
        console.log(filtroPrecioMenorMayor)
        document.getElementById("producto").innerHTML = filtroPrecioMenorMayor.map(producto => `
            <div class="card d-inline-block m-2" style="width: 17rem ;">
                <div class="card-header rounded text-center d-block">
                    <img src="${producto.url_image}" alt="imagen producto" srcset="" style="width: 100px; height: 150px ;align-middle;">
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${producto.name}</li>
                    <li class="list-group-item">Valor : $ ${producto.price}</li>
                    <li class="list-group-item">Unidades Restantes :  ${producto.discount}</li>
                </ul>
            </div>    
        `)
    })
}

let porPrecioMayorMenor = async() => {
    await fetch('https://intense-oasis-55031.herokuapp.com/api/prueba')
    .then((response) =>{
        return response.json();})
    .then((response) =>{
        const filtroPrecioMayorMenor = response.productos.sort((a, b) => {
            return b.price - a.price;
        });
        console.log(filtroPrecioMayorMenor)
        document.getElementById("producto").innerHTML = filtroPrecioMayorMenor.map(producto => `
            <div class="card d-inline-block m-2" style="width: 17rem ;">
                <div class="card-header rounded text-center d-block">
                    <img src="${producto.url_image}" alt="imagen producto" srcset="" style="width: 100px; height: 150px ;align-middle;">
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${producto.name}</li>
                    <li class="list-group-item">Valor : $ ${producto.price}</li>
                    <li class="list-group-item">Unidades Restantes :  ${producto.discount}</li>
                </ul>
            </div>    
        `)
    })
}

let porStock = async() => {
    await fetch('https://intense-oasis-55031.herokuapp.com/api/prueba')
    .then((response) =>{
        return response.json();})
    .then((response) =>{
        const filtroStock = response.productos.sort((a, b) => {
            return b.discount - a.discount;
        });
        document.getElementById("producto").innerHTML = filtroStock.map(producto => `
            <div class="card d-inline-block m-2" style="width: 17rem ;">
                <div class="card-header rounded text-center d-block">
                    <img src="${producto.url_image}" alt="imagen producto" srcset="" style="width: 100px; height: 150px ;align-middle;">
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${producto.name}</li>
                    <li class="list-group-item">Valor : $ ${producto.price}</li>
                    <li class="list-group-item">Unidades Restantes :  ${producto.discount}</li>
                </ul>
            </div>    
        `)
    })
}

const buscarPorCategorias = async() => {
    try{
        const seleccion = document.getElementById('selectCategory').value
        const res = await fetch('https://intense-oasis-55031.herokuapp.com/api/category/' + seleccion)
        const data = await res.json()
        document.getElementById("producto").innerHTML = data.map(producto => `
            <div class="card d-inline-block m-2" style="width: 17rem ;">
                <div class="card-header rounded text-center d-block">
                    <img src="${producto.url_image}" alt="imagen producto" srcset="" style="width: 100px; height: 150px ;align-middle;">
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${producto.name}</li>
                    <li class="list-group-item">Valor : $ ${producto.price}</li>
                    <li class="list-group-item">Unidades Restantes :  ${producto.discount}</li>
                </ul>
            </div>    
        `)
    } catch (error) {
    console.log(error)
    }

}