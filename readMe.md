# react-redux-demo

*需要webpack3以上*

* 运行方式  

`npm install`  安装相关依赖
`webpack` 执行webpack来进行打包  


在浏览器中打开目录下的`/html/pages/home.html`文件即可访问结果
````
➜  react-redux-demo git:(master) tree -I node_modules 
.
├── html
│   └── pages
│       └── home.html
├── package-lock.json
├── package.json
├── readMe.md
├── src
│   ├── dist
│   │   ├── css
│   │   │   └── home.css
│   │   ├── images
│   │   │   └── head.jpeg
│   │   └── js
│   │       └── home.js
│   ├── scripts
│   │   ├── common
│   │   └── pages
│   │       └── home
│   │           ├── actions
│   │           │   ├── data.js
│   │           │   └── index.js
│   │           ├── components
│   │           │   ├── app.js
│   │           │   ├── article
│   │           │   │   └── index.js
│   │           │   └── consults
│   │           │       └── index.js
│   │           ├── index.js
│   │           ├── reducers
│   │           │   ├── data.js
│   │           │   └── index.js
│   │           └── store
│   │               └── index.js
│   └── styles
│       ├── images
│       │   └── home
│       │       └── head.jpeg
│       ├── lib
│       │   └── base.scss
│       ├── module
│       └── pages
│           └── home.scss
└── webpack.config.js

````