import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';

const ProductList = ({ onDelete, onAdd, products }) => {
    const columns = [{
        title: 'Name',
        dataIndex: 'name',
    }, {
        title: 'Actions',
        render: (text, record) => {
            return (
                <>
                    <Popconfirm title="确定删除?" onConfirm={() => onDelete(record.id)}>
                        <Button>删除</Button>
                    </Popconfirm>
                    <div onClick={() => onAdd(record.id)}>
                        <Button>新增</Button>
                    </div>
                </>
            );
        },

    }];
    return (
        <Table
            dataSource={products}
            columns={columns}
        />
    );
};

ProductList.propTypes = {
    onDelete: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
};

export default ProductList;