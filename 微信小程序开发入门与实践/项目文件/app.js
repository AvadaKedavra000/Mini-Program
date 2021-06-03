
App({
  onLaunch: function(){
    let storageData = wx.getStorageSync('postList');
    if(!storageData){
      //如果postList缓存不存在
      let dataObj=require("data/data.js");//取得初始数据
      wx.clearStorageSync();//清除缓存
      wx.setStorageSync('postList', dataObj.postList);//设置缓存
    }

  }
})