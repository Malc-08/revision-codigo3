// Tenemos un li de productos

const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
];

/* Cambié getElementsByName por Id */
const li = document.getElementById("lista-de-productos");
/* Cambié $i por input */
const input = document.querySelector('input');/* quité el punto dentro de 'input' */

/* Refactoricé el código para que cada vez que se quieran mostrar los productos, se pueda llamar a la función con la lista de los productos que se quieren mostrar */
function mostrarProductos(productos) {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  /* Cambié var por const */
  for (let i = 0; i < productos.length; i++) {
    const d = document.createElement("div");
    d.classList.add("producto");

    const ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = productos[i].nombre;/* agregué punto y coma */

    const imagen = document.createElement("img");
    imagen.setAttribute('src', productos[i].img);

    d.appendChild(ti);
    d.appendChild(imagen);

    li.appendChild(d);
  }
}

mostrarProductos(productos);/* cambié displayProductos por mostrarProductos y agregué punto y coma */

const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function () {
  const texto = input.value.toLowerCase();
  const productosFiltrados = filtrado(productos, texto);
  mostrarProductos(productosFiltrados);
};

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
};
