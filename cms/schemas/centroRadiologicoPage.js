export default {
  name: 'centroRadiologicoPage',
  title: 'Página del Centro Radiológico',
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
    },
    {
      title: 'Slider de imágenes',
      name: 'headerSliders',
      type: 'array',
      of: [{
        title: 'Slider',
        name: 'slider',
        type: 'object',
        fields: [{
          title: 'Título',
          type: 'string',
          name: 'title'
        }, {
          type: 'text',
          title: 'Párrafo',
          name: 'text'
        }, {
          name: 'image',
          title: 'Imagen (1920x1080)',
          type: 'image'
        }]
      }]
    },
    {
      title: 'Introducción',
      name: 'aboutSection',
      type: 'object',
      collapsible: true,
      collapsed: true,
      required: true,
      fields: [{
        name: 'subtitle',
        title: 'Sub título',
        type: 'string'
      }, {
        name: 'title',
        title: 'Título',
        type: 'string'
      }, {
        name: 'description',
        title: 'Descripción',
        type: 'markdown'
      }, {
        name: 'image',
        title: 'Imagen (550x620)',
        type: 'image'
      }
      ]
    }, 
    {
      title: 'Servicios',
      name: 'centroRadiologicoServices',
      type: 'array',
      of: [{
        title: 'Servicio',
        name: 'centroRadiologicoService',
        type: 'object',
        fields: [{
          type: 'string',
          title: 'Título',
          name: 'name'
        }, {
          type: 'slug',
          title: 'Slug',
          name: 'slug',
          options: {
            source: 'centroRadiologicoService.title',
            maxLength: 96
          }
        }, {
          type: 'markdown',
          name: 'content',
          title: 'Contenido'
        }, {
          name: 'image',
          title: 'Imagen (700x700)',
          type: 'image'
        }, 
        {
          title: 'Galería de imágenes',
          name: 'centroRadServiceGallery',
          type: 'array',
          of: [{
            title: 'Imagen',
            name: 'centroRadServiceGalleryImage',
            type: 'object',
            fields: [{
              title: 'Título',
              name: 'title',
              type: 'string',
            }, {
              name: 'image',
              title: 'Imagen',
              type: 'image'
            }]
          }]
        }]
      }]
    }
  ]
}