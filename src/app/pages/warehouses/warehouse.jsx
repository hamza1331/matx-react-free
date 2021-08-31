











import React, { Fragment, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { DataGrid } from '@material-ui/data-grid';
import { useDispatch, useSelector } from 'react-redux';
import {
    Grid, Card, Badge, Link,
    Divider, Icon, Button, IconButton, Fab
} from '@material-ui/core'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { useTheme } from '@material-ui/styles'
import PaginationTable from '../../views/material-kit/tables/PaginationTable'
import { useHistory } from 'react-router-dom'
import { Breadcrumb } from 'app/components'
import { getWarehouseList } from '../../redux/actions/WarehouseAction'
import { ThemeProvider } from '@material-ui/core/styles'
import MUIDataTable, { TableFilterList } from "mui-datatables";


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}))
function Item(warehouseList) {
    const [anchorEl, setAnchorEl] = React.useState(null)

    function handleClick(event) {
        setAnchorEl(event.currentTarget)
    }

    function handleClose() {
        setAnchorEl(null)
    }
    const classes = useStyles()
    return (
        <Card className="w-full  flex justify-between py-2 px-2 mx-2 mb-4 bg-light-gray" elevation={3}>
            <div className="w-full  flex justify-between">
                <div className="w-full  flex justify-between">
                    <div className="w-full text-muted">
                        {warehouseList.message.warehouse_name}
                    </div>
                    <div className="w-full text-muted">
                        <div className="px-0 pt-2 pb-4">
                            <p className="m-0">
                                {warehouseList.message.country}<br></br>
                                {warehouseList.message.city}<br></br>
                                {warehouseList.message.street}<br></br>
                                {warehouseList.message.phone_no}
                            </p>
                            <small className="text-muted">
                                {warehouseList.message.country}
                            </small>
                        </div>
                    </div>
                    <div className="w-full text-muted">
                        <IconButton className={classes.button} aria-label="Delete">
                            <Icon>mode_edit</Icon>
                        </IconButton>
                        <div>
                            <Button
                                variant="outlined"
                                aria-owns={anchorEl ? 'simple-menu' : undefined}
                                aria-haspopup="true"
                                onClick={handleClick}
                            >
                                <Icon color="primary">settings</Icon>
                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>mark as Inactive</MenuItem>
                                <MenuItem onClick={handleClose}>Delete</MenuItem>
                            </Menu>
                        </div>
                    </div>
                </div>

            </div>
        </Card>);
}
let cartListLoaded = false;
const CustomerList = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { warehouseList } = useSelector((state) => state.warehouse)

    const theme = useTheme()
    const classes = useStyles()
    if (!cartListLoaded) {
        dispatch(getWarehouseList())
        cartListLoaded = true
    }


    return (

        <Fragment>
            <div className="analytics m-sm-30 mt-6">
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

                <Card className="w-full" elevation={3}>
                    <div className="flex p-4">
                        <h4 className="m-0">Warehouses</h4>
                    </div>
                    <Divider className="mb-2" />
                    <Grid className="m-4 w-full mb-6" container spacing={8} alignItems="left">
                        {warehouseList?.map((message) => (<Item key={message} message={message} />
                        ))}
                    </Grid>
                </Card>


            </div></Fragment>
    )
}

export default CustomerList





