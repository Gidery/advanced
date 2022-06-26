import React from 'react';
import Divider from 'antd/lib/divider';
import { useParams } from 'react-router-dom';

export const CargoItem = () => {
  const { id } = useParams();
  return (
    <div>
      <Divider orientation="left">Cargo item</Divider>
      <div>{`id: ${id}`}</div>
    </div>
  );
};
