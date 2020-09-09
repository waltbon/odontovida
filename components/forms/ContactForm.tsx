import React from 'react';
import Select from 'react-select';
import { MainInfoContext } from '../../contexts/MainInfoContext';
import { HttpService } from '../../lib/http';

export default class extends React.Component<any, State> {
    constructor(props) {
        super(props);
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onChangeSelectHandle = this.onChangeSelectHandle.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
        this.state = {
            sent: false,
            isSending: false,
            form: {
                fx_name: '',
                fx_email: '',
                fx_phone: '',
                serviceId: '',
                serviceName: '',
                serviceType: 'service',
                fx_comments: ''
            }
        }
    }

    onChangeSelectHandle = selectedOption => {
        const { form } = this.state;
        form.serviceId = selectedOption.value;
        form.serviceName = selectedOption.label;
        this.setState({
            form
        });
    };

    onHandleChange(e) {
        e.preventDefault();
        const { value, name } = e.target;
        const { form } = this.state;
        form[name] = value;
        this.setState({
            form
        });
    }

    private isValidForm() {
        return true;
    }

    onHandleSubmit(e) {
        e.preventDefault();

        this.setState({
            isSending: true
        })

        if (!this.isValidForm()) {
            return;
        }

        this.sendMail(this.state.form).then((res) => {
            console.log('Form sent', res)
            this.setState({
                isSending: false,
                sent: true
            });
        });
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
                            <form onSubmit={this.onHandleSubmit} name="contactForm" className="row contact-form">
                                <div id="input-name" className="col-md-12 col-lg-6">
                                    <input type="text" name="fx_name" className="form-control name" placeholder="Nombre completo*"
                                        value={this.state.form.fx_name} onChange={this.onHandleChange} required />
                                </div>
                                <div id="input-email" className="col-md-12 col-lg-6">
                                    <input type="text" name="fx_email" className="form-control email" placeholder="Correo electrónico*"
                                        value={this.state.form.fx_email} onChange={this.onHandleChange} required />
                                </div>
                                <div id="input-phone" className="col-md-12 col-lg-6">
                                    <input type="tel" name="fx_phone" className="form-control phone" placeholder="Número de teléfono*"
                                        value={this.state.form.fx_phone} onChange={this.onHandleChange} />
                                </div>
                                <div id="input-patient" className="col-md-12 col-lg-6 input-patient">
                                    <Select name="serviceId" value={this.state.form.serviceId} options={dropdownOptions} onChange={this.onChangeSelectHandle} className="input-patient" />
                                </div>
                                <div id="input-message" className="col-lg-12 input-message">
                                    <textarea className="form-control message" name="fx_comments" rows={6} placeholder="Your Message ..." required
                                        value={this.state.form.fx_comments} onChange={this.onHandleChange} />
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
                            </form>)
                    }
                }
            </MainInfoContext.Consumer>
        )
    }
}

interface State {
    sent: boolean;
    isSending: boolean;
    form: {
        fx_name: string;
        fx_email: string;
        fx_phone: string;
        serviceId: string;
        serviceName: string;
        serviceType: 'service' | 'department';
        fx_comments: string;
    }
}