/* eslint-disable */
const path = require('path')
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-essential', 'plugin:@typescript-eslint/recommended', '@vue/standard', 'prettier', 'plugin:prettier/recommended', './src/types/.eslintrc-auto-import.json'],
  overrides: [],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest', // ECMAScript 版本
    parser: '@typescript-eslint/parser', // 解析器
    sourceType: 'module', // ECMAScript 模块
    ecmaFeatures: {
      jsx: true, // 允许 JSX
      globalReturn: false, // 允许在全局作用域下使用 return 语句
      impliedStrict: false, // 启用全局 strict mode (如果 ecmaVersion 是 5 或更高)
    },
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  /*
   * "off" 或 0    ==>  关闭规则
   * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
   * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
   **/
  rules: {
    // eslint (https://zh-hans.eslint.org/docs/latest/rules/)
    'no-var': 'error', // 要求使用 let 或 const 而不是 var
    'no-multiple-empty-lines': ['error', { max: 1 }], // 不允许多个空行
    'no-use-before-define': 'off', // 禁止在 函数/类/变量 定义之前使用它们
    'prefer-const': 'off', // 此规则旨在标记使用 let 关键字声明但在初始分配后从未重新分配的变量，要求使用 const
    'no-irregular-whitespace': 'off', // 禁止不规则的空白
    'eqeqeq': 'error', // 要求使用 === 和 !==
    'import/no-duplicates': 'off', // 禁止重复导入
    'no-unused-vars': 'off', // 禁止出现未使用过的变量
    'no-empty': 'off', // 禁止出现空语句块
    'no-undef': 'off', // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    'prettier/prettier': 'off', // 禁用 prettier 格式化
    'import/newline-after-import': 'warn', // 要求在 import 语句后有一个空行

    // typeScript (https://typescript-eslint.io/rules)
    '@typescript-eslint/prefer-ts-expect-error': 'error', // 禁止使用 @ts-ignore
    '@typescript-eslint/no-inferrable-types': 'off', // 可以轻松推断的显式类型可能会增加不必要的冗长
    '@typescript-eslint/no-namespace': 'off', // 禁止使用自定义 TypeScript 模块和命名空间。
    '@typescript-eslint/no-explicit-any': 'off', // 禁止使用 any 类型
    '@typescript-eslint/no-unused-vars': 'off', // 禁止空接口
    '@typescript-eslint/ban-types': 'off', // 禁止使用特定类型
    '@typescript-eslint/explicit-function-return-type': 'off', // 不允许对初始化为数字、字符串或布尔值的变量或参数进行显式类型声明
    '@typescript-eslint/no-var-requires': 'off', // 不允许在 import 语句中使用 require 语句
    '@typescript-eslint/no-empty-function': 'off', // 禁止空函数
    '@typescript-eslint/no-use-before-define': 'off', // 禁止在变量定义之前使用它们
    '@typescript-eslint/ban-ts-comment': 'off', // 禁止 @ts-<directive> 使用注释或要求在指令后进行描述
    '@typescript-eslint/no-non-null-assertion': 'off', // 不允许使用后缀运算符的非空断言(!)
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 要求导出函数和类的公共类方法的显式返回和参数类型

    // vue (https://eslint.vuejs.org/rules)
    'vue/no-v-html': 'off', // 禁止使用 v-html
    'vue/valid-template-root': 'off', // 模板根节点必须合法
    'vue/v-slot-style': 'error', // 强制执行 v-slot 指令样式
    'vue/no-mutating-props': 'off', // 不允许组件 prop的改变
    'vue/custom-event-name-casing': 'off', // 为自定义事件名称强制使用特定大小写
    'vue/attributes-order': 'off', // vue api使用顺序，强制执行属性顺序
    'vue/one-component-per-file': 'off', // 强制每个组件都应该在自己的文件中
    'vue/html-closing-bracket-newline': 'off', // 在标签的右括号之前要求或禁止换行
    'vue/max-attributes-per-line': 'off', // 强制每行的最大属性数
    'vue/multiline-html-element-content-newline': 'off', // 在多行元素的内容之前和之后需要换行符
    'vue/singleline-html-element-content-newline': 'off', // 在单行元素的内容之前和之后需要换行符
    'vue/attribute-hyphenation': 'off', // 对模板中的自定义组件强制执行属性命名样式
    'vue/require-default-prop': 'off', // 此规则要求为每个 prop 为必填时，必须提供默认值
    'vue/multi-word-component-names': 'off', // 要求组件名称始终为 “-” 链接的单词
  },
  globals: {},
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', path.resolve(__dirname, './src')]],
      },
    },
  },
}
