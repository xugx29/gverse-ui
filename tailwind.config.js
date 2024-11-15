/* eslint-disable quotes */
// tailwind.config.js
/* eslint-disable import/no-extraneous-dependencies, global-require */
const plugin = require('tailwindcss/plugin')
// const round = require('lodash/round');
const selectorParser = require('postcss-selector-parser')

const oExtendColor = {
  primary: '#0d6efd', // 主要的
  secondary: '#6c757d', // 次要的
  tertiary: '#f8f9fa', // 第三级
  info: '#0dcaf0', // 消息
  warning: '#ffc107', // 警告
  danger: '#dc3545', // 危险
  error: '#dc3545', // 错误
  success: '#198754', // 成功
}

// 网站颜色
const appColor = {
  app: {
    blue: '#005BFF', // 蓝
    tintBlue: {
      60: 'rgba(0, 91, 255, 0.06)',
      90: 'rgba(0, 91, 255, 0.09)',
      100: 'rgba(0, 91, 255, 0.1)',
      900: 'rgba(0, 91, 255, 0.9)', // color: theme('colors.app.tintBlue.900');
    },
    green: '#2DA641',
    darkBlue: '#113367',
    red: '#FF0000',
    yellow: '#D09963',
    tintYellow: {
      100: 'rgba(255, 142, 66, 0.10)',
    },
    lightYellow: '#FF8A00',
    orange: {
      60: 'rgba(255, 122, 0, 0.06)',
      90: 'rgba(255, 122, 0, 0.09)',
      100: 'rgba(255, 122, 0, 0.10)',
    },
    gray: '#909090',
    light: '#F6F7F9',
    tintLight: '#F5F7FA',
  },
}

// 白色和黑色颜色百分比 text-black-85
const oWhiteBlackScaleColor = {
  'white-04': 'rgba(255, 255, 255, 0.04)',
  'white-05': 'rgba(255, 255, 255, 0.05)',
  'white-06': 'rgba(255, 255, 255, 0.06)',
  'white-1': 'rgba(255, 255, 255, 0.1)',
  'white-15': 'rgba(255, 255, 255, 0.15)',
  'white-25': 'rgba(255, 255, 255, 0.25)',
  'white-35': 'rgba(255, 255, 255, 0.35)',
  'white-45': 'rgba(255, 255, 255, 0.45)',
  'white-65': 'rgba(255, 255, 255, 0.65)',
  'white-85': 'rgba(255, 255, 255, 0.85)',
  'black-04': 'rgba(0, 0, 0, 0.04)',
  'black-05': 'rgba(0, 0, 0, 0.05)',
  'black-06': 'rgba(0, 0, 0, 0.06)',
  'black-1': 'rgba(0, 0, 0, 0.1)',
  'black-15': 'rgba(0, 0, 0, 0.15)',
  'black-25': 'rgba(0, 0, 0, 0.25)',
  'black-35': 'rgba(0, 0, 0, 0.35)',
  'black-45': 'rgba(0, 0, 0, 0.45)',
  'black-65': 'rgba(0, 0, 0, 0.65)',
  'black-85': 'rgba(0, 0, 0, 0.85)',
  'blue-85': 'rgba(0, 0, 0, 0.85)',
}
module.exports = {
  // 添加 wi- 前缀，防止和已有的 CSS 存在命名冲突（justify-start->wi-justify-start）
  // 如果通过 @layer 添加的自定义类不会增加这个前缀
  // prefix: 'wi-', // darkMode模式有冲突
  important: false,
  darkMode: 'class', // 模式[media（通过用户的操作系统进行控制），class （手动控制，HTML树中出现 dark类时起作用）]
  // 扫描（CSS 预处理器（如 SCSS，LESS）不支持扫描）
  content: {
    files: ['src/**/*.{vue,css,js}', 'public/**/*.html'],
  },
  // 对哪些基础类进行编译，如果不需要编译某个基础类那么设置为 false 这样可以减小最终构建出的tailWindi.css的文件体积
  corePlugins: {
    float: false,
    filter: false,
    blur: false,
    brightness: false,
    contrast: false,
    dropShadow: false,
    grayscale: false,
    hueRotate: false,
    invert: false,
    saturate: false,
    sepia: false,
    backdropFilter: false,
    backdropBlur: false,
    backdropBrightness: false,
    backdropContrast: false,
    backdropGrayscale: false,
    backdropHueRotate: false,
    backdropInvert: false,
    backdropOpacity: false,
    backdropSaturate: false,
    backdropSepia: false,
    transform: false,
    transformOrigin: false,
    scale: false,
    rotate: false,
    translate: false,
    skew: false,
    mixBlendMode: false,
    backgroundBlendMode: false,
    ringOffsetColor: false,
    ringOffsetWidth: false,
    ringOpacity: false,
    overscrollBehavior: false,
    objectPosition: false,
    objectFit: false,
    isolation: false,
    boxDecorationBreak: false,
    fontVariantNumeric: false,
    /* divideWidth: false,
    divideColor: false,
    divideOpacity: false,
    divideStyle: false, */
    ringWidth: false,
    ringColor: false,
    transitionProperty: false,
    transitionDuration: false,
    transitionTimingFunction: false,
    transitionDelay: false,
    animation: false,
    appearance: false,
    placeContent: false,
    placeItems: false,
    placeSelf: false,
    placeholderColor: false,
    placeholderOpacity: false,
    fontSmoothing: false,
    textTransform: false,
    textOpacity: false,
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production', // 生产环境启用优化剔除未使用的原子类，类似 Tree Shaking 功能
    content: ['./src/**/*.vue'],
    layers: ['base', 'components', 'utilities'],
    safelist: [], // 保留某些原子类不被剔除
  },
  // theme 选项用以定义颜色 colors、字体 fontFamily、间隔尺度 spacing、边框圆角大小 borderRadius、断点 screens 等与视觉相关的基础类
  theme: {
    // 直接在 theme 属性中设置的一级基础类会完全覆盖原有的预设基础类
    fontFamily: {
      sans: [
        'PingFang SC', // 苹果苹方字体-适应中文字符
        'Microsoft Yahei',
        'Helvetica',
        'Arial',
        'Hiragino Sans GB',
        'STHeiTi', // 华文黑体
        'sans-serif',
      ],
      // 第三方字体 font-pmzd
      MapBiaoTiHei: [
        'MapBiaoTiHei',
        'PingFang SC', // 苹果苹方字体-适应中文字符
        'Microsoft Yahei',
        'Helvetica',
        'Arial',
        'Hiragino Sans GB',
        'STHeiTi', // 华文黑体
        'sans-serif',
        '宋体',
      ],
    },
    // 在 theme 属性的 extend 属性下添加的基础类会以扩展添加新值的方式来添加自定义基础类
    extend: {
      backgroundImage: {
        'route-error-bg': "url('~@assets/images/error-page/bg.png')", // 路由异常页面背景图
        news_bg: "url('~@assets/images-webpack/news_bg.png')",
        policy_bg: "url('~@assets/images-webpack/policy_bg.png')",
        ability_bg: "url('~@assets/images-webpack/ability_bg.png')",
        abutment_bg: "url('~@assets/images-webpack/abutment_bg.png')",
        appeal_bg: "url('~@assets/images-webpack/appeal_bg.png')",
        supply_item_bg: "url('~@assets/images-webpack/supply_item_bg.png')",
        home_bg: "url('~@assets/images-webpack/home_bg.png')",
        home_work_bg: "url('~@assets/images-webpack/home_work_bg.png')",
        home_ability_bg: "url('~@assets/images-webpack/home_ability_bg.png')",
        home_service_bg: "url('~@assets/images-webpack/home_service_bg.webp')",
        home_appeal_bg: "url('~@assets/images-webpack/home_appeal_bg.png')",
        home_policy_bg: "url('~@assets/images-webpack/home_policy_bg.png')",
        home_map_bg: "url('~@assets/images-webpack/home_map_bg.png')",
        home_personnel_bg: "url('~@assets/images-webpack/home_personnel_bg.png')",
        work_bg: "url('~@assets/images-webpack/work_bg.png')",
        service_bg: "url('~@assets/images-webpack/service_bg.png')",
        service_button_bg: "url('~@assets/images-webpack/button_bg.png')",
        global_top_bg: "url('~@assets/images-webpack/map_top.png')",
        global_map_bg: "url('~@assets/images-webpack/map_bg.png')",
        global_bottom_bg: "url('~@assets/images-webpack/map_bottom.png')",
        global_home_bg: "url('~@assets/images-webpack/global_pic.png')",
        hot_policy_bg: "url('~@assets/images-webpack/hot-policy-bg.png')",
        hot_zixun_bg: "url('~@assets/images-webpack/hot-zixun-bg.png')",
      },
      // color: theme('colors.c_blue');
      colors: {
        mainColor: '#F7F8F9', // 主要色值
        ...oWhiteBlackScaleColor,
        ...appColor,
      },
      // min-w-appPx
      minWidth: {
        appPx: '1300px', // 网站最小尺寸
      },
      // min-h-appPx
      minHeight: {
        appPx: '580px',
        tablePx: '160px',
      },
      // w-1280px
      width: {
        '6px': '6px',
        '9px': '9px',
        '18px': '18px',
        '24px': '24px',
        '26px': '26px',
        '40px': '40px',
        '48px': '48px',
        '100px': '100px',
        '1280px': '1280px',
        '1440px': '1440px',
        '180px': '180px',
        '200px': '200px',
        '240px': '240px',
        '260px': '260px',
        '400px': '400px',
        '440px': '440px',
        '600px': '600px',
      },
      // h-28px
      height: {
        '9px': '9px',
        '16px': '16px',
        '18px': '18px',
        '20px': '20px',
        '22px': '22px',
        '24px': '24px',
        '26px': '26px',
        '28px': '28px',
        '40px': '40px',
        '42px': '42px',
        '48px': '48px',
        '60px': '60px',
        '64px': '64px',
        '100px': '100px',
        '200px': '200px',
        '300px': '300px',
        '400px': '400px',
        '420px': '420px',
        '540px': '540px',
        '560px': '560px',
      },
      // 空白间距 m-10、p-10 更多间距请看 `static/plugins/css/white-space.css`
      spacing: {
        /* 4: '4px',
        8: '8px',
        10: '10px',
        12: '12px' */
      },
      // 行高 leading-none
      lineHeight: {
        none: 1, // 无行高
        close: 1.15, // 贴近
        tight: 1.25, // 紧凑
        normal: 1.5, // 常规
        near: 1.57, // 靠近
        relaxed: 1.7, // 宽松
        fall: 1.78,
      },
      // 文字尺寸，text-24px和!text-24px
      fontSize: {
        h1Px: ['20px', '28px'], // h1标题-行高1.4
        h2Px: ['18px', '24px'], // h2标题-行高1.333
        h3Px: ['16px', '24px'], // h3标题-行高1.5
        h4Px: ['14px', '24px'], // h4标题-行高1.714
        h5Px: ['13px', '22px'], // h5标题-行高1.69
        h6Px: ['12px', '20px'], // h6标题-行高1.66
        /* title14px: ['14px', '14px'], // div上的标题
        title16px: ['16px', '16px'],
        title18px: ['18px', '18px'] */
      },
      // 文字颜色，text-primary
      textColor: {
        ...oExtendColor,
        ...oWhiteBlackScaleColor,
        hTitleColor: '#131414', // h1、h2 标题颜色
      },
      // 背景颜色，bg-primary
      backgroundColor: {
        ...oExtendColor,
        ...oWhiteBlackScaleColor,
      },
      // background-size: 100% 100%; -> bg-100%
      backgroundSize: {
        '50%': '50% 50%',
        '100%': '100% 100%',
      },
      // 边框颜色，border-primary
      borderColor: {
        ...oExtendColor,
        ...oWhiteBlackScaleColor,
      },
      // divide-white-45
      divideColor: {
        ...oWhiteBlackScaleColor,
      },
      // 层级，z-popper
      zIndex: {
        normal: 1, // 正常层级
        top: 1000, // 高层级
        popper: 2000, // 顶级层级
        99: 99,
        100: 100,
      },
      // 边框圆角，rounded-4px
      borderRadius: {
        '1px': ['1px'],
        '2px': ['2px'], // 全局使用 2px 圆角
        '4px': ['4px'],
        '5px': ['5px'],
        '8px': ['8px'],
        '10px': ['10px'],
        '30px': ['30px'],
        circle: ['50%'],
      },
      // 盒阴影，shadow-base
      boxShadow: {
        base: '0 1px 10px rgba(0, 0, 0, 5%), 0 4px 5px rgba(0, 0, 0, 8%), 0 2px 4px -1px rgba(0, 0, 0, 12%)', // 基础投影
        middle:
          '0 3px 14px 2px rgba(0, 0, 0, 5%), 0 8px 10px 1px rgba(0, 0, 0, 6%), 0 5px 5px -3px rgba(0, 0, 0, 10%)', // 中层投影
        top: '0 6px 30px 5px rgba(0, 0, 0, 5%), 0 16px 24px 2px rgba(0, 0, 0, 4%), 0 8px 10px -5px rgba(0, 0, 0, 8%)', // 上层投影
        tint: 'rgb(0 0 0 / 10%) 0px 2px 12px 0px', // 浅色阴影
        header: '0px 2px 10px 0px rgba(0, 61, 120, 0.50)', // 头部阴影
        sidebar: '0px 2px 30px 0px rgba(0, 50, 109, 0.15)', // 侧栏阴影
      },
      // `@tailwindcss/line-clamp` 插件默认为 1-6和none 如果想增加省略行数配置：
      // line-clamp-7
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10', // 省略10行
      },
      // m-0-auto，只能定义 margin 不能定义单个的属性：margin-left、margin-top 这种形式
      margin: {
        '0-auto': '0 auto',
      },
    },
    screens: {
      // 媒体属性-断点
      'app-md': { min: '1028px', max: '1600px' },
      'app-lg': '1601px', // 屏幕宽度不小于 1601px 时启用
    },
  },
  // 变体
  variants: {
    lineClamp: ['responsive', 'hover'], // line-clamp-3 hover:line-clamp-none
    // 扩展添加新值的方式来添加自定义基础类
    // https://v2.tailwindcss.com/docs/configuring-variants#default-variants-reference
    extend: {
      backgroundColor: ['active', 'disabled', 'elder', 'important'], // 让 background-color支持 active 变体、elder 长辈版变体：elder:bg-black
      height: ['responsive', 'hover'], // 让 height 支持 hover 变体
      fontSize: ['responsive', 'hover', 'elder'], // 让 fontSize 支持 hover 变体 `hover:text-xs`、elder 长辈版变体：elder:text20Px
      textColor: ['visited', 'first', 'elder', 'important'], // 让文字的color支持visited变体（a标签超链接） `visited:text-red-300`，让 color 支持!重要的前缀`!text-green-700`
      margin: ['responsive', 'last'], // , 'important'让margin支持 !mx-0
      padding: ['responsive', 'first'],
    },
  },
  plugins: [
    plugin(({ addBase }) => {
      const newBase = {
        'html,body': {
          width: '100%',
          height: '100%',
          wordBreak: 'break-all' /* 允许在单词内换行 */,
          wordWrap: 'break-word' /* 在长单词或 URL 地址内部进行换行 */,
          fontSize: '62.5%', // 1em=10px、1rem=10px，浏览器默认：1em=16px、1rem=16px 这里方便计算使用 62.5% 的比例 (10/16*100%)
        },
        body: {
          // padding: 0,
          margin: 0,
          // overflow: 'hidden',
          overflowX: 'auto',
          overflowY: 'hidden',
          lineHeight: 1.5, // 行高-1.5常规
          fontStyle: 'normal', // 默认
          fontWeight: 400,
          color: 'rgba(0, 0, 0, 0.85)',
          textAlign: 'left',
          textDecoration: 'none',
          listStyleType: 'none',
          backgroundColor: '#F5F7FA',
          outline: 0,
        },
      }
      // 注册全局base样式
      addBase(newBase)
    }),
    plugin(function ({ addUtilities }) {
      addUtilities(
        [
          {
            '.b1': {
              border: '1px solid blue',
              'box-sizing': 'border-box',
            },
            '.b2': {
              border: '1px solid black',
              'box-sizing': 'border-box',
            },
            '.b3': {
              border: '1px solid white',
              'box-sizing': 'border-box',
            },
            '.b4': {
              border: '1px solid yellow',
              'box-sizing': 'border-box',
            },
            '.b5': {
              border: '1px solid pink',
              'box-sizing': 'border-box',
            },
          },
        ],
        {
          variants: ['hover'], // 变体
        },
      )
    }),
    plugin(function ({ addUtilities }) {
      addUtilities(
        [
          {
            '.text12Px': {
              fontSize: '12px',
            },
            /* '.text12Rem': {
              fontSize: '0.625rem' // 12/(1920/100) = 0.625，如果没有明确手动设置html的fontSize属性那么使用上面`newBase`基础设置中的`fontSize: '62.5%'`
            }, */
            '.text13Px': {
              fontSize: '13px',
            },
            '.text14Px': {
              fontSize: '14px',
            },
            '.text16Px': {
              fontSize: '16px',
            },
            '.text15Px': {
              fontSize: '15px',
            },
            '.text17Px': {
              fontSize: '17px',
            },
            '.text18Px': {
              fontSize: '18px',
            },
            '.text20Px': {
              fontSize: '20px',
            },
            '.text22Px': {
              fontSize: '22px',
            },
            '.text24Px': {
              fontSize: '24px',
            },
            '.text26Px': {
              fontSize: '26px',
            },
            '.text28Px': {
              fontSize: '28px',
            },
            '.text30Px': {
              fontSize: '30px',
            },
            '.text32Px': {
              fontSize: '32px',
            },
            '.text34Px': {
              fontSize: '34px',
            },
            '.text56Px': {
              fontSize: '56px',
            },
          },
        ],
        {
          variants: ['responsive', 'elder', 'important'], // 变体
        },
      )
      addUtilities([
        {
          '.normal-400': {
            fontWeight: 400,
            fontStyle: 'normal',
            lineHeight: 1.5,
          },
          '.normal-none-400': {
            fontWeight: 400,
            fontStyle: 'normal',
            lineHeight: 1,
          },
          '.normal-relaxed-400': {
            fontWeight: 400,
            fontStyle: 'normal',
            lineHeight: 1.7,
          },
          '.normal-close-400': {
            fontWeight: 400,
            fontStyle: 'normal',
            lineHeight: 1.15,
          },
          '.normal-near-400': {
            fontWeight: 400,
            fontStyle: 'normal',
            lineHeight: 1.57,
          },
          '.normal-500': {
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: 1.5,
          },
          '.normal-relaxed-500': {
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: 1.7,
          },
          '.normal-600': {
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: 1.5,
          },
          '.normal-tight-600': {
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: 1.25,
          },
        },
      ])
    }),
    // eslint-disable-next-line no-unused-vars
    plugin(function ({ addUtilities }) {
      // 单独的 left、right、top和bottom 没有提供`theme`规则，需要如下方式定义：
      addUtilities(
        [
          {
            '.left10Px': {
              left: '10px',
            },
            '.left15Px': {
              left: '15px',
            },
            '.right10Px': {
              right: '10px',
            },
            '.right15Px': {
              right: '15px',
            },
            '.top10Px': {
              top: '10px',
            },
            '.top15Px': {
              top: '15px',
            },
            '.top100Px': {
              top: '100px',
            },
            '.bottom10Px': {
              bottom: '10px',
            },
            '.bottom15Px': {
              bottom: '15px',
            },
            '.bottom60Px': {
              bottom: '60px',
            },
          },
        ],
        {
          // variants: ['responsive', 'elder'] // 变体
        },
      )
      // 设置大于 30px 的内间距，30以内请使用 `[white-space.css](https://shucframe.yscredit.com/css/white-space/padding/)`
      addUtilities(
        [
          {
            '.mr40Px': {
              marginRight: '40px',
            },
            '.mb40Px': {
              marginBottom: '40px',
            },
            '.pt40Px': {
              paddingTop: '40px',
            },
            '.pt68Px': {
              paddingTop: '68px',
            },
            '.pt100Px': {
              paddingTop: '100px',
            },
            '.pb60Px': {
              paddingBottom: '60px',
            },
            '.pl40Px': {
              paddingLeft: '40px',
            },
            '.pr40Px': {
              paddingRight: '40px',
            },
          },
        ],
        {
          // variants: ['responsive', 'elder'] // 变体
          variants: ['first'],
        },
      )
    }),
    // [flex布局](https://shucframe.yscredit.com/css/flex/)
    plugin(function ({ addUtilities }) {
      // align-column、justify-start-stretch
      addUtilities({
        /* 主轴为垂直方向 */
        '.align-column': {
          display: 'flex',
          'flex-direction': 'column',
        },
        /* 主轴为水平方向 元素水平居左垂直占满整个容器的高度 */
        '.justify-start-stretch': {
          display: 'flex',
          'justify-content': 'flex-start',
        },
        /* 主轴为水平方向 元素水平居右垂直占满整个容器的高度 */
        '.justify-end-stretch': {
          display: 'flex',
          'justify-content': 'flex-end',
        },
        /* 主轴为水平方向 元素水平两端对齐垂直居中 */
        '.justify-between-center': {
          display: 'flex',
          'align-items': 'center',
          'justify-content': 'space-between',
        },
        /* 主轴为水平方向 元素水平间隔相等垂直居中 */
        '.justify-around-center': {
          display: 'flex',
          'align-items': 'center',
          'justify-content': 'space-around',
        },
        /* 主轴为水平方向 元素水平居右垂直居中 */
        '.justify-end-center': {
          display: 'flex',
          'align-items': 'center',
          'justify-content': 'flex-end',
        },
        /* 主轴为水平方向 元素垂直居中水平居左 */
        '.justify-start-center': {
          display: 'flex',
          'flex-direction': 'row',
          'align-items': 'center',
          'justify-content': 'flex-start',
        },
        /* 主轴为水平方向 元素垂直底部水平居左 */
        '.justify-start-end': {
          display: 'flex',
          'flex-direction': 'row',
          'align-items': 'flex-end',
          'justify-content': 'flex-start',
        },
        /* 主轴为水平方向 元素垂直第一行文字的基线对齐水平居中 */
        '.justify-center-baseline': {
          display: 'flex',
          'flex-direction': 'row',
          'align-items': 'baseline',
          'justify-content': 'center',
        },
        /* 主轴为水平方向 元素水平两端对齐垂直居中 */
        '.justify-center-between': {
          display: 'flex',
          'flex-direction': 'row',
          'align-items': 'center',
          'justify-content': 'space-between',
        },
        /* 主轴为水平方向 元素水平两端对齐垂直起点对齐 */
        '.justify-start-between': {
          display: 'flex',
          'flex-direction': 'row',
          'align-items': 'flex-start',
          'justify-content': 'space-between',
        },
        /* 主轴为垂直方向 元素垂直两端对齐水平占满整个容器的高度 */
        '.align-stretch-between': {
          display: 'flex',
          'flex-direction': 'column',
          'align-items': 'stretch',
          'justify-content': 'space-between',
        },
        /* 主轴为垂直方向 水平和垂直居中 */
        '.column-center': {
          display: 'flex',
          'flex-direction': 'column',
          'align-items': 'center',
          'justify-content': 'center',
        },
        /* 主轴为垂直方向 元素垂直起点对齐和水平居中 */
        '.align-center-start': {
          display: 'flex',
          'flex-direction': 'column',
          'align-items': 'center',
          'justify-content': 'flex-start',
        },
        /* 主轴为垂直方向 元素垂直起点对齐和水平左对齐 */
        '.align-start-start': {
          display: 'flex',
          'flex-direction': 'column',
          'align-items': 'flex-start',
          'justify-content': 'flex-start',
        },
        /* 主轴为水平方向 水平垂直居中 */
        '.row-center': {
          display: 'flex',
          'align-items': 'center',
          'justify-content': 'center',
        },
        /* 水平垂直居中 */
        '.center': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate3d(-50%, -50%, 0)',
        },
      })
    }),
    plugin(function ({ addVariant, e }) {
      // first-child变体插件，first-child:text-yellow-300
      /*
        <div>
          <span class="block sc-pv2 text14Px normal-400 first-child:text-yellow-300"></span>
        </div>
      */
      addVariant('first-child', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`first-child${separator}${className}`)}:first-child`
        })
      })
    }),
    plugin(function ({ addVariant, prefix, theme }) {
      // 长辈版变体模式
      const darkSelector = theme('elderSelector', '.elder')
      addVariant('elder', ({ modifySelectors, separator }) => {
        modifySelectors(({ selector }) => {
          return selectorParser((selectors) => {
            selectors.walkClasses((sel) => {
              // eslint-disable-next-line no-param-reassign
              sel.value = `elder${separator}${sel.value}`
              sel.parent.insertBefore(
                sel,
                selectorParser().astSync(prefix(`${darkSelector} `)), // 需要一个空格
              )
            })
          }).processSync(selector)
        })
      })
    }),
    // https://www.npmjs.com/package/@tailwindcss/line-clamp
    require('@tailwindcss/line-clamp'), // line-clamp-2 文字超出省略...
    require('tailwindcss-important')(), // 复合属性使用!无效（`!row-center`），有效：!text-green-700
  ],
}
