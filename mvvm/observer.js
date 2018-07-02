// 响应式 观察者模式 pub-sub
function observer(value){
    // 严格性校验
    if(!value || (typeof value !=='object')){
        return;
    }   
    Object.keys(value).forEach((key)=>{
        defineReactive(value,key,value[key])
        // console.log(value[key]);//i am test/zk
    })
}
function defineReactive(obj,key,val){
    // console.log(val);
    Object.defineProperty(obj,key,{
        enumerable: true,//可遍历
        configurable: true,//可删除
        get: function reactiveGetter(){            
            return val;
        },
        set:function reactiveSetter(newVal){
            if(newVal==val) return;
            val=newVal
            cb(val)
        }
    })
}
function cb(val){
    console.log('试图更新了，新的值应该为'+val);   
}
class Vue{
    constructor(options){
        this._data=options.data;
        observer(this._data);
    }
}
// 发布者订阅模式是vue数据响应的核心，一对多的关系
let o=new Vue({
    data:{
        test:'i am test',
        name:'zk'
    }
})
o._data.test='hello,test';
o._data.name='te';