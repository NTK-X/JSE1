const pizzas = [
{
    id:1,
    nombre: "Margarita",
    ingredientes : ["salsa de tomate", "mozzarella", "albahaca", "oregano", "aceite de oliva"],
    precio: 500

},

{
    id:2,
    nombre: "Romana",
    ingredientes : ["salsa de tomate", "mozzarella", "anchoas", "oregano", "aceite de oliva"],
    precio: 550

},

{
    id:3,
    nombre: "Cuatro Quesos",
    ingredientes : ["queso fortina", "mozzarella", "queso gorgonzola", "queso parmesano"],
    precio: 650

},

{
    id:4,
    nombre: "Cuatro Estaciones",
    ingredientes : ["salsa de tomate", "mozzarella", "alcachofa", "aceitunas con tomates y albahaca", "champiñones", "Jamon serrano o cocido"],
    precio: 630

},

{
    id:5,
    nombre: "Carbonara",
    ingredientes : ["bacon", "mozzarella", "champiñones", "nata", "cebolla", "queso(rallado)"],
    precio: 570

},

{
    id:6,
    nombre: "Barbacoa",
    ingredientes : ["salsa de tomate o tomate frito", "mozzarella", "carne picada", "pollo", "pimenton verde", "cebolla", "bbq","tocino"],
    precio: 700

},
];


// a)  Las pizzas que tengan un id impar.

const pizzasIdPares = pizzas.filter((pizza)=>{return pizza.id % 2 === 0;})


pizzasIdPares.forEach ((pizza)=>{console.log(`La pizza ${pizza.nombre} posee id par`);})



// b) ¿Hay alguna pizza que valga menos de $600?

    precio=600


    const pizzaPrecioMenorA = (precio) => {
    return pizzas.some((pizza) => {return pizza.precio < precio;
})

? console.log(`Hay pizzas que valen menos de $${precio}`) : console.log(`No hay pizzas que valgan menos de $${precio}`);

};

pizzaPrecioMenorA (precio)


// c) El nombre de cada pizza con su respectivo precio.


pizzas.forEach ((pizza)=>{console.log(`La pizza ${pizza.nombre} tiene un costo de $${pizza.precio}`);})



// d) Todos los ingredientes de cada pizza 


pizzas.forEach ((pizza)=>{console.log(`La pizza ${pizza.nombre} tiene estos ingredientes: ${pizza.ingredientes}`);})