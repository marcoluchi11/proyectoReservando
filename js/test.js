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


        it('',function(){


            
        })

})