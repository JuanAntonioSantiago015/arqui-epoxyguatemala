<script lang="ts">
	import { pageTitle } from '$lib/stores/pageTitle';
	pageTitle.set('Servicios');
</script>

<div class="px-8 py-10">
	<h1 class="text-4xl font-bold mb-8 text-center py-16">¿Qué Necesitas Cotizar Hoy?</h1>

	<!-- Grid de tarjetas -->
	<div class="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
		<!-- Tarjeta 1 -->
		<div class="card bg-base-100 image-full w-full max-w-[336px] shadow-sm">
			<figure>
				<img src="/img/types/clinic.jpg" alt="clínicas" class="w-full h-[448px] object-cover" />
			</figure>
			<div class="card-body flex flex-col">
				<h2 class="card-title">Pisos de clínicas</h2>
				<div class="card-actions mt-auto justify-end">
					<a
						class="btn bg-[#0f3a5d] hover:bg-[#0d314e] text-white"
						href="https://wa.me/50255272948?text=Hola,%20necesito%20una%20cotización%20para%20Quirófano."
						target="_blank"
					>
						Cotizar
					</a>
				</div>
			</div>
		</div>

		<!-- Tarjeta 2 -->
		<div class="card bg-base-100 image-full w-full max-w-[336px] shadow-sm">
			<figure>
				<img src="/img/types/industry.jpg" alt="bodegas" class="w-full h-[448px] object-cover" />
			</figure>
			<div class="card-body flex flex-col">
				<h2 class="card-title">Pisos de bodegas</h2>
				<div class="card-actions mt-auto justify-end">
					<a
						class="btn bg-[#0f3a5d] hover:bg-[#0d314e] text-white"
						href="https://wa.me/50255272948?text=Hola,%20necesito%20una%20cotización%20para%20piso%20grado%20industrial."
						target="_blank"
					>
						Cotizar
					</a>
				</div>
			</div>
		</div>

		<!-- Tarjeta 3 -->
		<div class="card bg-base-100 image-full w-full max-w-[336px] shadow-sm">
			<figure>
				<img src="/img/types/pitch.jpg" alt="canchas" class="w-full h-[448px] object-cover" />
			</figure>
			<div class="card-body flex flex-col">
				<h2 class="card-title">Canchas deportivas</h2>
				<div class="card-actions mt-auto justify-end">
					<a
						class="btn bg-[#0f3a5d] hover:bg-[#0d314e] text-white"
						href="https://wa.me/50255272948?text=Hola,%20necesito%20una%20cotización%20para%20canchas%20deportivas."
						target="_blank"
					>
						Cotizar
					</a>
				</div>
			</div>
		</div>

		<!-- Tarjeta 4 -->
		<div class="card bg-base-100 image-full w-full max-w-[336px] shadow-sm">
			<figure>
				<img src="/img/types/house.webp" alt="viviendas" class="w-full h-[448px] object-cover" />
			</figure>
			<div class="card-body flex flex-col">
				<h2 class="card-title">Vivienda</h2>
				<div class="card-actions mt-auto justify-end">
					<a
						class="btn bg-[#0f3a5d] hover:bg-[#0d314e] text-white"
						href="https://wa.me/50255272948?text=Hola,%20necesito%20una%20cotización%20para%20piso%20de%20viviendas."
						target="_blank"
					>
						Cotizar
					</a>
				</div>
			</div>
		</div>

		<!-- Tarjeta 5 -->
		<div class="card bg-base-100 image-full w-full max-w-[336px] shadow-sm">
			<figure>
				<img src="/img/types/wall.jpg" alt="paredes" class="w-full h-[448px] object-cover" />
			</figure>
			<div class="card-body flex flex-col">
				<h2 class="card-title">Paredes</h2>
				<div class="card-actions mt-auto justify-end">
					<a
						class="btn bg-[#0f3a5d] hover:bg-[#0d314e] text-white"
						href="https://wa.me/50255272948?text=Hola,%20necesito%20una%20cotización%20para%20paredes."
						target="_blank"
					>
						Cotizar
					</a>
				</div>
			</div>
		</div>

		<!-- Tarjeta 6 -->
		<div class="card bg-base-100 image-full w-full max-w-[336px] shadow-sm">
			<figure>
				<img
					src="/img/types/restaurant.webp"
					alt="restaurantes"
					class="w-full h-[448px] object-cover"
				/>
			</figure>
			<div class="card-body flex flex-col">
				<h2 class="card-title">Restaurantes grado alimenticio</h2>
				<div class="card-actions mt-auto justify-end">
					<a
						class="btn bg-[#0f3a5d] hover:bg-[#0d314e] text-white"
						href="https://wa.me/50255272948?text=Hola,%20necesito%20una%20cotización%20para%20piso%20de%20restaurante%20grado%20alimenticio."
						target="_blank"
					>
						Cotizar
					</a>
				</div>
			</div>
		</div>
	</div>

	<div class="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 py-8">
		<h1 class="text-3xl font-bold text-[#1b68a9] text-center md:text-left">
			Avalados por el Ministerio de Salud Pública y Asistencia Social -MSPAS-
		</h1>
		<img src="/img/mspas.png" alt="MSPAS" class="h-[60px]" />
	</div>

	<div class="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 py-8">
		<h1 class="text-3xl font-bold text-[#1b68a9] text-center md:text-left">
			Avalados por la Cámara de Construcción
		</h1>
		<img src="/img/camara.jpg" alt="Cámara de Construcción" class="h-[60px]" />
	</div>
</div>

<div
	class="bg-[#1b68a9] text-white px-10 py-12 flex flex-col md:flex-row items-center md:items-start gap-8 rounded-md w-full"
>
	<!-- Izquierda -->
	<div class="md:w-1/3 text-center md:text-left text-4xl font-semibold leading-relaxed">
		<h1>Higieniza tus áreas con nosotros</h1>
	</div>

	<!-- Derecha -->
	<div class="md:w-2/3">
		<p class="mb-6 text-base md:text-lg leading-relaxed">
			Somos expertos en la aplicación de resina epóxica de grado quirúrgico, industrial, alimenticio
			y artesanal en una gran cantidad de superficies como pisos de clínicas, pisos de bodegas,
			canchas, paredes, tops y muchos otros servicios.
		</p>
		<a
			href="https://wa.me/50255272948?text=¡Hola!%20Quiero%20chatear%20con%20alguien."
			target="_blank"
			class="inline-block bg-[#0f3a5d] hover:bg-[#0d314e] text-white px-6 py-3 rounded-md font-medium transition"
		>
			Obtén una cotización
		</a>
	</div>
</div>
