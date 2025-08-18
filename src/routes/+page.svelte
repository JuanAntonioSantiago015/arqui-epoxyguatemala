<script lang="ts">
	import { pageTitle } from '$lib/stores/pageTitle';
	pageTitle.set('Limpieza y Estilo Para Cada Espacio');
</script>

<div class="px-8 py-10">
	<div class="carousel w-full h-[300px] md:h-[650px]">
		<!-- Slide 1 - Video -->
		<div id="slide1" class="carousel-item relative w-full flex justify-center items-center">
			<video class="w-full h-full object-contain bg-black" controls loop playsinline>
				<source src="/img/Vídeo sin título ‐ Hecho con Clipchamp (21).mp4" type="video/mp4" />
				Tu navegador no soporta el elemento de video.
			</video>
			<div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
				<a href="#slide4" class="btn btn-circle">❮</a>
				<a href="#slide2" class="btn btn-circle">❯</a>
			</div>
		</div>

		<!-- Slide 2 -->
		<div id="slide2" class="carousel-item relative w-full">
			<img
				src="/img/529480711_742973968491535_3701260859366488048_n.jpg"
				class="w-full h-full object-cover"
				alt="portada"
			/>
			<div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
				<a href="#slide1" class="btn btn-circle">❮</a>
				<a href="#slide3" class="btn btn-circle">❯</a>
			</div>
		</div>

		<!-- Slide 3 -->
		<div id="slide3" class="carousel-item relative w-full">
			<img src="/img/001.jpg" class="w-full h-full object-cover" alt="portada" />
			<div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
				<a href="#slide2" class="btn btn-circle">❮</a>
				<a href="#slide4" class="btn btn-circle">❯</a>
			</div>
		</div>

		<!-- Slide 4 -->
		<div id="slide4" class="carousel-item relative w-full">
			<img src="/img/cr.jpg" class="w-full h-full object-cover" alt="portada" />
			<div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
				<a href="#slide3" class="btn btn-circle">❮</a>
				<a href="#slide1" class="btn btn-circle">❯</a>
			</div>
		</div>
	</div>

	<h1 class="text-4xl font-bold mb-8 text-center py-16">
		Aplicación de Resina Epóxica Grado Quirúrgico e Industrial En:
	</h1>

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
					target="_blank"
					href="https://wa.me/50255272948?text=Hola,%20necesito%20una%20cotización%20para%20Quirófano."
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
					href="https://wa.me/50255272948?text=Hola,%20necesito%20una%20cotización%20para%20piso%20grado%20industrial."
					target="_blank"
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

<!-- Sección comparativa: Resina Epóxica vs Pintura Epóxica -->
<section class="w-full bg-white py-12">
	<div class="mx-auto max-w-6xl px-4">
		<!-- Encabezado -->
		<div class="text-center mb-10">
			<h2 class="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1b68a9]">
				Resina Epóxica vrs. Pintura Epóxica
			</h2>
			<p class="mt-3 text-gray-600">
				Comparación visual de desempeño en aplicaciones de pisos y recubrimientos.
			</p>
		</div>

		<!-- Cinta de ganador -->
		<div class="relative mb-6">
			<div
				class="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-xs md:text-sm px-4 py-1 rounded-full shadow"
			>
				🏆 Opción recomendada: Resina epóxica
			</div>
		</div>

		<!-- Tabla comparativa -->
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
			<!-- Columna izquierda: criterios -->
			<div class="hidden lg:block">
				<div class="h-full rounded-2xl bg-gray-50 p-6 border border-gray-200">
					<h3 class="font-semibold text-gray-700 mb-4">Criterios</h3>
					<ul class="space-y-5 text-gray-700">
						<li class="flex items-center gap-3">
							<span class="text-xl">🧱</span> Resistencia mecánica
						</li>
						<li class="flex items-center gap-3">
							<span class="text-xl">🧪</span> Resistencia química
						</li>
						<li class="flex items-center gap-3"><span class="text-xl">🕑</span> Durabilidad</li>
						<li class="flex items-center gap-3"><span class="text-xl">🚿</span> Fácil limpieza</li>
						<li class="flex items-center gap-3">
							<span class="text-xl">✨</span> Acabado y estética
						</li>
						<li class="flex items-center gap-3">
							<span class="text-xl">🔧</span> Espesor / Autonivelado
						</li>
						<li class="flex items-center gap-3"><span class="text-xl">🛠️</span> Reparabilidad</li>
						<li class="flex items-center gap-3">
							<span class="text-xl">⏱️</span> Tiempo de servicio* (curado)
						</li>
						<li class="flex items-center gap-3">
							<span class="text-xl">💰</span> Costo total de vida útil
						</li>
					</ul>
					<p class="mt-6 text-xs text-gray-500">
						*Tiempo típico para volver a uso ligero; puede variar por temperatura y sistema.
					</p>
				</div>
			</div>

			<!-- Resina epóxica (ganador) -->
			<div class="rounded-2xl border-2 border-emerald-500 bg-white shadow-sm p-6 flex flex-col">
				<div class="flex items-center justify-between mb-4">
					<h3 class="text-2xl font-bold text-gray-800">Resina epóxica</h3>
					<span
						class="inline-flex items-center gap-2 text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full text-sm"
						>Mejor desempeño
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-4 w-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 13l4 4L19 7"
							/></svg
						>
					</span>
				</div>

				<!-- Puntos / barras -->
				<div class="space-y-5 text-sm">
					<!-- Utilidad: usa data-* para valores si deseas animar con JS -->
					<div>
						<div class="flex items-center justify-between mb-1">
							<span class="text-gray-700">Resistencia mecánica</span><span
								class="font-semibold text-emerald-700">★★★★★</span
							>
						</div>
						<div class="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
							<div class="h-full w-[100%] bg-emerald-500"></div>
						</div>
					</div>
					<div>
						<div class="flex items-center justify-between mb-1">
							<span class="text-gray-700">Resistencia química</span><span
								class="font-semibold text-emerald-700">★★★★★</span
							>
						</div>
						<div class="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
							<div class="h-full w-[100%] bg-emerald-500"></div>
						</div>
					</div>
					<div>
						<div class="flex items-center justify-between mb-1">
							<span class="text-gray-700">Durabilidad</span><span
								class="font-semibold text-emerald-700">★★★★★</span
							>
						</div>
						<div class="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
							<div class="h-full w-[100%] bg-emerald-500"></div>
						</div>
					</div>
					<div>
						<div class="flex items-center justify-between mb-1">
							<span class="text-gray-700">Fácil limpieza</span><span
								class="font-semibold text-emerald-700">★★★★★</span
							>
						</div>
						<div class="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
							<div class="h-full w-[100%] bg-emerald-500"></div>
						</div>
					</div>
					<div>
						<div class="flex items-center justify-between mb-1">
							<span class="text-gray-700">Acabado y estética</span><span
								class="font-semibold text-emerald-700">★★★★★</span
							>
						</div>
						<div class="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
							<div class="h-full w-[100%] bg-emerald-500"></div>
						</div>
					</div>
					<div>
						<div class="flex items-center justify-between mb-1">
							<span class="text-gray-700">Espesor / Autonivelado</span><span
								class="font-semibold text-emerald-700">★★★★★</span
							>
						</div>
						<div class="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
							<div class="h-full w-[100%] bg-emerald-500"></div>
						</div>
					</div>
					<div>
						<div class="flex items-center justify-between mb-1">
							<span class="text-gray-700">Reparabilidad</span><span
								class="font-semibold text-emerald-700">★★★★★</span
							>
						</div>
						<div class="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
							<div class="h-full w-[100%] bg-emerald-500"></div>
						</div>
					</div>
					<div>
						<div class="flex items-center justify-between mb-1">
							<span class="text-gray-700">Tiempo de servicio*</span><span
								class="font-semibold text-emerald-700">★★★★★</span
							>
						</div>
						<div class="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
							<div class="h-full w-[100%] bg-emerald-500"></div>
						</div>
						<p class="mt-1 text-xs text-gray-500">
							Curado típico 24–48 h (uso ligero), 5–7 días (químicos pesados).
						</p>
					</div>
					<div>
						<div class="flex items-center justify-between mb-1">
							<span class="text-gray-700">Costo total de vida útil</span><span
								class="font-semibold text-emerald-700">★★★★★</span
							>
						</div>
						<div class="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
							<div class="h-full w-[100%] bg-emerald-500"></div>
						</div>
						<p class="mt-1 text-xs text-gray-500">
							Mayor inversión inicial, menor costo a largo plazo.
						</p>
					</div>
				</div>

				<!-- Beneficios bullets -->
				<ul class="mt-6 space-y-2 text-sm text-gray-700">
					<li class="flex items-start gap-2">
						<span class="text-emerald-600">✔</span> Alto espesor (1–3 mm o más) y opción autonivelante.
					</li>
					<li class="flex items-start gap-2">
						<span class="text-emerald-600">✔</span> Excelente brillo/efecto espejo y opciones decorativas
						(flakes, metálicos).
					</li>
					<li class="flex items-start gap-2">
						<span class="text-emerald-600">✔</span> Mayor resistencia a abrasión, impactos y químicos.
					</li>
				</ul>
			</div>

			<!-- Pintura epóxica -->
			<div class="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 flex flex-col">
				<div class="flex items-center justify-between mb-4">
					<h3 class="text-2xl font-bold text-gray-800">Pintura epóxica</h3>
					<span
						class="inline-flex items-center gap-2 text-gray-700 bg-gray-50 border border-gray-200 px-3 py-1 rounded-full text-sm"
						>Buen costo inicial</span
					>
				</div>

				<div class="space-y-5 text-sm">
					<div>
						<div class="flex items-center justify-between mb-1">
							<span class="text-gray-700">Resistencia mecánica</span><span class="font-semibold"
								>★☆☆☆☆</span
							>
						</div>
						<div class="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
							<div class="h-full w-[15%] bg-gray-400"></div>
						</div>
					</div>
					<div>
						<div class="flex items-center justify-between mb-1">
							<span class="text-gray-700">Resistencia química</span><span class="font-semibold"
								>★☆☆☆☆</span
							>
						</div>
						<div class="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
							<div class="h-full w-[15%] bg-gray-400"></div>
						</div>
					</div>
					<div>
						<div class="flex items-center justify-between mb-1">
							<span class="text-gray-700">Durabilidad</span><span class="font-semibold">★★★☆☆</span>
						</div>
						<div class="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
							<div class="h-full w-[50%] bg-gray-400"></div>
						</div>
					</div>
					<div>
						<div class="flex items-center justify-between mb-1">
							<span class="text-gray-700">Fácil limpieza</span><span class="font-semibold"
								>★★☆☆☆</span
							>
						</div>
						<div class="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
							<div class="h-full w-[20%] bg-gray-400"></div>
						</div>
					</div>
					<div>
						<div class="flex items-center justify-between mb-1">
							<span class="text-gray-700">Acabado y estética</span><span class="font-semibold"
								>★★★☆☆</span
							>
						</div>
						<div class="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
							<div class="h-full w-[60%] bg-gray-400"></div>
						</div>
					</div>
					<div>
						<div class="flex items-center justify-between mb-1">
							<span class="text-gray-700">Espesor / Autonivelado</span><span class="font-semibold"
								>★★☆☆☆</span
							>
						</div>
						<div class="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
							<div class="h-full w-[10%] bg-gray-400"></div>
						</div>
					</div>
					<div>
						<div class="flex items-center justify-between mb-1">
							<span class="text-gray-700">Reparabilidad</span><span class="font-semibold"
								>★★★☆☆</span
							>
						</div>
						<div class="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
							<div class="h-full w-[30%] bg-gray-400"></div>
						</div>
					</div>
					<div>
						<div class="flex items-center justify-between mb-1">
							<span class="text-gray-700">Tiempo de servicio*</span><span class="font-semibold"
								>★★★★☆</span
							>
						</div>
						<div class="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
							<div class="h-full w-[90%] bg-gray-400"></div>
						</div>
						<p class="mt-1 text-xs text-gray-500">
							Secado rápido al tacto; menor espesor y resistencia.
						</p>
					</div>
					<div>
						<div class="flex items-center justify-between mb-1">
							<span class="text-gray-700">Costo total de vida útil</span><span class="font-semibold"
								>★★★☆☆</span
							>
						</div>
						<div class="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
							<div class="h-full w-[60%] bg-gray-400"></div>
						</div>
						<p class="mt-1 text-xs text-gray-500">Bajo costo inicial, repintados más frecuentes.</p>
					</div>
				</div>

				<ul class="mt-6 space-y-2 text-sm text-gray-700">
					<li class="flex items-start gap-2">
						<span class="text-gray-600">•</span> Espesor menor (típ. 200–300 μm) y sin autonivelado real.
					</li>
					<li class="flex items-start gap-2">
						<span class="text-gray-600">•</span> Adecuada para áreas de tráfico moderado y presupuestos
						ajustados.
					</li>
				</ul>
			</div>
		</div>

		<!-- Callout final -->
		<div class="mt-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
			<div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
				<div>
					<h4 class="text-lg font-semibold text-emerald-800">¿Qué elegir?</h4>
					<p class="text-sm text-emerald-900">
						Para quirófanos, grado industrial, alimentos y alto tráfico: <span class="font-semibold"
							>Resina epóxica</span
						>
					</p>
				</div>
				<a
					href="https://wa.me/50255272948?text=¡Hola,%20quiero%20chatear%20con%20alguien%20!%20sistema%20epóxico%20ideal."
					target="_blank"
					class="inline-flex items-center justify-center rounded-xl border border-emerald-300 bg-white px-4 py-2 text-sm font-medium text-emerald-700 hover:bg-emerald-100"
				>
					Solicitar asesoría
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="ml-2 h-4 w-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 5l7 7-7 7"
						/></svg
					>
				</a>
			</div>
		</div>
	</div>
</section>
