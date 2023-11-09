import { styled } from 'styled-components';
import './CSS/index.css';
import Article from './Components/Article';
import Footer from './Components/Footer';
import Greeting from './Components/Greeting';
import Header from './Components/Header/Header';
import MenuModal from './Components/MenuModal/MenuModal';
import { useRecoilValue } from 'recoil';
import { isModalState } from './atom';

const MainOuter = styled.main`
    padding: 1.5rem 2rem;
`;

const MainInner = styled.div`
    display: flex;
    flex-direction: column;
`;

function App() {
    const isModal = useRecoilValue(isModalState);

    return (
        <MainOuter>
            <MainInner>
                <Header />
                <Greeting />
                <Article />
                <Footer />
                {isModal && <MenuModal />}
            </MainInner>
        </MainOuter>
    );
}

export default App;
