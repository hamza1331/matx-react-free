

import React, { Fragment, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { DataGrid } from '@material-ui/data-grid';
import { useDispatch, useSelector } from 'react-redux';
import {
    TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    Grid, Card, Badge, Link,
    Divider, Icon, Button, IconButton, Fab
} from '@material-ui/core'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { useTheme } from '@material-ui/styles'
import PaginationTable from '../../views/material-kit/tables/PaginationTable'
import { useHistory } from 'react-router-dom'
import { Breadcrumb } from 'app/components'
import { getBranchList } from '../../redux/actions/BranchAction'
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
function Item(branchList) {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const [open, setOpen] = React.useState(false)

    function handleClickOpen() {
        setOpen(true)
    }

    function handleDialogClose() {
        setOpen(false)
    }
    function handleClick(event) {
        setAnchorEl(event.currentTarget)
    }

    function handleClose() {
        setAnchorEl(null)
    }
    const classes = useStyles()
    return (

        <Card className="w-full  flex justify-between py-2 px-2 mx-2 mb-4 bg-light-gray" elevation={3}>
            <div>
                <Dialog
                    open={open}
                    onClose={handleDialogClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Edit Branch</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="email"
                            label="Email Address"
                            type="email"
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="email"
                            label="Email Address"
                            type="email"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={handleDialogClose}
                        >
                            Cancel
                        </Button>
                        <Button onClick={handleDialogClose} color="primary">
                            Subscribe
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>


            <div className="w-full  flex justify-between" >
                <div className="w-full  flex justify-between">
                    <div className="w-full text-muted">
                        {branchList.message.branch_name}
                    </div>
                    <div className="w-full text-muted">
                        <div className="px-0 pt-2 pb-4">
                            <p className="m-0">
                                {branchList.message.country}<br></br>
                                {branchList.message.city}<br></br>
                                {branchList.message.street}<br></br>
                                {branchList.message.phone_no}
                            </p>
                            <small className="text-muted">
                                {branchList.message.country}
                            </small>
                        </div>
                    </div>
                    <div className="w-full text-muted">
                        <IconButton className={classes.button} onClick={handleClickOpen}>
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
    const { branchList } = useSelector((state) => state.branch)
    const [open, setOpen] = React.useState(false)

    function handleClickOpen() {
        setOpen(true)
    }

    function handleDialogClose() {
        setOpen(false)
    }
    const theme = useTheme()
    const classes = useStyles()
    if (!cartListLoaded) {
        dispatch(getBranchList())
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
                        <h4 className="mr-6">Branches</h4>

                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleClickOpen}
                        >
                            New
                        </Button>
                    </div>

                    <div>
                        <Dialog
                            open={open}
                            onClose={handleDialogClose}
                            aria-labelledby="form-dialog-title"
                        >
                            <DialogTitle id="form-dialog-title">New Branch</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                </DialogContentText>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Email Address"
                                    type="email"
                                    fullWidth
                                />
                                 <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Email Address"
                                    type="email"
                                    fullWidth
                                />
                                 <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Email Address"
                                    type="email"
                                    fullWidth
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    onClick={handleDialogClose}
                                >
                                    Cancel
                                </Button>
                                <Button onClick={handleDialogClose} color="primary">
                                    Subscribe
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>









                    <Divider className="mb-2" />
                    <Grid className="m-4 w-full mb-6" container spacing={8} alignItems="left">
                        {branchList?.map((message) => (<Item key={message} message={message} />
                        ))}
                    </Grid>
                </Card>


            </div></Fragment>
    )
}

export default CustomerList





