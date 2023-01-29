import React from 'react';

import { connect } from "react-redux";
import * as actions from '../../actions';

const ShoppingCartTable = ({ cartTable, cartTotal, ...otherProps }) => {
    const { onDelete, onIncrease, onDecrease } = otherProps;

    const rows = cartTable.map((row, idx) => {
        const { id, title, price, count } = row;

        return (
            <tr key={ id }>
                <td>{ idx + 1 }</td>
                <td>{ title }</td>
                <td>{ count }</td>
                <td>{`$${ price }`}</td>
                <td>
                    <button
                        className="btn btn-outline-danger btn-sm float-right"
                        onClick={ () => onDelete(id) } >
                        <i className="fa fa-trash"/>
                    </button>
                    <button
                        className="btn btn-outline-success btn-sm float-right"
                        onClick={ () => onIncrease(id) } >
                        <i className="fa fa-plus-circle"/>
                    </button>
                    <button
                        disabled={ count <= 1 }
                        className="btn btn-outline-warning btn-sm float-right"
                        onClick={ () => onDecrease(id) } >
                        <i className="fa fa-minus-circle"/>
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

const mapStateToProps = ({ shoppingCart: { cartTable, cartTotal } }) => {
    return { cartTable, cartTotal }
};

export default connect(mapStateToProps, actions)(ShoppingCartTable);
