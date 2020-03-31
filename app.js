'use strict'

let guardarChat = document.getElementById('guardarChat');
let openChat = document.getElementById('openChat');
let timezone = document.getElementById('timezone');
let startLV = document.getElementById('startLV');
let endLV = document.getElementById('endLV');
let startSD = document.getElementById('startSD');
let endSD = document.getElementById('endSD');
let activateLV = document.getElementById('activateLV');
let activateSD = document.getElementById('activateSD');
let messagePrincipal = document.getElementById('messagePrincipal');
let textBotton = document.getElementById('textBotton');
// let endSD = document.getElementById('endSD');

let formulario = document.getElementById('formulario');
let script_inner = document.getElementById('wsc_script_inner');

let nuevoUsuarioBtn = document.getElementById('nuevoUsuario'); 



// Datos del usuario  
let nombreUsuario = document.getElementById('nombreUsuario');
let imgUser = document.getElementById('imgUser');
let messageUser = document.getElementById('messageUser');
let phoneNumber = document.getElementById('phoneNumber');
let crearUsuario = document.getElementById('crearUsuario');

var usuarios = [];




// Add listener
guardarChat.addEventListener('click', handleSubmit);
crearUsuario.addEventListener('click', crearUsuarioFunction);

nuevoUsuarioBtn.addEventListener('click', function(){
    document.querySelector('.wsc_agregar_usuario').classList.toggle('active_agregar');
})

// functions
function handleSubmit(){
    let errores = [];
    

    if(!openChat.value){
        errores.push("El tiempo de apertura del chat es obligatorio");
    }else{
        openChat.value = Number(openChat.value) * 1000;
    }

    if(!timezone.value){
        timezone.value = "America/Guayaquil"
    }else{
        timezone.value = timezone.value;
    }


    if(!messagePrincipal.value){
        messagePrincipal.value= "¿Tienes una pregunta? ¡Escribenos!"
    }else{
        messagePrincipal.value = messagePrincipal.value;
    }

    if(!textBotton.value){
        textBotton.value= "Si, tengo una pregunta"
    }else{
        textBotton.value = textBotton.value;
    }

    if(errores.length === 0){
        let users = '[';
        usuarios.forEach(function(user){
            users += `{
                name: "${user.name}",
                photo: "${user.photo}",
                message: "${user.message}",
                phone: "${user.phone}"
            }`;

        });
        users += ']';
        console.log(users);
        // create a Script
        let scriptInsert = `
            <link rel="sylesheet" href="https://apps.vilmanunez.com/whascdn/style.css">
            <script src="https://apps.vilmanunez.com/whascdn/cwha-ba.js"></script> 
            <script> 
                crearWhatsAppChat({
                    activateLV: ${activateLV.checked},
                    activateSD: ${activateSD.checked},
                    startLV: ${startLV.value},
                    endLV: ${endLV.value},
                    startSD: ${startSD.value },
                    endSD: ${endSD.value},
                    open: ${openChat.value},
                    timezone: "${timezone.value}",
                    messagePrincipal: "${messagePrincipal.value}",
                    textBotton: "${textBotton.value}",
                    users:${users} 
                })
            </script>
        `;
        // formulario.style.display = "none";
        script_inner.append(scriptInsert);
        script_inner.style.display = "block";
        document.querySelector('#wsc_copiar').style.display = "block";
        console.log(scriptInsert);
    }else{
        console.log(errores);
    }
}




function crearUsuarioFunction(){
    if(!nombreUsuario.value || !imgUser.value || !messageUser.value || !phoneNumber.value || !crearUsuario){
        document.querySelector('.mensajeError').style.display = "block";
        document.querySelector('.mensajeError').textContent = "Por favor llene todos los datos";
    }else{
        let usuario = {
            name: nombreUsuario.value,
            photo: imgUser.value,
            message: messageUser.value,
            phone: phoneNumber.value
        };
        usuarios.push(usuario);
        let html = '';
        usuarios.forEach(function(user){
            html += `
                <tr>
                    <th scope="row">${user.name}</th>
                    <td>${user.photo}</td>
                    <td>${user.message}</td>
                    <td>${user.phone}</td>
                    <td><button class="btn btn-danger" >Eliminar</button></td>
                </tr>
            `;
        });

        document.querySelector('.cuerpoTabla').innerHTML = html;
    }

}





