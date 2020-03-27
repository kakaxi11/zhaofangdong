#完善

完善了角色列表，商品列表，商品分类的编辑删除等功能

使用了最新版本的 element-ui，使用 el-table 重新渲染了角色列表，商品分类的树形列表，放弃使用 tree-table。

#坑

我在一开始配置的时候没有开 eslint，小白建议不开，后边就懂了。

分配角色是无法给超级管理员分配角色的，如果想验证自己是否写对可以用下别的同学的接口 比如：http://119.23.53.78:8888/api/private/v1

在 el-table 中最新的 element-ui 是不需要指定 row-key 的，但是相应的 css 版本也要升级到最新，将 index.html 中的引用 cdn 的版本下就好。

使用最新版本的 element-ui 会导致订单列表在生产环境下无法渲染按钮情况的发生，因此我多写了一个订单详情按钮，通过作用域插槽接收数据并使用。

最新的 element-ui 在渲染商品分类的时候会将 index 渲染到 children 中，我删除了前边的 index 列

在商品列表的搜索过程中出现了页码不为 1 不能显示搜索结果的情况，所以我调用了 handleCurrentChange(1),因为该函数包含了 getGoodsList，所以我不再调用 getGoodsList。

#推荐

vscode 插件方面我推荐用 Auto Close Tag(自动闭合修改标签页)，Beautifully(图形字体好看)，HTML Snippets(tab 键即可生成标签页，但是 template 不行)，Terminal(非官方终端)，Vue VSCode Snippets(大力推荐，你只要按下 vba + tab 就可生成模板，别的可以自己看示例)

自动换行 File>preferences>settting 搜索 editor.wordWrap 将其改成 on，这样会在视野盲区自动换行。

我使用了鼠标宏，复制粘贴以及代码格式化只要点一下非常方便，可以一试

我买了机械键盘，建议茶轴，手感就是不一样，可以买个让自己有敲代码的欲望，我的笔记本键盘那叫一个难用。

有什么好的意见建议以及坑可以发给我，让我补充。
