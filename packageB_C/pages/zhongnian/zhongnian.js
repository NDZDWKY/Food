// packageB_C/pages/zhongnian/zhongnian.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      name:'0'
    },
    gotoyinyu(){
        wx.navigateTo({
          url: '/packageB_C_D/pages/yinyu/yinyu',
        })
    },
    gotobaizhuo(){
        wx.navigateTo({
          url: '/packageB_C_D/pages/baizhuo/baizhuo',
        })
    },
    gotoyaoguo(){
        wx.navigateTo({
          url: '/packageB_C_D/pages/yaoguo/yaoguo',
        })
    },
    gotohupi(){
        wx.navigateTo({
          url: '/packageB_C_D/pages/hupi/hupi',
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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