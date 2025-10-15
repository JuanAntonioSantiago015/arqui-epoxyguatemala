<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';
	import { pageTitle } from '$lib/stores/pageTitle';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';

	injectAnalytics();
</script>

<svelte:head>
	<link rel="icon" href="/img/arqui-epoxy.png" />
	<title>Arqui-Epoxy Guatemala</title>
	<meta
		name="description"
		content="Especialistas en pisos epóxicos, resinas y recubrimientos industriales en Guatemala. Calidad, durabilidad y diseño para tus proyectos."
	/>
	<meta
		name="keywords"
		content="epóxico Guatemala, pisos epóxicos, resinas, recubrimientos industriales, Arqui-Epoxy"
	/>
</svelte:head>

<div class="flex flex-col min-h-screen">
<header class="relative bg-gray-800 text-white h-[460px] md:h-[720px] overflow-hidden">
  <!-- Imagen de fondo (más abajo y más visible) -->
  <div
    class="absolute inset-0 bg-no-repeat"
    style="
      background-image: url('/img/arqui-epoxy-portada.jpg'); 
      background-size: cover; 
      background-position: center 30%;
    "
  ></div>

  <!-- Oscurecedor -->
  <div class="absolute inset-0 bg-black/50"></div>

  <!-- Navbar (botones más grandes) -->
  <div
    class="navbar bg-base-100/80 backdrop-blur-sm shadow-sm relative z-50 mx-auto max-w-7xl mt-4 rounded-box"
  >
    <!-- Logo -->
    <div class="flex-1">
      <a href="/" class="btn btn-ghost px-2">
        <img src="/img/arqui-epoxy.png" alt="Arqui-Epoxy Guatemala" class="h-16 w-auto" />
      </a>
    </div>

    <!-- Menú -->
    <div class="flex-none">
      <div class="flex items-center space-x-1 md:space-x-4 px-2 md:px-4">
        <a href="/" class="btn btn-ghost px-4 md:px-5 text-base md:text-lg">Inicio</a>
        <a href="/services" class="btn btn-ghost px-4 md:px-5 text-base md:text-lg">Servicios</a>
        <a href="/projects" class="btn btn-ghost px-4 md:px-5 text-base md:text-lg">Proyectos</a>
        <a href="/about" class="btn btn-ghost px-4 md:px-5 text-base md:text-lg">Nosotros</a>

        <!-- WhatsApp más grande -->
        <a
          href="https://wa.me/50255272948?text=¡Hola!%20Quiero%20chatear%20con%20alguien."
          target="_blank"
          rel="noopener"
          class="btn px-4 md:px-6 text-base md:text-lg bg-green-600 hover:bg-green-700 text-white md:ml-2"
        >
          WhatsApp
        </a>
      </div>
    </div>
  </div>

  <!-- Contenido del header (TEXTO REMOVIDO) -->
  <div class="relative z-10 flex items-center justify-center h-full text-center px-4">
    <!-- (Intencionalmente vacío para quitar el título) -->
  </div>
</header>


	<!-- Aquí el contenido de la página -->
	<main>
		<slot />
	</main>

	<div class="px-8 py-10">
		<h1 class="text-3xl font-bold text-[#1b68a9] mb-8 text-center py-16">¡Elige a los Expertos!</h1>
	</div>

	<footer class="bg-[#a0b7d0] text-black p-10">
		<div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
			<!-- Columna 1: Imagen + texto -->
			<aside class="flex flex-col items-center text-center font-semibold">
				<img src="/img/arqui-epoxy.png" alt="Arqui-Epoxy Guatemala" class="h-36 w-auto mb-4" />
				<p>Arqui-Epoxy Guatemala</p>
				<p>Durabilidad y Estilo En Cada Espacio</p>
			</aside>

			<!-- Columna 2: Información de contacto -->
<nav class="flex flex-col gap-6 items-start max-w-sm">
	<h5 class="footer-title mb-2 font-semibold text-lg text-black">Información de contacto</h5>

	<!-- WhatsApp -->
	<a
		href="https://wa.me/50255272948?text=¡Hola!%20Quiero%20chatear%20con%20alguien."
		target="_blank"
		rel="noopener noreferrer"
		class="flex items-center gap-2 text-green-600 hover:text-green-800"
	>
		<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
			<path
				d="M20.52 3.48A11.88 11.88 0 0012 0C5.37 0 0 5.37 0 12c0 2.1.55 4.13 1.6 5.9L0 24l6.3-1.6a11.94 11.94 0 005.7 1.46c6.63 0 12-5.37 12-12 0-3.2-1.3-6.18-3.48-8.38zM12 21c-1.5 0-2.97-.4-4.27-1.14l-.3-.18-3.73.94.99-3.65-.19-.3A8.94 8.94 0 013 12c0-5 4.03-9 9-9s9 4.03 9 9-4.03 9-9 9zm5.03-6.58c-.27-.14-1.6-.78-1.85-.87-.25-.1-.44-.14-.62.14-.18.27-.7.87-.85 1.05-.15.18-.3.2-.56.07-.27-.14-1.15-.42-2.18-1.36-.8-.72-1.34-1.6-1.5-1.86-.15-.27-.02-.41.12-.55.13-.13.27-.3.4-.45.13-.15.18-.27.27-.45.1-.18.05-.34-.02-.48-.07-.14-.62-1.5-.85-2.06-.22-.54-.45-.46-.62-.46-.16 0-.34-.02-.52-.02s-.48.07-.73.34c-.25.27-.96.94-.96 2.3s.99 2.68 1.13 2.87c.15.18 1.95 2.97 4.73 4.16.66.28 1.18.45 1.58.57.66.19 1.26.16 1.74.1.53-.06 1.6-.65 1.82-1.28.23-.63.23-1.18.16-1.28-.06-.1-.25-.16-.52-.3z"
			/>
		</svg>
		WhatsApp
	</a>

	<!-- Teléfono -->
	<a href="tel:+50255272948" class="flex items-center gap-2 text-black hover:text-green-700">
		<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
			<path
				d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24c1.12.37 2.33.57 3.54.57.55 0 1 .45 1 1V21c0 .55-.45 1-1 1C10.07 22 2 13.93 2 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.21.2 2.42.57 3.54.11.36.03.76-.24 1.05l-2.2 2.2z"
			/>
		</svg>
		(502) 5527 2948
	</a>

	<!-- Facebook -->
	<a
		href="https://www.facebook.com/share/1AzZebobfV/"
		target="_blank"
		rel="noopener noreferrer"
		class="flex items-center gap-2 text-blue-600 hover:text-blue-800"
	>
		<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
			<path
				d="M22.675 0h-21.35C.597 0 0 .6 0 1.333v21.334C0 23.4.597 24 1.325 24H12v-9.294H9.293v-3.622H12V8.413c0-2.675 1.644-4.138 4.044-4.138 1.151 0 2.144.086 2.432.124v2.821h-1.671c-1.311 0-1.565.622-1.565 1.536v2.014h3.131l-.408 3.622h-2.723V24h5.338c.73 0 1.324-.6 1.324-1.333V1.333C24 .6 23.404 0 22.675 0z"
			/>
		</svg>
		Arqui-Epoxy Guatemala
	</a>

	<!-- Instagram -->
	<a
		href="https://www.instagram.com/arquiepoxygt"
		target="_blank"
		rel="noopener noreferrer"
		class="flex items-center gap-2 text-pink-600 hover:text-pink-700"
	>
		<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-6 w-6" viewBox="0 0 24 24">
			<path
				d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.507 5.507 0 0 0 12 7.5zm0 9A3.5 3.5 0 1 1 15.5 13 3.504 3.504 0 0 1 12 16.5zM18 6.5a1 1 0 1 0 1 1 1 1 0 0 0-1-1z"
			/>
		</svg>
		@arquiepoxygt
	</a>

	<!-- TikTok -->
	<a
		href="https://www.tiktok.com/@arquiepoxy.guatem"
		target="_blank"
		rel="noopener noreferrer"
		class="flex items-center gap-2 text-gray-800 hover:text-black"
	>
		<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-6 w-6" viewBox="0 0 24 24">
			<path
				d="M12 2a5.49 5.49 0 0 0 5.5 5.5 5.5 5.5 0 0 0 2.5-.6v3.2a8.74 8.74 0 0 1-5-1.5v7.9a6.5 6.5 0 1 1-6.5-6.5 6.6 6.6 0 0 1 1 .1v3a3.5 3.5 0 1 0 2.5 3.4V2h5z"
			/>
		</svg>
		@arquiepoxy.guatem
	</a>

	<!-- Dirección -->
	<a
		href="https://maps.app.goo.gl/5KgGfdPpc43HjZp39"
		target="_blank"
		rel="noopener noreferrer"
		class="flex items-center gap-2 text-black hover:text-gray-300"
	>
		<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" d="M12 11c1.656 0 3-1.344 3-3s-1.344-3-3-3-3 1.344-3 3 1.344 3 3 3z" />
			<path stroke-linecap="round" stroke-linejoin="round" d="M12 22s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z" />
		</svg>
		5Av. 3-31 zona 4, Cobán Alta Verapaz
	</a>
</nav>


			<!-- Columna 3: Vacía y más pequeña -->
			<div class="hidden sm:block sm:col-span-1 sm:w-24"></div>
		</div>
	</footer>
</div>
