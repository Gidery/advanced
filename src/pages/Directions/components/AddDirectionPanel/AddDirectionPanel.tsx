import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { AddDirectionForm } from './AddDirectionForm/AddDirectionForm';
import { PlusOutlined } from '@ant-design/icons';

export const AddDirectionPanel = () => {
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
        Add direction
      </Button>

      <Drawer
        title="Add direction form"
        visible={openedDrawer}
        onClose={() => openDrawerHandler(false)}
      >
        <AddDirectionForm setOpenedDrawer={setOpenedDrawer} />
      </Drawer>
    </>
  );
};
