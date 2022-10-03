import React from 'react';
import Divider from 'antd/lib/divider';
import { DirectionsList } from './components/DirectionsList/DirectionsList';
import { useAppSelector } from '../../redux/hooks/basicHooks';
import { AddDrawer } from '../../components/AddDrawer/AddDrawer';
import { AddDirectionForm } from './components/AddDirectionForm/AddDirectionForm';

export const Directions = () => {
  const directions = useAppSelector((state) => state.directions);

  return (
    <>
      <AddDrawer buttonText="Add direction" drawerTitle="Add direction form">
        {({ setOpenedDrawer }) => (
          <AddDirectionForm setOpenedDrawer={setOpenedDrawer} />
        )}
      </AddDrawer>

      <Divider orientation="left">Directions</Divider>
      {directions.length === 0 && (
        <div>There is no data available to display</div>
      )}
      <DirectionsList directions={directions} />
    </>
  );
};
