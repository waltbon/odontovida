import React from 'react';
import { urlFor } from '../../../lib/sanity/imageBuilder';
import { IProps } from './types'

export const ServiceTitle: React.FC<IProps> = ({ 
    service, 
    size
}) => {
    const imgWidth = size === 'lg' ? 110 : size === 'md' ? 90 : 80;
    const titleClass = `h3-md mr-10 mb-2`;
    return (
        <div className="border-bottom-lime mb-20 pb-6" style={{ width: '100%', display: 'flex' }}>
            <h3 className={titleClass} style={{ alignSelf: 'flex-end' }}>{service.title}</h3>
            <img className="mr-10" style={{ flexDirection: 'column', alignSelf: 'center' }}  src={urlFor(service.mainImage).width(imgWidth).url()} alt="" />
        </div>
    )
}