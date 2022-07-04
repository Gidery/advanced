import React from 'react';
import { Button, Input, InputNumber } from 'antd';
import { Cargo, Goods } from '../../../../../../redux/redusers/cargoReducer';
import { DeleteOutlined } from '@ant-design/icons';
import styles from './GoodsList.module.scss';

interface GoodsListProps {
  goods: Goods[];
  setCargo: React.Dispatch<React.SetStateAction<Cargo>>;
}

export const GoodsList: React.FC<GoodsListProps> = ({ goods, setCargo }) => {
  const changeGoodsName = (
    id: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCargo((prevState) => ({
      ...prevState,
      goods: goods.map((item) => {
        if (item.id !== id) return item;
        return {
          ...item,
          name: e.target.value,
        };
      }),
    }));
  };

  const changeGoodsNumber = (id: string, e: number) => {
    setCargo((prevState) => ({
      ...prevState,
      goods: goods.map((item) => {
        if (item.id !== id) return item;
        return {
          ...item,
          quantity: e,
        };
      }),
    }));
  };

  const deleteGoods = (id: string) => {
    if (goods.length < 2) return;
    setCargo((prevState) => ({
      ...prevState,
      goods: goods.filter((item) => item.id !== id),
    }));
  };

  return (
    <>
      <span className={styles.GoodsTitle}>Goods: </span>
      <>
        {goods.length > 0 &&
          goods.map((item) => (
            <div key={item.id} className={styles.GoodsWrapper}>
              <Input
                className={styles.GoodsName}
                value={item.name}
                placeholder="Goods name"
                onChange={(e) => changeGoodsName(item.id, e)}
              />
              <InputNumber
                className={styles.GoodsNumber}
                value={item.quantity}
                min={1}
                max={100}
                onChange={(e) => changeGoodsNumber(item.id, e)}
              />
              <Button
                icon={<DeleteOutlined />}
                onClick={() => deleteGoods(item.id)}
              />
            </div>
          ))}
      </>
    </>
  );
};
