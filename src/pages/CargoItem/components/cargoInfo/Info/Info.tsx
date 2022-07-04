import React from 'react';
import { Typography } from 'antd';
import { InputName } from '../../../../../components/InputName/InputName';
import { Cargo } from '../../../../../redux/redusers/cargoReducer';
import styles from '../Info.module.scss';

interface InfoProps {
  cargo: Cargo;
}

export const Info: React.FC<InfoProps> = ({ cargo }) => {
  const { Text } = Typography;

  return (
    <>
      <InputName className={styles.NameTitle} name="Name: ">
        <Text>{cargo.name}</Text>
      </InputName>
      <div className={styles.Flex}>
        <Text strong className={styles.GoodsTitle}>
          Goods:
        </Text>

        <div className={styles.GoodsWrapper}>
          {cargo.goods.length === 0 && (
            <Text mark>Add any goods to the cargo</Text>
          )}
          {cargo.goods.length > 0 &&
            cargo.goods.map((goods) => (
              <div key={goods.id} className={styles.GoodsWrapper__wrapper}>
                <Text className={styles.GoodsName}>{goods.name}</Text>
                <Text code>{goods.quantity}</Text>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
