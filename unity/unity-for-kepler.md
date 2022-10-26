# Unity + Kepler

1. 启动 Unity Editor

```shell
  pkill unityhub

  MESA_GL_VERSION_OVERRIDE=4.5 MESA_GLSL_VERSION_OVERRIDE=450 ./Unity
```

2. 构建`Embedded Linux`平台应用

   > 可自定义目录,如: `KeplerBuild`目录

3. 启动 Kepler

```shell
  kepler simulator start

  # 如kepler命令未找到，可先执行脚本
  source ~/kepler/kepler-sdk/0.2.216.0/environment-setup-sdk.sh
```

4. 复制 SDL libary 文件
   > 将`Amazon_Kepler/libSDL`目录下的`libSDL2-2.0.so.0`文件拷贝到`/usr/lib/`

```shell
  sudo scp -P 2222 libSDL2-2.0.so.0
  # PWD: Fih123456
```

5. 在项目 kepler 输出目录(`/UnityDemo/KeplerBuild`)执行:

```shell
  # 先安装 patchelf
  sudo apt install patchelf

  #
  patchelf --set-interpreter /lib/ld-linux-x86-64.so.2 KeplerBuild

```

6. 在项目根目录(`/UnityDemo`)执行:

```shell
  sudo scp -P 2222 -r KeplerBuild localhost:/home/root

  kepler simulator shell

  export SDL_VIDEODRIVER=GWSI

  export SDL_DYNAMIC_API=/usr/lib/libSDL2-2.0.so.0

  cd KeplerBuild

  ./KeplerBuild
```
