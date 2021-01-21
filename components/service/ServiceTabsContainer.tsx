import React from 'react';
import { generateServiceUrl } from '../../utils/common/urls';
import { IService } from '../../utils/interfaces/pages/service.interface';
import { Markdown } from '../ui';
import { ServiceTitle } from './ServiceTitle';
declare var $: any;
interface Props {
    services: IService[]
}

export default class extends React.Component<Props> {
    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    componentDidMount() {
    }

    handleOnClick(e: any, tabid: string) {
        e.preventDefault();
        // $('html, body').animate({
        //     scrollTop: parseInt($('#pills-tabContent').offset().top) - 300
        // }, 2000);
        document.querySelector('#pills-tabContent-container').scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'start'
          });
    }

    render() {
        const tabsInfo = (this.props.services || []).map((service, ix) => {
            return {
                tabId: `tab-${service._id}`,
                tabIdList: `tab-${service._id}-list`,
                service,
                selected: ix === 0
            }
        }) || [];

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 section-title text-left">
                        <h2 className="h2-md">Nuestros servicios</h2>
                        <p style={{ paddingLeft: '0px' }}>Conozca nuestros servicios y siéntase en la libertad de enviarnos sus consultas, nuestros especialistas pueden ayudarle.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div id="tabs-nav" className="list-group text-center clearfix">
                            <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                {
                                    tabsInfo.map(tab => {
                                        const aClassName = `nav-link ${tab.selected ? ' active' : ''}`;
                                        return (
                                            <li key={tab.tabId} className="nav-item icon-xs">
                                                <a className={aClassName} id={tab.tabIdList} data-toggle="pill" onClick={(e) => this.handleOnClick(e, tab.tabId)} href={`#${tab.tabId}`} role="tab" aria-controls={tab.tabId} aria-selected={tab.selected}>
                                                    {tab.service.title}
                                                </a>
                                            </li>)
                                    })
                                }
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-12" id="pills-tabContent-container">
                        <div className="tab-content" id="pills-tabContent">
                            {
                                tabsInfo.map(tab => {
                                    const className = `tab-pane fade show ${tab.selected ? ' active' : ''}`;
                                    const url = generateServiceUrl(tab.service);
                                    return (
                                        <div key={tab.tabId} className={className} id={tab.tabId} role="tabpanel" aria-labelledby={tab.tabIdList}>
                                            <ServiceTitle service={tab.service} size="sm" />
                                            <div className="mt-2">
                                                <Markdown content={tab.service.shortDescription} />
                                            </div>

                                            <div className="mt-20 text-left">
                                                <a href={url} className="btn btn-lg btn-lime white-hover mt-2" >
                                                    Más sobre {tab.service.title.toLowerCase()}...</a>
                                                <span className="w-100" style={{color:'#9e9e9e', marginTop:'8px', display:'inline-block', fontSize: '14px'}}>Conozca más detalles y háganos sus consultas.</span>
                                            </div>
                                        </div>
                                    )
                                }
                                )
                            }
                        </div>
                    </div>

                </div>	{/* END TABS NAVIGATION */}
            </div>
        )
    }
}