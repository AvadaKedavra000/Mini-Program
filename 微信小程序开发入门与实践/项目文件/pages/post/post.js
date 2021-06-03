import {DBPost} from "../../db/DBPost.js";
// pages/post/post.js,加载->显示->渲染,onLoad->onShow->onReady
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let dbPost = new DBPost();
    this.setData({//设置post界面的data
      postList:dbPost.getAllPostData()
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow:页面被显示");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide:页面被隐藏");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload:页面被卸载");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //获取data-post-id
  onTapToDetail(event){
    //dataset对象里包含当前组件中所有属性名以data-开头的自定义属性值。我们在post.wxml上绑定了data-post-id，所以通过dataset.postId将可以拿到当前组件的postId
    let postId=event.currentTarget.dataset.postId;
    console.log(postId);
    wx.navigateTo({
      url:'post-detail/post-detail?id='+postId
    })
  }
})