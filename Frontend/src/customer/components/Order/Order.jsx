import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import OrderCard from './OrderCard';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderHistory } from '../../../state/Order/Action';
import { useNavigate, useLocation } from 'react-router-dom';

const orderStatus = () => [
    { label: "Pending", value: "pending" },
    { label: "Confirmed", value: "confirmed" },
    { label: "Shipped", value: "shipped" },
    { label: "Delivered", value: "delivered" },
    { label: "Cancelled", value: "cancelled" },
];

const Order = () => {
    const { order } = useSelector(store => store);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        dispatch(getOrderHistory());
    }, [dispatch]);

    const handleFilter = (value, sectionId) => {
        const searchParams = new URLSearchParams(location.search);
        let filterValue = searchParams.getAll(sectionId);

        if (filterValue.length > 0 && filterValue[0].split(",").includes(value)) {
            filterValue = filterValue[0].split(",").filter((item) => item !== value);
            if (filterValue.length === 0) {
                searchParams.delete(sectionId);
            }
        } else {
            filterValue.push(value);
        }

        if (filterValue.length > 0) {
            searchParams.set(sectionId, filterValue.join(","));
        }

        navigate({ search: `?${searchParams.toString()}` });
    };

    const searchParams = new URLSearchParams(location.search);
    const selectedFilters = searchParams.get("status")?.split(",") || [];
    const actual_order = order.orders.allOrders?.filter(item => 
        selectedFilters.length === 0 || selectedFilters.includes(item.orderStatus)
    );

    return (
        <div>
            <Grid container justifyContent={'space-between'}>
                <Grid item xs={2.5}>
                    <div className='shadow-lg m-5 p-5 sticky top-5'>
                        <h1 className='font-bold text-lg'>Filter</h1>
                        <div className='space-y-4 mt-10'>
                            <h1 className='font-semibold'>Order Status</h1>
                            {orderStatus().map((item) => (
                                <div key={item.value} className='flex space-x-3 items-center'>
                                    <input 
                                        type="checkbox" 
                                        value={item.value} 
                                        checked={selectedFilters.includes(item.value)}
                                        onChange={() => handleFilter(item.value, "status")} 
                                        className='h-4 w-4 border-gray-400 text-indigo-600 focus:ring-indigo-500'
                                    />
                                    <label htmlFor={item.value} className='ml-3 text-sm text-gray-600'>
                                        {item.label}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </Grid>

                <Grid item sm={9} className='m-5 p-5'>
                    {actual_order?.map((item) => (
                        <OrderCard key={item.id} order={item} />
                    ))}
                </Grid>
            </Grid>
        </div>
    );
};

export default Order;
