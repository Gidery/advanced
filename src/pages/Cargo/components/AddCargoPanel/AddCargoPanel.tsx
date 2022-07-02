import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { AddCargoForm } from './AddCargoForm/AddCargoForm';
import { PlusOutlined } from '@ant-design/icons';

export const AddCargoPanel = () => {
  const [openedDrawer, setOpenedDrawer] = useState<boolean>(false);

  const openDrawerHandler = (isOpen: boolean) => {
    setOpenedDrawer(isOpen);
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
        <AddCargoForm setOpenedDrawer={setOpenedDrawer} />
      </Drawer>
    </>
  );
};
