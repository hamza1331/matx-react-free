import React, { Fragment, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { DataGrid } from '@material-ui/data-grid';
import { useDispatch, useSelector } from 'react-redux';
import {
    Grid, Card,
    Divider, Icon, Button, IconButton, Fab
} from '@material-ui/core'
import { useTheme } from '@material-ui/styles'
import { useHistory } from 'react-router-dom'
import { Breadcrumb } from 'app/components'
import { getProductList } from '../../redux/actions/ProductAction'
import MUIDataTable from "mui-datatables";


const columns = [
    {
        name: "name",
        label: "Name",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "company",
        label: "Company",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "city",
        label: "City",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "state",
        label: "State",
        options: {
            filter: true,
            sort: false,
        }
    },
];

const data = [
    { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
    { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
    { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
    { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
];

const options = {
    filterType: 'checkbox',
};
const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}))

let cartListLoaded = false;
const ProductList = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { productList } = useSelector((state) => state.product)
    const theme = useTheme()
    const classes = useStyles()
    if (!cartListLoaded) {
        dispatch(getProductList())
        cartListLoaded = true
    }

    const rows = productList.map((customerList) => {
        return {
            // assuming attributes
            name: <div> <div className="font-bold">{productList.name}
            </div><div className="text-small">{productList.description}</div></div>,
            quantity: productList.quantity,
            price: productList.price,
            productionDate: productList.productionDate,
            expiryDate: productList.expiryDate,
            suk: productList.suk,
            unit: productList.unit,
            Action: <div>
                <IconButton className={classes.button} onClick={
                    (e) =>{
                        localStorage.setItem('id',productList._id)
                        console.log(productList._id)
                        history.push("/pages/edit-product")}
                    }>
                        
                <Icon>create</Icon>
            </IconButton>
                <IconButton className={classes.button} onClick={(event) =>{ 
                    console.log(columns)
                    localStorage.setItem('id',productList._id)
                    history.push('/pages/product-profile')}}>
                    <Icon>arrow_forward</Icon>
                </IconButton></div>
        }
    })


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
                <Grid container spacing={3}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <MUIDataTable
                            title={"Products List"}
                            data={data}
                            columns={columns}
                            options={options}
                        />

                    </Grid>
                </Grid>
            </div>
        </Fragment>
    )
}

export default ProductList










