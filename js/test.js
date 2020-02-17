var expect = chai.expect;

describe('funcion reservarHorario()',function(){

        it('Busca horario dentro del arreglo de horarios y lo elimina',function(){

                    var cantidadPrevia = listadoDeRestaurantes[2].horarios.length;
                    listadoDeRestaurantes[2].reservarHorario('12:00');
                    expect(listadoDeRestaurantes[2].horarios.length).to.equal(cantidadPrevia-1);
        })

        it('Se selecciona el horario de un restaurante que no posee tal horario y se mantiene el arreglo como esta', function(){


            var cantidadPrevia = listadoDeRestaurantes[2].horarios.length;
            listadoDeRestaurantes[2].reservarHorario('10:00');
            expect(listadoDeRestaurantes[2].horarios.length).to.equal(cantidadPrevia);
        })

        it('Se reserva un horario pero no se le pasa ningún parámetro a la función, el arreglo se mantiene igual.',function(){


            var cantidadPrevia = listadoDeRestaurantes[2].horarios.length;
            listadoDeRestaurantes[2].reservarHorario('');
            expect(listadoDeRestaurantes[2].horarios.length).to.equal(cantidadPrevia);   
        })
})

describe('funcion Obtener Puntuacion()', function(){

    it('Dado un restaurant con determinadas calificaciones, la puntuación (que es el promedio de ellas) se calcula correctamente.',function(){

                var notas = listadoDeRestaurantes[1].calificaciones;
                var suma = 0;
                notas.forEach(function(elem){
                            suma += elem;
                })
                var promedio =  suma / notas.length;
                suma = Math.round(promedio * 10) / 10;
                expect(suma).to.equal(listadoDeRestaurantes[1].obtenerPuntuacion());
    })
    it('Dado un restaurant que no tiene ninguna calificación, la puntuación es igual a 0.',function(){

            if(listadoDeRestaurantes[2].calificaciones.length === 0){


                    expect(listadoDeRestaurantes[2].obtenerPuntuacion()).to.equal(0);
            }

    })
})

describe('funcion calificar()',function(){


        it('Se testea que si el valor no es un numero, no se agrega',function(){

            var prueba = 'abcd';
            var notas = listadoDeRestaurantes[2].calificaciones.length;
            listadoDeRestaurantes[2].calificar(prueba);
            expect(listadoDeRestaurantes[2].calificaciones.length).to.equal(notas);
        })
        it('Se testea que dado un valor mayor a 10, no se agrega a la lista',function(){

            var prueba = 11;
            var notas = listadoDeRestaurantes[2].calificaciones.length;
            listadoDeRestaurantes[2].calificar(prueba);
            expect(listadoDeRestaurantes[2].calificaciones.length).to.equal(notas);
        })
        it('Se testea que dado un valor menor a 0, no se agrega a la lista',function(){

            var prueba = -1;
            var notas = listadoDeRestaurantes[2].calificaciones.length;
            listadoDeRestaurantes[2].calificar(prueba);
            expect(listadoDeRestaurantes[2].calificaciones.length).to.equal(notas);

        })

})

describe('funcion buscarRestaurante()', function(){

        it('Se testea que se pone un id incorrecto, y devuelve que no se encontro restaurant valido',function(){

             var prueba = listado.buscarRestaurante(120);
             expect(prueba).to.equal('No se ha encontrado ningún restaurant');
      })
      it('Se testea que se ponen letras como id, y devuelve que no se encontro restaurant valido',function(){
             var prueba = listado.buscarRestaurante('restaurant2');
             expect(prueba).to.equal('No se ha encontrado ningún restaurant');
      })

      it('Se testea que no se pone nada como parametro y deveulve que no se encontro restaurant valido',function(){
             var prueba = listado.buscarRestaurante();
             expect(prueba).to.equal('No se ha encontrado ningún restaurant');
      })
})

describe('funcion obtenerRestaurante()', function(){



        
})