import React from 'react';
import Divider from 'antd/lib/divider';
import { Button, List } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addCargo } from '../../redux/redusers/cargoReducer';

export const Cargo = () => {
  const dispatch = useDispatch();
  const cargo = useSelector((state) => state.cargo);

  const addCargoHandler = (name: string) => {
    dispatch(addCargo({ name }));
  };

  return (
    <div>
      <Divider orientation="left">Cargo</Divider>
      <Button onClick={() => addCargoHandler(prompt())}>add cargo</Button>
      <List
        bordered
        dataSource={cargo}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={<Link to={`${item.id}`}>{item.name}</Link>}
            />
          </List.Item>
        )}
      ></List>
    </div>
  );
};
