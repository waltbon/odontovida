import React from 'react';

interface Props {
    title: string;
    list: {
        text: string;
        url: string
    }[]
}

export default class extends React.Component<Props> {
    render() {
        return (<div id="breadcrumb" className="division">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className=" breadcrumb-holder">

                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    {
                                        Array.isArray(this.props.list) && this.props.list.map((item, ix) => (
                                            <li key={ix} className="breadcrumb-item"><a href={item.url}>{item.text}</a></li>
                                        ))
                                    }
                                    {/* <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb-item"><a href="all-services.html">Our Services</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Service Single #2</li> */}
                                </ol>
                            </nav>
                            {/* Title */}
                            <h4 className="h1-md blue-color">{this.props.title}</h4>
                        </div>
                    </div>
                </div>  {/* End row */}
            </div>	{/* End container */}
        </div>

        )
    }
}