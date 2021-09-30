import React, { useState } from 'react';
import { Form, Button, DatePicker, Select } from 'antd';

const { Option } = Select;
const queryItemWidth = 200;
const carIds = [];
export default function Dashboard() {
  const onFinish = (fieldsValue) => {
    let values = {
      ...fieldsValue,
      date: fieldsValue['date'] ? fieldsValue['date'].format('YYYY-MM-DD') : '',
    };
    console.log(values);
  };
  return (
    <div className="dashboard-overview">
      <div className="dashboard-title">Dashboard</div>
      <div className="dashboard-query">
        <Form layout="inline" colon={false} onFinish={onFinish}>
          <Form.Item label="Date" name="date">
            <DatePicker style={{ width: queryItemWidth }} />
          </Form.Item>

          <Form.Item label="Car ID" name="car_id">
            <Select style={{ width: queryItemWidth }}>
              {carIds.map((item) => (
                <Option value={item.id}>{item.name}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Search
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="dashboard-main">
        <div className="dashboard-item"></div>
        <div className="dashboard-item"></div>
        <div className="dashboard-item"></div>
        <div className="dashboard-item"></div>
      </div>
    </div>
  );
}
