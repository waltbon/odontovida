import React from 'react';
import { IFAQItem } from '../../../utils/interfaces/pages/faqs.interface';
import BlockContent from '../../ui/BlockContent';

interface Props {
    faq: IFAQItem;
    collapsed: boolean;
}

export default class extends React.Component<Props> {
    render() {
        const collapseId = `collapse${this.props.faq._key}`;
        return (
            <div className="card">
                <div className="card-header" role="tab" id={collapseId}>
                    <h5 className="h5-xs">
                        <a data-toggle="collapse" href={`#${collapseId}`} role="button" aria-expanded={this.props.collapsed} aria-controls={collapseId}>
                            {this.props.faq.question}
                        </a>
                    </h5>
                </div>

                <div id={collapseId} className={`collapse ${this.props.collapsed ? 'show' : ''}`} role="tabpanel" aria-labelledby={collapseId} data-parent="#accordion">
                    <div className="card-body">
                        <BlockContent blocks={this.props.faq.answer} />
                    </div>
                </div>

            </div>
        )
    }
}