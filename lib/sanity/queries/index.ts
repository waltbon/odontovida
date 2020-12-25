import fetchHomePage from './home-query.sanity';
import  * as fetchServices from './services-query.sanity';
import * as fetchDepartments from './departments-query.sanity';
import fetchGeneralInfo from './general-info-query.sanity';
import * as fetchSingleDoctor from './doctor-query.sanity';
import * as fetchDoctors from './all-doctors-query.sanity';
import * as faqsQuery from './faqs-query.sanity';
import * as centroRadiologicoPageQuery from './centro-radiologico-page-query.sanity';

export {
    fetchHomePage,
    centroRadiologicoPageQuery,
    fetchServices,
    fetchDepartments,
    fetchGeneralInfo,
    fetchSingleDoctor,
    fetchDoctors,
    faqsQuery
}