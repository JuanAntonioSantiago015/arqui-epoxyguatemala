<script lang="ts">
	import { pageTitle } from '$lib/stores/pageTitle';
	pageTitle.set('Limpieza y estilo para cada espacio');
</script>

<div class="px-8 py-10">
	<div class="carousel w-1250 h-[650px]">
		<div id="slide1" class="carousel-item relative w-full">
			<video class="w-full" controls loop playsinline>
				<source src="/img/Vídeo sin título ‐ Hecho con Clipchamp (21).mp4" type="video/mp4" />
				Tu navegador no soporta el elemento de video.
			</video>

			<div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
				<a href="#slide4" class="btn btn-circle">❮</a>
				<a href="#slide2" class="btn btn-circle">❯</a>
			</div>
		</div>
		<div id="slide2" class="carousel-item relative w-full">
			<img
				src="/img/529480711_742973968491535_3701260859366488048_n.jpg"
				class="w-full"
				alt="portada"
			/>
			<div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
				<a href="#slide1" class="btn btn-circle">❮</a>
				<a href="#slide3" class="btn btn-circle">❯</a>
			</div>
		</div>
		<div id="slide3" class="carousel-item relative w-full">
			<img src="/img/001.jpg" class="w-full" alt="portada" />
			<div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
				<a href="#slide2" class="btn btn-circle">❮</a>
				<a href="#slide4" class="btn btn-circle">❯</a>
			</div>
		</div>
		<div id="slide4" class="carousel-item relative w-full">
			<img src="/img/cr.jpg" class="w-full" alt="portada" />
			<div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
				<a href="#slide3" class="btn btn-circle">❮</a>
				<a href="#slide1" class="btn btn-circle">❯</a>
			</div>
		</div>
	</div>

	<h1 class="text-4xl font-bold mb-8 text-center py-16">Aplicación de resina epóxica en:</h1>

	<div class="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
		<!-- Tarjeta 1 -->
		<div class="relative w-[336px] h-[448px] shadow-sm">
			<img src="/img/types/clinic.jpg" alt="clínicas" class="w-full h-full object-cover" />
			<div
				class="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white text-center p-4"
			>
				<h2 class="text-4xl font-bold">Pisos de clínicas</h2>
				<a
					class="btn mt-4 bg-[#0f3a5d] hover:bg-[#0d314e] text-white"
					href="https://wa.me/50255272948"
				>
					Cotizar
				</a>
			</div>
		</div>

		<!-- Tarjeta 2 -->
		<div class="relative w-[336px] h-[448px] shadow-sm">
			<img src="/img/types/industry.jpg" alt="bodegas" class="w-full h-full object-cover" />
			<div
				class="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white text-center p-4"
			>
				<h2 class="text-4xl font-bold">Pisos de bodegas</h2>
				<a
					class="btn mt-4 bg-[#0f3a5d] hover:bg-[#0d314e] text-white"
					href="https://wa.me/50255272948"
				>
					Cotizar
				</a>
			</div>
		</div>

		<!-- Tarjeta 3 -->
		<div class="relative w-[336px] h-[448px] shadow-sm">
			<img src="/img/types/pitch.jpg" alt="canchas" class="w-full h-full object-cover" />
			<div
				class="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white text-center p-4"
			>
				<h2 class="text-4xl font-bold">Y más...</h2>
				<a class="btn mt-4 bg-[#0f3a5d] hover:bg-[#0d314e] text-white" href="/services">
					Conoce nuestros servicios
				</a>
			</div>
		</div>
	</div>
</div>
