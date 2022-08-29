import React from 'react';
import { List } from 'antd';
import { Link } from 'react-router-dom';
import { Cargo } from '../../../../redux/redusers/cargoReducer';
import styles from './CargoList.module.scss';

interface CargoListProps {
  cargo: Cargo[];
}

// todo вынести в /components как List

export const CargoList: React.FC<CargoListProps> = ({ cargo }) => {
  return (
    <List
      bordered
      dataSource={cargo}
      renderItem={(cargo) => (
        <List.Item>
          <List.Item.Meta
            title={
              <Link to={`${cargo.id}`} className={styles.Title}>
                {cargo.name}
              </Link>
            }
            description={`goods: ${cargo.goods.length}`}
          />
        </List.Item>
      )}
    />
  );
};
