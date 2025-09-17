/**
统一分类opensource
网站：
github
baidu.com
谷歌
具体按照以下样式生成，使用“JavaScript风格格式+单引号”，不要添加"icon字段"和"[]""      
      {
      id: 'github',
      title: 'GitHub',
      description: '全球最大的开源代码托管平台，支持 Git 版本控制，适用于协作开发、项目管理和自动化工作流，是开发者共享与协作的核心工具。'
      shortDesc: '代码托管平台。',
      url: 'https://github.com/',
      category: 'opensource',
      },
描述根据网站实际内容,专业,准确,介绍背景独特优势等等,不要太刻板,臃肿,重复
自动下载图标脚本执行:
npx tsx icon-system/0icon.ts
*/
/**
 * 网站分类列表
 * @type {Array<{id: string, name: string, icon: string}>}
 */
export const categories = [
  {
    id: 'tool',
    name: '工具', icon: '/icons/category/tool.svg',
  },
  {
    id: 'opensource',
    name: '开源平台', icon: '/icons/category/opensource.svg',
  },
  {
    id: 'source',
    name: '资源', icon: '/icons/category/source.svg',
  },
  {
    id: 'forum',
    name: '论坛', icon: '/icons/category/forum.svg',
  },  
  {
    id: 'weather',
    name: '天气', icon: '/icons/category/weather.svg',
  },
  {
    id: 'Studying',
    name: '个人其他站点', icon: '/icons/category/studying.svg',
  },
  {
    id: 'pages',
    name: '静态部署平台', icon: '/icons/category/pages.svg',
  },
  {
    id: 'ai',
    name: 'AI', icon: '/icons/category/ai.svg', 
  },
];
/**
 * 网站列表
 * @type {Array<{id: string, title: string, description: string, shortDesc: string, url: string, icon: string, category: string}>}
 */
export const sites = [
  //工具      
      {
      id: 'speedtest',
      title: 'Speedtest® by Ookla',
      description: '全球最受信赖的网络性能测试服务，依托 16 000+ 分布式服务器一键测量下载/上传带宽与延迟，并汇聚 520 亿次测试数据，为运营商、媒体及科研机构提供权威宽带统计与诊断。',
      shortDesc: '网络测速工具。',
      url: 'https://www.speedtest.net/',
      category: 'tool',
      icon: '/icons/speedtest.webp',
      },
      {
      id: 'ustc_test',
      title: 'USTC 测速站',
      description: '中国科学技术大学网络空间安全学院部署的双栈（IPv4/IPv6）测速平台，开源透明，可快速获取本地网络延迟、抖动与上下行带宽，并提供多所高校节点互测入口，方便学术网络环境评估。',
      shortDesc: '中科大本地测速。',
      url: 'https://test.ustc.edu.cn/',
      category: 'tool',
      icon: '/icons/ustc-test.webp',
      },
      {
      id: 'freeconvert',
      title: 'FreeConvert',
      description: '云端文件转换平台，支持 2 000+ 种音视频、图片、文档、电子书与压缩格式互转，采用 SSL/TLS 加密与隔离数据中心保障隐私，可处理数 GB 大文件，并提供批量与 API 自动化接口。',
      shortDesc: '全格式云转换。',
      url: 'https://www.freeconvert.com/',
      category: 'tool',
      icon: '/icons/freeconvert.webp',
      },
      {
      id: 'convertio',
      title: 'Convertio',
      description: '覆盖 300+ 格式的在线转换服务，全部运算在浏览器端完成，上传即转、自动删源文件；支持拖拽、多文件并行及 Chrome 插件，界面简洁、上手零门槛。',
      shortDesc: '轻量文件转换。',
      url: 'https://convertio.co/',
      category: 'tool',
      icon: '/icons/convertio.webp',
      },
      {
      id: 'remove_bg',
      title: 'remove.bg',
      description: '基于深度学习的图片背景移除工具，5 秒内自动抠图并输出透明 PNG，可一键替换背景或批量处理；提供桌面端、PS 插件与 API 方便电商、设计等场景集成。',
      shortDesc: 'AI 抠图神器。',
      url: 'https://www.remove.bg/',
      category: 'tool',
      icon: '/icons/remove-bg.webp',
      },
      {
      id: 'xiaohongshu_day',
      title: 'Xiaohongshu.day',
      description: '小红书内容解析与无水印下载站，粘贴链接即可批量保存笔记图片、视频与 LivePhoto，永久有效、无需登录，适合运营与素材备份。',
      shortDesc: '小红书去水印。',
      url: 'https://xiaohongshu.day/',
      category: 'tool',
      icon: '/icons/xiaohongshu-day.webp',
      },
      {
      id: 'chaipip',
      title: 'ChaiPiIP',
      description: '基于百度高精度 IP 库的定位查询服务，可精确到街道 / 商圈级别，实时刷新并展示多源 IP 数据，适合风控、运维和广告定向。',
      shortDesc: '高精度 IP 查询。',
      url: 'https://www.chaipip.com/',
      category: 'tool',
      icon: '/icons/chaipip.webp',
      },
      {
      id: 'qq_browser_tools',
      title: '帮小忙工具箱',
      description: '腾讯 QQ 浏览器推出的在线工具集合，囊括证件照生成、PDF 转换、文字 OCR、照片修复与二维码生成等百余实用小工具，一站式解决办公与生活琐事。',
      shortDesc: 'QQ 浏览器工具集。',
      url: 'https://tool.browser.qq.com/',
      category: 'tool',
      icon: '/icons/qq-browser-tools.webp',
      },      
      {
      id: 'mihoyonb',
      title: 'MihoyonB',
      description: '一个聚合类在线工具站点，提供常用网页工具、资源导航和快捷入口，帮助用户快速找到所需功能和服务，提升效率。',
      shortDesc: '在线工具导航。',
      url: 'https://mihoyonb.com',
      category: 'tool',
      icon: '/icons/mihoyonb.webp',
      },      
      {
      id: 'kdown_moiu_cn',
      title: 'KDown',
      description: '百度网盘在线解析工具，支持高速下载文件，是一种绕过下载限制、提升云存储文件获取速度的网络辅助服务。',
      shortDesc: '百度网盘解析下载工具。',
      url: 'https://kdown.moiu.cn',
      category: 'tool',
      icon: '/icons/kdown-moiu-cn.webp',
      },
      {
      id: 'bdbdjx_top',
      title: 'Vite App (bdbdjx.top)',
      description: '基于 Vite 的前端应用界面，可能提供某类在线工具或实用功能，虽然具体用途未公开，但其形式与工具服务特性更为接近。',
      shortDesc: '前端应用／工具界面。',
      url: 'https://bdbdjx.top/',
      category: 'tool',
      icon: '/icons/bdbdjx-top.webp',
      },
      {
      id: 'analysis_icy6_cn',
      title: 'Analysis.iCY6.cn',
      description: '疑似在线解析或分析服务，当前访问返回错误，功能不完全明确，但从域名与“analysis”关键词看似属于工具类服务。',
      shortDesc: '在线解析／分析服务（工具）。',
      url: 'https://analysis.icy6.cn',
      category: 'tool',
      icon: '/icons/analysis-icy6-cn.webp',
      },
      {
      id: 'snapany',
      title: 'SnapAny',
      description: '一款多功能在线下载工具，支持从 YouTube、Facebook、Twitter、Instagram 等各大平台获取视频与音频资源。无需安装软件即可快速解析链接，操作简洁高效，适合跨平台内容收集与存档使用。',
      shortDesc: '在线视频音频下载工具。',
      url: 'https://snapany.com/',
      category: 'tool',
      },
  //开源      
      {
      id: 'github',
      title: 'GitHub',
      description: '全球最大的开源代码托管平台，支持 Git 版本控制，适用于协作开发、项目管理和自动化工作流，是开发者共享与协作的核心工具。',
      shortDesc: '全球最大代码托管平台。',
      url: 'https://github.com/',
      category: 'opensource',
      icon: '/icons/github.webp',
      },
  //资源      
      {
      id: 'duanjugou',
      title: '短剧狗',
      description: '专注短剧资源的网盘引擎，聚合并去重 2.4 万+ 夸克链接，支持标签筛选与实时更新榜单，界面极简且无广告，适合“搜-即-看”的碎片化追剧场景。',
      shortDesc: '短剧网盘搜索。',
      url: 'https://duanjugou.top/',
      category: 'source',
      icon: '/icons/duanjugou.webp',
      },
      {
      id: '1lou',
      title: 'BT之家·1LOU站',
      description: '影视 BT 资源社区，由经典 BTBTT 迁移重建，秉持“回归初心·追求极简”，免注册浏览海量电影、剧集、动漫及纪录片种子，并提供 4K—1080P 画质分级与活跃讨论区。',
      shortDesc: '影视 BT 社区。',
      url: 'https://www.1lou.me/',
      category: 'source',
      icon: '/icons/1lou.webp',
      },
      {
      id: 'shukui',
      title: '书葵网',
      description: '开放式图书检索与下载平台，整合主库/从库双索引，支持 ISBN、作者与出版社精准匹配，涵盖图书、期刊与古籍等多种载体。',
      shortDesc: '海量图书检索。',
      url: 'https://www.shukui.net/',
      category: 'source',
      icon: '/icons/shukui.webp',
      },
      {
      id: 'zlibrary_cn',
      title: 'Z-Library 中文镜像',
      description: 'Z-Library 官方推出的中文访问页，整合桌面版、Android App、Telegram 机器人、浏览器扩展与 Tor 域等多种入口，并提供“神奇邮箱”账号找回与动态镜像更新，确保在多变网络环境下持续稳定连接全球最大免费数字图书馆。',
      shortDesc: 'Z-Library 中文入口。',
      url: 'https://zh.go-to-library.sk/',
      category: 'source',
      icon: '/icons/zlibrary-cn.webp',
      },      
      {
      id: 'wpzy',
      title: 'WP资源网',
      description: '专注于网络资源分享的网站，涵盖影视、学习资料、软件工具等多类资源，为用户提供便捷的下载与获取渠道。',
      shortDesc: '综合资源分享。',
      url: 'https://wpzy.cc/',
      category: 'source',
      icon: '/icons/wpzy.webp',
      },
      {
      id: 'kuafuzy',
      title: '夸父资源网',
      description: '聚合多领域数字资源的平台，涵盖影视、动漫、学习与娱乐资源，更新频率高，适合多元化需求用户。',
      shortDesc: '数字资源聚合。',
      url: 'https://www.kuafuzy.cc/',
      category: 'source',
      icon: '/icons/kuafuzy.webp',
      },      
      {
      id: 'huanmengacg_com',
      title: '幻萌ACG',
      description: '疑似 ACG（动画·漫画·游戏）内容源网站，提供动漫或相关视觉内容资源，是内容消费／下载的来源站点。',
      shortDesc: 'ACG 内容资源源站。',
      url: 'https://www.huanmengacg.com',
      category: 'source',
      icon: '/icons/category/source.svg',
      },
      {
      id: 'gdstudio-music',
      title: 'GDStudio Music',
      description: '一个面向音乐爱好者与创作者的在线音乐体验平台，提供高品质流媒体播放、精选曲库和个性化推荐，强调沉浸式的试听氛围与社区互动。它致力于让用户发现新声音，同时为独立音乐人提供展示与传播的舞台。',
      shortDesc: '在线音乐体验平台。',
      url: 'https://music.gdstudio.xyz/',
      category: 'source',
      },
  //论坛      
      {
      id: 'linux_do',
      title: 'LINUX DO',
      description: '致力于 Linux 与开源生态的邀请制技术社区，倡导真诚、友善与专业分享，汇聚容器部署、AI 服务、翻译 API 等实战干货，讨论高质量且反灌水氛围浓厚。',
      shortDesc: '邀请制 Linux 论坛。',
      url: 'https://linux.do/',
      category: 'forum',
      icon: '/icons/linux-do.webp',
      },
      {
      id: 'stackoverflow',
      title: 'Stack Overflow',
      description: '全球最大开发者问答社区，采用投票与声望机制沉淀 5 000 万+ 代码解决方案，覆盖 100 余种语言与框架，并提供 Teams 私有版与 Collectives 企业知识协作。',
      shortDesc: '开发者问答社区。',
      url: 'https://stackoverflow.com/',
      category: 'forum',
      icon: '/icons/stackoverflow.webp',
      },
      {
      id: 'nodeseek',
      title: 'NodeSeek',
      description: '面向极客的轻量论坛，以 Web 开发、VPS 运维与服务器托管为核心话题，聚合技术讨论、资源分享与工具评测，界面简洁、氛围宽松。',
      shortDesc: '极客技术论坛。',
      url: 'https://www.nodeseek.com/',
      category: 'forum',
      icon: '/icons/nodeseek.webp',
      },
      {
      id: 'v2ex',
      title: 'V2EX',
      description: '“way to explore” 的缩写，专注创意工作者与程序员的综合技术社区，节点制话题体系涵盖开发、职场与数码生活，强调探索精神与高质量讨论。',
      shortDesc: '综合技术社区。',
      url: 'https://www.v2ex.com/',
      category: 'forum',
      icon: '/icons/v2ex.webp',
      },
      {
      id: '52pojie',
      title: '吾爱破解',
      description: '国内知名逆向与软件安全论坛，深耕破解、补丁与反调试技术十余年，汇集原创教程、工具源码及 CTF 资源，并设悬赏问答与黑板报，聚集大量安全研究者。',
      shortDesc: '逆向安全论坛。',
      url: 'https://www.52pojie.cn/',
      category: 'forum',
      icon: '/icons/52pojie.webp',
      },
  //天气      
      {
      id: 'zoom_earth',
      title: 'Zoom Earth',
      description: '全球级实时卫星与雷达融合气象地图，集成 NOAA、EUMETSAT 等多源资料并按小时更新，可叠加台风路径、降水云系、林火热点与海温等 30 + 图层，支持过去 24 小时动画回放与链接分享，广泛用于追踪极端天气与科普教学。',
      shortDesc: '实时卫星气象图。',
      url: 'https://zoom.earth/',
      category: 'weather',
      icon: '/icons/zoom-earth.webp',
      },
      {
      id: 'windy',
      title: 'Windy.com',
      description: '交互式全球风场与天气图，整合 ECMWF、GFS、ICON 等多套数值模型并提供 50 + 图层，可切换等压面、波浪、空气质量与云顶高度；支持航线规划、离线模式与插件生态，是水陆空户外活动的专业气象利器。',
      shortDesc: '多模型风场地图。',
      url: 'http://windy.com/',
      category: 'weather',
      icon: '/icons/windy.webp',
      },
      {
      id: 'zj_typhoon',
      title: '浙江台风路径系统',
      description: '浙江省防指与气象部门共建的台风路径实时发布平台，汇聚中央气象台、香港天文台与 JTWC 预报，回溯 1949 年以来全部西北太平洋热带气旋轨迹，并展示风圈半径、强度等级与暴雨概率网格，为华东沿海防灾减灾提供决策支持。',
      shortDesc: '权威台风监测。',
      url: 'https://typhoon.slt.zj.gov.cn/',
      category: 'weather',
      icon: '/icons/zj-typhoon.webp',
      },
      {
      id: 'nmc',
      title: '中央气象台·NMC',
      description: '中央气象台官方门户，提供全国逐小时实况、7 日预报、台风海洋、环境气象与专业预警产品；整合 FY-4 卫星、全国雷达拼图与 CMA-GEPS 集合预报，并发布权威气象资讯与科研动态。',
      shortDesc: '国家级气象服务。',
      url: 'https://www.nmc.cn/',
      category: 'weather',
      icon: '/icons/nmc.webp',
      },
      {
      id: 'caiyun_h5',
      title: '彩云天气 H5',
      description: '基于分钟级降水 Nowcasting 算法，融合中国气象雷达回波与格点订正模型，精确预测未来 2 小时雨雪起止；支持空气质量、超分辨率雷达动画与推送通知，界面简洁友好，适合移动端快速查询。',
      shortDesc: '分钟级降水预报。',
      url: 'https://h5.caiyunapp.com/',
      category: 'weather',
      icon: '/icons/caiyun-h5.webp',
      },
      {
      id: 'weather_channel',
      title: 'Weather.com',
      description: 'The Weather Channel 官网，依托 IBM GRAF 全球 3 公里分辨率模型，提供 16 日趋势、互动雷达、飓风追踪与健康指数，并以新闻视频形式实时解读全球气象事件，用户量居同类网站前列。',
      shortDesc: 'TWC 全球天气门户。',
      url: 'https://weather.com/',
      category: 'weather',
      icon: '/icons/weather-channel.webp',
      },
  //个人其他站点      
      {
      id: 'gufei_blog',
      title: '顾の博客',
      description: '顾绯维护的原创博客，分享前端开发技巧、脚本实践、学习方法与生活随笔，并以时间线与热力图形式记录成长轨迹，内容真诚且富技术洞见。',
      shortDesc: '技术与生活随笔',
      url: 'https://blog.gufei.life/',
      category: 'Studying',
      icon: '/icons/gufei-blog.webp',
      },
      {
      id: 'gufei_animals',
      title: '猛兽派对动物分类',
      description: '根据猛兽派对游戏中动物特征进行分类的工具，用于快捷筛选游戏中任务所需的动物',
      shortDesc: '猛兽派对动物特征分类系统',
      url: 'https://animals.gufei.life/',
      category: 'Studying',
      icon: '/icons/gufei-animals.webp',
      },
      // pages      
      {
      id: 'github-pages',
      title: 'GitHub Pages',
      description: 'GitHub 提供的静态网站托管服务，支持自定义域名与 HTTPS，可直接从仓库部署，适合个人主页、项目文档与开源展示，集成 Git 工作流，极简且可靠。',
      shortDesc: 'Git 驱动的静态网站托管。',
      url: 'https://pages.github.com/',
      category: 'pages',
      icon: '/icons/github-pages.webp',
      },
      {
      id: 'cloudflare-pages',
      title: 'Cloudflare Pages',
      description: '由全球领先的 CDN 提供商 Cloudflare 推出的前端部署平台，支持 Jamstack 架构，内置构建优化、边缘函数与自动缓存更新，适合高性能 Web 应用与博客。',
      shortDesc: 'CDN 优化的前端部署平台。',
      url: 'https://pages.cloudflare.com/',
      category: 'pages',
      icon: '/icons/cloudflare-pages.webp',
      },
      {
      id: 'vercel',
      title: 'Vercel',
      description: '专为前端开发打造的现代部署平台，由 Next.js 背后团队开发，支持 Serverless 架构、实时预览与多分支部署，适合敏捷开发、商业级应用与个性化项目。',
      shortDesc: 'Next.js 团队出品的部署平台。',
      url: 'https://vercel.com/',
      category: 'pages',
      icon: '/icons/vercel.webp',
      },
  //个人其他站点      
      {
      id: 'plusai',
      title: 'PlusAI',
      description: '一个提供AI大模型交互体验的平台，支持多领域智能问答、写作与办公辅助，界面简洁，响应快速。',
      shortDesc: 'AI交互平台。',
      url: 'https://cc01.plusai.io/',
      category: 'ai',
      icon: '/icons/plusai.webp',
      },
      {
      id: 'aigcbest',
      title: 'AiGC Best API',
      description: '聚合式AI API服务，提供文本生成、问答、对话等多种模型接口，适合开发者快速接入AI能力。',
      shortDesc: 'AI接口服务。',
      url: 'https://api.aigcbest.top/',
      category: 'ai',
      icon: '/icons/aigcbest.webp',
      },
      {
      id: 'gptgod',
      title: 'GPT God',
      description: '在线AI对话与应用平台，基于大语言模型，支持多场景应用如写作、编程、问答，定位为高效智能助手。',
      shortDesc: 'AI对话平台。',
      url: 'https://gptgod.online/',
      category: 'ai',
      icon: '/icons/gptgod.webp',
      },
      {
      id: 'bltcy',
      title: 'BLTCY AI',
      description: '提供稳定高效的AI接口服务，覆盖文本生成、智能对话和创作辅助，适合开发者与团队接入应用。',
      shortDesc: 'AI接口服务。',
      url: 'https://api.bltcy.ai/',
      category: 'ai',
      icon: '/icons/bltcy.webp',
      },
      {
      id: 'foxcode',
      title: 'FoxCode AI',
      description: '聚焦编程与开发辅助的AI平台，支持智能代码生成、调试与文档生成，面向开发者的效率工具。',
      shortDesc: 'AI代码助手。',
      url: 'https://foxcode.rjj.cc/',
      category: 'ai',
      icon: '/icons/foxcode.webp',
      },
];
/**
 * 搜索网站功能
 * @param {string} query - 搜索关键词
 * @returns {Array} - 符合条件的网站列表
 */
export function searchSites(query) {
  if (!query) return sites;
  const lowerQuery = query.toLowerCase();
  return sites.filter(site => {
    return (
      site.title.toLowerCase().includes(lowerQuery) ||
      site.url.toLowerCase().includes(lowerQuery) ||
      site.category.toLowerCase().includes(lowerQuery)
    );
  });
}
/**
 * 将网站数据转换为HTML标记
 * 允许直接在页面中嵌入HTML内容
 * @param {Array} sitesList - 要呈现的网站列表
 * @returns {string} - HTML标记字符串
 */
export function sitesToHtml(sitesList) {
  if (!sitesList || !sitesList.length) return '<p>没有找到符合条件的网站</p>';
  const html = sitesList.map(site => {
    // 转义HTML特殊字符以防止XSS攻击
    const safeTitle = escapeHtml(site.title);
    const safeDesc = escapeHtml(site.shortDesc || site.description);
    const safeUrl = escapeHtml(site.url);
    const safeIcon = escapeHtml(site.icon || '/images/default.svg');
    return `
      <div class="site-card" data-category="${site.category}">
        <a href="${safeUrl}" target="_blank" rel="noopener noreferrer">
          <div class="site-icon">
            <img src="${safeIcon}" alt="${safeTitle}" loading="lazy" onerror="this.src='/images/default.svg'">
          </div>
          <div class="site-info">
            <h3>${safeTitle}</h3>
            <p>${safeDesc}</p>
          </div>
        </a>
      </div>
    `;
  }).join('');
  return `<div class="sites-grid">${html}</div>`;
}
/**
 * 安全转义HTML特殊字符
 * 防止XSS攻击
 * @param {string} str - 需要转义的字符串
 * @returns {string} - 安全的HTML字符串
 */
function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
