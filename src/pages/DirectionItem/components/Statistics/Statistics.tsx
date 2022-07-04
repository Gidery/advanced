import React from 'react';
import { Typography } from 'antd';
import { ProcessedCargo } from '../../../../redux/redusers/directionsReducer';

interface StatisticsProps {
  cargo: ProcessedCargo[];
}

export const Statistics: React.FC<StatisticsProps> = ({ cargo }) => {
  const { Paragraph } = Typography;

  const acceptedCargo = cargo.filter((cargo) => cargo.status === 'accepted');
  const deliveredCargo = cargo.filter((cargo) => cargo.status === 'delivered');

  return (
    <>
      <Paragraph>{`Total cargo in this direction - ${cargo.length}`}</Paragraph>
      <Paragraph>{`Accepted cargo in this direction - ${acceptedCargo.length}`}</Paragraph>
      <Paragraph>{`Cargo on the way in this direction - ${deliveredCargo.length}`}</Paragraph>
    </>
  );
};
