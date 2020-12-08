import React from 'react';
declare var $: any;

interface IGalleryItem {
    title: string;
    url: any;
}

interface IProps {
    gallery: IGalleryItem[];
}

export class Gallery extends React.Component<IProps> {
    componentDidMount() {
        $('.image-link').magnificPopup({
            type: 'image'
        });
    }
    render() {
        return (
            <div className="row gallery-items-list">
                {
                    this.props.gallery.map(item => (
                        <div className="col-md-6 col-lg-4 gallery-item">
                            <div className="hover-overlay">
                                <img className="img-fluid" src={item.url} alt={item.title} />
                                <div className="item-overlay"></div>

                                <div className="image-zoom">
                                    <a className="image-link" href={item.url} title=""><i className="fas fa-search-plus"></i></a>
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}