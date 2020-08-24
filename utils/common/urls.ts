import { IService } from '../interfaces/pages/service.interface'
import { IDepartment } from '../interfaces/pages/department.interface';
import { IDoctor } from '../interfaces/pages/doctor.interface';

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

export const generateDoctorUrl = (dr: IDoctor) => {
    if (!dr) {
        return null;
    }
    return `/especialidades/${dr.department ? dr.department.slug : 'general'}/especialistas/${dr.slug}`;
}