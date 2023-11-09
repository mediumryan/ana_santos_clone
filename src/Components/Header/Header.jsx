import { styled } from 'styled-components';
import HeaderMobileMenu from './HeaderMobileMenu';
import { useRecoilValue } from 'recoil';
import { menuItemState } from '../../atom';

const HeaderOuter = styled.header`
    margin-bottom: 2rem;
    padding: 0 3rem;
    @media only screen and (width: 430px) and (height: 932px) and (-webkit-device-pixel-ratio: 3) {
        margin-top: 2rem;
    }
`;

const HeaderInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const HeaderLogo = styled.div`
    img {
        width: 156px;
        height: 75px;
        @media only screen and (width: 430px) and (height: 932px) and (-webkit-device-pixel-ratio: 3) {
            width: 125px;
            height: 60px;
        }
    }
`;

const HeaderMenu = styled.div`
    ul {
        display: flex;
    }
    @media only screen and (width: 430px) and (height: 932px) and (-webkit-device-pixel-ratio: 3) {
        display: none;
    }
`;

const MenuItem = styled.li`
    padding: 0.5rem;
    a {
        text-decoration: none;
        color: var(--primary-100);
        font-size: 1.15rem;
        font-weight: 500;
        letter-spacing: -0.4px;
    }
    &:first-child {
        text-decoration: underline var(--primary-100);
        &:hover {
            text-decoration: none;
        }
    }
    &:hover {
        text-decoration: underline var(--primary-100);
    }
`;

export default function Header() {
    const menuItem = useRecoilValue(menuItemState);

    return (
        <HeaderOuter id="header">
            <HeaderInner>
                <HeaderLogo>
                    <img
                        src="https://www.anasantosilustracion.com/contenido/uploads/2020/02/logo.jpg"
                        alt="main logo"
                    />
                </HeaderLogo>
                <HeaderMenu>
                    <ul>
                        {menuItem.map((item) => {
                            return (
                                <MenuItem key={item.id}>
                                    <a href={item.url}>{item.content}</a>
                                </MenuItem>
                            );
                        })}
                    </ul>
                </HeaderMenu>
                <HeaderMobileMenu />
            </HeaderInner>
        </HeaderOuter>
    );
}
