import React from 'react';

export default class extends React.Component {
    render() {
        return (
            <header id="header-2" className="header ">
                <div className="wsmobileheader clearfix">
                    <a id="wsnavtoggle" className="wsanimated-arrow"><span /></a>
                    <span className="smllogo"><img src="images/logo.png" width={180} height={40} alt="mobile-logo" /></span>
                    <a href="tel:123456789" className="callusbtn"><i className="fas fa-phone" /></a>
                </div>
                {/* HEADER WIDGETS */}
                <div className="hero-widget clearfix">
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            {/* LOGO IMAGE */}
                            {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 360 x 80 pixels) */}
                            <div className="col-md-5 col-xl-6">
                                <div className="desktoplogo"><a href="#hero-9"><img src="images/logo.png" width={180} height={40} alt="header-logo" /></a></div>
                            </div>
                            {/* WIDGETS */}
                            <div className="col-md-7 col-xl-6">
                                <div className="row">
                                    {/* Emergency Cases Widget 
						    		<div class="col-md-6">
						    			<div class="header-widget icon-xs">
						    				<span class="flaticon-039-emergency-call-1 blue-color"></span>
							    			<div class="header-widget-txt">
								    			<p>Emergency Cases</p> 
												<p class="header-widget-phone steelblue-color">1-800-123-4560</p>
											</div>
						    			</div>
						    		</div>*/}
                                    {/* Working Hours Widget */}
                                    <div className="col-md-6">
                                        <div className="header-widget icon-xs">
                                            <span className="flaticon-092-clock blue-color" />
                                            <div className="header-widget-txt">
                                                <p className="txt-400">Mon – Fri : - 8:00 AM - 8:00 PM</p>
                                                <p className="lightgrey-color">Sat - Sun : - Closed</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Location Widget */}
                                    <div className="col-md-6">
                                        <div className="header-widget icon-xs">
                                            <span className="flaticon-021-hospital-9 blue-color" />
                                            <div className="header-widget-txt">
                                                <p className="txt-400">121 King Street, Melbourne,</p>
                                                <p className="lightgrey-color">Victoria 3000 Australia</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>	{/* END WIDGETS */}
                        </div>
                    </div>
                </div>	{/* END HEADER WIDGETS */}
                {/* NAVIGATION MENU */}
                <div className="wsmainfull menu clearfix">
                    <div className="wsmainwp clearfix">
                        {/* LOGO IMAGE */}
                        {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 360 x 80 pixels) */}
                        <div className="desktoplogo"><a href="#hero-9"><img src="images/logo.png" width={180} height={40} alt="header-logo" /></a></div>
                        {/* MAIN MENU */}
                        <nav className="wsmenu clearfix">
                            <ul className="wsmenu-list">
                                {/* DROPDOWN MENU */}
                                <li aria-haspopup="true"><a href="#">Inicio</a></li>
                                {/* PAGES */}
                                <li aria-haspopup="true"><a href="#">Pages <span className="wsarrow" /></a>
                                    <div className="wsmegamenu clearfix">
                                        <div className="container">
                                            <div className="row">
                                                {/* MEGAMENU LINKS */}
                                                <ul className="col-lg-3 col-md-12 col-xs-12 link-list">
                                                    <li className="title">Standard Pages:</li>
                                                    <li><a href="about-us.html">About Us Page</a></li>
                                                    <li><a href="who-we-are.html">Who We Are</a></li>
                                                    <li><a href="all-services.html">Our Services</a></li>
                                                    <li><a href="service-1.html">Service Single #1</a></li>
                                                    <li><a href="service-2.html">Service Single #2</a></li>
                                                </ul>
                                                {/* MEGAMENU LINKS */}
                                                <ul className="col-lg-3 col-md-12 col-xs-12 link-list">
                                                    <li className="title">Medical Pages:</li>
                                                    <li><a href="all-departments.html">Our Departments</a></li>
                                                    <li><a href="department-single.html">Department Single</a></li>
                                                    <li><a href="all-doctors.html">Meet the Doctors</a></li>
                                                    <li><a href="doctor-1.html">Doctor's Profile #1</a></li>
                                                    <li><a href="doctor-2.html">Doctor's Profile #2</a></li>
                                                    <li><a href="timetable.html">Doctors Timetable</a></li>
                                                </ul>
                                                {/* MEGAMENU LINKS */}
                                                <ul className="col-lg-3 col-md-12 col-xs-12 link-list">
                                                    <li className="title">Special Pages:</li>
                                                    <li><a href="pricing-1.html">Pricing Packages #1</a></li>
                                                    <li><a href="pricing-2.html">Pricing Packages #2</a></li>
                                                    <li><a href="appointment.html">Make an Appointment</a></li>
                                                    <li><a href="faqs.html">FAQs Page</a></li>
                                                    <li><a href="terms.html">Terms of Use</a></li>
                                                </ul>
                                                {/* MEGAMENU LINKS */}
                                                <ul className="col-lg-3 col-md-12 col-xs-12 link-list">
                                                    <li className="title">Auxiliary Pages:</li>
                                                    <li><a href="gallery.html">Our Gallery</a></li>
                                                    <li><a href="blog-listing.html">Blog Listing Page</a></li>
                                                    <li><a href="single-post.html">Single Blog Post</a></li>
                                                    <li><a href="contacts-1.html">Contact Us #1</a></li>
                                                    <li><a href="contacts-2.html">Contact Us #2</a></li>
                                                </ul>
                                            </div>  {/* End row */}
                                        </div>  {/* End container */}
                                    </div>  {/* End wsmegamenu */}
                                </li>	{/* END PAGES */}
                                {/* HALF MENU */}
                                <li aria-haspopup="true"><a href="#">Half Menu <span className="wsarrow" /></a>
                                    <div className="wsmegamenu clearfix halfmenu">
                                        <div className="container-fluid">
                                            <div className="row">
                                                {/* Links */}
                                                <ul className="col-lg-6 col-md-12 col-xs-12 link-list">
                                                    <li className="title">For Patients:</li>
                                                    <li><a href="#">Meet The Doctors</a></li>
                                                    <li><a href="#">Patient Info Sheets</a></li>
                                                    <li><a href="#">Online Patients Portal</a></li>
                                                    <li><a href="#">Patients Testimonials</a></li>
                                                    <li><a href="#">Blog &amp; Latest News</a></li>
                                                </ul>
                                                {/* Links */}
                                                <ul className="col-lg-6 col-md-12 col-xs-12 link-list">
                                                    <li className="title">Quick Links:</li>
                                                    <li><a href="#">Terms &amp; Privacy Policy</a></li>
                                                    <li><a href="#">Donor Privacy Policy</a></li>
                                                    <li><a href="#">Workers Compensation</a></li>
                                                    <li><a href="#">Insurance Information</a></li>
                                                    <li><a href="#">After Hours Care</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>	{/* END HALF MENU */}
                                {/* MEGAMENU */}
                                <li aria-haspopup="true"><a href="#">Mega Menu <span className="wsarrow" /></a>
                                    <div className="wsmegamenu clearfix">
                                        <div className="container">
                                            <div className="row">
                                                {/* MEGAMENU QUICK LINKS */}
                                                <ul className="col-lg-3 col-md-12 col-xs-12 link-list">
                                                    <li className="title">Quick Links:</li>
                                                    <li><a href="#">For Referring Doctors</a></li>
                                                    <li><a href="#">Terms &amp; Privacy Policy</a></li>
                                                    <li><a href="#">Donor Privacy Policy</a></li>
                                                    <li><a href="#">Patient Info Sheets</a></li>
                                                    <li><a href="#">Online Patients Portal</a></li>
                                                    <li><a href="#">Insurance Information</a></li>
                                                    <li><a href="#">Patients Testimonials</a></li>
                                                </ul>
                                                {/* MEGAMENU FEATURED NEWS */}
                                                <div className="col-lg-5 col-md-12 col-xs-12">
                                                    {/* Title */}
                                                    <h3 className="title">Featured News:</h3>
                                                    {/* Image */}
                                                    <div className="fluid-width-video-wrapper"><img src="images/blog/featured-news.jpg" alt="featured-news" /></div>
                                                    {/* Text */}
                                                    <h5 className="h5-xs"><a href="#">5 Benefits of integrative medicine</a></h5>
                                                    <p className="wsmwnutxt">Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor
                                                    tempus feugiat dolor impedit magna purus at pretium gravida donec
                    </p>
                                                </div>	{/* END MEGAMENU FEATURED NEWS */}
                                                {/* MEGAMENU LATEST NEWS */}
                                                <div className="col-lg-4 col-md-12 col-xs-12">
                                                    {/* Title */}
                                                    <h3 className="title">Latest News:</h3>
                                                    {/* Latest News */}
                                                    <ul className="latest-news">
                                                        {/* Post #1 */}
                                                        <li className="clearfix d-flex align-items-center">
                                                            {/* Image */}
                                                            <img className="img-fluid" src="images/blog/header-post-1.jpg" alt="blog-post-preview" />
                                                            {/* Text */}
                                                            <div className="post-summary">
                                                                <a href="single-post.html">Etiam sapien risus ante auctor tempus accumsan an empor ...</a>
                                                                <p>43 Comments</p>
                                                            </div>
                                                        </li>
                                                        {/* Post #2 */}
                                                        <li className="clearfix d-flex align-items-center">
                                                            {/* Image */}
                                                            <img className="img-fluid" src="images/blog/header-post-2.jpg" alt="blog-post-preview" />
                                                            {/* Text */}
                                                            <div className="post-summary">
                                                                <a href="single-post.html">Blandit tempor a sapien ipsum, porta risus auctor justo ...</a>
                                                                <p>38 Comments</p>
                                                            </div>
                                                        </li>
                                                        {/* Post #3 */}
                                                        <li className="clearfix d-flex align-items-center">
                                                            {/* Image */}
                                                            <img className="img-fluid" src="images/blog/header-post-3.jpg" alt="blog-post-preview" />
                                                            {/* Text */}
                                                            <div className="post-summary">
                                                                <a href="single-post.html">Cursus risus auctor tempus risus laoreet turpis auctor varius ...</a>
                                                                <p>29 Comments</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>	{/* END MEGAMENU LATEST NEWS */}
                                            </div>  {/* End row */}
                                        </div>  {/* End container */}
                                    </div>  {/* End wsmegamenu */}
                                </li>	{/* END MEGAMENU */}
                                {/* SIMPLE NAVIGATION LINK */}
                                <li className="nl-simple" aria-haspopup="true"><a href="#">Simple Link</a></li>
                                {/* HIDDEN NAVIGATION MENU BUTTON */}
                                <li className="nl-simple header-btn" aria-haspopup="true"><a className="blue-hover" href="timetable.html">Our Doctors Timetable</a></li>
                            </ul>
                        </nav>	{/* END MAIN MENU */}
                        {/* NAVIGATION MENU BUTTON */}
                        <div className="header-button">
                            <span className="nl-simple header-btn blue-hover"><a href="timetable.html">Our Doctors Timetable</a></span>
                        </div>
                    </div>
                </div>	{/* END NAVIGATION MENU */}
            </header>
        )
    }
}