export default {
    loggedIn(){
      return localStorage.token   
      // return login()   
    },
    login(email,pass,cb){
      setTimeout(()=>{
            if(email==='joe@eample.com' && pass=='11111111'){
              const token=Math.random().toString(36).substring(7);
              localStorage.setItem('token',token)
            cb(true)
         }else {
            cb(false)
         }
      },500)
    },
    loginOut(){
      localStorage.removeItem('token')
    }
}