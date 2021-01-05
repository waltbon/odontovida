import { IProps } from './types'

export const TabPane: React.FC<IProps> = ({
    children,
    // gallery,
    ...props
}) => {
    const tabId = `tab-${props.id}`;
    const tabListId = `tab${props.id}-list`;
    const starterClass = `tab-pane fade ${props.selected ? 'show active' : ''}`;

    return (
        <div className={starterClass} id={tabId} role="tabpanel" aria-labelledby={tabListId}>
            {children}
        </div>
    )
}