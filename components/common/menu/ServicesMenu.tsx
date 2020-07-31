import React from 'react';
import { IService } from '../../../utils/interfaces/pages/service.interface';
import { IDepartment } from '../../../utils/interfaces/pages/department.interface';

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
                        {/* MEGAMENU QUICK LINKS */}
                        <ul className="col-lg-3 col-md-12 col-xs-12 link-list">
                            <li className="title">Tratamientos:</li>
                            {
                                Array.isArray(this.props.services) && this.props.services.map(service => 
                                    (<li key={service.slug} onMouseOver={this.onMouseOverHandler}><a id={service.slug} href={`/servicios/${service.slug}`}>{service.title}</a></li>))                                
                            }
                        </ul>
                        {/* MEGAMENU FEATURED NEWS */}
                        <div className="col-lg-5 col-md-12 col-xs-12">
                            {/* Title */}
                            <h3 className="title">Featured News:</h3>
                            {/* Image */}
                            <div className="fluid-width-video-wrapper"><img src="/images/temp/dental-02.jpg" alt="featured-news" /></div>

                            {
                                this.state.currentService && 
                                (<>
                                    <h5 className="h5-xs"><a href="#">{this.state.currentService.title}</a></h5>
                                    <p className="wsmwnutxt">{this.state.currentService.shortDescription}</p>
                                </>)
                            }
                        </div>	{/* END MEGAMENU FEATURED NEWS */}
                        {/* MEGAMENU LATEST NEWS */}
                    </div>  {/* End row */}
                </div>  {/* End container */}
            </div>  {/* End wsmegamenu */}
        </li>
        )
    }
}