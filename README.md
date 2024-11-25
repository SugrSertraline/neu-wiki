
<img src="https://image.neuwiki.top/image/logobook.png" style="display: block; margin-left: auto; margin-right: auto;"/>
<h1 style="text-align: center;margin-top:10px">NEU百科指南</h1>

# Introduction

NEU百科指南（NEU-WIKI）是东北大学的一个信息集成平台，它受到了**上海交大生存手册**的启发。为了解决同学们因信息不对称和渠道不畅而面临的诸多挑战，包括对困难学生政策、机考等重要信息的不了解，我与团队成员共同开发了这个网站。我们的目标是提供一个集中的信息资源，帮助学生更好地了解和利用校园资源，从而更顺利地应对学习和生活中的各种挑战。通过NEU-WIKI，我们希望能够缩小信息差距，让每位学生都能轻松获取他们所需的信息。

# Webste URL

[https://neuwiki.top](https://neuwiki.top/)

# Features

项目使用Vue3+Typescript+VueRouter+NaiveUI+Tailwindcss进行开发。由于项目需要展示的信息多元化，并且具有一定的交互需求，因此项目放弃了传统静态站点如VitePress、GitBook等，使用配置读取+SSR渲染的方式，利用Vue3自带的h()以及定制化组件进行渲染。

## Components

项目在Vue3+NaiveUI+Tailwindcss的基础上，定义了相关的组件，例如页面贡献者、竞赛时间轴、对话等二次封装的组件，通过这种渲染方式增加了项目的可配置性和定制化程度，展示的方式更加多元。

## Server-Side Rendering

项目整体渲染依赖于Config中的PAGE_CONFIG对象，其中PAGE_CONFIG是一个Group[]类型的对象，具体类型请阅读/type/interface.ts文件夹中的内容，也就是整体是一个Group列表，每个Group由多个页面组成，每个页面包括基本信息例如**标题、更新日期等基本信息**，除此之外也有**Section、SubSection**两级组件，用来进行相应的描述以及动态侧边导航的渲染。

设计这种目的的初衷是希望实现可视化编辑，未来可以将项目的存储替换为相应的Json格式，并将Json格式保存到云端，因此可以实现可视化、可配置化的编辑，目前使用PAGE_CONFIG的方式进行过渡。

# Installation

```bash
npm clone https://github.com/SugrSertraline/neu-wiki.git
npm install
npm run dev
```

# Contact
项目整体目前侧重于前端开发，但内容仍需要大家共同完善，以及制定合适的运营模式让内容不断更新，因此如果想要加入我们，可以联系我：sugrsertraline@gmail.com