import {
  AppstoreOutlined,
  SettingOutlined,
  DollarCircleOutlined,
  RedoOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import React, { useState } from "react";
import Link from "next/link";

const items: MenuProps["items"] = [
  {
    label: "Tolu Crypto",
    key: "logo",
  },

  {
    label: (
      <Link href="/">
        <a>Cryptocurrencies</a>
      </Link>
    ),
    key: "crypto",
    icon: <DollarCircleOutlined />,
  },

  {
    label: (
      <Link href="/nft">
        <a>NFT</a>
      </Link>
    ),
    key: "nft",
    icon: <RedoOutlined />,
  },

  {
    label: "Portfolio",
    key: "SubMenu",
    icon: <SettingOutlined />,
  },

  {
    label: "Products",
    key: "products",
    icon: <AppstoreOutlined />,
  },
];

const Nav: React.FC = () => {


  return (
    <div className="pt-1">
      <Menu  mode="horizontal" items={items} />
    </div>
  );
};

export default Nav;
