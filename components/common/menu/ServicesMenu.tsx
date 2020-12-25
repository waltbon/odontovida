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
                                    (<li key={service.slug} onMouseOver={this.onMouseOverHandler}><a id={service.slug} href={generateServiceUrl(service)}>{service.title}</a></li>))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </li>
        )
    }
}