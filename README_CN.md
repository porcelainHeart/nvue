[English](README.md) | 简体中文

### nvue
> 可以快速生成常用的模板文件, 如表单+表格的页面, dialog内的表单组件等等

#### 安装
```
$ npm i nvue -g
```

#### 开始使用
```
#获取帮助
$ nvue -h

#获取模板列表
$ nvue -l

#创建一个表单表格页面, -t参数的值即为使用的模板
$ nvue table -t table
#也可以使用简写, t是table的别名, 要获取所有模板列表, 使用nvue -l
$ nvue table -t t
#或者更简洁一些, 参数的顺序不能乱, 第一个参数永远是要生成的文件名
$ nvue table t
```

#### 其他

支持创建多级目录如
```
$ nvue aaa/bbb/ccc/ddd
```
会在当前目录创建aaa/bbb/ccc/ddd.vue文件, 如果目录已存在则直接在对应目录下创建, 如果文件已存在会覆盖源文件

文件名参数不需要带后缀, 自动补全.vue

#### TODO

* 添加更多模板支持
* 添加更多命令
* 本地化配置文件功能