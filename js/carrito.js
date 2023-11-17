let destinosEnCarrito = localStorage.getItem("destinos-en-carrito");
destinosEnCarrito =JSON.parse(destinosEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoDestinos = document.querySelector("#carrito-destinos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar =document.querySelectorAll(".carrito-destino-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#carrito-acciones-comprar");



function cargarDestinosCarrito(){
    if(destinosEnCarrito && destinosEnCarrito.length >0 ){

        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoDestinos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");

        contenedorCarritoDestinos.innerHTML="";


        destinosEnCarrito.forEach(destino =>{

             const div = document.createElement("div");
             div.classList.add("carrito-destino");
             div.innerHTML= `
                <img class="carrito-destino-imagen" src="${destino.imagen}" alt="${destino.titulo}">
                <div class="carrito-destino-titulo">
                    <small>Destino</small>
                    <h3>${destino.titulo}</h3>
                </div>
                <div class="carrito-destino-cantidad">
                    <small>Cantidad</small>
                    <p>${destino.cantidad}</p>
                </div>
                <div class="carrito-destino-precio">
                    <small>Precio</small>
                    <p>$${destino.precio}</p>
                </div>
                <div class="carrito-destino-subtotal">
                    <small>SubTotal</small>
                    <p>$USD${destino.precio * destino.cantidad}</p>
                </div>
                <button class="carrito-destino-eliminar" id="${destino.id}" ><i class="bi bi-trash3"></i></button>

             `;   
        contenedorCarritoDestinos.append(div);
     } )
     actualizarBotonesEliminar();
     actualizarTotal();

    }   else {

          contenedorCarritoVacio.classList.remove("disabled");
          contenedorCarritoDestinos.classList.add("disabled");
          contenedorCarritoAcciones.classList.add("disabled");
          contenedorCarritoComprado.classList.add("disabled");


        }
        
    }
cargarDestinosCarrito();

function actualizarBotonesEliminar(){
    
    botonesEliminar =document.querySelectorAll(".carrito-destino-eliminar");

    botonesEliminar.forEach(boton =>{
        boton.addEventListener("click", eliminarDelCarrito);
    });
 

}
function eliminarDelCarrito(e){

    Toastify({
        text: "Destino eliminado",
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
    const index = destinosEnCarrito.findIndex(destino=> destino.id===idBoton);
//parametros errrooorrr!!!! 
    destinosEnCarrito.splice(index, 1);
    cargarDestinosCarrito();

    localStorage.setItem("destinos-en-carrito",JSON.stringify(destinosEnCarrito));

}

botonVaciar.addEventListener("click", vaciarCarrito);


function vaciarCarrito() {

    Swal.fire({
        title: '¿Estás seguro?',
        icon: 'question',
        html: `Se van a borrar ${destinosEnCarrito.reduce((acc, destino) => acc + destino.cantidad, 0)} destinos.`,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            destinosEnCarrito.length = 0;
            localStorage.setItem("destinos-en-carrito",JSON.stringify(destinosEnCarrito));
            cargarDestinosCarrito();
        }
      })
}



function actualizarTotal(){

    const totalCalculado =destinosEnCarrito.reduce((acc, destino)=> acc +(destino.precio    *   destino.cantidad), 0);
    total.innerText = `$${totalCalculado}`;
}

botonComprar.addEventListener("click", comprarCarrito);

function comprarCarrito(){

    destinosEnCarrito.length=0;
    localStorage.setItem("destinos-en-carrito",JSON.stringify(destinosEnCarrito));

    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoDestinos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");


}