import React from 'react';

import { connect } from "react-redux";
import {
    onDelete,
    onIncrease,
    onDecrease
} from '../../actions';

const ShoppingCartTable = ({ cartTable, cartTotal }) => {

    const rows = cartTable.map((row, idx) => {
        const { id, title, price } = row;

        return (
            <tr key={ id }>
                <td>{ idx + 1 }</td>
                <td>{ title }</td>
                <td>{ Math.floor(Math.random()*5+1) }</td>
                <td>{`$${ price }`}</td>
                <td>
                    <button
                        className="btn btn-outline-danger btn-sm float-right"
                        onClick={ () => onDelete(id) } >
                        <i className="fa fa-trash"/>
                        delete
                    </button>
                    <button
                        className="btn btn-outline-success btn-sm float-right"
                        onClick={ () => onIncrease(id) } >
                        <i className="fa fa-plus-circle"/>
                        plus
                    </button>
                    <button
                        className="btn btn-outline-warning btn-sm float-right"
                        onClick={ () => onDecrease(id) } >
                        <i className="fa fa-minus-circle"/>
                        minus
                    </button>
                </td>
            </tr>
        )
    });

    return (
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { rows }
                </tbody>
            </table>
            <div className="total">
                { `Total: ${ cartTotal }` }
            </div>
        </div>
    );
};

const mapStateToProps = ({ cartTable, cartTotal }) => {
    return { cartTable, cartTotal }
};

const mapDispatchToProps = {
    onDelete,
    onIncrease,
    onDecrease
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
