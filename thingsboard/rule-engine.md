# 规则引擎

ThingsBoard 规则引擎是一个高度可定制的框架用于复杂事件的处理。它是基于事件开发的一个易于使用的工作流的框架。

## Table of Contents

1. [使用场景](#scenes)
2. [组成部分](#composition)
3. [规则引擎消息](#message)
4. [规则节点](#rule_node)
5. [规则链](#rule_chain)
6. [调试](#debug)
7. [导入导出](#import_export)
8. [数据可视化/统计](#dashboard)

## Contents

<a name="scenes" id="scenes">

### 常见场景

- 在保存到数据库之前对接收的遥测数据或属性进行验证和修改。
- 将遥测或属性从设备复制到相关资产以便可以汇总遥测。例如：可以将多个设备中的数据汇总到相关资产中。
- 根据定义的条件对 alarms 进行创建、更新、清除。
- 根据设备生命周期事件触发操作。例如：如果设备处于在线/离线状态，则创建警告。
- 加载所需的其他处理数据。例如：在客户设备或租户属性中定义的设备的 playload 温度阈值。
- 调用外部系统的 REST API。
- 发生复杂事件时发送电子邮件并使用“电子邮件模板”中其他实体的属性。
- 在事件处理期间要考虑用户的偏好。
- 根据定义的条件进行 RPC 调用。
- 集成第三方消息队列例如：Kafka，Spark，AWS 等。

<a name="scenes" id="scenes">

### 组成部分

主要有 3 个组成部分

- Message - 事件接收；它可以来自设备、设备生命周期事件、REST API 事件、RPC 请求等传入的数据。
- Rule Node - 消息处理;对接收的数据进行过滤、转换或者执行。
- Rule Chain - 关联消息；接收上一节点的出站消息将其发送至下一个节点。

<a name="message" id="message">

### 规则引擎消息

> 规则引擎消息可以被被序列化并有着规定的数据结构同时可以表示系统中的各种消息

如:

- 设备遥测、属性更新或 RPC 调用;
- 实体生命周期事件: created、updated、deleted、assigned、unassigned、属性更新;
- 设备状态事件: connected, disconnected, active, inactive, etc;
- 其他事件

规则引擎消息包含以下信息:

- 消息 ID：基于时间的通用唯一标识符;
- 消息发起者：Device，Asset 或其他 Entity 标识符;
- 消息类型：遥测或不活动的事件等;
- 消息负载：消息 payload 的 JSON 字符串;
- 元数据：键值对的列表以及与消息有关的其他数据.

消息类型:

- 预定义消息类型
- 自定义消息类型

<a name="rule_node" id="rule_node">

### 规则节点

- 规则节点

  - 规则节点是规则引擎的基本组件每次处理单个输入消息并生成一个或多个输出消息。
  - 是规则引擎的主要逻辑单元。
  - 可以使用规则引擎的 Filter、Enrichment 和 Transform 节点通过设备和相关资产发出输入消息。
  - 可以使用规则引擎的 Action、Externala 节点触发各种操作与通信以及对外部系统进行通信。

- 规则节点类型

  - Filter: 用于消息过滤和路由;
  - Enrichment: 用于更新传入消息的元数据;
  - Transformation: 用于更改传入的消息字段，例如 Originator, Type, - Payload, Metadata;
  - Action: 根据传入的消息执行各种动作;
  - External: 用于与外部系统进行交互;
  - 其他规则链: 进入下一个规则链处理

- 规则节点关系

  - 规则节点之间存在关联性每个节点都有对应关系类型，用于标识关系的逻辑标签。
  - 当规则节点生成输出消息时，它总是将消息路由到下一个指定的节点并通过关系类型进行关联。
  - 表示成功与否的规则节点关系是 Success 和 Failure。
  - 表示逻辑运算的规则节点可以是 True 或 False。
  - 一些特定的规则节点可能使用完全不同的关系类型例如：“Post Telemetry”、“Attributes Updated”、“Entity Created”等

- 自定义节点
  定制自定义节点主要以服务端代码为主
  - 方法流程
    - init 方法
    - onMsg 方法
    - destory 方法
  - 构建
  - 导入 jar 包到实例
  - UI 配置

<a name="rule_chain" id="rule_chain">

### 规则链

规则链是规则节点及其关系的逻辑组

#### 规则链流程

> 租户管理员可以定义一个根规则链(Root Rule Chain)和多个其他规则链(Other Rule Chains)。规则链处理所有输入的消息，并将其转发到其他规则链以进行其他处理。

<a name="debug" id="debug">

### 调试

<a name="import_export" id="import_export">

### 导入导出

- 导入

  - 所有导入的规则链不是 Root Rule Chains
  - 如果导入的规则链包含对其他规则链的引用（通过“规则链”节点），则在保存规则链之前，你将需要更新这些引用。
  - 保存更改之前应更新通过 Rule Chain 节点对其他规则链的引用

<a name="dashboard" id="dashboard">

### 数据可视化/规则引擎统计
