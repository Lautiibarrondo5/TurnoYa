import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

function Register() {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    setMensaje("");
    setError("");

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    setCargando(true);

    try {
      const respuesta = await fetch("http://localhost:3000/api/registro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          apellido,
          email,
          password,
        }),
      });

      const datos = await respuesta.json();

      if (!respuesta.ok) {
        throw new Error(datos.mensaje || "No se pudo crear la cuenta.");
      }

      setMensaje(datos.mensaje);

      // Esperar un momento y dirigir al usuario al login
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      setError(
        error.message ||
          "No se pudo conectar con el servidor. Intentá nuevamente."
      );
    } finally {
      setCargando(false);
    }
  }

  return (
    <main className="auth-page">
      <section className="auth-card">
        <Link to="/" className="auth-logo">
          TurnoYa<span>.</span>
        </Link>

        <div className="auth-heading">
          <h1>Creá tu cuenta</h1>
          <p>Empezá a organizar tus turnos en un solo lugar.</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="register-name">Nombre</label>

            <input
              type="text"
              id="register-name"
              name="nombre"
              placeholder="Tu nombre"
              autoComplete="given-name"
              value={nombre}
              onChange={(event) => setNombre(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="register-lastname">Apellido</label>

            <input
              type="text"
              id="register-lastname"
              name="apellido"
              placeholder="Tu apellido"
              autoComplete="family-name"
              value={apellido}
              onChange={(event) => setApellido(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="register-email">Correo electrónico</label>

            <input
              type="email"
              id="register-email"
              name="email"
              placeholder="tu@email.com"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="register-password">Contraseña</label>

            <input
              type="password"
              id="register-password"
              name="password"
              placeholder="Mínimo 8 caracteres"
              minLength={8}
              autoComplete="new-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="register-confirm-password">
              Confirmar contraseña
            </label>

            <input
              type="password"
              id="register-confirm-password"
              name="confirmPassword"
              placeholder="Repetí tu contraseña"
              minLength={8}
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
            />
          </div>

          {error && (
            <p className="auth-error" role="alert">
              {error}
            </p>
          )}

          {mensaje && (
            <p className="auth-success" role="status">
              {mensaje}
            </p>
          )}

          <button
            type="submit"
            className="auth-button"
            disabled={cargando}
          >
            {cargando ? "Creando cuenta..." : "Crear cuenta"}
          </button>
        </form>

        <p className="auth-switch">
          ¿Ya tenés una cuenta?{" "}
          <Link to="/login">Iniciar sesión</Link>
        </p>

        <Link to="/" className="auth-back">
          ← Volver al inicio
        </Link>
      </section>
    </main>
  );
}

export default Register;