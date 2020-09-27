import React, { Fragment } from 'react';
import VideoPlayer from './VideoPlayer';

interface Props {
    title: string;
    subtitle: string;
    descriptions: string[];
    videoUrl: string;
}

export default class extends React.Component<Props> {
    render() {
        return (<section id="video-1" className="wide-60 video-section division">
            <div className="container">
                <div className="row d-flex align-items-center">
                    {/* VIDEO TEXT */}
                    <div className="col-lg-6">
                        <div className="txt-block pc-30 mb-40 wow fadeInUp" data-wow-delay="0.4s">
                            {/* Section ID */}
                            <span className="section-id blue-color">{this.props.subtitle}</span>
                            {/* Title */}
                            <h3 className="h3-md steelblue-color">{this.props.title}</h3>

                            {
                                Array.isArray(this.props.descriptions) && this.props.descriptions.map((paragraph, ix) =>
                                    (<div key={ix} className="box-list">
                                        <div className="box-list-icon"><i className="fas fa-genderless" /></div>
                                        <p>{paragraph}</p>
                                    </div>)
                                )
                            }
                        </div>
                    </div>
                    {/* VIDEO LINK */}
                    <div className="col-lg-6">
                        <div className="video-preview mb-40 text-center wow fadeInUp" data-wow-delay="0.6s">
                            {/* Change the link HERE!!! */}
                            <VideoPlayer url={this.props.videoUrl} />
                        </div>
                    </div>	{/* END VIDEO LINK */}
                </div>	    {/* End row */}
            </div>	    {/* End container */}
        </section>

        )
    }
}