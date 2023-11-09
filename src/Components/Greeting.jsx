import { styled } from 'styled-components';

const GreetingWrapper = styled.section`
    width: 100%;
    margin: 5rem 0;
    div {
        display: flex;
        justify-content: center;
        p {
            font-size: 72px;
            font-weight: 700;
        }
    }
`;

export default function Greeting() {
    return (
        <GreetingWrapper>
            <div>
                <p>Ana Santos – Ilustración</p>
            </div>
        </GreetingWrapper>
    );
}
