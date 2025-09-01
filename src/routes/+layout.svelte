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
	<header class="relative bg-gray-800 text-white h-[400px] md:h-[500px] overflow-hidden">
		<!-- Imagen de fondo -->
		<div
			class="absolute inset-0 bg-center bg-no-repeat"
			style="background-image: url('/img/portadav3.jpg'); background-size: cover;"
		></div>

		<!-- Overlay semi-transparente -->
		<div class="absolute inset-0 bg-black/50"></div>

		<!-- Navbar -->
		<div
			class="navbar bg-base-100/80 backdrop-blur-sm shadow-sm relative z-50 mx-auto max-w-7xl mt-4 rounded-box"
		>
			<!-- Logo -->
			<div class="flex-1">
				<a href="/" class="btn btn-ghost px-2">
					<img src="/img/arqui-epoxy.png" alt="Arqui-Epoxy Guatemala" class="h-16 w-auto" />
				</a>
			</div>

			<!-- Menú único para móvil y desktop -->
			<div class="flex-none">
				<div class="flex items-center space-x-1 md:space-x-4 px-2 md:px-4">
					<!-- Enlaces ajustables -->
					<a href="/" class="btn btn-ghost btn-sm md:btn-md px-2 md:px-4 text-sm md:text-base"
						>Inicio</a
					>
					<a
						href="/services"
						class="btn btn-ghost btn-sm md:btn-md px-2 md:px-4 text-sm md:text-base">Servicios</a
					>
					<a
						href="/projects"
						class="btn btn-ghost btn-sm md:btn-md px-2 md:px-4 text-sm md:text-base">Proyectos</a
					>
					<a href="/about" class="btn btn-ghost btn-sm md:btn-md px-2 md:px-4 text-sm md:text-base"
						>Nosotros</a
					>

					<!-- WhatsApp (siempre visible) -->
					<a
						href="https://wa.me/50255272948?text=¡Hola!%20Quiero%20chatear%20con%20alguien."
						target="_blank"
						rel="noopener"
						class="btn btn-sm md:btn-md bg-green-600 hover:bg-green-700 text-white md:ml-2 flex justify-center items-center px-3"
					>
						<span class="hidden md:inline">WhatsApp</span>
						<span class="md:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path
									d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
								/>
							</svg>
						</span>
					</a>
				</div>
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

				<a
					href="https://wa.me/50255272948?text=¡Hola!%20Quiero%20chatear%20con%20alguien."
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
