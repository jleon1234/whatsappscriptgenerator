'use scrict'

function crearWhatsAppChat(valores) {
    
    let {
        startLV, 
        endLV,
        startSD,
        endSD, 
        activateLV, 
        activateSD, 
        timezone, 
        open, 
        messagePrincipal,
        textBotton,
        users
    } = valores;
    console.log(users);
    var time = new Date().toLocaleString('es-ES', {
        timeZone: timezone
    });
    let hourArray = time.split(' ');
    let wsc__hour = hourArray[1].split(':')[0];
    let wsc__day = new Date().getDay();

    if(activateLV){
        if(wsc__day > 0 && wsc__day <= 5){
            if(wsc__hour >= startLV && wsc__hour < endLV ){
                createElementChat({open,messagePrincipal,textBotton,users});
            }
        }
        
    }

    if(activateSD){
        if(wsc__day === 6 || wsc__day === 0){
            if(wsc__hour >= startSD && wsc__hour < endSD ){
                createElementChat({open,messagePrincipal,textBotton,users});
            }
        }
        
    }


    function createElementChat({open,messagePrincipal,textBotton, users}){
        let body = document.getElementsByTagName('body')[0];
        if (body) {
            // let users = [{
            //         name: "Patricia",
            //         phone: "+1 (786) 620-5931",
            //         message: 'Hola soy Patricia, estoy lista para responder tus dudas.',
            //         photo: "https://ca.slack-edge.com/T26DMPA0M-U63V7QEG6-369241a38042-512"
            //     },
            //     {
            //         name: "Nicolle",
            //         phone: "+1 849 359 5420",
            //         message: 'Hola soy Nicolle, estoy lista para responder tus dudas.',
            //         photo: "https://ca.slack-edge.com/T26DMPA0M-UHDFU2PUL-55984b87733f-512"
            //     }
            // ];
            console.log(users);
            console.log(typeof users);
            const user = users[Math.floor(Math.random() * users.length)];

            // Start Launcher code
            // Creating a div
            var launcher = document.createElement("div");
            launcher.classList.add('scws-launcher');
            launcher.setAttribute('id', 'scws-launcher');
            // Creating a img
            var imgLauncher = document.createElement("img");
            imgLauncher.setAttribute('src', user.photo);
            imgLauncher.setAttribute('id', 'imagenLauncher');

            launcher.appendChild(imgLauncher);

            // end Launcher code



            // Start conttainer div code
            // Creating a Parent Div
            var divContainer = document.createElement("div");
            divContainer.classList.add('scws-container');
            divContainer.setAttribute('id', 'scws');
            divContainer.style.display = "none";

            // Creating a container header Button
            var containerHeaderBtn = document.createElement('div');
            containerHeaderBtn.classList.add('scws-container-header-button');
            containerHeaderBtn.setAttribute('id', 'scws-container-header-button');
            var textNodeHeader = document.createTextNode('X');
            containerHeaderBtn.appendChild(textNodeHeader);

            // Creating a constainer header
            var containerHeader = document.createElement('div');
            containerHeader.classList.add('scws-container-header');
            var h3ContainerHeader = document.createElement('h3');
            var textH3 = document.createTextNode(messagePrincipal);
            h3ContainerHeader.appendChild(textH3);
            containerHeader.appendChild(h3ContainerHeader);


            // Creating a div error;
            var divError = document.createElement('div');
            divError.setAttribute('id', 'error');

            // Creating a contaienrFooter
            var containerFooter = document.createElement('div');
            containerFooter.classList.add('scws-container-footer');
            var containerFooterChat = document.createElement('div');
            containerFooterChat.classList.add('scws-container-footer-chat');
            // creating a footer chat img
            var containerFooterChatImg = document.createElement('div');
            containerFooterChatImg.classList.add('scws-container-footer-chat-img');
            var imgchat = document.createElement("img");
            imgchat.setAttribute('src', user.photo);
            imgchat.setAttribute('id', 'imagenPerfil');
            containerFooterChatImg.appendChild(imgchat);
            // Creating a footer chat message
            var containerFooterChatMsg = document.createElement('div');
            containerFooterChatMsg.classList.add('scws-container-footer-chat-message');
            var dotFlashing = document.createElement('div');
            dotFlashing.classList.add('dot-flashing');
            var messageContent = document.createElement('span');
            var textMessageContent = document.createTextNode(user.message);

            messageContent.style.display = "none";
            messageContent.appendChild(textMessageContent);
            containerFooterChatMsg.appendChild(dotFlashing);
            containerFooterChatMsg.appendChild(messageContent);


            //Append element to container footer Chat
            containerFooterChat.appendChild(containerFooterChatImg);
            containerFooterChat.appendChild(containerFooterChatMsg);



            // Creating a button Submit
            var buttonSubmit = document.createElement('button');
            buttonSubmit.setAttribute('id', 'enviarPropuesta');
            buttonSubmit.setAttribute('value', 'Si, hazme una oferta irresistible');
            var textButtonSubmit = document.createTextNode(textBotton);
            buttonSubmit.appendChild(textButtonSubmit);

            // Creating container footer chat ws
            var footerChatWs = document.createElement('div');
            footerChatWs.classList.add('scws-container-footer-chat-whatsapp');
            var textFooterChatWs = document.createTextNode('Se abre en WhatsApp');
            footerChatWs.appendChild(textFooterChatWs);

            //Append element to container footer 
            containerFooter.appendChild(containerFooterChat);
            containerFooter.appendChild(buttonSubmit);
            containerFooter.appendChild(footerChatWs);


            // Append ccontainer to Container Header
            divContainer.appendChild(containerHeaderBtn);
            divContainer.appendChild(containerHeader);
            divContainer.appendChild(divError);
            divContainer.appendChild(containerFooter);




            // End conttainer div code

            body.appendChild(launcher);
            body.appendChild(divContainer);
            let cursoThiver = document.querySelector('.order-details-name');
            setTimeout(() => {
                if (launcher.style.display !== 'none') {
                    launcher.style.display = "none";
                    divContainer.style.display = "block";

                    setTimeout(function () {
                        dotFlashing.style.display = "none";
                        messageContent.style.display = "block";
                    }, 4000);
                }
            }, open);

            launcher.addEventListener('click', function () {
                launcher.style.display = "none";
                divContainer.style.display = "block";
                setTimeout(function () {
                    messageContent.style.display = "block";
                    dotFlashing.style.display = "none";
                }, 4000);
            });

            // Click in Botton header container Close chat
            containerHeaderBtn.addEventListener('click', function () {
                divContainer.style.display = "none";
                launcher.style.display = "flex"
            });

            // Botton send message on whastapp
            buttonSubmit.addEventListener('click', function () {
                let cursoThiver = document.querySelector('.order-details-name');
                let mensaje = '';
                if (cursoThiver !== null) {
                    let nombreCurso = cursoThiver.textContent;
                    mensaje = `Hola, tengo una pregunta antes de comprar "${getCleanedString(nombreCurso)}"`;
                } else {
                    let nombreCurso = document.title;
                    mensaje = `Hola, tengo una pregunta sobre "${getCleanedString(nombreCurso)}"`;
                }
                window.location = `https://api.whatsapp.com/send?phone=${user.phone}&text=${mensaje}`;
            });
        }
    }




    function getCleanedString(cadena) {
        // Definimos los caracteres que queremos eliminar
        var specialChars = "!@#$^&%*()+=-[]\/{}|:<>?,.";

        // Los eliminamos todos
        for (var i = 0; i < specialChars.length; i++) {
            cadena = cadena.replace(new RegExp("\\" + specialChars[i], 'gi'), '');
        }

        // Lo queremos devolver limpio en minusculas


        // Quitamos espacios y los sustituimos por _ porque nos gusta mas asi
        cadena = cadena.replace(/ /g, " ");

        // Quitamos acentos y "ñ". Fijate en que va sin comillas el primer parametro
        cadena = cadena.replace(/á/gi, "a");
        cadena = cadena.replace(/é/gi, "e");
        cadena = cadena.replace(/í/gi, "i");
        cadena = cadena.replace(/ó/gi, "o");
        cadena = cadena.replace(/ú/gi, "u");
        cadena = cadena.replace(/ñ/gi, "n");
        return cadena;
    }
}