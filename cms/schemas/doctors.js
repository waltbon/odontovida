export default {
  name: 'doctors',
  title: 'Doctores Especialistas',
  type: 'document',
  fields: [
    {
      name: 'fullname',
      title: 'Nombre completo',
      type: 'string'
    },
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
        source: 'fullname',
        maxLength: 200
      }
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'blockContent'
    }, {
      name: 'personalImage',
      title: 'Foto horizontal',
      type: 'image'
    },
    {
      title: 'Especialidad',
      name: 'department',
      type: 'reference',
      to: [{ type: 'departments' }]
    }, {
      title: 'Títulos',
      name: 'titles',
      type: 'array',
      of: [{
        title: 'titles',
        name: 'tile',
        type: 'object',
        fields: [{
          type: 'string',
          title: 'Título',
          name: 'title'
        }, {
          type: 'string',
          title: 'Universidad',
          name: 'university'
        }, {
          type: 'string',
          title: 'Años',
          name: 'years'
        }]
      }]
    }
  ],
  preview: {
    select: {
      title: 'fullname',
      subtitle: 'title'
    }
  }
}
