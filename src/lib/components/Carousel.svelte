<script lang="ts">
	// Carousel premium + ligero:
	// - Lazy loading real de imágenes
	// - Aspect ratio consistente
	// - Overlay/controles modernos
	// - Sin "scale-75" (eso bajaba calidad percibida)
	// - Compatible 100% con su uso actual: <Carousel fotos={...} id="..." />

	export let fotos: string[] = [];
	export let id: string; // para diferenciar carouseles

	// Helper: determina si la imagen ya viene con extensión optimizada / path
	const getAlt = (src: string, index: number) => {
		const file = src.split('/').pop() ?? 'imagen';
		return `Proyecto ${id} - ${file} (${index + 1} de ${fotos.length})`;
	};
</script>

<div class="carousel w-full rounded-2xl overflow-hidden bg-base-200/40">
	{#each fotos as foto, i (foto)}
		<div
			id={"slide-" + id + "-" + (i + 1)}
			class="carousel-item relative w-full flex items-center justify-center"
		>
			<!-- Imagen -->
			<img
				src={foto}
				alt={getAlt(foto, i)}
				class="w-full h-[260px] md:h-[448px] object-cover"
				loading={i === 0 ? 'eager' : 'lazy'}
				decoding="async"
				fetchpriority={i === 0 ? 'high' : 'auto'}
				draggable="false"
			/>

			<!-- Overlay sutil para look premium -->
			<div class="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/35 via-black/5 to-transparent"></div>

			<!-- Indicador -->
			<div
				class="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-white/15 bg-black/55 px-3 py-1 text-xs text-white backdrop-blur-md"
			>
				{i + 1} / {fotos.length}
			</div>

			<!-- Botones (ghost para corporativo) -->
			<a
				href={`#slide-${id}-${i === 0 ? fotos.length : i}`}
				class="btn btn-circle btn-ghost absolute left-2 top-1/2 -translate-y-1/2 text-white hover:bg-black/30"
				aria-label="Anterior"
			>
				❮
			</a>
			<a
				href={`#slide-${id}-${i === fotos.length - 1 ? 1 : i + 2}`}
				class="btn btn-circle btn-ghost absolute right-2 top-1/2 -translate-y-1/2 text-white hover:bg-black/30"
				aria-label="Siguiente"
			>
				❯
			</a>
		</div>
	{/each}
</div>

<style>
	.carousel {
		overflow-y: hidden !important;
	}
</style>
