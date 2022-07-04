import React from 'react';
import { List, Modal, Typography } from 'antd';
import {
  Direction,
  ProcessedCargo,
} from '../../../../../redux/redusers/directionsReducer';

interface AcceptModalProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  cargo?: ProcessedCargo;
  setDirection: React.Dispatch<React.SetStateAction<Direction>>;
}

export const AcceptModal: React.FC<AcceptModalProps> = ({
  visible,
  setVisible,
  cargo,
  setDirection,
}) => {
  const { Text, Title } = Typography;

  const acceptCargo = () => {
    setDirection((prevState) => ({
      ...prevState,
      processedCargo: prevState.processedCargo.map((item) => {
        if (item.id !== cargo?.id) return item;
        return {
          ...item,
          status: 'accepted',
        };
      }),
    }));
    setVisible(false);
  };

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <Modal
      visible={visible}
      title="Cargo acceptance modal"
      onCancel={closeModal}
      onOk={acceptCargo}
    >
      {cargo === undefined && (
        <div>We could not find data about this cargo</div>
      )}

      {cargo !== undefined && (
        <>
          <Title level={4}>{`${cargo.name}: `}</Title>
          <List
            bordered
            dataSource={cargo.goods}
            renderItem={(goods) => (
              <List.Item>
                <Text>{`${goods.name} - ${goods.quantity}`}</Text>
              </List.Item>
            )}
          />
        </>
      )}
    </Modal>
  );
};
