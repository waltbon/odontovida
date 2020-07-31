import React from 'react';

export default class extends React.Component {
    render() {
        return (
            <div className="form-holder mb-40">
                <form name="contactForm" className="row contact-form">

                    <div id="input-name" className="col-md-12 col-lg-12">
                        <input type="text" name="name" className="form-control name" placeholder="Enter Your Name*" required />
                    </div>

                    <div id="input-email" className="col-md-12 col-lg-12">
                        <input type="text" name="email" className="form-control email" placeholder="Enter Your Email*" required />
                    </div>

                    <div id="input-phone" className="col-md-12 col-lg-12">
                        <input type="tel" name="phone" className="form-control phone" placeholder="Enter Your Phone Number*" required />
                    </div>

                    <div id="input-patient" className="col-md-12 col-lg-12 input-patient">
                        <select id="inlineFormCustomSelect3" name="patient" className="custom-select patient" required>
                            <option value="">Have You Visited Us Before?*</option>
                            <option>New Patient</option>
                            <option>Returning Patient</option>
                            <option>Other</option>
                        </select>
                    </div>
                </form>
            </div>
        )
    }
}