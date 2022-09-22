import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

interface AddDrawerProps {
  buttonText: string;
  drawerTitle: string;
  children: () => React.ReactElement;
}

export const AddDrawer: React.FC<AddDrawerProps> = ({
  buttonText,
  drawerTitle,
  children,
}) => {
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
        {buttonText}
      </Button>

      <Drawer
        title={drawerTitle}
        visible={openedDrawer}
        onClose={() => openDrawerHandler(false)}
      >
        {children({ setOpenedDrawer })}
      </Drawer>
    </>
  );
};
