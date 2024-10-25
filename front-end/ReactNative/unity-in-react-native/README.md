# Unity + React Native

## Get Started

**1. Init RN App**

```shell
$ npx react-native init ReactNativeUnityTSProject --template react-native-template-typescript --version x.xx.x
```

**2. Install UnityView Plugin**

```shell
$ yarn add @brice-gros/react-native-unity-view
```

**3. Create Unity Project**

- Create unity folder as `unity`
- Create your unity projectby `unity hub` on `unity` folder

```
 │───android
 │───ios
 │───unity
 │    │_____<Your Unity Projrct>       // E.g: Cube
 │
 │───node_modules
 │───README.md
```

**4. Add Unity Package**

- `Window` > `Package Manager`
- `Add package from git URL`, and enter `com.unity.nuget.newtonsoft-json`

**5. Set Unity Player Settings**

`File` => `Build Settings` => `Android Platform` => `Player Settings` => `Other Settings`

- under `Rendering`, `Auto Graphics API` is checked<sup>[1]</sup>.
- `Scripting Backend` is set to `IL2CPP`
- `Api Compatibility Level` is `.NET Standard 2.0`
- under `Target Architectures`, `ARM64` 、 `ARMv7` and `x86(Chrome OS)`/`x86-64(Chrome OS)`<sup>[1],[2]</sup> are checked

<sup>1</sup> Additional setting for emultor in Windows.
<sup>2</sup> At least one is checked.

<image src="./assets/unity_building_config.jpg"/>

**6. Export Android to create UnityLibrary**

- cp -r node_modules/@brice-gros/react-native-unity-view/template/\* ./unity/YourProject/
- Export Android to create UnityLibrary

<image src="./assets/export_android_to_create_unity_libary.jpg"/>

**7. Add Native Build Configure**

<details>
<summary>android/build.gradle</summary>
<image src="./assets/androidbuild.gradle_flatDir.jpg"/>
<image src="./assets/androidbuild.gradle_ndkVersion.jpg"/>

```groovy
import org.apache.tools.ant.taskdefs.condition.Os

// Top-level build file where you can add configuration options common to all sub-projects/modules.

buildscript {
    ext {
        buildToolsVersion = "31.0.0"
        minSdkVersion = 21
        compileSdkVersion = 31
        targetSdkVersion = 31

        // According to the recommendation of unity-view, the specified NDK version is 21.4.7075529
        ndkVersion = "21.4.7075529"

        // if (System.properties['os.arch'] == "aarch64") {
        //     // For M1 Users we need to use the NDK 24 which added support for aarch64
        //     ndkVersion = "24.0.8215888"
        // } else if (Os.isFamily(Os.FAMILY_WINDOWS)) {
        //     // For Android Users, we need to use NDK 23, otherwise the build will
        //     // fail due to paths longer than the OS limit
        //     ndkVersion = "23.1.7779620"
        // } else {
        //     // Otherwise we default to the side-by-side NDK version from AGP.
        //     ndkVersion = "21.4.7075529"
        // }
    }
    repositories {
        google()
        mavenCentral()
    }
    dependencies {
        classpath("com.android.tools.build:gradle:7.0.4")
        classpath("com.facebook.react:react-native-gradle-plugin")
        classpath("de.undercouch:gradle-download-task:4.1.2")
        // NOTE: Do not place your application dependencies here; they belong
        // in the individual module build.gradle files
    }
}

allprojects {
    repositories {
        maven {
            // All of React Native (JS, Obj-C sources, Android binaries) is installed from npm
            url("$rootDir/../node_modules/react-native/android")
        }
        maven {
            // Android JSC is installed from npm
            url("$rootDir/../node_modules/jsc-android/dist")
        }
        mavenCentral {
            // We don't want to fetch react-native from Maven Central as there are
            // older versions over there.
            content {
                excludeGroup "com.facebook.react"
            }
        }
        google()
        maven { url 'https://www.jitpack.io' }
        flatDir {
            dirs "${project(':unityLibrary').projectDir}/libs"
        }
    }
}

```

</details>

<details>
<summary>android/settings.gradle</summary>
<image src="./assets/androidsettings.gradle.jpg"/>

```groovy
rootProject.name = 'AssistedDrivingPage'
apply from: file("../node_modules/@react-native-community/cli-platform-android/native_modules.gradle"); applyNativeModulesSettingsGradle(settings)
include ':app'
includeBuild('../node_modules/react-native-gradle-plugin')
include ":unityLibrary"
project(":unityLibrary").projectDir = new File(rootProject.projectDir, './unityLibrary')

if (settings.hasProperty("newArchEnabled") && settings.newArchEnabled == "true") {
    include(":ReactAndroid")
    project(":ReactAndroid").projectDir = file('../node_modules/react-native/ReactAndroid')
}

```

</details>

<details>
<summary>android/gradle.properties</summary>
<image src="./assets/androidgradle.properties.jpg"/>

```groovy
# Project-wide Gradle settings.

# IDE (e.g. Android Studio) users:
# Gradle settings configured through the IDE *will override*
# any settings specified in this file.

# For more details on how to configure your build environment visit
# http://www.gradle.org/docs/current/userguide/build_environment.html

# Specifies the JVM arguments used for the daemon process.
# The setting is particularly useful for tweaking memory settings.
# Default value: -Xmx512m -XX:MaxMetaspaceSize=256m
org.gradle.jvmargs=-Xmx2048m -XX:MaxMetaspaceSize=512m

# When configured, Gradle will run in incubating parallel mode.
# This option should only be used with decoupled projects. More details, visit
# http://www.gradle.org/docs/current/userguide/multi_project_builds.html#sec:decoupled_projects
# org.gradle.parallel=true

# AndroidX package structure to make it clearer which packages are bundled with the
# Android operating system, and which are packaged with your app's APK
# https://developer.android.com/topic/libraries/support-library/androidx-rn
android.useAndroidX=true
# Automatically convert third-party libraries to use AndroidX
android.enableJetifier=true

# Version of flipper SDK to use with React Native
FLIPPER_VERSION=0.125.0

# Use this property to specify which architecture you want to build.
# You can also override it from the CLI using
# ./gradlew <task> -PreactNativeArchitectures=x86_64
reactNativeArchitectures=armeabi-v7a,arm64-v8a,x86,x86_64

# Use this property to enable support to the new architecture.
# This will allow you to use TurboModules and the Fabric render in
# your application. You should enable this flag either if you want
# to write custom TurboModules/Fabric components OR use libraries that
# are providing them.
newArchEnabled=false
unityStreamingAssets=.unity3d

```

</details>

<details>
<summary>android/local.properties</summary>
<image src="./assets/local.properties.jpg"/>

```groovy
sdk.dir=C\:\\Users\\F2848300\\AppData\\Local\\Android\\Sdk
ndk.dir=C\:\\Users\\F2848300\\AppData\\Local\\Android\\Sdk\\ndk\\21.4.7075529

unityStreamingAssets=.unity3d

```

</details>

<details>
<summary>android/app/build.gradle</summary>
<image src="./assets/RN_unable_to_load_script_bug_fix.jpg"/>
<image src="./assets/emultor_bug_fix_1.jpg"/>
<image src="./assets/emultor_bug_fix_2.jpg"/>

```groovy
apply plugin: "com.android.application"

import com.android.build.OutputFile
import org.apache.tools.ant.taskdefs.condition.Os

/**
 * The react.gradle file registers a task for each build variant (e.g. bundleDebugJsAndAssets
 * and bundleReleaseJsAndAssets).
 * These basically call `react-native bundle` with the correct arguments during the Android build
 * cycle. By default, bundleDebugJsAndAssets is skipped, as in debug/dev mode we prefer to load the
 * bundle directly from the development server. Below you can see all the possible configurations
 * and their defaults. If you decide to add a configuration block, make sure to add it before the
 * `apply from: "../../node_modules/react-native/react.gradle"` line.
 *
 * project.ext.react = [
 *   // the name of the generated asset file containing your JS bundle
 *   bundleAssetName: "index.android.bundle",
 *
 *   // the entry file for bundle generation. If none specified and
 *   // "index.android.js" exists, it will be used. Otherwise "index.js" is
 *   // default. Can be overridden with ENTRY_FILE environment variable.
 *   entryFile: "index.android.js",
 *
 *   // https://reactnative.dev/docs/performance#enable-the-ram-format
 *   bundleCommand: "ram-bundle",
 *
 *   // whether to bundle JS and assets in debug mode
 *   bundleInDebug: false,
 *
 *   // whether to bundle JS and assets in release mode
 *   bundleInRelease: true,
 *
 *   // whether to bundle JS and assets in another build variant (if configured).
 *   // See http://tools.android.com/tech-docs/new-build-system/user-guide#TOC-Build-Variants
 *   // The configuration property can be in the following formats
 *   //         'bundleIn${productFlavor}${buildType}'
 *   //         'bundleIn${buildType}'
 *   // bundleInFreeDebug: true,
 *   // bundleInPaidRelease: true,
 *   // bundleInBeta: true,
 *
 *   // whether to disable dev mode in custom build variants (by default only disabled in release)
 *   // for example: to disable dev mode in the staging build type (if configured)
 *   devDisabledInStaging: true,
 *   // The configuration property can be in the following formats
 *   //         'devDisabledIn${productFlavor}${buildType}'
 *   //         'devDisabledIn${buildType}'
 *
 *   // the root of your project, i.e. where "package.json" lives
 *   root: "../../",
 *
 *   // where to put the JS bundle asset in debug mode
 *   jsBundleDirDebug: "$buildDir/intermediates/assets/debug",
 *
 *   // where to put the JS bundle asset in release mode
 *   jsBundleDirRelease: "$buildDir/intermediates/assets/release",
 *
 *   // where to put drawable resources / React Native assets, e.g. the ones you use via
 *   // require('./image.png')), in debug mode
 *   resourcesDirDebug: "$buildDir/intermediates/res/merged/debug",
 *
 *   // where to put drawable resources / React Native assets, e.g. the ones you use via
 *   // require('./image.png')), in release mode
 *   resourcesDirRelease: "$buildDir/intermediates/res/merged/release",
 *
 *   // by default the gradle tasks are skipped if none of the JS files or assets change; this means
 *   // that we don't look at files in android/ or ios/ to determine whether the tasks are up to
 *   // date; if you have any other folders that you want to ignore for performance reasons (gradle
 *   // indexes the entire tree), add them here. Alternatively, if you have JS files in android/
 *   // for example, you might want to remove it from here.
 *   inputExcludes: ["android/**", "ios/**"],
 *
 *   // override which node gets called and with what additional arguments
 *   nodeExecutableAndArgs: ["node"],
 *
 *   // supply additional arguments to the packager
 *   extraPackagerArgs: []
 * ]
 */

project.ext.react = [
    enableHermes: false,  // clean and rebuild if changing
    entryFile: "index.js",
    bundleAssetName: "index.android.bundle",
    bundleInDebug: true,
    bundleInRelease: false,
]

apply from: "../../node_modules/react-native/react.gradle"

/**
 * Set this to true to create two separate APKs instead of one:
 *   - An APK that only works on ARM devices
 *   - An APK that only works on x86 devices
 * The advantage is the size of the APK is reduced by about 4MB.
 * Upload all the APKs to the Play Store and people will download
 * the correct one based on the CPU architecture of their device.
 */
def enableSeparateBuildPerCPUArchitecture = true

/**
 * Run Proguard to shrink the Java bytecode in release builds.
 */
def enableProguardInReleaseBuilds = false

/**
 * The preferred build flavor of JavaScriptCore.
 *
 * For example, to use the international variant, you can use:
 * `def jscFlavor = 'org.webkit:android-jsc-intl:+'`
 *
 * The international variant includes ICU i18n library and necessary data
 * allowing to use e.g. `Date.toLocaleString` and `String.localeCompare` that
 * give correct results when using with locales other than en-US.  Note that
 * this variant is about 6MiB larger per architecture than default.
 */
def jscFlavor = 'org.webkit:android-jsc:+'

/**
 * Whether to enable the Hermes VM.
 *
 * This should be set on project.ext.react and that value will be read here. If it is not set
 * on project.ext.react, JavaScript will not be compiled to Hermes Bytecode
 * and the benefits of using Hermes will therefore be sharply reduced.
 */
def enableHermes = project.ext.react.get("enableHermes", false);

/**
 * Architectures to build native code for.
 */
def reactNativeArchitectures() {
    def value = project.getProperties().get("reactNativeArchitectures")
    return value ? value.split(",") : ["armeabi-v7a", "x86", "x86_64", "arm64-v8a"]
}

android {
    ndkVersion rootProject.ext.ndkVersion

    compileSdkVersion rootProject.ext.compileSdkVersion

    defaultConfig {
        applicationId "com.assisteddrivingpage"
        minSdkVersion rootProject.ext.minSdkVersion
        targetSdkVersion rootProject.ext.targetSdkVersion
        versionCode 1
        versionName "1.0"
        buildConfigField "boolean", "IS_NEW_ARCHITECTURE_ENABLED", isNewArchitectureEnabled().toString()

        if (isNewArchitectureEnabled()) {
            // We configure the NDK build only if you decide to opt-in for the New Architecture.
            externalNativeBuild {
                ndkBuild {
                    arguments "APP_PLATFORM=android-21",
                        "APP_STL=c++_shared",
                        "NDK_TOOLCHAIN_VERSION=clang",
                        "GENERATED_SRC_DIR=$buildDir/generated/source",
                        "PROJECT_BUILD_DIR=$buildDir",
                        "REACT_ANDROID_DIR=$rootDir/../node_modules/react-native/ReactAndroid",
                        "REACT_ANDROID_BUILD_DIR=$rootDir/../node_modules/react-native/ReactAndroid/build"
                    cFlags "-Wall", "-Werror", "-fexceptions", "-frtti", "-DWITH_INSPECTOR=1"
                    cppFlags "-std=c++17"
                    // Make sure this target name is the same you specify inside the
                    // src/main/jni/Android.mk file for the `LOCAL_MODULE` variable.
                    targets "assisteddrivingpage_appmodules"

                    // Fix for windows limit on number of character in file paths and in command lines
                    if (Os.isFamily(Os.FAMILY_WINDOWS)) {
                        arguments "NDK_OUT=${rootProject.projectDir.getParent()}\\.cxx",
                            "NDK_APP_SHORT_COMMANDS=true"
                    }
                }
            }
            if (!enableSeparateBuildPerCPUArchitecture) {
                ndk {
                    abiFilters (*reactNativeArchitectures())
                }
            }
        }
    }

    if (isNewArchitectureEnabled()) {
        // We configure the NDK build only if you decide to opt-in for the New Architecture.
        externalNativeBuild {
            ndkBuild {
                path "$projectDir/src/main/jni/Android.mk"
            }
        }
        def reactAndroidProjectDir = project(':ReactAndroid').projectDir
        def packageReactNdkDebugLibs = tasks.register("packageReactNdkDebugLibs", Copy) {
            dependsOn(":ReactAndroid:packageReactNdkDebugLibsForBuck")
            from("$reactAndroidProjectDir/src/main/jni/prebuilt/lib")
            into("$buildDir/react-ndk/exported")
        }
        def packageReactNdkReleaseLibs = tasks.register("packageReactNdkReleaseLibs", Copy) {
            dependsOn(":ReactAndroid:packageReactNdkReleaseLibsForBuck")
            from("$reactAndroidProjectDir/src/main/jni/prebuilt/lib")
            into("$buildDir/react-ndk/exported")
        }
        afterEvaluate {
            // If you wish to add a custom TurboModule or component locally,
            // you should uncomment this line.
            // preBuild.dependsOn("generateCodegenArtifactsFromSchema")
            preDebugBuild.dependsOn(packageReactNdkDebugLibs)
            preReleaseBuild.dependsOn(packageReactNdkReleaseLibs)

            // Due to a bug inside AGP, we have to explicitly set a dependency
            // between configureNdkBuild* tasks and the preBuild tasks.
            // This can be removed once this is solved: https://issuetracker.google.com/issues/207403732
            configureNdkBuildRelease.dependsOn(preReleaseBuild)
            configureNdkBuildDebug.dependsOn(preDebugBuild)
            reactNativeArchitectures().each { architecture ->
                tasks.findByName("configureNdkBuildDebug[${architecture}]")?.configure {
                    dependsOn("preDebugBuild")
                }
                tasks.findByName("configureNdkBuildRelease[${architecture}]")?.configure {
                    dependsOn("preReleaseBuild")
                }
            }
        }
    }

    splits {
        abi {
            reset()
            enable enableSeparateBuildPerCPUArchitecture
            universalApk false  // If true, also generate a universal APK
            // include (*reactNativeArchitectures())
            include "x86"
        }
    }
    signingConfigs {
        debug {
            storeFile file('debug.keystore')
            storePassword 'android'
            keyAlias 'androiddebugkey'
            keyPassword 'android'
        }
    }
    buildTypes {
        debug {
            signingConfig signingConfigs.debug
        }
        release {
            // Caution! In production, you need to generate your own keystore file.
            // see https://reactnative.dev/docs/signed-apk-android.
            signingConfig signingConfigs.debug
            minifyEnabled enableProguardInReleaseBuilds
            proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
        }
    }

    // applicationVariants are e.g. debug, release
    applicationVariants.all { variant ->
        variant.outputs.each { output ->
            // For each separate APK per architecture, set a unique version code as described here:
            // https://developer.android.com/studio/build/configure-apk-splits.html
            // Example: versionCode 1 will generate 1001 for armeabi-v7a, 1002 for x86, etc.
            def versionCodes = ["armeabi-v7a": 1, "x86": 2, "arm64-v8a": 3, "x86_64": 4]
            def abi = output.getFilter(OutputFile.ABI)
            if (abi != null) {  // null for the universal-debug, universal-release variants
                output.versionCodeOverride =
                        defaultConfig.versionCode * 1000 + versionCodes.get(abi)
            }

        }
    }
}

dependencies {
    implementation fileTree(dir: "libs", include: ["*.jar"])

    //noinspection GradleDynamicVersion
    implementation "com.facebook.react:react-native:+"  // From node_modules

    implementation "androidx.swiperefreshlayout:swiperefreshlayout:1.0.0"

    debugImplementation("com.facebook.flipper:flipper:${FLIPPER_VERSION}") {
        exclude group:'com.facebook.fbjni'
    }

    debugImplementation("com.facebook.flipper:flipper-network-plugin:${FLIPPER_VERSION}") {
        exclude group:'com.facebook.flipper'
        exclude group:'com.squareup.okhttp3', module:'okhttp'
    }

    debugImplementation("com.facebook.flipper:flipper-fresco-plugin:${FLIPPER_VERSION}") {
        exclude group:'com.facebook.flipper'
    }

    if (enableHermes) {
        def hermesPath = "../../node_modules/hermes-engine/android/";
        debugImplementation files(hermesPath + "hermes-debug.aar")
        releaseImplementation files(hermesPath + "hermes-release.aar")
    } else {
        implementation jscFlavor
    }
}

if (isNewArchitectureEnabled()) {
    // If new architecture is enabled, we let you build RN from source
    // Otherwise we fallback to a prebuilt .aar bundled in the NPM package.
    // This will be applied to all the imported transtitive dependency.
    configurations.all {
        resolutionStrategy.dependencySubstitution {
            substitute(module("com.facebook.react:react-native"))
                    .using(project(":ReactAndroid")).because("On New Architecture we're building React Native from source")
        }
    }
}

// Run this once to be able to run the application with BUCK
// puts all compile dependencies into folder libs for BUCK to use
task copyDownloadableDepsToLibs(type: Copy) {
    from configurations.implementation
    into 'libs'
}

apply from: file("../../node_modules/@react-native-community/cli-platform-android/native_modules.gradle"); applyNativeModulesAppBuildGradle(project)

def isNewArchitectureEnabled() {
    // To opt-in for the New Architecture, you can either:
    // - Set `newArchEnabled` to true inside the `gradle.properties` file
    // - Invoke gradle with `-newArchEnabled=true`
    // - Set an environment variable `ORG_GRADLE_PROJECT_newArchEnabled=true`
    return project.hasProperty("newArchEnabled") && project.newArchEnabled == "true"
}


```

</details>

## 常见问题汇总

### Q1: 应用上下 bar 问题

1. unity 上下 bar 隐藏掉
2. unity 中的`Main Camera`的 Background 设置为 rgba(0, 0, 0, 0)
3. C#中添加如下代码
   <details>
     <summary>C# Code</summary>

   ```csharp
   void Update()
   {
     Screen.SetResolution(1920, 720, false);
     Screen.fullScreen = false;
     // ...
   }
   ```

   </details>

4. android 项目中的`MainActivity.java`添加如下代码
   <details>
     <summary>Java Code</summary>

   ```java
   import android.view.WindowManager;
   import android.os.Bundle;

   public class MainActivity extends ReactActivity {
     // ...

     @Override
     protected void onCreate(Bundle savedInstanceState) {
       super.onCreate(savedInstanceState);
       getWindow().clearFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN);
       // getWindow().getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION | View.SYSTEM_UI_FLAG_LAYOUT_STABLE);
     }
   }
   ```

   </details>

5. 可能需要设置 UnityView 的父级 View 位置样式
   <details>
     <summary>TSX Code</summary>

   ```Typescript React
   <View>
     <UnityView
       onMessage={onMessage}
       onUnityMessage={onUnityMessage}
     />
   </View>
   ```

   </details>
