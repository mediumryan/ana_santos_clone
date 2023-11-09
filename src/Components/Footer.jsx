import { styled } from 'styled-components';

const FooterOuter = styled.footer`
    position: relative;
    padding: 2rem;
`;

const FooterInner = styled.div`
    display: flex;
    align-items: center;
`;

const FooterRights = styled.div`
    font-size: 1.15rem;
    font-weight: 600;
    color: var(--text-100);
    a {
        color: var(--text-100);
        margin-left: 0.5rem;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
`;

const FooterWordPress = styled.div`
    margin-left: 2rem;
    a {
        color: var(--text-200);
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
    @media only screen and (width: 430px) and (height: 932px) and (-webkit-device-pixel-ratio: 3) {
        display: none;
    }
`;

const MoveToTop = styled.button`
    position: absolute;
    right: 10%;
    background: none;
    border: none;
    outline: none;
    a {
        text-decoration: none;
        color: var(--text-200);
        font-size: 1.15rem;
        padding-bottom: 0.25rem;
        &:hover {
            border-bottom: 1px solid var(--text-200);
        }
    }
`;

export default function Footer() {
    return (
        <FooterOuter>
            <FooterInner>
                <FooterRights>
                    <span>© 2023</span>
                    <a href="https://www.anasantosilustracion.com/">
                        Ana Santos – Ilustración
                    </a>
                </FooterRights>
                <FooterWordPress>
                    <a href="https://es.wordpress.org/">
                        Funciona con WordPress
                    </a>
                </FooterWordPress>
                <MoveToTop>
                    <a href="#header">Ir arriba ↑</a>
                </MoveToTop>
            </FooterInner>
        </FooterOuter>
    );
}
