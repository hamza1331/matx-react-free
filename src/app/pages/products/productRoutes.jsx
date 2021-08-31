import React from 'react'
import { authRoles } from '../../auth/authRoles'

const ProductRoutes = [
    {
        path: '/pages/product-list',
        component: React.lazy(() => import('./product-list')),
        auth: authRoles.sa,
    },
    {
        path: '/pages/new-product',
        component: React.lazy(() => import('./New-Product')),
        auth: authRoles.sa,
    },
]

export default ProductRoutes
