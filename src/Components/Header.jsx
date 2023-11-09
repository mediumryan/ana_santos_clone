import { styled } from 'styled-components';

const HeaderOuter = styled.header`
    margin-bottom: 2rem;
    padding: 0 3rem;
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
    }
`;

const HeaderMenu = styled.div`
    ul {
        display: flex;
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
    const menuItem = [
        {
            id: 0,
            url: 'https://www.anasantosilustracion.com/',
            content: 'Home',
        },
        {
            id: 1,
            url: 'https://shop.anasantosilustracion.com/es/',
            content: 'Shop',
        },
        {
            id: 2,
            url: 'https://shop.anasantosilustracion.com/es/contacta',
            content: 'Contact',
        },
        {
            id: 3,
            url: 'https://www.domestika.org/es/courses/206-retrato-ilustrado-en-acuarela/anasantos',
            content: 'Curso online/Domestika',
        },
        {
            id: 4,
            url: 'https://www.domestika.org/es/courses/482-tecnicas-experimentales-de-acuarela-para-principiantes/anasantos',
            content: '2º Curso Domestika',
        },
    ];

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
            </HeaderInner>
        </HeaderOuter>
    );
}
