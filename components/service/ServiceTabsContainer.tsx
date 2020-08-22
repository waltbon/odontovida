import React from 'react';
import { MainInfoContext } from '../../contexts/MainInfoContext';
import ServiceTabItem from './ServiceTabItem';

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    handleOnClick(e) {

    }

    render() {

        return (
            <section id="tabs-1" className="tabs-section division">
                <MainInfoContext.Consumer>
                    {
                        value => {
                            const tabsInfo = (value.services || []).map((service, ix) => {
                                return {
                                    tabId: `tab-${service._id}`,
                                    tabIdList: `tab-${service._id}-list`,
                                    service,
                                    selected: ix === 0
                                }
                            }) || [];
                            return (<div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div id="tabs-nav" className="list-group ">
                                        <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                            {
                                                tabsInfo.map(tabInfo => {
                                                    return (
                                                        <li key={tabInfo.tabId} className="nav-item icon-xs">
                                                            <a className={tabInfo.selected ? "nav-link active" : "nav-link"} id={tabInfo.tabIdList} data-toggle="pill" href={`#${tabInfo.tabId}`} role="tab" aria-controls={tabInfo.selected.toString()} >
                                                                {/* <span className="flaticon-083-stethoscope"  />  */}
                                                                {tabInfo.service.title}
                                                            </a>
                                                        </li>)
                                                })

                                            }
                                        </ul>
                                    </div>	{/* END TABS NAVIGATION */}

                                    <div className="tab-content" id="pills-tabContent">
                                        {
                                            tabsInfo.map(tabInfo => (<ServiceTabItem tabIdList={tabInfo.tabIdList} selected={tabInfo.selected} key={tabInfo.tabId} tabId={tabInfo.tabId} service={tabInfo.service} />))
                                        }
                                    </div>
                                </div>
                            </div>     {/* End row */}
                        </div>)
                        }
                    }
                </MainInfoContext.Consumer>
            </section>
        )
    }
}