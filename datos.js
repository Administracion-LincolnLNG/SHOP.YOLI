const CONFIG = {
  negocio: "YOLYSHOP",
  lema: "Pantuflas, perfumes, gafas y juegos para tu hogar.",
  horario: "Lunes a sábado, 9:00 a 18:00",

  // Número con código de país, sin + ni espacios. Ecuador: 593 + número sin el 0 inicial.
  whatsapp: "593999999999",

  // Textos de botones y mensajes
  textoBotonProducto: "Pedir por WhatsApp",
  mensajeProducto: "Hola YOLYSHOP, quiero pedir el producto:",

  // Dirección tal como la buscarías en Google Maps
  direccion: "Tu dirección aquí",

  instagram: "https://www.instagram.com/tu_usuario",
  tiktok: "https://www.tiktok.com/@tu_usuario",
};

/* ============================================================
   CATEGORÍAS DEL MENÚ
   Usa exactamente el mismo nombre en "categoria" de cada producto.
   ============================================================ */

const CATEGORIAS = ["Pantuflas", "Perfumes", "Gafas", "Juegos de interior"];

/* ============================================================
   PRODUCTOS
   1) Guarda la foto en la carpeta "img" (ej: img/producto5.jpg)
   2) Copia una línea, pégala al final y cambia los datos.
   "descripcion" y "precio" son opcionales.
   ============================================================ */

const PRODUCTOS = [
  { nombre: "Pantuflas suaves", imagen: "img/producto1.jpg", categoria: "Pantuflas", descripcion: "Muy cómodas para usar en casa.", precio: "$12" },
  { nombre: "Perfume floral",   imagen: "img/producto2.jpg", categoria: "Perfumes",  descripcion: "Aroma fresco y de larga duración.", precio: "$25" },
  { nombre: "Gafas de sol",     imagen: "img/producto3.jpg", categoria: "Gafas",     descripcion: "Protección UV con estilo.", precio: "$15" },
  { nombre: "Juego de mesa",    imagen: "img/producto4.jpg", categoria: "Juegos de interior", descripcion: "Diversión para toda la familia.", precio: "$18" },
  // { nombre: "Nuevo producto", imagen: "img/producto5.jpg", categoria: "Perfumes", descripcion: "", precio: "" },
];

/* ============================================================
   EQUIPO (opcional: deja la lista vacía si no lo quieres mostrar)
   ============================================================ */

const TRABAJADORAS = [
  { nombre: "Jenniffer Infante", imagen: "img/trabajadora1.jpg", rol: "ATENCIÓN", descripcion: "" },
  { nombre: "Kathy Fajardo",     imagen: "img/trabajadora2.jpg", rol: "ATENCIÓN", descripcion: "" },
  { nombre: "Nicol Escobar",     imagen: "img/trabajadora3.jpg", rol: "VENTAS",   descripcion: "" },
];