import {configs} from "./configs";

export const testData = {
    URL : configs.URL,
    pathAccount : configs.pathAccount,
    
    email : 'roni_cost@example.com',
    password : 'roni_cost3@example.com',

    menuItem: '.sections.nav-sections #ui-id-3',
    menuItemText: 'Women',
    menuItemLink: '**/default/women.html',

    subMenuItem: '.sections.nav-sections #ui-id-4',
    subMenuItemText: 'Tops',
    subMenuItemLink: '**/default/women/tops-women.html',

    pathCategory : '/default/men/tops-men.html',

    header: '.page-header',
    headerLogo: '.page-header .logo img',

    footer: '.page-footer',
    footerItemCopyright: '.copyright span',
    footerItemCopyrightText: 'Copyright © 2013-present Magento, Inc. All rights reserved.',

    filterItem: '#layered-filter-block .filter-options',
    filterOption: '#layered-filter-block .filter-options-item:nth-child(2) .item:nth-child(2) > a',

    sortEl: '#sorter',

    paginationEl: '.toolbar-products .pages .pages-items',
    paginationElPage: '.toolbar-products .pages .pages-items .item:not(.current) .page',
    paginationElCurrentPage: '.toolbar-products .pages .pages-items .item.current .page',

    pathCategoryWithSwatch: 'default/men/tops-men/tanks-men.html',
    configurableProductId: '676',
    configurableProduct: '#product-item-info_676',
    productSwatchSizeDomEL: '#product-item-info_676 [data-attribute-code="size"]',
    productSwatchColorDomEL: '#product-item-info_676 [data-attribute-code="color"]',
    productSwatchOptionDomEL: '.swatch-option',
    productAddToCartDomEL: '#product-item-info_676 form .action.tocart',
}
