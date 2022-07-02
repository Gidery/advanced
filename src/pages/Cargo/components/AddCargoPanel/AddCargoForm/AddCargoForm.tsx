import React, { useState } from 'react';
import { Button, Input, InputNumber } from 'antd';
import { InputName } from '../../../../../components/InputName/InputName';
import { Goods } from '../../../../../redux/redusers/cargoReducer';
import { PlusOutlined } from '@ant-design/icons';
import styles from './AddCargoForm.module.scss';

export const AddCargoForm: React.FC = () => {
  const [goods, setGoods] = useState<Goods[]>([
    {
      id: new Date().toISOString(),
      name: '',
      quantity: 0,
    },
  ]);

  const changeGoodsName = (
    id: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setGoods(
      goods.map((item) => {
        if (item.id !== id) return item;
        return {
          ...item,
          name: e.target.value,
        };
      })
    );
  };

  const changeGoodsNumber = (id: string, e?: number) => {
    setGoods(
      goods.map((item) => {
        if (item.id !== id) return item;
        if (e === undefined) return item;
        return {
          ...item,
          quantity: e,
        };
      })
    );
  };

  const addGoods = () => {
    setGoods(
      goods.concat({
        id: new Date().toISOString(),
        name: '',
        quantity: 0,
      })
    );
  };

  return (
    <div className={styles.Wrapper}>
      <InputName name="Name: " className={styles.FullRow}>
        <Input placeholder="Please input cargo name" className={styles.Name} />
      </InputName>

      <span className={styles.GoodsTitle}>Goods: </span>
      <>
        {goods.length > 0 &&
          goods.map((item) => (
            <div key={item.id} className={styles.GoodsWrapper}>
              <Input
                className={styles.GoodsName}
                value={item.name}
                onChange={(e) => changeGoodsName(item.id, e)}
                placeholder="Goods name"
              />
              <InputNumber
                className={styles.GoodsNumber}
                value={item.quantity}
                min={1}
                max={100}
                onChange={(e) => changeGoodsNumber(item.id, e)}
              />
            </div>
          ))}
      </>

      <Button
        onClick={addGoods}
        className={styles.FullRow}
        icon={<PlusOutlined />}
      >
        Add goods
      </Button>

      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </div>
  );
};
