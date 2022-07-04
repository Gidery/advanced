import React from 'react';
import { List, Typography } from 'antd';
import { ProcessedCargo } from '../../../../redux/redusers/directionsReducer';

interface AcceptedCargoProps {
  cargo: ProcessedCargo[];
}

export const AcceptedCargo: React.FC<AcceptedCargoProps> = ({ cargo }) => {
  const { Text } = Typography;

  return (
    <List
      bordered
      dataSource={cargo}
      renderItem={(cargo) => (
        <List.Item>
          <List.Item.Meta
            title={<Text>{cargo.name}</Text>}
            description={
              <Text type="secondary">{`goods: ${cargo.goods.length}`}</Text>
            }
          />
        </List.Item>
      )}
    />
  );
};
