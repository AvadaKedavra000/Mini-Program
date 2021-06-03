// pages/post/post-detail/post-detail.js
import { DBPost } from '../../../db/DBPost.js';
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
    //接受post页面传递参数的方法是通过post-detail页面onLoad函数里的options参数来获取。options参数是由框架传递的
    //点击详情页，则跳转出post-detail页面，页面是同一个页面，只是其中参数id会根据点击列表项的不同而变化，之后则给post-detail设置不同的数据，再之后就渲染
    let postId=options.id;
    this.dbPost=new DBPost(postId);
    this.postData = this.dbPost.getPostItemById().data;
    this.setData({//设置post-detail界面的data
      post:this.postData
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.postData.title
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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

  }
})