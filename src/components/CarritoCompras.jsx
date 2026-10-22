import React from 'react';

export const CarritoCompras = ({
  elementosCarrito,
  alEliminarDelCarrito,
  alActualizarCantidad,
  alVaciarCarrito
}) => {
  const total = elementosCarrito.reduce(
    (acumulador, item) => acumulador + item.precio * item.cantidad,
    0
  );

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
        <h5 className="mb-0">🛒 Carrito de Compras</h5>
        {elementosCarrito.length > 0 && (
          <button className="btn btn-outline-danger btn-sm" onClick={alVaciarCarrito}>
            Vaciar
          </button>
        )}
      </div>
      <div className="card-body">
        {elementosCarrito.length === 0 ? (
          <p className="text-muted text-center my-3">El carrito está vacío.</p>
        ) : (
          <>
            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead>
                  <tr>
                    <th>Auto</th>
                    <th>Escala</th>
                    <th>Precio</th>
                    <th>Cant.</th>
                    <th>Subtotal</th>
                    <th>Acción</th>
                  </tr>
                </thead>
                <tbody>
                  {elementosCarrito.map((item) => (
                    <tr key={item.id}>
                      <td className="fw-bold">{item.modelo}</td>
                      <td><span className="badge bg-secondary">{item.escala}</span></td>
                      <td>${item.precio.toLocaleString('es-CL')}</td>
                      <td>
                        <div className="btn-group btn-group-sm" role="group">
                          <button
                            className="btn btn-outline-secondary"
                            onClick={() => alActualizarCantidad(item.id, item.cantidad - 1)}
                            disabled={item.cantidad <= 1}
                          >
                            -
                          </button>
                          <span className="btn btn-light disabled">{item.cantidad}</span>
                          <button
                            className="btn btn-outline-secondary"
                            onClick={() => alActualizarCantidad(item.id, item.cantidad + 1)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td>${(item.precio * item.cantidad).toLocaleString('es-CL')}</td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => alEliminarDelCarrito(item.id)}
                        >
                          ✕
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
              <h4>Total:</h4>
              <h3 className="text-success fw-bold">${total.toLocaleString('es-CL')}</h3>
            </div>
            <button className="btn btn-success w-100 mt-3 fw-bold">
              Proceder al Pago
            </button>
          </>
        )}
      </div>
    </div>
  );
};