/**
 * ZEYA · Contenido editable del sitio
 * -----------------------------------
 * Todo el texto y los datos de la landing viven en este archivo.
 * Los datos que faltan llevan el prefijo "[PENDIENTE" para encontrarlos con
 * una búsqueda rápida (por ejemplo: grep -n "PENDIENTE" src/data/site.ts).
 *
 * Mientras un enlace siga en [PENDIENTE], el sitio lo muestra como texto (sin
 * enlace roto) o usa el enlace general de WhatsApp como respaldo.
 */

/** Devuelve true si el valor todavía es un placeholder. */
export const isPending = (value: string | null | undefined): boolean =>
  !value || value.trim().startsWith("[PENDIENTE");

// ---------------------------------------------------------------------------
// Marca y contacto
// ---------------------------------------------------------------------------

export const site = {
  name: "ZEYA",
  fullName: "ZEYA Armonización Orofacial",
  tagline: "Armonización orofacial, estética y odontología",
  // [PENDIENTE] Dominio definitivo. Se usa para Open Graph y JSON-LD (debe ser una URL válida).
  url: "https://zeya.example",
  locale: "es-MX",

  seo: {
    title: "ZEYA Armonización Orofacial | Estética y odontología en CDMX y Playa del Carmen",
    description:
      "Clínica de armonización orofacial, estética y odontología en CDMX y Playa del Carmen. Blanqueamiento dental, relleno de labios, baby botox y planes personalizados. Agenda tu valoración por WhatsApp.",
    // [PENDIENTE] Reemplazar /og-image.jpg por una imagen real de 1200×630 px.
    ogImage: "/og-image.jpg",
    ogImageAlt: "ZEYA Armonización Orofacial",
  },

  brand: {
    // [PENDIENTE] Coloca el logo en /public/brand/ y escribe aquí su ruta, p. ej. "/brand/logo.svg".
    // Mientras esté pendiente se muestra el nombre en texto (no es el logo).
    logo: "[PENDIENTE: /brand/logo.svg]",
    // Versión clara del logo para fondos vino (opcional). Si queda pendiente se usa `logo`.
    logoOnDark: "[PENDIENTE: /brand/logo-claro.svg]",
    // Medidas reales del archivo del logo (para reservar espacio y evitar saltos de diseño).
    logoWidth: 160,
    logoHeight: 48,
  },

  whatsapp: {
    // Enlace general (CTA principal, botón flotante, header).
    general: "https://wa.me/message/2L7BTZXDNMDZI1",
    // Número en formato internacional, solo dígitos, p. ej. "5219981234567".
    // Con él, cada tratamiento abre WhatsApp con un mensaje prellenado.
    number: "[PENDIENTE: número en formato internacional]",
    defaultMessage: "Hola, ZEYA. Me gustaría agendar una cita de valoración.",
  },

  // [PENDIENTE] Teléfono para mostrar y para JSON-LD (formato +52 ...).
  phone: "[PENDIENTE: teléfono]",
  // [PENDIENTE] Correo de contacto.
  email: "[PENDIENTE: correo de contacto]",

  social: [
    { label: "Instagram", handle: "@zeya.armonizacion", url: "https://instagram.com/zeya.armonizacion", icon: "instagram" },
    // Agrega más redes con la misma forma, p. ej.:
    // { label: "Facebook", handle: "ZEYA", url: "https://facebook.com/...", icon: "facebook" },
  ],

  legal: {
    privacyLabel: "Aviso de privacidad",
    // Página con el aviso de privacidad (contenido en `privacy`, más abajo).
    privacyUrl: "/aviso-de-privacidad",
  },
} as const;

// ---------------------------------------------------------------------------
// Navegación
// ---------------------------------------------------------------------------

export const nav = [
  { label: "Tratamientos", href: "#tratamientos" },
  { label: "Primera cita", href: "#primera-cita" },
  { label: "Sedes", href: "#sedes" },
  { label: "FAQ", href: "#faq" },
];

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------

export const hero = {
  eyebrow: "CDMX · Playa del Carmen",
  title: "Armonizamos rostros y sonrisas",
  subtitle:
    "Atención cálida y personalizada para realzar tu belleza natural. Te escuchamos, te explicamos cada paso y diseñamos contigo un plan a tu medida.",
  primaryCta: "Agenda tu cita por WhatsApp",
  secondaryCta: "Ver tratamientos",
};

// ---------------------------------------------------------------------------
// Filosofía / Sobre ZEYA
// ---------------------------------------------------------------------------

export const about = {
  eyebrow: "Sobre ZEYA",
  title: "Belleza que se siente tuya",
  paragraphs: [
    "En ZEYA creemos que armonizar no es transformarte, sino resaltar lo que ya es tuyo. Cada persona llega con una historia, una expresión y una sonrisa distintas, y por eso no trabajamos con fórmulas iguales para todos: nos tomamos el tiempo de escucharte, entender qué buscas y explicarte con claridad qué es posible y qué no.",
    "Reunimos la estética facial y la odontología en un mismo lugar, en nuestras sedes de Ciudad de México y Playa del Carmen, para cuidar la armonía de tu rostro y tu sonrisa de manera integral. Antes de cualquier tratamiento te hacemos una valoración y después te acompañamos con indicaciones claras, sin presiones y a tu ritmo.",
  ],
  values: [
    {
      title: "Escucha",
      text: "Empezamos por entender qué quieres y por qué. Tu opinión guía cada decisión.",
    },
    {
      title: "Naturalidad",
      text: "Buscamos resultados en equilibrio con tus facciones, no cambios que te hagan sentir otra persona.",
    },
    {
      title: "Acompañamiento",
      text: "Resolvemos tus dudas en cada etapa y damos seguimiento a tu proceso.",
    },
  ],
};

// ---------------------------------------------------------------------------
// Tratamientos (sin precios)
// ---------------------------------------------------------------------------

export const treatments = {
  eyebrow: "Tratamientos",
  title: "Cuidamos tu rostro y tu sonrisa",
  intro:
    "Cada tratamiento comienza con una valoración para confirmar que es adecuado para ti. Escríbenos y te orientamos sin compromiso.",
  ctaLabel: "Consultar por WhatsApp",
  items: [
    {
      id: "blanqueamiento",
      name: "Blanqueamiento dental",
      description:
        "Aclara el tono de tus dientes con un procedimiento supervisado y adaptado a la sensibilidad de tu sonrisa.",
      idealFor: "Si quieres una sonrisa más luminosa y tus dientes y encías están sanos (lo revisamos en tu valoración).",
      whatsappMessage: "Hola, ZEYA. Me interesa el blanqueamiento dental y quisiera más información.",
    },
    {
      id: "labios",
      name: "Relleno de labios con ácido hialurónico",
      description:
        "Aporta definición, hidratación o volumen a tus labios, siempre en proporción con el resto de tu rostro.",
      idealFor: "Si buscas definir el contorno, equilibrar tus labios o darles un aspecto más hidratado.",
      whatsappMessage: "Hola, ZEYA. Me interesa el relleno de labios con ácido hialurónico y quisiera más información.",
    },
    {
      id: "botox",
      name: "Baby botox / Botox",
      description:
        "Suaviza las líneas de expresión. En su versión baby se aplican dosis menores para un efecto más ligero.",
      idealFor: "Si quieres suavizar líneas en frente, entrecejo o contorno de ojos sin perder expresividad.",
      whatsappMessage: "Hola, ZEYA. Me interesa el baby botox / botox y quisiera más información.",
    },
    {
      id: "armonizacion",
      name: "Armonización orofacial",
      description:
        "Un plan que integra tratamientos faciales y dentales para equilibrar las proporciones de tu rostro y tu sonrisa.",
      idealFor: "Si buscas un cambio integral y armónico, diseñado a partir de una valoración completa.",
      whatsappMessage: "Hola, ZEYA. Me interesa la armonización orofacial y quisiera agendar una valoración.",
    },
  ],
};

// ---------------------------------------------------------------------------
// Tu primera cita
// ---------------------------------------------------------------------------

export const firstVisit = {
  eyebrow: "Tu primera cita",
  title: "Así es tu proceso con nosotros",
  steps: [
    {
      title: "Valoración",
      text: "Platicamos sobre lo que te gustaría mejorar, revisamos tu historial y analizamos tu rostro y tu sonrisa.",
    },
    {
      title: "Plan personalizado",
      text: "Te proponemos opciones claras, con sus alcances, cuidados y presupuesto, para que decidas con calma.",
    },
    {
      title: "Tratamiento",
      text: "Realizamos tu tratamiento en un ambiente tranquilo y te damos seguimiento después de tu cita.",
    },
  ],
  cta: "Agenda tu valoración",
};

// ---------------------------------------------------------------------------
// Galería / Instagram
// ---------------------------------------------------------------------------

export const gallery = {
  eyebrow: "Galería",
  title: "Síguenos en Instagram",
  intro: "Conoce nuestros espacios, nuestro equipo y el día a día en ZEYA.",
  // [PENDIENTE] Reemplaza las imágenes en src/assets/galeria/ por fotos reales
  // (sin antes y después hasta tener material autorizado) y actualiza los textos alternativos.
  images: [
    { file: "galeria-1.webp", alt: "[PENDIENTE] Foto de galería 1 — describe aquí la imagen real" },
    { file: "galeria-2.webp", alt: "[PENDIENTE] Foto de galería 2 — describe aquí la imagen real" },
    { file: "galeria-3.webp", alt: "[PENDIENTE] Foto de galería 3 — describe aquí la imagen real" },
    { file: "galeria-4.webp", alt: "[PENDIENTE] Foto de galería 4 — describe aquí la imagen real" },
    { file: "galeria-5.webp", alt: "[PENDIENTE] Foto de galería 5 — describe aquí la imagen real" },
    { file: "galeria-6.webp", alt: "[PENDIENTE] Foto de galería 6 — describe aquí la imagen real" },
  ],
  cta: "Ver @zeya.armonizacion",
};

// ---------------------------------------------------------------------------
// Sedes
// ---------------------------------------------------------------------------

export const locations = {
  eyebrow: "Sedes",
  title: "Te esperamos en dos ciudades",
  items: [
    {
      id: "cdmx",
      city: "Ciudad de México",
      address: "[PENDIENTE: calle, número, colonia, alcaldía, C.P.]",
      // Datos estructurados para JSON-LD
      locality: "Ciudad de México",
      region: "CDMX",
      hours: [
        { days: "[PENDIENTE: días]", time: "[PENDIENTE: horario]" },
      ],
      // [PENDIENTE] URL de Google Maps ("Cómo llegar").
      mapsUrl: "[PENDIENTE: enlace de Google Maps]",
      // [PENDIENTE] URL de inserción del mapa (Google Maps → Compartir → Insertar un mapa → copia el src del iframe).
      mapEmbedUrl: "[PENDIENTE: URL de inserción del mapa]",
    },
    {
      id: "playa",
      city: "Playa del Carmen",
      address: "[PENDIENTE: calle, número, colonia, C.P.]",
      locality: "Playa del Carmen",
      region: "Quintana Roo",
      hours: [
        { days: "[PENDIENTE: días]", time: "[PENDIENTE: horario]" },
      ],
      mapsUrl: "[PENDIENTE: enlace de Google Maps]",
      mapEmbedUrl: "[PENDIENTE: URL de inserción del mapa]",
    },
  ],
};

// ---------------------------------------------------------------------------
// Preguntas frecuentes
// ---------------------------------------------------------------------------

export const faq = {
  eyebrow: "Preguntas frecuentes",
  title: "Resolvemos tus dudas",
  items: [
    {
      q: "¿Los tratamientos duelen?",
      a: "La sensación varía de persona a persona y según el tratamiento. En general se describe como una molestia leve y, cuando es adecuado, usamos anestesia tópica o local para que tu experiencia sea lo más cómoda posible. En tu valoración te explicamos qué puedes esperar.",
    },
    {
      q: "¿Cuánto duran los resultados?",
      a: "Depende del tratamiento, de tu organismo y de tus hábitos. Algunos resultados son temporales y requieren mantenimiento. En tu valoración te damos una referencia honesta para tu caso, sin promesas.",
    },
    {
      q: "¿Cómo agendo mi cita?",
      a: "Escríbenos por WhatsApp con el botón de esta página. Te preguntaremos qué te interesa y en qué sede prefieres atenderte, y te compartiremos los horarios disponibles.",
    },
    {
      q: "¿Cuánto cuestan los tratamientos?",
      a: "El costo depende del tratamiento y del plan que necesites. Por eso primero hacemos una valoración y te compartimos el presupuesto antes de iniciar cualquier procedimiento.",
    },
    {
      q: "¿Qué cuidados debo tener después?",
      a: "Cada tratamiento tiene indicaciones específicas. Al terminar tu cita te las damos por escrito y quedamos al pendiente por WhatsApp para resolver cualquier duda.",
    },
  ],
};

// ---------------------------------------------------------------------------
// CTA final y footer
// ---------------------------------------------------------------------------

export const finalCta = {
  title: "Tu primera conversación con ZEYA empieza aquí",
  text: "Cuéntanos qué te gustaría lograr y te orientamos para encontrar la opción adecuada para ti.",
  cta: "Escríbenos por WhatsApp",
};

// ---------------------------------------------------------------------------
// Aviso de privacidad (México · LFPDPPP)
// ---------------------------------------------------------------------------
// BORRADOR para revisión legal. Cubre el contacto por este sitio, WhatsApp e
// Instagram. El aviso que firman los pacientes en la clínica (con sus datos de
// salud) debe entregarse por separado en la primera cita.

export const privacy = {
  title: "Aviso de privacidad",
  // Quita este aviso (déjalo como cadena vacía "") cuando un abogado apruebe el texto.
  draftNotice: "[PENDIENTE: revisión legal] Este aviso es un borrador y aún no está aprobado.",
  updated: "[PENDIENTE: fecha de última actualización]",
  intro:
    "En ZEYA Armonización Orofacial cuidamos tus datos personales y te explicamos con claridad qué hacemos con ellos, de acuerdo con la legislación mexicana en materia de protección de datos personales en posesión de los particulares.",
  sections: [
    {
      title: "1. Quién es el responsable de tus datos",
      paragraphs: [
        "El responsable del tratamiento de tus datos personales es [PENDIENTE: nombre completo o razón social], con domicilio en [PENDIENTE: domicilio fiscal completo, México].",
        "Para cualquier duda sobre este aviso puedes escribirnos a [PENDIENTE: correo para asuntos de privacidad].",
      ],
    },
    {
      title: "2. Qué datos personales recabamos",
      paragraphs: ["Según cómo te pongas en contacto con nosotros, podemos tratar:"],
      items: [
        "Datos de identificación y contacto: nombre, teléfono, correo electrónico y la ciudad o sede de tu interés.",
        "Los mensajes que nos envías por WhatsApp, Instagram u otros medios, y la información que decidas compartir en ellos.",
        "Datos que nos proporcionas en tu valoración o cita, ya en la clínica: edad, antecedentes médicos y dentales, alergias, medicamentos y otra información de salud necesaria para atenderte. Estos son datos personales sensibles.",
        "Fotografías o videos clínicos de tu rostro o sonrisa, únicamente si nos autorizas por separado.",
      ],
    },
    {
      title: "3. Para qué usamos tus datos",
      paragraphs: ["Finalidades necesarias, sin las cuales no podemos atenderte:"],
      items: [
        "Responder tus mensajes y darte información sobre nuestros servicios.",
        "Agendar, confirmar o reprogramar tus citas.",
        "Realizar tu valoración, brindarte el servicio y dar seguimiento a tu tratamiento.",
        "Integrar y conservar tu expediente clínico conforme a la normativa sanitaria aplicable.",
        "Cumplir obligaciones legales, fiscales y sanitarias.",
      ],
      afterParagraphs: [
        "Finalidades adicionales, que puedes rechazar sin que eso afecte tu atención:",
      ],
      afterItems: [
        "Enviarte información, recordatorios o promociones de ZEYA.",
        "Usar fotografías o videos de tu caso en nuestras redes o materiales, solo con tu autorización escrita y por separado.",
      ],
      closing:
        "Si no quieres que usemos tus datos para las finalidades adicionales, escríbenos al correo indicado en la sección 1 y lo registraremos.",
    },
    {
      title: "4. Datos sensibles y tu consentimiento",
      paragraphs: [
        "Los datos de salud son sensibles. Solo los recabamos cuando son necesarios para atenderte y los tratamos únicamente con tu consentimiento expreso, que te pediremos por escrito en tu primera cita. No te pediremos datos de salud por este sitio web.",
      ],
    },
    {
      title: "5. Con quién compartimos tus datos",
      paragraphs: [
        "No vendemos tus datos. Podemos compartirlos, solo cuando sea necesario, con:",
      ],
      items: [
        "Autoridades sanitarias, fiscales o judiciales, cuando la ley nos lo exija.",
        "Proveedores que nos prestan servicios, como las plataformas de mensajería (por ejemplo, WhatsApp) y de alojamiento del sitio, que tratan datos por nuestra cuenta y bajo obligaciones de confidencialidad.",
        "[PENDIENTE: agregar otros terceros, p. ej. laboratorios dentales o aseguradoras, si aplica]",
      ],
    },
    {
      title: "6. Tus derechos (ARCO) y cómo ejercerlos",
      paragraphs: [
        "Tienes derecho a acceder a tus datos, rectificarlos si son inexactos, cancelarlos u oponerte a su uso para ciertos fines, así como a revocar tu consentimiento. Para ejercerlos, envía una solicitud a [PENDIENTE: correo para derechos ARCO] con tu nombre, un medio para responderte, una copia de tu identificación y la descripción clara de lo que solicitas.",
        "Te responderemos en los plazos que establece la ley. Si consideras que tu derecho no fue atendido o que tus datos se trataron de forma indebida, puedes acudir a la autoridad competente en materia de protección de datos personales.",
      ],
    },
    {
      title: "7. Cookies y tecnologías de rastreo",
      paragraphs: [
        "Este sitio no utiliza cookies de seguimiento ni herramientas de analítica. Para mostrar las tipografías, tu navegador solicita archivos a los servidores de Google Fonts, que pueden recibir tu dirección IP. Los enlaces a WhatsApp e Instagram te llevan a plataformas de terceros con sus propios avisos de privacidad.",
        "[PENDIENTE: si se agregan analítica o publicidad (p. ej. Google Analytics o Meta Pixel), actualizar esta sección y mostrar un aviso de cookies]",
      ],
    },
    {
      title: "8. Cambios a este aviso",
      paragraphs: [
        "Si este aviso cambia, publicaremos la nueva versión en esta página con su fecha de actualización.",
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// Helpers de WhatsApp
// ---------------------------------------------------------------------------

/**
 * Enlace de WhatsApp con mensaje prellenado.
 * Mientras el número esté en [PENDIENTE], usa el enlace general para que el botón funcione.
 */
export function whatsappLink(message?: string): string {
  const number = site.whatsapp.number.replace(/\D/g, "");
  if (isPending(site.whatsapp.number) || !number) return site.whatsapp.general;
  const text = message ?? site.whatsapp.defaultMessage;
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
