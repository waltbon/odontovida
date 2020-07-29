export default {
  name: 'doctors',
  title: 'Doctores Especialistas',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string'
    },
    {
      name: 'fullname',
      title: 'Nombre completo',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'fullname',
        maxLength: 200
      }
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'blockContent'
    },{
      name: 'personalImage',
      title: 'Foto horizontal',
      type: 'image'
    },
  ]
}
