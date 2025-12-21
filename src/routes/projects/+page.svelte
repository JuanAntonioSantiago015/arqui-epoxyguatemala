<script lang="ts">
	import { pageTitle } from '$lib/stores/pageTitle';
	import Carousel from '$lib/components/Carousel.svelte';
	pageTitle.set('PROYECTOS');

	type Proyecto = {
		nombre: string;
		fecha: string;
		fotos: string[];
	};

	const proyectos: Proyecto[] = [
		{
			nombre: 'Cancha Deportiva en Santa Rosa',
			fecha: 'Santa Rosa, Guatemala',
			fotos: ['/img/Santa Rosa/000.jpg', '/img/Santa Rosa/001.jpg', '/img/Santa Rosa/002.jpg']
		},
		{
			nombre: 'Clínica de Traumatología',
			fecha: 'Chiquimula, Guatemala',
			fotos: [
				'/img/Chiquimula/000.jpg',
				'/img/Chiquimula/001.jpg',
				'/img/Chiquimula/002.jpg',
				'/img/Chiquimula/003.jpg',
				'/img/Chiquimula/004.jpg'
			]
		},
		{
			nombre: 'Cancha Deportiva en San Salvador',
			fecha: 'San Salvador, El Salvador',
			fotos: [
				'/img/SanSalvador/000.jpg',
				'/img/SanSalvador/001.jpg',
				'/img/SanSalvador/002.jpg',
				'/img/SanSalvador/003.jpg',
				'/img/SanSalvador/004.jpg',
				'/img/SanSalvador/005.jpg'
			]
		},
		{
			nombre: 'Hospital Privado del Dr. Eugenio Gonzalez',
			fecha: 'El Alto, Guatemala',
			fotos: [
				'/img/ElAlto/005.jpg',
				'/img/ElAlto/001.jpg',
				'/img/ElAlto/002.jpg',
				'/img/ElAlto/003.jpg',
				'/img/ElAlto/004.jpg',
				'/img/ElAlto/000.jpg'
			]
		},
		{
			nombre: 'Hospital Nueva Esperanza',
			fecha: 'Sololá, Guatemala',
			fotos: [
				'/img/NuevaEsperanza/000.jpg',
				'/img/NuevaEsperanza/001.jpg',
				'/img/NuevaEsperanza/002.jpg',
				'/img/NuevaEsperanza/003.jpg',
				'/img/NuevaEsperanza/004.jpg',
				'/img/NuevaEsperanza/005.jpg',
				'/img/NuevaEsperanza/006.jpg',
				'/img/NuevaEsperanza/007.jpg',
				'/img/NuevaEsperanza/008.jpg'
			]
		},
		{
			nombre: 'Hospital del Lago',
			fecha: 'Sololá, Guatemala',
			fotos: [
				'/img/Solola/000.jpg',
				'/img/Solola/001.jpg',
				'/img/Solola/002.jpg',
				'/img/Solola/003.jpg',
				'/img/Solola/004.jpg',
				'/img/Solola/005.jpg',
				'/img/Solola/006.jpg',
				'/img/Solola/007.jpg',
				'/img/Solola/008.jpg',
				'/img/Solola/009.jpg',
				'/img/Solola/010.jpg',
				'/img/Solola/011.jpg'
			]
		},
		{
			nombre: 'Herrera Llerandi',
			fecha: 'Ciudad de Guatemala, Guatemala',
			fotos: [
				'/img/Herrera Llerandi/000.jpg',
				'/img/Herrera Llerandi/00.jpg',
				'/img/Herrera Llerandi/01.jpg',
				'/img/Herrera Llerandi/02.jpg'
			]
		},
		{
			nombre: 'El Salvador',
			fecha: 'El Salvador, Centro América',
			fotos: ['/img/Salvador/000.jpg', '/img/Salvador/001.jpg', '/img/Salvador/002.jpg']
		},
		{
			nombre: 'Centro Médico Integral El Rosario',
			fecha: 'Coatepeque, Guatemala',
			fotos: [
				'/img/ElRosario/000.jpg',
				'/img/ElRosario/00.jpg',
				'/img/ElRosario/01.jpg',
				'/img/ElRosario/02.jpg',
				'/img/ElRosario/03.jpg',
				'/img/ElRosario/04.jpg'
			]
		},
		{
			nombre: 'Nuestra Señora de Guadalupe',
			fecha: 'Mazatenango, Guatemala',
			fotos: [
				'/img/Nuestra Se;ora de Guadalupe/00.jpg',
				'/img/Nuestra Se;ora de Guadalupe/01.jpg',
				'/img/Nuestra Se;ora de Guadalupe/02.jpg',
				'/img/Nuestra Se;ora de Guadalupe/03.jpg',
				'/img/Nuestra Se;ora de Guadalupe/04.jpg'
			]
		},
		{
			nombre: 'Hospital Privado Los Eucaliptos',
			fecha: 'Quetzaltenango, Guatemala',
			fotos: [
				'/img/LosEucaliptos/0000.jpg',
				'/img/LosEucaliptos/000.jpg',
				'/img/LosEucaliptos/001.jpg',
				'/img/LosEucaliptos/002.jpg',
				'/img/LosEucaliptos/003.jpg',
				'/img/LosEucaliptos/004.jpg',
				'/img/LosEucaliptos/005.jpg',
				'/img/LosEucaliptos/006.jpg',
				'/img/LosEucaliptos/007.jpg',
				'/img/LosEucaliptos/008.jpg',
				'/img/LosEucaliptos/009.jpg',
				'/img/LosEucaliptos/010.jpg',
				'/img/LosEucaliptos/011.jpg',
				'/img/LosEucaliptos/012.jpg',
				'/img/LosEucaliptos/013.jpg',
				'/img/LosEucaliptos/014.jpg',
				'/img/LosEucaliptos/015.jpg'
			]
		}
	];
</script>

<div class="px-8 py-10">
	<div class="flex items-center justify-center py-8">
		<h1 class="flex items-center gap-2 text-3xl font-bold text-white">
			Algunos de nuestros proyectos son:
		</h1>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
		{#each proyectos as proyecto, idx}
			<div class="card bg-base-100 shadow-sm">
				<figure>
					<Carousel fotos={proyecto.fotos} id={String(idx)} />
				</figure>
				<div class="card-body text-center">
					<h2 class="text-center text-2xl font-bold mb-4">{proyecto.nombre}</h2>
					<p>{proyecto.fecha}</p>
				</div>
			</div>
		{/each}

		<!-- 1️⃣ Petén -->
		<div class="card bg-base-100 shadow-sm">
			<figure>
				<video class="w-[360px] rounded-lg" controls>
					<source src="/videos/peten.mp4" type="video/mp4" />
				</video>
			</figure>
			<div class="card-body text-center">
				<h2 class="text-2xl font-bold mb-4">Petén</h2>
				<p>Petén, Guatemala</p>
			</div>
		</div>

		<!-- 2️⃣ Clínica Godoy -->
		<div class="card bg-base-100 shadow-sm">
			<figure>
				<video class="w-[360px] rounded-lg" controls>
					<source src="/videos/ArquiEpoxy-Guatemala-ClínicaGodoy-Jalapa.mp4" type="video/mp4" />
				</video>
			</figure>
			<div class="card-body text-center">
				<h2 class="text-2xl font-bold mb-4">Clínica Godoy</h2>
				<p>Jalapa, Guatemala</p>
			</div>
		</div>

		<!-- 3️⃣ Sanatorio Santa Marta -->
		<div class="card bg-base-100 shadow-sm">
			<figure>
				<video class="w-[360px] rounded-lg" controls>
					<source src="/videos/ArquiEpoxy-Guatemala-Jalapa.mp4" type="video/mp4" />
				</video>
			</figure>
			<div class="card-body text-center">
				<h2 class="text-2xl font-bold mb-4">Sanatorio Santa Marta</h2>
				<p>Jalapa, Guatemala</p>
			</div>
		</div>

		<!-- 4️⃣ Sanatorio Centro Médico Jalapaneco -->
		<div class="card bg-base-100 shadow-sm">
			<figure>
				<video class="w-[360px] rounded-lg" controls>
					<source src="/videos/Sanatorio-Centro-Medico-Jalapaneco.mp4" type="video/mp4" />
				</video>
			</figure>
			<div class="card-body text-center">
				<h2 class="text-2xl font-bold mb-4">Sanatorio Centro Médico Jalapaneco</h2>
				<p>Jalapa, Guatemala</p>
			</div>
		</div>

		<!-- 5️⃣ Hospital General de Enfermedades del IGSS -->
		<div class="card bg-base-100 shadow-sm">
			<figure>
				<video class="w-[360px] rounded-lg" controls>
					<source src="/videos/ArquiEpoxyHospiIgss.mp4" type="video/mp4" />
				</video>
			</figure>
			<div class="card-body text-center">
				<h2 class="text-2xl font-bold mb-4">Hospital General de Enfermedades del IGSS</h2>
				<p>9A Calle 7-55, Zona 9, Guatemala</p>
			</div>
		</div>

		<!-- 6️⃣ San Salvador -->
		<div class="card bg-base-100 shadow-sm">
			<figure>
				<video class="w-[360px] rounded-lg" controls>
					<source src="/videos/ArquiEpoxySalvador.mp4" type="video/mp4" />
				</video>
			</figure>
			<div class="card-body text-center">
				<h2 class="text-2xl font-bold mb-4">San Salvador</h2>
				<p>San Salvador, El Salvador</p>
			</div>
		</div>

		<!-- 7️⃣ Clínica Médica Genesaret -->
		<div class="card bg-base-100 shadow-sm">
			<figure>
				<video class="w-[360px] rounded-lg" controls>
					<source src="/videos/ArquiEpoxyGenesaret.mp4" type="video/mp4" />
				</video>
			</figure>
			<div class="card-body text-center">
				<h2 class="text-2xl font-bold mb-4">Clínica Médica Genesaret</h2>
				<p>San Lucas Tolimán, Sololá</p>
			</div>
		</div>

		<!-- 8️⃣ Video publicitario 1 -->
		<div class="card bg-base-100 shadow-sm">
			<figure>
				<video class="w-[360px] rounded-lg" controls>
					<source src="/videos/videopublicitario.mp4" type="video/mp4" />
				</video>
			</figure>
			<div class="card-body text-center">
				<h2 class="text-2xl font-bold mb-4">
					Te enseñamos nuestra resina epóxica grado quirúrgico
				</h2>
				<p>Conoce el acabado perfecto para clínicas y quirófanos.</p>
			</div>
		</div>

		<!-- 9️⃣ Video publicitario 2 -->
		<div class="card bg-base-100 shadow-sm">
			<figure>
				<video class="w-[360px] rounded-lg" controls>
					<source src="/videos/videopublicitario1.mp4" type="video/mp4" />
				</video>
			</figure>
			<div class="card-body text-center">
				<h2 class="text-2xl font-bold mb-4">
					Resina epóxica grado quirúrgico en acción
				</h2>
				<p>Higiene, brillo y seguridad en cada paso.</p>
			</div>
		</div>

		<!-- 🔟 Video publicitario grado industrial -->
		<div class="card bg-base-100 shadow-sm">
			<figure>
				<video class="w-[360px] rounded-lg" controls>
					<source src="/videos/videopublicitariogradoindustrial.mp4" type="video/mp4" />
				</video>
			</figure>
			<div class="card-body text-center">
				<h2 class="text-2xl font-bold mb-4">
					Resina epóxica grado industrial para alto tráfico
				</h2>
				<p>La solución ideal para bodegas, plantas y parqueos.</p>
			</div>
		</div>

		<!-- 1️⃣1️⃣ Video publicitario doctora -->
		<div class="card bg-base-100 shadow-sm">
			<figure>
				<video class="w-[360px] rounded-lg" controls>
					<source src="/videos/videopublicitarioiadoctora.mp4" type="video/mp4" />
				</video>
			</figure>
			<div class="card-body text-center">
				<h2 class="text-2xl font-bold mb-4">
					Recomendado por profesionales de la salud
				</h2>
				<p>Confianza y experiencia en pisos epóxicos para hospitales.</p>
			</div>
		</div>

		<!-- 1️⃣2️⃣ videopublicitariodiciembre.mp4 -->
		<div class="card bg-base-100 shadow-sm">
			<figure>
				<video class="w-[360px] rounded-lg" controls>
					<source src="/videos/videopublicitariodiciembre.mp4" type="video/mp4" />
				</video>
			</figure>
			<div class="card-body text-center">
				<h2 class="text-2xl font-bold mb-4">¡Diciembre con pisos epóxicos que se ven increíbles!</h2>
				<p>Brillo, limpieza y resistencia para cerrar el año con estilo.</p>
			</div>
		</div>

		<!-- 1️⃣3️⃣ canchabasquet-CostaRica.mp4 -->
		<div class="card bg-base-100 shadow-sm">
			<figure>
				<video class="w-[360px] rounded-lg" controls>
					<source src="/videos/canchabasquet-CostaRica.mp4" type="video/mp4" />
				</video>
			</figure>
			<div class="card-body text-center">
				<h2 class="text-2xl font-bold mb-4">San José, Costa Rica</h2>
				<p>Resina Epóxica Grado Deportivo</p>
			</div>
		</div>

		<!-- 1️⃣4️⃣ Campana-ia2.mp4 -->
		<div class="card bg-base-100 shadow-sm">
			<figure>
				<video class="w-[360px] rounded-lg" controls>
					<source src="/videos/Campana-ia2.mp4" type="video/mp4" />
				</video>
			</figure>
			<div class="card-body text-center">
				<h2 class="text-2xl font-bold mb-4">
					Inspector del MSPAS avala la calidad de nuestras aplicaciones
				</h2>
				<p>Trabajos con estándares profesionales, seguridad y confianza en cada proyecto.</p>
			</div>
		</div>

		<!-- 1️⃣5️⃣ Navidad-ArquiEpoxy.mp4 -->
		<div class="card bg-base-100 shadow-sm">
			<figure>
				<video class="w-[360px] rounded-lg" controls>
					<source src="/videos/Navidad-ArquiEpoxy.mp4" type="video/mp4" />
				</video>
			</figure>
			<div class="card-body text-center">
				<h2 class="text-2xl font-bold mb-4">¡Felices Fiestas de parte de Arqui-Epoxy Guatemala!</h2>
				<p>Navidad 2025: gracias por confiar en nosotros, vamos por un año lleno de proyectos.</p>
			</div>
		</div>
	</div>

	<div class="flex items-center justify-center py-8">
		<h1 class="flex items-center gap-2 text-3xl font-bold text-[#1b68a9]">
			Encuentra todos nuestros proyectos en
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
		</h1>
	</div>
</div>
