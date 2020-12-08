import ReactMarkdown from 'react-markdown'
import { IProps } from './types';

export const Markdown: React.FC<IProps> = ({ content }: IProps) => {
    if (!content) {
        return null;
    }

    return <ReactMarkdown>{content}</ReactMarkdown>;
}
