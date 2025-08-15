<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';
	import { pageTitle } from '$lib/stores/pageTitle';
</script>

<svelte:head>
	<link rel="icon" href="/img/arqui-epoxy.png" />
	<title>Arqui-Epoxy Guatemala</title>
</svelte:head>

<div class="flex flex-col min-h-screen">
	<header class="relative bg-gray-800 text-white h-[400px] md:h-[500px] overflow-hidden">
		<!-- Imagen de fondo -->
		<div
			class="absolute inset-0 bg-center bg-no-repeat"
			style="background-image: url('/img/portadav3.jpg'); background-size: 100% 100%;"
		></div>

		<!-- Overlay semi-transparente -->
		<div class="absolute inset-0 bg-black/50"></div>

		<!-- Navbar -->
		<div
			class="navbar bg-base-100/80 backdrop-blur-sm shadow-sm relative z-10 mx-auto max-w-7xl mt-4 rounded-box"
		>
			<div class="flex-1">
				<a href="/" class="btn btn-ghost">
					<img src="/img/arqui-epoxy.png" alt="Arqui-Epoxy Guatemala" class="h-16 w-auto" />
				</a>
			</div>

			<div class="flex-none">
				<ul class="menu menu-horizontal px-6">
					<li><a href="/">Inicio</a></li>
					<li><a href="/services">Servicios</a></li>
					<li><a href="/projects">Proyectos</a></li>
					<li><a href="/about">Nosotros</a></li>
					<li><a href="https://wa.me/50255272948">WhatsApp</a></li>
				</ul>
			</div>
		</div>

		<!-- Contenido del header -->
		<div class="relative z-10 flex items-center justify-center h-full text-center px-4">
			<div class="max-w-2xl">
				<h1 class="text-4xl md:text-5xl font-bold mb-4">{$pageTitle}</h1>
			</div>
		</div>
	</header>

	<!-- Aquí el contenido de la página -->
	<main>
		<slot />
	</main>

	<footer class="bg-[#a0b7d0] text-black p-10">
		<div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
			<!-- Columna 1: Imagen + texto -->
			<aside class="flex flex-col text-center items-center sm:items-start">
				<img src="/img/arqui-epoxy.png" alt="Arqui-Epoxy Guatemala" class="h-36 w-auto mb-4" />
				<p class="text-center">Arqui-Epoxy Guatemala</p>
				<p class="text-center">Durabilidad y estilo en cada espacio</p>
			</aside>

			<!-- Columna 2: Información de contacto -->
			<nav class="flex flex-col gap-6 items-start max-w-sm">
				<h5 class="footer-title mb-2 font-semibold text-lg text-black">Información de contacto</h5>

				<a
					href="https://wa.me/50255272948"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-2 text-green-600 hover:text-green-800"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							d="M20.52 3.48A11.88 11.88 0 0012 0C5.37 0 0 5.37 0 12c0 2.1.55 4.13 1.6 5.9L0 24l6.3-1.6a11.94 11.94 0 005.7 1.46c6.63 0 12-5.37 12-12 0-3.2-1.3-6.18-3.48-8.38zM12 21c-1.5 0-2.97-.4-4.27-1.14l-.3-.18-3.73.94.99-3.65-.19-.3A8.94 8.94 0 013 12c0-5 4.03-9 9-9s9 4.03 9 9-4.03 9-9 9zm5.03-6.58c-.27-.14-1.6-.78-1.85-.87-.25-.1-.44-.14-.62.14-.18.27-.7.87-.85 1.05-.15.18-.3.2-.56.07-.27-.14-1.15-.42-2.18-1.36-.8-.72-1.34-1.6-1.5-1.86-.15-.27-.02-.41.12-.55.13-.13.27-.3.4-.45.13-.15.18-.27.27-.45.1-.18.05-.34-.02-.48-.07-.14-.62-1.5-.85-2.06-.22-.54-.45-.46-.62-.46-.16 0-.34-.02-.52-.02s-.48.07-.73.34c-.25.27-.96.94-.96 2.3s.99 2.68 1.13 2.87c.15.18 1.95 2.97 4.73 4.16.66.28 1.18.45 1.58.57.66.19 1.26.16 1.74.1.53-.06 1.6-.65 1.82-1.28.23-.63.23-1.18.16-1.28-.06-.1-.25-.16-.52-.3z"
						/>
					</svg>
					WhatsApp
				</a>

				<a href="tel:+50255272948" class="flex items-center gap-2 text-black hover:text-green-700">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24c1.12.37 2.33.57 3.54.57.55 0 1 .45 1 1V21c0 .55-.45 1-1 1C10.07 22 2 13.93 2 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.21.2 2.42.57 3.54.11.36.03.76-.24 1.05l-2.2 2.2z"
						/>
					</svg>
					(502) 5527 2948
				</a>

				<a
					href="https://www.facebook.com/share/1AzZebobfV/"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-2 text-blue-600 hover:text-blue-800"
				>
					<svg
						xmlns="https://www.facebook.com/share/1AzZebobfV/"
						class="h-6 w-6"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							d="M22.675 0h-21.35C.597 0 0 .6 0 1.333v21.334C0 23.4.597 24 1.325 24H12v-9.294H9.293v-3.622H12V8.413c0-2.675 1.644-4.138 4.044-4.138 1.151 0 2.144.086 2.432.124v2.821h-1.671c-1.311 0-1.565.622-1.565 1.536v2.014h3.131l-.408 3.622h-2.723V24h5.338c.73 0 1.324-.6 1.324-1.333V1.333C24 .6 23.404 0 22.675 0z"
						/>
					</svg>
					Arqui-Epoxy Guatemala
				</a>

				<a
					href="https://maps.app.goo.gl/5KgGfdPpc43HjZp39"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-2 text-black hover:text-gray-300"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M12 11c1.656 0 3-1.344 3-3s-1.344-3-3-3-3 1.344-3 3 1.344 3 3 3z"
						/>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M12 22s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z"
						/>
					</svg>
					5Av. 3-31 zona 4, Cobán Alta Verapaz
				</a>
			</nav>

			<!-- Columna 3: Vacía y más pequeña -->
			<div class="hidden sm:block sm:col-span-1 sm:w-24"></div>
		</div>
	</footer>
</div>
