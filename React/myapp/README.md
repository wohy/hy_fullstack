目录：
- public
  - manifest.json：做一个 PWA(渐进式的webApp)
  - robots.txt：SEO 配置
- src
  - react-app-env.d.ts 
  - reportWebVitals.ts
  - setupTests.ts

Prettier 工具 使代码适配不同的编译器 并格式化
$ yarn add --dev --exact prettier
$ echo {}> .prettierrc.json 会生成一个 .prettierrc.json 文件
新建一个 .prettierignore 写入不需要格式化的文件
Pre-commit Hook
运行 $ npx mrm lint-staged 之后会自动格式化代码
在 package.json 的扩展中加入 ts 和 tsx 执行 Prettier --write

会和 eslint 冲突，需要 安装 eslint-config-prettier
$ yarn add eslint-config-prettier
在 package.json 的 eslintConfig 中的 extend 中加入 "prettier"
是 prettier 和 eslint 可以正常的协同工作

当代码提交时，会被自动格式化为标准格式

commitlint 工具 安装并配置好
