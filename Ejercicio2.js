/* Ejercicio 2: Reaprovisionamiento de productos */
/* 
Deberás escribir un programa que lea el archivo JSon (click aquí para descargarlo)
donde se encuentran las compras de un cliente y calcule la fecha de posible recompra 
de los productos que compró (solo los que compró al menos 2 veces).

Para obtener la fecha de recompra de un producto: hay que analizar cada cuanto tiempo
vuelve a comprar ese producto. Luego sumarle ese tiempo a la fecha de última compra del
producto. Vas a tener una fecha de recompra por producto. */
var data = `{
    "customer": {
      "purchases": [
        {
          "number": "B001-002306",
          "date": "2020-01-01",
          "products": [
            {
              "sku": "101",
              "name": "Cat Chow 1KG"
            },
            {
              "sku": "102",
              "name": "Tidy Cats 2KG"
            }
          ]
        },
        {
          "number": "B001-002307",
          "date": "2020-01-15",
          "products": [
            {
              "sku": "103",
              "name": "Royal canin cat ultra light pouch"
            }
          ]
        },
        {
          "number": "B001-002308",
          "date": "2020-02-05",
          "products": [
            {
              "sku": "101",
              "name": "Cat Chow 1KG"
            } ]
        },
        {
          "number": "B001-002309",
          "date": "2020-03-03",
          "products": [
            {
              "sku": "101",
              "name": "Cat Chow 1KG"
            },
            {
              "sku": "102",
              "name": "Tidy Cats 2KG"
            }        
          ]
        },
        {
          "number": "B001-002310",
          "date": "2020-09-03",
          "products": [
            {
              "sku": "101",
              "name": "Cat Chow 1KG"
            },
            {
              "sku": "102",
              "name": "Tidy Cats 2KG"
            }        
          ]
        },
        {
          "number": "B001-002311",
          "date": "2020-10-01",
          "products": [
            {
              "sku": "101",
              "name": "Cat Chow 1KG"
            },
            {
              "sku": "102",
              "name": "Tidy Cats 2KG"
            }        
          ]
        },
        {
          "number": "B001-002312",
          "date": "2020-11-06",
          "products": [
            {
              "sku": "101",
              "name": "Cat Chow 1KG"
            },
            {
              "sku": "102",
              "name": "Tidy Cats 2KG"
            }        
          ]
        }
      ]
    }
  }`
let productos={}
 function Products (data) {/* Función que va a colocar en el objeto propiedades con el nombre de cada producto y dentro un array con las fechas que fue comprado */
    const object = JSON.parse(data)
    for(var i=0 ; i<object.customer.purchases.length; i++){
        
        for(var j=0 ; j<object.customer.purchases[i].products.length; j++){
            
            if(!productos[object.customer.purchases[i].products[j].name]){
                productos[object.customer.purchases[i].products[j].name]=[new Date(object.customer.purchases[i].date)]
            }
           else{
            productos[object.customer.purchases[i].products[j].name].push(new Date(object.customer.purchases[i].date))
           }
           if(productos[object.customer.purchases[i].products[j].name].length > 1){
             productos[object.customer.purchases[i].products[j].name].recompra = new Date(object.customer.purchases[1].date) 
           }
        }
    } 
    return
}
function Recompra ()  {/* Funcion que va a recorrer los productos y sus fechas, va a encontrar la menor diferencia entre fechas y va a sumarsela a la ultima fecha 
  que el producto fue comprado, esta será la posible fecha de recompra */
  for(products in productos){
    if( productos[products].length > 1){
       for(var k = 1; k<productos[products][k];k++){
          var date = productos[products][k]-productos[products][k-1]
          if(date > 0 && date < productos[products].recompra){
            productos[products].recompra=date
          }
      } 
      let posibleRecompra = new Date ((productos[products][productos[products].length-1]).getTime()+(productos[products].recompra))
    console.log('su cliente comprará ', products, ' el dia', posibleRecompra)
    }
  }
}
Products(data)
Recompra() 


