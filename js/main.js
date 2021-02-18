(function() {
    "use strict";

    var regalo = document.getElementById('regalo');

    document.addEventListener('DOMContentLoaded', function() {
            //datos del usuario
            var nombre = document.getElementById("nombre");
            var apellido = document.getElementById("apellido");
            var email = document.getElementById("email");

            //pases
            var pase_dia = document.getElementById('pase_dia');
            var pase_dosDias = document.getElementById('pase_dosDias');
            var pase_completo = document.getElementById('pase_completo');

            //Botones y Divs
            var calcular = document.getElementById('calcular');
            var errorDiv = document.getElementById('error');
            var btnRegistro = document.getElementById('btnRegistro');
            var resultados = document.getElementById('lista-productos');

            calcular.addEventListener('click', calcularMontos);

            function calcularMontos(event) {
                event.preventDefault();
                if (regalo.value === 'PUL') {
                    console.log('has comprado una pulsera');

                }
                if (regalo.value === 'ETI') {
                    console.log('has comprado etiquetas');

                }
                if (regalo.value === 'PLU') {
                    console.log('has comprado plumas');

                }
                if (regalo.value === '') {
                    alert('seleciona un articulo');
                    regalo.focus();

                }


            }





        }) // DOM COntent Loaded


})();