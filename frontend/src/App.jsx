import './App.css'

function App() {
  return(
    <div className="app">
      {/*Navegación*/}
<header className="navbar">
  <a href="#inicio" className="logo">
    <span className="logo-icon">T</span>
    <span>Turno<span className="logo-highlight">Ya</span></span>
  </a>

  <nav className="nav-links">
    <a href="#inicio">Inicio</a>
    <a href="servicios">Servicios</a>
    <a href="beneficios">Beneficios</a>
  </nav>

  <div className="nav-actions">
    <button className="btn-login">Iniciar sesión</button>
    <button className='btn-primary btn-nav'>Crear cuenta</button>
  </div>
</header>

<main>
  {/* PORTADA */}
  <section className='hero' id='inicio'>
    <div className='hero-content'>
      <span className='hero-badge'>
          ✨ ORGANIZÁ TU TIEMPO
      </span>

      <h1>
        Tus turnos,
        <br />
        tu tiempo,
        <br />
        <span>tu tranquilidad.</span>
      </h1>

      <p className='hero-descripcion'>
        Reservá tus turnos de forma rápida y sencilla.
        Elegí el servicio, encontrá el horario ideal y 
        dejá que nosotros nos encarguemos del resto.
      </p>

      <div className='hero-actions'>
        <a href='#servicios' className='btn-primary'>
          Reservar un turno <span>→</span>
        </a>

        <a href='#beneficios' className='btn-secondary'>
          Conocé más 
        </a>
      </div>

      <div className='hero-trust'>
        <div className='trust-icon'>✓</div>
        <p>Simple, rápido y organizador</p>
      </div>
    </div>

    <div className='hero-visual'>
      <div className='hero-decoration decoration-one'></div>
      <div className='hero-decoration decoration-two'></div>

      <div className='booking-card'>
        <div className='booking-header'>
          <div>
            <span className='card-overline'>TU AGENDA</span>
            <h3>Próximo turno</h3>
          </div>

          <span className='calendar-icon'>▦</span>
        </div>

        <div className='booking-date'>
          <div className='date-number'>20</div>
          <div>
            <strong>Octubre</strong>
            <span>Martes · 15:00 hs</span>
          </div>
        </div>

        <div className='booking-divider'></div>

        <div className='booking-service'>
          <div className='service-avatar'>✂</div>

          <div className='booking-service-info'>
            <strong>Corte de cabello</strong>
            <span>Servicios profesional</span>
          </div>

          <span className='booking-price'>$8.000</span>
        </div>

        <div className='booking-status'>
          <span className='status-dot'></span>
          Turno confirmado
        </div>

        <div className='floating-card'>
          <div className='floating-check'>✓</div>
          <div>
            <strong>¡Todo organizado!</strong>
            <span>Tu tiempo está en buenas manos.</span>
          </div>
        </div>
      </div>

      <div className='hero-caption'>
        <span>✦</span>
        Menos espera, más tiempo para vos.
      </div>
    </div>
  </section>

  {/* INDICADORES */}
  <section className='stats-strip'>
    <div className='stat.item'>
      <span className='stat-icon'>◷</span>
      <div>
        <strong>En minutos</strong>
        <span>Reservás tu turno</span>
      </div>
    </div>

    <div className='stat-item'>
      <span className='stat-icon'>✓</span>
      <div>
        <strong>Sin complicaciones</strong>
        <span>Proceso sencillo</span>
      </div>
    </div>

    <div className='stat-item'>
      <span className='stat-icon'>▦</span>
      <div>
        <strong>Todo organizado</strong>
        <span>Tu agenda en un lugar</span>
      </div>
    </div>
  </section>

  {/* SERVICIOS */}
  <section className='services-section' id='servicios'>
    <div className='section-heading'>
      <span className='section-eyebrow'>ENCONTRÁ TU SERVICIO</span>

      <h2>
        Tu próximo turno
        <br />
        <span>empieza acá.</span>
      </h2>

      <p>
        Explorá algunos de los servicios que podés organizar 
        con TurnoYa.
      </p>
    </div>

    <div className='services-grid'>
      <article className='service-card'>
        <div className='service-card-icon barber-icon'>✂</div>
        <span className='service-category'>CUIDADO PERSONAL</span>
        <h3>Barberías</h3>
        <p>
          Encontrá horarios disponibles y reservá tu Próximo
          corte sin tener que esperar.
        </p>
        <a href='#contacto' className='service-link'>
          Conocer más <span>→</span>
        </a>
      </article>

      <article className='service-card'>
        <div className='service-card-icon beauty-icon'>✿</div>
        <span className='service-category'>BIENESTAR</span>
        <h3>Estética</h3>
        <p>
          Organizá tus citas de belleza y dedicá tiempo a 
          cuidarte como te merecés. 
        </p>
        <a href='#contacto' className='service-link'>
          Conocer más <span>→</span>
        </a>
      </article>

      <article className='service-card'>
        <div className='service-card-icon health-icon'>✚</div>
        <span className='service-category'>SALUD</span>
        <h3>Consultorios</h3>
        <p>
          Consultá los horarios y organizá tus visitas de 
          una manera más práctica.
        </p>
        <a href='#contacto' className='service-link'>
          Conocer más <span>→</span>
        </a>
      </article>
    </div>
  </section>

  {/* BENEFICIOS */}
  <section className='benefits-section' id='beneficios'>
    <div className='benefits-content'>
      <span className='section-eyebrow'>UNA FORMA MÁS SIMPLE</span>

      <h2>
        Tu tiempo vale.
        <br />
        <span>Aprovechalo.</span>
      </h2>

      <p>
        Olvidate de los mensajes interminables y de las
        agendas desordenadas. con TurnoYa, gestionar tus 
        turnos es mucho más sencillo.
      </p>

      <div className='benefit-list'>
        <div className='benefit-item'>
          <span>✓</span>
          <div>
            <strong>Reservas simples</strong>
            <p>Encontrá y elegí eñ horario que te conviene.</p>
          </div>
        </div>

        <div className='benefit-item'>
          <span>✓</span>
          <div>
            <strong>Todo en un mismo lugar</strong>
            <p>Consultá tus turnos sin perder información.</p>
          </div>
        </div>

        <div className='benefit-item'>
          <span>✓</span>
          <div>
            <strong>Más organización</strong>
            <p>Administrá tu tiempo con mayor tranquilidad.</p>
          </div>
        </div>
      </div>

      <a href='#inicio' className='btn-primary benefits-button'>
        Empezar ahora <span>→</span>
      </a>
    </div>

    <div className='benefits-visual'>
      <div className='benefits-circle'>
        <div className='benefits-inner'>
          <span className='benefits-clock'>◷</span>
          <strong>Tu tiempo</strong>
          <span>es lo mas importante.</span>
        </div>
      </div>

      <div className='benefits-note'>
        <span>✦</span>
        <div>
          <strong>Menos preocupaciones</strong>
          <p>Más tiempo para lo que importa.</p>
        </div>
      </div>
    </div>
  </section>

  {/* LLAMADA A LA ACCIÓN */}
  <section className='cta-section' id='contacto'>
    <div className='cta-content'>
      <span>✦ EMPEZÁ HOY</span>

      <h2>
        Organizá tus turnos.
        <br />
        Simplificá tu día.
      </h2>
      
      <p>
        Estamos preparando una forma más simple de administrar
        tus reservas. Sumate a TurnoYa.
      </p>

      <button
      className='btn-cta'
      onClick={() => alert('¡ Próximamente vas a poder crear tu cuenta!')}
      >
        Crear mi cuenta <span>→</span>
      </button>
    </div>
  </section>
</main>

{/* PIE DE PÁGINA */}
<footer className='footer'>
  <a href='#inicio' className='logo footer-logo'>
    <span className='logo-icon'>T</span>
    <span>Turno<span className='logo-highlight'>Ya</span></span>
  </a>

  <p>Tu tiempo, organizado.</p>

  <span className='footer-copy'>
    © 2026 TurnoYa. Proyecto de portfolio.
  </span>
</footer>
</div>
  )
}

export default App 