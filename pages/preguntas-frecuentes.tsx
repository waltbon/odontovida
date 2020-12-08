import { NextPage } from 'next'
import React from 'react'
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs'
import FAQCard from '../components/breadcrumbs/faqs/FAQCard'
import Layout from '../components/common/Layout'
import Meta from '../components/common/Meta'
import { MainInfoContext } from '../contexts/MainInfoContext'
import { faqsQuery } from '../lib/sanity/queries'
import { IFAQ } from '../utils/interfaces/pages/faqs.interface'

interface Props extends IFAQ {
}

const FAQsPage: NextPage<Props> = (faqPage) => {
    return (
        <Layout>
            <MainInfoContext.Consumer>
                {
                    value => (<>
                        <Meta seo={faqPage.seo} />
                        <Breadcrumbs title="Preguntas Frecuentes" 

                         list={[

                        ]} />
                        <section id="faqs-page" className="wide-80 faqs-section division">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="questions-holder pr-30">
                                            <h3 className="h3-md dark-color">{faqPage.title}</h3>
                                            <p>{faqPage.description}</p>
                                            <div id="accordion" role="tablist">
                                                {/* <h5 className="h5-xl lime-color">1. Preguntas Generales</h5> */}
                                                {
                                                    Array.isArray(faqPage.faqs) &&
                                                    faqPage.faqs.map((faq, ix) => <FAQCard key={faq._key} faq={faq} collapsed={ix===0} />)
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>)
                }
            </MainInfoContext.Consumer>
        </Layout>
    )
}

FAQsPage.getInitialProps = async (): Promise<any> => {
    return await faqsQuery.getFAQsPage()
}
export default FAQsPage;