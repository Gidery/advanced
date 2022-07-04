import React, { useState } from 'react';
import { Button, Select, Typography } from 'antd';
import { InputName } from '../../../../components/InputName/InputName';
import { AcceptModal } from './AcceptModal/AcceptModal';
import {
  Direction,
  ProcessedCargo,
} from '../../../../redux/redusers/directionsReducer';
import { useAppSelector } from '../../../../redux/hooks/basicHooks';
import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { Cargo } from '../../../../redux/redusers/cargoReducer';
import styles from './EditInfo.module.scss';

interface EditInfoProps {
  direction: Direction;
  setDirection: React.Dispatch<React.SetStateAction<Direction>>;
}

export const EditInfo: React.FC<EditInfoProps> = ({
  direction,
  setDirection,
}) => {
  const { Text } = Typography;
  const cargo = useAppSelector((state) => state.cargo);
  const deliveredCargo = direction.processedCargo.filter(
    (cargo) => cargo.status === 'delivered'
  );
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const [selectedCargo, setSelectedCargo] = useState<ProcessedCargo>();

  const editName = (value: string) => {
    setDirection((prevState) => ({
      ...prevState,
      name: value,
    }));
  };

  const editPoint = (point: 'start' | 'end', value: string) => {
    setDirection((prevState) => ({
      ...prevState,
      [point]: value,
    }));
  };

  const deleteCargo = (id: string) => {
    setDirection((prevState) => ({
      ...prevState,
      processedCargo: direction.processedCargo.filter(
        (cargo) => cargo.id !== id
      ),
    }));
  };

  const showAcceptModel = (cargo: ProcessedCargo) => {
    setSelectedCargo(cargo);
    setVisibleModal(true);
  };

  const addCargo = (id: Cargo['id']) => {
    const newCargo = cargo.find((cargo) => cargo.id === id);
    if (newCargo === undefined) return;
    setDirection((prevState) => ({
      ...prevState,
      processedCargo: direction.processedCargo.concat({
        id: new Date().toISOString(),
        name: newCargo.name,
        status: 'delivered',
        goods: newCargo.goods,
      }),
    }));
  };

  return (
    <div className={styles.Wrapper}>
      <AcceptModal
        visible={visibleModal}
        setVisible={setVisibleModal}
        cargo={selectedCargo}
        setDirection={setDirection}
      />

      <InputName name="Name: ">
        <Text
          editable={{
            icon: <EditOutlined />,
            onChange: editName,
          }}
        >
          {direction.name}
        </Text>
      </InputName>

      <InputName name="Start: ">
        <Text
          editable={{
            icon: <EditOutlined />,
            onChange: (value) => editPoint('start', value),
          }}
        >
          {direction.start}
        </Text>
      </InputName>

      <InputName name="End: ">
        <Text
          editable={{
            icon: <EditOutlined />,
            onChange: (value) => editPoint('end', value),
          }}
        >
          {direction.end}
        </Text>
      </InputName>

      <div className={styles.Flex}>
        <Text strong className={styles.CargoTitle}>
          Cargo:
        </Text>

        <div className={styles.CargoWrapper__wrapper}>
          {deliveredCargo.length === 0 && (
            <Text mark>There are no delivered goods in this direction</Text>
          )}

          {deliveredCargo.length > 0 &&
            deliveredCargo.map((cargo) => (
              <div key={cargo.id} className={styles.Flex}>
                <div className={styles.CargoWrapper}>
                  <Text strong>{cargo.name}</Text>
                  <Text type="secondary">{`goods: ${cargo.goods.length}`}</Text>
                </div>
                <Button
                  className={styles.Button}
                  onClick={() => deleteCargo(cargo.id)}
                  icon={<DeleteOutlined />}
                />
                <Button
                  type="primary"
                  className={styles.Button}
                  onClick={() => showAcceptModel(cargo)}
                  icon={<SearchOutlined />}
                />
              </div>
            ))}
        </div>
      </div>

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
    </div>
  );
};
