import { IService } from './service.interface';
import { IDepartment } from './department.interface';
import { IGeneralInfo } from './general-info.interface';
import { IDoctor } from './doctor.interface';

export interface CommonAppProps {
    services: IService[],
    departments: IDepartment[];
    generalInfo: IGeneralInfo;
    allDoctors: IDoctor[]
}