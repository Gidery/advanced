import React from 'react';
import { Button } from 'antd';
import styles from './ButtonsPanel.module.scss';

interface ButtonsPanelProps {
  onSubmit: any;
  clearForm: any;
  submitText: string;
}

export const ButtonsPanel: React.FC<ButtonsPanelProps> = ({
  onSubmit,
  clearForm,
  submitText,
}) => {
  return (
    <>
      <Button className={styles.LeftSide} type="primary" onClick={onSubmit}>
        {submitText}
      </Button>
      <Button className={styles.RightSide} onClick={clearForm}>
        Clear form
      </Button>
    </>
  );
};
