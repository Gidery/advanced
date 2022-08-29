import React from 'react';
import Divider from 'antd/lib/divider';
import { DirectionsList } from './components/DirectionsList/DirectionsList';
import { AddDirectionPanel } from './components/AddDirectionPanel/AddDirectionPanel';
import { useAppSelector } from '../../redux/hooks/basicHooks';

export const Directions = () => {
  const directions = useAppSelector((state) => state.directions);

  return (
    <>
      <AddDirectionPanel />
      <Divider orientation="left">Directions</Divider>
      {directions.length === 0 && (
        <div>There is no data available to display</div>
      )}
      <DirectionsList directions={directions} />
    </>
  );
};
