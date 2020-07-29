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
      }]
    }],
}
