import React from 'react';
import { Button, InputNumber, Typography } from 'antd';
import { InputName } from '../../../../../components/InputName/InputName';
import { Cargo } from '../../../../../redux/redusers/cargoReducer';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import styles from '../Info.module.scss';

interface EditInfoProps {
  cargo: Cargo;
  setCargo: React.Dispatch<React.SetStateAction<Cargo>>;
}

export const EditInfo: React.FC<EditInfoProps> = ({ cargo, setCargo }) => {
  const { Text } = Typography;

  const editCargoName = (value: string) => {
    setCargo((prevState) => ({
      ...prevState,
      name: value,
    }));
  };

  const editGoodsName = (id: string, value: string) => {
    setCargo((prevState) => ({
      ...prevState,
      goods: prevState.goods.map((goods) => {
        if (goods.id !== id) return goods;
        return {
          ...goods,
          name: value,
        };
      }),
    }));
  };

  const editGoodsNumber = (id: string, e: number) => {
    setCargo((prevState) => ({
      ...prevState,
      goods: prevState.goods.map((goods) => {
        if (goods.id !== id) return goods;
        return {
          ...goods,
          quantity: e,
        };
      }),
    }));
  };

  const deleteGoods = (id: string) => {
    setCargo((prevState) => ({
      ...prevState,
      goods: prevState.goods.filter((goods) => goods.id !== id),
    }));
  };

  const addGoods = () => {
    setCargo((prevState) => ({
      ...prevState,
      goods: prevState.goods.concat({
        id: new Date().toISOString(),
        name: 'add name',
        quantity: 0,
      }),
    }));
  };

  return (
    <>
      <InputName className={styles.NameTitle} name="Name: ">
        <Text
          editable={{
            icon: <EditOutlined />,
            onChange: editCargoName,
          }}
        >
          {cargo.name}
        </Text>
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
          {cargo.goods.length === 0 && (
            <Text mark>Add any goods to the cargo</Text>
          )}
          {cargo.goods.length > 0 &&
            cargo.goods.map((goods) => (
              <div key={goods.id} className={styles.GoodsWrapper__wrapper}>
                <Text
                  editable={{
                    icon: <EditOutlined />,
                    onChange: (value) => editGoodsName(goods.id, value),
                  }}
                  className={styles.GoodsName}
                >
                  {goods.name}
                </Text>
                <InputNumber
                  className={styles.GoodsNumber}
                  size="small"
                  value={goods.quantity}
                  min={1}
                  max={100}
                  onChange={(e) => editGoodsNumber(goods.id, e)}
                />
                <Button
                  className={styles.GoodsDelete}
                  size="small"
                  icon={<DeleteOutlined />}
                  onClick={() => deleteGoods(goods.id)}
                />
              </div>
            ))}
          <Button onClick={addGoods} icon={<PlusOutlined />} size="small">
            Add goods
          </Button>
        </div>
      </div>
    </>
  );
};
