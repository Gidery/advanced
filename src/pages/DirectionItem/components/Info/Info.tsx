import React from 'react';
import { Typography } from 'antd';
import { InputName } from '../../../../components/InputName/InputName';
import { Direction } from '../../../../redux/redusers/directionsReducer';
import styles from './Info.module.scss';

interface InfoProps {
  direction: Direction;
}

export const Info: React.FC<InfoProps> = ({ direction }) => {
  const { Text } = Typography;
  const deliveredCargo = direction.processedCargo.filter(
    (cargo) => cargo.status === 'delivered'
  );

  return (
    <div className={styles.Wrapper}>
      <InputName name="Name: ">
        <Text>{direction.name}</Text>
      </InputName>

      <InputName name="Start: ">
        <Text>{direction.start}</Text>
      </InputName>

      <InputName name="End: ">
        <Text>{direction.end}</Text>
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
              <div key={cargo.id} className={styles.CargoWrapper}>
                <Text strong>{cargo.name}</Text>
                <Text type="secondary">{`goods: ${cargo.goods.length}`}</Text>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
