var Reserva = function(horario,cant,precio,descuento){

    this.horario = horario;
    this.cantidadDePersonas = cant;
    this.precio = precio;
    this.descuento = descuento;
    if(this.descuento === undefined){
         this.descuento = 0;
    }
}
Reserva.prototype.calcularPrecioBase = function(){
        return this.cantidadDePersonas * this.precio;
}

Reserva.prototype.calcularPrecioTotal = function(){
   var precioFinal = this.calcularPrecioBase() + Adicionales(this.horario, this.calcularPrecioBase()) - Descuento(this.descuento, this.calcularPrecioBase(), this.cantidadDePersonas);
   return precioFinal;
}

function Descuento(discount, precioBase ,cantPersonas){
   switch(discount){
      case 'DES15':
         discount = precioBase  * 15 / 100;
         break;
      case 'DES200':
         discount = 200;
         break;
      case 'DES1':   
        discount =  precioBase  / cantPersonas;
         break;
      }
      if(cantPersonas >= 4 && cantPersonas <= 6){
         discount += precioBase * 5 / 100;
 } 
      if(cantPersonas>= 7 && cantPersonas <= 8){
         discount += precioBase  * 10 / 100;
   }
      if(cantPersonas > 8){
          discount += precioBase  * 15 / 100;
   }
 return discount;
}
function Adicionales(hora,precioBase ){
   var adicionales = 0;
   if((hora.getHours() >= 13 && hora.getHours() <= 14) || (hora.getHours() >= 20 && hora.getHours() <= 21)){
      adicionales += precioBase  * 5 / 100;
   }
  if(hora.getDay() === 5 || hora.getDay() === 6 || hora.getDay() === 7){
     adicionales += precioBase  * 10 / 100;
   }
   return adicionales;
}
