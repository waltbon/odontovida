import { IService } from '../interfaces/pages/service.interface'
import { IDepartment } from '../interfaces/pages/department.interface';

export const generateServiceUrl = (service: IService) => {
    if (!service) {
        return null;
    }
    return `/tratamientos/${service?.slug}`
}

export const generateDepartmentUrl = (dpt: IDepartment) => {
    if (!dpt) {
        return null;
    }
    return `/especialidades/${dpt?.slug}`;
}