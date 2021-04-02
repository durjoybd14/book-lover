import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import MenuBar from '../MenuBar/MenuBar';
import OrderDetails from '../OrderDetails/OrderDetails';
import { useForm } from 'react-hook-form';


const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://fathomless-shore-28553.herokuapp.com/orders?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    const { userName, email } = loggedInUser;

    const { register, handleSubmit, errors } = useForm();
    const [data, setData] = useState(false);
    
    const onSubmit = data => {
        const orderDetails = { ...loggedInUser, orderTime: new Date(), address: data.address, phone: data.phone };

        fetch('https://fathomless-shore-28553.herokuapp.com/confirmOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                setData(data)
                if(data){
                    alert("YAY! Your Order Placed Successfully")
                }
            })

    }
    return (
        <div className="container">
            <MenuBar />

            {data ? <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <img src="https://media3.giphy.com/media/f7kkcJ4L9t15HBmuMZ/giphy.gif" alt="" />
                </div>
                <div className="col-lg-4"></div>
            </div> :

                <div className="row mt-5">

                    <div className="col-lg-1"></div>

                    <div className="col-lg-5">
                        <h4>Hello {userName},</h4>
                        <div className="mt-3">
                            <h6>You have {orders.length} orders</h6>
                            <p className="text-muted">Please filled up the shipping form carefully and hit Submit button for shipping confirmation. </p>
                        </div>

                        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                            <h3>Shipping Information</h3>
                            <input name="name" defaultValue={userName} ref={register({ required: true })} placeholder="Your Name" className="form-control mt-4" />
                            {errors.name && <span className="error">Name is required</span>}

                            <input name="email" defaultValue={email} ref={register({ required: true })} placeholder="Your Email" className="form-control mt-2" />
                            {errors.email && <span className="error">Email is required</span>}

                            <input name="address" ref={register({ required: true })} placeholder="Your Address" className="form-control mt-2" />
                            {errors.address && <span className="error">Address is required</span>}

                            <input name="phone" ref={register({ required: true })} placeholder="Your Phone Number" className="form-control mt-2" />
                            {errors.phone && <span className="error">Phone Number is required</span>}

                            <input type="submit" className="btn btn-primary mt-2" />
                        </form>
                    </div>


                    <div className="col-lg-5 mt-3">

                        <div className="text-center">
                            <h5>Your orders information: </h5>
                            {
                                orders.map(order => <OrderDetails order={order} key={order._id}></OrderDetails>)
                            }
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                </div>}
        </div>
    );
};

export default Orders;