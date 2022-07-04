import React from 'react';
import { Typography } from 'antd';

export const Home = () => {
  const { Title, Paragraph } = Typography;

  return (
    <>
      <Title level={2}>Welcome to my app</Title>
      <Paragraph>
        In the "Direction" tab, you can create and change cargo directions
      </Paragraph>
      <Paragraph>
        In the "Cargo" tab you can can create and edit cargo
      </Paragraph>
    </>
  );
};
