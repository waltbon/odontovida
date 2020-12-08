export default {
  name: 'faqs',
  title: 'Preguntas Frecuentes',
  type: 'document',
  fields: [{
    title: 'Seo',
    name: 'seo',
    type: 'object',
    collapsible: true,
    collapsed: true,
    required: true,
    fields: [{
      name: 'title',
      title: 'Título',
      type: 'string'
    }, {
      name: 'description',
      title: 'Descripción',
      type: 'string'
    }]
  },
  {
    name: 'title',
    title: 'Título principal',
    type: 'string'
  },
  {
    name: 'description',
    title: 'Párrafo principal',
    type: 'text'
  },
  {
    title: 'Preguntas y respuestas',
    name: 'faqs',
    type: 'array',
    of: [{
      title: 'Pregunta y respuesta',
      name: 'faq',
      type: 'object',
      fields: [{
        type: 'string',
        title: 'Pregunta',
        name: 'question'
      }, {
        title: 'Respuesta',
        name: 'answer',
        type: 'blockContent',
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
