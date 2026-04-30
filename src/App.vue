<script setup>
import { onBeforeUnmount, onMounted } from 'vue'

const contactBaseUrl = 'https://wa.me/573195175110'
const defaultMessage = [
  'Hola, equipo de Operador Logístico Policarpa.',
  '',
  'Me interesa conocer más sobre sus servicios y la forma en que acompañan procesos educativos y comunitarios.',
  '',
  'Quedo atento(a) a su orientación.'
].join('\n')

const services = [
  {
    title: 'Logística para procesos educativos',
    icon:
      'M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 18.5v-13ZM7 7a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H7Zm0 4a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H7Zm0 4a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H7Z',
    description:
      'Suministro de materiales, organización de actividades pedagógicas y soporte operativo para jornadas formativas.'
  },
  {
    title: 'Acompañamiento comunitario',
    icon:
      'M12 3.25a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5ZM5.5 19A4.5 4.5 0 0 1 10 14.5h4A4.5 4.5 0 0 1 18.5 19a1 1 0 1 1-2 0 2.5 2.5 0 0 0-2.5-2.5h-4A2.5 2.5 0 0 0 7.5 19a1 1 0 1 1-2 0Z',
    description:
      'Procesos territoriales, fortalecimiento organizativo y articulación social con enfoque participativo.'
  },
  {
    title: 'Talento humano',
    icon:
      'M12 2.75a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5ZM6.25 8.5a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5Zm11.5 0a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5ZM12 11.75A4.25 4.25 0 0 0 7.75 16v1.25a1 1 0 1 0 2 0V16A2.25 2.25 0 0 1 12 13.75 2.25 2.25 0 0 1 14.25 16v1.25a1 1 0 1 0 2 0V16A4.25 4.25 0 0 0 12 11.75Z',
    description:
      'Facilitadores, apoyo operativo y equipos de trabajo comprometidos con objetivos pedagógicos y comunitarios.'
  },
  {
    title: 'Formación en educación popular',
    icon:
      'M12 4.25 5 7.5l7 3.25 7-3.25-7-3.25ZM7.25 10.88V14c0 .78.43 1.5 1.12 1.86l2.88 1.5c.47.25 1.03.25 1.5 0l2.88-1.5A2.1 2.1 0 0 0 16.75 14v-3.12L12.42 12.9a1 1 0 0 1-.84 0L7.25 10.88Zm-3 0V14A5.1 5.1 0 0 0 7 18.52l2.88 1.5a4.6 4.6 0 0 0 4.24 0l2.88-1.5A5.1 5.1 0 0 0 19.75 14v-3.12l1.83-.85a1 1 0 0 0 0-1.8l-9.16-4.25a1 1 0 0 0-.84 0L2.42 8.23a1 1 0 0 0 0 1.8l1.83.85Z',
    description:
      'Acompañamiento a preuniversitarios, escuelas juveniles y espacios de aprendizaje para la transformación social.'
  }
]

const metrics = [
  'Procesos educativos con logística integral',
  'Experiencia con juventudes y comunidades',
  'Enfoque social y territorial'
]

let observer

function buildContactUrl(message) {
  return `${contactBaseUrl}?text=${encodeURIComponent(message)}`
}

function openContact(message = defaultMessage) {
  window.open(buildContactUrl(message), '_blank', 'noopener,noreferrer')
}

function handleSubmit(event) {
  const formData = new FormData(event.target)
  const name = formData.get('name')?.toString().trim() || ''
  const email = formData.get('email')?.toString().trim() || ''
  const message = formData.get('message')?.toString().trim() || ''

  const formattedMessage = [
    'Hola, equipo de Operador Logístico Policarpa.',
    '',
    'Deseo solicitar información sobre sus servicios.',
    '',
    `Nombre de contacto: ${name}`,
    `Correo electrónico: ${email}`,
    '',
    'Detalle de la solicitud:',
    message,
    '',
    'Agradezco su respuesta.'
  ].join('\n')

  openContact(formattedMessage)
  event.target.reset()
}

onMounted(() => {
  const elements = document.querySelectorAll('.reveal-on-scroll')
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer?.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.18,
      rootMargin: '0px 0px -40px 0px'
    }
  )

  elements.forEach((element) => observer.observe(element))
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
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
          <div class="animate-rise reveal-on-scroll is-visible">
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
                @click="openContact()"
              >
                Iniciar conversación
              </button>
              <a
                href="#contacto"
                class="inline-flex items-center justify-center rounded-full border border-brand-deep/15 bg-white px-6 py-3 text-sm font-semibold text-brand-deep transition duration-300 hover:-translate-y-0.5 hover:border-brand-sage/60"
              >
                Solicitar propuesta
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

          <div class="animate-float reveal-on-scroll is-visible">
            <div class="rounded-[2rem] border border-white/60 bg-white/85 p-6 shadow-soft backdrop-blur">
              <div class="rounded-[1.5rem] bg-brand-deep p-8 text-white">
                <p class="text-sm font-semibold uppercase tracking-[0.24em] text-brand-sand">
                  Compromiso territorial
                </p>
                <p class="mt-6 text-2xl font-bold leading-snug">
                  Logística, talento humano y formación para procesos educativos y comunitarios.
                </p>
                <div class="mt-8 space-y-4 text-sm leading-7 text-white/85">
                  <p>Acompañamiento cercano para jornadas, escuelas, preuniversitarios y procesos territoriales.</p>
                  <p>Capacidad de articulación operativa con sensibilidad pedagógica y comunitaria.</p>
                </div>
                <div class="mt-8 rounded-2xl border border-white/10 bg-white/10 p-5">
                  <p class="text-sm text-brand-sand">Canal principal</p>
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
          <div class="max-w-3xl reveal-on-scroll">
            <p class="text-sm font-bold uppercase tracking-[0.26em] text-brand-forest">Servicios</p>
            <h2 class="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Soluciones logísticas y pedagógicas para proyectos con impacto social.
            </h2>
          </div>

          <div class="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <article
              v-for="service in services"
              :key="service.title"
              class="group reveal-on-scroll rounded-[1.75rem] border border-brand-sage/15 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1"
            >
              <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-sand/45 text-brand-deep">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="h-6 w-6"
                  aria-hidden="true"
                >
                  <path :d="service.icon" />
                </svg>
              </div>
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
          <div class="reveal-on-scroll rounded-[2rem] bg-brand-forest p-8 text-white shadow-soft">
            <p class="text-sm font-bold uppercase tracking-[0.24em] text-brand-sand">Experiencia</p>
            <h2 class="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Trayectoria en procesos formativos y organizativos.
            </h2>
          </div>
          <div class="reveal-on-scroll rounded-[2rem] border border-brand-sage/15 bg-white p-8 shadow-soft">
            <p class="text-lg leading-8 text-brand-forest/95">
              Contamos con experiencia en el acompañamiento a preuniversitarios populares,
              escuelas de formación para jóvenes y diversos procesos organizativos comunitarios.
            </p>
          </div>
        </div>
      </section>

      <section id="enfoque" class="px-6 py-20 lg:px-8">
        <div class="mx-auto max-w-5xl reveal-on-scroll rounded-[2.25rem] border border-brand-sage/15 bg-white px-8 py-12 shadow-soft md:px-12">
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
          <div class="reveal-on-scroll rounded-[2rem] bg-brand-deep p-8 text-white shadow-soft">
            <p class="text-sm font-bold uppercase tracking-[0.24em] text-brand-sand">Contacto</p>
            <h2 class="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Conversemos sobre su proceso o actividad.
            </h2>
            <div class="mt-8 space-y-4 text-base leading-7 text-white/85">
              <p><strong class="text-white">Línea directa:</strong> +57 319 5175110</p>
              <p><strong class="text-white">Correo:</strong> rhgavive@gmail.com</p>
            </div>
            <button
              type="button"
              class="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-deep transition duration-300 hover:-translate-y-0.5"
              @click="openContact()"
            >
              Abrir conversación
            </button>
          </div>

          <form
            class="reveal-on-scroll rounded-[2rem] border border-brand-sage/15 bg-white p-8 shadow-soft"
            @submit.prevent="handleSubmit"
          >
            <h3 class="text-2xl font-bold text-brand-deep">Solicitar información</h3>
            <p class="mt-3 text-sm leading-6 text-brand-forest/85">
              Cuéntanos lo que necesitas y te llevaremos directamente al canal de contacto.
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
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>
    </main>

    <a
      :href="buildContactUrl(defaultMessage)"
      target="_blank"
      rel="noopener noreferrer"
      class="fixed bottom-5 right-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-xl font-black text-white shadow-soft transition duration-300 hover:-translate-y-1"
      aria-label="Abrir canal de contacto"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="h-7 w-7"
        aria-hidden="true"
      >
        <path
          d="M12 2a10 10 0 0 0-8.66 15l-1.17 4.27 4.39-1.15A10 10 0 1 0 12 2Zm5.42 14.23c-.23.64-1.33 1.2-1.84 1.28-.47.07-1.06.1-1.72-.11a15.2 15.2 0 0 1-5.2-3.23A11.73 11.73 0 0 1 6.1 9.78c-.2-.58-.2-1.07-.02-1.44.18-.37.48-.6.65-.69.17-.09.37-.11.5-.11h.36c.11 0 .27-.04.42.3.16.39.56 1.36.61 1.46.05.1.08.23.02.37-.07.14-.1.23-.2.35-.1.11-.2.25-.29.33-.1.09-.2.19-.09.38.12.18.52.85 1.12 1.37.78.7 1.44.92 1.64 1.02.2.1.31.08.42-.05.12-.14.5-.58.64-.78.14-.2.27-.16.46-.1.19.07 1.2.57 1.4.67.2.1.34.15.39.24.05.1.05.56-.18 1.2Z"
        />
      </svg>
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

.reveal-on-scroll {
  opacity: 0;
  transform: translateY(36px);
  transition:
    opacity 0.7s ease,
    transform 0.7s ease;
}

.reveal-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
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
