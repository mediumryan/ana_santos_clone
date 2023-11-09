import { styled } from 'styled-components';

const ArticleWrapper = styled.section`
    margin: 5rem 0;
    div {
        display: flex;
        justify-content: center;
        img {
            width: 40%;
            height: 40%;
        }
    }
`;

export default function Article() {
    return (
        <ArticleWrapper>
            <div>
                <img
                    src="https://www.anasantosilustracion.com/contenido/uploads/2020/02/home_web.jpg"
                    alt="main-article-poster"
                />
            </div>
        </ArticleWrapper>
    );
}
