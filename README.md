# eslint-plugin-grantlint

自定义ESlint rule

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-grantlint`:

```sh
npm install eslint-plugin-grantlint --save-dev
```

## Usage

Add `grantlint` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "grantlint"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "grantlint/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here


.
├── README.md
├── docs // 使用文档
│   └── rules // 所有规则的文档
│       └── settimeout-no-number.md // 具体规则文档
├── lib // eslint 规则开发
│   ├── index.js 引入+导出rules文件夹的规则
│   └── rules // 此目录下可以构建多个规则
│       └── settimeout-no-number.js // 规则细节
├── package.json
└── tests // 单元测试
    └── lib
        └── rules
            └── settimeout-no-number.js // 测试该规则的文件
