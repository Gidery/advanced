import React from 'react';
import { List } from 'antd';
import { Link } from 'react-router-dom';
import { Direction } from '../../../../redux/redusers/directionsReducer';
import styles from '../../../Cargo/components/CargoList/CargoList.module.scss'; // TODO вынести в отдельные компоненты повторяющийся код

interface DirectionsListProps {
  directions: Direction[];
}

// todo вынести в /components как List

export const DirectionsList: React.FC<DirectionsListProps> = ({
  directions,
}) => {
  return (
    <List
      bordered
      dataSource={directions}
      renderItem={(direction) => (
        <List.Item>
          <List.Item.Meta
            title={
              <Link to={`${direction.id}`} className={styles.Title}>
                {direction.name}
              </Link>
            }
            description={`cargo: ${direction.processedCargo.length}`}
          />
        </List.Item>
      )}
    />
  );
};
