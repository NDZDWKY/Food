// packageC/pages/imformation/imformation.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        person:{
            height:'',
            weight:'',
            bmi:'0'
        }
        

    },
   updateValue:function(event){
       var that =this
    let name=event.currentTarget.dataset.name;
    let person=that.data.person
    person[name]=event.detail.value
    that.setData({
        person:person
    })
    console.log(person);
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