import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createI18n } from 'vue-i18n'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

import Home from './views/Home.vue'
import Climate from './views/Climate.vue'
import Carbon from './views/Carbon.vue'
import ESG from './views/ESG.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/canvi-climatic', component: Climate },
    { path: '/petjada-carboni', component: Carbon },
    { path: '/asg', component: ESG },
  ],
})

const i18n = createI18n({
  legacy: false,
  locale: 'ca',
  fallbackLocale: 'es',
  messages: {
    ca: {
      nav: {
        home: 'Inici',
        climate: 'Canvi Climàtic',
        carbon: 'Petjada de Carboni',
        esg: 'ASG',
      },

      // ── Home ──────────────────────────────────────────────
      home: {
        badge: 'Informe de Sostenibilitat 2024',
        title1: 'El compromís verd',
        title2: 'de',
        desc: "Nintendo té un impacte ambiental significatiu a causa del cicle de vida del seu maquinari, des de l'extracció de materials fins els residus electrònics (e-waste), i el consum elèctric dels seus serveis online.",
        btnExplore: 'Explorar dades',
        btnModal: 'Objectius de Reciclatge',
        kpiTitle: 'Indicadors Clau 2024',
        kpiSub: "Dades verificades de l'informe de sostenibilitat oficial",
        kpi1: "Consum d'energia total",
        kpi2: 'Energia renovable',
        kpi3: 'Emissions totals',
        kpiSub1: 'Any fiscal 2024',
        kpiSub2: '≈ 19,9% del total',
        kpiSub3: 'Abast 1, 2 i 3',
        kpiLegend: '* Abast 3 inclou cadena de subministrament, transport i ús dels productes venuts.',
        newsTitle: 'Newsletter de Sostenibilitat',
        newsDesc: 'Rep les últimes actualitzacions sobre el progrés mediambiental de Nintendo directament al teu correu.',
        newsPlaceholder: 'el-teu@correu.com',
        newsBtn: "Subscriure'm",
        newsSpam: 'Sense spam. Pots cancel·lar la subscripció en qualsevol moment.',
        newsSuccess: "Subscripció confirmada! Gràcies per unir-te al moviment verd.",
        modalTag: 'Medi Ambient',
        modalTitle: 'Objectius de Reciclatge de Plàstic',
        modalSub: 'Compromisos de Nintendo fins al 2035',
        modalG1: 'Ús de plàstic reciclat als embalatges principals per al 2030.',
        modalG2: "Eliminació de plàstic de carboni no reciclat als embalatges d'aquí al 2035.",
        modalG3: "Reducció del pes total d'embalatge per unitat respecte al 2019.",
        modalG4: "Explorant l'ús de bioplàstics i materials d'origen vegetal per a accessoris.",
        modalFont: 'Font: Nintendo Sustainability Report 2024. Els objectius poden estar subjectes a revisió.',
        modalBtn: 'Entès, tanca',
      },

      // ── Climate ───────────────────────────────────────────
      climate: {
        tag: 'Canvi Climàtic',
        title1: 'Anàlisi de',
        title2: 'Riscos Climàtics',
        subtitle: "Nintendo identifica i avalua els riscos derivats del canvi climàtic sobre les seves operacions globals, des de la cadena de subministrament fins a la infraestructura digital.",
        mapTitle: 'Mapa de Riscos Identificats',
        chartTitle: 'Nivell de Risc Estimat',
        chartDesc: "Escala de 0 a 10 basada en l'anàlisi d'exposició i materialitat financera",
        footer: "Font: Nintendo Sustainability Report 2024 · Avaluació de riscos TCFD (Task Force on Climate-related Financial Disclosures).",
        risk1: {
          title: 'Riscos Físics',
          item1: 'Terratrèmols, tsunamis i tifons al Japó amenacen les plantes de producció.',
          item2: 'La cadena de subministrament de semiconductors concentrada a Àsia és altament vulnerable.',
          item3: 'Inundacions a les regions de fabricació de components electrònics.',
        },
        risk2: {
          title: 'Riscos de Transició',
          item1: 'Noves normatives europees (Dret a la Reparació) exigiran disseny modular de consoles.',
          item2: "Lleis de gestió d'e-waste (RAEE) impliquen costos de recollida i reciclatge.",
          item3: 'Impost de carboni a les importacions de la UE amb possible impacte als preus.',
        },
        risk3: {
          title: 'Impacte de Servidors',
          item1: "L'auge del cloud gaming (Nintendo Switch Online) dispara la demanda de CPD.",
          item2: 'Els data centers consumeixen enormes quantitats d\'electricitat i aigua de refrigeració.',
          item3: "L'IA aplicada als jocs augmentarà exponencialment la càrrega computacional.",
        },
      },

      // ── Carbon ────────────────────────────────────────────
      carbon: {
        tag: 'Petjada de Carboni',
        title1: 'Teoria dels',
        title2: 'Tres Abasts',
        subtitle: 'El protocol GHG classifica les emissions en tres abasts per garantir una comptabilitat completa i evitar la doble comptabilització en tota la cadena de valor de Nintendo.',
        totalLabel: 'Emissions totals 2024',
        totalNote: "Inclou emissions directes i indirectes de toda la cadena de valor. L'Abast 3 representa el 99,38% del total.",
        breakdownTitle: 'Desglossament per Abasts',
        chartTitle: "Distribució d'Emissions",
        chartSub: 'Dades reals Nintendo 2024 (Tones CO₂)',
        unit: 'Tones CO₂',
        footer: 'Font: Nintendo GHG Emissions Data 2024 · Protocol GHG (Greenhouse Gas Protocol Corporate Standard).',
        scope1: {
          label: 'Abast 1 — Directe',
          subtitle: 'Emissions pròpies',
          item1: 'Vehicles de la flota corporativa.',
          item2: "Calderes i sistemes de calefacció de les instal·lacions.",
          item3: "Generadors d'emergència de las fàbriques.",
        },
        scope2: {
          label: 'Abast 2 — Indirecte',
          subtitle: 'Electricitat comprada',
          item1: "Consum elèctric d'oficines i centres de distribució.",
          item2: 'Servidors i infraestructura de Nintendo Switch Online.',
          item3: 'Il·luminació i climatització dels magatzems.',
        },
        scope3: {
          label: 'Abast 3 — Altres',
          subtitle: 'Cadena de valor completa',
          item1: 'Fabricació i transport de consoles, jocs i accessoris.',
          item2: 'Consum elèctric dels jugadors a casa (el component major).',
          item3: 'Emissions del reciclatge i gestió final de residus electrònics.',
        },
        chartLabel1: 'Abast 1 (Directe)',
        chartLabel2: 'Abast 2 (Indirecte)',
        chartLabel3: 'Abast 3 (Cadena de valor)',
        tooltipUnit: 'Tones CO₂',
        pctLabel1: 'Abast 1',
        pctLabel2: 'Abast 2',
        pctLabel3: 'Abast 3',
      },

      // ── ESG ───────────────────────────────────────────────
      esg: {
        tag: 'Indicadors ASG',
        title1: 'Els Tres Pilars',
        title2: 'de Responsabilitat',
        subtitle: "El marc ASG (Ambiental, Social i de Governança) avalua l'impacte corporatiu més enllà dels resultats financers. Nintendo publica anualment els seus indicadors clau.",
        areasTitle: 'Àrees de Compromís',
        waterTag: 'Indicador Hídric',
        waterTitle: "Evolució del Consum d'Aigua",
        waterDesc: "El consum d'aigua a les instal·lacions de Nintendo ha augmentat progressivament coincidint amb l'expansió dels servidors de Nintendo Switch Online. L'empresa treballa en tecnologies de refrigeració més eficients.",
        waterTotal: 'Consum total',
        waterBase: 'Base',
        chartTitle: "Radar d'Evolució Hídrica",
        chartSub: 'Comparativa 2022–2024 (milers de m³)',
        chartDatasetLabel: "Consum d'aigua (milers m³)",
        chartLegend: "Consum d'aigua (milers de m³)",
        tooltipUnit: 'milers de m³',
        footer: 'Font: Nintendo Sustainability Report 2024 · Marc GRI 303 (Gestió de l\'Aigua i Efluents).',
        pillarA: {
          letter: 'A',
          label: 'Ambiental',
          item1Title: "Consum responsable d'aigua",
          item1Desc: "Nintendo monitora i redueix el consum hídric a totes les seves instal·lacions i promou l'ús de tecnologies eficients.",
          item2Title: 'Reciclatge de consoles',
          item2Desc: "Programa de recollida i reciclatge de hardware obsolet per evitar l'e-waste i recuperar materials valuosos.",
          item3Title: 'Embalatge sostenible',
          item3Desc: 'Reducció del plàstic verge als embalatges i transició a paper i cartró certificat FSC.',
        },
        pillarS: {
          letter: 'S',
          label: 'Social',
          item1Title: 'Entorns segurs per a menors',
          item1Desc: 'Eines de control parental avançades a Nintendo Switch i polítiques de contingut estrictes per protegir els jugadors joves.',
          item2Title: 'Benestar laboral',
          item2Desc: 'Programes de salut mental, conciliació laboral i formació contínua per als empleats a tot el món.',
          item3Title: 'Diversitat i inclusió',
          item3Desc: 'Promoció de la diversitat en els equips de desenvolupament i representation equitativa en el contingut dels jocs.',
        },
        pillarG: {
          letter: 'G',
          label: 'Governança',
          item1Title: 'Lluita contra la corrupció',
          item1Desc: 'Codi ètic corporatiu, canal de denúncies anònim i auditories externes periòdiques per garantir la integritat.',
          item2Title: 'Cadena lliure de minerals de conflicte',
          item2Desc: "Auditoria de la cadena de subministrament per assegurar l'absència de minerals procedents de zones de conflicte (3TG).",
          item3Title: 'Transparència fiscal',
          item3Desc: 'Publicació dels informes financers i de sostenibilitat alineats amb els estàndards GRI i TCFD.',
        },
      },
      // ── Global Footer ──────────────────────────────────────
      footerGlobal: {
        copy: 'Nintendo Co., Ltd. —  Informe de Sostenibilitat',
        text: 'Compromesos amb un futur sostenible'
      }
    },

    // ════════════════════════════════════════════════
    // ESPANYOL
    // ════════════════════════════════════════════════
    es: {
      nav: {
        home: 'Inicio',
        climate: 'Cambio Climático',
        carbon: 'Huella de Carbono',
        esg: 'ASG',
      },

      // ── Home ──────────────────────────────────────────────
      home: {
        badge: 'Informe de Sostenibilidad 2024',
        title1: 'El compromiso verde',
        title2: 'de',
        desc: 'Nintendo tiene un impacto ambiental significativo debido al ciclo de vida de su hardware, desde la extracción de materiales hasta los residuos electrónicos (e-waste), y el consumo eléctrico de sus servicios online.',
        btnExplore: 'Explorar datos',
        btnModal: 'Objetivos de Reciclaje',
        kpiTitle: 'Indicadores Clave 2024',
        kpiSub: 'Datos verificado del informe de sostenibilidad oficial',
        kpi1: 'Consumo de energía total',
        kpi2: 'Energía renovable',
        kpi3: 'Emisiones totales',
        kpiSub1: 'Año fiscal 2024',
        kpiSub2: '≈ 19,9% del total',
        kpiSub3: 'Alcance 1, 2 y 3',
        kpiLegend: '* El Alcance 3 incluye cadena de suministro, transporte y uso de los productos vendidos.',
        newsTitle: 'Newsletter de Sostenibilidad',
        newsDesc: 'Recibe las últimas actualizaciones sobre el progreso medioambiental de Nintendo directamente en tu correo.',
        newsPlaceholder: 'tu@correo.com',
        newsBtn: 'Suscribirme',
        newsSpam: 'Sin spam. Puedes cancelar tu suscripción en cualquier momento.',
        newsSuccess: '¡Suscripción confirmada! Gracias por unirte al movimiento verde.',
        modalTag: 'Medio Ambiente',
        modalTitle: 'Objetivos de Reciclaje de Plástico',
        modalSub: 'Compromisos de Nintendo hasta 2035',
        modalG1: 'Uso de plástico reciclado en los embalajes principales para 2030.',
        modalG2: 'Eliminación de plástico de carbono no reciclado en los embalajes para 2035.',
        modalG3: 'Reducción del peso total de embalaje por unidad respecto a 2019.',
        modalG4: 'Explorando el uso de bioplásticos y materiales de origen vegetal para accesorios.',
        modalFont: 'Fuente: Nintendo Sustainability Report 2024. Los objetivos pueden estar sujetos a revisión.',
        modalBtn: 'Entendido, cerrar',
      },

      // ── Climate ───────────────────────────────────────────
      climate: {
        tag: 'Cambio Climático',
        title1: 'Análisis de',
        title2: 'Riesgos Climáticos',
        subtitle: 'Nintendo identifica y evalúa los riesgos derivados del cambio climático sobre sus operaciones globales, desde la cadena de suministro hasta la infraestructura digital.',
        mapTitle: 'Mapa de Riesgos Identificados',
        chartTitle: 'Nivel de Riesgo Estimado',
        chartDesc: 'Escala de 0 a 10 basada en el análisis de exposición y materialidad financiera',
        footer: 'Fuente: Nintendo Sustainability Report 2024 · Evaluación de riesgos TCFD (Task Force on Climate-related Financial Disclosures).',
        risk1: {
          title: 'Riesgos Físicos',
          item1: 'Terremotos, tsunamis y tifones en Japón amenazan las plantas de producción.',
          item2: 'La cadena de suministro de semiconductores concentrada en Asia es altamente vulnerable.',
          item3: 'Inundaciones en las regiones de fabricación de componentes electrónicos.',
        },
        risk2: {
          title: 'Riesgos de Transición',
          item1: 'Nuevas normativas europeas (Derecho a la Reparación) exigirán diseño modular de consolas.',
          item2: 'Las leyes de gestión de e-waste (RAEE) implican costes de recogida y reciclaje.',
          item3: 'Impuesto de carbono a las importaciones de la UE con posible impacto en los precios.',
        },
        risk3: {
          title: 'Impacto de Servidores',
          item1: 'El auge del cloud gaming (Nintendo Switch Online) dispara la demanda de CPD.',
          item2: 'Los centros de datos consumen enormes cantidades de electricidad y agua de refrigeración.',
          item3: 'La IA aplicada a los juegos aumentará exponencialmente la carga computacional.',
        },
      },

      // ── Carbon ────────────────────────────────────────────
      carbon: {
        tag: 'Huella de Carbono',
        title1: 'Teoría de los',
        title2: 'Tres Alcances',
        subtitle: 'El protocolo GHG clasifica las emisiones en tres alcances para garantizar una contabilidad completa y evitar la doble contabilización en toda la cadena de valor de Nintendo.',
        totalLabel: 'Emisiones totales 2024',
        totalNote: 'Incluye emisiones directas e indirectas de toda la cadena de valor. El Alcance 3 representa el 99,38% del total.',
        breakdownTitle: 'Desglose por Alcances',
        chartTitle: 'Distribución de Emisiones',
        chartSub: 'Datos reales Nintendo 2024 (Toneladas CO₂)',
        unit: 'Toneladas CO₂',
        footer: 'Fuente: Nintendo GHG Emissions Data 2024 · Protocolo GHG (Greenhouse Gas Protocol Corporate Standard).',
        scope1: {
          label: 'Alcance 1 — Directo',
          subtitle: 'Emisiones propias',
          item1: 'Vehículos de la flota corporativa.',
          item2: 'Calderas y sistemas de calefacción de las instalaciones.',
          item3: 'Generadores de emergencia de las fábricas.',
        },
        scope2: {
          label: 'Alcance 2 — Indirecto',
          subtitle: 'Electricidad comprada',
          item1: 'Consumo eléctrico de oficinas y centros de distribución.',
          item2: 'Servidores e infraestructura de Nintendo Switch Online.',
          item3: 'Iluminación y climatización de los almacenes.',
        },
        scope3: {
          label: 'Alcance 3 — Otros',
          subtitle: 'Cadena de valor completa',
          item1: 'Fabricación y transporte de consolas, juegos y accesorios.',
          item2: 'Consumo eléctrico de los jugadores en casa (el componente mayor).',
          item3: 'Emisiones del reciclaje y gestión final de residuos electrónicos.',
        },
        chartLabel1: 'Alcance 1 (Directo)',
        chartLabel2: 'Alcance 2 (Indirecto)',
        chartLabel3: 'Alcance 3 (Cadena de valor)',
        tooltipUnit: 'Toneladas CO₂',
        pctLabel1: 'Alcance 1',
        pctLabel2: 'Alcance 2',
        pctLabel3: 'Alcance 3',
      },

      // ── ESG ───────────────────────────────────────────────
      esg: {
        tag: 'Indicadores ASG',
        title1: 'Los Tres Pilares',
        title2: 'de Responsabilidad',
        subtitle: 'El marco ASG (Ambiental, Social y de Gobernanza) evalúa el impacto corporativo más allá de los resultados financieros. Nintendo publica anualmente sus indicadores clave.',
        areasTitle: 'Áreas de Compromiso',
        waterTag: 'Indicador Hídrico',
        waterTitle: 'Evolución del Consumo de Agua',
        waterDesc: 'El consumo de agua en las instalaciones de Nintendo ha aumentado progresivamente coincidiendo con la expansión de los servidores de Nintendo Switch Online. La empresa trabaja en tecnologías de refrigeración más eficientes.',
        waterTotal: 'Consumo total',
        waterBase: 'Base',
        chartTitle: 'Radar de Evolución Hídrica',
        chartSub: 'Comparativa 2022–2024 (miles de m³)',
        chartDatasetLabel: 'Consumo de agua (miles m³)',
        chartLegend: 'Consumo de agua (miles de m³)',
        tooltipUnit: 'miles de m³',
        footer: 'Fuente: Nintendo Sustainability Report 2024 · Marco GRI 303 (Gestión del Agua y Efluentes).',
        pillarA: {
          letter: 'A',
          label: 'Ambiental',
          item1Title: 'Consumo responsable de agua',
          item1Desc: 'Nintendo monitorea y reduce el consumo hídrico en todas sus instalaciones y promueve el uso de tecnologías eficientes.',
          item2Title: 'Reciclaje de consolas',
          item2Desc: 'Programa de recogida y reciclaje de hardware obsoleto para evitar el e-waste y recuperar materiales valiosos.',
          item3Title: 'Embalaje sostenible',
          item3Desc: 'Reducción del plástico virgen en los embalajes y transición a papel y cartón certificado FSC.',
        },
        pillarS: {
          letter: 'S',
          label: 'Social',
          item1Title: 'Entornos seguros para menores',
          item1Desc: 'Herramientas de control parental avanzadas en Nintendo Switch y políticas de contenido estrictas para proteger a los jugadores jóvenes.',
          item2Title: 'Bienestar laboral',
          item2Desc: 'Programas de salud mental, conciliación laboral y formación continua para los empleados en todo el mundo.',
          item3Title: 'Diversidad e inclusión',
          item3Desc: 'Promoción de la diversidad en los equipos de desarrollo y representación equitativa en el contenido de los juegos.',
        },
        pillarG: {
          letter: 'G',
          label: 'Gobernanza',
          item1Title: 'Lucha contra la corrupción',
          item1Desc: 'Código ético corporativo, canal de denuncias anónimo y auditorías externas periódicas para garantizar la integridad.',
          item2Title: 'Cadena libre de minerales de conflicto',
          item2Desc: 'Auditoría de la cadena de suministro para asegurar la ausencia de minerales procedentes de zonas de conflicto (3TG).',
          item3Title: 'Transparencia fiscal',
          item3Desc: 'Publicación de los informes financieros y de sostenibilidad alineados con los estándares GRI i TCFD.',
        },
      },
      // ── Global Footer ──────────────────────────────────────
      footerGlobal: {
        copy: 'Nintendo Co., Ltd. —  Informe de Sostenibilidad',
        text: 'Comprometidos con un futuro sostenible'
      }
    },
  },
})

createApp(App)
  .use(router)
  .use(i18n)
  .use(Toast, { position: 'top-right', timeout: 3000 })
  .mount('#app')