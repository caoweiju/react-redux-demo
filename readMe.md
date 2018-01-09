# react-redux-demo
* 运行方式  
`npm install`  安装相关依赖  
`npm install webpack -g`  安装webpack最新版 
`webpack` 执行webpack来进行打包  
在浏览器中打开目录下的`/html/pages/home.html`文件即可访问结果
````
➜ react-redux-demo git:(master) ✗ tree -I node_modules  
.
├── html
│   └── pages
│       └── home.html
├── package-lock.json
├── package.json
├── readMe.md
├── src
│   ├── scripts
│   │   ├── common
│   │   └── pages
│   │       ├── dist
│   │       │   └── home.js
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
│       ├── lib
│       ├── module
│       └── pages
│           └── home.css
└── webpack.config.js

18 directories, 16 files
````