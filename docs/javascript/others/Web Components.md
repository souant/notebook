# Web Components

## 定义

> 使用 JavaScript 类，继承 HTMLElement

```js
// 定义一个<user-card>
class UserCard extends HTMLElement {
  constructor() {
    super();
  }
}
```

## 添加内容

```js
class UserCard extends HTMLElement {
  constructor() {
    super();

    var image = document.createElement('img');
    image.src = 'https://semantic-ui.com/images/avatar2/large/kristy.png';
    image.classList.add('image');

    var container = document.createElement('div');
    container.classList.add('container');

    var name = document.createElement('p');
    name.classList.add('name');
    name.innerText = 'User Name';

    var email = document.createElement('p');
    email.classList.add('email');
    email.innerText = 'yourmail@some-email.com';

    var button = document.createElement('button');
    button.classList.add('button');
    button.innerText = 'Follow';
    // container添加内容
    container.append(name, email, button);
    // 自定义组件添加内容
    this.append(image, container);
  }
}
```

## 参考

[Web Components 入门实例教程](https://www.ruanyifeng.com/blog/2019/08/web_components.html)
