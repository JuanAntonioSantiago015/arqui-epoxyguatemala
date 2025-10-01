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
				'/img/ElAlto/000.jpg',
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
				'/img/NuevaEsperanza/008.jpg',
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
		},
		{
			nombre: 'San José Costa Rica',
			fecha: 'Costa Rica, Centro América',
			fotos: ['/img/cr0.jpg', '/img/cr.jpg']
		},
		{
			nombre: 'Hospital San José Moscati',
			fecha: 'San Marcos, Guatemala',
			fotos: [
				'/img/Moscati/000.jpg',
				'/img/Moscati/00.jpg',
				'/img/Moscati/01.jpg',
				'/img/Moscati/02.jpg',
				'/img/Moscati/03.jpg',
				'/img/Moscati/04.jpg',
				'/img/Moscati/05.jpg',
				'/img/Moscati/07.jpg'
			]
		},
		{
			nombre: 'Jalapa',
			fecha: 'Jalapa, Guatemala',
			fotos: ['/img/Jalapa/000.jpg', '/img/Jalapa/001.jpg', '/img/Jalapa/002.jpg']
		},
		{
			nombre: 'Zona Médica Zona 9',
			fecha: 'Ciudad de Guatemala, Guatemala',
			fotos: [
				'/img/ZonaMedica/000.jpg',
				'/img/ZonaMedica/001.jpg',
				'/img/ZonaMedica/002.jpg',
				'/img/ZonaMedica/003.jpg',
				'/img/ZonaMedica/004.jpg',
				'/img/ZonaMedica/005.jpg',
				'/img/ZonaMedica/006.jpg',
				'/img/ZonaMedica/007.jpg',
				'/img/ZonaMedica/008.jpg'
			]
		},
		{
			nombre: 'Blood Sweat Body Work',
			fecha: 'Panamá, Centro América',
			fotos: [
				'/img/Panama/003.jpg',
				'/img/Panama/000.jpg',
				'/img/Panama/001.jpg',
				'/img/Panama/002.jpg'
			]
		},
		{
			nombre: 'Cayalá',
			fecha: 'Ciudad de Guatemala, Guatemala',
			fotos: [
				'/img/Cayala/000.jpg',
				'/img/Cayala/001.jpg',
				'/img/Cayala/002.jpg',
				'/img/Cayala/003.jpg'
			]
		},
		{
			nombre: 'Jutiapa',
			fecha: 'Jutiapa, Guatemala',
			fotos: [
				'/img/JutiapaJutiapa/000.jpg',
				'/img/JutiapaJutiapa/001.jpg',
				'/img/JutiapaJutiapa/002.jpg',
				'/img/JutiapaJutiapa/003.jpg',
				'/img/JutiapaJutiapa/004.jpg'
			]
		},
		{
			nombre: 'Flores',
			fecha: 'Petén, Guatemala',
			fotos: [
				'/img/Flores/000.jpg',
				'/img/Flores/001.jpg',
				'/img/Flores/002.jpg',
				'/img/Flores/003.jpg'
			]
		},
		{
			nombre: 'San Antonio Abad',
			fecha: 'San Salvador, El Salvador',
			fotos: ['/img/depSalvador/000.jpg', '/img/depSalvador/001.jpg', '/img/depSalvador/002.jpg']
		},
		{
			nombre: 'Jalapa',
			fecha: 'Jalapa, Guatemala',
			fotos: [
				'/img/JalapaJalapa/000.jpg',
				'/img/JalapaJalapa/001.jpg',
				'/img/JalapaJalapa/002.jpg',
				'/img/JalapaJalapa/003.jpg'
			]
		},
		{
			nombre: 'Banco de Alimentos',
			fecha: 'Ciudad de Guatemala, Guatemala',
			fotos: [
				'/img/bancoAlimentos/000.jpg',
				'/img/bancoAlimentos/001.jpg',
				'/img/bancoAlimentos/002.jpg',
				'/img/bancoAlimentos/003.jpg',
				'/img/bancoAlimentos/004.jpg'
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
		<div class="card bg-base-100 shadow-sm">
			<figure>
				<video class="w-[360px] rounded-lg" controls>
					<source src="/videos/peten.mp4" type="video/mp4" />
					Tu navegador no soporta el video.
				</video>
			</figure>
			<div class="card-body text-center">
				<h2 class="text-2xl font-bold mb-4">Petén</h2>
				<p>Petén, Guatemala</p>
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
				<svg
					xmlns="http://www.w3.org/2000/svg"
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
		</h1>
	</div>
</div>
