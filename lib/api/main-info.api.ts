import { HttpService } from '../http';
import { IDoctor } from '../../utils/interfaces/pages/doctor.interface';
import { IGeneralInfo } from '../../utils/interfaces/pages/general-info.interface';
import { IService } from '../../utils/interfaces/pages/service.interface';
import { IDepartment } from '../../utils/interfaces/pages/department.interface';

interface IMainInfo {
    allDoctors: IDoctor[];
    generalInfo: IGeneralInfo;
    services: IService[];
    departments: IDepartment[]
}

export const getMainInfo = async (): Promise<IMainInfo> => {
    const http = new HttpService(process.env.API_SERVER_URL);
    const response = await http.executeGet<IMainInfo>('/api/maininfo');
    return response;
}