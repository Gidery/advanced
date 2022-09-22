import React from 'react';
import { Button, Select, Typography } from 'antd';
import { useAppSelector } from '../../../../../redux/hooks/basicHooks';
import {
  Direction,
  ProcessedCargo,
} from '../../../../../redux/redusers/directionsReducer';
import { Cargo } from '../../../../../redux/redusers/cargoReducer';
import { DeleteOutlined } from '@ant-design/icons';
import styles from './CargoSelect.module.scss';

interface CargoSelectProps {
  processedCargo: ProcessedCargo[];
  setDirection: React.Dispatch<React.SetStateAction<Direction>>;
}

export const CargoSelect: React.FC<CargoSelectProps> = ({
  processedCargo,
  setDirection,
}) => {
  const { Text } = Typography;
  const cargo = useAppSelector((state) => state.cargo);

  const addCargo = (id: Cargo['id']) => {
    const newCargo = cargo.find((cargo) => cargo.id === id);
    if (newCargo === undefined) return;
    setDirection((prevState) => ({
      ...prevState,
      processedCargo: processedCargo.concat({
        id: new Date().toISOString(),
        name: newCargo.name,
        status: 'delivered',
        goods: newCargo.goods,
      }),
    }));
  };

  const deleteCargo = (id: Cargo['id']) => {
    setDirection((prevState) => ({
      ...prevState,
      processedCargo: processedCargo.filter((cargo) => cargo.id !== id),
    }));
  };

  return (
    <>
      {processedCargo.length > 0 && (
        <>
          <span className={styles.CargoTitle}>Cargo:</span>
          {processedCargo.map((cargo) => (
            <div className={styles.DivWithKey} key={cargo.id}>
              <div className={styles.TextWrapper}>
                <Text strong>{cargo.name}</Text>
                <Text type="secondary">{`goods: ${cargo.goods.length}`}</Text>
              </div>
              <Button
                icon={<DeleteOutlined />}
                onClick={() => deleteCargo(cargo.id)}
                className={styles.DeleteButton}
              />
            </div>
          ))}
        </>
      )}

      <Select
        placeholder="Select cargo"
        className={styles.Select}
        onChange={addCargo}
      >
        {cargo.length > 0 &&
          cargo.map((cargo) => (
            <Select.Option key={cargo.id} value={cargo.id}>
              <div className={styles.TextWrapper}>
                <Text>{cargo.name}</Text>
                <Text type="secondary">{`goods: ${cargo.goods.length}`}</Text>
              </div>
            </Select.Option>
          ))}
      </Select>
    </>
  );
};
