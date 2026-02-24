<script lang="ts">
	import { pageTitle } from '$lib/stores/pageTitle';
	import { onDestroy } from 'svelte';

	let title = 'ARQUIEPOXY';
	const unsub = pageTitle.subscribe((v) => (title = v || 'ARQUIEPOXY'));
	onDestroy(unsub);

	const WHATSAPP_LINK =
		'https://wa.me/50255272948?text=Hola,%20necesito%20una%20cotizaci%C3%B3n%20para%20resina%20ep%C3%B3xica.';
</script>

<svelte:head>
	<title>{title} | ArquiEpoxy Guatemala</title>
	<meta
		name="description"
		content="Aplicación profesional de resina epóxica grado quirúrgico, industrial y deportivo en Guatemala y Centroamérica."
	/>
	<meta name="theme-color" content="#1b68a9" />

	<!-- Open Graph básico -->
	<meta property="og:site_name" content="ArquiEpoxy Guatemala" />
	<meta property="og:title" content="{title} | ArquiEpoxy Guatemala" />
	<meta
		property="og:description"
		content="Pisos epóxicos de alto desempeño para hospitales, clínicas, bodegas y proyectos institucionales."
	/>
	<meta property="og:type" content="website" />
</svelte:head>

<div data-theme="arquiepoxy" class="min-h-screen">
	<!-- NAVBAR / HEADER -->
	<div class="sticky top-0 z-50 border-b border-base-300/60 bg-base-100/70 backdrop-blur-xl">
		<div class="section">
			<div class="navbar px-0">
				<div class="navbar-start">
					<!-- Mobile menu button -->
					<label for="app-drawer" class="btn btn-ghost lg:hidden" aria-label="Abrir menú">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
							stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</label>

					<a href="/" class="flex items-center gap-3">
						<img src="/img/arqui-epoxy.png" alt="ArquiEpoxy Guatemala" class="h-10 w-auto" />
						<div class="hidden sm:block leading-tight">
							<div class="font-extrabold tracking-tight">ArquiEpoxy</div>
							<div class="text-xs text-base-content/70">Guatemala • Centroamérica</div>
						</div>
					</a>
				</div>

				<div class="navbar-center hidden lg:flex">
					<ul class="menu menu-horizontal gap-1 px-1">
						<li><a href="/" class="font-semibold">Inicio</a></li>
						<li><a href="/services" class="font-semibold">Servicios</a></li>
						<li><a href="/projects" class="font-semibold">Proyectos</a></li>
						<li><a href="/about" class="font-semibold">Nosotros</a></li>
					</ul>
				</div>

				<div class="navbar-end gap-2">
					<a
						href="/projects"
						class="btn btn-ghost hidden md:inline-flex"
					>
						Ver portafolio
					</a>

					<a
						class="btn btn-primary"
						href={WHATSAPP_LINK}
						target="_blank"
						rel="noopener noreferrer"
					>
						Cotizar ahora
					</a>
				</div>
			</div>
		</div>
	</div>

	<!-- DRAWER (mobile) -->
	<div class="drawer lg:hidden">
		<input id="app-drawer" type="checkbox" class="drawer-toggle" />
		<div class="drawer-content">
			<!-- Page content -->
			<main class="section section-pad">
				<slot />
			</main>
		</div>
		<div class="drawer-side">
			<label for="app-drawer" class="drawer-overlay"></label>
			<div class="w-80 min-h-full bg-base-100 border-r border-base-300/60">
				<div class="p-4">
					<div class="flex items-center gap-3">
						<img src="/img/arqui-epoxy.png" alt="ArquiEpoxy Guatemala" class="h-10 w-auto" />
						<div class="leading-tight">
							<div class="font-extrabold tracking-tight">ArquiEpoxy</div>
							<div class="text-xs text-base-content/70">Calidad médico-industrial</div>
						</div>
					</div>

					<div class="soft-divider my-4"></div>

					<ul class="menu p-0">
						<li><a href="/">Inicio</a></li>
						<li><a href="/services">Servicios</a></li>
						<li><a href="/projects">Proyectos</a></li>
						<li><a href="/about">Nosotros</a></li>
					</ul>

					<div class="soft-divider my-4"></div>

					<a
						class="btn btn-primary w-full"
						href={WHATSAPP_LINK}
						target="_blank"
						rel="noopener noreferrer"
					>
						Cotizar por WhatsApp
					</a>

					<p class="mt-3 text-xs text-base-content/70">
						Resina epóxica grado quirúrgico • industrial • deportivo
					</p>
				</div>
			</div>
		</div>
	</div>

	<!-- DESKTOP CONTENT WRAP -->
	<div class="hidden lg:block">
		<main class="section section-pad">
			<slot />
		</main>
	</div>

	<!-- FOOTER -->
	<footer class="border-t border-base-300/60 bg-base-100/60 backdrop-blur-xl">
		<div class="section py-10">
			<div class="grid grid-cols-1 gap-10 md:grid-cols-3">
				<div>
					<div class="flex items-center gap-3">
						<img src="/img/arqui-epoxy.png" alt="ArquiEpoxy Guatemala" class="h-10 w-auto" />
						<div class="leading-tight">
							<div class="font-extrabold tracking-tight">ArquiEpoxy Guatemala</div>
							<div class="text-xs text-base-content/70">Pisos epóxicos de alto desempeño</div>
						</div>
					</div>

					<p class="mt-4 text-sm text-base-content/80">
						Aplicación profesional de resina epóxica grado quirúrgico, industrial y deportivo para hospitales,
						clínicas, bodegas y proyectos institucionales en Guatemala y Centroamérica.
					</p>

					<div class="mt-4">
						<a
							class="btn btn-primary btn-sm"
							href={WHATSAPP_LINK}
							target="_blank"
							rel="noopener noreferrer"
						>
							Cotizar ahora
						</a>
					</div>
				</div>

				<div>
					<h3 class="font-bold text-base-content">Navegación</h3>
					<ul class="mt-3 space-y-2 text-sm text-base-content/80">
						<li><a class="link link-hover" href="/">Inicio</a></li>
						<li><a class="link link-hover" href="/services">Servicios</a></li>
						<li><a class="link link-hover" href="/projects">Proyectos</a></li>
						<li><a class="link link-hover" href="/about">Nosotros</a></li>
					</ul>
				</div>

				<div>
					<h3 class="font-bold text-base-content">Enfoque</h3>
					<ul class="mt-3 space-y-2 text-sm text-base-content/80">
						<li>Grado quirúrgico (clínicas y hospitales)</li>
						<li>Grado industrial (bodegas y alto tránsito)</li>
						<li>Grado deportivo (canchas y superficies técnicas)</li>
						<li>Proyectos institucionales y corporativos</li>
					</ul>

					<div class="mt-4 text-xs text-base-content/60">
						© {new Date().getFullYear()} ArquiEpoxy Guatemala. Todos los derechos reservados.
					</div>
				</div>
			</div>
		</div>
	</footer>

	<!-- WhatsApp Floating Button -->
	<a
		href={WHATSAPP_LINK}
		target="_blank"
		rel="noopener noreferrer"
		class="fixed bottom-5 right-5 z-50 btn btn-circle btn-primary shadow-lg"
		aria-label="Cotizar por WhatsApp"
	>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="h-5 w-5" fill="currentColor">
			<path
				d="M19.11 17.53c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.64.14-.19.28-.73.91-.9 1.1-.17.19-.33.21-.61.07-.28-.14-1.18-.43-2.24-1.38-.83-.74-1.39-1.65-1.56-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.33.42-.49.14-.16.19-.28.28-.47.1-.19.05-.35-.02-.49-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.49.07-.75.35-.26.28-.98.96-.98 2.35 0 1.38 1.01 2.72 1.15 2.91.14.19 1.99 3.05 4.83 4.28.68.29 1.21.47 1.62.6.68.22 1.3.19 1.79.12.55-.08 1.66-.68 1.9-1.33.23-.65.23-1.21.16-1.33-.07-.12-.26-.19-.54-.33z"
			/>
			<path
				d="M16.02 2.67c-7.34 0-13.31 5.97-13.31 13.31 0 2.35.62 4.64 1.8 6.65L2.7 29.33l6.87-1.8c1.93 1.06 4.1 1.62 6.45 1.62 7.34 0 13.31-5.97 13.31-13.31S23.36 2.67 16.02 2.67zm0 23.98c-2.1 0-4.16-.56-5.97-1.62l-.43-.25-4.07 1.07 1.09-3.97-.28-.41a11.77 11.77 0 0 1-1.85-6.36c0-6.48 5.27-11.76 11.76-11.76S27.78 9.63 27.78 16.1 22.5 27.65 16.02 27.65z"
			/>
		</svg>
	</a>
</div>
