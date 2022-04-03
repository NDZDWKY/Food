// pages/classify/classify.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    
    gotovegetables(){
        wx.navigateTo({
          url: '/packageA/pages/vegetables/vegetables',
        })
    },
    gotomeat(){
        wx.navigateTo({
          url: '/packageA/pages/meat/meat',
        })
    },
    gotoseafoods(){
        wx.navigateTo({
          url: '/packageA/pages/seafoods/seafoods',
        })
    },
    gotocerealpotato(){
        wx.navigateTo({
          url: '/packageA/pages/cereal potato/cereal potato',
        })
    },
    gotobeans(){
        wx.navigateTo({
          url: '/packageA/pages/beans/beans',
        })
    },
    gotomilk(){
        wx.navigateTo({
          url: '/packageA/pages/milk/milk',
        })
    },
    gotoeggs(){
        wx.navigateTo({
          url: '/packageA/pages/eggs/eggs',
        })
    },
    gotofruits(){
        wx.navigateTo({
          url: '/packageA/pages/fruits/fruits',
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      wx.setNavigationBarTitle({
        title: '分类'
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