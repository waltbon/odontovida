import { Gallery } from '../../Gallery';
import { Markdown } from '../../ui'
import { IProps } from './types'

export const TabPane: React.FC<IProps> = ({
    title,
    imageURL,
    markdownContent,
    gallery,
    ...props
}) => {
    const tabId = `tab-${props.id}`;
    const tabListId = `tab${props.id}-list`;
    const starterClass = `tab-pane fade ${props.selected ? 'show active' : ''}`;

    return (
        <div className={starterClass} id={tabId} role="tabpanel" aria-labelledby={tabListId}>
            <div className="row d-flex align-items-top">
                <div className="col-lg-4">
                    <div className="tab-img">
                        <img className="img-fluid" src={imageURL} alt="tab-image" />
                    </div>
                </div>


                <div className="col-lg-8">
                    <div className="txt-block pc-30">

                        <h3 className="h3-md steelblue-color">{title}</h3>

                        <div className="mb-60">
                            <Markdown content={markdownContent} />
                        </div>


                        {
                            Array.isArray(gallery) && !!gallery.length &&
                            <div id="gallery-1" className="gallery-section division">
                                <h3 className="h4-md steelblue-color pb-2">Galería de imágenes</h3>
                                <Gallery gallery={gallery} />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}