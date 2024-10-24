# MQTT

## url

> mqtt mqtts tcp tls ws wss wxs

- 浏览器环境-WebSocket

  - ws 8083
  - wss 8084
  - 一般会加上一个 path(/mqtt)

  ```ts
  const url = "ws://broker.emqx.io:8083/mqtt";
  // const url = 'wss://broker.emqx.io:8084/mqtt'
  ```

- NodeJS 环境-TCP

  - mqtt 1883
  - mqtts 8084

  ```ts
  const url = "mqtt://broker.emqx.io:1883";
  // const url = 'mqtts://broker.emqx.io:8084'
  ```

- QoS Quality of Service 服务质量等级(0,1,2)

- retain 是否保留消息
