import React from 'react';
import '../../login.css';

export const FormularioCuenta = () => {
  const manejarLogin = (e) => {
    e.preventDefault();
    alert("Sesión iniciada correctamente");
  };

  const manejarRegistro = (e) => {
    e.preventDefault();
    alert("Cuenta creada exitosamente");
  };

  return (
    <div className="split">
    
      <section className="card">
        <h2>Iniciar sesión</h2>
        <form id="login-form" className="simple" onSubmit={manejarLogin}>
          <div>
            <label htmlFor="login-email">Correo</label>
            <input
              id="login-email"
              name="email"
              type="email"
              placeholder="ej: usuario@correo.com"
              required
            />
          </div>
          <div>
            <label htmlFor="login-pass">Clave</label>
            <input
              id="login-pass"
              name="password"
              type="password"
              placeholder="•••••••"
              required
            />
          </div>
          <button className="btn" type="submit">Entrar</button>
        </form>
      </section>

      
      <section className="card registro">
        <h2>Registrarse</h2>
        <form id="register-form" className="simple" onSubmit={manejarRegistro}>
          <div>
            <label htmlFor="reg-name">Nombre</label>
            <input
              id="reg-name"
              name="name"
              type="text"
              placeholder="Nombre y apellido"
              required
            />
          </div>
          <div>
            <label htmlFor="reg-email">Correo</label>
            <input
              id="reg-email"
              name="email"
              type="email"
              placeholder="ej: usuario@correo.com"
              required
            />
          </div>
          <div>
            <label htmlFor="reg-phone">Teléfono</label>
            <input
              id="reg-phone"
              name="phone"
              type="tel"
              placeholder="+56 9 1234 5678"
            />
          </div>
          <div>
            <label htmlFor="reg-pass">Clave</label>
            <input
              id="reg-pass"
              name="password"
              type="password"
              placeholder="•••••••"
              required
            />
          </div>
          <button className="btn" type="submit">Crear cuenta</button>
        </form>
      </section>
    </div>
  );
};