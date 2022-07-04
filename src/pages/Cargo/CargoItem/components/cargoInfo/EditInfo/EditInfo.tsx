import React from 'react';
import { Button, InputNumber, Typography } from 'antd';
import { InputName } from '../../../../../../components/InputName/InputName';
import { Cargo } from '../../../../../../redux/redusers/cargoReducer';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import styles from '../Info.module.scss';

interface EditInfoProps {
  cargoItem: Cargo;
  setCargoItem: React.Dispatch<React.SetStateAction<Cargo>>;
}

export const EditInfo: React.FC<EditInfoProps> = ({
  cargoItem,
  setCargoItem,
}) => {
  const { Text } = Typography;

  const editCargoName = (value: string) => {
    setCargoItem((prevState) => ({
      ...prevState,
      name: value,
    }));
  };

  const editGoodsName = (id: string, value: string) => {
    setCargoItem((prevState) => ({
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
    setCargoItem((prevState) => ({
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
    setCargoItem((prevState) => ({
      ...prevState,
      goods: prevState.goods.filter((goods) => goods.id !== id),
    }));
  };

  const addGoods = () => {
    setCargoItem((prevState) => ({
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
          {cargoItem.name}
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
          {cargoItem.goods.length === 0 && (
            <Text mark>Add any goods to the cargo</Text>
          )}
          {cargoItem.goods.length > 0 &&
            cargoItem.goods.map((goods) => (
              <div className={styles.GoodsWrapper__wrapper}>
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
