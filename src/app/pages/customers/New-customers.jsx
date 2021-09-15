import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { customerValidationschema } from "../../pages/Validations/customerValidation"
import {
    Grid,
    Card,
    Divider,
    TextField,
    Button,
} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux';
import { insertCustomer } from '../../redux/actions/CustomerAction'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { history } from 'history.js';
import { useHistory } from 'react-router-dom';
const InvoiceForm = () => {
    
    const dispatch = useDispatch()
    const history = useHistory()
    const handleSubmit = async (values, { isSubmitting }) => {
        console.log(values)

        let formData ={
            fname: values.first_name,
            lname: values.last_name,
            cname: values.company_Name,
            wphone: values.work_phone_no,
            mphone: values.mobile_phone_no,
            email: values.email,
            country: values.country,
            }
        const isValid = await customerValidationschema.isValid(formData);
        console.log(isValid)
        const newcustomer = [];
        newcustomer.push(values);
        dispatch(insertCustomer(newcustomer))
        debugger
        history.push('/pages/customer-list')
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
                                        label="First Name"
                                        name="first_name"
                                        type="text"
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
                                    <TextField
                                            className="mb-6 "
                                            variant="outlined"
                                            size="small"
                                            label="Email"
                                            onChange={handleChange}
                                            type="email"
                                            name="email"
                                            value={values.email}
                                        />

                                </Grid>

                                <Grid item md={2} sm={4} xs={12}>
                                    Phone
                                </Grid>
                                <Grid item md={3} sm={8} xs={12}>
                                        <TextField
                                            className="mb-6 "
                                            variant="outlined"
                                            size="small"
                                            label="work_phone_no"
                                            onChange={handleChange}
                                            type="number"
                                            name="work_phone_no"
                                            value={values.work_phone_no}
                                        />

                                </Grid>
                                <Grid item md={7} sm={8} xs={12}>
                                        <TextField
                                            className="mb-6 "
                                            variant="outlined"
                                            size="small"
                                            label="mobile_phone_no"
                                            onChange={handleChange}
                                            type="number"
                                            name="mobile_phone_no"
                                            value={values.mobile_phone_no}
                                        />

                                </Grid>
                                <Grid item md={2} sm={4} xs={12}>
                                    Country
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
                                    State
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

const customerList = [
    'Mr.',
    'Mrs.',
    'Ms',
    'Miss.',
    'Dr',
]

const initialValues = {
}

export default InvoiceForm