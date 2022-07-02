import React, { PropsWithChildren } from 'react';
import { Typography } from 'antd';
import styles from './InputName.module.scss';

interface InputNameProps {
  name: string;
  className?: string;
}

export const InputName: React.FC<PropsWithChildren<InputNameProps>> = ({
  name,
  className,
  children,
}) => {
  const { Text } = Typography;
  return (
    <div className={`${styles.Wrapper} ${className ?? ''}`}>
      <Text strong className={styles.Name}>
        {name}
      </Text>
      {children}
    </div>
  );
};
