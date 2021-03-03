(function() {
    "use strict";
    if (document.getElementById('slogan')) {
        //  typewriter

        var app = document.getElementById('slogan');

        var typewriter = new Typewriter(app, {
            loop: true,
            delay: 75,
        });

        typewriter
            .pauseFor(2000)
            .typeString('La mejor conferencia WEB del 2021')
            .pauseFor(300)
            .deleteAll()
            .pauseFor(100)
            .typeString('Aprenderas los mejores trucos de <strong style="color: yellow;">JS</strong> ')
            .pauseFor(300)
            .typeString('<strong></br>Hecho con <span style="color: #fe4918;">❤️</span> en San Gil</strong>')
            .pauseFor(1000)
            .start();
        //  fin typewritter
    }

    var regalo = document.getElementById('regalo');

    document.addEventListener('DOMContentLoaded', function() {

        if (document.getElementById('mapa')) {
            //          mapa
            var map = L.map('mapa').setView([6.556432, -73.129478], 17);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            L.marker([6.556432, -73.129478]).addTo(map)
                .bindTooltip('Hogar.<br> Dulce hogar')
                .openTooltip();
            //       fin mapa
        }


        //       Datos del usuario
        var nombre = document.getElementById("nombre");
        var apellido = document.getElementById("apellido");
        var email = document.getElementById("email");

        //       Pases
        var pase_dia = document.getElementById('pase_dia');
        var pase_dosDias = document.getElementById('pase_dosDias');
        var pase_completo = document.getElementById('pase_completo');

        //        Botones y Divs
        var calcular = document.getElementById('calcular');
        var errorDiv = document.getElementById('error');
        var btnRegistro = document.getElementById('btnRegistro');
        var lista_productos = document.getElementById('lista-productos');
        var suma_total = document.getElementById('suma-total');

        //extras

        var etiquetas = document.getElementById('etiquetas');
        var camisas = document.getElementById('camisa_evento');

        // Eventos
        calcular.addEventListener('click', calcularMontos);
        pase_dia.addEventListener('blur', mostrarDia);
        pase_dosDias.addEventListener('blur', mostrarDia);
        pase_completo.addEventListener('blur', mostrarDia);

        nombre.addEventListener('blur', validarCampos);
        apellido.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarMail);

        function validarCampos() {
            if (this.value == '') {
                errorDiv.style.display = 'block';
                errorDiv.innerHTML = 'este campo es obligatorio';
                errorDiv.style.border = '1px solid red';
                this.style.border = '1px solid red';
            } else {
                errorDiv.style.display = 'none';
                this.style.border = '1px solid #cccccc';
            }
        }

        function validarMail() {
            if (this.value.indexOf("@") > -1) {
                errorDiv.style.display = 'none';
                this.style.border = '1px solid #cccccc';
                // console.log('paso bien', this.value.indexOf("@"));

            } else {
                errorDiv.style.display = 'block';
                errorDiv.innerHTML = 'No es una direccion de correo valida';
                errorDiv.style.border = '1px solid red';
                this.style.border = '1px solid red';
                // console.log('eror= ', this.value.indexOf("@"));
            }
        }
        if (document.getElementById('calcular')) {
            function calcularMontos(event) {
                event.preventDefault();
                if (regalo.value === '') {
                    alert('ELIJE UN REGALO PARA CONTINUAR');
                    regalo.focus();
                } else {
                    var boletosDia = parseInt(pase_dia.value, 10) || 0,
                        boleto2Dias = parseInt(pase_dosDias.value, 10) || 0,
                        boletoCompleto = parseInt(pase_completo.value, 10) || 0,
                        cantEtiquetas = parseInt(etiquetas.value, 10) || 0,
                        cantCamisas = parseInt(camisas.value, 10) || 0;

                    var totalPagar = (boletosDia * 30) + (boleto2Dias * 45) + (boletoCompleto * 50) + ((cantCamisas * 10) * 0.93) + (cantEtiquetas * 2);

                    var listadoProductos = [];
                    if (boletosDia >= 1) { listadoProductos.push(boletosDia + ' pases por dias'); }
                    if (boleto2Dias >= 1) { listadoProductos.push(boleto2Dias + ' pases por dos dias'); }
                    if (boletoCompleto >= 1) { listadoProductos.push(boletoCompleto + ' pases completos'); }

                    if (cantCamisas >= 1) { listadoProductos.push(cantCamisas + ' numero de camisas'); }
                    if (cantEtiquetas >= 1) { listadoProductos.push(cantEtiquetas + ' paquetes de etiquetas'); }

                    lista_productos.style.display = "block";
                    lista_productos.innerHTML = '';
                    for (var i = 0; i < listadoProductos.length; i++) {
                        lista_productos.innerHTML += listadoProductos[i] + '</br>';
                    }
                    //funcion Intl. es un constructor me devuelve las cifras en unidades cientos y millares
                    suma_total.innerHTML = '$ ' + (new Intl.NumberFormat("en-US").format(totalPagar));

                }
            }
        }



        function mostrarDia() {
            var boletosDia = parseInt(pase_dia.value, 10) || 0,
                boleto2Dias = parseInt(pase_dosDias.value, 10) || 0,
                boletoCompleto = parseInt(pase_completo.value, 10) || 0;

            var diasElegidos = [];

            if (boletosDia > 0) {
                diasElegidos.push('viernes');
                console.log(diasElegidos);

            }
            if (boleto2Dias > 0) {
                diasElegidos.push('viernes', 'sabado');
                console.log(diasElegidos);

            }
            if (boletoCompleto > 0) {
                diasElegidos.push('viernes', 'sabado', 'domingo');
                console.log(diasElegidos);

            }

            for (let i = 0; i < diasElegidos.length; i++) {
                document.getElementById(diasElegidos[i]).style.display = 'block';
            }
        }

    }); // DOM Content Loaded

})();

$(function() {

    //lettering
    $('.nombre-sitio').lettering();

    // programa de conferencias
    $('div.programa-evento .info-curso:first').show();
    $('.menu-programa a:first').addClass('activo');
    $('.menu-programa a').on('click', function() {

        $('.menu-programa a').removeClass('activo');
        $(this).addClass('activo')
        $('.ocultar').hide();
        var enlace = $(this).attr('href');
        $(enlace).fadeIn(1000);

        return false;
    });
    // activar animaciones en una pagina al dar scroll con waypoints
    var resumenLista = jQuery('.resumen-evento'); //seleccion de la seccion con jquery o $
    if (resumenLista.length > 0) { // cuando aparezca la seccion en la ventana el length sera 1
        $('.resumen-evento').waypoint(function() { // con waypoints se ejecuta dentro de la funcion las animaciones
            //animaciones para los numeros
            $('.resumen-evento li:nth-child(1) p').animateNumber({ number: 6 }, 1200);
            $('.resumen-evento li:nth-child(2) p').animateNumber({ number: 15 }, 1200);
            $('.resumen-evento li:nth-child(3) p').animateNumber({ number: 3 }, 1500);
            $('.resumen-evento li:nth-child(4) p').animateNumber({ number: 9 }, 1200);
        }, {
            offset: '60%' // la animacion se ejecuta cuando vaya por un 60% de la pantalla
        });
    }


    // plugin de countdown o cuentaregresiva

    $('.seccion-faltan').countdown('2021/06/13 00:00:00', function(e) {
        $('#dias').html(e.strftime('%D'));
        $('#horas').html(e.strftime('%H'));
        $('#minutos').html(e.strftime('%M'));
        $('#segundos').html(e.strftime('%S'));
    });

    //  SCROLL
    var windosheight = $(window).height(); //altura de la ventana del navegador
    var barraAltura = $('.barra').innerHeight(); //altura de la barra



    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll > windosheight) {
            //  atasca la barra en la parte de arriba agregando la clase .fixed
            $('.barra').addClass('fixed');
            //  agrega un margin-top en la parte de abajo para evitar un brinco en el scroll
            $('body').css({ 'margin-top': barraAltura + 'px' });
        } else {
            //  quita la clase .fixed para desatascar la barra
            $('.barra').removeClass('fixed');
            $('body').css({ 'margin-top': '0px' })
        }

    });

    // Menu Responsive

    $('.menu-movil').on('click', function() {
        $('.navegacion-principal').slideToggle();
    })

});