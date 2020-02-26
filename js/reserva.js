var Reserva = function(horario,cant,precio,descuento){


    this.horario = horario;
    this.cantidadDePersonas = cant;
    this.precio = precio;
    this.descuento = 0;
        if(cant >= 4 && cant <= 6){
                 this.descuento += this.calcularPrecioBase() * 5 / 100;
    } 
        if(cant>=7 && cant <= 8){
                this.descuento += this.calcularPrecioBase() * 10 / 100;
    }
        if(cant > 8){
                this.descuento += this.calcularPrecioBase() * 15 / 100;
    }
   
switch(descuento){


    case 'DES15':
                this.descuento += this.calcularPrecioBase() * 15 / 100;
                break;
    case 'DES200':
                this.descuento += 200;
                break;
    case 'DES1':    
                this.descuento += this.precio;
                break;
                }
}

Reserva.prototype.calcularPrecioBase = function(){
return this.cantidadDePersonas * this.precio;
}

Reserva.prototype.calcularPrecioTotal = function(){
        var adicionales = 0;
    if((this.horario.getHours() >= 13 && this.horario.getHours() <= 14) || (this.horario.getHours() >= 20 && this.horario.getHours() <= 21)){
       adicionales += this.calcularPrecioBase() * 5 / 100;
    }
    if(this.horario.getDay() === 5 || this.horario.getDay() === 6 || this.horario.getDay() === 7){
      adicionales += this.calcularPrecioBase() * 10 / 100;
    } 
 var precioFinal = this.calcularPrecioBase() + adicionales - this.descuento;
 return precioFinal;
}
