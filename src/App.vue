<script setup>
const whatsappBase = 'https://wa.me/573195175110'
const defaultMessage =
  'Hola, estoy interesado en los servicios del Operador Logístico Policarpa'

const services = [
  {
    title: 'Logística para procesos educativos',
    description:
      'Suministro de materiales, organización de actividades pedagógicas y soporte operativo para jornadas formativas.'
  },
  {
    title: 'Acompañamiento comunitario',
    description:
      'Procesos territoriales, fortalecimiento organizativo y articulación social con enfoque participativo.'
  },
  {
    title: 'Talento humano',
    description:
      'Facilitadores, apoyo operativo y equipos de trabajo comprometidos con objetivos pedagógicos y comunitarios.'
  },
  {
    title: 'Formación en educación popular',
    description:
      'Acompañamiento a preuniversitarios, escuelas juveniles y espacios de aprendizaje para la transformación social.'
  }
]

const metrics = [
  'Procesos educativos con logística integral',
  'Experiencia con juventudes y comunidades',
  'Enfoque social y territorial'
]

function buildWhatsAppUrl(message) {
  return `${whatsappBase}?text=${encodeURIComponent(message)}`
}

function openWhatsApp(message = defaultMessage) {
  window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer')
}

function handleSubmit(event) {
  const formData = new FormData(event.target)
  const name = formData.get('name')?.toString().trim() || ''
  const email = formData.get('email')?.toString().trim() || ''
  const message = formData.get('message')?.toString().trim() || ''

  const formattedMessage = [
    'Hola, estoy interesado en los servicios del Operador Logístico Policarpa.',
    '',
    `Nombre: ${name}`,
    `Correo: ${email}`,
    `Mensaje: ${message}`
  ].join('\n')

  openWhatsApp(formattedMessage)
  event.target.reset()
}
</script>

<template>
  <div class="min-h-screen scroll-smooth bg-brand-mist text-brand-deep">
    <header class="sticky top-0 z-30 border-b border-brand-sage/20 bg-brand-mist/85 backdrop-blur">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#inicio" class="text-lg font-extrabold tracking-tight text-brand-deep">
          Operador Logístico Policarpa
        </a>
        <nav class="hidden items-center gap-6 text-sm font-medium text-brand-forest md:flex">
          <a href="#servicios" class="transition hover:text-brand-deep">Servicios</a>
          <a href="#experiencia" class="transition hover:text-brand-deep">Experiencia</a>
          <a href="#enfoque" class="transition hover:text-brand-deep">Enfoque</a>
          <a href="#contacto" class="transition hover:text-brand-deep">Contacto</a>
        </nav>
      </div>
    </header>

    <main>
      <section
        id="inicio"
        class="relative overflow-hidden px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24"
      >
        <div class="absolute inset-0 -z-10">
          <div
            class="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-sand/40 blur-3xl"
          />
          <div
            class="absolute bottom-0 right-0 h-80 w-80 translate-x-1/4 rounded-full bg-brand-sage/20 blur-3xl"
          />
        </div>

        <div class="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div class="animate-rise">
            <span
              class="inline-flex rounded-full border border-brand-sage/30 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-forest shadow-soft"
            >
              Educación popular + logística social
            </span>
            <h1 class="mt-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Operación logística con sentido pedagógico y comunitario.
            </h1>
            <p class="mt-6 max-w-3xl text-lg leading-8 text-brand-forest/90 md:text-xl">
              Somos un operador logístico que apoya en el suministro de materiales requeridos
              para la realización de prácticas educativas y pedagógicas. Proporcionamos talento
              humano para el desarrollo de actividades orientadas a la democratización,
              resolución de conflictos y construcción de comunidad.
            </p>

            <div class="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-full bg-brand-deep px-6 py-3 text-sm font-semibold text-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-brand-forest"
                @click="openWhatsApp()"
              >
                Contactar por WhatsApp
              </button>
              <a
                href="#contacto"
                class="inline-flex items-center justify-center rounded-full border border-brand-deep/15 bg-white px-6 py-3 text-sm font-semibold text-brand-deep transition duration-300 hover:-translate-y-0.5 hover:border-brand-sage/60"
              >
                Solicitar información
              </a>
            </div>

            <div class="mt-10 grid gap-4 sm:grid-cols-3">
              <div
                v-for="metric in metrics"
                :key="metric"
                class="rounded-3xl border border-brand-sage/15 bg-white/75 px-5 py-4 shadow-soft"
              >
                <p class="text-sm font-semibold leading-6 text-brand-forest">
                  {{ metric }}
                </p>
              </div>
            </div>
          </div>

          <div class="animate-float">
            <div class="rounded-[2rem] border border-white/60 bg-white/85 p-6 shadow-soft backdrop-blur">
              <div class="rounded-[1.5rem] bg-brand-deep p-8 text-white">
                <p class="text-sm font-semibold uppercase tracking-[0.24em] text-brand-sand">
                  Compromiso territorial
                </p>
                <p class="mt-6 text-2xl font-bold leading-snug">
                  Logística, talento humano y formación para procesos educativos y comunitarios.
                </p>
                <div class="mt-8 space-y-4 text-sm leading-7 text-white/85">
                  <p>Atención por WhatsApp directa para solicitudes y articulación operativa.</p>
                  <p>Diseño de apoyo flexible para jornadas, escuelas, preuniversitarios y procesos territoriales.</p>
                </div>
                <div class="mt-8 rounded-2xl border border-white/10 bg-white/10 p-5">
                  <p class="text-sm text-brand-sand">Contacto principal</p>
                  <p class="mt-2 text-lg font-semibold">+57 319 5175110</p>
                  <p class="text-sm text-white/80">rhgavive@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" class="px-6 py-20 lg:px-8">
        <div class="mx-auto max-w-7xl">
          <div class="max-w-3xl animate-rise">
            <p class="text-sm font-bold uppercase tracking-[0.26em] text-brand-forest">Servicios</p>
            <h2 class="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Soluciones logísticas y pedagógicas para proyectos con impacto social.
            </h2>
          </div>

          <div class="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <article
              v-for="service in services"
              :key="service.title"
              class="group rounded-[1.75rem] border border-brand-sage/15 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1"
            >
              <div class="mb-5 h-12 w-12 rounded-2xl bg-brand-sand/45" />
              <h3 class="text-xl font-bold text-brand-deep">{{ service.title }}</h3>
              <p class="mt-4 text-sm leading-7 text-brand-forest/90">
                {{ service.description }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="experiencia" class="px-6 py-20 lg:px-8">
        <div class="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div class="rounded-[2rem] bg-brand-forest p-8 text-white shadow-soft">
            <p class="text-sm font-bold uppercase tracking-[0.24em] text-brand-sand">Experiencia</p>
            <h2 class="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Trayectoria en procesos formativos y organizativos.
            </h2>
          </div>
          <div class="rounded-[2rem] border border-brand-sage/15 bg-white p-8 shadow-soft">
            <p class="text-lg leading-8 text-brand-forest/95">
              Contamos con experiencia en el acompañamiento a preuniversitarios populares,
              escuelas de formación para jóvenes y diversos procesos organizativos comunitarios.
            </p>
          </div>
        </div>
      </section>

      <section id="enfoque" class="px-6 py-20 lg:px-8">
        <div class="mx-auto max-w-5xl rounded-[2.25rem] border border-brand-sage/15 bg-white px-8 py-12 shadow-soft md:px-12">
          <p class="text-sm font-bold uppercase tracking-[0.24em] text-brand-forest">Enfoque</p>
          <h2 class="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Una práctica logística orientada a la transformación social.
          </h2>
          <p class="mt-6 text-lg leading-8 text-brand-forest/95">
            Trabajamos desde una perspectiva de educación popular, apostando por la
            democratización del conocimiento, la organización comunitaria y la transformación
            social.
          </p>
        </div>
      </section>

      <section id="contacto" class="px-6 pb-24 pt-20 lg:px-8">
        <div class="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div class="rounded-[2rem] bg-brand-deep p-8 text-white shadow-soft">
            <p class="text-sm font-bold uppercase tracking-[0.24em] text-brand-sand">Contacto</p>
            <h2 class="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Conversemos sobre su proceso o actividad.
            </h2>
            <div class="mt-8 space-y-4 text-base leading-7 text-white/85">
              <p><strong class="text-white">WhatsApp:</strong> +57 319 5175110</p>
              <p><strong class="text-white">Correo:</strong> rhgavive@gmail.com</p>
            </div>
            <button
              type="button"
              class="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-deep transition duration-300 hover:-translate-y-0.5"
              @click="openWhatsApp()"
            >
              Escribir ahora
            </button>
          </div>

          <form
            class="rounded-[2rem] border border-brand-sage/15 bg-white p-8 shadow-soft"
            @submit.prevent="handleSubmit"
          >
            <h3 class="text-2xl font-bold text-brand-deep">Solicitar información</h3>
            <p class="mt-3 text-sm leading-6 text-brand-forest/85">
              Este formulario redirige a WhatsApp sin backend.
            </p>

            <div class="mt-8 grid gap-5">
              <label class="grid gap-2 text-sm font-medium text-brand-forest">
                Nombre
                <input
                  name="name"
                  type="text"
                  required
                  class="rounded-2xl border border-brand-sage/25 bg-brand-mist px-4 py-3 outline-none transition focus:border-brand-forest"
                  placeholder="Tu nombre"
                />
              </label>

              <label class="grid gap-2 text-sm font-medium text-brand-forest">
                Correo
                <input
                  name="email"
                  type="email"
                  required
                  class="rounded-2xl border border-brand-sage/25 bg-brand-mist px-4 py-3 outline-none transition focus:border-brand-forest"
                  placeholder="tunombre@correo.com"
                />
              </label>

              <label class="grid gap-2 text-sm font-medium text-brand-forest">
                Mensaje
                <textarea
                  name="message"
                  rows="5"
                  required
                  class="rounded-2xl border border-brand-sage/25 bg-brand-mist px-4 py-3 outline-none transition focus:border-brand-forest"
                  placeholder="Cuéntanos qué tipo de apoyo necesitas"
                />
              </label>
            </div>

            <button
              type="submit"
              class="mt-8 inline-flex items-center justify-center rounded-full bg-brand-forest px-6 py-3 text-sm font-semibold text-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-brand-deep"
            >
              Enviar por WhatsApp
            </button>
          </form>
        </div>
      </section>
    </main>

    <a
      :href="buildWhatsAppUrl(defaultMessage)"
      target="_blank"
      rel="noopener noreferrer"
      class="fixed bottom-5 right-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-xl font-black text-white shadow-soft transition duration-300 hover:-translate-y-1"
      aria-label="Abrir WhatsApp"
    >
      W
    </a>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
}

.animate-rise {
  animation: rise 0.85s ease-out both;
}

.animate-float {
  animation: floatIn 1s ease-out both;
}

@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(28px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes floatIn {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.98);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
