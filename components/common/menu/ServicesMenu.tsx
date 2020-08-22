import React from 'react';
import { IService } from '../../../utils/interfaces/pages/service.interface';
import { urlFor } from '../../../lib/sanity/imageBuilder';
import { generateServiceUrl } from '../../../utils/common/urls';

interface Props {
    services: IService[]
}

interface State {
    currentService: IService
}

export default class extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.onMouseOverHandler = this.onMouseOverHandler.bind(this);
        this.state = {
            currentService: null
        }
    }

    onMouseOverHandler(e) {
        e.preventDefault();
        const { id } = e.target;

        if (!id) {
            this.setState({
                currentService: null
            });
        }

        const service = this.props.services.find(svc => svc.slug === id);

        this.setState({
            currentService: service
        })
    }

    render() {
        return (<li aria-haspopup="true"><a href="#">Odontología General<span className="wsarrow" /></a>
            <div className="wsmegamenu clearfix">
                <div className="container">
                    <div className="row">

                        <ul className="col-lg-3 col-md-10 col-xs-12 link-list">
                            <li className="title">¿Qué tratamientos ofrecemos?</li>
                            {
                                Array.isArray(this.props.services) && this.props.services.map(service =>
                                    (<li key={service.slug} onMouseOver={this.onMouseOverHandler}><a id={service.slug} href={generateServiceUrl(this.state.currentService)}>{service.title}</a></li>))
                            }
                        </ul>

                        <div className="col-lg-8 col-md-12 col-xs-12">
                            <div className="fluid-width-video-wrapper">
                                {
                                    this.state.currentService &&
                                    (<div className="row">
                                        <div className="col-md-5">
                                            <img src={this.state.currentService.mainImageUrl} alt="featured-news" />
                                        </div>
                                        <div className="col-md-7">
                                            <h2 className="title">{this.state.currentService?.title}</h2>
                                            <p className="wsmwnutxt">{this.state.currentService.shortDescription}</p>
                                            <a className="btn btn-blue text-white" href={generateServiceUrl(this.state.currentService)}>Ir a información detallada</a>
                                        </div>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        )
    }
}