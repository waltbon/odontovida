export default {
    name: 'useCases',
    title: 'Casos de uso',
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
            name: 'service',
            title: 'Servicio',
            type: 'reference',
            to: { type: 'services' }
        },
        {
            name: 'doctor',
            title: 'Doctor',
            type: 'reference',
            to: { type: 'doctors' }
        },
        {
            title: 'Imágenes',
            name: 'useCaseImages',
            type: 'array',
            of: [{
                title: 'Imagen',
                name: 'useCaseImage',
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
        }
    ]
}