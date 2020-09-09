import React from 'react';

export default class KPIsInfo extends React.Component {
    render() {
        return (<div id="statistic-1" className="bg-scroll statistic-section division">
            <div className="container white-color">
                <div className="row">
                    {/* STATISTIC BLOCK #1 */}
                    <div className="col-md-6 col-lg-3">
                        <div className="statistic-block icon-lg wow fadeInUp" data-wow-delay="0.4s">
                            {/* Icon  */}
                            <span className="flaticon-062-cardiogram-3" />
                            {/* Text */}
                            <h5 className="statistic-number">1,<span className="count-element">632</span></h5>
                            <p className="txt-400">Pacientes felices</p>
                        </div>
                    </div>
                    {/* STATISTIC BLOCK #2 */}
                    <div className="col-md-6 col-lg-3">
                        <div className="statistic-block icon-lg wow fadeInUp" data-wow-delay="0.6s">
                            {/* Icon  */}
                            <span className="flaticon-137-doctor" />
                            {/* Text */}
                            <h5 className="statistic-number"><span className="count-element">7</span></h5>
                            <p className="txt-400">Doctores especialistas</p>
                        </div>
                    </div>
                    {/* STATISTIC BLOCK #3 */}
                    <div className="col-md-6 col-lg-3">
                        <div className="statistic-block icon-lg wow fadeInUp" data-wow-delay="0.8s">
                            {/* Icon  */}
                            <span className="flaticon-065-hospital-bed" />
                            {/* Text */}
                            <h5 className="statistic-number"><span className="count-element">6</span></h5>
                            <p className="txt-400">Especialidades</p>
                        </div>
                    </div>
                    {/* STATISTIC BLOCK #4 */}
                    <div className="col-md-6 col-lg-3">
                        <div className="statistic-block icon-lg wow fadeInUp" data-wow-delay="1s">
                            {/* Icon  */}
                            <span className="flaticon-040-placeholder" />
                            {/* Text */}
                            <h5 className="statistic-number"><span className="count-element">5</span></h5>
                            <p className="txt-400">Tratamientos</p>
                        </div>
                    </div>
                </div>  {/* End row */}
            </div>	 {/* End container */}
        </div>
        )
    }
}