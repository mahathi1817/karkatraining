import React from "react";
import {navbar} from "../Styles/navbar.css";
export const Navbar=()=>{
    return(
        <nav>
            <div className="nav_box">
                <span className="my_shop">
                    My shopping
                </span>
                <div className="cart">
                    <span>
                        <i className="fa solid fa-cart-plus">Cart</i>
                    </span>
                </div>
            </div>
        </nav>
    )
}