/* eslint-disable react/prop-types */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { MoreOutlined } from '@ant-design/icons';
import { Button, Dropdown, Table, Menu } from 'antd';

interface DataTableTypes {
  data: object[];
  columns: any;
  actions: any;
  loading: boolean;
  //rowKey: any;
}

//const DataTable = ({ data = [], columns, actions, loading, rowKey = "_id" }: DataTableTypes) => {
const DataTable = ({ 
  data = [], 
  columns, 
  actions, 
  loading }: DataTableTypes) => {
    const pagination = {
        showSizeChanger: true,
        defaultPageSize: 20,
        showTotal: (total: any, [start, end]: any) => 
        `Showing ${start} - ${end} of ${total}`,
      };

    return (
      <div className="DataTable">
        {/* <Table loading={loading} dataSource={data} rowKey={rowKey} size="middle" pagination={pagination}> */}
        <Table 
          loading={loading} 
          dataSource={data} 
          size="middle" 
          pagination={pagination} 
          //columns={columns} 
        >
          {columns.map((x:any) => (
            <Table.Column
              title={x.title}
              key={x.key}
              dataIndex={x.dataIndex}
              align={x.align}
              render={x.render}
              width={x.width}
            />
          ))}
          {actions.map((action: any, i: any) => (
            <Table.Column
              title="actions"
              key={i}
              render={(_:any, record: any) => (
                <Button size="middle" onClick={() => action.onClick(record)}>
                  {action.text} 
                </Button>
               )}
               />
             ))}
           </Table>
         </div>
       );
     };
     
     export default DataTable;
