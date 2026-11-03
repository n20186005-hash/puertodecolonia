/**
 * Datos compartidos de la guía independiente Puerto de Colonia.
 * Fuente única para entidad, dominios externos y estructura de navegación.
 */

export const SITE = {
  name: 'Puerto de Colonia',
  officialName: 'Terminal Fluviomarítima Colonia (ANP)',
  city: 'Colonia del Sacramento',
  region: 'Departamento de Colonia',
  country: 'Uruguay',
  street: 'Av. Roosevelt y Rivera',
  postal: '70000',
  phone: '+59845222140',
  phoneDisplay: '+598 4522 2140',
  plusCode: 'G5G4+FF',
  mapsUrl: 'https://maps.app.goo.gl/TeFfiSiPREgkBZDj6',
  lat: -34.4737897,
  lng: -57.8438151,
  reviewRating: '4,2',
  reviewCount: '21.100',
  reviewSource: 'Google Maps',
  reviewCheckedAt: '3 de noviembre de 2026',
  origin: 'https://puertodecolonia.com',
  email: 'comercial@anp.com.uy',
  lang: 'es-UY',
  updatedAt: '3 de noviembre de 2026',
  updatedISO: '2026-11-03'
} as const;

export const LINKS = {
  anpPort: 'https://www.anp.com.uy/es/inicio/puertos/comerciales/colonia',
  anpInfra: 'https://www.anp.com.uy/index.php/es/inicio/puertos/comerciales/colonia/infraestructura',
  anpObras: 'https://www.anp.com.uy/index.php/es/inicio/comunicacion/noticias/ampliacion-de-la-terminal-y-mejoras-para-el-atraque-de-buques',
  anpObras2024: 'https://www.anp.com.uy/es/inicio/comunicacion/noticias/inauguracion-de-las-obras-de-ampliacion-de-la-terminal-de-pasajeros-de-colonia',
  anpTarifas: 'https://anp.com.uy/es/inicio/puertos/comerciales/colonia/tarifas/trafico-fluvial',
  anpDeportivo: 'https://www.anp.com.uy/es/inicio/puertos/deportivos/puerto-deportivo-colonia',
  mTurismoObras: 'https://www.gub.uy/ministerio-turismo/comunicacion/noticias/puerto-colonia-avanza-obras-para-mejorar-experiencia-visitantes',
  presidencia2024: 'https://www.gub.uy/presidencia/comunicacion/noticias/gobierno-inauguro-ampliacion-terminal-pasajeros-del-puerto-colonia',
  coloniaExpress: 'https://www.coloniaexpress.com/es/uy/mas-informacion/terminales',
  coloniaExpressHorarios: 'https://www.coloniaexpress.com/es/ar/mas-informacion/horarios-y-rutas',
  coloniaExpressFaq: 'https://www.coloniaexpress.com/es/uy/preguntas-frecuentes',
  coloniaExpressTyC: 'https://www.coloniaexpress.com/es/uy/mas-informacion/terminos-y-condiciones',
  buquebus: 'https://www.buquebus.com/',
  buquebusEmbarque: 'https://www.buquebus.com/info/embarque',
  buquebusCheckin: 'https://www.buquebus.com/info/check-in',
  buquebusTerminales: 'https://www.buquebus.com/informacion-util/terminales',
  buquebusDocumentacion: 'https://www.buquebus.com.uy/informacion-util/documentacion',
  buquebusEquipaje: 'https://www.buquebus.com.uy/informacion-util/equipaje',
  buquebusMascotas: 'https://www.buquebus.com/info/mascotas',
  buquebusContratos: 'https://www.buquebus.com/info/contratos-de-adhesion',
  buquebusFaq: 'https://www.buquebus.com.uy/faq',
  cot: 'https://www.cot.com.uy/horarios-tarifas.php',
  cotAgencias: 'https://www.cot.com.uy/agencias.php',
  intendenciaTransporte: 'https://colonia.gub.uy/turismo/uploads/servicios/transporte.pdf',
  intendenciaGastronomia: 'https://www.colonia.gub.uy/turismo/uploads/servicios/gastronomia.pdf',
  jefaturaColonia: 'https://www.gub.uy/ministerio-interior/tramites-y-servicios/servicios/dependencias-jefatura-colonia',
  remises: 'http://www.impo.com.uy/bases/resoluciones-junta-depart-colonia/1269-2024',
  taximetros: 'https://www.juntacolonia.gub.uy/servicio-de-taximetros-2002/',
  unesco: 'https://whc.unesco.org/en/list/747',
  unescoUy: 'https://comisionunesco.org.uy/rutas-unesco/barrio-historico-de-colonia-del-sacramento/',
  museos: 'https://www.museoscolonia.com.uy/',
  museosPrepara: 'https://www.museoscolonia.com.uy/prepara-tu-visita',
  turismoColonia: 'https://uruguaynatural.com/es/places/colonia-encanto-historico-y-paisajes-del-plata/',
  minturOperadores: 'https://www.mintur.gub.uy/consulta-operadores/2019/operadores.php?depto=COLONIA&id=4&loc=COLONIA',
  gubUy: 'https://www.gub.uy/',
  argentinaMigraciones: 'https://www.argentina.gob.ar/node/488501',
  argentinaMenores: 'https://www.argentina.gob.ar/noticias/migraciones-recuerda-los-requisitos-para-viajar-al-exterior-con-menores-de-edad',
  argentinaAutorizacionMenor: 'https://www.argentina.gob.ar/servicio/autorizacion-de-viaje-al-exterior-para-menores-de-dieciocho-18-anos-que-egresen-del-pais',
  argentinaAduanaFranquicia: 'https://www.afip.ar/viajeros/ayuda/franquicia.asp',
  argentinaAduanaEquipaje: 'https://www.afip.ar/viajeros/ayuda/regimen-equipaje.asp',
  uruguayVisas: 'https://www.gub.uy/ministerio-interior/comunicacion/publicaciones/regimen-visas-admision',
  uruguayMenores: 'https://www.gub.uy/tramites/permiso-menor-edad',
  uruguayAduana: 'https://www.gub.uy/tramites/equipaje-viajeros-gestion-franquicia-equipaje',
  senasa: 'https://mascotas.senasa.gob.ar'
} as const;

export interface NavLink {
  label: string;
  href: string;
}

export interface NavGroup {
  title: string;
  links: NavLink[];
}

/** Mapa completo del sitio: se usa en el pie de página para enlazado interno. */
export const NAV_GROUPS: NavGroup[] = [
  {
    title: 'Secciones',
    links: [
      { label: 'Terminal de ferries', href: '/terminal/' },
      { label: 'Ferries y cruce del Plata', href: '/ferries/' },
      { label: 'Navieras', href: '/navieras/' },
      { label: 'Transporte', href: '/transporte/' },
      { label: 'Rutas desde el puerto', href: '/rutas/' },
      { label: 'Itinerarios', href: '/itinerarios/' },
      { label: 'Cerca del puerto', href: '/cerca/' },
      { label: 'Guías e historia', href: '/guias/' }
    ]
  },
  {
    title: 'Terminal de ferries',
    links: [
      { label: 'Ubicación y cómo llegar', href: '/terminal/ubicacion-como-llegar/' },
      { label: 'Servicios de la terminal', href: '/terminal/servicios/' },
      { label: 'Estacionamiento y preembarque', href: '/terminal/estacionamiento/' },
      { label: 'Accesibilidad', href: '/terminal/accesibilidad/' },
      { label: 'Consigna de equipaje', href: '/terminal/consigna-equipaje/' },
      { label: 'Obras y accesos', href: '/terminal/obras-y-accesos/' },
      { label: 'Llegadas tardías', href: '/terminal/llegadas-tardias/' }
    ]
  },
  {
    title: 'Ferries y cruce del Plata',
    links: [
      { label: 'Horarios Colonia–Buenos Aires', href: '/ferries/horarios-colonia-buenos-aires/' },
      { label: 'Pasajes de ferry', href: '/ferries/pasajes/' },
      { label: 'Precios', href: '/ferries/precios/' },
      { label: 'Check-in y embarque', href: '/ferries/check-in-embarque/' },
      { label: 'Documentación para viajar', href: '/ferries/documentacion/' },
      { label: 'Equipaje en el ferry', href: '/ferries/equipaje/' },
      { label: 'Viajar con vehículo', href: '/ferries/viajar-con-vehiculo/' },
      { label: 'Viajar con mascotas', href: '/ferries/viajar-con-mascotas/' },
      { label: 'Viajar con niños', href: '/ferries/viajar-con-ninos/' },
      { label: 'Viajar con bicicleta', href: '/ferries/viajar-con-bicicleta/' },
      { label: 'Cambios y cancelaciones', href: '/ferries/cambios-cancelaciones/' },
      { label: 'Mal tiempo y suspensiones', href: '/ferries/clima-suspensiones/' },
      { label: 'Aduana y equipaje', href: '/ferries/aduanas/' },
      { label: 'Menores y autorizaciones', href: '/ferries/menores/' }
    ]
  },
  {
    title: 'Navieras',
    links: [
      { label: 'Colonia Express', href: '/navieras/colonia-express/' },
      { label: 'Buquebus', href: '/navieras/buquebus/' },
      { label: 'Buquebus vs Colonia Express', href: '/comparativas/buquebus-vs-colonia-express/' }
    ]
  },
  {
    title: 'Transporte y rutas',
    links: [
      { label: 'Terminal de ómnibus', href: '/transporte/terminal-omnibus/' },
      { label: 'Taxis y remises', href: '/transporte/taxi-remis-puerto/' },
      { label: 'Colonia a Montevideo', href: '/rutas/colonia-montevideo-omnibus/' },
      { label: 'Del puerto al Barrio Histórico', href: '/rutas/puerto-barrio-historico/' },
      { label: 'Del puerto al Faro', href: '/rutas/puerto-faro-colonia/' },
      { label: 'Del puerto a Calle de los Suspiros', href: '/rutas/puerto-calle-suspiros/' },
      { label: 'Del puerto al Portón de Campo', href: '/rutas/puerto-porton-campo/' },
      { label: 'Museos desde el puerto', href: '/rutas/puerto-museos-historicos/' },
      { label: 'Buenos Aires a Colonia', href: '/rutas/buenos-aires-colonia/' }
    ]
  },
  {
    title: 'Itinerarios',
    links: [
      { label: 'Colonia en 2 horas', href: '/itinerarios/colonia-2-horas/' },
      { label: 'Colonia en 4 horas', href: '/itinerarios/colonia-4-horas/' },
      { label: 'Un día desde Buenos Aires', href: '/itinerarios/colonia-desde-buenos-aires-un-dia/' },
      { label: 'Una noche en Colonia', href: '/itinerarios/colonia-con-noche/' }
    ]
  },
  {
    title: 'Cerca del puerto',
    links: [
      { label: 'Cafés y desayunos', href: '/cerca/cafe-desayuno-puerto/' },
      { label: 'Almuerzos', href: '/cerca/restaurantes-almuerzo-puerto/' },
      { label: 'Dónde dormir', href: '/cerca/hoteles-puerto-colonia/' }
    ]
  },
  {
    title: 'Guías e historia',
    links: [
      { label: 'Puerto vs puerto deportivo', href: '/guias/puerto-vs-puerto-deportivo/' },
      { label: 'Historia del Puerto de Colonia', href: '/historia/puerto-de-colonia/' }
    ]
  },
  {
    title: 'Sitio',
    links: [
      { label: 'Inicio', href: '/' },
      { label: 'Privacidad', href: '/privacidad/' },
      { label: 'Cookies y preferencias', href: '/cookies/' },
      { label: 'Términos de uso', href: '/terminos/' },
      { label: 'Créditos de fotografías', href: '/creditos/' }
    ]
  }
];

/** Enlaces principales del encabezado en las páginas internas. */
export const HEADER_NAV: NavLink[] = [
  { label: 'Terminal', href: '/terminal/' },
  { label: 'Ferries', href: '/ferries/' },
  { label: 'Navieras', href: '/navieras/' },
  { label: 'Transporte', href: '/transporte/' },
  { label: 'Rutas', href: '/rutas/' },
  { label: 'Itinerarios', href: '/itinerarios/' },
  { label: 'Cerca', href: '/cerca/' },
  { label: 'Guías', href: '/guias/' }
];

export const updatedLabel = (long = SITE.updatedAt): string =>
  `Información revisada el ${long}. Las condiciones cambian: confirmá con la naviera, ANP o la autoridad correspondiente antes de viajar.`;
