import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from 'antd';
import {
  deleteDirection,
  Direction,
  editDirection,
} from '../../../../redux/redusers/directionsReducer';
import { useAppDispatch } from '../../../../redux/hooks/basicHooks';
import styles from './ButtonsPanel.module.scss';

interface ButtonsPanelProps {
  direction: Direction;
  edit: boolean;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ButtonsPanel: React.FC<ButtonsPanelProps> = ({
  direction,
  edit,
  setEdit,
}) => {
  const dispatch = useAppDispatch();
  const { Text } = Typography;
  const [error, setError] = useState<boolean>(false);
  const checkingEmptyFields =
    direction.name === '' ||
    direction.start === '' ||
    direction.end === '' ||
    direction.processedCargo.length === 0;

  const setEditItem = () => {
    if (checkingEmptyFields) {
      setError(true);
      return;
    }
    dispatch(editDirection(direction));
    setError(false);
    setEdit(false);
  };

  const getEditItem = () => {
    setEdit(true);
  };

  const deleteItem = () => {
    dispatch(deleteDirection(direction.id));
  };

  return (
    <>
      <div className={styles.Wrapper}>
        {edit ? (
          <Button onClick={setEditItem}>Save changes</Button>
        ) : (
          <Button onClick={getEditItem}>Edit direction</Button>
        )}
        <Button danger>
          <Link onClick={deleteItem} to="/directions">
            Delete direction
          </Link>
        </Button>
      </div>
      {error && <Text type="danger"> All fields must be filled in</Text>}
    </>
  );
};
