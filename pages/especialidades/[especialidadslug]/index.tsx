import { NextPage } from 'next';
import Layout from '../../../components/common/Layout';
import { MainInfoContext } from '../../../contexts/MainInfoContext';

interface Props {

}

const IndexPage: NextPage<Props> = ({ }) => {
    return (
        <>
            <MainInfoContext.Consumer>
                {
                    (value) => (<>
                        </>)
                }
            </MainInfoContext.Consumer>
        </>
    );
}