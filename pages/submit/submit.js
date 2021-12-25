// pages/submit/submit.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        area:["兴庆校区-宪梓堂","雁塔校区-生活区","雁塔校区-教学区体育部"],
        area_index:0,
        time:["小于5分钟","10分钟","20分钟","30分钟","45分钟","约1小时","大于1小时","暂未开放","暂停检测","已结束"],
        time_index:0,
        place:["1","2","3","4","5","6","7","8","9","10","11","12","13"],
        place_index:0,
        submitted:0
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

    },

    presubmit:function(){
      var that = this;
      wx.showModal({
        title:'确认提交',
        content:'提交信息无法删除，请您再三确认。'
        +'\n【校区】：' +that.data.area[that.data.area_index]
        +'\n【位置】：' +that.data.place[that.data.place_index]
        +'\n【时间】：' +that.data.time[that.data.time_index]
        +'',
        success(res){
          if(res.confirm)that.submit();
        }
      })
    },

    submit: function(){
        var that = this
        console.log(that.data.submitted)
        if(that.data.submitted == 1)return;
        else{
        that.setData({
            submitted:1
        })
        wx.request({
          url: 'https://qc37rv.api.cloudendpoint.cn/submit',
          method:'POST',
          data:{
              place: Number(that.data.area_index)+Number(1),
              point: that.data.place[that.data.place_index],
              remark: that.data.time[that.data.time_index],
          },
          success(res){
              console.log(res)
              wx.showToast({
                title: '成功',
                icon:'success',
                duration: 1000,
              })
              setTimeout(() => {
                wx.reLaunch({
                  url: '/pages/map/map',
                })
              }, 1000);
          }
        })
    }
    },
    bindAreaChange: function(e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
    area_index: e.detail.value
    })
    },

    bindTimeChange:function(e){
    this.setData({
    time_index:e.detail.value
    })
    },

    bindPlaceChange:function(e){
    this.setData({
    place_index:e.detail.value
    })
    }
})
