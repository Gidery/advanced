import React from 'react';
import Divider from 'antd/lib/divider';
import { CargoList } from './components/CargoList/CargoList';
import { useAppSelector } from '../../redux/hooks/basicHooks';
import { AddDrawer } from '../../components/AddDrawer/AddDrawer';
import { AddCargoForm } from './components/AddCargoForm/AddCargoForm';

export const Cargo = () => {
  const cargo = useAppSelector((state) => state.cargo);

  return (
    <>
      <AddDrawer buttonText="Add cargo" drawerTitle="Add cargo form">
        {({ setOpenedDrawer }) => (
          <AddCargoForm setOpenedDrawer={setOpenedDrawer} />
        )}
      </AddDrawer>
      <Divider orientation="left">Cargo</Divider>
      {cargo.length === 0 && <div>There is no data available to display</div>}
      <CargoList cargo={cargo} />
    </>
  );
};
