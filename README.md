# NEU百科指南（NEU-WIKI）

## 一、简介

该项目名为NEU百科指南（NEU-WIKI），项目使用vue3+ts+vueRouter+naiveUI+tailwindcss，通过填写config路径下的PageConfig.ts文件进行页面的渲染配置，该项目具有如下特点。

- 自定义组件：结合naiveUI组件，在其基础上扩展了除了相应的个人介绍等组件。
- 配置文件渲染：页面的内容是使用component标签进行动态渲染，配置文件为config路径下的PageConfig.ts文件。

## 二、组件

该项目在naiveUI的基础上，扩展了一些组件，用于实现页面需要展示的特定内容。其中，组件的接口为type|undefined，不可以将属性定义为可选。

### 1.贡献者

NWContributor用于展示页面的贡献者的信息，具体为每个页面最下面的用户信息卡片。

| 属性名       | 类型             | 默认值        | 描述                             |
|--------------|------------------|---------------|----------------------------------|
| `title`      | `String`         | `''`           | 组件的标题。                     |
| `data`       | `Array`          | `[]`           | 要展示的数据数组。               |
| `editable`   | `Boolean`        | `false`        | 是否允许编辑数据。               |
| `theme`      | `String`         | `'light'`      | 组件的主题样式，可选值为 `'light'` 或 `'dark'`。 |

## 目前项目存在的问题

页面切换与url之间的关系，page_data与current_page作用为子集关系，应该进行修改。

组件的参数命名不规范，同时部分没有指定类型。