import Mock from 'mockjs'
import {param2Obj} from '@/utils'
const List=[]
const count=100
const baseContent='<p>我是测试数据我是测试数据</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>'
const image_url='https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3'
for(let i=0;i<count;i++){
    List.push(Mock.mock({
        id:'@increment',
        timestamp:+Mock.Random.date('T'),
        author:'@first',
        reviewer:'@title(5,10)',
        content_short:'我是测试数据',
        content:baseContent,
        importance:'@integer(1,3)',
        'type|1':['CN','US','JP','EU'],
        'status|1':['published','draft','deleted'],
        display_time:'@datatime',
        comment_disabled:true,
        pageviews:'@integer(300,500)',
        image_url
    }))
}
export default {
    getList:(config)=>{
        console.log(config);
        const {importance,type,title,page=1,limit=20,sort}=param2Obj(config.url);
        console.log(importance,type,title,page,limit,sort);
        let mockList=List.filter(item=>{
            if(importance&&item.importance!==+importance)return false
            if(type&&item.type!==type)return false
            if(title&&item.title.indexOf(title)<0)return false 
            return true;
        })
        const pageList=mockList.filter((item,index)=>index<limit*page&&index >=limit*(page-1))
        return {
            total:List.length,
            items:pageList
        }
    }
}