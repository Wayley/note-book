import { useLocation, useHistory } from 'react-router-dom';
import { Menu } from 'antd';
import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

import { cookieConfig } from '../../config';
import { cookie } from '../../utils/cookie';
const { accountKeyName } = cookieConfig;
const { SubMenu } = Menu;
const iconStyle = { fontSize: 18 };
export default function HeaderMenu() {
  const location = useLocation();
  const history = useHistory();
  return (
    <Menu
      onClick={(e) => {
        history.push(e.key);
      }}
      selectedKeys={[location.pathname]}
      mode="horizontal"
    >
      <SubMenu
        key="/dashboard"
        icon={<AppstoreOutlined style={iconStyle} />}
        title="Dashboard"
      >
        <Menu.Item key="/dashboard/overview">Dashboard Overview</Menu.Item>
        <Menu.Item key="/dashboard/analysis-result">
          Data Analysis Result
        </Menu.Item>
        <Menu.Item key="/dashboard/collecting-status-total">
          Data Collecting Status Total
        </Menu.Item>
        <Menu.Item key="/dashboard/fail-analysis">Data Fail Analysis</Menu.Item>
      </SubMenu>
      {cookie.get(accountKeyName) === 'admin' && (
        <SubMenu
          key="/system"
          icon={<SettingOutlined style={iconStyle} />}
          title="System Management"
        >
          <Menu.ItemGroup title="Acount Management">
            <Menu.Item key="/system/account/add" disabled>
              Add Acount
            </Menu.Item>
            <Menu.Item key="/system/account/list" disabled>
              Acount List
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Role Management">
            <Menu.Item key="/system/role/add" disabled>
              Add Role
            </Menu.Item>
            <Menu.Item key="/system/role/list" disabled>
              Role List
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Authority Management">
            <Menu.Item key="/system/authority/add" disabled>
              Add Authority
            </Menu.Item>
            <Menu.Item key="/system/authority/list" disabled>
              Authority List
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      )}
    </Menu>
  );
}
