import React from 'react';
import { IService } from '../../utils/interfaces/pages/service.interface';
import { urlFor } from '../../lib/sanity/imageBuilder';

export default class extends React.Component<{
    tabId: string;
    tabIdList: string;
    service: IService;
    selected: boolean
}> {
    render() {

        const svc = this.props.service;
        const tabClass = this.props.selected ? "tab-pane fade active show" : "tab-pane fade";
        return (<div className={tabClass} id={this.props.tabId} role="tabpanel" aria-labelledby={this.props.tabIdList}>
            <div className="row d-flex align-items-center">
                {/* TAB-1 IMAGE */}
                <div className="col-lg-6">
                    <div className="tab-img">
                        <img className="img-fluid" src={this.props.service.mainImageUrl} alt="tab-image" />
                    </div>
                </div>
                {/* TAB-1 TEXT */}
                <div className="col-lg-6">
                    <div className="txt-block pc-30">
                        {/* Title */}
                        <h3 className="h3-md steelblue-color">{svc.title}</h3>
                        {/* Text */}
                        <p className="mb-30">
                            {svc.shortDescription}
                        </p>
                        {/* Options List */}
                        <div className="row">
                            <div className="col-xl-6">
                                {/* Option #1 */}
                                <div className="box-list m-top-15">
                                    <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right" /></div>
                                    <p className="p-sm">Nemo ipsam egestas volute and turpis dolores quaerat</p>
                                </div>
                                {/* Option #2 */}
                                <div className="box-list">
                                    <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right" /></div>
                                    <p className="p-sm">Magna luctus tempor</p>
                                </div>
                                {/* Option  #3 */}
                                <div className="box-list">
                                    <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right" /></div>
                                    <p className="p-sm">An enim nullam tempor at pretium purus blandit</p>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                {/* Option #4 */}
                                <div className="box-list">
                                    <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right" /></div>
                                    <p className="p-sm">Magna luctus tempor blandit a vitae suscipit mollis</p>
                                </div>
                                {/* Option #5 */}
                                <div className="box-list m-top-15">
                                    <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right" /></div>
                                    <p className="p-sm">Nemo ipsam egestas volute turpis dolores quaerat</p>
                                </div>
                                {/* Option #6 */}
                                <div className="box-list">
                                    <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right" /></div>
                                    <p className="p-sm">An enim nullam tempor</p>
                                </div>
                            </div>
                        </div>	{/* End Options List */}
                        {/* Button */}
                        <a href={`/servicios/${svc.slug}`} className="btn btn-blue blue-hover mt-30">Ver más información y agendar</a>
                    </div>
                </div>	{/* END TAB-1 TEXT */}
            </div>
        </div>)
    }
}