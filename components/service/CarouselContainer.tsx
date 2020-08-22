import React from 'react';
import { IDepartment } from '../../utils/interfaces/pages/department.interface';
import ServiceBox from '../common/ServiceBox';
declare var $: any;

interface Props {
    // departments: IDepartment[];
}

export default class extends React.Component<Props> {
    componentDidMount() {
        var owl = $('.services-holder');
        owl.owlCarousel({
            items: 4,
            loop: true,
            autoplay: true,
            navBy: 1,
            autoplayTimeout: 4500,
            autoplayHoverPause: false,
            smartSpeed: 1500,
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 1
                },
                768: {
                    items: 2
                },
                991: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        });
    }
    render() {
        return (<div className="owl-carousel owl-theme services-holder">
            {this.props.children}
        </div>)
    }
}