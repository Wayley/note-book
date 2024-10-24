# Vue 原理

## Vue2 vs Vue3

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

## Vue3 参数传递

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
