# VS Code

## Custom Configuration

<details>
<summary><em>{..}</em> (Click to expand)</summary>

```json
{
  "editor.fontSize": 20,
  "editor.fontFamily": "simsun Consolas, 'Courier New', monospace",
  "editor.wordWrap": "bounded",
  "html.format.wrapLineLength": 7000,
  "editor.wordWrapColumn": 8000,
  // 对属性进行换行。
  "html.format.wrapAttributes": "aligned-multiple",
  "html.format.enable": true,
  "html.format.indentHandlebars": true,
  // 保存时设置文件的格式。格式化程序必须可用，不能自动保存文件，并且不能关闭编辑器。
  "editor.formatOnSave": true,
  "editor.formatOnType": true,
  "files.autoSave": "off",
  "files.autoSaveDelay": 3000,
  "typescript.npm": null,
  "terminal.integrated.cursorBlinking": true,
  "editor.snippetSuggestions": "inline",
  // 配置语言的文件关联(如: "*.extension": "html")。这些关联的优先级高于已安装语言的默认关联。
  "files.associations": {
    "*.vue": "vue",
    "*.wxss": "css",
    "*.wxml": "wxml",
    "*.ejs": "ejs",
    "*.cjson": "jsonc",
    "*.wxs": "javascript"
  },
  // 为指定的语法定义配置文件或使用带有特定规则的配置文件。
  "emmet.syntaxProfiles": {
    "vue-html": "html",
    "vue": "html",
    "JavaScript React": "jsx"
  },
  "vetur.validation.template": true,
  //
  "window.zoomLevel": 0,
  "extensions.ignoreRecommendations": true,
  // "eslint.options": {
  //     "plugins": [
  //         "html"
  //     ]
  // },
  // "eslint.validate": [
  //     "javascript",
  //     "javascriptreact",
  //     "html",
  //     "vue"
  // ],
  "prettier.semi": false,
  "prettier.singleQuote": true,
  // "eslint.autoFixOnSave": true,
  "vetur.format.defaultFormatter.html": "prettier",
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_attributes": "auto", // [auto|force|force-aligned|force-expand-multiline] ["auto"]
      "singleQuote": true
    },
    "prettyhtml": {
      "printWidth": 100000,
      "singleQuote": true,
      "wrapAttributes": false,
      "sortAttributes": false
    },
    "prettier": {
      "semi": true,
      "singleQuote": true
    }
  },
  "workbench.iconTheme": "vscode-icons",
  // 启用后，按下 TAB 键，将展开 Emmet 缩写。
  "emmet.triggerExpansionOnTab": true,
  // 一个制表符等于的空格数。该设置在 "editor.detectIndentation" 启用时根据文件内容可能会被覆盖。
  "editor.detectIndentation": true,
  "editor.tabSize": 2,
  "emmet.showAbbreviationSuggestions": true,
  "emmet.showExpandedAbbreviation": "always",
  "emmet.includeLanguages": {
    "vue-html": "html",
    "vue": "html",
    "javascript": "javascriptreact",
    "blade": "html",
    "wxml": "html"
  },
  // 启用后，将在保存文件时剪裁尾随空格。
  "files.trimTrailingWhitespace": true,
  "material-icon-theme.showUpdateMessage": false,
  "python.formatting.provider": "yapf",
  "todohighlight.include": [
    "**/*.js",
    "**/*.jsx",
    "**/*.ts",
    "**/*.tsx",
    "**/*.html",
    "**/*.php",
    "**/*.css",
    "**/*.scss",
    "**/*.vue" // 添加vue文件的TODO
  ],
  "workbench.startupEditor": "welcomePage",
  "window.menuBarVisibility": "default",
  "workbench.activityBar.visible": true,
  "[wxml]": {},
  "javascript.implicitProjectConfig.experimentalDecorators": true,
  // koroFileHeader settings
  // ctrl+alt+i
  "fileheader.customMade": {
    "Author": "wzheng(hb_wangzheng@163.com)",
    "Github": "https://github.com/wayley",
    "Company": "Fih-ACKN",
    "Date": "Do not edit",
    "LastEditors": "wzheng(hb_wangzheng@163.com)",
    "LastEditTime": "Do not edit",
    "Description": ""
  },
  // "fileheader.cursorMode": {},
  // `Document this` settings
  // ctrl+alt+d
  "docthis.authorName": "wzheng",
  "docthis.includeDateTag": true,
  "docthis.includeAuthorTag": true,
  "docthis.includeDescriptionTag": true,
  "sync.gist": "29c221bdf6df1c03c0a35d9d1ccd7a12",
  // Automatically compile SASS/SCSS file after saving
  "easysass.compileAfterSave": false,
  // 控制是否在搜索中跟踪符号链接。
  "search.followSymlinks": false,
  "javascript.preferences.quoteStyle": "single",
  "eslint.validate": [],
  // 定义函数参数括号前的空格处理方式。
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  "minapp-vscode.disableAutoConfig": true,
  "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[python]": {},
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "[json]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "typescript.updateImportsOnFileMove.enabled": "always",
  "typescript.preferences.quoteStyle": "single"
}
```

</details>

## Plugins

<!-- Chinese (Simplified) (简体中文) Language Pack for Visual Studio Code -->

|           插件名称           |                    插件功能                     | 说明 |
| :--------------------------: | :---------------------------------------------: | :--: |
|       Chinese Language       |                (简体)中文语言包                 |      |
|        vscode-drawio         |           可以直接在`VS Code`上面画图           |      |
|        code-flowchart        |                                                 |      |
|      Code Spell Checker      |            检查单词拼写是否出现错误             |      |
|            ESLint            |  语法规则和代码风格的检查工具，代码风格统一化   |      |
|         file-header          |              自动生成头部注释插件               |      |
|     Debugger for Chrome      |             vscode 中直接启动控制台             |      |
|       HTML CSS Support       |             html 和 css 的语法检查              |      |
|        HTML Snippets         |                  HTML 提示插件                  |      |
| JavaScript(ES6)code snippets |               js 的提示(包括 ES6)               |      |
|           prettier           | 与 ESLint 配合代码风格统一化,代码自动格式化工具 |      |
|            Vuter             |                 vue 的代码提示                  |      |
|          stylelint           |                 css 语法检查器                  |      |
|    vscode-fileheader-git     |                                                 |      |
