import React from 'react';
import service from '../../pages/api/service';
import { IService } from '../../utils/interfaces/pages/service.interface';
interface Props {
    service: IService;
    url: string
}

export default class extends React.Component<Props> {
    render() {
        return (
            <div className="sbox-7 icon-xs wow fadeInUp" data-wow-delay="0.4s">
                <a href="service-1.html">
                    <span className="flaticon-083-stethoscope blue-color"></span>
                    <div className="sbox-7-txt">
                        <h5 className="h5-sm steelblue-color">{this.props.service.title}</h5>
                        <p className="p-sm">{this.props.service.shortDescription}</p>
                    </div>
                </a>
            </div>
        )
    }
}