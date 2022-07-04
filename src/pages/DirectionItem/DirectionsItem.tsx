import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Divider from 'antd/lib/divider';
import { Info } from './components/Info/Info';
import { EditInfo } from './components/EditInfo/EditInfo';
import { Statistics } from './components/Statistics/Statistics';
import { ButtonsPanel } from './components/ButtonsPanel/ButtonsPanel';
import { AcceptedCargo } from './components/AcceptedCargo/AcceptedCargo';
import { Direction } from '../../redux/redusers/directionsReducer';
import { useAppSelector } from '../../redux/hooks/basicHooks';

export const DirectionsItem = () => {
  const { id } = useParams();
  const [item] = useAppSelector((state) =>
    state.directions.filter((direction) => direction.id === id)
  );
  const [direction, setDirection] = useState<Direction>(item);
  const [edit, setEdit] = useState<boolean>(false);

  const acceptedCargo = direction.processedCargo.filter(
    (cargo) => cargo.status === 'accepted'
  );

  return (
    <>
      {id !== undefined && direction && (
        <>
          <ButtonsPanel direction={direction} edit={edit} setEdit={setEdit} />
          <Divider orientation="left">Direction item</Divider>
          {edit ? (
            <EditInfo direction={direction} setDirection={setDirection} />
          ) : (
            <Info direction={direction} />
          )}
          <Divider orientation="left">Statistics</Divider>
          <Statistics cargo={direction.processedCargo} />
          {acceptedCargo.length > 0 && (
            <>
              <Divider orientation="left">Accepted cargo</Divider>
              <AcceptedCargo cargo={acceptedCargo} />
            </>
          )}
        </>
      )}
      {id === undefined || item === undefined ? (
        <div>direction not found</div>
      ) : null}
    </>
  );
};
