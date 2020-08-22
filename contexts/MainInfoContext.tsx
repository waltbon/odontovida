import { createContext, useState, useEffect } from 'react';
import { IGeneralInfo } from '../utils/interfaces/pages/general-info.interface';
import { IService } from '../utils/interfaces/pages/service.interface';
import { IDepartment } from '../utils/interfaces/pages/department.interface';
import { IDoctor } from '../utils/interfaces/pages/doctor.interface';
declare var $: any;

interface MainInfo {
    isLoading: boolean;
    isLoaded: boolean;
    generalInfo: IGeneralInfo;
    services: IService[];
    departments: IDepartment[];
    doctors: IDoctor[];
    principalDoctor: IDoctor;
}
 
export const MainInfoContext = createContext<MainInfo>({
    isLoading: false,
    isLoaded: false,
    services: [],
    departments: [],
    doctors: [],
    principalDoctor: null,
    generalInfo: null
});

export const MainInfoContextProvider = ({value, children}) => {
    const {props} = children;
    const cpGeneralInfo = props?.generalInfo || null;
    const cpDoctors = props?.allDoctors || [];
    const cpdepartments = props?.departments || [];
    const cpServices = props?.services || [];

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [generalInfo, setGeneralInfo] = useState<IGeneralInfo>(cpGeneralInfo);
    const [doctors, setDoctors] = useState<IDoctor[]>(cpDoctors);
    const [departments, setDepartments] = useState<IDepartment[]>(cpdepartments);
    const [services, setServices] = useState<IService[]>(cpServices);
    const [principalDoctor, setPrincipalDoctor] = useState<IDoctor>(null);
    
    useEffect(() => {
        if (isLoading) {
            return;
        }

        setIsLoading(true)    
        setGeneralInfo(props.generalInfo);
        setDoctors(props.allDoctors);
        setServices(props.services);
        setDepartments(props.departments);
        loadInfo().then();
    });
    
    const loadInfo = async () => {
        if (!doctors) {
            return;
        }
        const principal = doctors.find(dr=> dr.fullname.toLowerCase().includes('step'));
        if (principal) {
            setPrincipalDoctor(principal);
        }

        setIsLoaded(true);
        var preloader = $('#loader-wrapper'),
        loader = preloader.find('.loader-inner');
        loader.fadeOut();
        preloader.delay(500).fadeOut('slow');
        setIsLoading(false);
    }

    return <MainInfoContext.Provider 
        value={{
            isLoading,
            isLoaded,
            generalInfo,
            services,
            departments,
            doctors,
            principalDoctor
        }}>{children}</MainInfoContext.Provider>
}