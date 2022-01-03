// pages/map/map.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list:[],
        type:1,
        area:{"1":'兴庆校区-宪梓堂', "2":'雁塔校区-生活区',"3":'雁塔校区-505体育馆',"4":'兴庆校区-体育中心','5':'雁塔校区-西区活动中心'},
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.get_data();
    },

    get_data:function(){
      var that = this;
        wx.request({
          url: 'https://qc37rv.api.cloudendpoint.cn/getdata',
          method:'GET',
          data:{
            place:that.data.type,
          },
          success(res){
            console.log(res.data)
            that.setData({
                list : res.data.list
            })
            wx.hideLoading()
            wx.stopPullDownRefresh()
            wx.showToast({
              title: '已更新~',
              icon:'none',
              duration:1000
            })
          }
        })
    },

    first_select: function() {
    },
  
    second_select: function() {
        wx.navigateTo({
          url: '/pages/submit/submit'
        })
    },
  
    third_select: function() {
      wx.navigateTo({
        url: '/pages/explain/explain'
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
      this.get_data();

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
    change_area:function(){
      var that = this;
      wx.showActionSheet({
        itemList: ['兴庆校区-宪梓堂', '雁塔校区-生活区','雁塔校区-505体育馆','兴庆校区-体育中心','雁塔校区-西区活动中心'],
        success(res){
          that.setData({
            type:res.tapIndex+1,
          },()=>{
            that.get_data();
          })
        }
      },
      )
    }
})