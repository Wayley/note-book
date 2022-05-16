# WORKFLOW

## 环境
- Node v16.14.2
- Java v1.8.0_202
- Unity 2020.3.27f1
- React Native 0.64.1

## 步骤

### 初始化App

```shell
$ npx react-native init AwesomeTSProject --template react-native-template-typescript@6.6.*
```

> Tips

- 修改默认的8081端口。这样可以解决可能在Windows下运行报`Unable to load scripts...`的错误，同时也能解决`Fash Refresh`的问题；
- 在unity project创建之前，最好更新unity.gitignore到`.gitignore`文件，不然会有unity大量新增变动来不及ignore
- 在`MD Emulator`上可能还要在`android/app/build.gradle`中设置`def enableSeparateBuildPerCPUArchitecture = true`

### 初始化Unity Project并导出Android UnityLibary

1. 在根目录下创建`unity`文件夹存放unity项目
2. 使用unity hub新建/导入unity工程
3. 安装`com.unity.nuget.newtonsoft-json`
4. 设置unity的android settings
    |Key|Value|
    |:---:|:---|
    | Auto Graphics API                 |  √ (for emulator in Windows) |
    | Scripting Backend                 |  IL2CPP |
    | Api Compatibility Level           |  .NET Standard 2.0 |
    | ARM64                             | √ |
    | ARMv7                             | √ |
    | x86(Chrome OS)/x86-64(Chrome OS)  | √ (for emulator in Windows) |
5. 导出unityLibary
    - 安装UnityView: `yarn add @brice-gros/react-native-unity-view`
    - cp -r node_modules/@brice-gros/react-native-unity-view/template/* ./unity/YourProject/
    - Click ReactNative Button to export
6. 设置Android的各种gradle
    - [android/build.gradle](./assets/build.gradle):
        - `flatDir {
            dirs "${project(':unityLibrary').projectDir}/libs"
        }`
        - `ext {
            buildToolsVersion = "30.0.2"
            minSdkVersion = 21
            compileSdkVersion = 30
            targetSdkVersion = 30
            ndkVersion = "19.0.5232133"
        }`
    - [android/gradle.properties](./assets/gradle.properties)
        - `unityStreamingAssets=.unity3d`
    - android/settings.gradle
        - `include ":unityLibrary"`
        - `project(":unityLibrary").projectDir = new File(rootProject.projectDir, './unityLibrary')`
    - android/app/build.gradle
        - `def enableSeparateBuildPerCPUArchitecture = true`

## 可能需要的文件

[.gitignore文件](./assets/.gitignore)
[android/build.gradle文件](./assets/build.gradle)
[android/gradle.properties文件](./assets/gradle.properties)