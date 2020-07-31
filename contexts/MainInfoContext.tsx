import { createContext, useState, useEffect } from 'react';
import { IGeneralInfo } from '../utils/interfaces/pages/general-info.interface';
import { IService } from '../utils/interfaces/pages/service.interface';
import { IDepartment } from '../utils/interfaces/pages/department.interface';
import { IDoctor } from '../utils/interfaces/pages/doctor.interface';
import { MainInfoApi } from '../lib/api';
declare var $: any;

interface MainInfo {
    isLoading: boolean;
    generalInfo: IGeneralInfo;
    services: IService[];
    departments: IDepartment[];
    doctors: IDoctor[];
}
 
export const MainInfoContext = createContext<MainInfo>({
    isLoading: true,
    services: [],
    departments: [],
    doctors: [],
    generalInfo: {
        contactEmail: '',
        mainPhone: '',
        shortAddress: '',
        shortSchedule: '',
        socialMedia: {
            facebook: '',
            instagram: ''
        }
    }
})

export default ({value, children}) => {
    const [isLoading = true, setIsLoading] = useState<boolean>();
    const [generalInfo, setGeneralInfo] = useState<IGeneralInfo>();
    const [doctors, setDoctors] = useState<IDoctor[]>();
    const [departments, setDepartments] = useState<IDepartment[]>();
    const [services, setServices] = useState<IService[]>();

    useEffect(() => {
        if (!isLoading) {
            return;
        }
        console.log('Info loaded not true');
        loadInfo().then();
    });

    const loadInfo = async () => {
        const mainInfo = await MainInfoApi.getMainInfo();
        setGeneralInfo(mainInfo.generalInfo);
        setDoctors(mainInfo.allDoctors);
        setServices(mainInfo.services);
        setDepartments(mainInfo.departments);
        setIsLoading(false);

        var preloader = $('#loader-wrapper'),
        loader = preloader.find('.loader-inner');
        loader.fadeOut();
        preloader.delay(500).fadeOut('slow');
    }

    return <MainInfoContext.Provider 
        value={{
            isLoading,
            generalInfo,
            services,
            departments,
            doctors
        }}>{children}</MainInfoContext.Provider>
}