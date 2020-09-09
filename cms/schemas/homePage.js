export default {
  name: 'homePage',
  title: 'Página de Inicio',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string'
    },
    {
      title: 'Seo',
      name: 'seo',
      type: 'object',
      collapsible: true,
      collapsed: true,
      required: true,
      fields: [{
        name: 'title',
        title: 'Title',
        type: 'string'
      }, {
        name: 'description',
        title: 'Description',
        type: 'string'
      }]

    }, {
      title: 'Encabezado Principal',
      name: 'mainHeader',
      type: 'object',
      collapsible: true,
      collapsed: true,
      required: true,
      fields: [{
        name: 'title',
        title: 'Título principal',
        type: 'string'
      }, {
        name: 'subtitle',
        title: 'Subtítulo',
        type: 'string'
      }, {
        name: 'paragraph',
        title: 'Párrafo secundario',
        type: 'string'
      }, {
        name: 'mainImage',
        title: 'Imagen principal',
        type: 'image'
      }]
    }, {
      title: 'Items de sección de introducción',
      name: 'aboutSection',
      type: 'array',
      of: [{
        title: 'Item',
        name: 'item',
        type: 'object',
        fields: [{
          type: 'string',
          title: 'Título',
          name: 'title'
        }, {
          type: 'string',
          title: 'Subtítulo',
          name: 'subtitle'
        }, {
          type: 'text',
          title: 'Párrafo',
          name: 'paragraph'
        }]
      }]
    }, {
      title: 'Sección de bienvenida',
      name: 'welcomeSection',
      type: 'object',
      collapsible: true,
      collapsed: true,
      required: true,
      fields: [{
        name: 'title',
        title: 'Título',
        type: 'string'
      }, {
        name: 'subtitle',
        title: 'Subtítulo',
        type: 'string'
      }, {
        name: 'description',
        title: 'Descripción',
        type: 'text'
      }]
    }, {
      title: 'Conozca a los odontólogos',
      name: 'doctrosIntroSection',
      type: 'object',
      collapsible: true,
      collapsed: true,
      required: true,
      fields: [{
        name: 'title',
        title: 'Título',
        type: 'string'
      }, {
        name: 'subtitle',
        title: 'Subtítulo',
        type: 'string'
      }, {
        name: 'description',
        title: 'Descripción',
        type: 'text',
      }, {
        name: 'image',
        title: 'Imagen',
        type: 'image'
      }]
    }, {
      title: 'Testimoniales',
      name: 'testimonials',
      type: 'array',
      of: [{
        title: 'Testimonial',
        name: 'testimonial',
        type: 'object',
        fields: [{
          type: 'string',
          title: 'Nombre de la persona',
          name: 'name'
        }, {
          type: 'text',
          title: 'Texto',
          name: 'text'
        }]
      }]
    }
  ]
}
