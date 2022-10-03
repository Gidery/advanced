import React, { useMemo, useState } from 'react';
import { Input, Typography } from 'antd';
import { InputName } from '../../../../components/InputName/InputName';
import { CargoSelect } from './components/CargoSelect/CargoSelect';
import {
  addDirection,
  Direction,
} from '../../../../redux/redusers/directionsReducer';
import commonStyles from '../../../Cargo/components/AddCargoForm/AddCargoForm.module.scss'; // TODO вынести
import { ButtonsPanel } from '../../../../components/ButtonsPanel/ButtonsPanel';
import { useAppDispatch } from '../../../../redux/hooks/basicHooks';

interface AddDirectionFormProps {
  setOpenedDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddDirectionForm: React.FC<AddDirectionFormProps> = ({
  setOpenedDrawer,
}) => {
  const { Text } = Typography;
  const dispatch = useAppDispatch();

  const [error, setError] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>({
    id: new Date().toISOString(),
    name: '',
    start: '',
    end: '',
    processedCargo: [],
  });

  const checkingEmptyFields = useMemo(
    (): boolean =>
      direction.name === '' ||
      direction.start === '' ||
      direction.end === '' ||
      direction.processedCargo.length === 0,
    [direction]
  );

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

  const clearForm = () => {
    setDirection((prevState) => ({
      ...prevState,
      name: '',
      start: '',
      end: '',
      processedCargo: [],
    }));
  };

  const onSubmit = () => {
    if (checkingEmptyFields) {
      setError(true);
      return;
    }
    dispatch(addDirection(direction));
    clearForm();
    setError(false);
    setOpenedDrawer(false);
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
        submitText="Add direction"
        onSubmit={onSubmit}
        clearForm={clearForm}
      />
    </div>
  );
};
