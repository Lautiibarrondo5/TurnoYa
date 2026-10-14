import { Link } from "react-router-dom";
import "./Auth.css";

function Login() {
    function handleSubmit(event) {
        event.preventDefault();

        alert("Próximamente conectaremos el inicio de sesión.");
    }

return (
    <main className="auth-page">
        <section className="auth-card">
            <Link to="/" className="auth-logo">
            TurnoYa<span>.</span>
            </Link>

            <div className="auth-heading">
                <h1>¡Qué bueno verte!</h1>
                <p>Iniciá sesión para administrar tus turnos.</p>
            </div>

            <form className="auth-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="login-email">Correo electrónico</label>

                    <input
                        type="email"
                        id="login-email"
                        name="email"
                        placeholder="tu@email.com"
                        autoComplete="email"
                        required 
                        />
                </div>

                <div className="form-group">
                    <label htmlFor="login-password">Contraseña</label>

                    <input
                        type="password"
                        id="login-password"
                        name="password"
                        placeholder="Ingresá tu contraseña"
                        autoComplete="current-password"
                        required 
                        />
                </div>

                <button type="submit" className="auth-button">
                    Iniciar sesión
                </button>
            </form>

            <p className="auth-switch">
                ¿Todavía no tenés cuenta?{" "}
                <Link to="/registro">Crear cuenta</Link>
            </p>

            <Link to="/" className="auth-back">
                ← Volver al inicio
            </Link>
        </section>
    </main>
);
}

export default Login;