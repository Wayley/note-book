import React, { useState } from 'react';
import { Form, Button, DatePicker, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { SUPPORT_DASHBOARD_FEATURES } from '../../../config';

const { Option } = Select;
const queryItemWidth = 200;
export default function AnalysisResult() {
  const [list, setList] = useState([]);
  const onFinish = (fieldsValue) => {
    let { date, feature } = {
      ...fieldsValue,
      date: fieldsValue['date'] ? fieldsValue['date'].format('YYYY-MM-DD') : '',
    };
    if (date) {
      // TODO:
      setList((preStates) => [
        ...preStates,
        { date, content: `TODO: ${new Date(date).getTime()}`, feature },
      ]);
    }
  };
  return (
    <div className="dashboard-detail-page">
      <div className="dashboard-title">Dashboard Analysis Result</div>
      <div className="dashboard-query">
        <Form layout="inline" colon={false} onFinish={onFinish}>
          <Form.Item label="Feature" name="feature">
            <Select style={{ width: queryItemWidth }}>
              {SUPPORT_DASHBOARD_FEATURES.map((item) => (
                <Option value={item.value} key={item.value}>
                  {item.label}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Date" name="date">
            <DatePicker style={{ width: queryItemWidth }} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" icon={<PlusOutlined />} />
          </Form.Item>
          <Form.Item>
            <Button type="primary">Compare</Button>
          </Form.Item>
        </Form>
      </div>
      <div className="dashboard-main">
        {list.map((item) => {
          const { date, content, feature } = item;
          return (
            <div className="dashboard-item" key={date}>
              <h1 className="compare-date">Date: {date}</h1>
              <h1 className="compare-date">Feature: {feature}</h1>
              <div className="compare-content">{content}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
