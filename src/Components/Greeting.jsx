import { styled } from 'styled-components';

const GreetingWrapper = styled.section`
    width: 100%;
    margin: 5rem 0;
    div {
        display: flex;
        justify-content: center;
        p {
            font-size: 4rem;
            font-weight: 700;
            @media only screen and (min-width: 320px) and (max-device-width: 480px) {
                text-align: center;
                font-weight: 600;
            }
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
