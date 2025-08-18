<script lang="ts">
	import { pageTitle } from '$lib/stores/pageTitle';
	pageTitle.set('Proyectos');
</script>

<div class="px-8 py-10">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
		<!-- Tarjeta 1 -->
		<div class="card bg-base-100 shadow-sm">
			<figure>
				<div class="carousel w-full h-[448px]">
					<div
						id="slide1-1"
						class="carousel-item relative w-full h-full flex justify-center items-center"
					>
						<img src="/img/Herrera Llerandi/000.jpg" class="scale-75 object-cover" />
						<div
							class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-lg text-sm"
						>
							1 / 4
						</div>
						<a href="#slide1-4" class="btn btn-circle absolute left-2 top-1/2 -translate-y-1/2">❮</a
						>
						<a href="#slide1-2" class="btn btn-circle absolute right-2 top-1/2 -translate-y-1/2"
							>❯</a
						>
					</div>

					<div
						id="slide1-2"
						class="carousel-item relative w-full h-full flex justify-center items-center"
					>
						<img src="/img/Herrera Llerandi/00.jpg" class="scale-75 object-cover" />
						<div
							class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-lg text-sm"
						>
							2 / 4
						</div>
						<a href="#slide1-1" class="btn btn-circle absolute left-2 top-1/2 -translate-y-1/2">❮</a
						>
						<a href="#slide1-3" class="btn btn-circle absolute right-2 top-1/2 -translate-y-1/2"
							>❯</a
						>
					</div>

					<div
						id="slide1-3"
						class="carousel-item relative w-full h-full flex justify-center items-center"
					>
						<img src="/img/Herrera Llerandi/01.jpg" class="scale-75 object-cover" />
						<div
							class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-lg text-sm"
						>
							3 / 4
						</div>
						<a href="#slide1-2" class="btn btn-circle absolute left-2 top-1/2 -translate-y-1/2">❮</a
						>
						<a href="#slide1-4" class="btn btn-circle absolute right-2 top-1/2 -translate-y-1/2"
							>❯</a
						>
					</div>

					<div
						id="slide1-4"
						class="carousel-item relative w-full h-full flex justify-center items-center"
					>
						<img src="/img/Herrera Llerandi/02.jpg" class="scale-75 object-cover" />
						<div
							class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-lg text-sm"
						>
							4 / 4
						</div>
						<a href="#slide1-3" class="btn btn-circle absolute left-2 top-1/2 -translate-y-1/2">❮</a
						>
						<a href="#slide1-1" class="btn btn-circle absolute right-2 top-1/2 -translate-y-1/2"
							>❯</a
						>
					</div>
				</div>
			</figure>
			<div class="card-body text-center">
				<h2 class="text-center text-2xl font-bold mb-4">Herrera Llerandi</h2>
				<p>Septiembre de 2023</p>
			</div>
		</div>

		<!-- Tarjeta 5 -->
		<div class="card bg-base-100 shadow-sm">
			<figure>
				<div class="carousel w-full h-[448px]">
					<div
						id="slide5-1"
						class="carousel-item relative w-full h-full flex justify-center items-center"
					>
						<img src="/img/ElRosario/000.jpg" class="scale-75 object-cover" />
						<div
							class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-lg text-sm"
						>
							1 / 6
						</div>
						<a href="#slide5-6" class="btn btn-circle absolute left-2 top-1/2 -translate-y-1/2">❮</a
						>
						<a href="#slide5-2" class="btn btn-circle absolute right-2 top-1/2 -translate-y-1/2"
							>❯</a
						>
					</div>

					<div
						id="slide5-2"
						class="carousel-item relative w-full h-full flex justify-center items-center"
					>
						<img src="/img/ElRosario/00.jpg" class="scale-75 object-cover" />
						<div
							class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-lg text-sm"
						>
							2 / 6
						</div>
						<a href="#slide5-1" class="btn btn-circle absolute left-2 top-1/2 -translate-y-1/2">❮</a
						>
						<a href="#slide5-3" class="btn btn-circle absolute right-2 top-1/2 -translate-y-1/2"
							>❯</a
						>
					</div>

					<div
						id="slide5-3"
						class="carousel-item relative w-full h-full flex justify-center items-center"
					>
						<img src="/img/ElRosario/01.jpg" class="scale-75 object-cover" />
						<div
							class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-lg text-sm"
						>
							3 / 6
						</div>
						<a href="#slide5-2" class="btn btn-circle absolute left-2 top-1/2 -translate-y-1/2">❮</a
						>
						<a href="#slide5-4" class="btn btn-circle absolute right-2 top-1/2 -translate-y-1/2"
							>❯</a
						>
					</div>

					<div
						id="slide5-4"
						class="carousel-item relative w-full h-full flex justify-center items-center"
					>
						<img src="/img/ElRosario/02.jpg" class="scale-75 object-cover" />
						<div
							class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-lg text-sm"
						>
							4 / 6
						</div>
						<a href="#slide5-3" class="btn btn-circle absolute left-2 top-1/2 -translate-y-1/2">❮</a
						>
						<a href="#slide5-5" class="btn btn-circle absolute right-2 top-1/2 -translate-y-1/2"
							>❯</a
						>
					</div>

					<div
						id="slide5-5"
						class="carousel-item relative w-full h-full flex justify-center items-center"
					>
						<img src="/img/ElRosario/03.jpg" class="scale-75 object-cover" />
						<div
							class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-lg text-sm"
						>
							5 / 6
						</div>
						<a href="#slide5-4" class="btn btn-circle absolute left-2 top-1/2 -translate-y-1/2">❮</a
						>
						<a href="#slide5-6" class="btn btn-circle absolute right-2 top-1/2 -translate-y-1/2"
							>❯</a
						>
					</div>

					<div
						id="slide5-6"
						class="carousel-item relative w-full h-full flex justify-center items-center"
					>
						<img src="/img/ElRosario/04.jpg" class="scale-75 object-cover" />
						<div
							class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-lg text-sm"
						>
							6 / 6
						</div>
						<a href="#slide5-5" class="btn btn-circle absolute left-2 top-1/2 -translate-y-1/2">❮</a
						>
						<a href="#slide5-1" class="btn btn-circle absolute right-2 top-1/2 -translate-y-1/2"
							>❯</a
						>
					</div>
				</div>
			</figure>
			<div class="card-body text-center">
				<h2 class="text-center text-2xl font-bold mb-4">Centro Médico Integral El Rosario</h2>
				<p>Septiembre de 2024</p>
			</div>
		</div>

		<!-- Tarjeta 3 -->
		<div class="card bg-base-100 shadow-sm">
			<figure>
				<div class="carousel w-full h-[448px]">
					<div
						id="slide3-1"
						class="carousel-item relative w-full h-full flex justify-center items-center"
					>
						<img src="/img/Nuestra Se;ora de Guadalupe/00.jpg" class="scale-75 object-cover" />
						<div
							class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-lg text-sm"
						>
							1 / 5
						</div>
						<a href="#slide3-5" class="btn btn-circle absolute left-2 top-1/2 -translate-y-1/2">❮</a
						>
						<a href="#slide3-2" class="btn btn-circle absolute right-2 top-1/2 -translate-y-1/2"
							>❯</a
						>
					</div>
					<div
						id="slide3-2"
						class="carousel-item relative w-full h-full flex justify-center items-center"
					>
						<img src="/img/Nuestra Se;ora de Guadalupe/01.jpg" class="scale-75 object-cover" />
						<div
							class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-lg text-sm"
						>
							2 / 5
						</div>
						<a href="#slide3-1" class="btn btn-circle absolute left-2 top-1/2 -translate-y-1/2">❮</a
						>
						<a href="#slide3-3" class="btn btn-circle absolute right-2 top-1/2 -translate-y-1/2"
							>❯</a
						>
					</div>
					<div
						id="slide3-3"
						class="carousel-item relative w-full h-full flex justify-center items-center"
					>
						<img src="/img/Nuestra Se;ora de Guadalupe/02.jpg" class="scale-75 object-cover" />
						<div
							class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-lg text-sm"
						>
							3 / 5
						</div>
						<a href="#slide3-2" class="btn btn-circle absolute left-2 top-1/2 -translate-y-1/2">❮</a
						>
						<a href="#slide3-4" class="btn btn-circle absolute right-2 top-1/2 -translate-y-1/2"
							>❯</a
						>
					</div>
					<div
						id="slide3-4"
						class="carousel-item relative w-full h-full flex justify-center items-center"
					>
						<img src="/img/Nuestra Se;ora de Guadalupe/03.jpg" class="scale-75 object-cover" />
						<div
							class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-lg text-sm"
						>
							4 / 5
						</div>
						<a href="#slide3-3" class="btn btn-circle absolute left-2 top-1/2 -translate-y-1/2">❮</a
						>
						<a href="#slide3-5" class="btn btn-circle absolute right-2 top-1/2 -translate-y-1/2"
							>❯</a
						>
					</div>
					<div
						id="slide3-5"
						class="carousel-item relative w-full h-full flex justify-center items-center"
					>
						<img src="/img/Nuestra Se;ora de Guadalupe/04.jpg" class="scale-75 object-cover" />
						<div
							class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-lg text-sm"
						>
							5 / 5
						</div>
						<a href="#slide3-4" class="btn btn-circle absolute left-2 top-1/2 -translate-y-1/2">❮</a
						>
						<a href="#slide3-1" class="btn btn-circle absolute right-2 top-1/2 -translate-y-1/2"
							>❯</a
						>
					</div>
				</div>
			</figure>
			<div class="card-body text-center">
				<h2 class="text-center text-2xl font-bold mb-4">Nuestra Señora de Guadalupe</h2>
				<p>Diciembre de 2024</p>
			</div>
		</div>

		<!-- Tarjeta 4 -->
		<div class="card bg-base-100 shadow-sm">
			<figure>
				<div class="carousel w-full h-[448px]">
					<div
						id="slide4-1"
						class="carousel-item relative w-full h-full flex justify-center items-center"
					>
						<img src="/img/cr0.jpg" class="scale-75 object-cover" />
						<div
							class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-lg text-sm"
						>
							1 / 2
						</div>
						<a href="#slide4-2" class="btn btn-circle absolute left-2 top-1/2 -translate-y-1/2">❮</a
						>
						<a href="#slide4-2" class="btn btn-circle absolute right-2 top-1/2 -translate-y-1/2"
							>❯</a
						>
					</div>
					<div
						id="slide4-2"
						class="carousel-item relative w-full h-full flex justify-center items-center"
					>
						<img src="/img/cr.jpg" class="scale-75 object-cover" />
						<div
							class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-lg text-sm"
						>
							2 / 2
						</div>
						<a href="#slide4-1" class="btn btn-circle absolute left-2 top-1/2 -translate-y-1/2">❮</a
						>
						<a href="#slide4-1" class="btn btn-circle absolute right-2 top-1/2 -translate-y-1/2"
							>❯</a
						>
					</div>
				</div>
			</figure>
			<div class="card-body text-center">
				<h2 class="text-center text-2xl font-bold mb-4">San José Costa Rica</h2>
				<p>Diciembre de 2024</p>
			</div>
		</div>

		<!-- Tarjeta 2 -->
		<div class="card bg-base-100 shadow-sm">
			<figure>
				<div class="carousel w-full h-[448px]">
					<div
						id="slide2-1"
						class="carousel-item relative w-full h-full flex justify-center items-center"
					>
						<img src="/img/Moscati/000.jpg" class="scale-75 object-cover" />
						<div
							class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-lg text-sm"
						>
							1 / 8
						</div>
						<a href="#slide2-8" class="btn btn-circle absolute left-2 top-1/2 -translate-y-1/2">❮</a
						>
						<a href="#slide2-2" class="btn btn-circle absolute right-2 top-1/2 -translate-y-1/2"
							>❯</a
						>
					</div>

					<div
						id="slide2-2"
						class="carousel-item relative w-full h-full flex justify-center items-center"
					>
						<img src="/img/Moscati/00.jpg" class="scale-75 object-cover" />
						<div
							class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-lg text-sm"
						>
							2 / 8
						</div>
						<a href="#slide2-1" class="btn btn-circle absolute left-2 top-1/2 -translate-y-1/2">❮</a
						>
						<a href="#slide2-3" class="btn btn-circle absolute right-2 top-1/2 -translate-y-1/2"
							>❯</a
						>
					</div>

					<!-- Slide 3 -->
					<div
						id="slide2-3"
						class="carousel-item relative w-full h-full flex justify-center items-center"
					>
						<img src="/img/Moscati/01.jpg" class="scale-75 object-cover" />
						<div
							class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-lg text-sm"
						>
							3 / 8
						</div>
						<a href="#slide2-2" class="btn btn-circle absolute left-2 top-1/2 -translate-y-1/2">❮</a
						>
						<a href="#slide2-4" class="btn btn-circle absolute right-2 top-1/2 -translate-y-1/2"
							>❯</a
						>
					</div>

					<!-- Slide 4 -->
					<div
						id="slide2-4"
						class="carousel-item relative w-full h-full flex justify-center items-center"
					>
						<img src="/img/Moscati/02.jpg" class="scale-75 object-cover" />
						<div
							class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-lg text-sm"
						>
							4 / 8
						</div>
						<a href="#slide2-3" class="btn btn-circle absolute left-2 top-1/2 -translate-y-1/2">❮</a
						>
						<a href="#slide2-5" class="btn btn-circle absolute right-2 top-1/2 -translate-y-1/2"
							>❯</a
						>
					</div>

					<!-- Slide 5 -->
					<div
						id="slide2-5"
						class="carousel-item relative w-full h-full flex justify-center items-center"
					>
						<img src="/img/Moscati/03.jpg" class="scale-75 object-cover" />
						<div
							class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-lg text-sm"
						>
							5 / 8
						</div>
						<a href="#slide2-4" class="btn btn-circle absolute left-2 top-1/2 -translate-y-1/2">❮</a
						>
						<a href="#slide2-6" class="btn btn-circle absolute right-2 top-1/2 -translate-y-1/2"
							>❯</a
						>
					</div>

					<!-- Slide 6 -->
					<div
						id="slide2-6"
						class="carousel-item relative w-full h-full flex justify-center items-center"
					>
						<img src="/img/Moscati/04.jpg" class="scale-75 object-cover" />
						<div
							class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-lg text-sm"
						>
							6 / 8
						</div>
						<a href="#slide2-5" class="btn btn-circle absolute left-2 top-1/2 -translate-y-1/2">❮</a
						>
						<a href="#slide2-7" class="btn btn-circle absolute right-2 top-1/2 -translate-y-1/2"
							>❯</a
						>
					</div>

					<!-- Slide 7 -->
					<div
						id="slide2-7"
						class="carousel-item relative w-full h-full flex justify-center items-center"
					>
						<img src="/img/Moscati/05.jpg" class="scale-75 object-cover" />
						<div
							class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-lg text-sm"
						>
							7 / 8
						</div>
						<a href="#slide2-6" class="btn btn-circle absolute left-2 top-1/2 -translate-y-1/2">❮</a
						>
						<a href="#slide2-8" class="btn btn-circle absolute right-2 top-1/2 -translate-y-1/2"
							>❯</a
						>
					</div>

					<!-- Slide 8 -->
					<div
						id="slide2-8"
						class="carousel-item relative w-full h-full flex justify-center items-center"
					>
						<img src="/img/Moscati/07.jpg" class="scale-75 object-cover" />
						<div
							class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-lg text-sm"
						>
							8 / 8
						</div>
						<a href="#slide2-7" class="btn btn-circle absolute left-2 top-1/2 -translate-y-1/2">❮</a
						>
						<a href="#slide2-1" class="btn btn-circle absolute right-2 top-1/2 -translate-y-1/2"
							>❯</a
						>
					</div>
				</div>
			</figure>
			<div class="card-body text-center">
				<h2 class="text-center text-2xl font-bold mb-4">Hospital San José Moscati</h2>
				<p>Marzo de 2025</p>
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

<style>
	.carousel {
		overflow-y: hidden !important;
	}
</style>
