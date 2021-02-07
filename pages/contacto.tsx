import { NextPage } from 'next'
import Layout from '../components/common/Layout'
import { MainInfoContext } from '../contexts/MainInfoContext'
import Meta from '../components/common/Meta'
import ISeo from '../utils/interfaces/pages/seo.interface'
import ContactForm from '../components/forms/ContactForm'

interface Props {
    seo: ISeo
}

const ContactPage: NextPage<Props> = ({ seo }) => {
    return (
        <Layout>
            <Meta seo={seo} />
            <MainInfoContext.Consumer>
                {
                    value => (<>
                        <section id="contacts-1" className="wide-60 contacts-section division">
                            <div className="container">
                                {/* SECTION TITLE */}
                                <div className="row">
                                    <div className="col-lg-10 offset-lg-1 section-title">
                                        {/* Title 	*/}
                                        <h3 className="h3-md steelblue-color">¿Cómo le podemos ayudar?</h3>
                                        {/* Text */}
                                        <p>Nuestros especialistas están listos para atenderle, si tiene alguna consulta o emergencia nosotros podemos ayudarle, no dude en contactarnos ya. </p>
                                    </div>
                                </div>
                                <div className="row">
                                    {/* CONTACTS INFO */}
                                    <div className="col-md-5 col-lg-4">
                                        {/* General Information */}
                                        <div className="contact-box mb-40">
                                            <h5 className="h5-sm steelblue-color">Información general</h5>
                                            <p>{value.generalInfo.largeAddress}</p>
                                            <p>Correo electrónico: <a href={value.generalInfo.contactEmail} className="blue-color">{value.generalInfo.contactEmail}</a></p>
                                        </div>
                                        {/* Patient Experience */}
                                        <div className="contact-box mb-40">
                                            <h5 className="h5-sm steelblue-color">¿Tiene alguna consulta o emergencia?</h5>
                                            <p>Atendemos su consulta por WhatsApp.</p>
                                            <p><i className="fab fa-whatsapp"></i> 
                                            <a href={`https://wa.me/${value.generalInfo.mainCellPhone.trim().replace('+','').replace(' ','')}`}>
                                                {value.generalInfo.mainCellPhone}
                                            </a>
                                            </p>
                                        </div>
                                        {/* Working Hours */}
                                        <div className="contact-box mb-40">
                                            <h5 className="h5-sm steelblue-color">Nuestros horarios</h5>
                                            <p>{value.generalInfo.largeSchedule}</p>
                                        </div>
                                        {/* Waze */}
                                        <div className="contact-box mb-40">
                                            <h5 className="h5-sm steelblue-color">¿Cómo llegar a nuestra clínica?</h5>
                                            <a href={process.env.WAZE_URL}> <i className="fa fa-waze"></i> Ver en Waze</a> 
                                        </div>
                                    </div>	{/* END CONTACTS INFO */}
                                    {/* CONTACT FORM */}
                                    <div className="col-md-7 col-lg-8">
                                        <div className="form-holder mb-40">
                                            <ContactForm />
                                        </div>
                                    </div> 	{/* END CONTACT FORM */}
                                </div>	{/* End row */}
                            </div>	   {/* End container */}
                        </section>

                    </>)
                }
            </MainInfoContext.Consumer>
        </Layout>)
}

ContactPage.getInitialProps = () => {
    return {
        seo: {
            title: 'Clínica Odontovida. Contáctenos',
            description: 'Contáctenos y le atenderemos lo más pronto posible'
        }
    }
}

export default ContactPage;