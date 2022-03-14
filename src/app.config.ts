export default {
  pages: [
    "pages/calculator/index",
    "pages/calculator/monthly-payments/index",
    "pages/calculator/history/index",
    "pages/product/index"
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: "#9c9d9e",
    selectedColor: "#0089ff",
    backgroundColor: "#24292F",
    borderStyle: "black",
    custom: false,
    list: [
      {
        pagePath: "pages/calculator/index",
        text: "计算器",
        iconPath: "assets/images/yz_prop_icon_arrow.png",
        selectedIconPath: "assets/images/yz_prop_icon_arrow.png"
      },
      {
        pagePath: "pages/product/index",
        text: "工作台",
        iconPath: "assets/images/yz_prop_icon_arrow.png",
        selectedIconPath: "assets/images/yz_prop_icon_arrow.png"
      },
      {
        pagePath: "pages/calculator/index",
        text: "产品信息",
        iconPath: "assets/images/yz_prop_icon_arrow.png",
        selectedIconPath: "assets/images/yz_prop_icon_arrow.png"
      }
    ]
  },
};
