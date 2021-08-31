import React from 'react'
import { Formik } from 'formik'
import {
    Grid,
    Card,
    Divider,
    TextField,
    MenuItem,
    Button,
} from '@material-ui/core'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
const InvoiceForm = () => {

    const handleSubmit = async (values, { isSubmitting }) => {
        console.log(values)
    }

    return (
        <div className="m-sm-30">
            <Card elevation={3}>
                <div className="flex p-4">
                    <h4 className="m-0">New Customer</h4>
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
                                <Grid item md={3} sm={8} xs={12}>
                                    <TextField
                                        className="min-w-188"
                                        label="salutation"
                                        name="salutation"
                                        size="small"
                                        variant="outlined"
                                        select
                                        value={values.salutation || ''}
                                        onChange={handleChange}
                                    >
                                        {customerList.map((item, ind) => (
                                            <MenuItem value={item} key={item}>
                                                {item}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item md={3} sm={8} xs={12}>
                                    <TextField
                                        className="min-w-188"
                                        label="First Name"
                                        name="first_name"
                                        size="small"
                                        variant="outlined"
                                        value={values.first_name || ''}
                                        onChange={handleChange}
                                    >
                                    </TextField>
                                </Grid>
                                <Grid item md={3} sm={8} xs={12}>
                                    <TextField
                                        className="min-w-188"
                                        label="Last Name"
                                        name="last_name"
                                        size="small"
                                        variant="outlined"
                                        value={values.last_name || ''}
                                        onChange={handleChange}
                                    >
                                    </TextField>
                                </Grid>

                                <Grid item md={2} sm={4} xs={12}>
                                    company Name
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        label="company_Name"
                                        name="company_Name"
                                        size="small"
                                        variant="outlined"
                                        value={values.company_Name}
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid item md={2} sm={4} xs={12}>
                                    email
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <ValidatorForm>
                                        <TextValidator
                                            className="mb-6 "
                                            variant="outlined"
                                            size="small"
                                            label="Email"
                                            onChange={handleChange}
                                            type="email"
                                            name="email"
                                            value={values.email}
                                        />

                                    </ValidatorForm>

                                </Grid>

                                <Grid item md={2} sm={4} xs={12}>
                                    phone
                                </Grid>
                                <Grid item md={3} sm={8} xs={12}>
                                    <ValidatorForm>
                                        <TextValidator
                                            className="mb-6 "
                                            variant="outlined"
                                            size="small"
                                            label="workphone"
                                            onChange={handleChange}
                                            type="number"
                                            name="workphone"
                                            value={values.workphone}
                                        />

                                    </ValidatorForm>

                                </Grid>
                                <Grid item md={7} sm={8} xs={12}>
                                    <ValidatorForm>
                                        <TextValidator
                                            className="mb-6 "
                                            variant="outlined"
                                            size="small"
                                            label="phonenumber"
                                            onChange={handleChange}
                                            type="number"
                                            name="phonenumber"
                                            value={values.phonenumber}
                                        />

                                    </ValidatorForm>

                                </Grid>
                                <Grid item md={2} sm={4} xs={12}>
                                    country
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        label="country"
                                        name="country"
                                        size="small"
                                        variant="outlined"
                                        value={values.country}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={2} sm={4} xs={12}>
                                    state
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        label="state"
                                        name="state"
                                        size="small"
                                        variant="outlined"
                                        value={values.state}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={2} sm={4} xs={12}>
                                    city
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        label="city"
                                        name="city"
                                        size="small"
                                        variant="outlined"
                                        value={values.city}
                                        onChange={handleChange}
                                    />
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
