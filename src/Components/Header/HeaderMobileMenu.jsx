import { styled } from 'styled-components';
import { FaEllipsisH } from 'react-icons/fa';
import { useSetRecoilState } from 'recoil';
import { isModalState } from '../../atom';

const MobileMenuWrapper = styled.button`
    display: none;
    flex-direction: column;
    align-items: center;
    background: none;
    outline: none;
    border: none;
    span:first-child {
        font-size: 2rem;
    }
    @media only screen and (width: 430px) and (height: 932px) and (-webkit-device-pixel-ratio: 3) {
        display: flex;
    }
`;

export default function HeaderMobileMenu() {
    const setIsModal = useSetRecoilState(isModalState);

    const handleModal = () => {
        setIsModal(true);
    };

    return (
        <MobileMenuWrapper onClick={handleModal}>
            <span>
                <FaEllipsisH />
            </span>
            <span>Menu</span>
        </MobileMenuWrapper>
    );
}
