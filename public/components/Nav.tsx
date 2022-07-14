import { AppstoreOutlined, SettingOutlined,DollarCircleOutlined ,RedoOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React, { useState } from 'react';


const items: MenuProps['items'] = [
    {
      label: 'Cryptocurrencies',
      key: 'mail',
      icon: <DollarCircleOutlined />,
    },
    {
      label: 'Exchanges',
      key: 'app',
      icon:<RedoOutlined />,
    },
    {
      label: 'Portfolio',
      key: 'SubMenu',
      icon: <SettingOutlined />,
     
    },

    {
        label: 'Products',
        key: 'products',
        icon: <AppstoreOutlined />,
       
      },
  
  ];


const Nav: React.FC = () => {
     const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <div className="pt-1">
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}  />
    </div>
  )
}

export default Nav