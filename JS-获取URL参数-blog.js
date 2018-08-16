/************* 通过url获取参数的两种原生方法 ***********/
// 方法一（推荐）：
var urlinfo    = window.location.href;  //获取当前页面的url
var len        = urlinfo.length;  //获取url的长度
var offset     = urlinfo.indexOf("?");  //设置参数字符串开始的位置
var newsidinfo = urlinfo.substr(offset,len)  //取出参数字符串 这里会获得类似“id=1”这样的字符串
var newsids    = newsidinfo.split("=");  //对获得的参数字符串按照“=”进行分割
console.log(newsids[1]);  //得到参数值
 
// 方法二：
function getQueryStringArgs() {
    //取得查询字符串并去掉开头的问号
    var qs    = (location.search.length > 0 ? location.search.substring(1) : ""),
        args  = {},//保存数据的对象
        items = qs.length ? qs.spilt("&") : [],//取得每一项
        item  = null,
        name  = null,
        value = null,
        i     = 0,
        len   = items.length;
    for(i=0; i < len; i++){
        item = items[i].split("=");
        //decodeURIComponent() 函数可对 encodeURIComponent() 函数编码的 URI 进行解码。
        name = decodeURIComponent(item[0]);
        value = decodeURIComponent(item[1]);
        if (name.length){
            args[name] = value;
        }
    }
    return args;
}


/************* vue vue-router ***********/
//方式一，命名路由，使用带单个参数
router.push({ name: 'user', params: { userId: 123 }});//此为编程式，也可用声明式
console.log(this.$route.params.userId);

// 方式二，带查询参数，变成 /register?plan=private，可带多个
router.push({ path: 'register', query: { plan: 'private' }})
console.log(this.$route.query.plan);


/************* jQuery ***********/