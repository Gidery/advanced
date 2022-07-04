import React from 'react';
import { Typography } from 'antd';
import { InputName } from '../../../../../components/InputName/InputName';
import { Cargo } from '../../../../../redux/redusers/cargoReducer';
import styles from '../Info.module.scss';

interface InfoProps {
  cargoItem: Cargo;
}

export const Info: React.FC<InfoProps> = ({ cargoItem }) => {
  const { Text } = Typography;

  return (
    <>
      <InputName className={styles.NameTitle} name="Name: ">
        <Text>{cargoItem.name}</Text>
      </InputName>
      <div
        style={{
          display: 'flex',
        }}
      >
        <Text strong className={styles.GoodsTitle}>
          Goods:
        </Text>
        <div className={styles.GoodsWrapper}>
          {cargoItem.goods.length === 0 && (
            <Text mark>Add any goods to the cargo</Text>
          )}
          {cargoItem.goods.length > 0 &&
            cargoItem.goods.map((goods) => (
              <div className={styles.GoodsWrapper__wrapper}>
                <Text className={styles.GoodsName}>{goods.name}</Text>
                <Text code>{goods.quantity}</Text>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
