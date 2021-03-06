import { IHeaderSlider } from '../header-slider.interface';
import ISeo from './seo.interface';

export interface ICentroRadiologicoPage {
    title: string;
    seo: ISeo;
    headerSliders: IHeaderSlider[];
    aboutSection: {
        subtitle: string;
        title: string;
        description: any;
        image: any;
    }
    centroRadiologicoServices: ICentroRadiologicoService[]
}

export interface ICentroRadiologicoService {
    name: string;
    slug: string;
    content: any;
    image: any;
    useCaseImage: any;
    centroRadServiceFeatures?: ICentroRadServiceGallery[];
}

interface ICentroRadServiceGallery {
    title: string;
    content: string;
    image: any;
}