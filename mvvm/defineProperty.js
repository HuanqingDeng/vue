// var o={};
// o.step=1;
// var bValue=1;
// Object.defineProperty(o,'a',{
//     // value:7,
//     get:function(){
//         console.log('get');
//         return bValue;
//     },
//     set:function(val){
//         bValue=val;
//         console.log('设置了新的值');
//     }
// });
// o.a=2
// console.log(o.a);
//////////////////////////////////////////////////////////////
// (function () {
//     // 'use strict'//严格模式
//     console.log(this);
    
//     var o = {};
//     Object.defineProperty(o, 'a', {
//         value: 7,
//         writable: false
//     });
//     console.log(o.a);
//     o.a = 25;
//     console.log(o.a);
// })
//////////////////////////////////////////////////////////////
// var o = {};
// Object.defineProperty(o, 'a', {
//     value:1,
//     enumerable:true
// });

// Object.defineProperty(o, 'b', {
//     value:2,
//     enumerable:false//不可枚举
// });

// Object.defineProperty(o, 'c', {
//     value:3
//     //enumerable默认为false
// });

// o.d=4;
// console.log(Object.keys(o));

// for(let key in o){
//     console.log(key,o[key]);
// }
// console.log(o.b);
// console.log(o.c);
// console.log(o.propertyIsEnumerable('c'));
////////////////////////////////////////////////////////////
// 'use strict'//严格模式下会报错
// var o = {};
// Object.defineProperty(o, 'a', {
//     configurable:false,//属性是否可以被配置
//     get:function(){
//         return 1;
//     }
// });
// console.log(o.a);
// delete o.a;
// console.log(o.a);
/////////////////////////////////////////////////////////////////

function Aechiver(){
    var temperate=null;
    var data={
        age:19,
        name:'dhq'
    }
    for(let key in data){
        Object.defineProperty(data,key,{
            get:function(){
                console.log('get');
                return data[key];
            },
            set:function(newValue){
                console.log('set');
                data[key]=newValue;
            }
        })
    }
    data.age=20;
}
var arc=new Aechiver();