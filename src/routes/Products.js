import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';


/**
 * 
 * model和compnet串联起来
 */
const Products = ({ dispatch, products }) => {
    function handleDelete(id) {
        dispatch(
            {
                type: 'products/delete',
                payload: id,
            }
        );
    }
    function handleAdd(id) {
        dispatch(
            {
                type: 'products/add',
                payload: id,
            }
        );
    }


    return (
        <div>
            <h2>产品列表</h2>
            <ProductList onDelete={handleDelete} products={products} onAdd={handleAdd} />
        </div>
    );
};

// export default Products;
export default connect(({ products }) => ({
    products,
}))(Products);