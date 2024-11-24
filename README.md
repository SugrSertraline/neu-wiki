
<img src="https://image.neuwiki.top/image/logobook.png" style="display: block; margin-left: auto; margin-right: auto;"/>
<h1 style="text-align: center;margin-top:10px">NEU百科指南</h1>

# Introduction

NEU百科指南（NEU-WIKI）是东北大学的一个信息集成平台，它受到了**上海交大生存手册**的启发。为了解决同学们因信息不对称和渠道不畅而面临的诸多挑战，包括对困难学生政策、机考等重要信息的不了解，我与团队成员共同开发了这个网站。我们的目标是提供一个集中的信息资源，帮助学生更好地了解和利用校园资源，从而更顺利地应对学习和生活中的各种挑战。通过NEU-WIKI，我们希望能够缩小信息差距，让每位学生都能轻松获取他们所需的信息。

# Features

## Tech

项目使用Vue3+Typescript+VueRouter+NaiveUI+Tailwindcss。

## Components

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