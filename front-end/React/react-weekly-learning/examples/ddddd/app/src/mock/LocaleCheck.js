import { useState, useEffect } from 'react';
import {
  Pagination,
  DatePicker,
  TimePicker,
  Calendar,
  Popconfirm,
  Table,
  Modal,
  Button,
  Select,
  Transfer,
} from 'antd';
import intl from 'react-intl-universal';

import { useLocale } from '../hooks/useLocale';
const { Option } = Select;
const { RangePicker } = DatePicker;
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'filter1',
        value: 'filter1',
      },
      {
        text: 'filter2',
        value: 'filter2',
      },
    ],
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
];

export default function Welcome() {
  const { lang } = useLocale();
  const [visible, setVisible] = useState(false);
  const info = () => {
    Modal.info({
      title: 'some info',
      content: 'some info',
    });
  };
  const confirm = () => {
    Modal.confirm({
      title: 'some info',
      content: 'some info',
    });
  };
  useEffect(() => {
    // do any thing when lcoale changed
    console.log(`lcoale(${lang}) changed`);
  }, [lang]);
  return (
    <div>
      <div>
        <Button>FFF----{intl.get('test')}</Button>
      </div>
      <div>
        <Pagination defaultCurrent={1} total={50} showSizeChanger />
      </div>
      <div>
        <Select showSearch style={{ width: 200 }}>
          <Option value="jack">jack</Option>
          <Option value="lucy">lucy</Option>
        </Select>
        <DatePicker />
        <TimePicker />
        <RangePicker style={{ width: 200 }} />
      </div>
      <div>
        <Button type="primary" onClick={() => setVisible(true)}>
          Show Modal
        </Button>
        <Button onClick={info}>Show info</Button>
        <Button onClick={confirm}>Show confirm</Button>
        <Popconfirm title="Question?">
          <a href="#">Click to confirm</a>
        </Popconfirm>
      </div>
      <div>
        <Transfer
          dataSource={[]}
          showSearch
          targetKeys={[]}
          render={(item) => item.title}
        />
      </div>
      <div>
        <Calendar fullscreen={false} />
      </div>
      <div>
        <Table dataSource={[]} columns={columns} />
      </div>
      <Modal
        title="Locale Modal"
        visible={visible}
        onCancel={() => setVisible(false)}
      >
        <p>Locale Modal</p>
      </Modal>
    </div>
  );
}
