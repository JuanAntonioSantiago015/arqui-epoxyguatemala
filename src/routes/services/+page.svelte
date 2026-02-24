<script lang="ts">
	import { pageTitle } from '$lib/stores/pageTitle';
	pageTitle.set('Servicios');

	const services = [
		{
			title: 'Pisos de clínicas',
			img: '/img/types/clinic.jpg',
			cta: 'Cotizar',
			href: 'https://wa.me/50255272948?text=Hola,%20necesito%20una%20cotización%20para%20Quirófano.'
		},
		{
			title: 'Pisos de bodegas',
			img: '/img/types/industry.jpg',
			cta: 'Cotizar',
			href: 'https://wa.me/50255272948?text=Hola,%20necesito%20una%20cotización%20para%20piso%20grado%20industrial.'
		},
		{
			title: 'Canchas deportivas',
			img: '/img/types/pitch.jpg',
			cta: 'Cotizar',
			href: 'https://wa.me/50255272948?text=Hola,%20necesito%20una%20cotización%20para%20canchas%20deportivas.'
		},
		{
			title: 'Vivienda',
			img: '/img/types/house.webp',
			cta: 'Cotizar',
			href: 'https://wa.me/50255272948?text=Hola,%20necesito%20una%20cotización%20para%20piso%20de%20viviendas.'
		},
		{
			title: 'Paredes',
			img: '/img/types/wall.jpg',
			cta: 'Cotizar',
			href: 'https://wa.me/50255272948?text=Hola,%20necesito%20una%20cotización%20para%20paredes.'
		},
		{
			title: 'Restaurantes grado alimenticio',
			img: '/img/types/restaurant.webp',
			cta: 'Cotizar',
			href: 'https://wa.me/50255272948?text=Hola,%20necesito%20una%20cotización%20para%20piso%20de%20restaurante%20grado%20alimenticio.'
		}
	];
</script>

<section class="section section-pad">
	<div class="text-center">
		<h1 class="text-4xl font-extrabold tracking-tight">¿Qué necesita cotizar hoy?</h1>
		<p class="mt-3 text-base-content/80 max-w-3xl mx-auto">
			Soluciones epóxicas de nivel médico-industrial para higiene, resistencia y presentación institucional.
		</p>
	</div>

	<div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
		{#each services as s (s.title)}
			<div class="glass-card rounded-3xl overflow-hidden">
				<img src={s.img} alt={s.title} class="h-[260px] w-full object-cover" />
				<div class="p-6">
					<h2 class="text-lg font-bold">{s.title}</h2>
					<div class="mt-4">
						<a class="btn btn-primary btn-sm" href={s.href} target="_blank" rel="noopener noreferrer">
							{s.cta}
						</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<div class="section"><div class="soft-divider"></div></div>

<section class="section section-pad">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
		<div class="glass-card rounded-3xl p-6 flex items-center gap-4">
			<img src="/img/mspas.png" alt="MSPAS" class="h-[54px] w-auto" />
			<div>
				<div class="text-lg font-bold">Avalados por MSPAS</div>
				<div class="text-sm text-base-content/80">Cumplimiento, confianza y estándares para entornos clínicos.</div>
			</div>
		</div>

		<div class="glass-card rounded-3xl p-6 flex items-center gap-4">
			<img src="/img/camara.jpg" alt="Cámara de Construcción" class="h-[54px] w-auto" />
			<div>
				<div class="text-lg font-bold">Avalados por Cámara de Construcción</div>
				<div class="text-sm text-base-content/80">Experiencia institucional y ejecución profesional.</div>
			</div>
		</div>
	</div>

	<div class="mt-8 glass-card rounded-3xl p-8">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
			<h2 class="text-3xl font-extrabold md:col-span-1">Higienice sus áreas con nosotros</h2>
			<div class="md:col-span-2 text-base-content/80 leading-relaxed">
				Somos expertos en la aplicación de resina epóxica de grado quirúrgico, industrial, alimenticio y artesanal
				en pisos, paredes, superficies técnicas y proyectos de alto tránsito.
				<div class="mt-5">
					<a
						href="https://wa.me/50255272948?text=¡Hola!%20Quiero%20una%20cotización%20para%20resina%20epóxica."
						target="_blank"
						rel="noopener noreferrer"
						class="btn btn-primary"
					>
						Obtener cotización
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
