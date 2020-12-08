export default {
  name: 'services',
  title: 'Servicios (Odont. General)',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string'
    },
    {
      name: 'subtitle',
      title: 'Sub título',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'shortDescription',
      title: 'Descripción corta',
      type: 'markdown'
    },
    {
      name: 'mainImage',
      title: 'Imagen principal',
      type: 'image'
    },
    {
      name: 'body',
      title: 'Contenido',
      type: 'blockContent'
    },
    {
      title: 'Doctor',
      name: 'doctor',
      type: 'reference',
      to: [{type: 'doctors'}]
    }
  ]
}
