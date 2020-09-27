import React from 'react';
import { Formik, Field, Form } from 'formik';
import { MainInfoContext } from '../../contexts/MainInfoContext';
import { HttpService } from '../../lib/http';

export default class extends React.Component<any, State> {
    formik: any;
    constructor(props) {
        super(props);
        this.state = {
            sent: false,
            isSending: false,
        };
    }

    async sendMail(data) {
        const http = new HttpService(process.env.API_BASE_URL);
        return await http.executePost('/api/contact', data);
    }

    render() {
        return (
            <MainInfoContext.Consumer>
                {
                    value => {
                        const dropdownOptions = value.services.map(service => {
                            return {
                                value: service._id,
                                label: service.title
                            }
                        });
                        return (
                            <Formik
                                initialValues={{
                                    fx_name: "",
                                    fx_email: "",
                                    fx_phone: "",
                                    fx_comments: ""
                                }}
                                onSubmit={(values) => {
                                    this.setState({
                                        isSending: true
                                    })

                                    this.sendMail(values).then((res) => {
                                        this.setState({
                                            isSending: false,
                                            sent: true
                                        });
                                    });
                                }}>
                                <Form name="contactForm" className="row contact-form">
                                    <div id="input-name" className="col-md-12 col-lg-12">
                                        <Field type="text" name="fx_name" className="form-control name" placeholder="Nombre completo*" htmlFor="fx_name"/>
                                    </div>
                                    <div id="input-email" className="col-md-12 col-lg-6">
                                        <Field type="email" name="fx_email" className="form-control email" placeholder="Correo electrónico*" htmlFor="fx_email"/>
                                    </div>
                                    <div id="input-phone" className="col-md-12 col-lg-6">
                                        <Field type="tel" name="fx_phone" className="form-control phone" placeholder="Número de teléfono*" htmlFor="fx_phone" />
                                    </div>
                                    {/* <div id="input-patient" className="col-md-12 col-lg-6 input-patient">
                                        <Select name="serviceId" value={this.state.form.serviceId} options={dropdownOptions} onChange={this.onChangeSelectHandle} className="input-patient" />
                                    </div> */}
                                    <div id="input-message" className="col-lg-12 input-message">
                                        <Field component="textarea" className="form-control message" name="fx_comments" rows={6} placeholder="Escríbanos aquí su consulta..." required htmlFor="fx_comments"/>
                                    </div>
                                    {
                                        !this.state.sent &&
                                        <div className="col-lg-12 mt-15 form-btn">
                                            <button type="submit" className="btn btn-blue blue-hover submit">Enviar mensaje</button>
                                        </div>
                                    }

                                    {
                                        this.state.sent &&
                                        <div className="col-lg-12 mt-15 form-btn">
                                            <p>Hemos recibido tu mensaje, nos pondremos en contacto muy pronto</p>
                                        </div>
                                    }

                                    {
                                        this.state.isSending &&
                                        <div className="col-lg-12 contact-form-msg text-center">
                                            <div className="sending-msg"><span className="loading" /></div>
                                        </div>
                                    }
                                </Form>
                            </Formik>)
                    }
                }
            </MainInfoContext.Consumer>
        )
    }
}

interface State {
    sent: boolean;
    isSending: boolean;
}