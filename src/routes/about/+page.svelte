<script lang="ts">
	import { pageTitle } from '$lib/stores/pageTitle';
	pageTitle.set('Nosotros');
</script>

<div class="px-8 py-10">
	<h1 class="text-4xl font-bold mb-8 text-center py-16">¿Quiénes somos?</h1>
</div>
<div
	class="bg-[#1b68a9] text-white px-10 py-12 flex flex-col md:flex-row items-center md:items-start gap-8 rounded-md w-full"
>
	<!-- Izquierda -->
	<div class="flex items-center justify-center h-64">
		<!-- altura ejemplo 16rem -->
		<div class="text-center text-4xl font-semibold leading-relaxed">
			<h1>Nuestra historia</h1>
		</div>
	</div>

	<!-- Derecha -->
	<div class="md:w-2/3">
		<p class="mb-6 text-base md:text-lg leading-relaxed text-justify">
			Arquiepoxi Guatemala nació con la visión de transformar espacios hospitalarios, industriales y
			comerciales mediante soluciones de recubrimiento de alta calidad. Con años de experiencia en
			la instalación de pisos de resina epóxica, nos hemos especializado en crear superficies
			seguras, funcionales y duraderas que cumplen con los más altos estándares internacionales de
			higiene, resistencia y estética.
		</p>
		<p class="mb-6 text-base md:text-lg leading-relaxed text-justify">
			Desde nuestros inicios, hemos sido aliados confiables de clínicas, hospitales, laboratorios y
			empresas que buscan pisos fáciles de limpiar, resistentes al uso intensivo y con un diseño
			impecable. Nuestro compromiso con la innovación, el trabajo bien hecho y la personalización
			nos ha permitido crecer, siempre con un objetivo claro: ofrecer un servicio confiable y
			resultados que resistan el paso del tiempo.
		</p>

		<a
			href="https://wa.me/50255272948"
			class="inline-block bg-[#0f3a5d] hover:bg-[#0d314e] text-white px-6 py-3 rounded-md font-medium transition"
		>
			Obtén una cotización
		</a>
	</div>
</div>

<div class="px-8 py-10">
	<h1 class="text-4xl font-bold mb-8 text-center py-16">Nuestros valores</h1>
</div>

<div class="bg-[#1b68a9] text-white px-10 py-12 flex flex-col md:flex-row gap-8 rounded-md w-full">
	<!-- Columna 1 -->
	<!-- Columna 1 -->
	<div class="md:w-1/3 text-center md:text-left">
		<h2 class="flex flex-col items-center text-2xl font-semibold mb-4 text-white">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-10 w-10 mb-2 text-white"
				fill="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					d="M20.285 2.859a3 3 0 0 0-4.243 0l-9.9 9.9-2.122-2.122a3 3 0 1 0-4.243 4.243l4.243 4.243a3 3 0 0 0 4.243 0l12.022-12.022a3 3 0 0 0 0-4.243z"
				/>
			</svg>
			Compromiso
		</h2>
		<p class="text-base leading-relaxed text-white">
			Nos dedicamos a cumplir cada proyecto con responsabilidad y seriedad, garantizando la
			satisfacción del cliente.
		</p>
	</div>

	<!-- Columna 2 -->
	<!-- Profesionalismo -->
	<div class="md:w-1/3 text-center md:text-left">
		<h2 class="flex flex-col items-center text-2xl font-semibold mb-4 text-white">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-10 w-10 mb-2 text-white"
				fill="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					d="M12 2a5 5 0 100 10 5 5 0 000-10zm6.5 18h-13c-.83 0-1.5-.67-1.5-1.5v-.92c0-2.05 1.23-3.86 3.11-4.64l1.8-.75 1.1 2.75-1.51 1.51 1.41 1.41L12 15l2.1 2.1 1.41-1.41-1.51-1.51 1.1-2.75 1.8.75c1.88.78 3.11 2.59 3.11 4.64v.92c0 .83-.67 1.5-1.5 1.5z"
				/>
			</svg>
			Profesionalismo
		</h2>
		<p class="text-base leading-relaxed text-white">
			Trabajamos con disciplina, puntualidad y ética en todas nuestras operaciones y relaciones
			comerciales.
		</p>
	</div>

	<!-- Columna 3 -->
	<div class="md:w-1/3 text-center md:text-left">
		<h2 class="flex flex-col items-center text-2xl font-semibold mb-4 text-white">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-10 w-10 mb-2 text-white"
				fill="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.783 1.4 8.172L12 18.897l-7.334 3.868 1.4-8.172L.132 9.21l8.2-1.192z"
				/>
			</svg>
			Calidad
		</h2>
		<p class="text-base leading-relaxed text-white">
			Ofrecemos acabados impecables y duraderos, cumpliendo con los más altos estándares técnicos y
			estéticos.
		</p>
	</div>
</div>

<div class="px-8 py-10">
	<h1 class="text-3xl font-bold text-[#1b68a9] mb-8 text-center py-16">¡Elige a los expertos!</h1>
</div>
