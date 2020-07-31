import React from 'react';
import { IService } from '../../utils/interfaces/pages/service.interface';

interface Props {
    services: IService[];
    currentServiceId: string;
}

export default class extends React.Component<Props> {
    render() {
        return (
            <div className="form-holder mb-40">
                <form name="contactForm" className="row contact-form">

                    <div id="input-name" className="col-md-12 col-lg-12">
                        <input type="text" name="name" className="form-control name" placeholder="Nombre completo*" required />
                    </div>

                    <div id="input-email" className="col-md-12 col-lg-12">
                        <input type="text" name="email" className="form-control email" placeholder="Correo electrónico*" required />
                    </div>

                    <div id="input-phone" className="col-md-12 col-lg-12">
                        <input type="tel" name="phone" className="form-control phone" placeholder="Teléfono*" required />
                    </div>

                    <div id="input-patient" className="col-md-12 col-lg-12 input-patient">
                        <select id="inlineFormCustomSelect3" name="patient" className="custom-select patient" required>
                            <option value="">Nos ha visitado anteriormente?*</option>
                            <option value="Si">Sí, ya soy cliente</option>
                            <option value="Si">No, es primera vez</option>
                        </select>
                    </div>

                    <div id="input-patient" className="col-md-12 col-lg-12 input-patient">
                        <select id="inlineFormCustomSelect3" name="patient" className="custom-select patient" required>
                            <option value="">Seleccione un servicio*</option>
                            {
                                Array.isArray(this.props.services) && this.props.services.map(service =>(
                                    <option key={service._id}>{service.title}</option>
                                ))
                            }
                        </select>
                    </div>
                </form>
            </div>
        )
    }
}