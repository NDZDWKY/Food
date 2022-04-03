// packageA/pages/fruits/fruits.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        pomelosrc:"https://s2.loli.net/2022/03/13/gFzKisnVtNeQYhP.png",
        strawberrysrc:"https://s2.loli.net/2022/03/13/LBUl1qwKxHjWYae.png",
        pineapplesrc:"https://s2.loli.net/2022/03/13/1CFL4Rg2WcVfnSo.png",
        guavasrc:"https://s2.loli.net/2022/03/13/jXo1T497aRQ8MUS.png",
        blackcurrantsrc:"https://s2.loli.net/2022/03/13/4Jye9qzvjblTHsB.png",
        jackfruitsrc:"https://s2.loli.net/2022/03/13/VjBASIWw78sFEkK.png",
        longansrc:"https://s2.loli.net/2022/03/13/tUuyCIF87fTz9K1.png",
        waxsrc:"https://s2.loli.net/2022/03/13/XUIaLsQro4xuGY8.png",
        rambutansrc:"https://s2.loli.net/2022/03/13/zGcvPJliu8yCman.png",
        jujubesrc:"https://s2.loli.net/2022/03/13/TpuBKWhXVlqxQUL.png",
        plumsrc:"https://s2.loli.net/2022/03/13/B7Cvq4JmQSKIfkU.png",
        pearsrc:"https://s2.loli.net/2022/03/13/SeGTLZ1DbaHjqAl.png",
        orangesrc:"https://s2.loli.net/2022/03/13/eJzCZSuH14mpiGk.png",
        lotusseedsrc:"https://s2.loli.net/2022/03/13/tkPs3p8iVS4RYyo.png",
        hmgrapesrc:"https://s2.loli.net/2022/03/13/XB1vZ7xl26cektV.png",
        mangosrc:"https://s2.loli.net/2022/03/13/OFc8CbrP4e5uAGQ.png",
        aloesrc:"https://s2.loli.net/2022/03/13/wNhV8pDuKHYjQMS.png",
        pitayasrc:"https://s2.loli.net/2022/03/13/ugwNMxzIVPA4SQK.png",
        litchisrc:"https://s2.loli.net/2022/03/13/NGQCum8SecByW3I.png",
        ginsengsrc:"https://s2.loli.net/2022/03/13/cVhPrpJWkXOxSR8.png",
        papayasrc:"https://s2.loli.net/2022/03/13/sNZgBAOE29QImUz.png",
        loquatsrc:"https://s2.loli.net/2022/03/13/tO9Sgq2xbJYXnjZ.png",
        applesrc:"https://s2.loli.net/2022/03/13/2msvWfV4YDgGX9U.png",
        kiwisrc:"https://s2.loli.net/2022/03/13/zAWjXmVUlt6Sf87.png",
        grapesrc:"https://s2.loli.net/2022/03/13/37rS1ouWl8Y2VTw.png",
        mulberrysrc:"https://s2.loli.net/2022/03/13/BuAIwS8GzCPbY5r.png",
        hippophaesrc:"https://s2.loli.net/2022/03/13/uVsnzWtjo9OEkPI.png",
        hawthornsrc:"https://s2.loli.net/2022/03/13/rnAT3xjQf4b6s9u.png",
        snakefruitsrc:"https://s2.loli.net/2022/03/13/5KBYELQcGiT4ZuM.png",
        figsrc:"https://s2.loli.net/2022/03/13/YuJFOSoEeBryIbP.png",
        granadasrc:"https://s2.loli.net/2022/03/13/PmYkHyuG1sEQXlN.png",
        ximeisrc:"https://s2.loli.net/2022/03/13/3JzSdAPBnkeQYRC.png",
        seedlesssrc:"https://s2.loli.net/2022/03/13/GDloh5RkPnvacQT.png",
        persimmonsrc:"https://s2.loli.net/2022/03/13/S4N9DuMlPrnRkbA.png",
        muskmelonsrc:"https://s2.loli.net/2022/03/13/Val9Z2KbktTGWjR.png",
        yellowmeatsrc:"https://s2.loli.net/2022/03/13/umZpEykV1FlhivH.png",
        watermelonsrc:"https://s2.loli.net/2022/03/13/gAtWiXBr86yRulQ.png",
        grapefruitsrc:"https://s2.loli.net/2022/03/13/kWlIcBzon3FZTEJ.png",
        bananasrc:"https://s2.loli.net/2022/03/13/jifNrS32dvWsIeA.png",
        carambolasrc:"https://s2.loli.net/2022/03/13/kpjT5Vdry3YPFW1.png",
        apricotsrc:"https://s2.loli.net/2022/03/13/lYSMsdyFUoukBmx.png",
        bayberrysrc:"https://s2.loli.net/2022/03/13/SfOXR1JeKgpymDG.png",
        coconutsrc:"https://s2.loli.net/2022/03/13/cmavsJYMGeCxkgU.png",
        cherrysrc:"https://s2.loli.net/2022/03/13/yE7LJkwnSg3dt15.png"
     },

    gotopomelo(){
        wx.navigateTo({
            url: '/packageA_H/pages/pomelo/pomelo',
          })
    },

    gotostrawberry(){
        wx.navigateTo({
            url: '/packageA_H/pages/strawberry/strawberry',
          })
    },

    gotopineapple(){
        wx.navigateTo({
            url: '/packageA_H/pages/pineapple/pineapple',
          })
    },

    gotoguava(){
        wx.navigateTo({
            url: '/packageA_H/pages/guava/guava',
          })
    },

    gotoblackcurrant(){
        wx.navigateTo({
            url: '/packageA_H/pages/blackcurrant/blackcurrant',
          })
    },

    gotojackfruit(){
        wx.navigateTo({
            url: '/packageA_H/pages/jackfruit/jackfruit',
          })
    },

    gotolongan(){
        wx.navigateTo({
            url: '/packageA_H/pages/longan/longan',
          })
    },

    gotowax(){
        wx.navigateTo({
            url: '/packageA_H/pages/wax/wax',
          })
    },

    gotorambutan(){
        wx.navigateTo({
            url: '/packageA_H/pages/rambutan/rambutan',
          })
    },

    gotojujuben(){
        wx.navigateTo({
            url: '/packageA_H/pages/jujube/jujube',
          })
    },

    gotoplum(){
        wx.navigateTo({
            url: '/packageA_H/pages/plum/plum',
          })
    },

    gotopear(){
        wx.navigateTo({
            url: '/packageA_H/pages/pear/pear',
          })
    },

    gotoorange(){
        wx.navigateTo({
            url: '/packageA_H/pages/orange/orange',
          })
    },

    gotolotusseede(){
        wx.navigateTo({
            url: '/packageA_H/pages/lotusseed/lotusseed',
          })
    },

    gotohmgrape(){
        wx.navigateTo({
            url: '/packageA_H/pages/hmgrape/hmgrape',
          })
    },

    gotomango(){
        wx.navigateTo({
            url: '/packageA_H/pages/mango/mango',
          })
    },

    gotoaloe(){
        wx.navigateTo({
            url: '/packageA_H/pages/aloe/aloe',
          })
    },

    gotopitaya(){
        wx.navigateTo({
            url: '/packageA_H/pages/pitaya/pitaya',
          })
    },

    gotolitchi(){
        wx.navigateTo({
            url: '/packageA_H/pages/litchi/litchi',
          })
    },

    gotoginseng(){
        wx.navigateTo({
            url: '/packageA_H/pages/ginseng/ginseng',
          })
    },

    gotopapaya(){
        wx.navigateTo({
            url: '/packageA_H/pages/papaya/papaya',
          })
    },

    gotoloquat(){
        wx.navigateTo({
            url: '/packageA_H/pages/loquat/loquat',
          })
    },

    gotoapple(){
        wx.navigateTo({
            url: '/packageA_H/pages/apple/apple',
          })
    },

    gotokiwi(){
        wx.navigateTo({
            url: '/packageA_H/pages/kiwi/kiwi',
          })
    },

    gotogrape(){
        wx.navigateTo({
            url: '/packageA_H/pages/grape/grape',
          })
    },

    gotomulberry(){
        wx.navigateTo({
            url: '/packageA_H/pages/mulberry/mulberry',
          })
    },

    gotohippophae(){
        wx.navigateTo({
            url: '/packageA_H/pages/hippophae/hippophae',
          })
    },

    gotohawthorn(){
        wx.navigateTo({
            url: '/packageA_H/pages/hawthorn/hawthorn',
          })
    },

    gotosnakefruit(){
        wx.navigateTo({
            url: '/packageA_H/pages/snakefruit/snakefruit',
          })
    },

    gotofig(){
        wx.navigateTo({
            url: '/packageA_H/pages/fig/fig',
          })
    },

    gotogranada(){
        wx.navigateTo({
            url: '/packageA_H/pages/granada/granada',
          })
    },

    gotoximei(){
        wx.navigateTo({
            url: '/packageA_H/pages/ximei/ximei',
          })
    },

    gotoseedless(){
        wx.navigateTo({
            url: '/packageA_H/pages/seedless/seedless',
          })
    },

    gotopersimmon(){
        wx.navigateTo({
            url: '/packageA_H/pages/persimmon/persimmon',
          })
    },

    gotomuskmelon(){
        wx.navigateTo({
            url: '/packageA_H/pages/muskmelon/muskmelon',
          })
    },

    gotoyellowmeat(){
        wx.navigateTo({
            url: '/packageA_H/pages/yellowmeat/yellowmeat',
          })
    },

    gotowatermelon(){
        wx.navigateTo({
            url: '/packageA_H/pages/watermelon/watermelon',
          })
    },

    gotograpefruit(){
        wx.navigateTo({
            url: '/packageA_H/pages/grapefruit/grapefruit',
          })
    },

    gotobanana(){
        wx.navigateTo({
            url: '/packageA_H/pages/banana/banana',
          })
    },

    gotocarambola(){
        wx.navigateTo({
            url: '/packageA_H/pages/carambola/carambola',
          })
    },

    gotoapricot(){
        wx.navigateTo({
            url: '/packageA_H/pages/apricot/apricot',
          })
    },

    gotobayberry(){
        wx.navigateTo({
            url: '/packageA_H/pages/bayberry/bayberry',
          })
    },

    gotococonut(){
        wx.navigateTo({
            url: '/packageA_H/pages/coconut/coconut',
          })
    },

    gotocherry(){
        wx.navigateTo({
            url: '/packageA_H/pages/cherry/cherry',
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