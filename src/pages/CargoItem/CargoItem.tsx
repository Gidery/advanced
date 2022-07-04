import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Divider from 'antd/lib/divider';
import { ButtonsPanel } from './components/ButtonsPanel/ButtonsPanel';
import { EditInfo } from './components/cargoInfo/EditInfo/EditInfo';
import { Info } from './components/cargoInfo/Info/Info';
import { Cargo } from '../../redux/redusers/cargoReducer';
import { useAppSelector } from '../../redux/hooks/basicHooks';

export const CargoItem = () => {
  const { id } = useParams();
  const [item] = useAppSelector((state) =>
    state.cargo.filter((cargo) => cargo.id === id)
  );
  const [cargoItem, setCargoItem] = useState<Cargo>(item);
  const [edit, setEdit] = useState<boolean>(false);

  return (
    <>
      {id !== undefined && cargoItem && (
        <>
          <ButtonsPanel cargoItem={cargoItem} edit={edit} setEdit={setEdit} />
          <Divider orientation="left">Cargo item</Divider>
          {edit ? (
            <EditInfo cargoItem={cargoItem} setCargoItem={setCargoItem} />
          ) : (
            <Info cargoItem={cargoItem} />
          )}
        </>
      )}
      {id === undefined && cargoItem === undefined && (
        <div>cargo item not found</div>
      )}
    </>
  );
};
