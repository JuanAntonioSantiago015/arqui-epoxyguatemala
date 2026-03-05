<script lang="ts">
	import { pageTitle } from '$lib/stores/pageTitle';

	pageTitle.set('Limpieza y Estilo Para Cada Espacio');

	const WHATSAPP_LINK =
		'https://wa.me/50255272948?text=Hola,%20necesito%20una%20cotizaci%C3%B3n%20para%20resina%20ep%C3%B3xica.';

	// Nota: este archivo tiene caracteres especiales. Mejor apuntar con URL codificada.
	// "Vídeo sin título ‐ Hecho con Clipchamp (21).mp4"
	const HERO_VIDEO =
		'/img/V%C3%ADdeo%20sin%20t%C3%ADtulo%20%E2%80%90%20Hecho%20con%20Clipchamp%20%2821%29.mp4';
</script>

<section class="section section-pad">
	<!-- HERO -->
	<div class="glass-card rounded-3xl p-6 md:p-8 border border-base-300/40">
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
			<div>
				<div class="inline-flex items-center gap-2 rounded-full border border-base-300/60 bg-base-100/40 px-4 py-2 text-sm text-base-content/80">
					<span class="badge badge-primary badge-sm">ArquiEpoxy</span>
					<span class="text-base-content/70">Grado quirúrgico • industrial • deportivo</span>
				</div>

				<h1 class="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
					Limpieza y estilo para cada espacio
				</h1>

				<p class="mt-3 text-base-content/80 leading-relaxed">
					Aplicación profesional de resina epóxica para hospitales, clínicas, bodegas y proyectos institucionales en
					Guatemala y Centroamérica. Acabados continuos, resistentes y listos para operación exigente.
				</p>

				<div class="mt-6 flex flex-col gap-3 sm:flex-row">
					<a class="btn btn-primary" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
						Cotizar por WhatsApp
					</a>
					<a class="btn btn-ghost" href="/projects">Ver proyectos</a>
				</div>

				<div class="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
					<div class="rounded-2xl border border-base-300/40 bg-base-100/30 p-4">
						<div class="text-sm font-semibold">Higiene</div>
						<div class="text-xs text-base-content/70 mt-1">Superficie sellada y sanitizable</div>
					</div>
					<div class="rounded-2xl border border-base-300/40 bg-base-100/30 p-4">
						<div class="text-sm font-semibold">Resistencia</div>
						<div class="text-xs text-base-content/70 mt-1">Alto tráfico y químicos</div>
					</div>
					<div class="rounded-2xl border border-base-300/40 bg-base-100/30 p-4">
						<div class="text-sm font-semibold">Presentación</div>
						<div class="text-xs text-base-content/70 mt-1">Acabado premium e institucional</div>
					</div>
				</div>
			</div>

			<!-- VIDEO CAROUSEL -->
			<div class="rounded-3xl border border-base-300/40 bg-base-100/20 p-4">
				<div class="carousel w-full h-[260px] md:h-[420px] rounded-2xl overflow-hidden bg-black">
					<!-- Slide 1 -->
					<div id="slide1" class="carousel-item relative w-full flex justify-center items-center">
						<video class="w-full h-full object-contain bg-black" controls loop playsinline preload="metadata">
							<source src={HERO_VIDEO} type="video/mp4" />
							Tu navegador no soporta el elemento de video.
						</video>
						<div class="absolute left-4 right-4 top-1/2 flex -translate-y-1/2 transform justify-between">
							<a href="#slide4" class="btn btn-circle btn-sm md:btn-md">❮</a>
							<a href="#slide2" class="btn btn-circle btn-sm md:btn-md">❯</a>
						</div>
					</div>

					<!-- Slide 2 -->
					<div id="slide2" class="carousel-item relative w-full flex justify-center items-center">
						<video class="w-full h-full object-contain bg-black" controls loop playsinline preload="metadata">
							<source src="/videos/quirofanos.mp4" type="video/mp4" />
							Tu navegador no soporta el elemento de video.
						</video>
						<div class="absolute left-4 right-4 top-1/2 flex -translate-y-1/2 transform justify-between">
							<a href="#slide1" class="btn btn-circle btn-sm md:btn-md">❮</a>
							<a href="#slide3" class="btn btn-circle btn-sm md:btn-md">❯</a>
						</div>
					</div>

					<!-- Slide 3 -->
					<div id="slide3" class="carousel-item relative w-full flex justify-center items-center">
						<video class="w-full h-full object-contain bg-black" controls loop playsinline preload="metadata">
							<source src="/videos/bodega.mp4" type="video/mp4" />
							Tu navegador no soporta el elemento de video.
						</video>
						<div class="absolute left-4 right-4 top-1/2 flex -translate-y-1/2 transform justify-between">
							<a href="#slide2" class="btn btn-circle btn-sm md:btn-md">❮</a>
							<a href="#slide4" class="btn btn-circle btn-sm md:btn-md">❯</a>
						</div>
					</div>

					<!-- Slide 4 -->
					<div id="slide4" class="carousel-item relative w-full flex justify-center items-center">
						<video class="w-full h-full object-contain bg-black" controls loop playsinline preload="metadata">
							<source src="/videos/vivienda.mp4" type="video/mp4" />
							Tu navegador no soporta el elemento de video.
						</video>
						<div class="absolute left-4 right-4 top-1/2 flex -translate-y-1/2 transform justify-between">
							<a href="#slide3" class="btn btn-circle btn-sm md:btn-md">❮</a>
							<a href="#slide1" class="btn btn-circle btn-sm md:btn-md">❯</a>
						</div>
					</div>
				</div>

				<div class="mt-4 flex flex-wrap items-center gap-2 text-xs text-base-content/70">
					<span class="badge badge-outline">Clínicas</span>
					<span class="badge badge-outline">Bodegas</span>
					<span class="badge badge-outline">Vivienda</span>
					<span class="badge badge-outline">Institucional</span>
				</div>
			</div>
		</div>
	</div>

	<!-- SERVICIOS DESTACADOS -->
	<div class="mt-12">
		<div class="flex items-center gap-4">
			<h2 class="text-2xl font-extrabold">Aplicaciones principales</h2>
			<div class="soft-divider"></div>
		</div>

		<p class="mt-3 text-base-content/80 max-w-3xl leading-relaxed">
			Sistemas epóxicos diseñados para higiene, resistencia y estética. Enfoque médico-industrial y ejecución profesional.
		</p>

		<div class="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
			<!-- Clínico -->
			<div class="card bg-base-100 shadow-sm border border-base-300/40">
				<figure class="h-[220px] overflow-hidden">
					<img src="/img/types/clinic.jpg" alt="Pisos clínicos" class="w-full h-full object-cover" />
				</figure>
				<div class="card-body">
					<div class="flex items-center justify-between">
						<h3 class="card-title">Clínico / Quirúrgico</h3>
						<span class="badge badge-success">Higiene</span>
					</div>
					<p class="text-sm text-base-content/80">
						Superficie sellada, fácil de sanitizar y lista para protocolos exigentes.
					</p>
					<div class="card-actions justify-end">
						<a
							class="btn btn-primary btn-sm"
							href="https://wa.me/50255272948?text=Hola,%20necesito%20una%20cotizaci%C3%B3n%20para%20resina%20ep%C3%B3xica%20grado%20quir%C3%BArgico."
							target="_blank"
							rel="noopener noreferrer"
						>
							Cotizar
						</a>
					</div>
				</div>
			</div>

			<!-- Industrial -->
			<div class="card bg-base-100 shadow-sm border border-base-300/40">
				<figure class="h-[220px] overflow-hidden">
					<img src="/img/types/industry.jpg" alt="Pisos industriales" class="w-full h-full object-cover" />
				</figure>
				<div class="card-body">
					<div class="flex items-center justify-between">
						<h3 class="card-title">Industrial / Alto tráfico</h3>
						<span class="badge badge-warning">Resistencia</span>
					</div>
					<p class="text-sm text-base-content/80">
						Para bodegas, plantas y áreas operativas: abrasión, químicos y uso continuo.
					</p>
					<div class="card-actions justify-end">
						<a
							class="btn btn-primary btn-sm"
							href="https://wa.me/50255272948?text=Hola,%20necesito%20una%20cotizaci%C3%B3n%20para%20resina%20ep%C3%B3xica%20grado%20industrial."
							target="_blank"
							rel="noopener noreferrer"
						>
							Cotizar
						</a>
					</div>
				</div>
			</div>

			<!-- Deportivo -->
			<div class="card bg-base-100 shadow-sm border border-base-300/40">
				<figure class="h-[220px] overflow-hidden">
					<img src="/img/types/pitch.jpg" alt="Canchas deportivas" class="w-full h-full object-cover" />
				</figure>
				<div class="card-body">
					<div class="flex items-center justify-between">
						<h3 class="card-title">Deportivo</h3>
						<span class="badge badge-info">Desempeño</span>
					</div>
					<p class="text-sm text-base-content/80">
						Superficies técnicas con estética premium: tracción, control y durabilidad.
					</p>
					<div class="card-actions justify-end">
						<a class="btn btn-ghost btn-sm" href="/services">Ver servicios</a>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- CTA -->
	<div class="mt-12 glass-card rounded-3xl p-8">
		<div class="grid grid-cols-1 gap-6 md:grid-cols-3 md:items-center">
			<div class="md:col-span-2">
				<h2 class="text-2xl font-extrabold">¿Listo para elevar su proyecto?</h2>
				<p class="mt-2 text-base-content/80">
					Compártanos ubicación, tipo de área y metraje. Le preparamos una cotización profesional.
				</p>
			</div>
			<div class="md:justify-self-end">
				<a class="btn btn-primary w-full md:w-auto" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
					Cotizar ahora
				</a>
			</div>
		</div>
	</div>
</section>
