<script lang="ts">
	import { pageTitle } from '$lib/stores/pageTitle';
	pageTitle.set('Nosotros');

	const valores = [
		{
			title: 'Compromiso',
			desc: 'Cumplimos cada proyecto con responsabilidad, orden y resultados medibles.'
		},
		{
			title: 'Profesionalismo',
			desc: 'Disciplina, puntualidad y ética en cada etapa: desde preparación hasta entrega.'
		},
		{
			title: 'Calidad',
			desc: 'Acabados duraderos y estéticos con estándares técnicos de nivel institucional.'
		}
	];
</script>

<section class="section section-pad">
	<div class="text-center">
		<h1 class="text-4xl font-extrabold tracking-tight">¿Quiénes somos?</h1>
		<p class="mt-3 text-base-content/80 max-w-3xl mx-auto">
			ArquiEpoxy Guatemala: soluciones de recubrimiento epóxico de alto desempeño para entornos clínicos,
			industriales y comerciales en Guatemala y Centroamérica.
		</p>
	</div>

	<div class="mt-10 glass-card rounded-3xl p-8">
		<div class="flex flex-col md:flex-row items-center gap-8">
			<img src="/img/arqui-epoxy.png" alt="ArquiEpoxy Guatemala" class="h-[180px] w-auto" />
			<div class="text-base-content/80 leading-relaxed">
				<p>
					Arquiepoxi Guatemala nació con la visión de transformar espacios hospitalarios, industriales y comerciales
					mediante soluciones de recubrimiento de alta calidad. Nos especializamos en crear superficies seguras,
					funcionales y duraderas con estándares de higiene, resistencia y estética.
				</p>
				<p class="mt-4">
					Somos aliados confiables de clínicas, hospitales, laboratorios y empresas que buscan pisos fáciles de limpiar,
					resistentes al uso intensivo y con un diseño impecable.
				</p>

				<div class="mt-6">
					<a
						href="https://wa.me/50255272948?text=¡Hola!%20Quiero%20una%20cotización%20para%20resina%20epóxica."
						class="btn btn-primary"
						target="_blank"
						rel="noopener noreferrer"
					>
						Obtener cotización
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<div class="section"><div class="soft-divider"></div></div>

<section class="section section-pad">
	<div class="text-center">
		<h2 class="text-3xl font-extrabold tracking-tight">Nuestros valores</h2>
		<p class="mt-3 text-base-content/80 max-w-3xl mx-auto">
			La diferencia está en la ejecución: preparación profesional, materiales correctos y entrega institucional.
		</p>
	</div>

	<div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
		{#each valores as v (v.title)}
			<div class="glass-card rounded-3xl p-6">
				<h3 class="text-xl font-bold">{v.title}</h3>
				<p class="mt-3 text-sm text-base-content/80 leading-relaxed">{v.desc}</p>
			</div>
		{/each}
	</div>
</section>
