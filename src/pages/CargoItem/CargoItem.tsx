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
  const [cargo, setCargo] = useState<Cargo>(item);
  const [edit, setEdit] = useState<boolean>(false);

  return (
    <>
      {id !== undefined && cargo && (
        <>
          <ButtonsPanel cargo={cargo} edit={edit} setEdit={setEdit} />
          <Divider orientation="left">Cargo item</Divider>
          {edit ? (
            <EditInfo cargo={cargo} setCargo={setCargo} />
          ) : (
            <Info cargo={cargo} />
          )}
        </>
      )}
      {id === undefined || (cargo === undefined && <div>cargo not found</div>)}
    </>
  );
};
