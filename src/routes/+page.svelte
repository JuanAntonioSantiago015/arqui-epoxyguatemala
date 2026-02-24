<script lang="ts">
	import { pageTitle } from '$lib/stores/pageTitle';
	pageTitle.set('Limpieza y estilo para cada espacio');

	const WHATSAPP_LINK =
		'https://wa.me/50255272948?text=Hola,%20necesito%20una%20cotización%20para%20resina%20epóxica.';

	const slides = [
		{ id: 'slide1', src: "/img/Vídeo sin título ‐ Hecho con Clipchamp (21).mp4", poster: '/img/types/clinic.jpg' },
		{ id: 'slide2', src: '/videos/quirofanos.mp4', poster: '/img/types/clinic.jpg' },
		{ id: 'slide3', src: '/videos/bodega.mp4', poster: '/img/types/industry.jpg' },
		{ id: 'slide4', src: '/videos/vivienda.mp4', poster: '/img/types/house.webp' }
	];
</script>

<section class="section section-pad">
	<div class="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
		<!-- Texto / CTA -->
		<div>
			<div class="inline-flex items-center gap-2 rounded-full border border-base-300/60 bg-base-100/50 px-4 py-2 text-sm text-base-content/80">
				<span class="badge badge-primary badge-sm">ArquiEpoxy</span>
				<span class="text-base-content/70">Grado quirúrgico • industrial • alimenticio • deportivo</span>
			</div>

			<h1 class="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
				Aplicación profesional de <span class="text-primary">resina epóxica</span> para entornos exigentes
			</h1>

			<p class="mt-4 text-base text-base-content/80 leading-relaxed">
				Superficies continuas, resistentes y fáciles de higienizar para clínicas, hospitales, bodegas,
				parqueos y proyectos institucionales en Guatemala y Centroamérica.
			</p>

			<div class="mt-6 flex flex-col gap-3 sm:flex-row">
				<a class="btn btn-primary" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
					Cotizar por WhatsApp
				</a>
				<a class="btn btn-ghost" href="/projects">Ver proyectos</a>
			</div>

			<div class="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
				<div class="glass-card rounded-2xl p-4">
					<div class="text-sm font-semibold">Higiene</div>
					<div class="text-xs text-base-content/70 mt-1">Ideal para áreas clínicas y sanitarias.</div>
				</div>
				<div class="glass-card rounded-2xl p-4">
					<div class="text-sm font-semibold">Resistencia</div>
					<div class="text-xs text-base-content/70 mt-1">Abrasión, químicos y alto tránsito.</div>
				</div>
				<div class="glass-card rounded-2xl p-4">
					<div class="text-sm font-semibold">Presentación</div>
					<div class="text-xs text-base-content/70 mt-1">Acabado premium de nivel institucional.</div>
				</div>
			</div>
		</div>

		<!-- Carousel -->
		<div class="glass-card rounded-3xl p-4">
			<div class="carousel w-full h-[320px] md:h-[520px] rounded-2xl overflow-hidden">
				{#each slides as s, i (s.id)}
					<div id={s.id} class="carousel-item relative w-full flex justify-center items-center">
						<video class="w-full h-full object-cover bg-black" controls playsinline preload="metadata" poster={s.poster}>
							<source src={s.src} type="video/mp4" />
							Tu navegador no soporta el elemento de video.
						</video>

						<div class="absolute left-4 right-4 top-1/2 flex -translate-y-1/2 transform justify-between">
							<a href={`#${slides[(i - 1 + slides.length) % slides.length].id}`} class="btn btn-circle btn-ghost text-white">❮</a>
							<a href={`#${slides[(i + 1) % slides.length].id}`} class="btn btn-circle btn-ghost text-white">❯</a>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<div class="section"><div class="soft-divider"></div></div>

<!-- Cards -->
<section class="section section-pad">
	<h2 class="text-3xl font-extrabold tracking-tight text-center">
		Soluciones por tipo de espacio
	</h2>
	<p class="mt-3 text-center text-base-content/80 max-w-3xl mx-auto">
		Aplicación de resina epóxica para proyectos clínicos, industriales, alimenticios y más.
	</p>

	<div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
		<div class="glass-card rounded-3xl overflow-hidden">
			<img src="/img/types/clinic.jpg" alt="clínicas" class="h-56 w-full object-cover" />
			<div class="p-6">
				<h3 class="text-xl font-bold">Pisos de clínicas</h3>
				<p class="mt-2 text-sm text-base-content/80">Higiene, limpieza y acabado continuo para entornos sanitarios.</p>
				<a class="btn btn-primary btn-sm mt-4" target="_blank" rel="noopener noreferrer"
					href="https://wa.me/50255272948?text=Hola,%20necesito%20una%20cotización%20para%20Quirófano.">Cotizar</a>
			</div>
		</div>

		<div class="glass-card rounded-3xl overflow-hidden">
			<img src="/img/types/industry.jpg" alt="bodegas" class="h-56 w-full object-cover" />
			<div class="p-6">
				<h3 class="text-xl font-bold">Pisos de bodegas</h3>
				<p class="mt-2 text-sm text-base-content/80">Resistencia industrial para alto tráfico y operación continua.</p>
				<a class="btn btn-primary btn-sm mt-4" target="_blank" rel="noopener noreferrer"
					href="https://wa.me/50255272948?text=Hola,%20necesito%20una%20cotización%20para%20piso%20grado%20industrial.">Cotizar</a>
			</div>
		</div>

		<div class="glass-card rounded-3xl overflow-hidden">
			<img src="/img/types/pitch.jpg" alt="canchas" class="h-56 w-full object-cover" />
			<div class="p-6">
				<h3 class="text-xl font-bold">Y más…</h3>
				<p class="mt-2 text-sm text-base-content/80">Deportivo, alimenticio, paredes, parqueos y acabados especiales.</p>
				<a class="btn btn-ghost btn-sm mt-4" href="/services">Conocer servicios</a>
			</div>
		</div>
	</div>
</section>

<div class="section"><div class="soft-divider"></div></div>

<!-- Comparación (dark premium) -->
<section class="section section-pad">
	<div class="text-center mb-10">
		<h2 class="text-3xl md:text-4xl font-extrabold tracking-tight">Resina Epóxica vs Pintura Epóxica</h2>
		<p class="mt-3 text-base-content/80">Comparación práctica de desempeño para pisos y recubrimientos.</p>
	</div>

	<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
		<div class="glass-card rounded-3xl p-6 border border-emerald-400/40 bg-emerald-500/10">
			<div class="flex items-center justify-between">
				<h3 class="text-2xl font-bold">Resina epóxica</h3>
				<span class="badge badge-success">Recomendada</span>
			</div>
			<ul class="mt-5 space-y-2 text-sm text-base-content/85">
				<li>✔ Mayor resistencia mecánica y química</li>
				<li>✔ Continuidad, sellado e higiene superior</li>
				<li>✔ Mayor vida útil y mejor desempeño en alto tráfico</li>
				<li>✔ Acabado premium y opciones decorativas</li>
			</ul>
			<a class="btn btn-primary btn-sm mt-6" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">Solicitar asesoría</a>
		</div>

		<div class="glass-card rounded-3xl p-6">
			<div class="flex items-center justify-between">
				<h3 class="text-2xl font-bold">Pintura epóxica</h3>
				<span class="badge badge-ghost">Costo inicial</span>
			</div>
			<ul class="mt-5 space-y-2 text-sm text-base-content/85">
				<li>• Menor espesor y menor resistencia</li>
				<li>• Reaplicaciones más frecuentes</li>
				<li>• Adecuada para uso moderado y presupuestos limitados</li>
			</ul>
		</div>
	</div>
</section>
