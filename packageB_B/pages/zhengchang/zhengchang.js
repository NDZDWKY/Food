// packageB_B/pages/zhengchang/zhengchang.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      name:'0'
    },
    gotoqiaomaimian(){
        wx.navigateTo({
          url: '/packageB_B_C/pages/qiaomaimian/qiaomaimian',
        })
    },
    gotohongshu(){
        wx.navigateTo({
          url: '/packageB_B_C/pages/hongshu/hongshu',
        })
    },
    gotolimai(){
        wx.navigateTo({
          url: '/packageB_B_C/pages/limai/limai',
        })
    },
    gotolanmei(){
        wx.navigateTo({
          url: '/packageB_B_C/pages/lanmei/lanmei',
        })
    },
    gotoxiduoshi(){
        wx.navigateTo({
          url: '/packageB_B_C/pages/xiduoshi/xiduoshi',
        })
    },
    gotolianzi(){
        wx.navigateTo({
          url: '/packageB_B_C/pages/lianzil/lianzil',
        })
    },
    gotonangua(){
        wx.navigateTo({
          url: '/packageB_B_C/pages/nangua/nangua',
        })
    },
    gotozishu(){
        wx.navigateTo({
          url: '/packageB_B_C/pages/zishu/zishu',
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