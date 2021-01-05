import React from 'react';

interface Props {
    sliderId: string;
    subtitle: string;
    title: string
    paragraph: string;
    mainImageUrl: string;
}


export default class extends React.Component<Props> {

    heroClass = (mainImageUrl: string) => ({
        // "backgroundImage": `url(${mainImageUrl})`,
        background: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.6)), url(${mainImageUrl}), no-repeat, fixed`,
        paddingTop: "30px"
    })

    render() {
        const mainClass = this.heroClass(this.props.mainImageUrl);
        return (
            <li id={this.props.sliderId}>
                <img src={this.props.mainImageUrl} alt="" />

                <div className="caption d-flex align-items-center right-align">


                    <div className="container">
                        <div className="row">
                            {/* HERO TEXT */}
                            <div className="col-md-9 col-lg-8 col-xl-8">
                                <div className="caption-txt text-left white-color">
                                    {/* Title */}
                                    <h5 className="white-color">{this.props.subtitle}</h5>
                                    <h2 className="white-color">{this.props.title}</h2>
                                    {/* Text */}
                                    <p className="white-color p-lg">{this.props.paragraph}
                                    </p>
                                    {/* Button */}
                                    {/* <a href="about-us.html" className="btn btn-blue blue-hover">More About Clinic</a> */}
                                </div>
                            </div>	{/* END HERO TEXT */}
                            {/* HERO IMAGE */}
                        </div>    {/* End row */}
                    </div>     {/* End container */}
                </div>
            </li>
        )
    }
}