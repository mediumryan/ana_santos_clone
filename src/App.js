import { styled } from 'styled-components';
import './CSS/index.css';
import Article from './Components/Article';
import Footer from './Components/Footer';
import Greeting from './Components/Greeting';
import Header from './Components/Header';

const MainOuter = styled.main`
    padding: 1.5rem 0;
`;

const MainInner = styled.div`
    display: flex;
    flex-direction: column;
`;

function App() {
    return (
        <MainOuter>
            <MainInner>
                <Header />
                <Greeting />
                <Article />
                <Footer />
            </MainInner>
        </MainOuter>
    );
}

export default App;
