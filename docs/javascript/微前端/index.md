---
lang: zh-cn
title: 介绍
description: 微前端介绍、说明
---
## qiankunjs
qiankun 是一个基于 single-spa 的微前端实现库，旨在帮助大家能更简单、无痛的构建一个生产可用微前端架构系统。

微前端架构具备以下几个核心价值：

- 技术栈无关 

主框架不限制接入应用的技术栈，微应用具备完全自主权

- 独立开发、独立部署 

微应用仓库独立，前后端可独立开发，部署完成后主框架自动完成同步更新

- 增量升级

在面对各种复杂场景时，我们通常很难对一个已经存在的系统做全量的技术栈升级或重构，而微前端是一种非常好的实施渐进式重构的手段和策略

- 独立运行时

每个微应用之间状态隔离，运行时状态不共享

> 微前端架构旨在解决单体应用在一个相对长的时间跨度下，由于参与的人员、团队的增多、变迁，从一个普通应用演变成一个巨石应用(Frontend Monolith)后，随之而来的应用不可维护的问题。这类问题在企业级 Web 应用中尤其常见。
