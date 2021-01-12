import React from 'react';

interface Props {
    name: string;
    text: string;
}

export default class extends React.Component<Props> {
    render(){
        return (<div className="review-2">
            <div className="review-txt text-center">

                <div className="quote"><img src="/images/temp/dental-01.jpg" alt="quote-img" /></div>
                <div className="testimonial-avatar">
                    {/* <img src="images/review-author-1.jpg" alt="testimonial-avatar" /> */}
                </div>

                <p>{this.props.text}</p>
                <div className="review-author">
                    <h5 className="h5-sm">{this.props.name}</h5>
                    <span></span>
                </div>

            </div>
        </div>)
    }
}