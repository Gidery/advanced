import React, { useState } from 'react';
import { Typography } from 'antd';
import Input from 'antd/es/input/Input';
import { InputName } from '../../../../../components/InputName/InputName';
import { CargoSelect } from './CargoSelect/CargoSelect';
import { ButtonsPanel } from './ButtonsPanel/ButtonsPanel';
import { Direction } from '../../../../../redux/redusers/directionsReducer';
import commonStyles from '../../../../Cargo/components/AddCargoPanel/AddCargoForm/AddCargoForm.module.scss'; // TODO вынести

interface AddDirectionFormProps {
  setOpenedDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddDirectionForm: React.FC<AddDirectionFormProps> = ({
  setOpenedDrawer,
}) => {
  const { Text } = Typography;
  const [error, setError] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>({
    id: new Date().toISOString(),
    name: '',
    start: '',
    end: '',
    processedCargo: [],
  });

  const addDirectionName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDirection((prevState) => ({
      ...prevState,
      name: e.target.value,
    }));
  };

  const addDirectionPoint = (
    point: 'start' | 'end',
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDirection((prevState) => ({
      ...prevState,
      [point]: e.target.value,
    }));
  };

  return (
    <div className={commonStyles.Wrapper}>
      {error && (
        <Text className={commonStyles.FullRow} type="danger">
          All fields must be filled in
        </Text>
      )}

      <InputName name="Name: " className={commonStyles.FullRow}>
        <Input
          value={direction.name}
          placeholder="Please input direction name"
          onChange={addDirectionName}
        />
      </InputName>

      <InputName name="Start: " className={commonStyles.FullRow}>
        <Input
          value={direction.start}
          placeholder="Input start point"
          onChange={(e) => addDirectionPoint('start', e)}
        />
      </InputName>

      <InputName name="End: " className={commonStyles.FullRow}>
        <Input
          value={direction.end}
          placeholder="Input end point"
          onChange={(e) => addDirectionPoint('end', e)}
        />
      </InputName>

      <CargoSelect
        processedCargo={direction.processedCargo}
        setDirection={setDirection}
      />
      <ButtonsPanel
        direction={direction}
        setDirection={setDirection}
        setError={setError}
        setOpenedDrawer={setOpenedDrawer}
      />
    </div>
  );
};
