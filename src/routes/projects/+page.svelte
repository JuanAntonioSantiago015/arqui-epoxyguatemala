<script lang="ts">
	import { pageTitle } from '$lib/stores/pageTitle';
	import Carousel from '$lib/components/Carousel.svelte';

	pageTitle.set('Proyectos');

	type Media =
		| { kind: 'carousel'; fotos: string[] }
		| { kind: 'video'; src: string; poster?: string };

	type Project = {
		id: string;
		year: number;
		category: 'Clínico' | 'Industrial' | 'Deportivo' | 'Publicitario' | 'Institucional' | 'General';
		title: string;
		subtitle: string;
		location: string;
		media: Media;
		tags: string[];
	};

	// Helpers
	const categoryFromText = (text: string): Project['category'] => {
		const t = text.toLowerCase();
		if (t.includes('clínica') || t.includes('hospital') || t.includes('igss') || t.includes('sanatorio'))
			return 'Clínico';
		if (t.includes('bodega') || t.includes('industrial') || t.includes('parqueo') || t.includes('planta'))
			return 'Industrial';
		if (t.includes('cancha') || t.includes('deport')) return 'Deportivo';
		if (t.includes('publicitario') || t.includes('campana') || t.includes('navidad')) return 'Publicitario';
		return 'Institucional';
	};

	const inferYear = (title: string): number => {
		// Su archivo actual tiene una sección explícita "Proyectos 2026"
		// Todo lo anterior se considera 2025 (histórico) + el carrusel de Karen (2025).
		// Todo lo posterior al título 2026 es 2026.
		// Aquí asignamos manualmente con base a su estructura actual (ver arrays abajo).
		return 2025;
	};

	const unique = (arr: string[]) => Array.from(new Set(arr));

	// ====== DATA (migrado de su código actual, con estructura premium + buscador) ======
	const galleryProjects: Project[] = [
		{
			id: 'g-01-santa-rosa',
			year: 2025,
			category: 'Deportivo',
			title: 'Cancha deportiva con desempeño profesional',
			subtitle: 'Superficie uniforme y resistente para alto uso: control, tracción y presentación premium.',
			location: 'Santa Rosa, Guatemala',
			media: {
				kind: 'carousel',
				fotos: ['/img/Santa Rosa/000.jpg', '/img/Santa Rosa/001.jpg', '/img/Santa Rosa/002.jpg']
			},
			tags: ['Deportivo', 'Alto tránsito', 'Acabado premium']
		},
		{
			id: 'g-02-traumatologia-chiquimula',
			year: 2025,
			category: 'Clínico',
			title: 'Clínica de traumatología: higiene y control',
			subtitle: 'Acabado continuo y fácil de sanitizar para un entorno clínico exigente.',
			location: 'Chiquimula, Guatemala',
			media: {
				kind: 'carousel',
				fotos: [
					'/img/Chiquimula/000.jpg',
					'/img/Chiquimula/001.jpg',
					'/img/Chiquimula/002.jpg',
					'/img/Chiquimula/003.jpg',
					'/img/Chiquimula/004.jpg'
				]
			},
			tags: ['Clínico', 'Higiene', 'Resina epóxica']
		},
		{
			id: 'g-03-cancha-san-salvador',
			year: 2025,
			category: 'Deportivo',
			title: 'Cancha deportiva en San Salvador',
			subtitle: 'Resina epóxica grado deportivo: resistencia, estética y desempeño de nivel institucional.',
			location: 'San Salvador, El Salvador',
			media: {
				kind: 'carousel',
				fotos: [
					'/img/SanSalvador/000.jpg',
					'/img/SanSalvador/001.jpg',
					'/img/SanSalvador/002.jpg',
					'/img/SanSalvador/003.jpg',
					'/img/SanSalvador/004.jpg',
					'/img/SanSalvador/005.jpg'
				]
			},
			tags: ['Deportivo', 'Centroamérica', 'Alto tránsito']
		},
		{
			id: 'g-04-hospital-dr-eugenio',
			year: 2025,
			category: 'Clínico',
			title: 'Hospital privado: acabado clínico de alto nivel',
			subtitle: 'Superficie sellada, resistente y diseñada para limpieza rápida y control sanitario.',
			location: 'El Alto, Guatemala',
			media: {
				kind: 'carousel',
				fotos: [
					'/img/ElAlto/005.jpg',
					'/img/ElAlto/001.jpg',
					'/img/ElAlto/002.jpg',
					'/img/ElAlto/003.jpg',
					'/img/ElAlto/004.jpg',
					'/img/ElAlto/000.jpg'
				]
			},
			tags: ['Clínico', 'Institucional', 'Acabado premium']
		},
		{
			id: 'g-05-nueva-esperanza',
			year: 2025,
			category: 'Clínico',
			title: 'Hospital Nueva Esperanza: higiene y durabilidad',
			subtitle: 'Recubrimiento pensado para operación diaria: limpieza eficiente y resistencia real.',
			location: 'Sololá, Guatemala',
			media: {
				kind: 'carousel',
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
			tags: ['Clínico', 'Higiene', 'Sololá']
		},
		{
			id: 'g-06-hospital-del-lago',
			year: 2025,
			category: 'Clínico',
			title: 'Hospital del Lago: superficie continua',
			subtitle: 'Acabado institucional con control de limpieza y resistencia a uso intensivo.',
			location: 'Sololá, Guatemala',
			media: {
				kind: 'carousel',
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
			tags: ['Clínico', 'Higiene', 'Institucional']
		},
		{
			id: 'g-07-herrera-llerandi',
			year: 2025,
			category: 'Clínico',
			title: 'Herrera Llerandi: estándar médico-industrial',
			subtitle: 'Superficie sellada, estética premium y mantenimiento sencillo en entorno clínico.',
			location: 'Ciudad de Guatemala, Guatemala',
			media: {
				kind: 'carousel',
				fotos: [
					'/img/Herrera Llerandi/000.jpg',
					'/img/Herrera Llerandi/00.jpg',
					'/img/Herrera Llerandi/01.jpg',
					'/img/Herrera Llerandi/02.jpg'
				]
			},
			tags: ['Clínico', 'Ciudad de Guatemala', 'Acabado premium']
		},
		{
			id: 'g-08-el-salvador',
			year: 2025,
			category: 'Institucional',
			title: 'Proyecto regional: El Salvador',
			subtitle: 'Aplicación con enfoque institucional: resistencia, presentación y control de limpieza.',
			location: 'El Salvador, Centro América',
			media: {
				kind: 'carousel',
				fotos: ['/img/Salvador/000.jpg', '/img/Salvador/001.jpg', '/img/Salvador/002.jpg']
			},
			tags: ['Centroamérica', 'Institucional']
		},
		{
			id: 'g-09-el-rosario',
			year: 2025,
			category: 'Clínico',
			title: 'Centro Médico Integral El Rosario',
			subtitle: 'Acabado continuo con resistencia y limpieza rápida para operación clínica diaria.',
			location: 'Coatepeque, Guatemala',
			media: {
				kind: 'carousel',
				fotos: [
					'/img/ElRosario/000.jpg',
					'/img/ElRosario/00.jpg',
					'/img/ElRosario/01.jpg',
					'/img/ElRosario/02.jpg',
					'/img/ElRosario/03.jpg',
					'/img/ElRosario/04.jpg'
				]
			},
			tags: ['Clínico', 'Coatepeque', 'Higiene']
		},
		{
			id: 'g-10-guadalupe',
			year: 2025,
			category: 'Clínico',
			title: 'Nuestra Señora de Guadalupe',
			subtitle: 'Entorno clínico con acabado premium: higiene, resistencia y estética profesional.',
			location: 'Mazatenango, Guatemala',
			media: {
				kind: 'carousel',
				fotos: [
					'/img/Nuestra Se;ora de Guadalupe/00.jpg',
					'/img/Nuestra Se;ora de Guadalupe/01.jpg',
					'/img/Nuestra Se;ora de Guadalupe/02.jpg',
					'/img/Nuestra Se;ora de Guadalupe/03.jpg',
					'/img/Nuestra Se;ora de Guadalupe/04.jpg'
				]
			},
			tags: ['Clínico', 'Mazatenango', 'Institucional']
		},
		{
			id: 'g-11-eucaliptos',
			year: 2025,
			category: 'Clínico',
			title: 'Hospital Privado Los Eucaliptos',
			subtitle: 'Superficie sanitaria, durable y de alta presentación para operación hospitalaria.',
			location: 'Quetzaltenango, Guatemala',
			media: {
				kind: 'carousel',
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
			tags: ['Clínico', 'Quetzaltenango', 'Higiene']
		}
	];

	const solucionesKarenFotos: string[] = [
		'/img/SolucionesGinecologicasDraKaren/WhatsApp%20Image%202025-12-29%20at%209.46.18%20PM.jpeg',
		'/img/SolucionesGinecologicasDraKaren/WhatsApp%20Image%202025-12-29%20at%209.46.18%20PM%20(1).jpeg',
		'/img/SolucionesGinecologicasDraKaren/WhatsApp%20Image%202025-12-29%20at%209.46.18%20PM%20(2).jpeg',
		'/img/SolucionesGinecologicasDraKaren/WhatsApp%20Image%202025-12-29%20at%209.46.18%20PM%20(3).jpeg'
	];

	const specials: Project[] = [
		{
			id: 'sp-2025-karen-ruiz',
			year: 2025,
			category: 'Clínico',
			title: 'Soluciones Ginecológicas Dra. Karen Ruiz',
			subtitle: 'Acabado clínico: higiene, limpieza rápida y estética profesional para atención especializada.',
			location: 'Mazatenango, Suchitepéquez',
			media: { kind: 'carousel', fotos: solucionesKarenFotos },
			tags: ['Clínico', 'Mazatenango', 'Acabado premium']
		}
	];

	const videoProjects: Project[] = [
		{
			id: 'v-2025-peten',
			year: 2025,
			category: 'Institucional',
			title: 'Petén: proyecto en ejecución con estándar profesional',
			subtitle: 'Superficie lista para operación: resistencia, limpieza y presentación institucional.',
			location: 'Petén, Guatemala',
			media: { kind: 'video', src: '/videos/peten.mp4' },
			tags: ['Institucional', 'Petén']
		},
		{
			id: 'v-2025-clinica-godoy',
			year: 2025,
			category: 'Clínico',
			title: 'Clínica Godoy: acabado quirúrgico en Jalapa',
			subtitle: 'Diseñado para higiene y operación clínica: superficie sellada y fácil de sanitizar.',
			location: 'Jalapa, Guatemala',
			media: { kind: 'video', src: '/videos/ArquiEpoxy-Guatemala-ClínicaGodoy-Jalapa.mp4' },
			tags: ['Clínico', 'Jalapa']
		},
		{
			id: 'v-2025-santa-marta',
			year: 2025,
			category: 'Clínico',
			title: 'Sanatorio Santa Marta',
			subtitle: 'Aplicación clínica: limpieza eficiente, resistencia y presentación profesional.',
			location: 'Jalapa, Guatemala',
			media: { kind: 'video', src: '/videos/ArquiEpoxy-Guatemala-Jalapa.mp4' },
			tags: ['Clínico', 'Jalapa']
		},
		{
			id: 'v-2025-jalapaneco',
			year: 2025,
			category: 'Clínico',
			title: 'Sanatorio Centro Médico Jalapaneco',
			subtitle: 'Acabado clínico de alto desempeño con control sanitario y fácil mantenimiento.',
			location: 'Jalapa, Guatemala',
			media: { kind: 'video', src: '/videos/Sanatorio-Centro-Medico-Jalapaneco.mp4' },
			tags: ['Clínico', 'Jalapa']
		},
		{
			id: 'v-2025-igss',
			year: 2025,
			category: 'Institucional',
			title: 'IGSS: superficie institucional con resistencia real',
			subtitle: 'Pensado para operación continua: limpieza rápida, durabilidad y acabado profesional.',
			location: '9A Calle 7-55, Zona 9, Guatemala',
			media: { kind: 'video', src: '/videos/ArquiEpoxyHospiIgss.mp4' },
			tags: ['Institucional', 'IGSS', 'Ciudad de Guatemala']
		},
		{
			id: 'v-2025-salvador',
			year: 2025,
			category: 'Institucional',
			title: 'San Salvador: aplicación regional de alto nivel',
			subtitle: 'Resistencia, estética y operación institucional con superficie continua.',
			location: 'San Salvador, El Salvador',
			media: { kind: 'video', src: '/videos/ArquiEpoxySalvador.mp4' },
			tags: ['Centroamérica', 'Institucional']
		},
		{
			id: 'v-2025-genesaret',
			year: 2025,
			category: 'Clínico',
			title: 'Clínica Médica Genesaret',
			subtitle: 'Superficie higiénica y durable para atención médica: limpieza rápida y acabado uniforme.',
			location: 'San Lucas Tolimán, Sololá',
			media: { kind: 'video', src: '/videos/ArquiEpoxyGenesaret.mp4' },
			tags: ['Clínico', 'Sololá']
		},
		{
			id: 'v-2025-pub-1',
			year: 2025,
			category: 'Publicitario',
			title: 'Resina epóxica grado quirúrgico, a detalle',
			subtitle: 'Acabado premium para clínicas y quirófanos: limpieza, brillo y confianza.',
			location: 'Video publicitario',
			media: { kind: 'video', src: '/videos/videopublicitario.mp4' },
			tags: ['Publicitario', 'Grado quirúrgico']
		},
		{
			id: 'v-2025-pub-2',
			year: 2025,
			category: 'Publicitario',
			title: 'Grado quirúrgico en acción',
			subtitle: 'Higiene, brillo y seguridad en cada paso: superficie sellada de alto nivel.',
			location: 'Video publicitario',
			media: { kind: 'video', src: '/videos/videopublicitario1.mp4' },
			tags: ['Publicitario', 'Grado quirúrgico']
		},
		{
			id: 'v-2025-industrial',
			year: 2025,
			category: 'Publicitario',
			title: 'Grado industrial para alto tráfico',
			subtitle: 'Solución para bodegas, plantas y parqueos: resistencia y limpieza eficiente.',
			location: 'Video publicitario',
			media: { kind: 'video', src: '/videos/videopublicitariogradoindustrial.mp4' },
			tags: ['Publicitario', 'Industrial']
		},
		{
			id: 'v-2025-doctora',
			year: 2025,
			category: 'Publicitario',
			title: 'Recomendado por profesionales de la salud',
			subtitle: 'Confianza clínica respaldada por resultados: superficies diseñadas para higiene.',
			location: 'Video publicitario',
			media: { kind: 'video', src: '/videos/videopublicitarioiadoctora.mp4' },
			tags: ['Publicitario', 'Clínico']
		},
		{
			id: 'v-2025-diciembre',
			year: 2025,
			category: 'Publicitario',
			title: 'Brillo, higiene y resistencia en un solo piso',
			subtitle: 'Transformación real con resina epóxica de alto desempeño para entornos exigentes.',
			location: 'Video publicitario',
			media: { kind: 'video', src: '/videos/videopublicitariodiciembre.mp4' },
			tags: ['Publicitario', 'Institucional']
		},
		{
			id: 'v-2025-costa-rica',
			year: 2025,
			category: 'Deportivo',
			title: 'San José, Costa Rica: grado deportivo',
			subtitle: 'Superficie técnica para canchas: desempeño, resistencia y acabado profesional.',
			location: 'San José, Costa Rica',
			media: { kind: 'video', src: '/videos/canchabasquet-CostaRica.mp4' },
			tags: ['Deportivo', 'Centroamérica']
		},
		{
			id: 'v-2025-mspas',
			year: 2025,
			category: 'Publicitario',
			title: 'Cumplimiento y confianza: enfoque MSPAS',
			subtitle: 'Calidad, higiene y procesos profesionales para proyectos institucionales.',
			location: 'Video publicitario',
			media: { kind: 'video', src: '/videos/Campana-ia2.mp4' },
			tags: ['Publicitario', 'MSPAS']
		},
		{
			id: 'v-2025-navidad',
			year: 2025,
			category: 'Publicitario',
			title: 'Navidad 2025: cerramos con proyectos que brillan',
			subtitle: 'Acabados premium con resistencia real: resultado que se nota.',
			location: 'Video publicitario',
			media: { kind: 'video', src: '/videos/Navidad-ArquiEpoxy.mp4' },
			tags: ['Publicitario', 'Navidad 2025']
		},

		// ===== 2026 =====
		{
			id: 'v-2026-multiclinicas-z9',
			year: 2026,
			category: 'Clínico',
			title: 'Multiclínicas Zona 9',
			subtitle: 'Superficie clínica de alto nivel: higiene, resistencia y presentación institucional.',
			location: 'Ciudad de Guatemala, Guatemala',
			media: { kind: 'video', src: '/videos/MulticlinicasZona9.mp4' },
			tags: ['Clínico', 'Ciudad de Guatemala']
		},
		{
			id: 'v-2026-punto-medico',
			year: 2026,
			category: 'Clínico',
			title: 'Punto Médico San José',
			subtitle: 'Acabado continuo para operación clínica: limpieza rápida y durabilidad.',
			location: 'San José Pinula, Guatemala',
			media: { kind: 'video', src: '/videos/PuntoMedicoSanJose.mp4' },
			tags: ['Clínico', 'San José Pinula']
		},
		{
			id: 'v-2026-poptun',
			year: 2026,
			category: 'Institucional',
			title: 'Poptún: proyecto institucional en Petén',
			subtitle: 'Resistencia y limpieza para operación continua con acabado profesional.',
			location: 'Petén, Guatemala',
			media: { kind: 'video', src: '/videos/PoptunPeten.mp4' },
			tags: ['Institucional', 'Petén']
		},
		{
			id: 'v-2026-ciudad-guatemala',
			year: 2026,
			category: 'Institucional',
			title: 'Ciudad de Guatemala: ejecución profesional',
			subtitle: 'Superficie uniforme, sellada y lista para uso exigente con estética premium.',
			location: 'Guatemala',
			media: { kind: 'video', src: '/videos/CiudadDeGuatemala.mp4' },
			tags: ['Institucional', 'Ciudad de Guatemala']
		},
		{
			id: 'v-2026-pub-enero',
			year: 2026,
			category: 'Publicitario',
			title: 'Arranca el año con un piso que impone',
			subtitle: 'Resina epóxica premium: brillo, limpieza y resistencia desde el día 1.',
			location: 'Video publicitario',
			media: { kind: 'video', src: '/videos/videopublieneroarquiepoxy%20%281%29.mp4' },
			tags: ['Publicitario', 'Enero']
		},
		{
			id: 'v-2026-pub-febrero',
			year: 2026,
			category: 'Publicitario',
			title: 'Febrero de transformación total',
			subtitle: 'De lo común a lo profesional: pisos epóxicos que elevan su espacio.',
			location: 'Video publicitario',
			media: { kind: 'video', src: '/videos/videopublicitariofebrero%20%281%29.mp4' },
			tags: ['Publicitario', 'Febrero']
		},
		{
			id: 'v-2026-santa-clara',
			year: 2026,
			category: 'Clínico',
			title: 'Centro Médico de Especialidades Santa Clara',
			subtitle: 'Entorno clínico: higiene, resistencia y acabado premium para atención especializada.',
			location: 'Quiché, Guatemala',
			media: { kind: 'video', src: '/videos/videocentromedicoquiche.mp4' },
			tags: ['Clínico', 'Quiché']
		},

		// Últimos 6 videos (final)
		{
			id: 'v-2026-datos-resina',
			year: 2026,
			category: 'Publicitario',
			title: 'Resina epóxica sin mitos: lo esencial',
			subtitle: 'Datos claros sobre higiene, resistencia y durabilidad en proyectos exigentes.',
			location: 'Video informativo',
			media: { kind: 'video', src: '/videos/datossobrelaresinaepoxica.mp4' },
			tags: ['Publicitario', 'Informativo']
		},
		{
			id: 'v-2026-terraza-guate',
			year: 2026,
			category: 'Institucional',
			title: 'Terraza en Ciudad de Guatemala: acabado premium',
			subtitle: 'Aplicación profesional: superficie uniforme, sellada y lista para uso exigente.',
			location: 'Ciudad de Guatemala, Guatemala',
			media: { kind: 'video', src: '/videos/videoaplicacionaterrazaciudaddguatemala.mp4' },
			tags: ['Institucional', 'Ciudad de Guatemala']
		},
		{
			id: 'v-2026-final-bodega-quiche',
			year: 2026,
			category: 'Industrial',
			title: 'Bodega Quiché: entrega final para alto tráfico',
			subtitle: 'Resistencia a abrasión y limpieza eficiente para operación continua.',
			location: 'Quiché, Guatemala',
			media: { kind: 'video', src: '/videos/videofinalbodegaquiche.mp4' },
			tags: ['Industrial', 'Quiché', 'Bodega']
		},
		{
			id: 'v-2026-impermeabiliza',
			year: 2026,
			category: 'Institucional',
			title: 'Además de resistencia: la resina también impermeabiliza',
			subtitle: 'Sellado de superficie para control de humedad y mantenimiento más simple.',
			location: 'Video informativo',
			media: { kind: 'video', src: '/videos/laresinatambienimpermeabiliza.mp4' },
			tags: ['Informativo', 'Protección']
		},
		{
			id: 'v-2026-bodega-quiche',
			year: 2026,
			category: 'Industrial',
			title: 'Bodega Quiché: avance con estándar industrial',
			subtitle: 'Nivelación, adherencia y desempeño para trabajo pesado sin sorpresas.',
			location: 'Quiché, Guatemala',
			media: { kind: 'video', src: '/videos/bodegaquiche.mp4' },
			tags: ['Industrial', 'Bodega', 'Quiché']
		},
		{
			id: 'v-2026-antigua',
			year: 2026,
			category: 'Institucional',
			title: 'Antigua Guatemala: presencia premium, desempeño real',
			subtitle: 'Superficie limpia, resistente y con acabado institucional de alto nivel.',
			location: 'Antigua Guatemala, Guatemala',
			media: { kind: 'video', src: '/videos/videoantiguaguatemala.mp4' },
			tags: ['Institucional', 'Antigua Guatemala']
		}
	];

	const allProjects: Project[] = [...galleryProjects, ...videoProjects, ...specials];

	// ====== UI State ======
	let query = '';
	let yearFilter: 'Todos' | '2026' | '2025' = 'Todos';
	let categoryFilter: 'Todas' | Project['category'] = 'Todas';
	let sort: 'Recientes primero' | 'Antiguos primero' | 'A-Z' = 'Recientes primero';

	// Options
	const yearOptions = ['Todos', '2026', '2025'] as const;
	const categoryOptions = unique(['Todas', ...allProjects.map((p) => p.category)]) as Array<
		'Todas' | Project['category']
	>;

	const normalize = (s: string) =>
		s
			.toLowerCase()
			.normalize('NFD')
			.replace(/\p{Diacritic}/gu, '');

	$: filtered = allProjects
		.filter((p) => {
			if (yearFilter !== 'Todos' && String(p.year) !== yearFilter) return false;
			if (categoryFilter !== 'Todas' && p.category !== categoryFilter) return false;

			const q = normalize(query.trim());
			if (!q) return true;

			const haystack = normalize(
				[p.title, p.subtitle, p.location, p.category, ...p.tags].join(' ')
			);
			return haystack.includes(q);
		})
		.sort((a, b) => {
			if (sort === 'A-Z') return a.title.localeCompare(b.title);
			if (sort === 'Antiguos primero') return a.year - b.year || a.title.localeCompare(b.title);
			// Recientes primero
			return b.year - a.year || a.title.localeCompare(b.title);
		});

	$: grouped = filtered.reduce((acc, p) => {
		const key = String(p.year);
		acc[key] = acc[key] || [];
		acc[key].push(p);
		return acc;
	}, {} as Record<string, Project[]>);

	const badgeFor = (cat: Project['category']) => {
		if (cat === 'Clínico') return 'badge-success';
		if (cat === 'Industrial') return 'badge-warning';
		if (cat === 'Deportivo') return 'badge-info';
		if (cat === 'Publicitario') return 'badge-secondary';
		if (cat === 'Institucional') return 'badge-primary';
		return 'badge-ghost';
	};

	const mediaKey = (p: Project) => {
		if (p.media.kind === 'video') return p.media.src;
		return p.media.fotos?.[0] ?? p.id;
	};
</script>

<section class="section section-pad">
	<header class="max-w-4xl">
		<div class="inline-flex items-center gap-2 rounded-full border border-base-300/60 bg-base-100/50 px-4 py-2 text-sm text-base-content/80">
			<span class="badge badge-primary badge-sm">Portafolio</span>
			<span class="text-base-content/70">Clínico • Industrial • Deportivo • Institucional</span>
		</div>

		<h1 class="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">Proyectos</h1>
		<p class="mt-3 text-base-content/80 leading-relaxed">
			Seleccione por año, categoría o busque por ubicación/proyecto. Cada card incluye evidencia visual y un enfoque
			comercial alineado a calidad, higiene, resistencia y profesionalismo.
		</p>
	</header>

	<!-- Controls -->
	<div class="mt-8 glass-card rounded-3xl p-5">
		<div class="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:items-end">
			<!-- Search -->
			<div class="lg:col-span-6">
				<label class="text-sm font-semibold text-base-content/80">Buscar</label>
				<div class="mt-2 join w-full">
					<input
						class="input input-bordered join-item w-full bg-base-100/40"
						placeholder="Ej: IGSS, Quiché, clínica, bodega, Antigua, San Salvador…"
						bind:value={query}
					/>
					<button class="btn btn-primary join-item" type="button" on:click={() => (query = '')}>
						Limpiar
					</button>
				</div>
			</div>

			<!-- Year -->
			<div class="lg:col-span-2">
				<label class="text-sm font-semibold text-base-content/80">Año</label>
				<select class="select select-bordered w-full mt-2 bg-base-100/40" bind:value={yearFilter}>
					{#each yearOptions as y (y)}
						<option value={y}>{y}</option>
					{/each}
				</select>
			</div>

			<!-- Category -->
			<div class="lg:col-span-2">
				<label class="text-sm font-semibold text-base-content/80">Categoría</label>
				<select class="select select-bordered w-full mt-2 bg-base-100/40" bind:value={categoryFilter}>
					{#each categoryOptions as c (c)}
						<option value={c}>{c}</option>
					{/each}
				</select>
			</div>

			<!-- Sort -->
			<div class="lg:col-span-2">
				<label class="text-sm font-semibold text-base-content/80">Orden</label>
				<select class="select select-bordered w-full mt-2 bg-base-100/40" bind:value={sort}>
					<option>Recientes primero</option>
					<option>Antiguos primero</option>
					<option>A-Z</option>
				</select>
			</div>
		</div>

		<div class="mt-4 flex flex-wrap items-center gap-2 text-sm text-base-content/70">
			<span class="badge badge-ghost">{filtered.length} resultados</span>
			{#if query.trim()}
				<span class="badge badge-ghost">Búsqueda: “{query.trim()}”</span>
			{/if}
			{#if yearFilter !== 'Todos'}
				<span class="badge badge-ghost">Año: {yearFilter}</span>
			{/if}
			{#if categoryFilter !== 'Todas'}
				<span class="badge badge-ghost">Categoría: {categoryFilter}</span>
			{/if}
		</div>
	</div>

	<!-- Results -->
	{#if filtered.length === 0}
		<div class="mt-10 glass-card rounded-3xl p-8 text-center">
			<h2 class="text-xl font-bold">No hay resultados</h2>
			<p class="mt-2 text-base-content/70">Ajuste filtros o pruebe con otra búsqueda.</p>
		</div>
	{:else}
		{#each Object.keys(grouped).sort((a, b) => Number(b) - Number(a)) as yr (yr)}
			<div class="mt-12">
				<div class="flex items-center gap-4">
					<h2 class="text-2xl font-extrabold">{yr}</h2>
					<div class="soft-divider"></div>
					<span class="badge badge-ghost">{grouped[yr].length}</span>
				</div>

				<div class="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
					{#each grouped[yr] as p (p.id)}
						<article class="card bg-base-100 shadow-sm border border-base-300/40">
							<figure class="relative">
								{#if p.media.kind === 'carousel'}
									<Carousel fotos={p.media.fotos} id={p.id} />
								{:else}
									<video
										class="w-full h-[260px] md:h-[448px] object-cover rounded-2xl"
										controls
										playsinline
										preload="metadata"
									>
										<source src={p.media.src} type="video/mp4" />
										Tu navegador no soporta video HTML5.
									</video>
								{/if}

								<!-- Category badge -->
								<div class="absolute top-3 left-3">
									<span class={`badge ${badgeFor(p.category)}`}>{p.category}</span>
								</div>
							</figure>

							<div class="card-body">
								<h3 class="text-xl font-bold leading-snug">{p.title}</h3>
								<p class="text-sm text-base-content/80 leading-relaxed">{p.subtitle}</p>

								<div class="mt-3 flex flex-wrap items-center gap-2 text-xs text-base-content/70">
									<span class="badge badge-outline">{p.location}</span>
									{#each p.tags.slice(0, 4) as t (t)}
										<span class="badge badge-ghost">{t}</span>
									{/each}
								</div>

								<div class="mt-5 flex flex-wrap gap-2">
									<a class="btn btn-primary btn-sm" href="/services">Cotizar un proyecto similar</a>
									<a
										class="btn btn-ghost btn-sm"
										href="/projects"
										on:click|preventDefault={() => {
											// UX: resaltar búsqueda rápida por ubicación
											query = p.location;
											yearFilter = 'Todos';
											categoryFilter = 'Todas';
											sort = 'Recientes primero';
											window?.scrollTo?.({ top: 0, behavior: 'smooth' });
										}}
									>
										Buscar por ubicación
									</a>
								</div>
							</div>
						</article>
					{/each}
				</div>
			</div>
		{/each}
	{/if}

	<!-- CTA final -->
	<div class="mt-14 glass-card rounded-3xl p-8">
		<div class="grid grid-cols-1 gap-6 md:grid-cols-3 md:items-center">
			<div class="md:col-span-2">
				<h2 class="text-2xl font-extrabold">¿Quiere un piso con estándar institucional?</h2>
				<p class="mt-2 text-base-content/80">
					Díganos su ubicación, tipo de área (clínico/industrial/deportivo/alimenticio) y metraje. Le preparamos una
					cotización profesional.
				</p>
			</div>
			<div class="md:justify-self-end">
				<a
					class="btn btn-primary w-full md:w-auto"
					href="https://wa.me/50255272948?text=Hola,%20quiero%20cotizar%20un%20proyecto%20de%20resina%20epóxica.%20Ubicación:%20%20%7C%20Área:%20%20%7C%20Metros%20cuadrados:%20"
					target="_blank"
					rel="noopener noreferrer"
				>
					Cotizar por WhatsApp
				</a>
			</div>
		</div>

		<div class="mt-6 text-sm">
			<a
				href="https://www.facebook.com/share/1AzZebobfV/"
				target="_blank"
				rel="noopener noreferrer"
				class="link link-hover text-primary"
			>
				Ver más proyectos en Facebook
			</a>
		</div>
	</div>
</section>
