import React from 'react';
import { IService } from '../../utils/interfaces/pages/service.interface';
import { IDepartment } from '../../utils/interfaces/pages/department.interface';

interface Props {
    serviceType: 'service'|'department';
    services: IService[] | IDepartment[];
    currentServiceId: string;
}

interface Item {
    key: string;
    name: string;
}

interface State {
    data: {
        name: string;
        email: string;
        phone: string;
        recurrentCustomer: string;
        comments?: string;
    }
}

export default class extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
        this.state = {
            data: {} as any
        };
    }

    onHandleSubmit(e) {
        e.preventDefault();
    }

    onHandleChange(e) {
        e.preventDefault();
        const { name, value } = e.target;

    }

    render() {
        const svcItems: Item[] = this.props.serviceType === 'service' ?
            (this.props.services as IService[]).map(svc => ({ key: svc._id, name: svc.title })) :
            (this.props.services as IDepartment[]).map(svc => ({ key: svc._id, name: svc.title }));

        return (
            <div className="form-holder mb-40">
                <form name="contactForm" className="row contact-form">

                    <div id="input-name" className="col-md-12 col-lg-12">
                        <input type="text" value={this.state.data.name} onChange={this.onHandleChange} name="name" className="form-control name" placeholder="Nombre completo*" required />
                    </div>

                    <div id="input-email" className="col-md-12 col-lg-12">
                        <input type="text" value={this.state.data.email} onChange={this.onHandleChange} name="email" className="form-control email" placeholder="Correo electrónico*" required />
                    </div>

                    <div id="input-phone" className="col-md-12 col-lg-12">
                        <input type="tel" value={this.state.data.phone} onChange={this.onHandleChange} name="phone" className="form-control phone" placeholder="Teléfono*" required />
                    </div>

                    <div id="input-patient" className="col-md-12 col-lg-12 input-patient">
                        <select value={this.state.data.recurrentCustomer} onChange={this.onHandleChange} id="inlineFormCustomSelect3" name="patient" className="custom-select patient" required>
                            <option value="">Nos ha visitado anteriormente?*</option>
                            <option value="Si">Sí, ya soy cliente</option>
                            <option value="No">No, es primera vez</option>
                        </select>
                    </div>

                    <div id="input-service" className="col-md-12 col-lg-12 input-patient">
                        <select id="inlineFormCustomSelect3" name="patient" className="custom-select patient" required>
                            <option value="">Seleccione un servicio*</option>
                            {
                                Array.isArray(this.props.services) && svcItems.map(service =>
                                    <option key={service.key} value={service.key}>{service.name}</option>)
                            }
                        </select>
                    </div>
                    <div className="col-md-12 col-lg-12 input-patient">
                        <button type="submit" className="btn btn-blue blue-hover mt-10">Enviar información</button>
                    </div>
                </form>
            </div>
        )
    }
}