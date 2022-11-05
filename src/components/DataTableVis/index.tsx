import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { MoreOutlined } from '@ant-design/icons';
import { Button, Dropdown, Table, Menu } from 'antd';



const DataTableVis = ({ data = [], columns, actions, loading, rowKey = "_id" }) => {

    const pagination = {
        showSizeChanger: true,
        defaultPageSize: 20,
        showTotal: (total: any, [start, end]: any) => `Showing ${start} - ${end} of ${total}`,
      };


    return (
        <div className="DataTable">
        <Table loading={loading} dataSource={data} rowKey={rowKey} size="middle" pagination={pagination}>
            {columns.map((x:any) => (
            <Table.Column
                title={x.title}
                key={x.key}
                dataIndex={x.key}
                align={x.align}
                render={x.render}
                width={x.width}
            />
        ))}
        <Table.Column
          key="id"
          title="Actions"
          width={80}
          align="center"
          render={(_, x) => (
            <Dropdown trigger="click" overlay={
              <Menu>
                {actions && actions.map(y => (
                  <Menu.Item key={y.text}>
                    <Button block size="small" type="text" icon={y.icon} onClick={() => y.onClick(x)} className="text-left">
                      {y.text}
                    </Button>
                  </Menu.Item>
                ))}
              </Menu>
            }>
              <Button type="text" size="small" icon={<MoreOutlined />} />
            </Dropdown>
          )}
        />
      </Table>
    </div>
    );
};

export default DataTableVis;
