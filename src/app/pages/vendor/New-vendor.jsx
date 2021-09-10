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
import { useDispatch, useSelector } from 'react-redux';
import { insertVendor } from '../../redux/actions/VendorAction'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
const InvoiceForm = () => {
    const dispatch = useDispatch()
    const handleSubmit = async (values, { isSubmitting }) => {
        console.log(values)
        const newvendor = [];
        newvendor.push(values);
        dispatch(insertVendor(newvendor))
    }

    return (
        <div className="m-sm-30">
            <Card elevation={3}>
                <div className="flex p-4">
                    <h4 className="m-0">New Vendor</h4>
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
                                    Vendor Name
                                </Grid>
                                <Grid item md={3} sm={8} xs={12}>
                                    <TextField
                                        className="min-w-188"
                                        label="First Name"
                                        name="firstName"
                                        size="small"
                                        variant="outlined"
                                        value={values.firstName || ''}
                                        onChange={handleChange}
                                    >
                                    </TextField>
                                </Grid>
                                <Grid item md={3} sm={8} xs={12}>
                                    <TextField
                                        className="min-w-188"
                                        label="Last Name"
                                        name="lastName"
                                        size="small"
                                        variant="outlined"
                                        value={values.lastName || ''}
                                        onChange={handleChange}
                                    >
                                    </TextField>
                                </Grid>
                                <Grid item md={3} sm={8} xs={12}>
                                </Grid>

                                <Grid item md={2} sm={4} xs={12}>
                                    Company Name
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
                                    Email
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
                                    Phone
                                </Grid>
                                <Grid item md={3} sm={8} xs={12}>
                                    <ValidatorForm>
                                        <TextValidator
                                            className="mb-6 "
                                            variant="outlined"
                                            size="small"
                                            label="Work Phone"
                                            onChange={handleChange}
                                            type="number"
                                            name="workPhone_no"
                                            value={values.workPhone_no}
                                        />

                                    </ValidatorForm>

                                </Grid>
                                <Grid item md={7} sm={8} xs={12}>
                                    <ValidatorForm>
                                        <TextValidator
                                            className="mb-6 "
                                            variant="outlined"
                                            size="small"
                                            label="Mobile Phone"
                                            onChange={handleChange}
                                            type="number"
                                            name="mobile_no"
                                            value={values.mobile_no}
                                        />

                                    </ValidatorForm>

                                </Grid>
                                <Grid item md={2} sm={4} xs={12}>
                                    Country
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        label="Country"
                                        name="country"
                                        size="small"
                                        variant="outlined"
                                        value={values.country}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={2} sm={4} xs={12}>
                                    State
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        label="State"
                                        name="state"
                                        size="small"
                                        variant="outlined"
                                        value={values.state}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={2} sm={4} xs={12}>
                                    City
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
                                <Grid item md={2} sm={4} xs={12}>
                                    Street
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        label="Street"
                                        name="street"
                                        size="small"
                                        variant="outlined"
                                        value={values.street}
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


const vendorList = [
    'Vendor 1',
    'Vendor 2',
    'Vendor 3',
    'Vendor 4',
    'Vendor 5',
]

const initialValues = {
    
}

export default InvoiceForm