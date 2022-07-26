import {
  AppstoreOutlined,
  SettingOutlined,
  DollarCircleOutlined,
  RedoOutlined,
  UserOutlined,
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
    label: (
      <a
        href="https://www.linkedin.com/in/tolu-alonge-89ab4517a/"
        target="_blank"
        rel="noopener noreferrer"
      >
        linkedin
      </a>
    ),
    key: "Linkedin",
    icon: <UserOutlined />,
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
      <Menu mode="horizontal" items={items} />
    </div>
  );
};

export default Nav;
