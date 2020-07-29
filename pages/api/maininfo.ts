import * as fetchCMS from '../../lib/sanity/queries';

export default async (req, res) => {
    const data = await Promise.all([
        fetchCMS.fetchServices(), 
        fetchCMS.fetchDepartments(),
        fetchCMS.fetchGeneralInfo(),
        fetchCMS.fetchAllDoctors()
    ]);
    res.status(200);
    res.json({
        services: data[0],
        departments: data[1],
        generalInfo: data[2],
        allDoctors: data[3]
    });
}