import Cookie from 'cookie';
import * as fetchCMS from '../../lib/sanity/queries';

export default async (req, res) => {
    if (req.cookies && req.cookies.maininfo) {
        const mainInfoCookieStr = Cookie.parse(req.cookies.maininfo);
        try {
            res.json(mainInfoCookieStr);
            return;
        } catch (error) {
            res.status(500);
            return;
        }
    }

    const promiseData = await Promise.all([
        fetchCMS.fetchServices.fetchAllServicesDetailsSimple(), 
        fetchCMS.fetchDepartments.fetchAllDepartmentsSimple(),
        fetchCMS.fetchGeneralInfo(),
        fetchCMS.fetchDoctors.getAllDoctorsSimpleInfo()
    ]);

    const data = {
        services: promiseData[0],
        departments: promiseData[1],
        generalInfo: promiseData[2],
        allDoctors: promiseData[3]
    };
    const dataString = JSON.stringify(data);
    res.setHeader('Set-Cookie', Cookie.serialize('maininfo', dataString, { path: '/' }));
    res.status(200);
    res.json(data);
}