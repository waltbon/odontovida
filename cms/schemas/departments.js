export default {
  name: 'departments',
  title: 'Especialidades',
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
      },
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'text',
    },
    {
      name: 'mainImage',
      title: 'Imagen principal',
      type: 'image'
    },
    {
      name: 'icon',
      title: 'Icono (css)',
      type: 'string'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    }
  ]
}
