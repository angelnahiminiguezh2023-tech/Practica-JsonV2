const contenedor = document.getElementById("contenedor-productos");

fetch("products.json")
  .then(response => response.json())
  .then(datos => {
    datos.forEach(producto => {
      crearProductoHTML(producto);
    });
  })
  .catch(error => console.log("Error de carga en el JSON:", error));

function eliminar(id) {
  document.getElementById(id).remove();
}

function crearProductoHTML(producto) {
  const div = document.createElement("div");
  div.classList.add("producto");
  div.id = producto.id;
  div.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.nombre}">
    <h3>${producto.nombre}</h3>
    <p>Precio: $${producto.precio}</p>
    <button onclick="eliminar(${producto.id})">Eliminar</button>
  `;
  contenedor.appendChild(div);
}

function agregarProducto() {
  // Tomamos los valores del formulario
  const nombre = document.getElementById("nombre").value.trim();
  const precio = document.getElementById("precio").value.trim();
  const imagen = document.getElementById("imagen").value.trim();

  // Validamos los campos
  if (!nombre || !precio || !imagen) {
    alert("Por favor, completa todos los campos antes de agregar un producto.");
    return;
  }

  // Creamos el objeto producto
  const nuevoProducto = {
    id: Date.now(),
    nombre,
    precio: parseFloat(precio).toFixed(2),
    imagen
  };

  // Mostramos el producto en la página
  crearProductoHTML(nuevoProducto);

  // Limpiamos los campos del formulario
  document.getElementById("nombre").value = "";
  document.getElementById("precio").value = "";
  document.getElementById("imagen").value = "";

  console.log("Producto agregado:", nuevoProducto);
}
function sorpresa() {
  // Creamos un producto nuevo
  const nuevoProducto = {
    id: Date.now(), // id único
    nombre: "Nuevo Producto",
    precio: (Math.random() * 100 + 10).toFixed(2),
    imagen: "/imagenes/nadaXD.jpg" // imagen temporal
  };

  // Crear el elemento visual
  const div = document.createElement("div");
  div.classList.add("producto");
  div.id = nuevoProducto.id;
  div.innerHTML = `
    <img src="${nuevoProducto.imagen}" alt="${nuevoProducto.nombre}">
    <h3>${nuevoProducto.nombre}</h3>
    <p>precio: $${nuevoProducto.precio}</p>
    <button onclick="eliminar(${nuevoProducto.id})">Eliminar</button>
  `;

  // Agregar al contenedor
  contenedor.appendChild(div);

  console.log("Producto agregado:", nuevoProducto);
}