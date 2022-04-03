// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        movies: [
            {url: "/images/rotating.jpg"},
            {url: "/images/bgi.jpg"}
        ],

        hotput: [
            {url:"/images/rice-icon.png", foodname:"米饭"},
            {url:"/images/noodles-icon.png", foodname:"面条"},
            {url:"/images/fen-icon.png", foodname:"粉条"},
            {url:"/images/bread.png", foodname:"面包"},
            {url:"/images/tusi.png", foodname:"吐司"},
            {url:"/images/dhs.png", foodname:"蛋黄酥"},
            {url:"/images/egg-icon.png", foodname:"鸡蛋"},
            {url:"/images/tomato-icon.png", foodname:"番茄"},
            {url:"/images/potato-icon.png", foodname:"土豆"},
            {url:"/images/yogurt.png", foodname:"酸奶"},
            {url:"/images/salad.png", foodname:"沙拉"},
            {url:"/images/chicken-icon.png", foodname:"鸡肉"}
        ]
    },
    

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.setNavigationBarTitle({
            title: '首页'
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