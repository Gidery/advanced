import React, { useState } from 'react';
import Divider from 'antd/lib/divider';
import { Button, Drawer } from 'antd';

import { CargoList } from './components/CargoList/CargoList';

import { addCargo } from '../../redux/redusers/cargoReducer';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { PlusOutlined } from '@ant-design/icons';

export const Cargo = () => {
  const [openedDrawer, isOpenedDrawer] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const cargo = useAppSelector((state) => state.cargo);

  const openDrawerHandler = (isOpen: boolean) => {
    isOpenedDrawer(isOpen);
  };

  const addCargoHandler = (name: string) => {
    dispatch(addCargo({ name }));
  };

  return (
    <div>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => openDrawerHandler(true)}
      >
        add cargo
      </Button>

      <Drawer
        title="Add cargo form"
        visible={openedDrawer}
        onClose={() => openDrawerHandler(false)}
      >
        <div>IS OPEN</div>
      </Drawer>

      <Divider orientation="left">Cargo</Divider>
      <CargoList cargo={cargo} />
    </div>
  );
};
