import React from 'react';
import { useRecoilValue } from 'recoil';
import { menuItemState } from '../../atom';
import { styled } from 'styled-components';

const MenuModalListWrapper = styled.div`
    ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        li {
            width: 100%;
            border-bottom: 1px solid var(--text-200);
            padding: 2rem 0;
            &:first-child {
                border-top: 1px solid var(--text-200);
                a {
                    text-decoration: underline;
                }
            }
            a {
                text-decoration: none;
                color: var(--primary-100);
                font-size: 1.75rem;
                font-weight: 600;
                margin-left: 2rem;
            }
        }
    }
`;

export default function MenuModalList() {
    const menuItem = useRecoilValue(menuItemState);

    return (
        <MenuModalListWrapper>
            <ul>
                {menuItem.map((item) => {
                    return (
                        <li key={item.id}>
                            <a href={item.url}>{item.content}</a>
                        </li>
                    );
                })}
            </ul>
        </MenuModalListWrapper>
    );
}
