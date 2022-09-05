
    //creando los objetos
    const articulos = [
        {
            "numero": 1,
            "nombre": "Aceite esencial de Clavo",
            "cantidad": "12ML",
            "precio": "7,99 €",
            "sale a": "Sale a: 665,83 €/L",
            "descripcion": "El aceite esencial de clavo es conocido por sus increíbles propiedades antimicrobianas, antimicóticas, antisépticas, antivirales, afrodisíacas y estimulantes. Perfecto para utilizar en tus mezclas de Cosmética Natural, añadiendo unas cuantas gotas en tu crema corporal o aceite vegetal, conseguirás nutrir y lucir una piel radiante y 100% cuidad."
        },
        {
            "numero": 2,
            "nombre": "Parches de Oro de 24 kt Rejuvenecedores para Contorno de Ojos",
            "cantidad": "60UDS.",
            "precio": "15,50 €",
            "sale a": "Sale a: 0,26 €/ud.",
            "descripcion": "Parches de oro de 24 kt rejuvenecedores para contorno de ojos de Natura Siberica. Parches para ojos con efecto rejuvenecedor enriquecidos con oro de 24kt. Su acción descongestiona la piel, la suaviza y mejora su luminosidad.",
        },
        {
            "numero": 3,
            "nombre": "Parches Iluminadores para el Contorno de Ojos",
            "cantidad": "60UDS.",
            "precio": "15,50 €",
            "sale a": "Sale a: 0,26 €/ud.",
            "descripcion": "Parches iluminadores para el contorno de ojos de Natura Siberica. 60 Parches para ojos con efecto iluminador que hidratan la piel del contorno, le devuelven la vitalidad y mejoran su protección para mantenerla joven."
        },
        {
            "numero": 4,
            "nombre": "Parches Supertonificantes para Contorno de Ojos",
            "cantidad": "60UDS.",
            "precio": "15,50 €",
            "sale a": "",
            "descripcion": "Parches supertonificantes para contorno de ojos de Natura siberica. Parches para ojos con efecto tonificante que reducen visiblemente los signos de fatiga en la mirada y le aportan luz y vitalidad al instante."
        },
        {
            "numero": 5,
            "nombre": "Discos Desmaquillantes de Fibra Natural",
            "cantidad": "60UDS.",
            "precio": "15,50 €",
            "sale a": "Sale a: 0,26 €/ud.",
            "descripcion": "Parches iluminadores para el contorno de ojos de Natura Siberica. 60 Parches para ojos con efecto iluminador que hidratan la piel del contorno, le devuelven la vitalidad y mejoran su protección para mantenerla joven."
        },
        {
            "numero": 6,
            "nombre": "Aceite anticelulítico de abedul",
            "cantidad": "60UDS.",
            "precio": "15,50 €",
            "sale a": "Sale a: 0,26 €/ud.",
            "descripcion": "Parches iluminadores para el contorno de ojos de Natura Siberica. 60 Parches para ojos con efecto iluminador que hidratan la piel del contorno, le devuelven la vitalidad y mejoran su protección para mantenerla joven."
        },
        {
            "numero": 7,
            "nombre": "Aceite antiinflamatorio S.O.S Rescate",
            "cantidad": "60UDS.",
            "precio": "15,50 €",
            "sale a": "Sale a: 0,26 €/ud.",
            "descripcion": "Parches iluminadores para el contorno de ojos de Natura Siberica. 60 Parches para ojos con efecto iluminador que hidratan la piel del contorno, le devuelven la vitalidad y mejoran su protección para mantenerla joven."
        },
        {
            "numero": 8,
            "nombre": "Aceite Bucal de Coco Orgánico Premium",
            "cantidad": "60UDS.",
            "precio": "15,50 €",
            "sale a": "Sale a: 0,26 €/ud.",
            "descripcion": "Parches iluminadores para el contorno de ojos de Natura Siberica. 60 Parches para ojos con efecto iluminador que hidratan la piel del contorno, le devuelven la vitalidad y mejoran su protección para mantenerla joven."
        },
        {
            "numero": 9,
            "nombre": "Aceite corporal blanco siberiano anticelulítico de Natura Siberica",
            "cantidad": "60UDS.",
            "precio": "15,50 €",
            "sale a": "Sale a: 0,26 €/ud.",
            "descripcion": "Parches iluminadores para el contorno de ojos de Natura Siberica. 60 Parches para ojos con efecto iluminador que hidratan la piel del contorno, le devuelven la vitalidad y mejoran su protección para mantenerla joven."
        },
        {
            "numero": 10,
            "nombre": "Aceite corporal Body Sculptor",
            "cantidad": "60UDS.",
            "precio": "15,50 €",
            "sale a": "Sale a: 0,26 €/ud.",
            "descripcion": "Parches iluminadores para el contorno de ojos de Natura Siberica. 60 Parches para ojos con efecto iluminador que hidratan la piel del contorno, le devuelven la vitalidad y mejoran su protección para mantenerla joven."
        },
        {
            "numero": 11,
            "nombre": "Aceite corporal de almendras dulces",
            "cantidad": "60UDS.",
            "precio": "15,50 €",
            "sale a": "Sale a: 0,26 €/ud.",
            "descripcion": "Parches iluminadores para el contorno de ojos de Natura Siberica. 60 Parches para ojos con efecto iluminador que hidratan la piel del contorno, le devuelven la vitalidad y mejoran su protección para mantenerla joven."
        },
        {
            "numero": 12,
            "nombre": "Aceite corporal de almendras dulces con dosificador",
            "cantidad": "60UDS.",
            "precio": "15,50 €",
            "sale a": "Sale a: 0,26 €/ud.",
            "descripcion": "Parches iluminadores para el contorno de ojos de Natura Siberica. 60 Parches para ojos con efecto iluminador que hidratan la piel del contorno, le devuelven la vitalidad y mejoran su protección para mantenerla joven."
        },
        {
            "numero": 13,
            "nombre": "Aceite corporal de almendras dulces con dosificador",
            "cantidad": "60UDS.",
            "precio": "15,50 €",
            "sale a": "Sale a: 0,26 €/ud.",
            "descripcion": "Parches iluminadores para el contorno de ojos de Natura Siberica. 60 Parches para ojos con efecto iluminador que hidratan la piel del contorno, le devuelven la vitalidad y mejoran su protección para mantenerla joven."
        },
        {
            "numero": 14,
            "nombre": "Aceite Corporal de Granada",
            "cantidad": "60UDS.",
            "precio": "15,50 €",
            "sale a": "Sale a: 0,26 €/ud.",
            "descripcion": "Parches iluminadores para el contorno de ojos de Natura Siberica. 60 Parches para ojos con efecto iluminador que hidratan la piel del contorno, le devuelven la vitalidad y mejoran su protección para mantenerla joven."
        },
        {
            "numero": 15,
            "nombre": "Aceite Corporal de Rosa Mosqueta",
            "cantidad": "60UDS.",
            "precio": "15,50 €",
            "sale a": "Sale a: 0,26 €/ud.",
            "descripcion": "Parches iluminadores para el contorno de ojos de Natura Siberica. 60 Parches para ojos con efecto iluminador que hidratan la piel del contorno, le devuelven la vitalidad y mejoran su protección para mantenerla joven."
        },
        {
            "numero": 16,
            "nombre": "Aceite corporal Embellecedor del Busto",
            "cantidad": "60UDS.",
            "precio": "15,50 €",
            "sale a": "Sale a: 0,26 €/ud.",
            "descripcion": "Parches iluminadores para el contorno de ojos de Natura Siberica. 60 Parches para ojos con efecto iluminador que hidratan la piel del contorno, le devuelven la vitalidad y mejoran su protección para mantenerla joven."
        },
        {
            "numero": 17,
            "nombre": "Aceite corporal Reafirmante de Tejidos",
            "cantidad": "60UDS.",
            "precio": "15,50 €",
            "sale a": "Sale a: 0,26 €/ud.",
            "descripcion": "Parches iluminadores para el contorno de ojos de Natura Siberica. 60 Parches para ojos con efecto iluminador que hidratan la piel del contorno, le devuelven la vitalidad y mejoran su protección para mantenerla joven."
        },
        {
            "numero": 18,
            "nombre": "Aceite corporal Reina de Egipto",
            "cantidad": "60UDS.",
            "precio": "15,50 €",
            "sale a": "Sale a: 0,26 €/ud.",
            "descripcion": "Parches iluminadores para el contorno de ojos de Natura Siberica. 60 Parches para ojos con efecto iluminador que hidratan la piel del contorno, le devuelven la vitalidad y mejoran su protección para mantenerla joven."
        },
        {
            "numero": 19,
            "nombre": "Aceite daúrico corporal de Natura Siberica",
            "cantidad": "60UDS.",
            "precio": "15,50 €",
            "sale a": "Sale a: 0,26 €/ud.",
            "descripcion": "Parches iluminadores para el contorno de ojos de Natura Siberica. 60 Parches para ojos con efecto iluminador que hidratan la piel del contorno, le devuelven la vitalidad y mejoran su protección para mantenerla joven."
        },
        {
            "numero": 20,
            "nombre": "Aceite de Aguacate corporal",
            "cantidad": "60UDS.",
            "precio": "15,50 €",
            "sale a": "Sale a: 0,26 €/ud.",
            "descripcion": "Parches iluminadores para el contorno de ojos de Natura Siberica. 60 Parches para ojos con efecto iluminador que hidratan la piel del contorno, le devuelven la vitalidad y mejoran su protección para mantenerla joven."
        },
        {
            "numero": 21,
            "nombre": "Aceite de almendras corporal Bio",
            "cantidad": "60UDS.",
            "precio": "15,50 €",
            "sale a": "Sale a: 0,26 €/ud.",
            "descripcion": "Parches iluminadores para el contorno de ojos de Natura Siberica. 60 Parches para ojos con efecto iluminador que hidratan la piel del contorno, le devuelven la vitalidad y mejoran su protección para mantenerla joven."
        },
        {
            "numero": 22,
            "nombre": "Aceite de Argán Bio",
            "cantidad": "60UDS.",
            "precio": "15,50 €",
            "sale a": "Sale a: 0,26 €/ud.",
            "descripcion": "Parches iluminadores para el contorno de ojos de Natura Siberica. 60 Parches para ojos con efecto iluminador que hidratan la piel del contorno, le devuelven la vitalidad y mejoran su protección para mantenerla joven."
        },
        {
            "numero": 23,
            "nombre": "Parches Iluminadores para el Contorno de Ojos",
            "cantidad": "60UDS.",
            "precio": "15,50 €",
            "sale a": "Sale a: 0,26 €/ud.",
            "descripcion": "Parches iluminadores para el contorno de ojos de Natura Siberica. 60 Parches para ojos con efecto iluminador que hidratan la piel del contorno, le devuelven la vitalidad y mejoran su protección para mantenerla joven."
        },
        {
            "numero": 24,
            "nombre": "Aceite de CBD 5%",
            "cantidad": "60UDS.",
            "precio": "15,50 €",
            "sale a": "Sale a: 0,26 €/ud.",
            "descripcion": "Parches iluminadores para el contorno de ojos de Natura Siberica. 60 Parches para ojos con efecto iluminador que hidratan la piel del contorno, le devuelven la vitalidad y mejoran su protección para mantenerla joven."
        },
        {
            "numero": 25,
            "nombre": "Parches Iluminadores para el Contorno de Ojos",
            "cantidad": "60UDS.",
            "precio": "15,50 €",
            "sale a": "Sale a: 0,26 €/ud.",
            "descripcion": "Parches iluminadores para el contorno de ojos de Natura Siberica. 60 Parches para ojos con efecto iluminador que hidratan la piel del contorno, le devuelven la vitalidad y mejoran su protección para mantenerla joven."
        }
    ]
    // terminados los articulos

    //constantes

    let pagina = 0


    //cargar articulos

    function cargar_objetos(pagina) {
        console.log(pagina)
        //var resultado = `Pasado el tiempo, ${nombre} ${apellido} va a tener ${edad}` 
        const grilla = document.getElementById("grilla")
        if (pagina == 0) {
            inicia = 0
            final = 11
        } else if (pagina == 1) {
            inicia = 12
            final = 23
        } else {
            inicia = 24
            final = 24
        }
        for (var i = inicia; i < final + 1; i++) {
            let contenido = '<div class="item" id="item"> <div class="iconos-favorito"><img src = "./src/corazon.png" alt = ""></div ><figure class="img-p"><img src="./src/' + articulos[i]["numero"] + '.jpg" alt=""></figure><div class="icons"><p>-50%</p><p>2*und</p></div><div class="letters"><p>' + articulos[i]["nombre"] + '</p><p>' + articulos[i]["cantidad"] + '</p><p>Natura siberica</p><p>' + articulos[i]["precio"] + '</p></div><div class="boton-esconder"><div class="add_cesta"><button class=""><img src="./src/cesta.png" alt="">Añadir a la cesta</button></div></div></div >'
            grilla.insertAdjacentHTML('beforeend', contenido);
        }

        const paginador = document.getElementById("paginador")
        let contenido1 = '<a href="#" id="atras" onclick="pasaratras(1)"><div class="flecha atras"><img src="./src/arrow.png" alt=""></div></a>'
        paginador.insertAdjacentHTML('beforeend', contenido1);
        final_pagina = Math.ceil(articulos.length / 12)
        for (var i = 0; i < final_pagina; i++) {
            let contenido = '<a href="#" id="numero" onclick="pasarpagina()"><div class="flecha"><p class="paginator" id="numero-pagina' + i + '">' + (i + 1) + '</p></div></a>'
            paginador.insertAdjacentHTML('beforeend', contenido);
        }
        let contenido2 = '<a href="#" id="adelante" onclick="pasaradelante(1)"><div class="flecha adelante"><img src="./src/arrow.png" alt=""></div></a>'
        paginador.insertAdjacentHTML('beforeend', contenido2);

        const lista = document.getElementById("articulos")
        for (var i = 0; i < 25; i++) {
            let contenido = '<option>'+articulos[i]["nombre"]+'</option>'
            lista.insertAdjacentHTML('beforeend', contenido);
        }
        busqueda()
    }

    function pasarpagina() {
        let id;
        document.querySelectorAll(".paginator").forEach(el => {
            el.addEventListener("click", e => {
                const id = e.target.getAttribute("id");
                let pasar = document.getElementById(id).textContent
                remover_elementos()
                cargar_objetos(pasar - 1)
            });
        });
    }
    function pasaratras() {
        pagina = pagina - 1
        remover_elementos()
        if (pagina > 2 || pagina < -1) {
            pagina = 2
        }
        cargar_objetos(pagina)
    }
    function pasaradelante() {
        pagina = pagina + 1
        remover_elementos()
        if (pagina > 2 || pagina < -1) {
            pagina = 2
        }
        cargar_objetos(pagina)
    }

    function remover_elementos() {
        const atras = document.querySelectorAll('#atras');
        atras.forEach(atr => {
            atr.remove();
        });

        const adelante = document.querySelectorAll('#adelante');
        adelante.forEach(atr => {
            atr.remove();
        });

        const numero = document.querySelectorAll('#numero');
        numero.forEach(atr => {
            atr.remove();
        });

        const item = document.querySelectorAll('.item');
        item.forEach(atr => {
            atr.remove();
        });
    }

    function incluirART(){
        const lista = document.getElementById("articulos")
        for (var i = 0; i < 25; i++) {
            let contenido = '<option>'+articulos[i]["nombre"]+'</option>'
            lista.insertAdjacentHTML('beforeend', contenido);
        }
    }

    //credenciales
    const crecenciales = [
        {
            "correo": "un.marciano12@gmail.com",
            "contraseña": "12345*Ma"
        },
        {
            "correo": "un.marciano13@gmail.com",
            "contraseña": "12345*Ma"
        },
        {
            "correo": "un.marciano14@gmail.com",
            "contraseña": "12345*Ma"
        },
        {
            "correo": "un.marciano15@gmail.com",
            "contraseña": "12345*Ma"
        }
        ]
    function verificar(){
        const correo = document.getElementById("correo").value
        const contraseña = document.getElementById("contraseña").value
        for (var i = 0; i < 4; i++) {
            console.log(correo+ "el correo "+crecenciales[i]["correo"]+"el otro correo")
            if(crecenciales[i]["correo"] ==correo && contraseña == crecenciales[i]["contraseña"]){
                location.href="grilla-items.html";
            }

        }
    }
    function agregar(){
        const correo = document.getElementById("correo").value
        const contraseña = document.getElementById("contraseña").value
        const contraseña2 = document.getElementById("contraseña2").value    
        
        if(contraseña==contraseña2){
            crecenciales.push({
                "correo": correo,
                "contraseña": contraseña
            })
            location.href="login.html";
            console.log(crecenciales)
        }
        else{
            location.href="registro.html";
        }
        
    }   

    function busqueda(){
        const rangeinput=document.querySelectorAll(".range input")
        rangeinput.forEach(input =>{
            input.addEventListener("input", () =>{
                let minVal=parseInt(rangeinput[0].value),
                maxVal = parseInt(rangeinput[1].value)
            
                const minimo=document.querySelector("#minimo"),
                maximo = document.querySelector("#maximo")
    
                minimo.value=minVal
                maximo.value=maxVal
            })
        })
    }

    function filtro(){
        //toma los valores de arriba para filtrar los elementos pero ya no queda tiempo
    }
   

    
