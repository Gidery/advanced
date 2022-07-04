import React from 'react';
import Divider from 'antd/lib/divider';
import { CargoList } from './components/CargoList/CargoList';
import { AddCargoPanel } from './components/AddCargoPanel/AddCargoPanel';
import { useAppSelector } from '../../redux/hooks/basicHooks';

export const Cargo = () => {
  const cargo = useAppSelector((state) => state.cargo);

  return (
    <>
      <AddCargoPanel />
      <Divider orientation="left">Cargo</Divider>
      {cargo.length === 0 && <div>There is no data available to display</div>}
      <CargoList cargo={cargo} />
    </>
  );
};
