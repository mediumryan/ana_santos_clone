import { atom } from 'recoil';

export const menuItemState = atom({
    key: 'menu_item',
    default: [
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
    ],
});

export const isModalState = atom({
    key: 'modal_state',
    default: false,
});
