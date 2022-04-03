// packageA/pages/vegetables/vegetables.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        swordbeansrc:"https://s2.loli.net/2022/03/09/8eJGHWT7ktpXROK.png",
        lyciumsrc:"https://s2.loli.net/2022/03/09/mujXFz7Ioi9CsHt.png",
        cabmustardsrc:"https://s2.loli.net/2022/03/09/oUPhFvVxnq5b6J4.png",
        latifoliasrc:"https://s2.loli.net/2022/03/09/1pRYft6qhQgdukC.png",
        chiehquasrc:"https://s2.loli.net/2022/03/09/ybmQ17jpDKXowPV.png",
        garlicsrc:"https://s2.loli.net/2022/03/09/EWdRaQKFmLgUAHh.png",
        wintercoldsrc:"https://s2.loli.net/2022/03/09/9e6NE2Ba1FTblpW.png",
        wintershootssrc:"https://s2.loli.net/2022/03/09/WxbG18AhU4gnuwd.png",
        beansproutssrc:"https://s2.loli.net/2022/03/09/lr9BaV4qwDoPFng.png",
        lotusrootsrc:"https://s2.loli.net/2022/03/09/wlFUc3jdn8oXvZ2.png",
        longdousrc:"https://s2.loli.net/2022/03/09/2Nuogl67D4mrqiv.png",
        maodousrc:"https://s2.loli.net/2022/03/09/d9BGr3P1NaOq5mE.png",
        okrasrc:"https://s2.loli.net/2022/03/09/m89RCTor1HVDxid.png",
        towelgourdsrc:"https://s2.loli.net/2022/03/09/awHyZ4O7lNirQ1S.png",
        daylilysrc:"https://s2.loli.net/2022/03/09/H9EY28FJPawbOus.png",
        driedmushroomsrc:"https://s2.loli.net/2022/03/09/1izHmVFNOWuZEx6.png",
        lingnutsrc:"https://s2.loli.net/2022/03/09/NQTfwjtFcUXGPHz.png",
        fungussrc:"https://s2.loli.net/2022/03/09/csqrbxCZpEwNUD8.png",
        luffasrc:"https://s2.loli.net/2022/03/09/w4cZQXv6RO2rsTE.png",
        peasrc:"https://s2.loli.net/2022/03/09/penUKcAYN5R8dIu.png",
        edibleamsrc:"https://s2.loli.net/2022/03/09/1pWscnxKSmQJ4t3.png",
        broccolisrc:"https://s2.loli.net/2022/03/09/vRpeQ2AKDJGWwhV.png",
        chaxingusrc:"https://s2.loli.net/2022/03/13/GqergElDwWuUidf.png",
        arecatarosrc:"https://s2.loli.net/2022/03/13/iGDyb4aU6xRYVIW.png",
        whitegourdsrc:"https://s2.loli.net/2022/03/13/mcTtGjuLbkiQMd3.png",
        bigcabbagesrc:"https://s2.loli.net/2022/03/13/MxFXirGjD9WKhB1.png",
        spinachsrc:"https://s2.loli.net/2022/03/13/xoqivWX2UwgrZlp.png",
        beanssrc:"https://s2.loli.net/2022/03/13/Yb7BVkDjNwniQeT.png",
        tomatosrc:"https://s2.loli.net/2022/03/13/Z3JYQqMenI4t2xf.png",
        carrotsrc:"https://s2.loli.net/2022/03/13/du8tHAQnLCkclXZ.png",
        kelpsrc:"https://s2.loli.net/2022/03/13/NRXBLJM4Cr6jtxb.png",
        fennelsrc:"https://s2.loli.net/2022/03/13/tjNqIRXOBHsyYSZ.png",
        shepursesrc:"https://s2.loli.net/2022/03/13/3QmGXRvlacsN5Dt.png",
        cauliflowersrc:"https://s2.loli.net/2022/03/13/Q3LBcbvlgWtdXF7.png",
        lawyerwingsrc:"https://s2.loli.net/2022/03/13/DicSjM73mKeQ4ok.png",
        cucumbersrc:"https://s2.loli.net/2022/03/13/goEU1GBXqrfOm6t.png",
        herinaceussrc:"https://s2.loli.net/2022/03/13/kbUD7KmyVX2HniN.png",
        waterspinachsrc:"https://s2.loli.net/2022/03/13/xmcE7jLZNySIfHV.png",
        pumpkinsrc:"https://s2.loli.net/2022/03/13/gvhdn3TxEqING2p.png",
        needlesrc:"https://s2.loli.net/2022/03/13/SXV3TY21iRCn8Ba.png",
        celerysrc:"https://s2.loli.net/2022/03/13/GFXVAfY5zp3aCWq.png",
        leeksrc:"https://s2.loli.net/2022/03/13/npP1MrLKGa52woU.png",
        balsampearsrc:"https://s2.loli.net/2022/03/13/g38ENwo7ThVPnsJ.png",
        eggplantsrc:"https://s2.loli.net/2022/03/13/fdVCbL9AkUPoKth.png",
        peppersrc:"https://s2.loli.net/2022/03/13/MXEtHbq3rRCxmf6.png",
        oystermushroomsrc:"https://s2.loli.net/2022/03/13/GV1ITm9FKUXChcj.png",
        greenpeppersrc:"https://s2.loli.net/2022/03/13/QYApwFMXyn8JxDs.png",
        greenpapayasrc:"https://s2.loli.net/2022/03/13/YnINKJ6DqpWdAT1.png",
        annuasrc:"https://s2.loli.net/2022/03/13/yEkX7WpgmfiZb3T.png",
        beetrootsrc:"https://s2.loli.net/2022/03/13/Nn2sTPeUJfx9QpW.png",
        lettucesrc:"https://s2.loli.net/2022/03/13/I1aV724PgblAxYs.png",
        toonasrc:"https://s2.loli.net/2022/03/13/gvMSnLEG9p3eCYR.png",
        squashsrc:"https://s2.loli.net/2022/03/13/3mVb7aEp541uFtB.png",
        xiangusrc:"https://s2.loli.net/2022/03/13/mbl4MunvN8UtVo7.png",
        shallotsrc:"https://s2.loli.net/2022/03/13/DySjN9628ib4Yn7.png",
        coriandersrc:"https://s2.loli.net/2022/03/13/qGBSUd7X5yJmFuW.png",
        xinradishsrc:"https://s2.loli.net/2022/03/13/mD4VnTgFEdQ1B68.png",
        sauerkrautsrc:"https://s2.loli.net/2022/03/13/xHTDafb3QPOUq8w.png",
        tremellasrc:"https://s2.loli.net/2022/03/13/ZGEx4ldi6z3T7WK.png",
        xinbaogusrc:"https://s2.loli.net/2022/03/13/fIQa8niEmXwT9DN.png",
        dictyophorasrc:"https://s2.loli.net/2022/03/13/jR1qNArYMoJDX73.png",
        norlsrc:"https://s2.loli.net/2022/03/13/Uzwojn29tV4aT6C.png",
        cordatasrc:"https://s2.loli.net/2022/03/13/1W42GQNkRfrsMn3.png",
        morelsrc:"https://s2.loli.net/2022/03/13/xZHV9LCtRYWbQfF.png",
        elmseedssrc:"https://s2.loli.net/2022/03/13/OURoAdTqVhejibX.png",
        tarosrc:"https://s2.loli.net/2022/03/13/lqCnSD4mXjdbEfp.png"
    },

    gotoswordbean(){
        wx.navigateTo({
            url: '/packageA_A_A/pages/swordbean/swordbean',
          })
    },

    gotolycium(){
        wx.navigateTo({
            url: '/packageA_A_A/pages/lycium/lycium',
          })
    },

    gotocabmustard(){
        wx.navigateTo({
            url: '/packageA_A_A/pages/cabmustard/cabmustard',
          })
    },

    gotolatifolia(){
        wx.navigateTo({
            url: '/packageA_A_A/pages/latifolia/latifolia',
          })
    },

    gotochiehqua(){
        wx.navigateTo({
            url: '/packageA_A_A/pages/chiehqua/chiehqua',
          })
    },

    gotogarlic(){
        wx.navigateTo({
            url: '/packageA_A_A/pages/garlic/garlic',
          })
    },

    gotowintercold(){
        wx.navigateTo({
            url: '/packageA_A_A/pages/wintercold/wintercold',
          })
    },

    gotowintershoots(){
        wx.navigateTo({
            url: '/packageA_A_A/pages/wintershoots/wintershoots',
          })
    },

    gotobeansprouts(){
        wx.navigateTo({
            url: '/packageA_A_A/pages/beansprouts/beansprouts',
          })
    },

    gotolongdou(){
        wx.navigateTo({
            url: '/packageA_A_A/pages/longdou/longdou',
          })
    },

    gotomaodou(){
        wx.navigateTo({
            url: '/packageA_A_A/pages/maodou/maodou',
          })
    },

    gotookra(){
        wx.navigateTo({
            url: '/packageA_A_A/pages/okra/okra',
          })
    },

    gototowelgourd(){
        wx.navigateTo({
            url: '/packageA_A_A/pages/towelgourd/towelgourd',
          })
    },

    gotodaylily(){
        wx.navigateTo({
            url: '/packageA_A_A/pages/daylily/daylily',
          })
    },

    gotodriedmushroom(){
        wx.navigateTo({
            url: '/packageA_A_A/pages/driedmushroom/driedmushroom',
          })
    },

    gotolingnut(){
        wx.navigateTo({
            url: '/packageA_A_A/pages/lingnut/lingnut',
          })
    },

    gotofungus(){
        wx.navigateTo({
            url: '/packageA_A_A/pages/fungus/fungus',
          })
    },

    gotoluffas(){
        wx.navigateTo({
            url: '/packageA_A_A/pages/luffa/luffa',
          })
    },

    gotopea(){
        wx.navigateTo({
            url: '/packageA_A_A/pages/pea/pea',
          })
    },

    gotoedibleam(){
        wx.navigateTo({
            url: '/packageA_A_A/pages/edibleam/edibleam',
          })
    },

    gotobroccoli(){
        wx.navigateTo({
            url: '/packageA_A_A/pages/broccoli/broccoli',
          })
    },

    gotochaxingu(){
        wx.navigateTo({
            url: '/packageA_A_A/pages/chaxingu/chaxingu',
          })
    },

    gotoarecataro(){
        wx.navigateTo({
            url: '/packageA_A_A/pages/arecataro/arecataro',
          })
    },
    
    gotowhitegourd(){
        wx.navigateTo({
            url: '/packageA_A_A/pages/whitegourd/whitegourd',
          })
    },

    gotobigcabbage(){
        wx.navigateTo({
            url: '/packageA_A_A/pages/bigcabbage/bigcabbage',
          })
    },

    gotospinach(){
        wx.navigateTo({
            url: '/packageA_A_A/pages/spinach/spinach',
          })
    },

    gotobeans(){
        wx.navigateTo({
            url: '/packageA_A_A/pages/beans/beans',
          })
    },

    gototomato(){
        wx.navigateTo({
            url: '/packageA_A_A/pages/tomato/tomato',
          })
    },

    gotocarrot(){
        wx.navigateTo({
            url: '/packageA_A_A/pages/carrot/carrot',
          })
    },

    gotokelp(){
        wx.navigateTo({
            url: '/packageA_A_A/pages/kelp/kelp',
          })
    },

    gotofennel(){
        wx.navigateTo({
            url: '/packageA_A_A/pages/fennel/fennel',
          })
    },

    gotoshepurse(){
        wx.navigateTo({
            url: '/packageA_A_A/pages/shepurse/shepurse',
          })
    },

    gotocauliflower(){
        wx.navigateTo({
            url: '/packageA_A_B/pages/cauliflower/cauliflower',
          })
    },

    gotolawyerwing(){
        wx.navigateTo({
            url: '/packageA_A_B/pages/lawyerwing/lawyerwing',
          })
    },

    gotocucumber(){
        wx.navigateTo({
            url: '/packageA_A_B/pages/cucumber/cucumber',
          })
    },

    gotoherinaceus(){
        wx.navigateTo({
            url: '/packageA_A_B/pages/herinaceus/herinaceus',
          })
    },

    gotowaterspinach(){
        wx.navigateTo({
            url: '/packageA_A_B/pages/waterspinach/waterspinach',
          })
    },

    gotopumpkin(){
        wx.navigateTo({
            url: '/packageA_A_B/pages/pumpkin/pumpkin',
          })
    },

    gotoneedle(){
        wx.navigateTo({
            url: '/packageA_A_B/pages/needle/needle',
          })
    },

    gotocelery(){
        wx.navigateTo({
            url: '/packageA_A_B/pages/celery/celery',
          })
    },

    gotoleek(){
        wx.navigateTo({
            url: '/packageA_A_B/pages/leek/leek',
          })
    },

    gotobalsampear(){
        wx.navigateTo({
            url: '/packageA_A_B/pages/balsampear/balsampear',
          })
    },

    gotoeggplant(){
        wx.navigateTo({
            url: '/packageA_A_B/pages/eggplant/eggplant',
          })
    },

    gotopepper(){
        wx.navigateTo({
            url: '/packageA_A_B/pages/pepper/pepper',
          })
    },

    gotooystermushroom(){
        wx.navigateTo({
            url: '/packageA_A_B/pages/oystermushroom/oystermushroom',
          })
    },

    gotogreenpepper(){
        wx.navigateTo({
            url: '/packageA_A_B/pages/greenpepper/greenpepper',
          })
    },

    gotogreenpapaya(){
        wx.navigateTo({
            url: '/packageA_A_B/pages/greenpapaya/greenpapaya',
          })
    },

    gotoannua(){
        wx.navigateTo({
            url: '/packageA_A_B/pages/annua/annua',
          })
    },

    gotobeetroot(){
        wx.navigateTo({
            url: '/packageA_A_B/pages/beetroot/beetroot',
          })
    },

    gotolettuce(){
        wx.navigateTo({
            url: '/packageA_A_B/pages/lettuce/lettuce',
          })
    },

    gototoona(){
        wx.navigateTo({
            url: '/packageA_A_B/pages/toona/toona',
          })
    },

    gotosquash(){
        wx.navigateTo({
            url: '/packageA_A_B/pages/squash/squash',
          })
    },

    gotoxiangu(){
        wx.navigateTo({
            url: '/packageA_A_B/pages/xiangu/xiangu',
          })
    },

    gotoshallot(){
        wx.navigateTo({
            url: '/packageA_A_B/pages/shallot/shallot',
          })
    },

    gotocoriander(){
        wx.navigateTo({
            url: '/packageA_A_B/pages/coriander/coriander',
          })
    },

    gotoxinradish(){
        wx.navigateTo({
            url: '/packageA_A_B/pages/xinradish/xinradish',
          })
    },

    gotosauerkraut(){
        wx.navigateTo({
            url: '/packageA_A_B/pages/sauerkraut/sauerkraut',
          })
    },

    gototremella(){
        wx.navigateTo({
            url: '/packageA_A_B/pages/tremella/tremella',
          })
    },

    gotoxinbaogu(){
        wx.navigateTo({
            url: '/packageA_A_B/pages/xinbaogu/xinbaogu',
          })
    },

    gotodictyophorau(){
        wx.navigateTo({
            url: '/packageA_A_B/pages/dictyophora/dictyophora',
          })
    },

    gotonorl(){
        wx.navigateTo({
            url: '/packageA_A_B/pages/norl/norl',
          })
    },

    gotocordata(){
        wx.navigateTo({
            url: '/packageA_A_B/pages/cordata/cordata',
          })
    },

    gotomorel(){
        wx.navigateTo({
            url: '/packageA_A_B/pages/morel/morel',
          })
    },

    gotoelmseeds(){
        wx.navigateTo({
            url: '/packageA_A_B/pages/elmseeds/elmseeds',
          })
    },

    gototaro(){
        wx.navigateTo({
            url: '/packageA_A_B/pages/taro/taro',
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