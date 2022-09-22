import React from 'react';
import { Button } from 'antd';
import { addCargo, Cargo } from '../../../../../redux/redusers/cargoReducer';
import { useAppDispatch } from '../../../../../redux/hooks/basicHooks';
import { PlusOutlined } from '@ant-design/icons';
import styles from './ButtonsPanel.module.scss';
import commonStyles from '../AddCargoForm.module.scss';

interface ButtonsPanelProps {
  cargo: Cargo;
  setCargo: React.Dispatch<React.SetStateAction<Cargo>>;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenedDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ButtonsPanel: React.FC<ButtonsPanelProps> = ({
  cargo,
  setCargo,
  setError,
  setOpenedDrawer,
}) => {
  const dispatch = useAppDispatch();
  const checkingEmptyFields =
    cargo.name === '' ||
    cargo.goods.find((item) => item.name === '' || item.quantity === 0);

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
    <>
      <Button
        onClick={addGoods}
        className={commonStyles.FullRow}
        icon={<PlusOutlined />}
      >
        Add goods
      </Button>

      <Button
        onClick={onSubmit}
        className={styles.LeftSide}
        type="primary"
        htmlType="submit"
      >
        Add cargo
      </Button>

      <Button className={styles.RightSide} onClick={clearForm}>
        Clear form
      </Button>
    </>
  );
};
