import Vue from 'vue'
import { Button,Message,Form,FormItem,Input,Container,
    Header,Aside,Main,Menu,Submenu,MenuItemGroup,MenuItem,
    Breadcrumb,BreadcrumbItem,Card,Row,Col,Table,TableColumn,
    Switch,Tooltip,Pagination,Dialog,MessageBox,Tag,Tree,Option,
    Select,Cascader,Alert,Tabs,TabPane
    
    } from 'element-ui'



Vue.use(Button).use(Form).use(FormItem).use(Input).use(Container)
    .use(Header).use(Aside).use(Main).use(Menu).use(MenuItemGroup)
    .use(MenuItem).use(Submenu).use(Breadcrumb).use(BreadcrumbItem)
    .use(Card).use(Row).use(Col).use(Table).use(TableColumn).use(Switch)
    .use(Tooltip).use(Pagination).use(Dialog).use(Tag).use(Tree)
    .use(Select).use(Option).use(Cascader).use(Alert).use(Tabs)
    .use(TabPane)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm