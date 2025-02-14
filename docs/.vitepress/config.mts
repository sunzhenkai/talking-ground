import { defineConfig } from 'vitepress'

var ROOT_VRITUALIZATION_TECHNOLOGY = '/notes/computer science/virtualization technology'
var ROOT_ENGINEERING_ARCHITECTURE = '/notes/computer science/engineering architecture'

// 链接
const LINKS = {
  text: '链接',
  items: [
    { text: '灵犀', link: 'https://exploring.fun' },
    { text: '博客', link: 'https://wii.pub' },
    { text: 'github', link: 'https://github.com/sunzhenkai' }
  ]
}
// 快捷访问
const QUICK_ACCESS = {
  text: '快速访问',
  collapsed: true,
  items: [
    {
      text: '常用工具',
      collapased: false,
      items: [
        {
          text: 'vim',
          link: '/notes/tools/vim/tips'
        }, 
        {
          text: 'tmux',
          link: '/notes/tools/tmux/usage'
        }, 
        {
          text: 'linux',
          link: '/notes/computer science/linux/notes/usage'
        }, 
        {
          text: 'sed',
          link: '/notes/computer science/linux/program/sed'
        }, 
        {
          text: 'awk',
          link: '/notes/computer science/linux/program/awk'
        }, 
        {
          text: 'docker',
          link: '/notes/computer science/virtualization technology/docker/usage'
        }
      ]
    },   
    {
      text: '编程基础',
      collapased: false,
      items: [
        {
          text: 'shell',
          link: '/notes/basic programming/shell/basic'
        },
        {
          text: 'git',
          link: '/notes/tools/git/usage'
        }, 
        {
          text: 'cmake',
          link: '/notes/tools/cmake/usage'
        }
      ]
    }
  ]
}
// 我
const ME = {
  text: '我',
  collapsed: true,
  items: [
    {
      text: '关于',
      link: '/notes/about'
    },
    {
      text: '分享',
      link: '/notes/others/share/other',
      collapsed: true,
      items: [
        {
          text: '图书',
          link: '/notes/others/share/books'
        },
        {
          text: '音乐',
          link: '/notes/others/share/musics'
        },
        {
          text: '电影',
          link: '/notes/others/share/movies'
        },
        {
          text: '电视',
          link: '/notes/others/share/tvs'
        },
        {
          text: '其他',
          collapsed: true,
          items: [
            {
              text: '行车安全',
              link: '/notes/others/share/car-drive'
            },
            {
              text: '车载好物',
              link: '/notes/others/share/car-goods'
            },
            {
              text: '避坑',
              link: '/notes/others/share/warn'
            }
          ]
        }
      ]
    },
    {
      ...LINKS,
      collapsed: true
    }
  ]
}
// 折腾日记
const PLAY = {
  text: '折腾日记',
  collapsed: true,
  items: [
    {
      text: '开发机',
      collapsed: true,
      items: [
        { text: '组装', link: '/notes/play/server/assembly' },
        {
          text: 'Openstack', collapsed: true, items: [
            { text: '安装', link: '/notes/computer science/computing/openstack/openstack' },
            { text: '配置多存储设备', link: '/notes/computer science/computing/openstack/multiple-backends' },
            { text: 'Trouble Shooting', link: '/notes/computer science/computing/openstack/problems' },
          ]
        },
        {
          text: 'Data Science', collapsed: true, link: '/notes/play/server/data science/datascience', items: [
            { text: '文档', link: 'https://github.com/sunzhenkai/containers/tree/master/datascience' },
            { text: '访问', link: '/notes/play/server/data science/links' },
          ]
        }
      ]
    },
    {
      text: '树莓派',
      link: '/notes/play/rpi/config',
      collapsed: true,
      items: [
        { text: 'gpio', link: '/notes/play/rpi/gpio' },
        { text: '库', link: '/notes/play/rpi/librarys' },
        { text: '硬件', link: '/notes/play/rpi/hardware' },
        { text: '连接游戏手柄', link: '/notes/play/rpi/gamepad' },
      ]
    },
    {
      text: '路由器',
      collapsed: true,
      items: [
        { text: '华硕', link: 'notes/play/router/ausu' },
        { text: 'Netgear', link: 'notes/play/router/netgear' },
        { text: 'Openwrt', link: 'notes/play/router/openwrt' },
        { text: '软路由', link: 'notes/play/router/soft-router' },
      ]
    },
    {
      text: '黑苹果',
      link: '/notes/play/os x/black apple',
      collapsed: true,
      items: [
        { text: '安装', link: '/notes/play/os x/install' },
      ]
    },
    {
      text: 'All In One',
      collapsed: true,
      items: [
        {
          text: 'Unraid', link: '/notes/play/unraid/usage', collapsed: true, items: [
            {
              text: 'docker',
              link: '/notes/play/unraid/dockers'
            }
          ]
        }
      ]
    }
  ]
}
// 工具
const TOOLS = {
  text: '工具',
  collapsed: true,
  items: [
    {
      text: 'bazel',
      collapsed: true,
      items: [
        { text: '安装', link: '/notes/tools/bazel/bazel' },
        { text: '依赖', link: '/notes/tools/bazel/deps' },
        { text: '使用', link: '/notes/tools/bazel/usage' }
      ]
    },
    {
      text: 'brew',
      collapsed: true,
      items: [
        { text: '使用', link: '/notes/tools/brew/usage' },
        { text: 'Ubuntu', link: '/notes/tools/brew/ubuntu-brew' },
      ]
    },
    {
      text: 'charles',
      collapsed: true,
      items: [
        { text: '使用', link: '/notes/tools/charles/usage' },
      ]
    },
    {
      text: 'cmake',
      collapsed: true,
      items: [
        { text: '安装', link: '/notes/tools/cmake/startup' },
        { text: '使用', link: '/notes/tools/cmake/usage' },
        { text: '标记', link: '/notes/tools/cmake/flags' },
        { text: '库', link: '/notes/tools/cmake/libraries' },
        { text: '使用', link: '/notes/tools/cmake/example' },
      ]
    },
    {
      text: 'emacs',
      collapsed: true,
      items: [
        { text: '使用', link: '/notes/tools/emacs/usage' },
      ]
    },
    {
      text: 'git',
      collapsed: true,
      items: [
        { text: '使用', link: '/notes/tools/git/usage' },
        { text: 'gitignore', link: '/notes/tools/git/gitignore' },
      ]
    },
    {
      text: 'htop',
      collapsed: true,
      items: [
        { text: '使用', link: '/notes/tools/htop/usage' },
      ]
    },
    {
      text: 'iterm2',
      collapsed: true,
      items: [
        { text: '使用', link: '/notes/tools/iterm2/iterm2' },
      ]
    },
    {
      text: 'jetbrains',
      collapsed: true,
      items: [
        { text: '使用', link: '/notes/tools/jetbrains/idea' },
      ]
    },
    {
      text: 'mac',
      collapsed: true,
      items: [
        { text: '使用', link: '/notes/tools/mac/tips' },
        { text: '软件', link: '/notes/tools/mac/software' },
      ]
    },
    {
      text: 'make',
      collapsed: true,
      items: [
        { text: '使用', link: '/notes/tools/make/usage' },
      ]
    },
    {
      text: 'markdown',
      collapsed: true,
      items: [
        { text: '使用', link: '/notes/tools/markdown/usage' },
      ]
    },
    {
      text: 'maven',
      collapsed: true,
      items: [
        { text: '介绍', link: '/notes/tools/maven/maven' },
        { text: '使用', link: '/notes/tools/maven/usage' },
        { text: '设置', link: '/notes/tools/maven/settings' },
        { text: '插件', link: '/notes/tools/maven/plugins' },
        { text: '项目', link: '/notes/tools/maven/project' },
        { text: 'pom', link: '/notes/tools/maven/pom' },
        { text: 'pom 示例', link: '/notes/tools/maven/pom-example' },
        { text: '常用依赖', link: '/notes/tools/maven/dependencies' },
      ]
    },
    {
      text: 'plantuml',
      collapsed: true,
      items: [
        { text: '介绍', link: '/notes/tools/plantuml/setup' },
        { text: '类图', link: '/notes/tools/plantuml/classdiagram' },
      ]
    },
    {
      text: 'hexo',
      collapsed: true,
      items: [
        { text: '使用', link: '/notes/tools/hexo/usage' },
      ]
    },
    {
      text: 'rsync',
      collapsed: true,
      items: [
        { text: '使用', link: '/notes/tools/rsync/rsync' },
      ]
    },
    {
      text: 'rustscan',
      collapsed: true,
      items: [
        { text: '使用', link: '/notes/tools/rustscan/usage' },
      ]
    },
    {
      text: 'sdkman',
      collapsed: true,
      items: [
        { text: '使用', link: '/notes/tools/sdkman/sdkman' },
      ]
    },
    {
      text: 'tmux',
      collapsed: true,
      items: [
        { text: '使用', link: '/notes/tools/tmux/usage' },
      ]
    },
    {
      text: 'typora',
      collapsed: true,
      items: [
        { text: '使用', link: '/notes/tools/typora/usage' },
      ]
    },
    {
      text: 'vim',
      collapsed: true,
      items: [
        { text: '使用', link: '/notes/tools/vim/usage' },
        { text: '技巧', link: '/notes/tools/vim/tips' },
        { text: '插件', link: '/notes/tools/vim/plugin' },
      ]
    },
    {
      text: 'vpn',
      collapsed: true,
      items: [
        { text: '使用', link: '/notes/tools/vpn/vpn' },
      ]
    },
    {
      text: 'visual studio code',
      collapsed: true,
      items: [
        { text: '使用', link: '/notes/tools/vs code/code-server' },
      ]
    },
    {
      text: 'wireguard',
      collapsed: true,
      items: [
        { text: '使用', link: '/notes/tools/wireguard/usage' },
      ]
    },
    {
      text: 'yed',
      collapsed: true,
      items: [
        { text: '使用', link: '/notes/tools/yed/yed' },
      ]
    },
    {
      text: 'zsh',
      collapsed: true,
      items: [
        { text: '安装', link: '/notes/tools/zsh/install' },
      ]
    },
  ]
}
// 研习录
const STUDY_RECORD = {
  text: '研习录',
  link: '/notes/study record/list',
  items: [
    {
      text: '基础',
      link: '/notes/study record/basic/index',
      collapsed: true,
      items: [
        {
          text: '计算机科学',
          link: '/notes/study record/basic/cs'
        },
        {
          text: '操作系统',
          link: '/notes/study record/basic/os'
        },
        {
          text: 'C++',
          link: '/notes/study record/basic/c++',
          collapsed: true,
          items: [
            {
              text: 'Socket 编程',
              link: '/notes/study record/basic/socket/overall'
            },
          ]
        },
      ]
    },
    {
      text: '英语',
      collapsed: true,
      items: [
        {
          text: '音标',
          link: '/notes/study record/english/phonetic-symbol'
        }
      ]
    },
    {
      text: '读书',
      collapsed: true,
      items: [
        {
          text: '技术',
          collapsed: true,
          items: [
            {
              text: '信息流广告入门',
              link: '/notes/study record/reading/xxlggrm'
            }
          ]
        },
        {
          text: '理财',
          collapsed: true,
          items: [
            {
              text: '小狗钱钱',
              link: '/notes/study record/reading/xgqq'
            }
          ]
        }
      ]
    },
    {
      text: '效能',
      collapsed: true,
      items: [
        {
          text: 'OKR',
          link: '/notes/study record/work efficiency/OKR'
        },
      ]
    },
  ]
}
// 人工智能
const AI = {
  text: '人工智能',
  collapsed: false,
  items: [
    {
      text: '机器学习',
      link: '/notes/artificial intelligence/machine learning/notes/startup',
      collapsed: true,
      items: [
        {
          text: '特征工程',
          link: '/notes/artificial intelligence/machine learning/feature engineering/startup'
        }
      ]
    },
    {
      text: '深度学习',
      link: '/notes/artificial intelligence/deep learning/notes/startup'
    },
    {
      text: '大语言模型',
      link: '/notes/artificial intelligence/large language model/startup',
      collapsed: true,
      items: [
        { text: '小试', link: '/notes/artificial intelligence/large language model/take' }
      ]
    },
    {
      text: '应用', collapsed: true, items: [
        {
          text: '推荐系统', collapsed: true, link: '/notes/artificial intelligence/applications/recommend system/recommend-system', items: [
            {
              text: '广告推荐',
              link: '/notes/artificial intelligence/applications/recommend system/advertising recommendations/ad'
            },
            {
              text: '个性化召回',
              link: '/notes/artificial intelligence/applications/recommend system/personalized recall/recall'
            }
          ]
        },
      ]
    },
  ]
}
// 计算机基础
const CS = {
  text: '计算机科学',
  collapsed: false,
  items: [
    {
      text: '计算机基础',
      collapsed: true,
      items: [
        {
          text: '操作系统',
          collapsed: true,
          items: [
            {
              text: '协程',
              link: '/notes/computer science/operation system/coroutine'
            }
          ]
        },
        {
          text: '计算机网络',
          collapsed: true,
          items: [
            {
              text: '基础',
              link: '/notes/computer science/networking/networking'
            }
          ]
        }
      ]
    },
    {
      text: '大数据',
      collapsed: true,
      link: '/notes/computer science/big data/conceptions/big-data',
      items: [
        {
          text: '工具',
          collapsed: true,
          items: [
            {
              text: 'zeppelin',
              link: '/notes/computer science/big data/zeppelin/setup'
            }
          ]
        }
      ]
    },
    {
      text: '云计算',
      collapsed: true,
      items: []
    },
    {
      text: '虚拟化',
      collapsed: true,
      items: [
        {
          text: 'docker',
          link: `${ROOT_VRITUALIZATION_TECHNOLOGY}/docker/usage`,
          collapsed: true,
          items: [
            {
              text: '构建镜像',
              link: `${ROOT_VRITUALIZATION_TECHNOLOGY}/docker/make-image`,
            },
            {
              text: '常用容器',
              link: `${ROOT_VRITUALIZATION_TECHNOLOGY}/docker/containers`,
            },
            {
              text: '问题排查',
              link: `${ROOT_VRITUALIZATION_TECHNOLOGY}/docker/problems`,
            },
            {
              text: '示例',
              link: `${ROOT_VRITUALIZATION_TECHNOLOGY}/docker/example`,
            },
          ]
        }
      ]
    },
    {
      text: '工程架构',
      collapsed: true,
      items: [
        {
          text: '服务编排',
          collapsed: true,
          items: [
            {
              text: 'k8s',
              collapsed: true,
              link: `${ROOT_ENGINEERING_ARCHITECTURE}/service orchestration/k8s/install`,
              items: [
                {
                  text: '使用',
                  link: `${ROOT_ENGINEERING_ARCHITECTURE}/service orchestration/k8s/usage`,
                },
                {
                  text: '配置',
                  link: `${ROOT_ENGINEERING_ARCHITECTURE}/service orchestration/k8s/config`,
                },
                {
                  text: '问题排查',
                  link: `${ROOT_ENGINEERING_ARCHITECTURE}/service orchestration/k8s/problems`,
                }
              ]
            },
            {
              text: 'helm',
              collapsed: true,
              link: `${ROOT_ENGINEERING_ARCHITECTURE}/service orchestration/helm/helm`,
              items: []
            },
            {
              text: 'k9s',
              collapsed: true,
              link: `${ROOT_ENGINEERING_ARCHITECTURE}/service orchestration/k9s/setup`,
              items: [
                {
                  text: '使用',
                  link: `${ROOT_ENGINEERING_ARCHITECTURE}/service orchestration/k9s/usage`,
                }
              ]
            },
            {
              text: 'microk8s',
              collapsed: true,
              link: `${ROOT_ENGINEERING_ARCHITECTURE}/service orchestration/microk8s/install`,
              items: [
                {
                  text: '使用',
                  link: `${ROOT_ENGINEERING_ARCHITECTURE}/service orchestration/microk8s/usage`,
                }
              ]
            },
            {
              text: 'minikube',
              collapsed: true,
              link: `${ROOT_ENGINEERING_ARCHITECTURE}/service orchestration/minikube/usage`,
              items: []
            }
          ]
        },
        {
          text: '数据收集',
          collapsed: true,
          items: [
            {
              text: 'vector',
              link: `${ROOT_ENGINEERING_ARCHITECTURE}/data collector/vector`
            }
          ]
        }
      ]
    }, {
      text: '软件工程',
      collapsed: true,
      items: [
        {
          text: '类图',
          link: '/notes/computer science/software engineering/classdiagram'
        }, {
          text: 'DDD',
          link: '/notes/computer science/software engineering/ddd'
        }
      ]
    },
    {
      text: '其他',
      collapsed: true,
      items: [
        {
          text: '前端技术',
          collapsed: true,
          items: []
        },
        {
          text: '搜索引擎',
          collapsed: true,
          items: []
        },
        {
          text: '密码学',
          collapsed: true,
          items: []
        },
        {
          text: '编译原理',
          collapsed: true,
          items: [
            {
              text: 'Flex & Bison',
              link: '/notes/computer science/fundamentals of compiling/flex-bison'
            }
          ]
        }
      ]
    }
  ]
}
// 收藏
const FAVOR = {
  text: '收藏',
  items: [
    { text: '人工智能', link: '/notes/artificial intelligence/favor' },
    { text: '机器学习', link: '/notes/artificial intelligence/applications/recommend system/favor' },
    { text: '大数据', link: '/notes/computer science/big data/favor' },
    { text: '虚拟化', link: '/notes/computer science/virtualization technology/favor' },
    {
      text: '编程基础', collapsed: true, items: [
        { text: 'C++', link: '/notes/basic programming/c++/favor' }
      ]
    },
    {
      text: '工具',
      collapsed: true,
      link: '/notes/tools/favor',
      items: [
        {
          text: 'vitepress',
          link: 'https://vitepress.dev/'
        }
      ]
    }
  ]
}
// 碎碎念
const THOUGHTS = {
  text: '碎碎念',
  link: '/notes/others/thoughts/thoughts',
  items: [
    {
      text: '2024', collapsed: true, items: [
        {
          text: '02.20 - 彩礼',
          link: '/notes/others/thoughts/2024/20240220'
        },
        {
          text: '02.18 - 成长公式',
          link: '/notes/others/thoughts/2024/20240218-2'
        },
        {
          text: '02.18 - 新的一年',
          link: '/notes/others/thoughts/2024/20240218'
        },
        {
          text: '02.04 - 卢克文的《一个人是怎样成长起来的？》',
          link: '/notes/others/thoughts/2024/20240204'
        }
      ]
    },
    {
      text: '2023', collapsed: true, items: [
        {
          text: '12.23 - 想说说为什么活着',
          link: '/notes/others/thoughts/2023/20231223'
        },
        {
          text: '12.11 - 关于房地产的视频',
          link: '/notes/others/thoughts/2023/20231211'
        },
        {
          text: '11.02 - 无知有两种',
          link: '/notes/others/thoughts/2023/20231102'
        },
        {
          text: '10.23 - 提车了',
          link: '/notes/others/thoughts/2023/20231023'
        },
        {
          text: '10.13 - 订的车快到了',
          link: '/notes/others/thoughts/2023/20231013'
        },
        {
          text: '10.09 - 放下执念',
          link: '/notes/others/thoughts/2023/20231009'
        }
      ]
    }
  ]
}
const SIDEBAR = [
  {
    text: '序言',
    link: '/notes/README'
  },
  ME,
  PLAY,
  QUICK_ACCESS,
  TOOLS,
  CS,
  {
    text: '编程基础',
    collapsed: false,
    items: [
      {
        text: '设计模式',
        collapsed: true,
        link: '/notes/basic programming/design pattern/startup',
        items: [
          {
            text: '观察者模式',
            link: '/notes/basic programming/design pattern/observer'
          },
          {
            text: '总结',
            link: '/notes/basic programming/design pattern/summary'
          }
        ]
      },
      {
        text: '数据结构',
        collapsed: true,
        link: '/notes/basic programming/data structure/basic',
        items: []
      },
      {
        text: '编程算法',
        collapsed: true,
        items: []
      },
      {
        text: '编程语言',
        collapsed: true,
        link: '/notes/basic programming/learn-lang',
        items: [
          { text: 'C++', link: '/notes/basic programming/c++/notes/basic', items: [
            {
              text: '快速查阅手册',
              collapsed: true,
              link: '/notes/basic programming/c++/notes/basic-simple'
            }
          ]},
          { text: 'Java', link: '/notes/basic programming/java' },
          { text: 'Go', link: '/notes/basic programming/go/go' },
          { text: 'Kotlin', link: '/notes/basic programming/kotlin/notes/basic' },
          { text: 'Python', link: '/notes/basic programming/python/notes/common' },
          { text: 'Scala', link: '/notes/basic programming/scala/basic' },
        ]
      }
    ]
  },
  AI,
  FAVOR,
  STUDY_RECORD,
  //THOUGHTS,
  LINKS
];
const SOCIAL_LINKS = [
  { icon: 'github', link: 'https://github.com/sunzhenkai/talking-ground' }
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Wii's talking ground",
  description: "Various Topics",
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: SIDEBAR,
    socialLinks: SOCIAL_LINKS,
    footer: {
      message: '凡事预则立 不预则废',
    }
  }
})
