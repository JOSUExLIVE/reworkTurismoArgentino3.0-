// //Destinos
// let destinos =[
// {   //buenos aires
//     id: "buenos-aires-caba",
//     titulo: "buenos aires caba",
//     imagen: "./images/buenos-aires/buenos-aires-caba.jpg",
//     categoria:{
//         nombre:"Buenos-aires",
//         id:"buenos-aires"
//     },
//     precio: 5
// },

// {
//     id: "buenos-aires-casa-rosada",
//     titulo: "buenos aires casa rosada",
//     imagen: "./images/buenos-aires/buenos-aires-casa-rosada.jpg",
//     categoria:{
//         nombre:"Buenos-aires",
//         id:"buenos-aires"
//     },
//     precio: 5
// },

// {
//     id: "buenos-aires-cupula",
//     titulo: "buenos aires cupula",
//     imagen: "./images/buenos-aires/buenos-aires-cupula.jpg",
//     categoria:{
//         nombre:"Buenos-aires",
//         id:"buenos-aires"
//     },
//     precio: 5
// },

// {
//     id: "buenos-aires-obelisco",
//     titulo: "buenos aires obelisco",
//     imagen: "./images/buenos-aires/buenos-aires-obelisco.jpg",
//     categoria:{
//         nombre:"Buenos-aires",
//         id:"buenos-aires"
//     },
//     precio: 5
// },

// {
//     id: "buenos-aires",
//     titulo: "buenos aires",
//     imagen: "./images/buenos-aires/buenos-aires.jpg",
//     categoria:{
//         nombre:"Buenos-aires",
//         id:"buenos-aires"
//     },
//     precio: 5
// },

// {//cordoba
//     id: "cordoba-calamuchita",
//     titulo: "cordoba calamuchita",
//     imagen: "./images/cordoba/cordoba-calamuchita.jpg",
//     categoria:{
//         nombre:"Cordoba",
//         id:"cordoba"
//     },
//     precio: 5
// },

// {
//     id: "cordoba-carlos-paz",
//     titulo: "cordoba-carlos-paz",
//     imagen: "./images/cordoba/cordoba-carlos-paz.jpg",
//     categoria:{
//         nombre:"Cordoba",
//         id:"cordoba"
//     },
//     precio: 5
// },

// {//mendoza
//     id: "mendoza-parque-aconcagua",
//     titulo: "mendoza parque aconcagua",
//     imagen: "./images/mendoza/mendoza-parque-aconcagua.jpg",
//     categoria:{
//         nombre:"Mendoza",
//         id:"mendoza"
//     },
//     precio: 5
// },

// {
//     id: "mendoza-san-rafael",
//     titulo: "mendoza san rafael",
//     imagen: "./images/mendoza/mendoza-san-rafael.jpg",
//     categoria:{
//         nombre:"Mendoza",
//         id:"mendoza"
//     },
//     precio: 5
// },

// {
//     id: "mendoza-vinha",
//     titulo: "mendoza vinha",
//     imagen: "./images/mendoza/mendoza-vinha.jpg",
//     categoria:{
//         nombre:"Mendoza",
//         id:"mendoza"
//     },
//     precio: 5
// },

// {
//     id: "mendoza-puente-del-inca",
//     titulo: "mendoza puente del inca",
//     imagen: "./images/mendoza/puente-del-inca.jpg",
//     categoria:{
//         nombre:"Mendoza",
//         id:"mendoza"
//     },
//     precio: 5
// },

// {//misiones
//     id: "misiones-cataratas-iguazu",
//     titulo: "misiones catarata iguazu",
//     imagen: "./images/misiones/misiones-cataratas-iguazu.jpg",
//     categoria:{
//         nombre:"Misiones",
//         id:"misiones"
//     },
//     precio: 5
// },

// {//neuquen
//     id: "neuquen-villa-la-angostura",
//     titulo: "neuquen villa la angostura",
//     imagen: "./images/neuquen/neuquen-villa-la-angostura.jpg",
//     categoria:{
//         nombre:"Neuquen",
//         id:"neuquen"
//     },
//     precio: 5
// },

// {//salta
//     id: "salta-cerrillos",
//     titulo: "salta cerrillos",
//     imagen: "./images/salta/salta-cerrillos.jpg",
//     categoria:{
//         nombre:"Salta",
//         id:"salta"
//     },
//     precio: 5
// },

// {
//     id: "salta-rio-calchaqui",
//     titulo: "salta rio calchaqui",
//     imagen: "./images/salta/salta-rio-calchaqui.jpg",
//     categoria:{
//         nombre:"Salta",
//         id:"salta"
//     },
//     precio: 5
// },

// {//santa cruz
//     id: "santa-cruz-el-calafate",
//     titulo: "santa cruz el calafate",
//     imagen: "./images/santa-cruz/santa-cruz-el-calafate.jpg",
//     categoria:{
//         nombre:"Santa-cruz",
//         id:"santa-cruz"
//     },
//     precio: 5
// },

// {
//     id: "santa-cruz-el-chalten",
//     titulo: "santa cruz el chalten",
//     imagen: "./images/santa-cruz/santa-cruz-el-chalten.jpg",
//     categoria:{
//         nombre:"Santa-cruz",
//         id:"santa-cruz"
//     },
//     precio: 5
// },

// {
//     id: "santa-cruz-fitz-roy-2",
//     titulo: "santa cruz fitz roy 2",
//     imagen: "./images/santa-cruz/Santa-Cruz-fitz-roy-2 .jpg",
//     categoria:{
//         nombre:"Santa-cruz",
//         id:"santa-cruz"
//     },
//     precio: 5
// },

// {
//     id: "santa-cruz-fitz-roy",
//     titulo: "santa cruz fitz roy",
//     imagen: "./images/santa-cruz/santa-cruz-Fitz-Roy.jpg",
//     categoria:{
//         nombre:"Santa-cruz",
//         id:"santa-cruz"
//     },
//     precio: 5
// },

// {
//     id: "santa-cruz-glaciar-perito-moreno",
//     titulo: "santa cruz glaciar perito moreno",
//     imagen: "./images/santa-cruz/santa-cruz-glacias-perito-moreno.jpg",
//     categoria:{
//         nombre:"Santa-cruz",
//         id:"santa-cruz"
//     },
//     precio: 5
// },

// {//tucuman
//     id: "tucuman",
//     titulo: "tucuman",
//     imagen: "./images/tucuman/tucuman-tres-cruces.jpg",
//     categoria:{
//         nombre:"Tucuman",
//         id:"tucuman"
//     },
//     precio: 5
// }
// ];


let destinos = [];

fetch("./js/destinos.json")
    .then(response => response.json())
    .then(data => {
        destinos = data;
        cargarDestinos(destinos);
    });


const contenedorDestinos =document.querySelector("#contenedor-destinos");
const botonesCategoria =document.querySelectorAll(".boton-categoria");
const tituloPrincipal =document.querySelector("#titulo-principal");
let botonesAgregar =document.querySelectorAll(".destino-agregar");
const numerito =document.querySelector("#numerito");

botonesCategoria.forEach( boton => boton.addEventListener("click", ()=>{
    aside.classList.remove("aside-visible");
}))


function cargarDestinos(destinosElegidos) { 
    
    contenedorDestinos.innerHTML ="";
    
        destinosElegidos.forEach(destino =>{

            const div = document.createElement("div");
                div.classList.add("destino");
                div.innerHTML = `
                            <img class="destino-imagen" src="${destino.imagen}" alt="${destino.titulo}">
                            <div class="destino-detalles">
                                <h3 class="destino-titulo">${destino.titulo}</h3>
                                <p class="destino-precio">$${destino.precio}</p>
                                <button class="destino-agregar" id="${destino.id}">Agregar</button>
                            </div>  
                `;
            contenedorDestinos.append(div);
            }
    )
    actualizarBotonesAgregar();
}



 botonesCategoria.forEach(boton => {
    boton.addEventListener("click", (e) =>{
            botonesCategoria.forEach(boton => boton.classList.remove("active"));// se renueve el click anterior
            e.currentTarget.classList.add("active");     //con un click selecciona
     
            if(e.currentTarget.id != "todos"){
                const destinoCategoria = destinos.find(destino => destino.categoria.id === e.currentTarget.id);
                tituloPrincipal.innerText = destinoCategoria.categoria.nombre;

                const destinosBoton = destinos.filter(destino => destino.categoria.id === e.currentTarget.id);
                cargarDestinos(destinosBoton);

                            // filtra el array por tipo seleccionado
            } else {
                tituloPrincipal.innerText ="Todos los destinos";
                cargarDestinos(destinos);
            }

            }
        )
     }
   );  
     
   
function actualizarBotonesAgregar(){
    
    botonesAgregar =document.querySelectorAll(".destino-agregar");

    botonesAgregar.forEach(boton =>{
        boton.addEventListener("click", agregarAlCarrito);
    })   ;
 

}
let destinosEnCarrito;
let destinosEnCarritoLS = localStorage.getItem("destinos-en-carrito");



if(destinosEnCarritoLS){

    destinosEnCarrito= JSON.parse(destinosEnCarritoLS);
    actualizarNumerito();
}else{
    destinosEnCarrito = [];
}


function agregarAlCarrito(e){
    
    Toastify({
        text: "Destino agregado",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #9A1059, #F765BC)",
          borderRadius: "2rem",
          textTransform: "uppercase",
          fontSize: ".75rem"
        },
        offset: {
            x: '1.5rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: '1.5rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },
        onClick: function(){} // Callback after click
      }).showToast();
      
    const idBoton = e.currentTarget.id;
    const destinoAgregado = destinos.find(destino => destino.id===idBoton); //<<<<<===


    if(destinosEnCarrito.some(destino=>destino.id === idBoton)){
        const index = destinosEnCarrito.findIndex(destino=>destino.id === idBoton);
        destinosEnCarrito[index].cantidad++;
    } else {
        destinoAgregado.cantidad = 1;
        destinosEnCarrito.push(destinoAgregado)

    }
    actualizarNumerito();

    localStorage.setItem("destinos-en-carrito", JSON.stringify(destinosEnCarrito));
}

function actualizarNumerito(){

    let nuevoNumerito = destinosEnCarrito.reduce((acc, destino) =>   acc + destino.cantidad, 0);
    numerito.innerText= nuevoNumerito;
    
    

}





