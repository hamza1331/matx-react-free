import React from 'react'
import { Formik } from 'formik'
import {
    Grid,
    Card,
    Divider,
    TextField,
    MenuItem,
    Button,
    Icon,
} from '@material-ui/core'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import InvoiceItemTable from '../../views/forms/invoice-form/InvoiceItemTable'
import { calculateAmount } from '../../views/forms/invoice-form/InvoiceFormService'

const InvoiceForm = () => {
    const calculateSubTotal = (itemList = []) => {
        let subTotal = 0
        itemList.forEach((item) => {
            subTotal += calculateAmount(item)
        })

        return subTotal
    }

    const calculateTotal = (values) => {
        let total = 0
        total += calculateSubTotal(values.items)
        total += values.shippingCharge || 0
        total += values[values.otherField] || 0

        return total
    }

    const handleSubmit = async (values, { isSubmitting }) => {
        console.log(values)
    }

    return (
        <div className="m-sm-30">
            <Card elevation={3}>
                <div className="flex p-4">
                    <h4 className="m-0">New Product</h4>
                </div>
                <Divider className="mb-2" />

                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    enableReinitialize={true}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        setSubmitting,
                        setFieldValue,
                    }) => (
                        <form className="p-4" onSubmit={handleSubmit}>
                            <Grid container spacing={3} alignItems="center">
                                

                                <Grid item md={2} sm={4} xs={12}>
                                    ProductName
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        label="ProductName"
                                        name="ProductName"
                                        size="small"
                                        variant="outlined"
                                        defaultValue=" "
                                        value={values.productDescription}

                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid item md={2} sm={4} xs={12}>
                                    ProductDescription
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        label="productDescription"
                                        name="productDescription"
                                        size="small"
                                        variant="outlined"
                                        defaultValue=" "
                                        value={values.productName}

                                        onChange={handleChange}
                                    />
                                </Grid>



                                <Grid item md={2} sm={4} xs={12}>
                                    SUK
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        label="SUK"
                                        name="SUK"
                                        size="small"
                                        variant="outlined"
                                        defaultValue="00000"
                                        value={values.SUK}
                                    
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid item md={2} sm={4} xs={12}>
                                   unit
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        label="unit"
                                        name="unit"
                                        size="small"
                                        variant="outlined"
                                        defaultValue=" "
                                        value={values.unit}
                                        type="number"
                                        unique={true}
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid item md={2} sm={4} xs={12}>
                                   quantity
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        label="quantity"
                                        name="quantity"
                                        size="small"
                                        variant="outlined"
                                        defaultValue=" "
                                        type="number"
                                        value={values.quantity}
                                        
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid item md={2} sm={4} xs={12}>
                                  available
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        label="available"
                                        name="available"
                                        size="small"
                                        variant="outlined"
                                        defaultValue=" "
                                        value={values.available}
                                        
                                        onChange={handleChange}
                                    />  
                                </Grid>

                                


                                <Grid item md={2} sm={4} xs={12}>
                                   price
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        label="price"
                                        name="price"
                                        size="small"
                                        variant="outlined"
                                        defaultValue=" "
                                        value={values.price}
                                        type="number"
                                        unique={true}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={2} sm={4} xs={12}>
                                    Order Number
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        label="order number"
                                        name="orderNo"
                                        size="small"
                                        variant="outlined"
                                        value={values.orderNo}
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid item md={2} sm={4} xs={12}>
                                    production to Expiration
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <div className="flex flex-wrap m--2">
                                        <MuiPickersUtilsProvider
                                            utils={DateFnsUtils}
                                        >
                                            <KeyboardDatePicker
                                                className="m-2"
                                                margin="none"
                                                label="production Date"
                                                inputVariant="outlined"
                                                type="text"
                                                size="small"
                                                autoOk={true}
                                                value={values.productionDate}
                                                format="MMMM dd, yyyy"
                                                onChange={(date) =>
                                                    setFieldValue(
                                                        'productionDate',
                                                        date
                                                    )
                                                }
                                            />
                                        </MuiPickersUtilsProvider>

                                        
                                        <MuiPickersUtilsProvider
                                            utils={DateFnsUtils}
                                        >
                                            <KeyboardDatePicker
                                                className="m-2"
                                                margin="none"
                                                label="Expiration Date"
                                                inputVariant="outlined"
                                                type="text"
                                                size="small"
                                                autoOk={true}
                                                value={values.ExpirationDate}
                                                format="MMMM dd, yyyy"
                                                onChange={(date) =>
                                                    setFieldValue(
                                                        'ExpirationDate',
                                                        date
                                                    )
                                                }
                                            />
                                        </MuiPickersUtilsProvider>
                                    </div>
                                </Grid>

                                <Grid item xs={12}>
                                    <Divider />
                                </Grid>

                                

                                <Grid item xs={12}>
                                    <Divider />
                                </Grid>

                                

                                <Grid item xs={12}>
                                    <Divider />
                                </Grid>
                            </Grid>


                            

                           <div className="mt-6">
                                <Button
                                    color="primary"
                                    variant="contained"
                                    type="submit"
                                >
                                    Submit
                                </Button>
                            </div>
                        </form>
                    )}
                </Formik>
            </Card>
        </div>
    )
}

const paymentTermList = [
    'NET 15',
    'NET 30',
    'NET 45',
    'NET 60',
    'Due end of the month',
    'Due on receive',
]

const customerList = [
    'customer 1',
    'customer 2',
    'customer 3',
    'customer 4',
    'customer 5',
    'customer 6',
    'customer 7',
    'customer 8',
]

const initialValues = {
    customerType: '',
    otherField: 'Adjustment',
}

export default InvoiceForm