// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoInfo : null,
    othersList: [],
    commentDate:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    let id = options.id;
    this.getCurrentVideo(id);
    this.getOthersVideo(id);
    this.getCommentsList(id)
  },

  getCurrentVideo(id){
    wx.request({
      url:'https://easy-mock.com/mock/5ccc2cc89e5cbc7d96b29785/bili/videoDetail?id='+id,
      success:(res)=>{
        if(res.data.code === 0){
          this.setDate({
            othersList:res.data.data.othersList
          })
        }        
      }
    })
  },


  getOthersVideo(id){
    wx.request({
      url:'https://easy-mock.com/mock/5ccc2cc89e5cbc7d96b29785/bili/othersList?id='+id,
      success:(res)=>{
        if(res.data.code === 0){
          this.setDate({
            videoInfo:res.data.data.videoInfo
          })
        }        
      }
    })
  },

  getCommentsList(id){
    wx.request({
      url:'https://easy-mock.com/mock/5ccc2cc89e5cbc7d96b29785/bili/commentsList?id='+id,
      success:(res)=>{
        if(res.data.code === 0){
          this.setDate({
            commentDate:res.data.data.commentDate
          })
        }        
      }
    })
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