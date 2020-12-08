import { IProps } from './types';


export const TabNavItem: React.FC<IProps> = ({ ...props }) => {
    const tabId = `tab-${props.id}`;
    const tabListId = `tab${props.id}-list`;
    const selectedText = !!props.selected ? 'true' : 'false';
    return (
        <li className="nav-item icon-xs">
            <a className={`nav-link ${props.selected ? 'active':''}`} id={tabListId} data-toggle="pill" href={`#${tabId}`} role="tab" aria-controls={tabId} aria-selected={selectedText}>
                {props.title}
			</a>
        </li>
    )
}