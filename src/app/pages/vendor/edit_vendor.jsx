import React, { useState, useEffect } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { Breadcrumb, SimpleCard } from 'app/components'
import {
    Button,
    Icon,
    IconButton,
    Grid,
    Card,
    Divider,
    TextField,
    Radio,
    RadioGroup,
    FormControlLabel,
    Checkbox,
    Tabs,
    Tab,
    Popover,
    MenuItem,
} from '@material-ui/core'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { withStyles } from "@material-ui/core/styles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.secondary,
        tabBarOptions: {
            pressColor: 'gray',//for click (ripple) effect color
            backgroundColor: 'white',
            style: {

            }
        }
    },
}));

var styles = {
    default_tab: {
        color: 'gray',
        backgroundColor: 'white',
    },
}

const SimpleForm = () => {
    const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);

    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { firstName: "", lastName: "" }]);
    };
    const [state, setState] = useState({
        date: new Date(),
    })
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            console.log(value)

            if (value !== state.password) {
                return false
            }
            return true
        })
        return () => ValidatorForm.removeValidationRule('isPasswordMatch')
    }, [state.password])

    const handleSubmit = (event) => {
        // console.log("submitted");
        // console.log(event);
    }


    const handleDateChange = (date) => {
        setState({ ...state, date })
    }

    const {
        username,
        firstName,
        creditCard,
        mobile,
        password,
        confirmPassword,
        gender,
        date,
        email,
    } = state

    return (
        <div className="m-sm-30">
            <div className="m-sm-30">
                <div className="mb-sm-30">
                    <Breadcrumb
                        routeSegments={[
                            { name: 'Forms', path: '/forms' },
                            { name: 'Basic' },
                        ]}
                    />
                </div>
            </div>
            <Card elevation={3}>
                <div className="flex p-4">
                    <h4 className="m-0">Add A New Customer</h4>
                </div>
                <Divider className="mb-2" />

                <form className="p-4" onSubmit={handleSubmit}>
                    <Grid className="mb-6" container spacing={3} alignItems="left">
                        <Grid item md={2} sm={4} xs={12}>
                            Customer Name
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <TextField
                                className="min-w-188"
                                name="customerName"
                                size="small"
                                variant="outlined"
                                select
                                value="{values.customerName || ''}"
                                onChange={handleChange}
                            >

                            </TextField>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <TextField
                                className="min-w-188"
                                label="Name"
                                name="customerName"
                                size="small"
                                variant="outlined"
                                value={username || ''}
                                onChange={handleChange}
                            >

                            </TextField>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <TextField
                                className="min-w-188"
                                label="Name"
                                name="customerName"
                                size="small"
                                variant="outlined"
                                value={username || ''}
                                onChange={handleChange}
                            >

                            </TextField>
                        </Grid>

                        <Grid item md={2} sm={4} xs={12}>
                            Customer Email
                        </Grid>
                        <Grid item md={10} sm={8} xs={12}>
                            <TextField
                                className="min-w-188"
                                label="Email"
                                name="Customer Email"
                                size="small"
                                variant="outlined"
                                value={username || ''}
                                onChange={handleChange}
                            >

                            </TextField>
                        </Grid>

                        <Grid item md={2} sm={4} xs={12}>
                            Customer Phone
                        </Grid>
                        <Grid item md={3} sm={3} xs={12}>
                            <TextField
                                className="min-w-188"
                                label="Work phone"
                                name="customerName"
                                size="small"
                                variant="outlined"
                                value={username || ''}
                                onChange={handleChange}
                            >

                            </TextField>
                        </Grid>
                        <Grid item md={7} sm={5} xs={12}>
                            <TextField
                                className="min-w-188"
                                label="Mobile"
                                name="customerName"
                                size="small"
                                variant="outlined"
                                value={username || ''}
                                onChange={handleChange}
                            >

                            </TextField>
                        </Grid>
                        <Grid item md={2} sm={4} xs={12}>
                            Customer Email
                        </Grid>
                        <Grid item md={10} sm={8} xs={12}>
                            <TextField
                                className="min-w-188"
                                label="Email"
                                name="Customer Email"
                                size="small"
                                variant="outlined"
                                value={username || ''}
                                onChange={handleChange}
                            >

                            </TextField>
                        </Grid>
                        <Grid item md={2} sm={4} xs={12}>
                            Website
                        </Grid>
                        <Grid item md={10} sm={8} xs={12}>
                            <TextField
                                className="min-w-188"
                                label="Website"
                                name="Customer Email"
                                size="small"
                                variant="outlined"
                                value={username || ''}
                                onChange={handleChange}
                            >

                            </TextField>
                        </Grid>
                    </Grid>


                    <div className="elevation-z0">
                        <AppBar elevation={0} position="static mt-6">
                            <Tabs style={styles.default_tab} value={value} onChange={handleChange} aria-label="simple tabs example">
                                <Tab label="Other Detail" {...a11yProps(0)} />
                                <Tab label="Adress" {...a11yProps(1)} />
                                <Tab label="Contact Person" {...a11yProps(2)} />
                            </Tabs>
                        </AppBar>
                        <TabPanel value={value} index={0}>
                            <Grid className="mb-6" container spacing={3} alignItems="left">
                                <Grid item md={2} sm={4} xs={12}>
                                    Curency
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        className="min-w-188"
                                        label="curency"
                                        name="Customer Email"
                                        size="small"
                                        variant="outlined"
                                        value={username || ''}
                                        onChange={handleChange}
                                    >

                                    </TextField>
                                </Grid>
                                <Grid item md={2} sm={4} xs={12}>
                                    Payment Term
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        className="min-w-188"
                                        label="payment term"
                                        name="Customer Email"
                                        size="small"
                                        variant="outlined"
                                        value={username || ''}
                                        onChange={handleChange}
                                    >

                                    </TextField>
                                </Grid>
                                <Grid item md={2} sm={4} xs={12}>
                                    Facebook
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        className="min-w-188"
                                        label="facebook"
                                        name="Customer Email"
                                        size="small"
                                        variant="outlined"
                                        value={username || ''}
                                        onChange={handleChange}
                                    >

                                    </TextField>
                                </Grid>
                                <Grid item md={2} sm={4} xs={12}>
                                    Twitter
                                </Grid>
                                <Grid item md={10} sm={8} xs={12}>
                                    <TextField
                                        className="min-w-188"
                                        label="twitter"
                                        name="Customer Email"
                                        size="small"
                                        variant="outlined"
                                        value={username || ''}
                                        onChange={handleChange}
                                    >

                                    </TextField>
                                </Grid>
                            </Grid>

                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <Grid className="mb-6" container spacing={3} alignItems="left">
                                <Grid item md={6} sm={4} xs={12}>
                                    <div className="mb-6">
                                        <p className="font-bold mb-4">Shipping Address</p>
                                    </div>
                                </Grid>
                                <Grid item md={6} sm={8} xs={12}>
                                    <div>
                                        <p className="font-bold mb-4 text-left">Billing Address</p>
                                    </div>
                                </Grid>



                                <Grid item md={1} sm={4} xs={12}>
                                    Country
                                </Grid>
                                <Grid item md={5} sm={8} xs={12}>
                                    <TextField
                                        className="min-w-300"
                                        label="curency"
                                        name="Customer Email"
                                        size="small"
                                        variant="outlined"
                                        value={username || ''}
                                        onChange={handleChange}
                                    >

                                    </TextField>
                                </Grid>
                                <Grid item md={1} sm={4} xs={12}>
                                    Country
                                </Grid>
                                <Grid item md={5} sm={8} xs={12}>
                                    <TextField
                                        className="min-w-300"
                                        label="payment term"
                                        name="Customer Email"
                                        size="small"
                                        variant="outlined"
                                        value={username || ''}
                                        onChange={handleChange}
                                    >

                                    </TextField>
                                </Grid>
                                <Grid item md={1} sm={4} xs={12}>
                                    Address
                                </Grid>
                                <Grid item md={5} sm={8} xs={12}>
                                    <TextField
                                        className="min-w-300"
                                        label="facebook"
                                        name="Customer Email"
                                        size="small"
                                        variant="outlined"
                                        value={username || ''}
                                        onChange={handleChange}
                                    >

                                    </TextField>
                                </Grid>
                                <Grid item md={1} sm={4} xs={12}>
                                    Address
                                </Grid>
                                <Grid item md={5} sm={8} xs={12}>
                                    <TextField
                                        className="min-w-300"
                                        label="twitter"
                                        name="Customer Email"
                                        size="small"
                                        variant="outlined"
                                        value={username || ''}
                                        onChange={handleChange}
                                    >

                                    </TextField>
                                </Grid>

                                <Grid item md={1} sm={4} xs={12}>
                                    City
                                </Grid>
                                <Grid item md={5} sm={8} xs={12}>
                                    <TextField
                                        className="min-w-300"
                                        label="facebook"
                                        name="Customer Email"
                                        size="small"
                                        variant="outlined"
                                        value={username || ''}
                                        onChange={handleChange}
                                    >

                                    </TextField>
                                </Grid>
                                <Grid item md={1} sm={4} xs={12}>
                                    City
                                </Grid>
                                <Grid item md={5} sm={8} xs={12}>
                                    <TextField
                                        className="min-w-300"
                                        label="twitter"
                                        name="Customer Email"
                                        size="small"
                                        variant="outlined"
                                        value={username || ''}
                                        onChange={handleChange}
                                    >

                                    </TextField>
                                </Grid>
                                <Grid item md={1} sm={4} xs={12}>
                                    State
                                </Grid>
                                <Grid item md={5} sm={8} xs={12}>
                                    <TextField
                                        className="min-w-300"
                                        label="facebook"
                                        name="Customer Email"
                                        size="small"
                                        variant="outlined"
                                        value={username || ''}
                                        onChange={handleChange}
                                    >

                                    </TextField>
                                </Grid>
                                <Grid item md={1} sm={4} xs={12}>
                                    State
                                </Grid>
                                <Grid item md={5} sm={8} xs={12}>
                                    <TextField
                                        className="min-w-300"
                                        label="twitter"
                                        name="Customer Email"
                                        size="small"
                                        variant="outlined"
                                        value={username || ''}
                                        onChange={handleChange}
                                    >

                                    </TextField>
                                </Grid>
                                <Grid item md={1} sm={4} xs={12}>
                                    Zip
                                </Grid>
                                <Grid item md={5} sm={8} xs={12}>
                                    <TextField
                                        className="min-w-300"
                                        label="facebook"
                                        name="Customer Email"
                                        size="small"
                                        variant="outlined"
                                        value={username || ''}
                                        onChange={handleChange}
                                    >

                                    </TextField>
                                </Grid>
                                <Grid item md={1} sm={4} xs={12}>
                                    Zip
                                </Grid>
                                <Grid item md={5} sm={8} xs={12}>
                                    <TextField
                                        className="min-w-300"
                                        label="twitter"
                                        name="Customer Email"
                                        size="small"
                                        variant="outlined"
                                        value={username || ''}
                                        onChange={handleChange}
                                    >

                                    </TextField>
                                </Grid>
                                <Grid item md={1} sm={4} xs={12}>
                                    Phone
                                </Grid>
                                <Grid item md={5} sm={8} xs={12}>
                                    <TextField
                                        className="min-w-300"
                                        label="facebook"
                                        name="Customer Email"
                                        size="small"
                                        variant="outlined"
                                        value={username || ''}
                                        onChange={handleChange}
                                    >

                                    </TextField>
                                </Grid>
                                <Grid item md={1} sm={4} xs={12}>
                                    Phone
                                </Grid>
                                <Grid item md={5} sm={8} xs={12}>
                                    <TextField
                                        className="min-w-300"
                                        label="twitter"
                                        name="Customer Email"
                                        size="small"
                                        variant="outlined"
                                        value={username || ''}
                                        onChange={handleChange}
                                    >

                                    </TextField>
                                </Grid>
                                <Grid item md={1} sm={4} xs={12}>
                                    Fax
                                </Grid>
                                <Grid item md={5} sm={8} xs={12}>
                                    <TextField
                                        className="min-w-300"
                                        label="facebook"
                                        name="Customer Email"
                                        size="small"
                                        variant="outlined"
                                        value={username || ''}
                                        onChange={handleChange}
                                    >

                                    </TextField>
                                </Grid>
                                <Grid item md={1} sm={4} xs={12}>
                                    Fax
                                </Grid>
                                <Grid item md={5} sm={8} xs={12}>
                                    <TextField
                                        className="min-w-300"
                                        label="twitter"
                                        name="Customer Email"
                                        size="small"
                                        variant="outlined"
                                        value={username || ''}
                                        onChange={handleChange}
                                    >

                                    </TextField>
                                </Grid>

                            </Grid>

                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <Grid container className="mb-1" spacing={3} alignItems="center">
                                <Grid alignItems="center" item md={3} sm={4} xs={12}>
                                    First Name
                                </Grid>
                                <Grid alignItems="center" item md={3} sm={4} xs={12}>
                                    Last Name
                                </Grid>
                                <Grid alignItems="center" item md={3} sm={4} xs={12}>
                                    Email
                                </Grid>
                                <Grid alignItems="center" item md={3} sm={4} xs={12}>
                                    Phone Number
                                </Grid>
                            </Grid>
                            {inputList.map((x, i) => {
                                return (
                                    <div className="box">
                                        <TextField
                                            className="min-w-200"
                                            label="twitter"
                                            name="Customer Email"
                                            size="small"
                                            variant="outlined"
                                            value={x.firstName}
                                            onChange={e => handleInputChange(e, i)}
                                        >

                                        </TextField>
                                        <TextField
                                            className="min-w-200"
                                            label="twitter"
                                            name="Customer Email"
                                            size="small"
                                            variant="outlined"
                                            value={x.firstName}
                                            onChange={e => handleInputChange(e, i)}
                                        >

                                        </TextField>
                                        <TextField
                                            className="min-w-200"
                                            label="twitter"
                                            name="Customer Email"
                                            size="small"
                                            variant="outlined"
                                            value={x.firstName}
                                            onChange={e => handleInputChange(e, i)}
                                        >

                                        </TextField>
                                        <TextField
                                            className="min-w-200"
                                            label="twitter"
                                            name="Customer Email"
                                            size="small"
                                            variant="outlined"
                                            value={x.firstName}
                                            onChange={e => handleInputChange(e, i)}
                                        >

                                        </TextField>
                                        {inputList.length !== 1 && <IconButton
                                            className={classes.button}
                                            onClick={() => handleRemoveClick(i)}><Icon>close</Icon></IconButton>}
                                        {inputList.length - 1 === i && <Button onClick={handleAddClick}>Add</Button>}
                                    </div>
                                );
                            })}
                        </TabPanel>
                    </div>

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

            </Card>
        </div>

    )
}

export default SimpleForm
