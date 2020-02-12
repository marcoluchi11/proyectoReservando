var expect = chai.expect;

describe('Reserva de Horario',function(){

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


})