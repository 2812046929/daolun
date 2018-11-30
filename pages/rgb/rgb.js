var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    R1:0,
    G1:0,
    B1:0,
    R2:0,
    G2:0,
    B:0,
    R3:0,
    G3:0,
    B3:0,
    jiage1:4,
    jiage2:2,
    jiage3:3,
    sum:0
  },
  accout: function () {
    var that=this
   // this.setData({
        this.data.R1=app.globalData.R.datapoints[0].value,
        this.data.G1=app.globalData.G.datapoints[0].value,
        this.data.B1=app.globalData.B.datapoints[0].value,
        this.data.R2=app.globalData.R.datapoints[1].value,
        this.data.G2=app.globalData.G.datapoints[1].value,
        this.data.B2=app.globalData.B.datapoints[1].value,
        this.data.R3=app.globalData.R.datapoints[2].value,
        this.data.G3=app.globalData.G.datapoints[2].value,
        this.data.B3=app.globalData.B.datapoints[2].value

 // })
    this.setData({
      R1: this.data.R1,
      R2: this.data.R2,
      R3: this.data.R3,
      G1: this.data.G1,
      G2: this.data.G2,
      G3: this.data.G3,
      B1: this.data.B1,
      B2: this.data.B2,
      B3: this.data.B3,

    })

 
    },
    sumGet: function ()
    {
      var that = this
      that.setData({
      sum: parseInt([(this.data.R1 + 256) / (this.data.B1 + 256)]) * parseInt([(this.data.R1 + 256) / (this.data.G1 + 256)]) * this.data.jiage1 + parseInt([(this.data.B1 + 256) / (this.data.G1 + 256)]) * parseInt([(this.data.B1 + 256) / (this.data.R1 + 256)]) * this.data.jiage3 + parseInt([(this.data.G1 + 256) / (this.data.B1 + 256)]) * parseInt([(this.data.G1 + 256) / (this.data.R1 + 256)]) * this.data.jiage2
          + parseInt([(this.data.R2 + 256) / (this.data.B2 + 256)]) * parseInt([(this.data.R2 + 256) / (this.data.G2 + 256)]) * this.data.jiage1 + parseInt([(this.data.B2 + 256) / (this.data.G2 + 256)]) * parseInt([(this.data.B2 + 256) / (this.data.R2 + 256)]) * this.data.jiage3 + parseInt([(this.data.G2 + 256) / (this.data.B2 + 256)]) * parseInt([(this.data.G2 + 256) / (this.data.R2 + 256)]) * this.data.jiage2 + parseInt([(this.data.R3 + 256) / (this.data.B3 + 256)]) * parseInt([(this.data.R3 + 256) / (this.data.G3 + 256)]) * this.data.jiage1 + parseInt([(this.data.B3 + 256) / (this.data.G3 + 256)]) * parseInt([(this.data.B3 + 256) / (this.data.R3 + 256)]) * this.data.jiage3 + parseInt([(this.data.G3 + 256) / (this.data.B3 + 256)]) * parseInt([(this.data.G3 + 256) / (this.data.R3 + 256)]) * this.data.jiage2
      
  })
   
    },

  click: function () {
    wx.scanCode({
      success(res) {
        console.log(res)
      }
    })
  },
   
    

 onLoad: function (options) 
  {},

    //this.setData({
      //R: app.globalData.R.datapoints[0].value,
     // G: app.globalData.G.datapoints[0].value,
     // B: app.globalData.B.datapoints[0].value,})},
   
    
   // })

  
  
  
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