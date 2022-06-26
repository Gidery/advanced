import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@ant-design/icons';
import { LogoIcon } from '../../../ui/LogoIcon';

export const Logo = () => {
  return (
    <Link to="/">
      <Icon component={LogoIcon}></Icon>
    </Link>
  );
};
