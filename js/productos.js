const PRODUCTS = [
    { id: 1, Nombre: "BMW M3", Precio: 25000, img: 'img/bmw_m3.jpg' },
    { id: 2, Nombre: "Formula 1", Precio: 25000, img: 'img/formula 1.jpg' },
    { id: 4, Nombre: "Lamborghini", Precio: 25000, img: 'img/Lamborghini.jpeg' },
    { id: 1, Nombre: "Ferrari F70", Precio: 35000, img: 'img/Ferrari1.jpg' },
    { id: 2, Nombre: "BMW M2", Precio: 20000, img: 'img/bmwm2.jpg' },
    { id: 4, Nombre: "Cadilla Escalade", Precio: 28000, img: 'img/escalade.jpg' },
    { id: 1, Nombre: "FORD F150", Precio: 27000, img: 'img/F150.jpg' },
    { id: 2, Nombre: "MERCEDES-BENZ CLE 53", Precio: 23000, img: 'img/mercedesbenz.jpg' },
    { id: 4, Nombre: "BRABUS", Precio: 21000, img: 'img/brabus.jpg' },
    { id: 1, Nombre: "PORSHE 911", Precio: 26500, img: 'img/991.JPG' },
    { id: 2, Nombre: "bugatticentodieci", Precio: 40000, img: 'img/bugatticentodieci.jpg' },
    { id: 4, Nombre: "CHEVROLET CAMARO", Precio: 15000, img: 'img/camaro.jpg' }
];
const CLP = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP'
});

function renderProducts() {
  const grid = document.getElementById('product-grid');
  if (!grid) {
    console.error("No se encontró el contenedor #product-grid en el HTML");
    return;
  }
  
  grid.innerHTML = '';
  
  PRODUCTS.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card product-card';
    
    card.innerHTML = `
      <img src="${p.img}" alt="${p.Nombre}" loading="lazy" style="width:100%; max-width:200px;">
      <h4>${p.Nombre}</h4>
      <div class="price">${CLP.format(p.Precio)}</div>
      <button class="btn" data-id="${p.id}">Agregar al carrito</button>
    `;
    
    grid.appendChild(card);
  });

  grid.querySelectorAll('button.btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.id);
      agregarAlCarro(id);
    });
  });
}

function agregarAlCarro(productId) {
  const productoEncontrado = PRODUCTS.find(p => p.id === productId);
  if (productoEncontrado) {
    alert(`Agregaste ${productoEncontrado.Nombre} al carrito`);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
});