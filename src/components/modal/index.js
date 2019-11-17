import React, { Fragment, useContext } from 'react';
import { Context } from '../../store/context';


const Modal = () => {
    let modalContext = useContext(Context);
    let { modal: { data = {}, setOpen = () => { }, setData = () => { } }, state: { scan = () => { } } } = modalContext;

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
            <section className="products" style={{ padding: "0px", position: "relative", overflow: "hidden" }}>
                <img alt={data.name} src={data.imgXlUrl} className={'modal-image'}></img>
            </section>
            <aside className="summary" style={{ background: "#fff" }}>
                <div style={{ textAlign: "right", cursor: "pointer" }} onClick={handleClose}>
                    x
                </div>
                <div className="product-detail-summary">
                    <div className="product-detail-box">
                        <h1 className="product-detail-text">
                            <span className="product-title">
                                {data.name}
                            </span>
                            <span className="product-price">
                                {data.price} €
                            </span>
                        </h1>
                        <p className="product-detail-para">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <p className="product-detail-code">
                            Product code {data.code}
                        </p>
                        <button onClick={addToCart} type="submit">Add to cart</button>
                    </div>
                </div>
            </aside>
        </Fragment>
    )
}
export default Modal;