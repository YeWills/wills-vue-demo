# vue-simple-demo
本示例 列出了常见的post请求，父亲组件如何改变子组件state方法；
```js
  this.scorevalue = {"mendian":1,"xingxiang":22,"quyu":111}//方式三 ： 强烈推荐 ： 通过子组件watch父组件props，让props重新赋值state；
```
这种方式充分展示了vue的灵活性，比react灵活很多；

本示例展示的应用场景：
子组件有内部state listvalues；
父亲组件希望在post响应后，重新设置子组件的state listvalues；

在vue中，子组件自己能维护 listvalues；又可以通过一个 watch 来响应props改变listvalues；非常方便和灵活；

相比而言，react在hooks出现前，就没这么方便，只能通过 副作用生命周期 比较上下两次props是否变化，来setstate state，非常麻烦；

react的hooks出现后，useeffect的依赖参数其实就是简化了这个比较的工作，不用以前一样自己写，所以react hooks也解放了react，如果没有hooks，react肯定要被vue比下去；

本例子其他亮点：
 v-model的变量属性写法
```html
<select style="width:130px;margin:-3px 0 0 0;" v-model="listvalues[item.name]">\
```

