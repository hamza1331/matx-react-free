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
    Table,
    TableHead,
    TableCell,
    TableBody,
    TableRow,

    TablePagination,
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

const subscribarList = [
    {
        name: 'john doe',
        date: '18 january, 2019',
        amount: 1000,
        status: 'close',
        company: 'ABC Fintech LTD.',
    },
    {
        name: 'kessy bryan',
        date: '10 january, 2019',
        amount: 9000,
        status: 'open',
        company: 'My Fintech LTD.',
    },
    {
        name: 'kessy bryan',
        date: '10 january, 2019',
        amount: 9000,
        status: 'open',
        company: 'My Fintech LTD.',
    },
    {
        name: 'james cassegne',
        date: '8 january, 2019',
        amount: 5000,
        status: 'close',
        company: 'Collboy Tech LTD.',
    },
    {
        name: 'lucy brown',
        date: '1 january, 2019',
        amount: 89000,
        status: 'open',
        company: 'ABC Fintech LTD.',
    },
    {
        name: 'lucy brown',
        date: '1 january, 2019',
        amount: 89000,
        status: 'open',
        company: 'ABC Fintech LTD.',
    },
    {
        name: 'lucy brown',
        date: '1 january, 2019',
        amount: 89000,
        status: 'open',
        company: 'ABC Fintech LTD.',
    },
    {
        name: 'lucy brown',
        date: '1 january, 2019',
        amount: 89000,
        status: 'open',
        company: 'ABC Fintech LTD.',
    },
    {
        name: 'lucy brown',
        date: '1 january, 2019',
        amount: 89000,
        status: 'open',
        company: 'ABC Fintech LTD.',
    },
]




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
        backgroundColor: '#fafafa',
    },
}

const SimpleForm = () => {
    const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);
    const [rowsPerPage, setRowsPerPage] = React.useState(5)
    const [page, setPage] = React.useState(0)

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }
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
            <Card elevation={0}>
            </Card>
            <Divider className="mb-2" />

            <form className="p-0" onSubmit={handleSubmit}>
                <Grid className="mb-6" container spacing={3} alignItems="left">
                </Grid>
                <div className="elevation-z0">
                    <AppBar elevation={0} position="static mt-6">
                        <Tabs style={styles.default_tab} value={value} onChange={handleChange} aria-label="simple tabs example">
                            <Tab label="Details" {...a11yProps(0)} />
                            <Tab label="Invoices" {...a11yProps(1)} />
                            <Tab label="transactions" {...a11yProps(2)} />
                        </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0}>
                        <Grid className="mb-6" container spacing={3} alignItems="left">
                            <Card className="py-2" elevation={2}>

                                <Grid item md={3} sm={12} xs={12}>
                                    <Divider className="min-w-300" />

                                    <Grid container >
                                        <div className="flex justify-between">
                                            <Grid item md={5} sm={12} xs={12} alignItems="left">
                                                <div >
                                                    <p className="mx-4 text-13 text-left">Email</p>
                                                </div>
                                            </Grid>
                                            <Grid item md={7} sm={12} xs={12} alignItems="right">
                                                <div >
                                                    <p className="mx-4 text-13 text-right">uilib@example.com</p>
                                                </div>
                                            </Grid>
                                        </div>
                                    </Grid>
                                    <Divider className="min-w-300" />

                                    <Grid container >
                                        <div className="flex justify-between">
                                            <Grid item md={5} sm={12} xs={12} alignItems="left">
                                                <div >
                                                    <p className="mx-4 text-13 text-left">Phone</p>
                                                </div>
                                            </Grid>
                                            <Grid item md={7} sm={12} xs={12} alignItems="right">
                                                <div >
                                                    <p className="mx-4 text-13 text-right">+1439327546</p>
                                                </div>
                                            </Grid>
                                        </div>
                                    </Grid><Divider className="min-w-300" />

                                    <Grid container >
                                        <div className="flex justify-between">
                                            <Grid item md={6} sm={12} xs={12} alignItems="left">
                                                <div >
                                                    <p className="mx-4 text-13 text-left">Country</p>
                                                </div>
                                            </Grid>
                                            <Grid item md={12} sm={12} xs={12} alignItems="right">
                                                <div >
                                                    <p className="mx-4 text-13 text-right">USA</p>
                                                </div>
                                            </Grid>
                                        </div>
                                    </Grid><Divider className="min-w-300" />

                                    <Grid container >
                                        <div className="flex justify-between">
                                            <Grid item md={5} sm={12} xs={12} alignItems="left">
                                                <div >
                                                    <p className="mx-4 text-13 text-left">State/Region</p>
                                                </div>
                                            </Grid>
                                            <Grid item md={7} sm={12} xs={12} alignItems="right">
                                                <div >
                                                    <p className="mx-4 text-13 text-right">NewYork</p>
                                                </div>
                                            </Grid>
                                        </div>
                                    </Grid><Divider className="min-w-300" />

                                    <Grid container >
                                        <div className="flex justify-between">
                                            <Grid item md={5} sm={12} xs={12} alignItems="left">
                                                <div >
                                                    <p className="mx-4 text-13 text-left">Address 1</p>
                                                </div>
                                            </Grid>
                                            <Grid item md={7} sm={12} xs={12} alignItems="right">
                                                <div >
                                                    <p className="mx-4 text-13 text-right">StreetTailwood,No.17</p>
                                                </div>
                                            </Grid>
                                        </div>
                                    </Grid><Divider className="min-w-300" />

                                    <Grid container >
                                        <div className="flex justify-between">
                                            <Grid item md={5} sm={12} xs={12} alignItems="left">
                                                <div >
                                                    <p className="mx-4 text-13 text-left">Address 2</p>
                                                </div>
                                            </Grid>
                                            <Grid item md={7} sm={12} xs={12} alignItems="right">
                                                <div >
                                                    <p className="mx-4 text-13 text-right">House#19</p>
                                                </div>
                                            </Grid>
                                        </div>
                                    </Grid>

                                </Grid>

                            </Card>
                            <Card className="mx-4 py-2" elevation={2}>

                                <Grid item md={3} sm={12} xs={12}>
                                    <Divider className="min-w-300" />

                                    <Grid container >
                                        <div className="flex justify-between">
                                            <Grid item md={5} sm={12} xs={12} alignItems="left">
                                                <div >
                                                    <p className="mx-4 text-13 text-left">Email</p>
                                                </div>
                                            </Grid>
                                            <Grid item md={7} sm={12} xs={12} alignItems="right">
                                                <div >
                                                    <p className="mx-4 text-13 text-right">uilib@example.com</p>
                                                </div>
                                            </Grid>
                                        </div>
                                    </Grid>
                                    <Divider className="min-w-300" />

                                    <Grid container >
                                        <div className="flex justify-between">
                                            <Grid item md={5} sm={12} xs={12} alignItems="left">
                                                <div >
                                                    <p className="mx-4 text-13 text-left">Phone</p>
                                                </div>
                                            </Grid>
                                            <Grid item md={7} sm={12} xs={12} alignItems="right">
                                                <div >
                                                    <p className="mx-4 text-13 text-right">+1439327546</p>
                                                </div>
                                            </Grid>
                                        </div>
                                    </Grid><Divider className="min-w-300" />

                                    <Grid container >
                                        <div className="flex justify-between">
                                            <Grid item md={6} sm={12} xs={12} alignItems="left">
                                                <div >
                                                    <p className="mx-4 text-13 text-left">Country</p>
                                                </div>
                                            </Grid>
                                            <Grid item md={12} sm={12} xs={12} alignItems="right">
                                                <div >
                                                    <p className="mx-4 text-13 text-right">USA</p>
                                                </div>
                                            </Grid>
                                        </div>
                                    </Grid><Divider className="min-w-300" />

                                    <Grid container >
                                        <div className="flex justify-between">
                                            <Grid item md={5} sm={12} xs={12} alignItems="left">
                                                <div >
                                                    <p className="mx-4 text-13 text-left">State/Region</p>
                                                </div>
                                            </Grid>
                                            <Grid item md={7} sm={12} xs={12} alignItems="right">
                                                <div >
                                                    <p className="mx-4 text-13 text-right">NewYork</p>
                                                </div>
                                            </Grid>
                                        </div>
                                    </Grid><Divider className="min-w-300" />

                                    <Grid container >
                                        <div className="flex justify-between">
                                            <Grid item md={5} sm={12} xs={12} alignItems="left">
                                                <div >
                                                    <p className="mx-4 text-13 text-left">Address 1</p>
                                                </div>
                                            </Grid>
                                            <Grid item md={7} sm={12} xs={12} alignItems="right">
                                                <div >
                                                    <p className="mx-4 text-13 text-right">StreetTailwood,No.17</p>
                                                </div>
                                            </Grid>
                                        </div>
                                    </Grid><Divider className="min-w-300" />

                                    <Grid container >
                                        <div className="flex justify-between">
                                            <Grid item md={5} sm={12} xs={12} alignItems="left">
                                                <div >
                                                    <p className="mx-4 text-13 text-left">Address 2</p>
                                                </div>
                                            </Grid>
                                            <Grid item md={7} sm={12} xs={12} alignItems="right">
                                                <div >
                                                    <p className="mx-4 text-13 text-right">House#19</p>
                                                </div>
                                            </Grid>
                                        </div>
                                    </Grid>

                                </Grid>

                            </Card>

                            <Card className=" mx-4 py-2" elevation={2}>
                                <Grid item md={3} sm={12} xs={12}>
                                    <Divider className="min-w-300" />

                                    <Grid container >
                                        <div className="flex justify-between">
                                            <Grid item md={5} sm={12} xs={12} alignItems="left">
                                                <div >
                                                    <p className="mx-4 text-13 text-left">Email</p>
                                                </div>
                                            </Grid>
                                            <Grid item md={7} sm={12} xs={12} alignItems="right">
                                                <div >
                                                    <p className="mx-4 text-13 text-right">uilib@example.com</p>
                                                </div>
                                            </Grid>
                                        </div>
                                    </Grid>
                                    <Divider className="min-w-300" />

                                    <Grid container >
                                        <div className="flex justify-between">
                                            <Grid item md={5} sm={12} xs={12} alignItems="left">
                                                <div >
                                                    <p className="mx-4 text-13 text-left">Phone</p>
                                                </div>
                                            </Grid>
                                            <Grid item md={7} sm={12} xs={12} alignItems="right">
                                                <div >
                                                    <p className="mx-4 text-13 text-right">+1439327546</p>
                                                </div>
                                            </Grid>
                                        </div>
                                    </Grid><Divider className="min-w-300" />

                                    <Grid container >
                                        <div className="flex justify-between">
                                            <Grid item md={6} sm={12} xs={12} alignItems="left">
                                                <div >
                                                    <p className="mx-4 text-13 text-left">Country</p>
                                                </div>
                                            </Grid>
                                            <Grid item md={12} sm={12} xs={12} alignItems="right">
                                                <div >
                                                    <p className="mx-4 text-13 text-right">USA</p>
                                                </div>
                                            </Grid>
                                        </div>
                                    </Grid><Divider className="min-w-300" />

                                    <Grid container >
                                        <div className="flex justify-between">
                                            <Grid item md={5} sm={12} xs={12} alignItems="left">
                                                <div >
                                                    <p className="mx-4 text-13 text-left">State/Region</p>
                                                </div>
                                            </Grid>
                                            <Grid item md={7} sm={12} xs={12} alignItems="right">
                                                <div >
                                                    <p className="mx-4 text-13 text-right">NewYork</p>
                                                </div>
                                            </Grid>
                                        </div>
                                    </Grid><Divider className="min-w-300" />

                                    <Grid container >
                                        <div className="flex justify-between">
                                            <Grid item md={5} sm={12} xs={12} alignItems="left">
                                                <div >
                                                    <p className="mx-4 text-13 text-left">Address 1</p>
                                                </div>
                                            </Grid>
                                            <Grid item md={7} sm={12} xs={12} alignItems="right">
                                                <div >
                                                    <p className="mx-4 text-13 text-right">StreetTailwood,No.17</p>
                                                </div>
                                            </Grid>
                                        </div>
                                    </Grid><Divider className="min-w-300" />

                                    <Grid container >
                                        <div className="flex justify-between">
                                            <Grid item md={5} sm={12} xs={12} alignItems="left">
                                                <div >
                                                    <p className="mx-4 text-13 text-left">Address 2</p>
                                                </div>
                                            </Grid>
                                            <Grid item md={7} sm={12} xs={12} alignItems="right">
                                                <div >
                                                    <p className="mx-4 text-13 text-right">House#19</p>
                                                </div>
                                            </Grid>
                                        </div>
                                    </Grid>

                                </Grid>

                            </Card>

                            <Card className=" mx-0 my-6" elevation={2}>
                                <Grid item md={3} sm={12} xs={12}>
                                    <Divider className="min-w-300" />

                                    <Grid container >
                                        <div className="flex justify-between">
                                            <Grid item md={5} sm={12} xs={12} alignItems="left">
                                                <div >
                                                    <p className="mx-4 text-13 text-left">Email</p>
                                                </div>
                                            </Grid>
                                            <Grid item md={7} sm={12} xs={12} alignItems="right">
                                                <div >
                                                    <p className="mx-4 text-13 text-right">uilib@example.com</p>
                                                </div>
                                            </Grid>
                                        </div>
                                    </Grid>
                                    <Divider className="min-w-300" />

                                    <Grid container >
                                        <div className="flex justify-between">
                                            <Grid item md={5} sm={12} xs={12} alignItems="left">
                                                <div >
                                                    <p className="mx-4 text-13 text-left">Phone</p>
                                                </div>
                                            </Grid>
                                            <Grid item md={7} sm={12} xs={12} alignItems="right">
                                                <div >
                                                    <p className="mx-4 text-13 text-right">+1439327546</p>
                                                </div>
                                            </Grid>
                                        </div>
                                    </Grid><Divider className="min-w-300" />

                                    <Grid container >
                                        <div className="flex justify-between">
                                            <Grid item md={6} sm={12} xs={12} alignItems="left">
                                                <div >
                                                    <p className="mx-4 text-13 text-left">Country</p>
                                                </div>
                                            </Grid>
                                            <Grid item md={12} sm={12} xs={12} alignItems="right">
                                                <div >
                                                    <p className="mx-4 text-13 text-right">USA</p>
                                                </div>
                                            </Grid>
                                        </div>
                                    </Grid><Divider className="min-w-300" />

                                    <Grid container >
                                        <div className="flex justify-between">
                                            <Grid item md={5} sm={12} xs={12} alignItems="left">
                                                <div >
                                                    <p className="mx-4 text-13 text-left">State/Region</p>
                                                </div>
                                            </Grid>
                                            <Grid item md={7} sm={12} xs={12} alignItems="right">
                                                <div >
                                                    <p className="mx-4 text-13 text-right">NewYork</p>
                                                </div>
                                            </Grid>
                                        </div>
                                    </Grid><Divider className="min-w-300" />

                                    <Grid container >
                                        <div className="flex justify-between">
                                            <Grid item md={5} sm={12} xs={12} alignItems="left">
                                                <div >
                                                    <p className="mx-4 text-13 text-left">Address 1</p>
                                                </div>
                                            </Grid>
                                            <Grid item md={7} sm={12} xs={12} alignItems="right">
                                                <div >
                                                    <p className="mx-4 text-13 text-right">StreetTailwood,No.17</p>
                                                </div>
                                            </Grid>
                                        </div>
                                    </Grid><Divider className="min-w-300" />

                                    <Grid container >
                                        <div className="flex justify-between">
                                            <Grid item md={5} sm={12} xs={12} alignItems="left">
                                                <div >
                                                    <p className="mx-4 text-13 text-left">Address 2</p>
                                                </div>
                                            </Grid>
                                            <Grid item md={7} sm={12} xs={12} alignItems="right">
                                                <div >
                                                    <p className="mx-4 text-13 text-right">House#19</p>
                                                </div>
                                            </Grid>
                                        </div>
                                    </Grid>

                                </Grid>

                            </Card>

                        </Grid>

                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Card className="py-0" elevation={2}>
                            <Grid container className="mb-1" spacing={3} alignItems="center">
                                <div className="w-full overflow-auto">
                                    <Table className="whitespace-pre">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell className="px-0">Name</TableCell>
                                                <TableCell className="px-0">Company</TableCell>
                                                <TableCell className="px-0">Start Date</TableCell>
                                                <TableCell className="px-0">Status</TableCell>
                                                <TableCell className="px-0">Amount</TableCell>
                                                <TableCell className="px-0">Action</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {subscribarList
                                                .slice(
                                                    page * rowsPerPage,
                                                    page * rowsPerPage + rowsPerPage
                                                )
                                                .map((subscriber, index) => (
                                                    <TableRow key={index}>
                                                        <TableCell
                                                            className="px-0 capitalize"
                                                            align="left"
                                                        >
                                                            {subscriber.name}
                                                        </TableCell>
                                                        <TableCell
                                                            className="px-0 capitalize"
                                                            align="left"
                                                        >
                                                            {subscriber.company}
                                                        </TableCell>
                                                        <TableCell
                                                            className="px-0 capitalize"
                                                            align="left"
                                                        >
                                                            {subscriber.date}
                                                        </TableCell>
                                                        <TableCell className="px-0 capitalize">
                                                            {subscriber.status}
                                                        </TableCell>
                                                        <TableCell className="px-0 capitalize">
                                                            ${subscriber.amount}
                                                        </TableCell>
                                                        <TableCell className="px-0">
                                                            <IconButton>
                                                                <Icon color="error">close</Icon>
                                                            </IconButton>
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                        </TableBody>
                                    </Table>

                                    <TablePagination
                                        className="px-4"
                                        rowsPerPageOptions={[5, 10, 25]}
                                        component="div"
                                        count={subscribarList.length}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        backIconButtonProps={{
                                            'aria-label': 'Previous Page',
                                        }}
                                        nextIconButtonProps={{
                                            'aria-label': 'Next Page',
                                        }}
                                        onChangePage={handleChangePage}
                                        onChangeRowsPerPage={handleChangeRowsPerPage}
                                    />
                                </div>
                            </Grid>

                        </Card>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
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


        </div>

    )
}

export default SimpleForm










