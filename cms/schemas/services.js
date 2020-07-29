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
      type: 'string'
    },
  ]
}
