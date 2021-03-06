import React, { useState } from 'react';
import { Button, Typography } from 'antd';
import { Link } from 'react-router-dom';
import {
  Cargo,
  deleteCargo,
  editCargo,
} from '../../../../redux/redusers/cargoReducer';
import { useAppDispatch } from '../../../../redux/hooks/basicHooks';
import styles from './ButtonsPanel.module.scss';

interface ButtonsPanelProps {
  cargo: Cargo;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  edit: boolean;
}

export const ButtonsPanel: React.FC<ButtonsPanelProps> = ({
  cargo,
  edit,
  setEdit,
}) => {
  const dispatch = useAppDispatch();
  const { Text } = Typography;
  const [error, setError] = useState<boolean>(false);
  const checkingEmptyFields =
    cargo.name === '' ||
    cargo.goods.find((item) => item.name === '' || item.quantity === 0);

  const deleteItem = () => {
    dispatch(deleteCargo(cargo.id));
  };

  const getEditItem = () => {
    setEdit(true);
  };

  const setEditItem = () => {
    if (checkingEmptyFields) {
      setError(true);
      return;
    }
    dispatch(editCargo(cargo));
    setError(false);
    setEdit(false);
  };

  return (
    <>
      <div className={styles.Wrapper}>
        {edit ? (
          <Button onClick={setEditItem}>Save changes</Button>
        ) : (
          <Button onClick={getEditItem}>Edit cargo</Button>
        )}
        <Button danger>
          <Link onClick={deleteItem} to="/cargo">
            Delete cargo
          </Link>
        </Button>
      </div>
      {error && <Text type="danger"> All fields must be filled in</Text>}
    </>
  );
};
