/** Website 分类配置 */
const WEBSITE_SORTS: WebsiteSort[] = [
  {
    title: "开发使用",
    sites: [
      {
        title: "Docker Hub",
        description: "ILoveScratch 的 Docker Hub镜像",
        url: "https://docker.ilovescratch.dpdns.org",
        icon: "http://ilovescratch.dpdns.org/docker.jpg",
        color: "#0171CD",
      },
      {
        title: "Bing Wallpaper API",
        description: "必应壁纸API",
        url: "http://bingapi.ilovescratch.dpdns.org/",
        icon: "",
      },
      {
        title: "Proxy",
        description: "在线代理网站，仅学习使用",
        url: "http://proxy.ilovescratch.dpdns.org",
        icon: "",
      },
    ],
  },
  {
    title: "API",
    sites: [
      {
        title: "网易云音乐API",
        description: "ILoveScratch 部署的NeteaseCloudMusicAPI",
        url: "https://neteasemusic.ilovescratch.dpdns.org/",
        icon: "http://ilovescratch.dpdns.org/docker.jpg",
        color: "#0171CD",
      },
      {
        title: "Bing Wallpaper API",
        description: "必应壁纸API",
        url: "http://bingapi.ilovescratch.dpdns.org/",
        icon: "",
      },
    ],
  },
  {
    title: "示例分类5",
  },
  {
    title: "其他链接",
    sites: [
      {
        title: "ILS Blog",
        description: "ILoveScratch 的博客",
        url: "https://blog.ilovescratch.dpdns.org",
        icon: "https://avatars.githubusercontent.com/u/161606492?v=4",
      },
    ],
  },
];

/** Website 配置（2023.3.29 已废弃） */
const WEBSITE_ITEMS: WebsiteItem[] = [];

const GLOBAL_CONFIG = {
  /**
   * 博客名称
   */
  BLOG_NAME: "ILoveScratch Index",
  /**
   * 个人博客链接
   */
  BLOG_URL: "https://blog.ilovescratch.dpdns.org",
  /**
   * 指定中心 LOGO 图片地址
   */
  LOGO_URL: "https://avatars.githubusercontent.com/u/161606492?v=4",
  /**
   * 个人 Github 链接
   */
  GITHUB_URL: "https://github.com/ILoveScratch2",
  /**
   * 背景图片地址
   */
  BACKGROUND_IMG_URL: "https://bing-api.ilovescratch.dpdns.org",
  /**
   * ICP 备案号，留空不显示
   */
  ICP: "POWERED BY NETLIFY",
  ICP_URL: "https://netlify.com/",
  FOOTER_INFO: true,
  /**
   * 网站欢迎标语
   */
  SLOGANS: [
    "欢迎拜访",
    "歡迎拜訪",
    "Welcome, my friend!",
    "訪問へようこそ",
    "嗨，别来无恙",
    "不忘初心，一生浪漫",
    "最近还好吗？",
    "流星，落花，萤火",
    "马车越空，晃荡越响",
    "Welcome To my index!",
  ],
  /**
   * Website 分类配置
   */
  WEBSITE_SORTS,
  /**
   * Website 配置（2023.3.29 已废弃）
   */
  WEBSITE_ITEMS,
  /**
   * 网站 Title Keywords Description 的配置，用于 SEO
   */
  TKD: {
    title: "ILoveScratch Selfhosted Index",
    keywords: "Blog, Index, Index Page, ilovescratch, ILoveScratch2, Selfhosted, 自部署, 博客",
    description: "这是ILoveScratch部署的免费公共服务列表!",
  },
};

export default GLOBAL_CONFIG;
