import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ISeo from '../../utils/interfaces/pages/seo.interface';
import { IService } from '../../utils/interfaces/pages/service.interface';
import { IDepartment } from '../../utils/interfaces/pages/department.interface';
import { IGeneralInfo } from '../../utils/interfaces/pages/general-info.interface';
import { IDoctor } from '../../utils/interfaces/pages/doctor.interface';
import { MainInfoContext } from '../../contexts/MainInfoContext';

interface Props {
}

export default class extends React.Component<Props> {
    render() {
        return (<>
                <MainInfoContext.Consumer>
                    {(value) => (
                        <div id="page" className="page">
                            {
                                !value.isLoading && (<>
                                    <Header />
                                    {this.props.children}
                                    <Footer  />
                                </>)
                            }
                        </div>
                    )}
                </MainInfoContext.Consumer>
            </>);
    }
}