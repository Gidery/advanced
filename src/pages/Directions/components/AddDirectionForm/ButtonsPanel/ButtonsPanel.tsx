import React from 'react';
import { Button } from 'antd';
import { useAppDispatch } from '../../../../../redux/hooks/basicHooks';
import {
  addDirection,
  Direction,
} from '../../../../../redux/redusers/directionsReducer';
import styles from '../../../../Cargo/components/AddCargoForm/ButtonsPanel/ButtonsPanel.module.scss'; // TODO вынести

interface ButtonsPanelProps {
  direction: Direction;
  setDirection: React.Dispatch<React.SetStateAction<Direction>>;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenedDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ButtonsPanel: React.FC<ButtonsPanelProps> = ({
  direction,
  setDirection,
  setError,
  setOpenedDrawer,
}) => {
  const dispatch = useAppDispatch();
  const checkingEmptyFields =
    direction.name === '' ||
    direction.start === '' ||
    direction.end === '' ||
    direction.processedCargo.length === 0;

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

  const clearForm = () => {
    setDirection((prevState) => ({
      ...prevState,
      name: '',
      start: '',
      end: '',
      processedCargo: [],
    }));
  };

  return (
    <>
      <Button className={styles.LeftSide} type="primary" onClick={onSubmit}>
        Add direction
      </Button>
      <Button className={styles.RightSide} onClick={clearForm}>
        Clear form
      </Button>
    </>
  );
};
