import { authRoles } from './auth/authRoles'

export const navigations = [
    {
        name: 'Dashboard',
        path: '/dashboard',
        icon: 'dashboard',
    },
    {
        name: 'Alternative',
        path: '/dashbord/alternative',
        icon: 'dashboard',
    },
    {
        name: 'Inventory Managment',
        path: '/dashbord/inventory-management',
        icon: 'dashboard',
    },
    {
        label: 'Pages',
        type: 'label',
    },
    {
        name: 'Products',
        icon: 'security',
        children: [
            {
                name: 'Product list',
                iconText: 'SI',
                path: '/pages/product-list',
            },
            {
                name: 'New Product',
                iconText: 'SU',
                path: '/pages/new-product',
            },
        ],
    },
    {
        name: 'Customers',
        icon: 'security',
        children: [
            {
                name: 'Customer list',
                iconText: 'SI',
                path: '/pages/customer-list',
            },
            {
                name: 'New Customers',
                iconText: 'SU',
                path: '/pages/new-customer',
            },
        ],
    },
    {
        name: 'Vendors',
        icon: 'security',
        children: [
            {
                name: 'Vendors list',
                iconText: 'SI',
                path: '/pages/vendor-list',
            },
            {
                name: 'New Vendor',
                iconText: 'SU',
                path: '/pages/new-vendor',
            },
        ],
    },
    {
        name: 'Sale Orders',
        icon: 'security',
        children: [
            {
                name: 'SaleOrder list',
                iconText: 'SI',
                path: '/pages/saleorder-list',
            },
            {
                name: 'Add Sale Order',
                iconText: 'SU',
                path: '/pages/new-saleorder',
            },
        ],
    },
    {
        name: 'Invoice',
        icon: 'security',
        children: [
            {
                name: 'Invoice list',
                iconText: 'SI',
                path: '/pages/invoice-list',
            },
            {
                name: 'Add Invoice',
                iconText: 'SU',
                path: '/pages/single-invoice',
            },
        ],
    },
    {
        name: 'Purchase Orders',
        icon: 'security',
        children: [
            {
                name: 'PurchaseOrder list',
                iconText: 'SI',
                path: '/pages/purchaseorder-list',
            },
            {
                name: 'Add PurchaseOrders',
                iconText: 'SU',
                path: '/pages/new-purchaseorder',
            },
        ],
    },
    {
        name: 'Bills',
        icon: 'security',
        children: [
            {
                name: 'Bill list',
                iconText: 'SI',
                path: '/pages/bill-list',
            },
            {
                name: 'Add Bill',
                iconText: 'SU',
                path: '/pages/single-bill',
            },
        ],
    },
    {
        name: 'Reports',
        icon: 'security',
        path: '/pages/reports',
    },
    {
        name: 'Forcasting',
        icon: 'security',
        path: '/pages/forcasting',
    },
    {
        name: 'User Profile',
        icon: 'security',
        path: '/page-layouts/user-profile',
    },
    {
        name: 'Setting',
        icon: 'security',
        path: '/session/signup',
    },
    
]
