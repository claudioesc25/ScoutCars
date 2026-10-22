import React, { useState } from 'react';
import { CarritoCompras } from './components/CarritoCompras';
import { FormularioCuenta } from './components/FormularioCuenta';
import { AUTOS } from './datos/autos';

function App() {
  const [elementosCarrito, setElementosCarrito] = useState([]);
  const [vistaActual, setVistaActual] = useState('inicio');

  const totalItems = elementosCarrito.reduce((acc, item) => acc + item.cantidad, 0);

  const manejarAgregarAlCarrito = (producto) => {
    setElementosCarrito((prev) => {
      const existe = prev.find((item) => item.id === producto.id);
      if (existe) {
        return prev.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }
      return [...prev, { ...producto, modelo: producto.nombre, cantidad: 1 }];
    });

    setVistaActual('carrito');
  };

  const manejarEliminarDelCarrito = (id) => {
    setElementosCarrito((prev) => prev.filter((item) => item.id !== id));
  };

  const manejarActualizarCantidad = (id, nuevaCantidad) => {
    if (nuevaCantidad < 1) return;
    setElementosCarrito((prev) =>
      prev.map((item) => (item.id === id ? { ...item, cantidad: nuevaCantidad } : item))
    );
  };

  const manejarVaciarCarrito = () => setElementosCarrito([]);

  return (
    <>
      <nav className="navegador">
  <div 
    className="Titulo" 
    style={{ cursor: 'pointer' }} 
    onClick={() => setVistaActual('inicio')}
  >
    ScoutCars
  </div>
  <div className="Menu">
    <button 
      className={vistaActual === 'inicio' ? 'activo' : ''}
      onClick={() => setVistaActual('inicio')}
    >
      Inicio
    </button>

    <button 
      className={vistaActual === 'productos' ? 'activo' : ''}
      onClick={() => setVistaActual('productos')}
    >
      Productos
    </button>

    <button 
      className={vistaActual === 'cuenta' ? 'activo' : ''}
      onClick={() => setVistaActual('cuenta')}
    >
      Mi cuenta
    </button>

    <button 
      className="btn-carrito"
      onClick={() => setVistaActual('carrito')}
    >
      🛒 Carrito <span className="badge-carrito">{totalItems}</span>
    </button>
  </div>
</nav>

      <main className="container my-4">
       
       {vistaActual === 'inicio' && (
  <>
    
    <section className="hero">
      <div className="hero-content">
        <h1>Bienvenido a ScoutCars</h1>
        <p>
          Descubre nuestra colección de autos a escala. Encuentra diferentes modelos
          para coleccionar, regalar y disfrutar de tu pasión por los automóviles. 🚗🏁
        </p>
        <button 
          className="btn"
          onClick={() => setVistaActual('productos')}
        >
          Explorar catálogo completo
        </button>
      </div>
    </section>

    
    <section className="productos-inicio">
      <h2>Productos destacados</h2>
      <div className="product-grid">
        {AUTOS.slice(0, 4).map((p) => (
          <div className="card product-card" key={p.id}>
            <img src={p.img} alt={p.nombre} />
            <h4>{p.nombre}</h4>
            <div className="price">${p.precio.toLocaleString("es-CL")}</div>
            <button className="btn" onClick={() => manejarAgregarAlCarrito(p)}>
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '30px' }}>
        <button 
          className="btn"
          style={{ backgroundColor: '#222' }}
          onClick={() => setVistaActual('productos')}
        >
          Ver todo el catálogo ({AUTOS.length} productos) →
        </button>
      </div>
    </section>
  </>
)}

        
        {vistaActual === 'productos' && (
          <>
            <section className="hero mb-4">
              <div className="hero-content">
                <h1>Productos Disponibles</h1>
                <p>La pasión por los motores, en la palma de tu mano. 🚗🏁</p>
              </div>
            </section>

            <section className="productos-inicio">
              <h2>Catálogo completo</h2>
              <div className="product-grid">
                {AUTOS.map((p) => (
                  <div className="card product-card" key={p.id}>
                    <img src={p.img} alt={p.nombre} />
                    <h4>{p.nombre}</h4>
                    <div className="price">${p.precio.toLocaleString("es-CL")}</div>
                    <button className="btn" onClick={() => manejarAgregarAlCarrito(p)}>
                      Agregar al carrito
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        
        {vistaActual === 'cuenta' && <FormularioCuenta />}

        
        {vistaActual === 'carrito' && (
          <div className="row justify-content-center">
            <div className="col-md-10">
              <button 
                className="btn btn-outline-secondary mb-3"
                onClick={() => setVistaActual('productos')}
              >
                ← Seguir comprando
              </button>
              
              <CarritoCompras
                elementosCarrito={elementosCarrito}
                alEliminarDelCarrito={manejarEliminarDelCarrito}
                alActualizarCantidad={manejarActualizarCantidad}
                alVaciarCarrito={manejarVaciarCarrito}
              />
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default App;