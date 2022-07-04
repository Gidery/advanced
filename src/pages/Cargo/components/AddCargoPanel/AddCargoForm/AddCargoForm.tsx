import React, { useState } from 'react';
import { Input, Typography } from 'antd';
import { InputName } from '../../../../../components/InputName/InputName';
import { GoodsSelect } from './GoodsSelect/GoodsSelect';
import { ButtonsPanel } from './ButtonsPanel/ButtonsPanel';
import { Cargo } from '../../../../../redux/redusers/cargoReducer';
import styles from './AddCargoForm.module.scss';

interface AddCargoFormProps {
  setOpenedDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddCargoForm: React.FC<AddCargoFormProps> = ({
  setOpenedDrawer,
}) => {
  const { Text } = Typography;
  const [error, setError] = useState<boolean>(false);
  const [cargo, setCargo] = useState<Cargo>({
    id: new Date().toISOString(),
    name: '',
    goods: [
      {
        id: new Date().toISOString(),
        name: '',
        quantity: 0,
      },
    ],
  });

  const addCargoName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCargo((prevState) => ({
      ...prevState,
      name: e.target.value,
    }));
  };

  return (
    <div className={styles.Wrapper}>
      {error && (
        <Text className={styles.FullRow} type="danger">
          All fields must be filled in
        </Text>
      )}

      <InputName name="Name: " className={styles.FullRow}>
        <Input
          value={cargo.name}
          placeholder="Please input cargo name"
          onChange={addCargoName}
        />
      </InputName>

      <GoodsSelect goods={cargo.goods} setCargo={setCargo} />
      <ButtonsPanel
        cargo={cargo}
        setCargo={setCargo}
        setError={setError}
        setOpenedDrawer={setOpenedDrawer}
      />
    </div>
  );
};
