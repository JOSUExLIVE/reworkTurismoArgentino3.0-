var nombre   = document.getElementById('nombres');
var numCompra = document.getElementById('numCompra');
var email     = document.getElementById('email');
var reclamo   = document.getElementById('reclamo');
var error     = document.getElementById('error')
// const parrafo = document.getElementById("warnings");

// function enviarFormulario(){
//     console.log('enviando formulario......');

//     var mensajeError =[];

//     if(nombres.value === null || nombres.value ===''){
//         mensajeError.push('Ingresa tu nombre');
//     }
//     if(numCompra.value === null || numCompra.value ===''){
//         mensajeError.push('Ingresa tu numero compra');
//     }
        
//     if(email.value === null || email.value ===''){
//         mensajeError.push('Ingresa tu email');
//     }
        
//     if(reclamo.value === null || reclamo.value ===''){
//         mensajeError.push('Ingresa tu reclamo');
//     }
//     error.innerHTML = mensajeError.join(', ');

//     return false;   
        
// }
    var form = document.getElementById('formulario');
        form.addEventListener('submit', function(evt){
            evt.preventDefault();
            
            var mensajeError =[];

            if(nombre.value === null || nombre.value ===''){
                mensajeError.push('Ingresa tu nombre');
            }
            if(numCompra.value === null || numCompra.value ===''){
                mensajeError.push('Ingresa tu numero compra');
            }
                
            if((email.value === null || email.value ==='')&&  (email.value==='/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/')){
                mensajeError.push('Ingresa tu email');
            }
                
            if(reclamo.value === null || reclamo.value ===''){
                mensajeError.push('Ingresa tu reclamo');
            }
            error.innerHTML = mensajeError.join(', ');
        });








// form.addEventListener("submit", e=>{
//     e.preventDefault()
//     let warnings = ""
//     let entrar = false
//     let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
//     parrafo.innerHTML = ""
    
//     if(nombres.value.length <6){
//         warnings+=`El nombre no es valido <br>`
//         entrar=true
//     }
//     if(!regexEmail.test(email.value)){
//         warnings+=`El email no es valido verifique por favor! <br>`
//         entrar=true
//     }
//  //s//    if(pass.value.length < 8){
// //         warnings += `El email no es valido verifique por favor! <br>`
// //         entrar=true
// //     }
//     if(entrar){
//         parrafo.innerHTML=warnings
//     }else{    
//         parrafo.innerHTML="Reclamo enviado"
//     }
