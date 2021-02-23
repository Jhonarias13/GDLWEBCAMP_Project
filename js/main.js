(function() {
    "use strict";

    var regalo = document.getElementById('regalo');

    document.addEventListener('DOMContentLoaded', function() {
            // mapa
            var map = L.map('mapa').setView([6.556432, -73.129478], 17≈);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            L.marker([6.556432, -73.129478]).addTo(map)
                .bindTooltip('Hogar.<br> Dulce hogar')
                .openTooltip();





            //Datos del usuario
            var nombre = document.getElementById("nombre");
            var apellido = document.getElementById("apellido");
            var email = document.getElementById("email");

            //Pases
            var pase_dia = document.getElementById('pase_dia');
            var pase_dosDias = document.getElementById('pase_dosDias');
            var pase_completo = document.getElementById('pase_completo');

            //Botones y Divs
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





        }) // DOM Content Loaded


})();