<script lang="ts">
	export let fotos: string[];
	export let id: string; // para diferenciar carouseles
</script>

<div class="carousel w-full h-[448px]">
	{#each fotos as foto, i}
		<div
			id="slide-{id}-{i + 1}"
			class="carousel-item relative w-full h-full flex justify-center items-center"
		>
			<img src={foto} class="scale-75 object-cover" />

			<!-- Indicador -->
			<div
				class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-lg text-sm"
			>
				{i + 1} / {fotos.length}
			</div>

			<!-- Botones -->
			<a
				href={`#slide-${id}-${i === 0 ? fotos.length : i}`}
				class="btn btn-circle absolute left-2 top-1/2 -translate-y-1/2">❮</a
			>
			<a
				href={`#slide-${id}-${i === fotos.length - 1 ? 1 : i + 2}`}
				class="btn btn-circle absolute right-2 top-1/2 -translate-y-1/2">❯</a
			>
		</div>
	{/each}
</div>

<style>
	.carousel {
		overflow-y: hidden !important;
	}
</style>
