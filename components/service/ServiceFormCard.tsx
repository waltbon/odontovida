import React from 'react';
import { Formik, Field, Form, useFormik } from 'formik';
import { IService } from '../../utils/interfaces/pages/service.interface';
import { IDepartment } from '../../utils/interfaces/pages/department.interface';
import { HttpService } from '../../lib/http';

interface Props {
    serviceType: 'service' | 'department';
    services: IService[] | IDepartment[];
    currentServiceId: string;
}

interface Item {
    key: string;
    name: string;
}

interface State {
    isSending: boolean;
    sent: boolean;
    serviceId: string;
    serviceItems: Item[];
}

export default class extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        const serviceItems = this.props.serviceType === 'service' ?
            (this.props.services as IService[]).map(svc => ({ key: svc._id, name: svc.title })) :
            (this.props.services as IDepartment[]).map(svc => ({ key: svc._id, name: svc.title }));

        this.state = {
            serviceItems,
            isSending: false,
            sent: false,
            serviceId: this.props.currentServiceId
        };
    }

    async sendMail(data) {
        const { serviceItems } = this.state;
        const service = serviceItems.find(it => it.key === this.state.serviceId);
        data.serviceName = service.name;
        const http = new HttpService(process.env.API_BASE_URL);
        return await http.executePost('/api/service', data);
    }

    render() {
        return (
            <Formik
                initialValues={{
                    fx_name: "",
                    fx_email: "",
                    fx_phone: "",
                    fx_comments: "",
                    fx_patient: ""
                }}
                onSubmit={(values) => {
                    this.setState({
                        isSending: true
                    });

                    this.sendMail(values).then((res) => {
                        this.setState({
                            isSending: false,
                            sent: true
                        });
                    });
                }}>
                <div className="form-holder mb-40">
                    <Form name="contactForm" className="row contact-form">

                        <div id="input-name" className="col-md-12 col-lg-12">
                            <Field type="text" name="fx_name" className="form-control name" placeholder="Nombre completo*" htmlFor="fx_name" />
                        </div>

                        <div id="input-email" className="col-md-12 col-lg-12">
                            <Field type="email" name="fx_email" className="form-control name" placeholder="Correo electrónico*" htmlFor="fx_email" />
                        </div>

                        <div id="input-phone" className="col-md-12 col-lg-12">
                            <Field type="text" name="fx_phone" className="form-control name" placeholder="Teléfono*" htmlFor="fx_phone" />
                        </div>

                        <div id="input-patient" className="col-md-12 col-lg-12 input-patient">
                            <Field as="select" id="inlineFormCustomSelect3" name="fx_patient" className="custom-select patient" required>
                                <option value="-">Nos ha visitado anteriormente?*</option>
                                <option value="Si">Sí, ya soy cliente</option>
                                <option value="No">No, es primera vez</option>
                            </Field>
                        </div>

                        <div id="input-message" className="col-md-12 col-lg-12">
                            <Field component="textarea" name="fx_comments" className="form-control" placeholder="Déjenos sus comentarios o consultas"></Field>
                        </div>

                        {
                            !this.state.sent &&
                            <div className="col-md-12 col-lg-12 input-patient">
                                <button type="submit" className="btn btn-blue blue-hover mt-10">Enviar información</button>
                            </div>
                        }

                        {
                            this.state.sent &&
                            <div className="col-lg-12 mt-15 form-btn">
                                <p>Hemos recibido tu mensaje, nos pondremos en contacto muy pronto</p>
                            </div>
                        }
                    </Form>
                </div>
            </Formik>)
    }
}