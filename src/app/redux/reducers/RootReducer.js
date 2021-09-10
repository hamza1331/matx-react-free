import { combineReducers } from 'redux'
import ScrumBoardReducer from './ScrumBoardReducer'
import NotificationReducer from './NotificationReducer'
import EcommerceReducer from './EcommerceReducer'
import NavigationReducer from './NavigationReducer'
import billReducer from './BillReducer'
import BranchReducer from './BranchReducer'
import CustomerReducer from './CustomerReducer'
import invoiceReducer from './InvoiceReducer'
import SaleOrderReducer from './SaleOrderReducer'
import PurchaseOrderReducer from './PurchaseOrderReducer'
import UserReducer from './UserReducer'
import VendorReducer from './VendorReducer'
import WarehouseReducer from './WarehouseReducer'
import reducer from '../../redux/reducers/authReducer'
import ToastReducer from './toastReducer'

const RootReducer = combineReducers({
    toast: ToastReducer,
    notifications: NotificationReducer,
    navigations: NavigationReducer,
    scrumboard: ScrumBoardReducer,
    ecommerce: EcommerceReducer,
    bill: billReducer,
    branch: BranchReducer,
    customer: CustomerReducer,
    invoice: invoiceReducer,
    saleorder: SaleOrderReducer,
    purchaseorder: PurchaseOrderReducer,
    user: UserReducer,
    vendor: VendorReducer,
    warehouse: WarehouseReducer,
    authReducer:reducer
})

export default RootReducer
