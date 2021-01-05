import React from 'react';

interface Props {
    id: string;
    title: string;
    collapsed: boolean;
}

export class AccordionItem extends React.Component<Props> {
    render() {
        const collapseId = `collapse${this.props.id}`;
        return (
            <div className="card">
                <div className="card-header" role="tab" id={collapseId}>
                    <h5 className="h5-xs">
                        <a data-toggle="collapse" href={`#${collapseId}`} role="button" aria-expanded={this.props.collapsed} aria-controls={collapseId}>
                            {this.props.title}
                        </a>
                    </h5>
                </div>

                <div id={collapseId} className={`collapse ${this.props.collapsed ? 'show' : ''}`} role="tabpanel" aria-labelledby={collapseId} data-parent="#accordion">
                    <div className="card-body">
                        {this.props.children}
                    </div>
                </div>

            </div>
        )
    }
}