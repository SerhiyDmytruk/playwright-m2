import {configs} from "./configs";

export const testData = {
    URL : configs.URL,
    pathAccount : configs.pathAccount,
    email : 'ernst@hoofdfabriek.nl',
    password : 'S321654s',

    menuItem: '.page-header .desktop-nav:not(.desktop-nav-additional) .level-0 a.level-0',
    menuItemText: 'Producten',

    subMenuItem: '#desktop-menu-main-products-wrapper .grid li:nth-child(1) .level-1',
    subMenuItemText: 'Brand-inbraakwerende kluizen',
    subMenuItemLink: '**/brand-inbraakwerende-kluizen-01.html',
    pathCategory : '/brand-inbraakwerende-kluizen-01.html',

    header: '.page-header',
    headerLogo: '.page-header .lg\\:container.w-full.pr-4.lg\\:pr-6.flex > a img',

    footer: '.page-footer',
    footerItemCopyright: '.page-footer .text-\\[10px\\].leading-3.text-accent-secondary.font-semibold:first-child',
    footerItemCopyrightText: '\n    ©2025 De Raat Security Products'
}
