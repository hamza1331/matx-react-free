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
                    <h4 className="m-0">New SaleOrder</h4>
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
                                    Customer Name
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        className="min-w-188"
                                        label="Name"
                                        name="customerName"
                                        size="small"
                                        variant="outlined"
                                        select
                                        value={values.customerName || ''}
                                        onChange={handleChange}
                                    >
                                        {customerList.map((item, ind) => (
                                            <MenuItem value={item} key={item}>
                                                {item}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>

                                <Grid item md={2} sm={4} xs={12}>
                                    Invoice#
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        label="Invoice No"
                                        name="invoiceNo"
                                        size="small"
                                        variant="outlined"
                                        defaultValue="INV-000001"
                                        value={values.invoiceNo}
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid item md={2} sm={4} xs={12}>
                                    Order Number
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        label="Invoice No"
                                        name="orderNo"
                                        size="small"
                                        variant="outlined"
                                        value={values.orderNo}
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid item md={2} sm={4} xs={12}>
                                    Invoice Date
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <div className="flex flex-wrap m--2">
                                        <MuiPickersUtilsProvider
                                            utils={DateFnsUtils}
                                        >
                                            <KeyboardDatePicker
                                                className="m-2"
                                                margin="none"
                                                label="Invoice Date"
                                                inputVariant="outlined"
                                                type="text"
                                                size="small"
                                                autoOk={true}
                                                value={values.invoiceDate}
                                                format="MMMM dd, yyyy"
                                                onChange={(date) =>
                                                    setFieldValue(
                                                        'invoiceDate',
                                                        date
                                                    )
                                                }
                                            />
                                        </MuiPickersUtilsProvider>

                                        <TextField
                                            className="m-2 min-w-188"
                                            label="Terms"
                                            name="terms"
                                            size="small"
                                            variant="outlined"
                                            value={values.terms || ''}
                                            onChange={handleChange}
                                            select
                                        >
                                            {paymentTermList.map(
                                                (item, ind) => (
                                                    <MenuItem
                                                        value={item}
                                                        key={item}
                                                    >
                                                        {item}
                                                    </MenuItem>
                                                )
                                            )}
                                        </TextField>

                                        <MuiPickersUtilsProvider
                                            utils={DateFnsUtils}
                                        >
                                            <KeyboardDatePicker
                                                className="m-2"
                                                margin="none"
                                                label="Due Date"
                                                inputVariant="outlined"
                                                type="text"
                                                size="small"
                                                autoOk={true}
                                                value={values.dueDate}
                                                format="MMMM dd, yyyy"
                                                onChange={(date) =>
                                                    setFieldValue(
                                                        'dueDate',
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

                                <Grid item md={2} sm={4} xs={12}>
                                    Salesperson Name
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        className="min-w-188"
                                        label="Salesperson Name"
                                        name="salesPersonName"
                                        size="small"
                                        variant="outlined"
                                        value={values.salesPersonName || ''}
                                        onChange={handleChange}
                                        select
                                    >
                                        {customerList.map((item, ind) => (
                                            <MenuItem value={item} key={item}>
                                                {item}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>

                                <Grid item xs={12}>
                                    <Divider />
                                </Grid>
                            </Grid>

                            <Grid container spacing={3} alignItems="center">
                                <Grid item md={2} sm={4} xs={12}>
                                    Customer Name
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        className="min-w-188"
                                        label="Name"
                                        name="customerName"
                                        size="small"
                                        variant="outlined"
                                        select
                                        value={values.customerName || ''}
                                        onChange={handleChange}
                                    >
                                        {customerList.map((item, ind) => (
                                            <MenuItem value={item} key={item}>
                                                {item}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>

                                <Grid item md={2} sm={4} xs={12}>
                                    Invoice#
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        label="Invoice No"
                                        name="invoiceNo"
                                        size="small"
                                        variant="outlined"
                                        defaultValue="INV-000001"
                                        value={values.invoiceNo}
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid item md={2} sm={4} xs={12}>
                                    Order Number
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        label="Invoice No"
                                        name="orderNo"
                                        size="small"
                                        variant="outlined"
                                        value={values.orderNo}
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid item md={2} sm={4} xs={12}>
                                    Invoice Date
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <div className="flex flex-wrap m--2">
                                        <MuiPickersUtilsProvider
                                            utils={DateFnsUtils}
                                        >
                                            <KeyboardDatePicker
                                                className="m-2"
                                                margin="none"
                                                label="Invoice Date"
                                                inputVariant="outlined"
                                                type="text"
                                                size="small"
                                                autoOk={true}
                                                value={values.invoiceDate}
                                                format="MMMM dd, yyyy"
                                                onChange={(date) =>
                                                    setFieldValue(
                                                        'invoiceDate',
                                                        date
                                                    )
                                                }
                                            />
                                        </MuiPickersUtilsProvider>

                                        <TextField
                                            className="m-2 min-w-188"
                                            label="Terms"
                                            name="terms"
                                            size="small"
                                            variant="outlined"
                                            value={values.terms || ''}
                                            onChange={handleChange}
                                            select
                                        >
                                            {paymentTermList.map(
                                                (item, ind) => (
                                                    <MenuItem
                                                        value={item}
                                                        key={item}
                                                    >
                                                        {item}
                                                    </MenuItem>
                                                )
                                            )}
                                        </TextField>

                                        <MuiPickersUtilsProvider
                                            utils={DateFnsUtils}
                                        >
                                            <KeyboardDatePicker
                                                className="m-2"
                                                margin="none"
                                                label="Due Date"
                                                inputVariant="outlined"
                                                type="text"
                                                size="small"
                                                autoOk={true}
                                                value={values.dueDate}
                                                format="MMMM dd, yyyy"
                                                onChange={(date) =>
                                                    setFieldValue(
                                                        'dueDate',
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

                                <Grid item md={2} sm={4} xs={12}>
                                    Salesperson Name
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        className="min-w-188"
                                        label="Salesperson Name"
                                        name="salesPersonName"
                                        size="small"
                                        variant="outlined"
                                        value={values.salesPersonName || ''}
                                        onChange={handleChange}
                                        select
                                    >
                                        {customerList.map((item, ind) => (
                                            <MenuItem value={item} key={item}>
                                                {item}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>

                                <Grid item xs={12}>
                                    <Divider />
                                </Grid>
                            </Grid>


                            <Card className="bg-default p-4" elevation={0}>
                                <Grid container spacing={3}>
                                    <Grid item xs={6}>
                                        <TextField
                                            label="Terms & Conditions"
                                            name="terms_conditions"
                                            size="small"
                                            variant="outlined"
                                            multiline
                                            rows={6}
                                            fullWidth
                                            value={values.terms_conditions}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <label htmlFor="upload-multiple-file">
                                            <Button
                                                className="capitalize"
                                                color="primary"
                                                component="span"
                                                variant="contained"
                                            >
                                                <div className="flex items-center">
                                                    <Icon className="pr-8">
                                                        cloud_upload
                                                    </Icon>
                                                    <span>Upload File</span>
                                                </div>
                                            </Button>
                                        </label>
                                        <input
                                            className="hidden"
                                            onChange={(e) =>
                                                setFieldValue(
                                                    'files',
                                                    e.target.files
                                                )
                                            }
                                            id="upload-multiple-file"
                                            type="file"
                                            multiple
                                        />
                                    </Grid>
                                </Grid>
                            </Card>

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
