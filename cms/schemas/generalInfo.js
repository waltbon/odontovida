export default {
    name: 'generalInfo',
    title: 'Información General',
    type: 'document',
    fields: [{
        name: 'contactEmail',
        title: 'Correo de contacto',
        type: 'string'
      }, {
        name: 'shortAddress',
        title: 'Dirección Corta',
        type: 'string'
      }, {
        name: 'largeAddress',
        title: 'Dirección larga',
        type: 'text'
      }, {
        name: 'shortSchedule',
        title: 'Horarios corto',
        type: 'string'
      }, {
        name: 'largeSchedule',
        title: 'Horarios descripción larga',
        type: 'text'
      }, {
        name: 'mainPhone',
        title: 'Teléfono principal',
        type: 'string'
      }, {
        name: 'mainCellPhone',
        title: 'Teléfono móvil',
        type: 'string'
      },
      {
        title: 'Redes sociales',
        name: 'socialMedia',
        type: 'object',
        collapsible: true,
        collapsed: true,
        required: true,
        fields: [{
          name: 'facebook',
          title: 'Facebook Url',
          type: 'string'
        }, {
          name: 'instagram',
          title: 'Instagram',
          type: 'string'
        }]

      }, 
    ],
}
  