var Restaurant = function(id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
    this.id = id;
    this.nombre = nombre;
    this.rubro = rubro;
    this.ubicacion = ubicacion;
    this.horarios = horarios;
    this.imagen = imagen;
    this.calificaciones = calificaciones;
}

Restaurant.prototype.reservarHorario = function(horarioReservado) {


        var horarioNuevo = this.horarios.filter(horario => horario != horarioReservado);
       this.horarios = horarioNuevo;
}

Restaurant.prototype.calificar = function(nuevaCalificacion) {
    if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion < 10) {
        this.calificaciones.push(nuevaCalificacion);
    }
}

Restaurant.prototype.obtenerPuntuacion = function() {
    if (this.calificaciones.length === 0) {
        return 0;
    } else {
        return prom(this.calificaciones);
    }

}
function acumulador(arr){
        var sumatoria = 0;
        arr.forEach(function(elem){
                sumatoria += elem;
        })
        return sumatoria;
}

function prom(Numeros){
            var sumatoria = acumulador(Numeros);
            var promedio = sumatoria / Numeros.length;
            return Math.round(promedio*10) / 10;
}

