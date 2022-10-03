import React, { useMemo, useState } from 'react';
import { Button, Input, Typography } from 'antd';
import { InputName } from '../../../../components/InputName/InputName';
import { GoodsSelect } from './GoodsSelect/GoodsSelect';
import { addCargo, Cargo } from '../../../../redux/redusers/cargoReducer';
import styles from './AddCargoForm.module.scss';
import commonStyles from './AddCargoForm.module.scss';
import { PlusOutlined } from '@ant-design/icons';
import { ButtonsPanel } from '../../../../components/ButtonsPanel/ButtonsPanel';
import { useAppDispatch } from '../../../../redux/hooks/basicHooks';

interface AddCargoFormProps {
  setOpenedDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddCargoForm: React.FC<AddCargoFormProps> = ({
  setOpenedDrawer,
}) => {
  const { Text } = Typography;
  const dispatch = useAppDispatch();

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

  const checkingEmptyFields = useMemo(
    (): boolean =>
      cargo.name === '' ||
      !!cargo.goods.find((item) => item.name === '' || item.quantity === 0),
    [cargo]
  );

  const addCargoName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCargo((prevState) => ({
      ...prevState,
      name: e.target.value,
    }));
  };

  const addGoods = () => {
    setCargo((prevState) => ({
      ...prevState,
      goods: cargo.goods.concat({
        id: new Date().toISOString(),
        name: '',
        quantity: 0,
      }),
    }));
  };

  const clearForm = () => {
    setCargo({
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
  };

  const onSubmit = () => {
    if (checkingEmptyFields) {
      setError(true);
      return;
    }
    dispatch(addCargo(cargo));
    clearForm();
    setError(false);
    setOpenedDrawer(false);
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

      <Button
        onClick={addGoods}
        className={commonStyles.FullRow}
        icon={<PlusOutlined />}
      >
        Add goods
      </Button>

      <ButtonsPanel
        onSubmit={onSubmit}
        clearForm={clearForm}
        submitText="Add cargo"
      />
    </div>
  );
};
