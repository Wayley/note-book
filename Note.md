## Vue 原理

### Vue2 vs Vue3

- Vue3 重新虚拟 DOM,优化编译模板,高效的组件初始化，性能提升 1.2~2 倍，SSR 速度提高 2~3 倍
- 体积更小 Tree-shaking import/export

- 生命周期

  - setup(beforeCreate & created)

  - onBeforeMount(beforeMount)

  - onMounted(mounted)

  - onBeforeUpdate(beforeUpdate)

  - onUpdated(updated)

  - onBeforeUnmount(beforeDestory)

  - onUnmounted(destoryed)

- Composition API

  - Options API 逻辑散乱到不同位置(data/props/emits/computed/watch...)

  - Composition API 逻辑高内聚、可复用

- Setup

  - 没有 this
  - beforeCreate 之前执行

- 支持多个根节点

- 响应式原理

  - Object.defineProperty

    直接在一个对象上定义新的属性或修改现有的属性，并返回对象。

    ```ts
    const data = {
      showModal: false,
      title: "Title",

      _showModal: false,
      _title: "Title",
    };

    Object.defineProperty(data, "title", {
      get() {
        console.log(`Title getter called.`, this._title);
        return this._title;
      },
      set(value) {
        console.log(`Title setter called with new value: ${value}`);
        this._title = value;
      },
      configurable: true,
      enumerable: true,
    });

    // getter
    const title = data.title;

    // setter
    data.title = "New Title";
    ```

  - Proxy

    > ES6 Proxy 提供了强大灵活的拦截器机制。允许自定义代理对象和拦截对该对象的各种操作,包括：属性读取、属性设置、函数调用等

    ```ts
    const data = {
      showModal: false,
      title: "Title",
    };
    const _data = new Proxy(data, {
      get(target, key, receiver) {
        console.log(`Proxy getter called.`);
        return target[key];
      },
      set(target, key, value, receiver) {
        console.log(`Proxy setter called.`);
        target[key] = value;
      },
    });
    // getter
    const title = _data.title;

    // setter
    _data.title = "new Title";
    console.log(_data.title);
    ```

- 虚拟 DOM

  - diff 算法优化
    - Vue2 中虚拟 dom 是全量比较。
    - 在 vue3 中，增加了静态标记 PatchFlag。在创建 vnode 的时候，会根据 vnode 的内容是否可以变化，为其添加静态标记 PatchFlag。diff 的时候，只会比较有 PatchFlag 的节点。PatchFlag 是有类型的，比如一个可变化文本节点，会将其添加 PatchFlag 枚举值为 TEXT 的静态标记。这样在 diff 的时候，只需比对文本内容。需要比对的内容更少了。PatchFlag 还有动态 class、动态 style、动态属性、动态 key 属性等枚举值。
  - render 阶段(生成虚拟 dom 树阶段)的静态提审
    - 在 vue2 中，一旦检查到数据变化，就会 re-render 组件，所有的 vnode 都会重新创建一遍，形成新的 vdom 树。
    - 在 vue3 中，对于不参与更新的 vnode，会做静态提升，只会被创建一次，在 re-render 时直接复用。
    - 静态提升可以理解为第一次 render 不参与更新的 vnode 节点的时候，保存它们的引用。re-render 新 vdom 树时，直接拿它们的引用过来即可，无需重新创建。
  - 减少创建组件实例的开销
    - vue2.x 每创建一个实例，在 this 上要暴露 data、props、computed 这些，都是靠 Object.defineProperty 去定义的。这部分操作还是挺费时的。
    - vue3.0 中基于 Proxy，减少了创建组件实例的性能开销

- 更好的 TS 支持

- 自定义渲染 API-createRenderer

  > 创建一个自定义渲染器。通过提供平台特定的节点创建以及更改 API，你可以在非 DOM 环境中也享受到 Vue 核心运行时的特性

- Fragment 节点，支持多根节点

- Vite

  - 原理：浏览器支持 import 关键字
  - 实时请求 实时编译

### Vue3 参数传递

- Props

- v-model

- Emits

- Event-Bus

- $attrs

- $refs

- provide-inject

- Router(query/params/state)

- uex/Pinia

- storage(localeStorage/sessionStorage)

## Nginx

- 启动 nginx

  ```bash
  $ ./nginx
  ```

- 启动 nginx(带配置文件)

  ```bash
  $ ./nginx -c nginx.conf
  ```

- 查看 nginx 进程

  ```bash
  $ ps -ef | grep nginx
  ```

  or

  ```bash
  $ cat nginx.pid
  ```

- 重新载入配置文件

  ```bash
  $ ./nginx -s reload
  ```

- 重启 nginx

  ```bash
  $ ./nginx -s reopen
  ```

- 停止 nginx

  ```bash
  $ ./nginx -s stop
  ```

## MQTT

### url

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

## 设计模式

- 单一职责/功能,模块化
- 开发封闭 拓展开发
- 可继承
- 接口独立
- 依赖倒置(只关注接口,不关注具体实现)

### 工厂模式-Factory

- jQuery

  ```ts
  class jQuery {
    constructor(selector: string | Node) {}
  }
  window.$ = function (selector: string | Node) {
    return new jQuery(selector);
  };
  ```

- React.createElement

  ```ts
  class VNode {}
  React.createElement = function () {
    return new VNode();
  };
  ```

- Example

  ```ts
  enum Role {
    SuperAdmin,
    Admin,
    InternalUser,
    Tester,
    User,
    Tourist,
  }
  type Route = {
    path: string;
    name: string;
    component: string; // RawRouteComponent
  };
  class UserRoute {
    constructor(public name: string, public routes: Route[]) {}
  }

  class UserRouteFactory {
    constructor(private role: Role) {}

    get userRoute(): UserRoute {
      if (this.role == Role.SuperAdmin) {
        return new UserRoute("SuperAdmin", [
          { path: "/login", name: "login", component: "Login" },
          { path: "/home", name: "home", component: "Home" },
          { path: "/a", name: "a", component: "A" },
          { path: "/b", name: "b", component: "B" },
          { path: "/*", name: "404", component: "NotFound" },
        ]);
      }
      // ...
      return new UserRoute("Tourist", [
        { path: "/login", name: "login", component: "Login" },
        { path: "/*", name: "403", component: "Forbidden" },
      ]);
    }
  }

  class Test {
    test() {
      const userRole = Role.SuperAdmin;
      const userRoute = new UserRouteFactory(userRole);
      console.log(userRoute.userRoute);
    }
  }
  ```

### 单例模式-Singleton

```ts
class Singleton {
  private static instance: Singleton | null = null;
  constructor() {}
  static getInstance(): Singleton {
    // 线程安全 lock等
    if (this.instance == null) this.instance = new Singleton();
    return this.instance;
  }
}
```

- BluetoothManager

  ```ts
  class BluetoothAdapter {
    static openBluetoothAdapter() {}
    static createBleConnection() {}
    static onBluetoothAdapterStateChange(callback: (v: any) => void) {}

    // 多次调用会出现异常重复
    static onBLECharacteristicValueChange(callback: (v: any) => void) {}
  }

  type BleCharacteristicValueChangedResponse = {
    deviceId: string;
    serviceId: string;
    characteristicId: string;
    value: ArrayBuffer;
  };
  type Callback = (res: BleCharacteristicValueChangedResponse) => void;

  class Register<T> {
    private _registers: T[];
    constructor() {
      this._registers = [];
    }
    get registers(): T[] {
      return this._registers;
    }
    registe(t: T) {
      const i = this._registers.findIndex((o) => o == t);
      if (i <= -1) {
        this._registers.push(t);
      }
    }
    unregiste(t: T) {
      const i = this._registers.findIndex((o) => o == t);
      if (i > -1) {
        this._registers.splice(i, 1);
      }
    }
  }

  class BluetoothManager {
    private static instance: BluetoothManager | null = null;
    private subscriber: Register<Callback>;

    constructor() {
      this.addListeners(); // APP全局只调用一次
      this.subscriber = new Register();
    }

    static getInstance(): BluetoothManager {
      if (this.instance == null) this.instance = new BluetoothManager();
      return this.instance;
    }

    /**
     * 订阅数据变化,返回取消订阅函数
     * @param callback 回调函数
     * @returns unsubscribe 取消订阅函数
     */
    subscribe(callback: Callback): Function {
      this.subscriber.registe(callback);
      const unsubscribe = () => this.subscriber.unregiste(callback);
      return unsubscribe;
    }

    private addListeners() {
      BluetoothAdapter.onBLECharacteristicValueChange((v) => {
        // some logic
        this.subscriber.registers.map((callback) => callback?.(v));
        // 优化: 发布-订阅模式
      });
    }
  }

  import { runWithLimitedTimes } from "wing-async-retry";

  class BluetoothDevice {
    constructor(private deviceId: string) {}
    private writeOnce(value: string[]): Promise<boolean> {
      return new Promise((resolve, reject) => {
        const n = Math.random();
        if (n > 0.99) return reject("特征值不支持");
        setTimeout(() => resolve(true), n * 1000);
      });
    }
    private write(values: string[], offset: number): Promise<boolean> {
      return new Promise(async (resolve, reject) => {
        const n = Math.ceil(values.length / offset);
        for (let i = 0; i < n; i++) {
          const value = values.slice(offset * i, offset * (i + 1));
          try {
            const r = await runWithLimitedTimes<boolean, string>(
              () => this.writeOnce(value),
              1, // 重试次数
              50, // 重试次数
              { withCatch: true, debug: true }
            );
            console.log(i, r);
          } catch (error) {
            console.error(i, error);
            return reject(error);
          }
        }
        resolve(true);
      });
    }
    protected getData<T>(
      values: string[],
      offset = 20,
      timeout = 1500
    ): Promise<T> {
      return new Promise(async (resolve, reject) => {
        if (!values) reject("Error: values is required");
        // ....
        let timer: number;
        let responsed = false;
        const unsubscribe = BluetoothManager.getInstance().subscribe((v) => {
          // deviceId/serviceId/characteristicId/...  校验
          // 帧头/帧尾/CRC/... 校验
          // 组包
          // ....

          const pkg = ["ff", "aa", "03"];

          responsed = true;
          clearTimeout(timer);
          unsubscribe();
          resolve(pkg as T);
        });
        try {
          const writesSucceed = await this.write(values, offset); // retry?
          if (writesSucceed) {
            timer = setTimeout(() => {
              if (!responsed) {
                unsubscribe();
                reject("Timeout");
              }
            }, timeout);
          }
        } catch (error) {
          unsubscribe?.();
          reject(error);
        }
      });
    }
  }

  class Device extends BluetoothDevice {
    constructor(deviceId: string) {
      super(deviceId);
    }
    getHostData() {
      const values = [...Array(32)].map((_, i) => i.toString(16));
      return this.getData<string[]>(values);
    }
  }

  class Test {
    static async test() {
      try {
        const device = new Device("AA:C2:37:00:05:A9");
        const res = device.getHostData();
        console.log(res);
      } catch (error) {}
    }
  }
  ```

- WiFiManager

- Vuex

- Vue-Router

### 装饰器模式-Decorator

> 为对象/类添加新功能,不改变原有结果和功能

```ts
class Device {
  constructor(readonly deviceId: string) {}

  @log
  connect() {
    console.log("connectting...");
  }
}

function log(originalMethod: any, context: ClassMethodDecoratorContext) {
  const methodName = String(context.name);

  function replacementMethod(this: any, ...args: any[]) {
    console.log(`LOG: Entering method '${methodName}'.`);
    const result = originalMethod.call(this, ...args);
    console.log(`LOG: Exiting method '${methodName}'.`);
    return result;
  }

  return replacementMethod;
}
```

### 代理模式-Proxy

```ts
var obj = new Proxy(
  {},
  {
    get: function (target, propKey, receiver) {
      console.log(`getting ${String(propKey)}!`);
      return Reflect.get(target, propKey, receiver);
    },
    set: function (target, propKey, value, receiver) {
      console.log(`setting ${String(propKey)}!`);
      return Reflect.set(target, propKey, value, receiver);
    },
  }
);
```

### 观察者模式-Observer

- MQTT

  ```ts
  class Subject {
    state: string | null = null;
    observers: Observer[] = [];
    constructor() {}

    register(observer: Observer) {
      this.observers.push(observer);
    }

    publish(state: string) {
      this.state = state;
      this.observers.forEach((observer) => observer.update());
    }
  }

  class Observer {
    constructor(private id: string, private subject: Subject) {
      this.subject.register(this);
    }
    update() {
      console.log(`${this.id} updated. And state is ${this.subject.state}`);
    }
  }

  class Test {
    static test() {
      const subject = new Subject();

      const bmsObserver = new Observer("bms", subject);
      const mesObserver = new Observer("mes", subject);

      subject.publish("first");
    }
  }
  ```

- EventEmitter

### 控制反转-IoC

- 依赖注入-DI

  ```ts
  interface AfterSaleManager {
    repair(): void;
  }
  interface RateManager {
    star(star: number): void;
  }
  interface ShareManager {
    shareTo(platform: number): void;
  }

  class AfterSaleManagerImpl implements AfterSaleManager {
    repair(): void {}
  }
  class RateManagerImpl implements RateManager {
    star(star: number): void {}
  }
  class ShareManagerImpl implements ShareManager {
    shareTo(platform: number): void {
      console.log(`Sharing to ${platform}`);
    }
  }

  function Inject(modules: any[]) {
    return function (target: any) {
      modules.forEach((module) => {
        target.prototype[module.name] = new module();
      });
    };
  }

  @Inject([AfterSaleManagerImpl, RateManagerImpl, ShareManagerImpl])
  class Order {
    constructor() {}
  }

  class Test {
    static test() {
      const order = new Order();
      order.ShareManagerImpl.shareTo(1);
    }
  }
  Test.test();
  ```

- 依赖查找-DL

## 面向对象

### 设计原则

> 设计目标：开闭原则、里氏代换、迪米特法则

> 设计方法：单一职责、接口隔离、依赖倒置、组合/聚合复用原则

- 开闭原则 OCP

  - 对扩展(接口实现)开放

  - 对修改(接口)关闭

- 里氏替换原则 LSP

  > 所有引用基类的地方必须能透明的使用其派生类的对象

  - 不应该在代码中出现 if else 之类对派生类类型进行判断的代码

  - 派生类应当可以替换基类并出现在基类能够出现的任何地方

  - 子类可以扩展父类功能，但不能改变父类原有功能

- 迪米特原则 LoD

  > 最少知道原则

- 单一职责原则

  > 只让一个类/接口/方法有且仅有一个职责

- 接口分隔原则 ISP

- 依赖导致原则 DIP

  - 高层模块不应该依赖低层模块，二者都应该依赖于抽象

  - 抽象不应该依赖于细节，细节应该依赖于抽象

  - 针对接口编程，不用针对实现编程

- 组合/聚合复用原则 CARP

  > 尽可能使用组合/聚合，而不是类继承
