import React from 'react';
import Divider from 'antd/lib/divider';
import { List } from 'antd';
import { Link } from 'react-router-dom';

export const Cargo = () => {
  const cargoList = [
    {
      id: '1',
      status: 'accepted',
      cargoName: 'Cargo1',
      goods: [
        {
          name: 'products',
          quantity: 15
        },
        {
          name: 'foods',
          quantity: 20
        },
        {
          name: 'iron',
          quantity: 50
        }
      ]
    },
    {
      id: '2',
      status: 'delivered',
      cargoName: 'second Cargo',
      goods: [
        {
          name: 'toys',
          quantity: 4
        },
        {
          name: 'drugs',
          quantity: 33
        }
      ]
    }
  ];

  return (
    <div>
      <Divider orientation="left">Cargo</Divider>
      <List
        bordered
        dataSource={cargoList}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={<Link to={`${item.id}`}>{item.cargoName}</Link>}
            />
          </List.Item>
        )}
      ></List>
    </div>
  );
};
