// pages/explain/explain.js
var WxParse = require('../../wxParse/wxParse.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        
    },

    first_select: function() {
        wx.navigateBack({
          delta: 1,
        })
    },
  
    second_select: function() {
        wx.navigateTo({
          url: '/pages/submit/submit'
        })
    },
  
    third_select: function() {
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
    /**
    * WxParse.wxParse(bindName , type, data, target,imagePadding)
    * 1.bindName绑定的数据名(必填)
    * 2.type可以为html或者md(必填)
    * 3.data为传入的具体数据(必填)
    * 4.target为Page对象,一般为this(必填)
    * 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
    */
   
    var that = this;
    // wx.request({
    //   url: 'https://qc37rv.api.cloudendpoint.cn/getnotice',
    //   method:'GET',
    //   success(res){
    //       console.log(res.data.artical)
    //       that.setData({
    //           article : res.data.artical
    //       })
    //   }
    // })
    // },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    },
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        // while(!this.article);
        var article = "<h3>\
        <strong>开发者说：</strong>\
    </h3>\
    为了解决大家当前核酸检测排队久、信息不畅通的问题,我们联合弘康运动社开发了本小程序，希望能够减少聚集，帮助大家减少大家无谓的排队时间，请各位同学错峰检测，做好自身防护，戴好口罩，按当日校医院安排的时间和要求有序检测，并带好相关物件（如学生卡、一码通）。<br />\
    让我们齐心协力，共克时艰，共同期待寒冬结束的那一天~<br />\
    <p>\
        祝各位同学一切顺利！\
    </p>\
    <br />\
    <br />\
    <p>\
    </p>\
    <div style=\"text-align:right;\"> \
        西交helper开发组\
    </div>\
    <div style=\"text-align:right;\"> \
    西安交通大学弘康运动社\
</div>\
    <div style=\"text-align:right;\">\
        2021年12月\
    </div>\
    <br />\
    <br />\
    <br />\
    <br />\    <br />\    <br />\
    <p>\
        遇到问题？加QQ群反馈：810580226 \
        <br />\
        【点击复制】\
    </p>\
    <br />\
    "
        var that = this;
        WxParse.wxParse('article', 'html', article, that, 5);
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

    },
    copy: function(){
        wx.setClipboardData({
          data: '810580226', 
          success: function () {
              // 添加下面的代码可以复写复制成功默认提示文本`内容已复制` 
            wx.showToast({
              title: '已复制群号，打开qq加入',
              duration: 3000,
              icon:'none'
            })
          }
        })
    },
})