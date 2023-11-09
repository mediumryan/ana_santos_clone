import { FaTimes } from 'react-icons/fa';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { isModalState } from '../../atom';
import MenuModalList from './MenuModalList';

const MenuModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--bg-100);
    display: flex;
    flex-direction: column;
    font-size: 2rem;
`;

const MenuModalClose = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 1.5rem;
    padding: 3rem 2rem 3rem 0;
    span:first-child {
        margin-right: 1rem;
        text-decoration: underline;
    }
    span:last-child {
        font-size: 2.5rem;
    }
`;

export default function MenuModal() {
    const [isModal, setIsModal] = useRecoilState(isModalState);

    const handleModal = () => {
        setIsModal(false);
    };

    return (
        <MenuModalWrapper>
            <MenuModalClose onClick={handleModal}>
                <span>Cerrar el menú</span>
                <span>
                    <FaTimes />
                </span>
            </MenuModalClose>
            <MenuModalList />
        </MenuModalWrapper>
    );
}
