// packageA/pages/eggs/eggs.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        duckeggsrc:"https://s2.loli.net/2022/03/09/2PXIATEjQyUzZ4x.png",
        quaileggsrc:"https://s2.loli.net/2022/03/12/TUudjRKPX29q785.png",
        ovalsrc:"https://s2.loli.net/2022/03/12/zDRkf94yFcbNw5e.png",
        eggsrc:"https://s2.loli.net/2022/03/12/T1fs9eXj54zumiY.png"

    },

    gotoduckegg(){
        wx.navigateTo({
            url: '/packageA_G/pages/duckegg/duckegg',
          })
    },

    gotoquailegg(){
        wx.navigateTo({
            url: '/packageA_G/pages/quailegg/quailegg',
          })
    },

    gotooval(){
        wx.navigateTo({
            url: '/packageA_G/pages/oval/oval',
          })
    },

    gotoegg(){
        wx.navigateTo({
            url: '/packageA_G/pages/egg/egg',
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