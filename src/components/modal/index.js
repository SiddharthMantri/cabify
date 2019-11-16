import React, { useContext, useEffect, Fragment } from 'react';
import { Context } from '../../store/context';


const Modal = props => {
    let modalContext = useContext(Context);
    let { modal: { open = false, data = {}, setOpen = () => { }, setData = () => { } }, state: { scan = () => { } } } = modalContext;

    const handleClose = () => {
        setOpen(false);
        setData({});
    }
    const addToCart = () => {
        scan(data.code);
        handleClose();
    }
    return (
        <Fragment>
            <section className="products" style={{ padding: "0px" }}>
                <img alt={data.code} src={data.imgUrl} style={{ width: "100%", height: "100%" }}></img>
            </section>
            <aside className="summary" style={{ background: "#fff" }}>
                <div style={{ textAlign: "right", cursor: "pointer" }} onClick={handleClose}>
                    x
                </div>
                <div className="product-detail-text">
                    <h1 className="">
                        {data.name}
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <button onClick={addToCart} type="submit">Add to cart</button>
                </div>
            </aside>
        </Fragment>
    )
}
export default Modal;