import React from 'react';

interface Props {
    subtitle: string;
    title: string
    paragraph: string
}

export default class extends React.Component<Props> {
    render() {
        return (<section id="hero-1" className="bg-fixed hero-section division">
            <div className="container">
                <div className="row d-flex align-items-center">
                    {/* HERO TEXT */}
                    <div className="col-md-8 col-lg-7 col-xl-6">
                        <div className="hero-txt mb-40">
                            {/* Title */}
                            <h5 className="steelblue-color">{this.props.subtitle}</h5>
                            <h2 className="steelblue-color">{this.props.title}</h2>
                            {/* Text */}
                            <p className="p-lg">{this.props.paragraph}
                            </p>
                            {/* Button */}
                            <a href="about-us.html" className="btn btn-blue blue-hover">More About Clinic</a>
                        </div>
                    </div>	{/* END HERO TEXT */}
                    {/* HERO IMAGE */}
                    <div className="col-md-4 col-lg-5 col-xl-6" style={{minHeight: "500px"}}>
                        <div className="hero-1-img text-center">
                            {/* <img className="img-fluid" src="/images/temp/dental-06.jpg"  width="400" alt="hero-image" /> */}
                        </div>
                    </div>
                </div>    {/* End row */}
            </div>     {/* End container */}
        </section>
        )
    }
}