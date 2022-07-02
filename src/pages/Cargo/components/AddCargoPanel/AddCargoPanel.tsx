import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { AddCargoForm } from './AddCargoForm/AddCargoForm';
import { useAppDispatch } from '../../../../redux/hooks/hooks';
import { addCargo } from '../../../../redux/redusers/cargoReducer';
import { PlusOutlined } from '@ant-design/icons';

export const AddCargoPanel = () => {
  const [openedDrawer, setOpenedDrawer] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const openDrawerHandler = (isOpen: boolean) => {
    setOpenedDrawer(isOpen);
  };

  const addCargoSubmit = (values: { name: string }) => {
    dispatch(addCargo(values));
    console.log('Success:', values);
    setOpenedDrawer(false);
  };

  return (
    <>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => openDrawerHandler(true)}
      >
        Add cargo
      </Button>

      <Drawer
        title="Add cargo form"
        visible={openedDrawer}
        onClose={() => openDrawerHandler(false)}
      >
        <AddCargoForm submit={addCargoSubmit} />
      </Drawer>
    </>
  );
};
