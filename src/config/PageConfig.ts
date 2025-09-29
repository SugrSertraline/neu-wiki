import { NWDescription } from "@/components";
import { NWComponent } from "@/types/enum";
import type { Group, LinkListItem, Page } from "@/types/interface";
export const PAGE_CONFIG: Group[] = [
    {
        title: '写在前面',
        name: 'Preface',
        pages: [{
            title: '开发者寄语',
            name: 'DeveloperGreeting',
            last_update: '2024年9月22日',
            description: '各位同学好，我是本网站的发起人，也是网站的开发者。我认为大学人生中最重要的一个时间点，它不像高中那样目的明确，每天只有重复的学习，在大学阶段，你开始接触各式各样的人、学习各种知识，你可以在不同领域大放异彩，也会面临升学、择业等一系列的问题。作为已经经历大学本科阶段的我，为此开发了这个网站，希望大家在遇到困惑时能够查阅。如果你有想要分享的内容，或者是对网站提出建议，可以加入QQ群：2152012727。',
            sections: [
                {
                    title: undefined,
                    subsections: [{
                        title: undefined,
                        contents: [
                            {
                                type: NWComponent.NWImage,
                                width: 300,
                                src: 'https://image.neuwiki.top/image/qq_group.png'
                            }
                        ]
                    }
                    ]
                }
            ],
            contributors: []
        }, {
            title: "待补充内容",
            last_update: "2024年11月16日",
            name: "ProblemsRank",
            description: "这里展示目前网站急缺的内容，如果大家有能力可以动动小手贡献一下！",
            sections: [
                {
                    title: undefined,
                    subsections: [
                        {
                            title: undefined,
                            contents: [
                                {
                                    type: NWComponent.NWProblemsRank,
                                    problems: [
                                        { description: "各个学院攻略", urgency: 5 },
                                        { description: "医疗报销等日常", urgency: 2 },
                                        { description: "贡献者功能", urgency: 2 },
                                        { description: "校内群聊", urgency: 3 },
                                    ]

                                }
                            ]
                        }
                    ]
                }
            ],
            contributors: []
        }, {
            title: "我们的贡献者",
            last_update: "2024年11月16日",
            name: "SiteContributors",
            description: "欢迎来到“我们的贡献者”页面，这里是对网站的开发人员和内容贡献人员的感谢。每一天，我们的网站都能够持续更新和进步，都离不开这些才华横溢的开发者和内容创作者们的辛勤投入。感谢你们，让我们不断完善。",
            sections: [
                {
                    title: undefined,
                    subsections: [
                        {
                            title: undefined,
                            contents: [
                                {
                                    type: NWComponent.NWSiteContributors,
                                    site_sitecontributors: [
                                        {
                                            username: "SugrSertraline",
                                            avatar: "https://avatars.githubusercontent.com/u/117089348?v=4",
                                            contributionType: "网站开发",
                                            contribution: "网站整体的策划、开发工作。",
                                            bio: "软件20级本科生、24级研究生。",
                                            qq: undefined,
                                            wechat: undefined,
                                            email: "sugrsertraline@gmail.com"
                                        }, {
                                            username: "aning",
                                            avatar: "https://image.neuwiki.top/image/aning.jpg",
                                            contributionType: "网站开发",
                                            contribution: "网站后端开发、部署。",
                                            bio: "软件20级本科生、24级研究生。",
                                            qq: undefined,
                                            wechat: undefined,
                                            email: "aninganing147@gmail.com"
                                        }, {
                                            username: "好锦鲤",
                                            avatar: "https://image.neuwiki.top/image/haojinli.jpg",
                                            contributionType: "内容完善",
                                            contribution: "“校车”相关内容",
                                            bio: "计算机2021级本科，2025级硕士。",
                                            qq: undefined,
                                            wechat: undefined,
                                            email: undefined
                                        }, {
                                            username: "苏璃",
                                            avatar: "https://image.neuwiki.top/image/suli.jpg",
                                            contributionType: "内容完善",
                                            contribution: "校园生活等方面内容的完善",
                                            bio: "电科23级本科生，努力考研中。",
                                            qq: '1181449555',
                                            wechat: '18670082653',
                                            email: undefined
                                        }, {
                                            username: "小明",
                                            avatar: "https://image.neuwiki.top/image/xiaoming.jpg",
                                            contributionType: "内容与开发",
                                            contribution: "“工程硕博”保研、项目开发",
                                            bio: "软件20级本科生、24级研究生。",
                                            qq: '1294892474',
                                            wechat: '15565828536',
                                            email: undefined
                                        }, {
                                            username: "Denglin",
                                            avatar: "https://image.neuwiki.top/image/linke.jpg",
                                            contributionType: "内容完善",
                                            contribution: "竞赛保研",
                                            bio: "计算机20级本科生，折桨大学24级研究生。",
                                            qq: '980376887',
                                            wechat: undefined,
                                            email: undefined
                                        }, {
                                            username: "逍遥飘雪",
                                            avatar: "https://image.neuwiki.top/image/xiaoyaopiaoxue.jpg",
                                            contributionType: "内容完善",
                                            contribution: "竞赛保研、机械学院相关内容",
                                            bio: "机械工程与自动化学院智能制造工程专业21级本科生。",
                                            qq: undefined,
                                            wechat: undefined,
                                            email: 'guo.yunzhe@outlook.com'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ],
            contributors: []
        }, {
            title: "链接汇总",
            last_update: "2024年11月17日",
            name: "AllLink",
            description: '这里收录了网站的所有链接，大家可以快速查看并且分享。',
            sections: [
                {
                    title: undefined,
                    subsections: [
                        {
                            title: undefined,
                            contents: [
                                {
                                    type: NWComponent.NWLinkList,
                                }
                            ]
                        }
                    ]
                }
            ],
            contributors: []
        }
        ]
    }, {
        title: "群聊汇总",
        name: "Groups",
        pages: [
            {
                title: "校内群聊",
                last_update: "2024年11月23日",
                name: "ChatGroups",
                description: '这里汇总了校内的群聊，大家可以快速检索。',
                sections: [
                    {
                        title: '闲置二手',
                        subsections: [
                            {
                                title: undefined,
                                contents: [
                                    {
                                        type: NWComponent.NWClubIntro,
                                        club: {
                                            name: '闲易(浑南一舍限定)',
                                            description: '',
                                            logo: 'https://image.neuwiki.top/image/jiaoyouqiang.jpg',
                                            qqGroup: "726429983",
                                            imageUrl: undefined
                                        }
                                    }, {
                                        type: NWComponent.NWClubIntro,
                                        club: {
                                            name: '闲易(八九十新二舍)',
                                            description: '',
                                            logo: 'https://image.neuwiki.top/image/jiaoyouqiang.jpg',
                                            qqGroup: "760703712",
                                            imageUrl: undefined
                                        }
                                    }, {
                                        type: NWComponent.NWClubIntro,
                                        club: {
                                            name: 'NEU·闲易⑤(勿代课)',
                                            description: '',
                                            logo: 'https://image.neuwiki.top/image/jiaoyouqiang.jpg',
                                            qqGroup: "674052870",
                                            imageUrl: undefined
                                        }
                                    }, {
                                        type: NWComponent.NWClubIntro,
                                        club: {
                                            name: 'NEU·闲易④(勿代课)',
                                            description: '',
                                            logo: 'https://image.neuwiki.top/image/jiaoyouqiang.jpg',
                                            qqGroup: "658497316",
                                            imageUrl: undefined
                                        }
                                    }, {
                                        type: NWComponent.NWClubIntro,
                                        club: {
                                            name: 'NEU·闲易②(勿代课)',
                                            description: '',
                                            logo: 'https://image.neuwiki.top/image/jiaoyouqiang.jpg',
                                            qqGroup: "796471371",
                                            imageUrl: undefined
                                        }
                                    }, {
                                        type: NWComponent.NWClubIntro,
                                        club: {
                                            name: 'NEU·闲易(勿代课)',
                                            description: '',
                                            logo: 'https://image.neuwiki.top/image/jiaoyouqiang.jpg',
                                            qqGroup: "748582637",
                                            imageUrl: undefined
                                        }
                                    }, {
                                        type: NWComponent.NWClubIntro,
                                        club: {
                                            name: 'NEU·闲易⑥(勿代课)',
                                            description: '',
                                            logo: 'https://image.neuwiki.top/image/jiaoyouqiang.jpg',
                                            qqGroup: "672096362",
                                            imageUrl: undefined
                                        }
                                    }, {
                                        type: NWComponent.NWClubIntro,
                                        club: {
                                            name: 'NEU·闲易③(勿代课)',
                                            description: '',
                                            logo: 'https://image.neuwiki.top/image/jiaoyouqiang.jpg',
                                            qqGroup: "213647985",
                                            imageUrl: undefined
                                        }
                                    }
                                ]
                            }
                        ]
                    }, {
                        title: '生活互助',
                        subsections: [
                            {
                                title: undefined,
                                contents: [
                                    {
                                        type: NWComponent.NWClubIntro,
                                        club: {
                                            name: 'NEU·租房er互助群',
                                            description: '',
                                            logo: 'https://image.neuwiki.top/image/jiaoyouqiang.jpg',
                                            qqGroup: "809396718",
                                            imageUrl: undefined
                                        }
                                    }, {
                                        type: NWComponent.NWClubIntro,
                                        club: {
                                            name: 'NEU·逛吃沈阳',
                                            description: '',
                                            logo: 'https://image.neuwiki.top/image/jiaoyouqiang.jpg',
                                            qqGroup: "365298908",
                                            imageUrl: undefined
                                        }
                                    }, {
                                        type: NWComponent.NWClubIntro,
                                        club: {
                                            name: 'NEU·(仅可)拼车/失物招领①',
                                            description: '',
                                            logo: 'https://image.neuwiki.top/image/jiaoyouqiang.jpg',
                                            qqGroup: "642261754",
                                            imageUrl: undefined
                                        }
                                    }, {
                                        type: NWComponent.NWClubIntro,
                                        club: {
                                            name: 'NEU·(仅可)拼车/失物招领②',
                                            description: '',
                                            logo: 'https://image.neuwiki.top/image/jiaoyouqiang.jpg',
                                            qqGroup: "608580708",
                                            imageUrl: undefined
                                        }
                                    }, {
                                        type: NWComponent.NWClubIntro,
                                        club: {
                                            name: 'NEU·健康互助群',
                                            description: '',
                                            logo: 'https://image.neuwiki.top/image/jiaoyouqiang.jpg',
                                            qqGroup: "364610094",
                                            imageUrl: undefined
                                        }
                                    }, {
                                        type: NWComponent.NWClubIntro,
                                        club: {
                                            name: 'NEU·旅游搭子',
                                            description: '',
                                            logo: 'https://image.neuwiki.top/image/jiaoyouqiang.jpg',
                                            qqGroup: "660130891",
                                            imageUrl: undefined
                                        }
                                    }, {
                                        type: NWComponent.NWClubIntro,
                                        club: {
                                            name: 'NEU·留校er(勿代课)',
                                            description: '',
                                            logo: 'https://image.neuwiki.top/image/jiaoyouqiang.jpg',
                                            qqGroup: "600956042",
                                            imageUrl: undefined
                                        }
                                    }, {
                                        type: NWComponent.NWClubIntro,
                                        club: {
                                            name: 'NEU·好剧推荐',
                                            description: '',
                                            logo: 'https://image.neuwiki.top/image/jiaoyouqiang.jpg',
                                            qqGroup: "768316750",
                                            imageUrl: undefined
                                        }
                                    }, {
                                        type: NWComponent.NWClubIntro,
                                        club: {
                                            name: '东大2023级交流互助群（勿代课）',
                                            description: '',
                                            logo: 'https://image.neuwiki.top/image/jiaoyouqiang.jpg',
                                            qqGroup: "654165985",
                                            imageUrl: undefined
                                        }
                                    }, {
                                        type: NWComponent.NWClubIntro,
                                        club: {
                                            name: '东大2024级交流互助群',
                                            description: '',
                                            logo: 'https://image.neuwiki.top/image/jiaoyouqiang.jpg',
                                            qqGroup: "280912500",
                                            imageUrl: undefined
                                        }
                                    }, {
                                        type: NWComponent.NWClubIntro,
                                        club: {
                                            name: 'NEU·考研er',
                                            description: '',
                                            logo: 'https://image.neuwiki.top/image/jiaoyouqiang.jpg',
                                            qqGroup: "296343321",
                                            imageUrl: undefined
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ],
                contributors: []
            }
        ]
    }
    , {
        title: "社团信息",
        name: "Club",
        pages: [{
            title: "NEU.P",
            last_update: "2024年12月16日",
            name: "NEU-P",
            description: undefined,
            sections: [
                {
                    title: "社团简介",
                    subsections: [
                        {
                            title: undefined,
                            contents: [{
                                type: NWComponent.NWClubIntro,
                                club: {
                                    name: "东北大学非官方说唱团队NEU.P",
                                    logo: "/NEUP-LOGO.png",
                                    description: "东北大学NEU.P说唱团队，2019年成立，由在校学生组成。荣获全国季军、沈阳冠军等奖项，发行两张专辑，举办大型演出。团队每年9-11月招新，欢迎热爱HipHop的你加入，不限专业年级性别。",
                                    qqGroup: "914863257",
                                    imageUrl: "/NEUP-QRCODE.png"
                                }
                            }]
                        }
                    ]
                }, {
                    title: "关于我们",
                    subsections: [
                        {
                            title: undefined,
                            contents: [
                                {
                                    type: NWComponent.NWDescription,
                                    text: '东北大学**非官方**说唱团队，成立于2019年，成员均为东北大学在校学生。团队主理人梨果橙于2023年带领团队获大学说唱联赛全国并列季军、沈阳站冠军，并于同年获得地下8英里北部决赛冠军。\\团队自成立以来发布两张团队专辑《艮骨烁金》、《岳护百川》，曾独立举办“黑怕不怕冷”NEU.P四周年专场说唱演出、地下8英里官方授权“大学说唱联赛IV”辽宁赛区说唱赛事等大型活动，流媒体上的团队词条“#NEU.P”也已获得超千万播放。NEU.P正逐渐成为沈阳乃至东北说唱圈不可忽视的新血力量。\\NEU.P团队固定于每年9-11月面向全校同学开展招新活动，届时将在以上招新群中发布招新详细信息，并开放招新通道。无论你想成为一个原创rapper在舞台上释放自己的能量，还是想作为一个编曲混音制作人在兄弟们背后提供支撑，又或者你有视觉制作、文案编辑、新媒体运营、摄像摄影等方面的特长与爱好，只要你热爱HipHop，不限专业、不限年级、不限性别、不限取向，都欢迎你来联系我们，成为我们的一员！'
                                }
                            ]
                        }
                    ]
                }, {
                    title: "活动承办经历",
                    subsections: [
                        {
                            title: undefined,
                            contents: [
                                {
                                    type: NWComponent.NWList,
                                    order: false,
                                    data: ['“能造”2024年NEU.P五周年专场演出主办', '“岳护百川”团队四周年专场演出主办', '“燎原”环沈阳高校联合说唱巡演协办', '“大学说唱联赛IV”沈阳站合作承办', '“鸡架游戏”说唱派对主办', '“醒春”冬日说唱派对主办', '2021年“青春正当时”草地音乐节”协办', '2022年昌宁县建团100周年晚会策划', '……']

                                }
                            ]
                        }
                    ]
                }, {
                    title: "成员获奖",
                    subsections: [
                        {
                            title: undefined,
                            contents: [
                                {
                                    type: NWComponent.NWList,
                                    order: false,
                                    data: ['2024年快手好声音全国总冠军', '2024年地下8英里全国八强', '2024年地下8英里沈阳站冠军', '2023年地下8英里北部决赛及沈阳站冠军', '2022年地下8英里沈阳站四强', '2022年大学说唱联赛III全国八强', '2021年大学说唱联赛II沈阳站四强', '……']

                                }
                            ]
                        }
                    ]
                }, {
                    title: "社团风采",
                    subsections: [
                        {
                            title: undefined,
                            contents: [
                                {
                                    type: NWComponent.NWPhotoAlbum,
                                    photos: [{
                                        url: "/NEUP-photo1.png",
                                        alt: ""
                                    }, {
                                        url: "/NEUP-photo2.png",
                                        alt: ""
                                    }, {
                                        url: "/NEUP-photo3.png",
                                        alt: ""
                                    }, {
                                        url: "/NEUP-photo4.png",
                                        alt: ""
                                    }, {
                                        url: "/NEUP-photo5.png",
                                        alt: ""
                                    }]

                                }
                            ]
                        }
                    ]
                }
            ],
            contributors: []
        }, {
            title: "轮舞轮滑社",
            last_update: "2024年11月23日",
            name: "LunWuLunHua",
            description: undefined,
            sections: [{
                title: '社团简介',
                subsections: [
                    {
                        title: undefined,
                        contents: [{
                            type: NWComponent.NWClubIntro,
                            club: {
                                name: '东北大学轮舞轮滑社（浑南）',
                                logo: 'https://image.neuwiki.top/image/neulogo.jpeg',
                                description: '本群为东北大学轮舞轮滑社浑南群,浑南的同学请加入此群聊。',
                                qqGroup: '336861220',
                                imageUrl: 'https://image.neuwiki.top/image/lunwu_hunnan.jpg'
                            }
                        }]
                    }, {
                        title: undefined,
                        contents: [{
                            type: NWComponent.NWClubIntro,
                            club: {
                                name: '东北大学轮舞轮滑社（南湖）',
                                logo: 'https://image.neuwiki.top/image/neulogo.jpeg',
                                description: '本群为东北大学轮舞轮滑社南湖，南湖的同学请加入此群聊',
                                qqGroup: '773733890',
                                imageUrl: 'https://image.neuwiki.top/image/lunwu_nanhu.jpg'
                            }
                        }]
                    },
                ]
            }, {
                title: '社团介绍',
                subsections: [{
                    title: undefined,
                    contents: [
                        {
                            type: NWComponent.NWDescription,
                            text: '我们是一个热爱轮滑和轮舞的团体，定期举办各种活动，包括平滑教学、刷街等。我们的活动不仅局限于日常的练习，还包括大型的刷街活动，如五一北戴河、端午世博园毕业生送别、国庆鸟岛等。这些活动不仅让我们享受轮滑的乐趣，也是我们社交和增进友谊的好机会。\\平时私下约着玩的活动较多，兴趣至上（你甚至可以玩轮滑，bushi），i人天堂，大团体全是熟人氛围超棒，**脱单率极高**（目前已脱单四对）\\无加入条件，也不是必须要有轮滑鞋，兴趣至上，要的是想跟大家一起玩，一起聚餐、熬夜、自由的心境。'
                        }
                    ]
                }]
            }],
            contributors: []
        }, {
            title: "东大飞鸟",
            last_update: "2024年11月25日",
            name: "FeiNiao",
            description: undefined,
            sections: [
                {
                    title: '社团简介',
                    subsections: [
                        {
                            title: undefined,
                            contents: [
                                {
                                    type: NWComponent.NWClubIntro,
                                    club: {
                                        name: "东大飞鸟",
                                        logo: "https://image.neuwiki.top/image/neulogo.jpeg",
                                        description: "校内民间户外爱好组织，不定期（周末）组织省内徒步活动，具体活动形式与内容进群查看群文件与群相册，欢迎所有户外爱好者加入交流。校内同学均可，进群需备注专业学号。",
                                        qqGroup: "589721067",
                                        imageUrl: "https://image.neuwiki.top/image/dongdafeiniao.jpg"
                                    }
                                }
                            ]
                        }
                    ]
                }
            ],
            contributors: []
        }
            , {
            title: "剑道社",
            last_update: "2024年11月20日",
            name: "JianDao",
            description: undefined,
            sections: [{
                title: '社团简介',
                subsections: [
                    {
                        title: undefined,
                        contents: [{
                            type: NWComponent.NWClubIntro,
                            club: {
                                name: '东北大学剑道社',
                                logo: 'https://image.neuwiki.top/image/neulogo.jpeg',
                                description: '本群为东北大学南湖和浑南校区剑道社共同的招新群，进群后负责人会发送浑南或南湖QQ群的二维码邀请进入对应校区社团群。进相应群后会定时发布训练时间场地信息，也可进行剑道相关知识的讨论。群规则：文明交流，和谐共处，欢迎共同讨论学习剑道知识。',
                                qqGroup: '964473553',
                                imageUrl: 'https://image.neuwiki.top/image/jiandao_qq.jpg'
                            }
                        }]
                    },
                ]
            }, {
                title: '社团风采',
                subsections: [{
                    title: undefined,
                    contents: [
                        {
                            type: NWComponent.NWPhotoAlbum,
                            photos: [
                                {
                                    url: "https://image.neuwiki.top/image/jiandao1.jpg",
                                    alt: ""
                                }, {
                                    url: "https://image.neuwiki.top/image/jiandao2.jpg",
                                    alt: ""
                                }, {
                                    url: "https://image.neuwiki.top/image/jiandao3.jpg",
                                    alt: ""
                                }, {
                                    url: "https://image.neuwiki.top/image/jiandao4.jpg",
                                    alt: ""
                                }, {
                                    url: "https://image.neuwiki.top/image/jiandao5.jpg",
                                    alt: ""
                                }
                            ]
                        }
                    ]
                }]
            }],
            contributors: []
        }, {
            title: "国际标准舞团",
            last_update: "2024年11月20日",
            name: "GuoJiBiaoZhunWu",
            description: undefined,
            sections: [{
                title: '社团简介',
                subsections: [
                    {
                        title: undefined,
                        contents: [{
                            type: NWComponent.NWClubIntro,
                            club: {
                                name: '东北大学国际标准舞团',
                                logo: 'https://image.neuwiki.top/image/neulogo.jpeg',
                                description: '东北大学国际标准舞团属于东北大学团委文化艺术中心的优秀团体，参与东北大学百年校庆文艺晚会、“龙腾新百年”东北大学2024年新年联欢会、东北大学2024年“廿廿不忘，舞影流光”毕业舞会、第二届沈阳时尚体育节暨首届“金叶杯”体育舞蹈国际标准舞公开赛等各类校级、院级活动以及专业国标舞赛事，是一支团结友爱、经验成熟、热爱舞蹈的队伍。',
                                qqGroup: '964473553',
                                imageUrl: 'https://image.neuwiki.top/image/guobiaowu.jpg'
                            }
                        }]
                    },
                ]
            }, {
                title: '社团风采',
                subsections: [{
                    title: undefined,
                    contents: [
                        {
                            type: NWComponent.NWPhotoAlbum,
                            photos: [
                                {
                                    url: "https://image.neuwiki.top/image/guobiao1.jpg",
                                    alt: ""
                                }, {
                                    url: "https://image.neuwiki.top/image/guobiao2.jpg",
                                    alt: ""
                                }, {
                                    url: "https://image.neuwiki.top/image/guobiao3.jpg",
                                    alt: ""
                                }, {
                                    url: "https://image.neuwiki.top/image/guobiao4.jpg",
                                    alt: ""
                                }, {
                                    url: "https://image.neuwiki.top/image/guobiao5.jpg",
                                    alt: ""
                                }, {
                                    url: "https://image.neuwiki.top/image/guobiao6.jpg",
                                    alt: ""
                                }, {
                                    url: "https://image.neuwiki.top/image/guobiao7.jpg",
                                    alt: ""
                                }, {
                                    url: "https://image.neuwiki.top/image/guobiao8.jpg",
                                    alt: ""
                                }, {
                                    url: "https://image.neuwiki.top/image/guobiao9.jpg",
                                    alt: ""
                                }, {
                                    url: "https://image.neuwiki.top/image/guobiao10.jpg",
                                    alt: ""
                                }
                            ]
                        }
                    ]
                }]
            }],
            contributors: []
        }

        ]
    }
    , {
        title: "访谈专栏",
        name: "Interview",
        pages: [
            {
                title: "24届宋经纬同学",
                last_update: "2024年10月17日",
                name: "SongJingWei",
                description: undefined,
                sections: [
                    {
                        title: undefined,
                        subsections: [
                            {
                                title: undefined,
                                contents: [
                                    {
                                        type: NWComponent.NWPersonalIntro,
                                        name: '宋经纬',
                                        avatarUrl: 'https://avatars.githubusercontent.com/u/103640865?v=4',
                                        college: '软件学院',
                                        grade: '2024届',
                                        major: '软件工程',
                                        graduation: '香港大学计算机工程专业HKUNLP',
                                        introduction: 'NEUSOFT的UU来香港可以找我',
                                        achievements: ['GPA3.95', '雅思7(6)', 'GRE334', '微信小程序应用开发赛国家二等奖', 'IMCM一等奖', '东北大学优秀毕业生', '东北大学优秀毕业设计', '各种奖学金10余次'],
                                        qq: '2015713717',
                                        wechat: 'SPr1nG_7',
                                        github: 'https://github.com/5SSjw',
                                        email: 's2015713717@gmail.com'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '你选择留学国家和学校的主要考虑因素是什么？',
                                        a: '学制短、宽松的科研环境。'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '在申请留学过程中，你遇到的最大挑战是什么？',
                                        a: '我申请比较顺利，基本没有遇到大的挑战。'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '相比于国内升学/就业等，你为什么选择留学？',
                                        a: '由于我保研排名比较靠后，难以进入国内较好的实验室，所以选择学制更短的英港新地区读研究生。如果就业学制短是很大的优势；如果做科研这边学业压力不大，也可以自行联系老师做RA、读博。'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '在申请留学的过程中，你是如何准备语言考试的？',
                                        a: '主要还是背单词和刷题，背单词一定要背你考试对应的词库。语言考试的应试技巧很重要，需要找到适合自己的技巧以及持续刷题保持手感。'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '你认为留学适合哪些同学？',
                                        a: '首先家庭支持的，因为毕竟大家读全日制的研究生，大部分经济来源还是家庭。画像大概可以分为：科研成果、学业优异出国深造；保研边缘、考研、找工作等同时做两手准备；不想考研但想读研究生提升学历。'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '你认为留学的辅导咨询机构有没有必要报名？',
                                        a: '对于找中介这个问题，我保持中立。一方面是我认为东北大学的学生完全有能力自己搜索信息、完成文书以及投递。但是可能有同学在做两手准备，所以找中介可能会省去一部分时间成本，可以获取一些数据支持。但一定要仔细鉴别服务是否过关，未必大机构申请结果就好。'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '你选择留学时，是如何考虑目标学校在软件工程领域的研究实力和课程设置的？',
                                        a: '首先是看学校的认可度，比如一些企业招人的目标院校以及最终名单里学生的来源。至于研究实力，我个人认为如果打算研究，老板或者实验室的实力更重要一些。课程设置的话，直接去官网看项目的课程包含哪些即可，可以上别的平台看看课程评价如何，适合自己的就是最好的（混个毕业、学真本事、做研究）。'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '你在本科阶段参与过哪些软件工程相关的项目或研究，对于申请留学有什么具体帮助？',
                                        a: '之前参加过两段大创、一段科研，还有若干比赛。具体帮助很难讲，因为这些都是锦上添花的东西，无法量化，但是技多不压身。不过如果没有产出，科研经历会大打折扣。所以建议做科研一定要有产出，如果有顶会更好，顶会或者顶刊是可以产生实质性帮助的，是你进入好的实验室或者读博的敲门砖。'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '你对软件学院的学生在准备留学申请时有哪些建议，特别是在个人项目和研究经验方面？',
                                        a: '早点确定未来的发展方向比较重要，因为大部分的项目找工作和做科研是难以兼容的，所以尽可能早地确定好未来的发展路径。无论科研还是做研究都要趁早，可以从联系本校的老师开始，等有一点成果后可以尝试套磁外校的老师。越往后走connection越重要，如果没法保证质量，那就先把数量搞上来。'
                                    }, {
                                        type: NWComponent.NWMotto,
                                        message: '攀登者的步履，从来都是静默的。',
                                        author: '宋经纬'
                                    }
                                ]
                            }
                        ]
                    }
                ],
                contributors: []
            }, {
                title: "23届崔中健同学",
                last_update: "2024年12月24日",
                name: "CuiZhongJian",
                description: undefined,
                sections: [
                    {
                        title: undefined,
                        subsections: [
                            {
                                title: undefined,
                                contents: [
                                    {
                                        type: NWComponent.NWPersonalIntro,
                                        name: '崔中健',
                                        avatarUrl: '/cuizhongjian.jpg',
                                        college: '软件学院',
                                        grade: '2023届',
                                        major: '软件工程（大数据人工智能实验班）',
                                        graduation: '天津大学',
                                        introduction: '曾任沈阳织知科技有限公司法人监CEO；主持国家级大学生创新训练计划项目1项；荣获“互联网+”比赛省级2金2铜，国家级优秀奖；小挑省金省银；第五届中国青年志愿者服务大赛银奖，现研究方向为鲁棒语音识别、语音增强、语音分离、目标说话人提取，来天大或者对语音方向有兴趣的学弟学妹们可以联系我。',
                                        achievements: ['国家奖学金', '辽宁省优秀毕业生', '东北大学最具影响力毕业生'],
                                        qq: '404801399',
                                        wechat: '15222287388',
                                        email: 'timcui666@gmail.com'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '你为什么选择保研，而不是就业/留学等其他毕业去向？',
                                        a: '首先，有保研名额，不用白不用（但不是最重要原因）。其次，自己也没有想好之后要干什么（所以最好提早做好职业规划，可以避免老学长走过的弯路）。然后，自己也有一个科研梦，想看看自己究竟能在学术上走多远。最后，感觉学历越高选择可能也就越多（但是这并不是绝对的，老学长的错误见解）。不出国的主要原因是自己的英语太差（研究生6级飘过的菜鸡一枚）。'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '对于保研，你有哪些注意事项想要提醒同学们？',
                                        a: '保研之前最好还是先想好自己究竟该干什么，毕竟只会越来越卷，如果打算去大厂开发，真没必要卷保研，一个硕士学历不如三年工作经验。\\对于保研，GPA和科研都很重要，需要全面提升自己。而且跟你竞争的并不是你身边的同学，而是来自于全国各地各大院校的同一年级的人，所以要有大局观。而且要注意时间节点，有机会就报，不要妄自菲薄，机会是自己争取来的，万一馅饼真砸头上了呢（bushi）！'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '你从事了哪些科研经历？对你用什么帮助？',
                                        a: '主要参加的还是郭军老师的项目组，当时参与到了好几个组当中，总的来说各种竞赛的奖还是拿了很多的，对于自己自身实力的提升还是毋庸置疑的，而且对于保研还是就业只能说百利无一害。只不过可能本科过得很累，但是也还是让自己的本科过得很充实，而不是浑浑噩噩混过去。'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '你觉得保研应该如何挑选导师、院校以及地区？',
                                        a: '首先，择校一个好的title肯定重要，不要傻呵呵的因为学硕而去选择差一级的学校。在就业来看真没啥区别，唯一的区别就在考公的专业代码上。当然可能有的学校专硕不提供宿舍或者学费贵，但是相比以后的工资来说不过洒洒水了。其次，选组也尤为重要，特别做算法的，有的学校可能不算顶尖，但是组里有关系，而且组强的话，在就业就有得天独厚的优势。然后，导师也特别特别重要（划重点），毕竟你之后毕业与否，研究生2-3年的生活就跟他朝夕相处了。遇见一个坑导真的要命，屁事多还不能实习也不能出成果（狗头保命）；遇到羊导你就可以快速出去实习，积累经验，但是可能真没指导；遇到科研导可以快速积累成果，在之后不论升学还是就业都是有优势的。当然，导师的研究方向也很重要，选一个冷门研究方向，升学和就业都有可能G。具体如何选择还是得自己根据自身情况综合考虑。'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '你参与过哪些学生工作？你觉得有什么特殊的收获？',
                                        a: '我最开始的学生工作是班长。这个职位的下限很低，但是做一个好班长却是很难的。就我看来，这个职位纯凭良心。在我认识的这么多人中，有些就仅仅落实转发的责任，但是这却不是同学们真正需要的，那么如何针对不同的同学有着不同的交流方式尤为重要，这就很好的锻炼了我的人际交往能力。\\另外一个让我印象深刻的就是智能基座奇点俱乐部主席，在这个俱乐部中认识了很多各个专业的同学，在与他们的交流中，让我看待事物有了更多更深层的角度。而且在这个俱乐部中，让我对于大型活动的策划、举办等方面的能力也有很好的提升。'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '对于目前的就业环境，你有什么看法或者说是对大一同学的建议？',
                                        a: '大一，学好专业课的同时，想一想自己之后究竟想干什么，最重要的就是多多享受大学生活，毕竟累了那么多年。\\如果打算走大厂开发的道路的话，就想好自己想去做哪一块，明晰自己之后需要学哪些技术栈，大二和大三上在保证不挂科的同时，多多提升自己的专业能力，掌握好相应的技术栈，提升自己的竞争力。\\如果想做算法的话，学历都是硕士起步了，但不排除等你们毕业都得博士学历了。在这一块儿基本上就得考虑升学的问题了，那么最好在大一就想好自己对什么感兴趣，多多了解有哪些方向，然后之后保证成绩的同时多多专研，看看领域的研究。\\国企真不是计算机的主战场，现在很卷，大家慎重考虑。\\如果想进体制的话，最好还是走大厂开发的流程给自己一个保底，总不能一直gap考公考编吧，在平时没事儿的时候可以了解一下行测，多做积累吧。'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '你觉得大学生活应该是什么样子的？',
                                        a: '我感觉大学生活应该是充满活力的，作为一个大一到大四基本上一直被困着的老学长，属实没有体会到大学的快乐，不是被困在家，就是被困到学校，现在还是很向往自由的生活的。有机会就多出去看看，毕竟以后这样的时间还是很少的。\\另外，我认为在大学的生活是真正提升自己的开始，当你离开父母的束缚，以及高中班主任的唠叨之后，而在这个无人管控的环境中，各种各样的诱惑有很多。但是如何在众多诱惑中，合理安排自己的时间，不会导致自己沉迷是大学教给我们的一堂课。'
                                    }, {
                                        type: NWComponent.NWMotto,
                                        message: '追逐梦想，坚持努力，成就自己的传奇！（bushi）',
                                        author: '崔中健'
                                    }
                                ]
                            }
                        ]
                    }
                ],
                contributors: []
            }, {
                title: "24届刘嘉伟同学",
                last_update: "2024年10月17日",
                name: "LiuJiaWei",
                description: undefined,
                sections: [
                    {
                        title: undefined,
                        subsections: [
                            {
                                title: undefined,
                                contents: [
                                    {
                                        type: NWComponent.NWPersonalIntro,
                                        name: '刘嘉伟',
                                        avatarUrl: 'https://image.neuwiki.top/image/liujiawei.png',
                                        college: '信息科学与工程学院',
                                        grade: '2024届',
                                        major: '自动化',
                                        graduation: '哈尔滨工业大学航天学院',
                                        introduction: '一个永远行走在追求爱和自由路上的旅行者;作为主演参演国家级舞台剧《能不奋勉乎吾曹》；纪念建党102周年表彰大会暨“讲述-东大人的故事”典型推介会主讲人；作为制片、导演、拍摄、调色完成东北大学信息科学与工程学院2024届毕业MV《再见再见》；大学期间成立“大梦想家”校园摄影工作室完成30+班级的拍摄；东北大学2024届本科生毕业典礼优秀学生代表发言',
                                        achievements: ['篮球摄影', '退役军人', '“四有”优秀士兵奖章', '中国大学生自强之星', '辽宁省优秀毕业生', '“学以立德”金牌', '奖学金6次', '最具影响力毕业生'],
                                        qq: '2775578683',
                                        wechat: '15279959477',
                                        email: '2775578683@qq.com'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '你在本科期间做过哪些学生工作，有什么感受或者意见？',
                                        a: '担任过辅导员助理、班级班长、体委和寝室长等学生职务，感受就是作为学生干部和普通学生看到的东西以及责任感是完全不一样的。学生工作如果真的用心去做，很锻炼人，看自己想要什么，如果是想要履历，完成好学院、导员交代的任务，传达好讯息，Hold住班级就够了，但是如果想通过这个过程锻炼自己，则需要用心去把握好每个细节，大家都有自己的想法，怎么去统一，怎么去协调资源，去沟通等等。'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '你为什么选择服兵役，期间有什么特殊的感受，对你产生了什么影响？',
                                        a: '头脑一热，自己热爱穿上军装的样子。身份的转变很锻炼人，笔杆子好握，枪杆子则是一种使命，对我的影响是让我有充分的时间去慢下来思考，而不是低头赶路，身体上更强壮了，精神上更坚毅了，治好了我的拖延症。'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '在本科期间你参与过哪些科研工作，有什么经验想要分享？',
                                        a: '作为负责人参加过大创，项目持续了近两年，以国家级优秀结题，并且路演获得最佳创意项目，以项目为支点，获得过国奖3项。经验就是选好项目很关键，自此之后走好每一步，开头总是困难的，需要攻坚克难一段时间，慢慢的积累经验就越走越顺了。'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '对于你所在的专业，应该如何选择保研的学校以及相关的导师？',
                                        a: '选择一个好老师>一个好方向>一个好学校（清北除外，其他985都差不多），尽量往自己未来规划的城市靠，了解研究方向所对应的职业和薪资是否符合自己的预期。'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '对于本科入学的新生，你觉得应该怎么根据自身条件规划人生路线？',
                                        a: '首先应该明确[1.选择升学]还是[2.面向就业]两个大方向。\\选择升学的话则需要看自己是国内升学、国外保研升学还是国内考研升学，三者赛道均不同。国外升学需要注意自身家庭条件是否支持，还有一些院校可能对数学等学科学分有要求，保持好自己的GPA，提前考好语言等级；国内保研则需要认真对待好每一门课程，尽可能多选选修课特别是自己拿手的提升绩点，参加几个比赛，科研不强求但是目前比较卷最好有个专利之类的；国内考研提前一年左右准备就行，大一大二可以多多参加活动，学好专业课，享受好大学时光，备考期间尽量摈弃一些娱乐活动破釜沉舟。面向就业可以多关注岗位要求，学习相应的技能，多多关注实习，可以考虑去实验室锻炼自己的工程能力。'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '在学习、生活中出现问题时，你建议用什么方式调整心态？',
                                        a: '通过运动分泌多巴胺，但是尽可能不要出现心烦的时候，因为没有什么事情过不去，一个好的心态胜于一切，那些你认为重要的事其实也没啥大不了的，最大程度的和自己和解。'
                                    }, {
                                        type: NWComponent.NWMotto,
                                        message: '无所畏惧，无限进步，享受过程，事尽其兴！',
                                        author: '刘嘉伟'
                                    }
                                ]
                            }
                        ]
                    }
                ],
                contributors: []
            }, {
                title: "24届刘志钊同学",
                last_update: "2024年12月18日",
                name: "LiuZhiZhao",
                description: undefined,
                sections: [
                    {
                        title: undefined,
                        subsections: [
                            {
                                title: undefined,
                                contents: [
                                    {
                                        type: NWComponent.NWPersonalIntro,
                                        name: '刘志钊',
                                        avatarUrl: 'https://s21.ax1x.com/2024/11/18/pARhMAf.png',
                                        college: '软件学院',
                                        grade: '2024届',
                                        major: '软件工程',
                                        graduation: '国防科技大学',
                                        introduction: '东北大学2020级软件学院毕业生，现于国防科技大学计算机学院计算机科学与技术专业直博。',
                                        achievements: ['数学建模美赛特等奖提名', '奖学金多次', '自然语言处理方向', '开源软件构建与社区建设'],
                                        github: 'https://lzz335.github.io/profile/',
                                        email: 'liuzhizhao@nudt.edu.cn'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '你为什么选择从机械学院转到软件学院？',
                                        a: '一方面是从小接触计算机，对电脑这些东西有兴趣，一方面，家里穷，想搞钱。'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '你是如何确定自己的科研方向和兴趣的？',
                                        a: '我的本科阶段进行了很多的尝试，从给别人做仿真，到写一些计算数学上的算子，再到做深度学习，搞NLP，广泛的尝试下才确定了我的兴趣，但是我认为我的经历是难以复制的，实际上，因为我这样的“爱玩”，让我差点没保上研。'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '在选择科研方向时，哪些因素你认为最重要？',
                                        a: '首先是兴趣，其次是有了兴趣后，我认为你需要对你即将想要从事的方向有一个大致的认知，包括但不限于：读综述了解行业的大致情况，参加一些沙龙与报告，了解一下这个领域发生了什么，以NLP为例，形如量子位、机器之心这些公众号可以为还没入行的小白们提供一些前沿的视角。科研，尤其是准备读博或者已经直博的，有一个需要关注的地方是，你从事的这个方向在几年后依旧有意义吗？虽然从小方向上说可以等到读了博，有了全面的了解，再选择自己需要深入的小分支，但是大方向上至少不能歪。'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '你觉得科研工作适合哪些同学？',
                                        a: '首先，你的家庭条件不能特别差，此处的差我个人的想法是，至少你的本科阶段的学习不是贷款的，你的家庭对你需要挣钱养家这件事情并不是特别的迫切，当然，如果你是这样，也不代表你一定不能从事科研工作，你也可以和我一样选择国防科大的无军籍，至少在这里免学费，助研津贴算是国内很高的档次了(5000/月(普通直博)，7000-10000/月（大工程直博）)，经济问题不会成为你接下来的阻碍。其次是，你能扛得住压力，这种压力有点难以描述，也有可能是在某一刻，你感觉全世界都不支持你了，但是你需要说服全世界相信你是对的，当然，这可能也和我的导师对我的严格有关，我不了解其他人是什么情况。还有就是最好有一颗想要探索的心，如果选择直博的话，我个人不推荐单身狗选择(bushi)，从我这里来看，大概率你的未来五年都是单身狗了。'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '对于想要入门科研工作的同学，你有什么建议和意见？',
                                        a: '不是所有人都适合做研究，一个最简单的尝试就是，你尝试尽善尽美的完成你的任何一门开放性的学科大作业，再按学术写作的要求把他写出来，看看能做成什么样子，以我为例，打开我深度学习大门的就是深度学习技术这门课，相比于大家很多人，我算是起步很晚很晚的，我就是在这门课上自己发现了一个问题，然后自己调研了现有的技术栈，设计了一套解决方案，然后发现这个东西很有意思才决定入坑了这一行。我也建议大家试一试，真实的科研和这个当然差的很远，但是如果这个都坚持不下来或者做不到，我建议慎重考虑一下入行科研工作这件事。'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '对于保研，你有什么建议？有什么需要注意的因素？',
                                        a: '没啥建议，我至今觉得我的保研经历很离谱，先是被一堆学校拒绝，然后国防科大的面试的四个问题恰好全部问到了我之前“整活”时的一些经验（但是这些经验并没有体现在我的简历里），然后拿了一个很高的面试分被一堆老师打电话后就开摆了。'
                                    }, {
                                        type: NWComponent.NWMotto,
                                        message: '长风破浪会有时,直挂云帆济沧海。',
                                        author: '刘志钊'
                                    }
                                ]
                            }
                        ]
                    }
                ],
                contributors: []
            }, {
                title: "24届邱俊翔同学",
                last_update: "2024年10月22日",
                name: "QiuJunXiang",
                description: undefined,
                sections: [
                    {
                        title: undefined,
                        subsections: [
                            {
                                title: undefined,
                                contents: [
                                    {
                                        type: NWComponent.NWPersonalIntro,
                                        name: '邱俊翔',
                                        avatarUrl: 'https://image.neuwiki.top/image/qiujunxiang.png',
                                        college: '软件学院',
                                        grade: '2024届',
                                        major: '软件工程',
                                        graduation: '中国科学技术大学信息科学技术学院USTCLDS',
                                        introduction: '本科期间，获得“国家奖学金”，"东北大学优秀学生标兵"在内等12项奖学金及荣誉称号，校长奖章提名。于管道缺陷检测，药物疗效预测，心电监测，多模态内容生成等领域开展科研探索。发表1篇SCI论文（Top刊）,1篇EI论文（一作），1篇SCI论文同行评审中（一作，Top刊），1篇专利，2篇软件著作权。参与创新创业竞赛获得6项高星级国家级奖项及十余项省级一等奖奖项，包括“互联网+”大学生创新创业大赛全国银奖，国际大学生数学建模竞赛特等奖提名（前2%），TRIZ杯创新方法大赛全国第七名，“挑战杯”大学生创业计划竞赛省级金奖等。作为班长，所在班级获评“东北大学优秀班集体标兵”。以软件学院创新特长第一推免至中国科学技术大学LDS实验室。 ',
                                        achievements: ['国家奖学金', '奖学金荣誉称号12项', '论文产出', '竞赛国奖6项', 'GPA 3.99'],
                                        qq: '543842342',
                                        wechat: 'qiujx_ustc',
                                        email: 'gzqjx123@163.com',
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '你为什么选择保研，而不是就业/留学等其他毕业去向？',
                                        a: '相对于软件开发，我对科研更感兴趣一些。英语不是特别好，而且国内选到了心仪的老师，因此没有提前准备本科就出国。'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '对于保研，你有哪些注意事项想要提醒同学们？',
                                        a: '保研需要均衡发展绩点，竞赛以及论文（科研经历）。绩点竞赛可以保证获得保研资格，而论文（科研经历）能够提高保研上限（如果绩点很高比如rank前1%，那也可以保研到很好的学校）。'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '科研经历在保研中是否重要？应该从事哪些方向的科研？',
                                        a: '对像我这种rank10%的人，科研经历是十分重要的。因为绩点低会让我根本无法进入大部分好学校的夏令营甚至预推免，因此提前联系弱com（录取老师说了算）院校的导师，是另一条保研路。而科研经历让我能够在面试中有交流的话题，如果跟老师研究方向匹配，那就是很好的加分点。科研方向的选择应该与自己感兴趣的方向相匹配，而不是随大流，不同方向都有自己的利弊，比如ai太卷，传统cs太难等。'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '你从事了哪些科研经历？对你用什么帮助？',
                                        a: '我本科参与了管道缺陷检测，药物疗效预测，心电监测，多模态内容生成等ai相关项目。让我能够match到很多面试导师。'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '你觉得保研应该如何挑选导师、院校以及地区？',
                                        a: '对于导师，我认为人品是最重要的，你在与导师的聊天时候可以感受到。同样，老师的科研实力也很重要，主要参考课题组学长学姐的毕业去向以及论文产出。如果能咨询到对应老师的学生，能够更全面地了解。也建议大家记得利用搜索引擎了解一下对老师的评价。对于院校，我们需要保证老师差不多的情况下才选更好的title，不要对好学校有太多的滤镜，计算机领域老师才是最重要的因素，因为会影响我们的自身水平。对于地区，如果不读博像就业的同学最好选择附近有大厂的地区，便于实习。如果想读博深造，那还是选最好的导师。'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '本科阶段的哪些经历最让你难忘，并且有意义？',
                                        a: '本科阶段与在校老师面对面交流科研是我觉得最幸福难忘的时刻。'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '你擅长哪些领域？对于这些领域的学习你有什么建议和意见？',
                                        a: '我现阶段接触更多内容生成相关的课题。对于这些ai相关领域，我希望同学们可以在具体项目中一步步学习基础知识以及科研方法。网上的基础知识网课在实践中总会或多或少有偏差。'
                                    }, {
                                        type: NWComponent.NWMotto,
                                        message: '学就好好学，玩就好好玩！！',
                                        author: '邱俊翔'
                                    }
                                ]
                            }
                        ]
                    }
                ],
                contributors: []
            }, {
                title: "24届刘函睿同学",
                last_update: "2024年10月23日",
                name: "LiuHanRui",
                description: undefined,
                sections: [
                    {
                        title: undefined,
                        subsections: [
                            {
                                title: undefined,
                                contents: [
                                    {
                                        type: NWComponent.NWPersonalIntro,
                                        name: '刘函睿',
                                        avatarUrl: 'https://image.neuwiki.top/image/liuhanrui.png',
                                        college: '软件学院',
                                        grade: '2024届',
                                        major: '软件工程',
                                        graduation: '北京航空航天大学计算机学院',
                                        introduction: '站在你面前的是：军训反导员PUA第一人；高数逃课睡眠者；最后一届团委宣传部成员；从省委办公厅对学校水质问题信访举报者；团结全院学生抗议不合理校企合作实践课程的主要组织者、撰稿者和领导者；绩点从大一上期末的rank 1一路下滑退步者；张院长、张老师、毛老师和姜老师的门生；东大纯良小粉红——刘函睿 ',
                                        achievements: ['国家奖学金', 'MSSP中科院一区共同一作', '2023年大创结题国家级优秀', '计算机设计大赛国家二等奖', '幻天动漫社浑南校区社团负责人', 'Rank前3%'],
                                        qq: '3257104973',
                                        wechat: 'liuxiaohanhanzi'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '你为什么选择保研，而不是就业/留学等其他毕业去向？',
                                        a: '高考没考好，想找补，但又担心考研容错率太低，遂一入学就开卷保研。中途也有阵子不想保研了，半途而废又觉得浪费了之前的努力，只能一条保研路卷到黑了。关于出国，其实我在大一时被某位去向哈佛的学姐点拨过：“最好把握与加州伯克利的交换机会，多connection搞到推荐信。”学姐人很好，我也有这个意向，奈何家里经济情况不支持，衡量下来的结论是——出去了留下来还划算，毕业后就回国工作就难说值不值了。不想就业单纯是因为不想干开发。本科出来，如果没ACM牌子或者其他特长，大概率就是开发岗了，哦对，还有少儿编程老师待遇似乎也不差。'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '对于保研，你有哪些注意事项想要提醒同学们？',
                                        a: '科研or刷题的建议在下一条，这里我说一点野路子吧，各位早听早规划。\\1.想去浙大CAD&CG国重，其实设计学也是一条路。只要选上国重的老师就OK，一位浙大国重毕业的研究生学姐教我的，专业对人家就业影响不大，薪资很高。\\2.想去清北的同学，不建议考虑清华本校，作者本人没见过几个东大保上清华的，北大倒是可以多冲冲。大兴的软微很推荐，当然还有清深北深，强烈推荐。本人就是当时全填本校了，浪费了机会。除非你一心科研或者考公，不然别觉得专硕不如学硕，按这个形式下去，研究生扩招，都趋同了毕业出来没差。\\3.想去清华拿计算机毕业证的我再推荐一个路子，认准预推免阶段的“信息艺术设计（交叉）”专业，名额仅在预推免开放，要求提交作品集与全三学年全部成绩单。这是清华计院和美院联培的项目，上岸后一年只要能选到一个计算机专业的导师，你的毕业证就是根正苗红的清华计算机学院。（而且女生相对多，脱单简单）\\4.香港的几个开的最早，说实话很值很推荐。\\5.想跨保金融的同学一定要趁早准备，金融项目很多四五月就启动了，千万别学我，错过了夏令营所有机会，预推免北大汇丰差一点，软微金科差7人上岸，永远的遗憾。'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '科研经历在保研中是否重要？应该从事哪些方向的科研？',
                                        a: '决定了要保研的同学，如果是直博那请加油科研，争取出paper；但如果是硕士，我的建议是啥都没有数学+408+机考重要。别天天看绿群加压自己，我很不喜欢绿群那个传染焦虑的氛围。科研不一定要出成果，能有经历丰富简历，面试时说得清楚有条理，其实就足够了；这里举个反面典型，某位学长拿了一区共一又如何？南大机考做不出题，你面试侃侃而谈分数再高有什么用……好吧就是我自己，泪，千万别学我，有空在那当调参侠憋paper不如洛谷力扣搞起来。'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '选择保研的学校、专业时，你考虑了哪些因素？',
                                        a: '现在回过头来总结，城市=学校>>专业吧（个人认为）'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '本科学习阶段你有什么建议想要分享给大家？',
                                        a: '王道考研和张宇数学的书很好用，此外当学习委员、班长等职务不会耽误你的学习的，能当就当。最好和辅导员处好关系……当然要是摊上一个不太行的导员也不勉强。'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '保研成功后，你对未来的职业发展进行了哪些规划？',
                                        a: '一路走来，我还是想感谢很多人：教导我最多的四位老师，互相帮助的保研战友，出国方面指点我的唐师姐，慷慨教我写套磁信的许师哥，对我的职业规划悉心答疑的杨师哥，学业上次次救我于水火的文师姐……还有帮助我写推荐信的各位老师，领导们，再次衷心的谢谢你们。未来切走且看吧，毕竟世间广大，人生并非单线条。'
                                    }, {
                                        type: NWComponent.NWMotto,
                                        message: '白山黑水，纸短情长。一叶浮萍归大海，人生何处不相逢。',
                                        author: '刘函睿'
                                    }
                                ]
                            }
                        ]
                    }
                ],
                contributors: []
            }, {
                title: "24届陈柏锦同学",
                last_update: "2024年10月25日",
                name: "ChenBoJin",
                description: undefined,
                sections: [
                    {
                        title: undefined,
                        subsections: [
                            {
                                title: undefined,
                                contents: [
                                    {
                                        type: NWComponent.NWPersonalIntro,
                                        name: '陈柏锦',
                                        avatarUrl: 'https://image.neuwiki.top/image/chenbojin.png',
                                        college: '软件学院',
                                        grade: '2024届',
                                        major: '软件工程',
                                        graduation: '北京大学软件与微电子学院软件工程专业',
                                        introduction: 'NEUSOFT的UU来软微可以找我',
                                        achievements: ['GPA3.0', 'Rank后20%', '无竞赛', '无项目'],
                                        wechat: 'chendade9578',
                                        email: 'dade@stu.pku.edu.cn'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '你决定考研的初衷是什么？是什么激发了你对北大软微学院的兴趣？',
                                        a: '初衷：本科太混了，想读个研究生沉淀一下。兴趣：北大这个title，对本科非清非北的学生来说诱惑力极大，从小接受到的教育中就体现了清北独一档的存在，在相对受教育程度较低的小镇长辈眼中，更是被夸大了几倍。本科过于摆烂的生活，加上高考发挥的不是相对顺利，所以当你了解到软微后，发现自己也有机会到达时，种种因素的叠加，让软微的吸引力更是被扩大了许多。'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '备考期间，您是如何平衡学习、休息和娱乐的时间的？',
                                        a: '心中有了信念之后，制定了以3-5天为时间单位的计划表，尽最大努力去实现这个计划表。'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '您在选择考研资料时有什么特别的偏好或推荐？',
                                        a: '政治：腿姐全套，腿姐的强化班和模拟班，苍盾上刷模拟题的选择题。\\英语：B站的田翰博up主，翻译唐静，刘琦的新题型，作文Fiona（B站up）。\\数一：张宇全家桶，概率论方浩，线面积分周洋鑫，王谱的微分算子，真题推荐李艳芳系列，模拟题张八张四。'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '您有没有遇到过学习瓶颈期，是如何调整心态继续前行的？',
                                        a: '10-11月的时候模拟题的分数并不理想，但是那个时候报名已经结束了，只能每天坚持刷题总结，到了12月情况突然好起来了'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '备考过程中，有没有遇到过特别有效的学习方法或技巧？',
                                        a: '复习回顾，最好每天晚上花一点时间回顾今天所学的内容。'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '北大软微学院的复试有哪些特点，需要提前做哪些准备？',
                                        a: '比较随机，当然有项目和论文是比较占优势的。'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '您是如何获取考研信息和最新动态的？',
                                        a: '知乎刷软微的经验贴，然后加入一些软微的考研交流群。'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '您对即将参加考研的学弟学妹有什么寄语或建议？',
                                        a: '加油去冲刺自己心仪的院校吧，考研这个过程本身就值得让人回味。'
                                    }, {
                                        type: NWComponent.NWDialogue,
                                        q: '如果可以回到考研前的某个时刻，您会给自己哪些建议或提醒？',
                                        a: '回到最开始的那个节点，我会建议自己尽量每天都要坚持学习，前期不要太过懈怠。'
                                    }, {
                                        type: NWComponent.NWMotto,
                                        message: '当你老了，回顾一生，就会发觉 : 什么时候出国读书、什么时候决定做第一份职业、何时选定了对象而恋爱、什么时候结婚，其实都是命运的巨变。只是当时站在三岔路口，还以为是生命中普通的一天。',
                                        author: '陈柏锦'
                                    }
                                ]
                            }
                        ]
                    }
                ],
                contributors: []
            }, {
                title: "24届王汉彬同学",
                last_update: "2024年11月16日",
                name: "WangHanBin",
                description: undefined,
                sections: [
                    {
                        title: undefined,
                        subsections: [{
                            title: undefined,
                            contents: [
                                {
                                    type: NWComponent.NWPersonalIntro,
                                    name: '王汉彬',
                                    avatarUrl: 'https://image.neuwiki.top/image/wanghanbin.png',
                                    college: '软件学院',
                                    grade: '2024届',
                                    major: '软件工程',
                                    graduation: '北京大学软件工程国家工程研究中心',
                                    introduction: 'GPA rk3，综排rk1，曾获国家奖学金等奖学金。曾在NEUIR、THUNLP、ModelBest（面壁智能）和上海人工智能实验室科研实习。我的研究兴趣包括代码智能和LLM推理。',
                                    achievements: ['一作ACL2024', '一作ICML2024', '一作TOIS', '投稿NAACL2025', '投稿ICLR2025', '投稿CVPR2025'],
                                    qq: '1115685184'
                                }, {
                                    type: NWComponent.NWDialogue,
                                    q: '您是如何在本科阶段就取得如此丰硕的研究成果的？能否分享一下您的经验和方法？',
                                    a: '大胆尝试科研实习，坚持不懈，找强导强组实习。另外最重要的一点是自己需要努力，功夫不负有心人。'
                                }, {
                                    type: NWComponent.NWDialogue,
                                    q: '保研到北大，您认为自己的优势在哪里？',
                                    a: '科研优势，申请时候几乎面得所有课题组都对我的科研非常感兴趣。'
                                }, {
                                    type: NWComponent.NWDialogue,
                                    q: '在保研过程中，您遇到了哪些挑战？是如何克服的？',
                                    a: '机考，没克服，个别学校学院需要，pku的机考正常水平之上就行。'
                                },
                                {
                                    type: NWComponent.NWDialogue,
                                    q: '您在北大研究生阶段的研究方向是什么？为什么选择这个方向？',
                                    a: '自然语言处理，申请时候做了一年多，不想换方向，还要学新的东西，申请的时候就只申请研究方向非常match的老师。'
                                }, {
                                    type: NWComponent.NWDialogue,
                                    q: '您对未来在学术领域的职业规划有何设想？',
                                    a: '多发paper。'
                                }, {
                                    type: NWComponent.NWDialogue,
                                    q: '您如何看待本科生参与科研的重要性？',
                                    a: '相比于科研，我觉得绩点可能更重要，科研锦上添花。有余力的话可以多参与参与，科研经历不在多，把做的东西真正弄明白才是王道'
                                }, {
                                    type: NWComponent.NWDialogue,
                                    q: '您在本科阶段参加过哪些课外活动？这些活动对您的成长有哪些帮助？',
                                    a: '班级，年级会的一些活动，使自己更勇敢，更自信，不怯场。'
                                }, {
                                    type: NWComponent.NWDialogue,
                                    q: '您是如何在本科阶段找到并确定自己的研究兴趣的？',
                                    a: '这个东西可能做着做着就喜欢了，大模型出来之前我这个方向都要死了，大模型出来之后又火了。对于科研项目不能算是有兴趣也不能算是没有兴趣的话，就先做着，慢慢发现。'
                                }, {
                                    type: NWComponent.NWDialogue,
                                    q: '对于希望本科阶段发表论文的同学，您有哪些建议？',
                                    a: '看好你，加油。'
                                }, {
                                    type: NWComponent.NWDialogue,
                                    q: '您在北大有哪些期待？希望在这里实现什么样的成就？',
                                    a: '好好学习，天天向上！'
                                }, {
                                    type: NWComponent.NWMotto,
                                    message: '知足常乐！',
                                    author: '王汉彬'
                                }
                            ]
                        }]
                    }
                ],
                contributors: []
            }
        ]
    }
    , {
        title: '生活出行',
        name: 'DailyLife',
        pages: [
            {
                title: '医疗与报销',
                name: 'MedicalAndReimbursement',
                last_update: '2024年9月22日',
                description: '大学生医保即学校能够承担一部分医疗的费用，但大部分同学不了解具体的流程或根本不知道医保的存在，导致学习阶段没有享受到应有的权利，这里给大家提供关于浑南、南湖校区就诊的建议以及医保的基础信息。',
                sections: [
                    {
                        title: '校内就医',
                        subsections: [
                            {
                                title: undefined,
                                contents: [
                                    {
                                        type: NWComponent.NWDescription,
                                        text: '对于感冒、发烧等小问题，建议前往校医院进行治疗，这里以浑南校区为例，同学携带校园卡前往浑南校区就诊，经过采血、开药的环节即可，使用校园卡当场报销，价格很便宜。南湖校区西门外为东北大学校医院，可以自行前往。'
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        title: '校外就医',
                        subsections: [
                            {
                                title: undefined,
                                contents: [
                                    {
                                        type: NWComponent.NWDescription,
                                        text: '对于较为严重或者校医院没有足够医疗条件，但还没有严重到需要救护车救助的情况，首先前往校医院开具用于报销的转诊单，在此之后前往附近的三甲医院就诊。南湖校区附近三甲医院较多，浑南校区最近的为苏家屯中心医院，前往时携带学校下发的医疗卡以及电子医保码。校外就诊无法当场报销，学校会以年为单位进行报销，注意辅导员的通知。'
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        title: '其他内容',
                        subsections: [
                            {
                                title: undefined,
                                contents: [{
                                    type: NWComponent.NWDescription,
                                    text: '大家注意保存好各种收据、发票等内容。每年假期门诊在异地无法报销，住院需要看当地的政策，具体请咨询相关医院的负责人员。'
                                }]
                            }
                        ]
                    }
                ],
                contributors: [
                    {
                        name: "苏璃",
                        avatar_url: "https://image.neuwiki.top/image/suli.jpg"
                    }
                ]
            }, {
                title: '校园卡业务',
                last_update: '2024年9月22日',
                name: "CampusCard",
                description: "校园卡主要是指学生证、研究生证、教工卡、普通校园卡、消费卡等五种类型的卡片，具备以下功能：校内证件（学生证、教工证、图书证、门禁等）、金融消费（餐厅、浴池、体育馆、宿舍开水炉等）、信息查询、补助发放等。",
                sections: [
                    {
                        title: "校园卡简介",
                        subsections: [
                            {
                                title: undefined,
                                contents: [
                                    {
                                        type: NWComponent.NWDescription,
                                        text: "校园卡设有两个密码：消费密码和查询密码。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: "**查询密码**：登录“校园卡自助服务平台”或者拨打语音挂失电话时使用，其初始密码为持卡人的有效证件（身份证、护照）号码的最后6位（如果身份证最后一位为X，则X视为0）；如果没有登记证件号码，则为“000000”。查询密码可以在“校园卡自助服务平台”上修改。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: "**消费密码**：在消费额超过限制时使用，其初始密码为持卡人证件（身份证、护照）号码的后6位（如果身份证最后一位为X，则X视为0）；如果没有登记证件号码，则为“000000”。消费密码可以在圈存机上修改，修改方法为：将校园卡放至圈存机“读卡区”，选择“校卡服务”->“修改密码”，输入原密码及新密码即可。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: "为保证校园卡资金的使用安全，请用户及时修改密码。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: "有问题可以联系校园卡服务中心为师生使用校园卡提供日常服务，如：办卡、补卡、换卡、挂失、解挂、现金、银联POS机充值等。"
                                    }, {
                                        type: NWComponent.NWList,
                                        order: false,
                                        data: ['校园卡服务中心联系电话：024-83690800', '校园卡自助语音服务电话：024-83690900', '校园卡信息门户网址：[http://ecard.neu.edu.cn](http://ecard.neu.edu.cn)', '校园卡自助服务平台网址：[http://ecard.neu.edu.cn/SelfSearch/](http://ecard.neu.edu.cn/SelfSearch/)']
                                    }
                                ]
                            }
                        ]
                    }, {
                        title: '校园卡补办',
                        subsections: [
                            {
                                title: undefined,
                                contents: [
                                    {
                                        type: NWComponent.NWDescription,
                                        text: '如果校园卡丢失，首先挂失校园卡。'
                                    }, {
                                        type: NWComponent.NWList,
                                        order: false,
                                        data: [
                                            '**圈存机自助挂失**：在校园内分布的圈存机上，选择“校卡服务”->“自助挂失”，输入学（工）号和密码，完成挂失操作。', '**网上自助挂失**：登录校园卡自助服务平台，根据网页提示进行挂失操作。', "**自助语音电话挂失**：拨打自助语音服务热线电话024-83690900，按照语音提示进行挂失操作。",
                                        ]
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: '在连续三次输入错误的消费密码后，校园卡将被锁定，必须本人持校园卡和有效身份证件（身份证、护照）到校园卡服务中心办理解锁。如果挂失完成，请带着身份证、学校下发的中国银行卡进行补卡，其中身份证用于认证身份，银行卡用于支付工本费。'
                                    }, {
                                        type: NWComponent.NWList,
                                        order: false,
                                        data: [
                                            '**南湖校区**：校园卡服务中心（东大学子超市正门对面路东），工作时间（法定节假日除外）周一至周五 8:00—12:30 14:00—17:00', '**浑南校区**：校园卡服务中心（生活服务中心一楼滚梯南侧，水果超市旁边）工作时间（法定节假日除外）周一至周五 8:30—13:00 14:00—17:00'
                                        ]
                                    }, {
                                        type: NWComponent.NWTips,
                                        title: "提示",
                                        case: "info",
                                        data: "新补办卡片可立即充值使用。补卡后，校园卡卡号保持不变，密码重置为系统内登记证件号码的最后六位。"
                                    }
                                ]
                            }
                        ]

                    }, {
                        title: "圈存与充值",
                        subsections: [
                            {
                                title: undefined,
                                contents: [
                                    {
                                        type: NWComponent.NWDescription,
                                        text: "进行校园卡在线充值后，是不能立即同步到校园卡实体卡中，因此需要一个操作让余额同步，这个操作叫做“圈存”。目前浑南校区圈存机地点为一食堂文印室对面、生科楼、一号楼。"
                                    },
                                    {
                                        type: NWComponent.NWList,
                                        order: false,
                                        data: [
                                            "**圈存机充值**：登录“校园卡自助服务平台”，进入“个人信息”的“圈存授权维护”，开通建行卡的“快捷付”功能后，即可到圈存机上选择“金融服务”中的“快捷付”项目，输入相应的信息给校园卡进行充值。", "**网上银行充值**：登录建设银行网上银行，选择“缴费支付”，选择“缴费支付地区和类别”及“选择缴费支付内容（校园一卡通充值）”，网银转账成功后，持校园卡到校内任一台圈存机上选择“领款服务”中的“圈存款项”领款。", "**手机银行充值、建行微信公众号充值**：登录建行手机银行（进入建行微信公众号），选择“悦生活”“生活缴费”中的“IC卡、联名卡充值”，选择缴费地区（辽宁省沈阳市）及缴费单位（东北大学校园卡充值），输入校园卡号和缴费金额，手机银行转账成功后，持校园卡到校内任一台圈存机上选择“领款服务”中的“圈存款项”领款。"
                                        ]
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: "同时，宿舍内用于打热水的余额与校园卡余额独立，所以需要在圈存机额外圈存，这个叫做小钱包。但目前饮水机应该都已经采用线上扫码支付，小钱包功能已经失效了。但还是要提醒大家小钱包金额在校园卡丢失补办时无法返还，为避免损失，小钱包内总金额最多为10元。小钱包内金额不能再转出他用， 转入小钱包内金额在校园卡丢失后无法退还。"
                                    }
                                ]
                            }
                        ]

                    }, {
                        title: "消费限额与余额查询",
                        subsections: [
                            {
                                title: undefined,
                                contents: [
                                    {
                                        type: NWComponent.NWDescription,
                                        text: "校园卡设置了限额保护，餐限额为30元，日消费限额为50元，超过消费限额时需要输入六位消费密码。可以通过“校园卡自助服务平台”或圈存机修改餐限额和日消费限额。 转入小钱包内金额在校园卡丢失后无法退还。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: "圈存机修改方法：将校园卡放至圈存机“读卡区”，选择“校卡服务”->“修改限额”，输入校园卡卡号和密码即可进行修改。转入小钱包内金额在校园卡丢失后无法退还。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: "可以通过“校园卡自助服务平台”、圈存机及自助语音服务电话024-83690900查询消费余额及消费明细。"
                                    }
                                ]
                            }
                        ]

                    }, {
                        title: "二维码快捷支付",
                        subsections: [
                            {
                                title: undefined,
                                contents: [
                                    {
                                        type: NWComponent.NWDescription,
                                        text: "目前，除公共浴池需要使用实体卡片外，其余场所的消费均可使用二维码快捷支付，学校刷卡机支持的二维码有智慧东大e码通、微信支付、支付宝支付三类码。"
                                    }
                                ]
                            }, {
                                title: '智慧东大e码通',
                                contents: [{
                                    type: NWComponent.NWDescription,
                                    text: "各大应用市场搜索下载“智慧东大”，使用学号和统一身份认证密码登录，点击下部导航栏中间的“e码通”即可使用e码通二维码支付，支付默认使用校园卡余额。"
                                }]
                            }, {
                                title: '微信支付',
                                contents: [{
                                    type: NWComponent.NWDescription,
                                    text: "（绑定方法搬运自[信网办微信企业号绑定说明](https://pass.neu.edu.cn/portal/wechat/help/wechat-help.html)） 使用微信“扫一扫”功能扫描下面的二维码，进入到验证页面后，输入统一身份认证账号和密码，点击验证，完成身份验证。"
                                }, {
                                    type: NWComponent.NWImage,
                                    src: 'https://image.neuwiki.top/image/card_weixin1.png',
                                    width: 200
                                },
                                {
                                    type: NWComponent.NWDescription,
                                    text: "[微信绑定码链接](https://wp.neu.edu.cn/tp_wp/wp/accountbind)。页面提示“绑定成功”之后，扫描以下的东北大学微信企业号二维码，成为东北大学微信企业号的成员之一。"
                                }, {
                                    type: NWComponent.NWImage,
                                    src: 'https://image.neuwiki.top/image/card_weixin2.png',
                                    width: 300
                                }, {
                                    type: NWComponent.NWDescription,
                                    text: "进入微信企业号后，可以直接使用微信支付二维码在刷卡机上支付，支付资金渠道以微信显示为准（不使用校园卡余额）。"
                                }]
                            }, {
                                title: "支付宝支付",
                                contents: [{
                                    type: NWComponent.NWDescription,
                                    text: "扫描下面的小程序码。"
                                }, {
                                    type: NWComponent.NWImage,
                                    src: 'https://image.neuwiki.top/image/card_alipay.png',
                                    width: 300
                                },
                                {
                                    type: NWComponent.NWDescription,
                                    text: "进入小程序后点击左上角“校园卡”，输入个人信息后即可完成绑定。注意此处密码为校园卡消费密码，不是统一身份认证密码，默认为身份证后六位，最后一位X以0记。 可以直接使用支付宝的支付二维码在刷卡机上完成支付，支付资金渠道以支付宝显示为准（不使用校园卡余额）。"
                                }]
                            }
                        ]

                    }
                ],
                contributors: [
                    {
                        name: "Techy-Wu",
                        avatar_url: "https://avatars.githubusercontent.com/u/73032687"
                    }, {
                        name: "苏璃",
                        avatar_url: "https://image.neuwiki.top/image/suli.jpg"
                    }
                ]
            }, {
                title: "校园网",
                last_update: "2024年9月22日",
                name: "CampusNetwork",
                description: "本页内容基于学校信网办[信息化与网络服务指南](http://xwb.neu.edu.cn/2019/0909/c6133a141936/page.htm)、[IP控制网关](http://ipgw.neu.edu.cn/)和自身经验完成。 东北大学为中国教育和科研计算机网（CERNET）东北地区骨干节点，网络条件相对来说还是很不错的。学校的公网出口服务由中国移动提供，游戏加速器可以参考设置。",
                sections: [
                    {
                        title: "连接方式",
                        subsections: [
                            {
                                title: '有线连接',
                                contents: [{
                                    type: NWComponent.NWDescription,
                                    text: "在宿舍、实验室等地可以直接使用网线连接墙上的网络接口连接网络，普通的为百兆，有四个接口的方形盒子为**1000M网络**，在选择网线时可以尽量选择超五类以上的线缆以充分发挥网络性能。"
                                }]
                            }, {
                                title: '无线连接',
                                contents: [{
                                    type: NWComponent.NWDescription,
                                    text: "在校园内任何地方都可以使用支持的设备连接Wlan无线网络使用校园网。学校提供的Wlan网络有“NEU”“NEU-2.4G”和“NEU-Mobile”，均为WiFi6标准，可以根据需求选择连接。 “NEU”为2.4G/5G双频信号，无密码，可以直接连接使用。访问校外资源（即使为免流资源）需要登录IP控制网关。 “NEU-2.4G”为2.4G单频信号，无密码，可以直接连接使用。访问校外资源（即使为免流资源）需要登录IP控制网关。 “NEU-Mobile”为2.4G/5G双频信号，首次连接需要输入学号和校园网密码，第二次直接连接可以直接使用，全程不需要登录IP控制网关。"
                                }]
                            }, {
                                title: undefined,
                                contents: [{
                                    type: NWComponent.NWTips,
                                    title: "提示",
                                    case: "info",
                                    data: "对于想用智能家居的同学，智能家居产品（包括学校新装的空调）只能接入家里那种只要密码的网络，无法接入学校校园网（无密码或者同时需要用户名和密码），需要自备无线网卡给智能家居设备配网。"
                                }, {
                                    type: NWComponent.NWDescription,
                                    text: "在运营商网络或在学校外需要访问校园网内资源时，可以使用VPN连接。对于常用网址，可以直接使用浏览器登录[WebVPN](https://webvpn.neu.edu.cn/)连接；对于WebVPN中没有收录的网站，可以安装OpenVPN等软件进行连接，具体请看信网办[OpenVPN使用手册](http://xwb.neu.edu.cn/2023/0716/c6133a233647/page.htm)"
                                }]
                            }
                        ]

                    }, {
                        title: "收费标准",
                        subsections: [
                            {
                                title: undefined,
                                contents: [
                                    {
                                        type: NWComponent.NWList,
                                        order: false,
                                        data: [
                                            "总量0～10G，免费；", "总量10～25G，超出10G的部分1元/G；", "总量25～40G，15元/月；", "总量40～45G，超出40G的部分15元基础上额外收取流量费用1元/G；", "总量45～80G，20元/月；", "总量80G以上，超出80G部分20元基础上额外收取流量费用1元/G。"
                                        ]
                                    }
                                ]
                            }
                        ]

                    }, {
                        title: "进阶使用",
                        subsections: [
                            {
                                title: '在线电视',
                                contents: [{
                                    type: NWComponent.NWDescription,
                                    text: "校园网环境下可以在线观看有线电视节目直播，直播网站[HDTV](https://hdtv.neu6.edu.cn/)，观看免流量。"
                                }]
                            }, {
                                title: 'PT下载',
                                contents: [{
                                    type: NWComponent.NWDescription,
                                    text: "PT下载是BT下载的特例，为特定用户才可使用的私有BT下载。CERNET上有很多学校或学生运营的PT服务器，一般限制高校用户才能注册使用，里面资源较公网BT站点更丰富且支持免流下载。常用的PT站点有东北大学[六维空间](http://bt.neu6.edu.cn/)、天津大学[北洋园PT](https://www.tjupt.org/)、西安交通大学[南洋](https://ipv6.njtech.edu.cn/links.html)等，可以凭学校邮箱直接注册使用。使用PT需要遵守站点考核规定，尽量满足上传量/做种时间要求，避免账号停用。"
                                }]
                            }, {
                                title: '免流方法',
                                contents: [{
                                    type: NWComponent.NWDescription,
                                    text: "由于特殊原因，此处仅作技术交流和启发，具体实现请自己动手。内容包括：设置程序下载节点为支持IPv6的节点、使用IPv6服务器转发、伪装DNS服务器，使用53端口转发"
                                }]
                            },
                        ]
                    }
                ], contributors: [
                    {
                        name: "Techy-Wu",
                        avatar_url: "https://avatars.githubusercontent.com/u/73032687"
                    }
                ]
            }, {
                title: "出行方式",
                last_update: "2024年3月15日",
                name: "ToOut",
                description: "在这里给大家提供不同校区的出行方式。",
                sections: [{
                    title: "浑南校区",
                    subsections: [
                        {
                            title: '公交车',
                            contents: [{
                                type: NWComponent.NWDescription,
                                text: "公交站位于小西门出口天桥下，目前共有如下公交。"
                            }, {
                                type: NWComponent.NWList,
                                order: false,
                                data: [
                                    '139路为东北大学浑南校区开往东北大学南湖校区，如果你想要去南湖校区但是没有赶上校车，你又恰巧有较多的时间，那么可以来坐139路公交车。139路公交车整点发车，发车间隔一小时，由于是始发站所以在整点后几分钟公交就会到达，所以如果想要乘坐这辆公交只需要整点在小西门等待即可，不需要提前太多时间。139路现时全天绕行中国医大一院浑南院区站，工作日另有6:30 7:30 16:30三班车。139路使用的是**沈阳电子乘车卡**，近期车载刷卡机已更换为雄帝EMP5210C，支持**盛京通电子公交卡**。', '394路公交车每天只有3班，该公交的作用类似于乡村巴士，从陈相镇出发到南塔客运站，发车时间为5:30、8:30、13:30，高德地图能看到位置，建议有需要再去选择该公交，否则不要选择。', 'V109路每天7:00 8:00 17:00自创新路地铁站发往全运五路沈中大街（原全运五路枢纽站），2023年9月27日头班车起自创新一路白塔三街（东软医疗）延伸至此。本线路可用盛京通、全国交通联合卡、沈阳电子乘车卡（支付宝、微信乘车码），单一票价2元（刷卡1.8元）', '335路公交车位于浑南校区东门医大一院附近，对于浑南四舍、五舍、六舍或者是想要从东门出发的同学比较友好，具体公交卡同上。'
                                ]
                            }, {
                                type: NWComponent.NWDescription,
                                text: '另推荐乘坐灯塔至沈阳的长途客车，具体时刻表可参考微信公众号“灯塔至沈阳客车信息平台”，本线路北行可前往南塔客运站或五爱客运站，南行可前往灯塔市，并可直接衔接转乘前往辽阳的客运班线。本线在四环路以内区段与394路完全重合，可作为394的替代品。'
                            }]
                        }, {
                            title: '地铁',
                            contents: [{
                                type: NWComponent.NWList,
                                order: false,
                                data: [
                                    '4号线地铁站位于商盈丽景东西区中间，跟随导航走很容易找到，地铁途径长白、太原街，是出去玩的推荐选择。但这里到了晚上中间会停满车辆，大家要注意安全。', '2号线最近的站点为创新一路站，距离3.9公里，不建议走去，但是推荐打车前往站点并乘坐二号线，如果大家不愿意乘坐4号线转9号线转2号线可以尝试这种方法，前提是你舍得钱包。同理这也是去机场比较省钱也比较方便快捷的一条路线。'
                                ]
                            }, {
                                type: NWComponent.NWTips,
                                title: 'NFC提示',
                                case: 'info',
                                data: '这里建议尝试手机的NFC或者钱包功能，目前来说大部分旗舰机都有该功能，大家可以自行查看相应手机的办卡攻略。如果是大一新生需要频繁使用，建议办理盛京通，如果想要办理一个全国各地都可以使用的，可以使用北京互通卡，也叫市政交通一卡通。使用NFC功能的好处是便捷，例如华为手机，只需要摁两下开机键即可唤起，并贴一下机器就可以完成消费。'
                            },]
                        }, {
                            title: '有轨电车',
                            contents: [{
                                type: NWComponent.NWDescription,
                                text: '有轨电车站位于交通岗，也就是出西门向北侧（右手边）一直走，在交通岗可以看到三个站点，如图所示。也就是说，一、三号线停靠沈营大街西侧月台，四号线现时为定班车，具体时刻表可参考微信公众号“浑南现代有轨电车”。有轨电车目前不支持部分地区的交通联合卡。如要使用扫码支付，须使用有轨电车自己的乘车码。'
                            }, {
                                type: NWComponent.NWImage,
                                width: 300,
                                src: 'https://image.neuwiki.top/image/Tramway.png'
                            }, {
                                type: NWComponent.NWDescription,
                                text: '其中1号站点为从浑南校区出发的站点，一号线、三号线、四号线均在此乘坐。二、三号站点为从外面回来的站点，如果不知道怎么判断可以看站点等待区的铁轨，行驶方向是靠右侧行驶的。出行的话应该只会选择一号线和四号线。'
                            }, {
                                type: NWComponent.NWList,
                                order: false,
                                data: ['**有轨电车一号线**：经由白塔交通岗前往兴隆大奥莱，主要途经点有沈阳创新天地，也就是全运路万达，如果想要出去吃喝玩乐全运路万达很不错，附近也有龙湖·天街，是另一个商场，也推荐前往。终点是兴隆到来，如果要去万达奥体中心点可以在亿丰广场站下车，如果要去兴隆大奥莱或者做二号线可以在兴隆大奥莱站下车。', '**有轨电车四号线**：前往二十一世纪大厦，主要途经点为科技馆，也就是辽宁省科技馆和博物馆，作者非常推荐大家去辽宁省博物馆参观。如果要去全运路万达，可以在华茂中心站下车，跟随导航很容易找到。最终到达地点为世纪大厦站，可以乘坐地铁，也可以去附近的洗浴元气汤泉玩乐。']
                            }, {
                                type: NWComponent.NWDescription,
                                text: '有轨电车出行需要使用沈阳有轨电车小程序，绑定乘车码，上车刷一次下车刷一次，在快要到达你下车站点时刷就可以。也可以刷交通卡，或者是使用之前推荐的手机NFC功能都可以。'
                            }]
                        }, {
                            title: '打车',
                            contents: [{
                                type: NWComponent.NWDescription,
                                text: '这就是简单粗暴的出行方式了，只要有钱就可以打车，但是打车也是有选择的，作者目前使用过滴滴、高德和花小猪，这些平台都有一个特点，就是长时间不用会很便宜，抛去这个因素的话花小猪打车会更便宜。如果是三四个人出门建议就可以打车了，没有必要坐公交，因为人均下来其实并没有贵太多。出门时建议每个人用各自的打车软件先比较价格，然后再打车。'
                            }]
                        }, {
                            title: '火车',
                            contents: [{
                                type: NWComponent.NWDescription,
                                text: '这种出行方式适合出远门（指到沈阳北站以及相邻市），大家可以在12306订购相应的火车票，并按照时间到达火车站即可，前往沈阳南站可以乘坐139路公交车、地铁四号线或者打车。这里提示一下，乘坐地铁到达沈阳南站后，可以选择**乘坐无障碍电梯**到达检票平台，会节省很多时间。如果你不想带身份证，在检票时可以在12306搜索临时身份证并刷脸领取，并走人工通道；在检票时用12306的检票码即可。'
                            }]
                        }, {
                            title: '乘坐校车中转',
                            contents: [{
                                type: NWComponent.NWDescription,
                                text: '这是一种省钱方便的方式，大家按照校车的预约时间乘坐校车到达南湖校区，并从南湖校区出发即可。'
                            }]
                        }
                    ]
                }, {
                    title: '盛京卡',
                    subsections: [
                        {
                            title: undefined,
                            contents: [{
                                type: NWComponent.NWDescription,
                                text: '实体盛京通卡本科生可办理学生卡（每学年会有组织集中办理），**仅可乘坐公交车**，单一票价空调车为0.8元；研究生只可办理普通卡。如有频繁乘坐公交车的需求，可办理实名制普通月票卡，75元130次，单一票价空调车每次扣一次乘车次数，部分多级票价线路上下车各一次。办理网点可参考微信公众号“盛京通”。实体盛京通卡本科生可办理学生卡（每学年会有组织集中办理），仅可乘坐公交车，单一票价空调车为0.8元；研究生只可办理普通卡。如有频繁乘坐公交车的需求，可办理实名制普通月票卡，75元130次，单一票价空调车每次扣一次乘车次数，部分多级票价线路上下车各一次。办理网点可参考微信公众号“盛京通”。'
                            }, {
                                type: NWComponent.NWDescription,
                                text: '强烈建议出行时优先使用实体卡或NFC卡。NFC卡只要卡片带有“交通联合”字样，在本市公共交通领域均可受理。这里推荐一个网站可查询当前测试记录交通联合互联互通测试记录查询：[交联面条站](https://www.tunionfans.com)'
                            }]
                        }
                    ]
                }], contributors: [
                    {
                        name: "南惊希露",
                        avatar_url: "https://b0.bdstatic.com/0df6c8c7f109aa7b67e7cb15e6f8d025.jpg@h_1280"
                    }
                ]
            }, {
                title: "校车",
                last_update: "2024年11月16日",
                name: "SchoolBus",
                description: "校车用于往返南湖校区与浑南校区。",
                sections: [
                    {
                        title: "预约与乘坐方式",
                        subsections: [{
                            title: undefined,
                            contents: [
                                {
                                    type: NWComponent.NWDescription,
                                    text: '如果有意在第二天乘坐校车，可以在意向班次**发车前12小时之前预约**。\\**预约者**在发车正点前，可优先于未预约者上车。上车时需在**刷码机（一个银白色的方形卡机）**扫描智慧东大一码通核销预约记录，无需刷学生卡。\\**未预约者**自行排成一队。若车上还有空位，则未预约者按照排队顺序在**刷卡机（一个黑色的长条卡机）**刷学生卡上车（不是智慧东大一码通）。学生卡若因各种原因（包括卡片失效、余额不足等）无法扣款，建议先借用其他同学的学生卡代付款，上车后向TA转账。'
                                },
                                {
                                    type: NWComponent.NWList,
                                    order: true,
                                    data: ["打开智慧东大APP", "点击下方导航栏“应用”", "点击“学生班车预约”，注意不是“校车”", "上下滚动，可以看到“学生班车-南湖”和“学生班车-浑南”，后面的地点是**你的出发点**，如果你从浑南出发，应该选择“学生班车-浑南”", "预约时间为近两天，选择预约和时段，支付即可"]
                                },
                                {
                                    type: NWComponent.NWTips,
                                    title: "注意",
                                    case: "warning",
                                    data: "若过发车正点（迟到哪怕五秒都不行，刷码机刷不上）仍未核销预约记录，则预约失效，预约者需同未预约者排队刷学生卡上车。"
                                }
                            ]
                        }]
                    },
                    {
                        title: "发车时间与地点",
                        subsections: [
                            {
                                title: undefined,
                                contents: [{
                                    type: NWComponent.NWDescription,
                                    text: '平峰时段到达另一校区的时间需35-45分钟，高峰时段通常需50-60分钟，极端情况可能超过60分钟，请同学们合理安排时间。'
                                }]
                            },
                            {
                                title: "浑南校区",
                                contents: [
                                    {
                                        type: NWComponent.NWDescription,
                                        text: "浑南校区的发车时间时间如下："
                                    }, {
                                        type: NWComponent.NWList,
                                        order: false,
                                        data: ['8:00', '13:30', '17:30']
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: "浑南校区的出发地点在一舍东侧马路，也就是一舍、一食堂、二食堂的十字路口。"
                                    },
                                ]
                            }, {
                                title: "南湖校区",
                                contents: [
                                    {
                                        type: NWComponent.NWDescription,
                                        text: "南湖校区的发车时间时间如下："
                                    }, {
                                        type: NWComponent.NWList,
                                        order: false,
                                        data: ['11:30', '16:30', '21:10']
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: "南湖校区的发车地点在图书馆西侧或者综合楼北侧。"
                                    },
                                ]
                            }]
                    }, {
                        title: "注意事项",
                        subsections: [{
                            title: undefined,
                            contents: [
                                {
                                    type: NWComponent.NWList,
                                    order: false,
                                    data: [
                                        '由于刷卡机不联网，因此如果现场给学生卡充值，刷卡机将不能及时收到充值数据。因此余额不足时需借用其他同学学生卡代刷。', '不要携带无封口的饮料（如豆浆、奶茶、咖啡等）上车，若在车上打泼将会很难收拾。', '预约者不要踩点核销预约记录，若过点则预约记录无法核销，故若仍需上车则参照未预约者刷卡上车。', '若乘车人数已达上限，请未能上车的同学改乘其他交通工具。', '若有其他情况，请以车管、司机、学生助理的指挥为准。'
                                    ]
                                }
                            ]
                        }]
                    }
                ],
                contributors: [
                    {
                        name: "好锦鲤",
                        avatar_url: "https://image.neuwiki.top/image/haojinli.jpg"
                    }
                ]
            }
        ]

    }, {
        title: "学在东大",
        name: "LearningInNEU",
        pages: [
            {
                title: "基础学业信息",
                last_update: "2024年9月22日",
                name: "BasicAcademicInfo",
                description: "大学的课程和高中不同，高中我们一般是只有期末考试算总分，大学的分数会有很大的不同，每门课都有自己的成绩，并按照权重计算得出你的GPA（平均绩点），GPA非常重要，保研、综测等很多方面的内容都要看GPA。简单来说，你所学的所有课程的成绩决定了你的GPA，所以没有什么主科小科之分，所有课都很重要，都要拿高分。",
                sections: [
                    {
                        title: "学分",
                        subsections: [
                            {
                                title: undefined,
                                contents: [
                                    {
                                        type: NWComponent.NWDescription,
                                        text: "大学的成绩由你学过的所有课程的成绩来构成，每门课有自己的学分和成绩。我们以高等数学为例，高等数学的学分是5学分，一般来说**1学分=16学时=16节课**。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: "当然这是一般情况，很多课程有额外的实验课、讨论课等内容，可能学分与学时不是1:16的关系。每门课都有自己的学分，学分代表的含义是权重，也就是在计算GPA时的占比。"
                                    }
                                ]
                            }
                        ]
                    }, {
                        title: "成绩",
                        subsections: [
                            {
                                title: undefined,
                                contents: [
                                    {
                                        type: NWComponent.NWDescription,
                                        text: "一般来说成绩有三种给分方式：二分制、五分制、百分制，我们学校采用的是满分5.0的计算方法，如果用百分制来转换，那么：**(成绩=百分制的分数-50)/10**。比如我们高等数学拿了91分，那么转为相应的5.0计算法那就是：**(91-50)/10=4.1**，也就是说我们高数最终的成绩为4.1。而具体给分方式如下。"
                                    }, {
                                        type: NWComponent.NWList,
                                        order: false,
                                        data: [
                                            "**百分制**：顾名思义，一门课的成绩为60-100分（最低分为60是因为，如果低于60就是挂科了），按照刚才的转换公式，也就是最终成绩为1.0~5.0。", "**二分制**：一般出现于0.5学分的课程，例如形势与政策，二分制只有两种情况，即合格和不合格，只要不是极其恶劣就都是合格。而合格是3.0,也就是说这门课只有3.0和挂科两种情况。", "**五分制**：一般出现于人文选修课等课程，五分制为阶梯式给分，分别是优、良、中、合格、不合格五个分段，分别对应着4.5,3.5,2.5,1.5以及挂科，一般来说4.5是比较好的，3.5是大多数人的成绩。"
                                        ]
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: "我们知道了最终分的计算方法，那么一门课是如何具体给分的呢？这个就取决于任课老师了，我们还是以高等数学为例。比如我修高等数学时，满分100分，共有三个方面的内容：平时分40分，包括20分机考、20分慕课；期中考试10分；期末考试50分。也就是说最终你的高数成绩是这些分数的总和。当然这是高等数学这门课的给分方式，不同的老师也会有不同的给分方式，大家在学习一门课之前最好问清楚给分方式，避免浪费不必要的时间。"
                                    }
                                ]
                            }
                        ]
                    }, {
                        title: "GPA",
                        subsections: [{
                            title: undefined,
                            contents: [
                                {
                                    type: NWComponent.NWDescription,
                                    text: "我们已经知道了各门课的成绩，GPA实际上就是各门课程按照学分加权求和，比如我们现在学了两门课，分别是5学分的高等数学和4学分的概率论，高等数学我拿到4.4的成绩，概率论我拿到了4.1的成绩，那么我所学习的课程的学分总和为5+4=9学分，按照权重求和，那么就是：**(5/9 * 4.4)+(4/9 * 4.1) = 4.2667**"
                                },
                                {
                                    type: NWComponent.NWDescription,
                                    text: "这就是我的最终GPA,课程越多，也就是按照这个计算方式计算即可。一般来说GPA在4.0以上就是成绩很高了（前提是没有疫情网课等情特殊情况）。GPA相当于你在专业内的排名，无论是专业分流还是保研、综测，GPA都是非常重要的参考之一。如果你想要提升你的GPA，你就可以去选修更多的课，让这门课尽可能的得高分，这样你的GPA就会提高了，也就是我们常说的选给分高的课刷绩点。"
                                }
                            ]
                        }]
                    }
                ],
                contributors: []
            }, {
                title: "机考指南",
                last_update: "2024年9月22日",
                name: "GuideToComputerizedExams",
                description: "无论你在哪个学院，只要你有高等数学、线性代数、概率论、复变函数这几门课之一，你就需要进行上机考试。作为课程分数的重要组成成分之一，特此为机考写下指南，以便新生能快速掌握流程及各种情况的应对。[此链接为](http://www.neumathe.cn)非官方刷题网站，请合理使用。",
                sections: [
                    {
                        title: "考试流程",
                        subsections: [
                            {
                                title: undefined,
                                contents: [
                                    {
                                        type: NWComponent.NWDescription,
                                        text: "新生第一次考试需要录入身份证信息，所以请 **务必** 携带身份证，如果忘记携带，可以找考场助理说明情况，让其手动录入。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: "新生第一次考试需要自己录入虹膜信息，需要打开虹膜录制界面录制虹膜，届时会有考场助理进行指导，每次考试也都需要验证虹膜。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: "浑南校区的考试地点为1号楼B509,考试前注意携带鞋套、学生证、身份证。看清楚预约的考试的时间以及座位，提前10分钟到达。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: "由于机房电脑老旧，第一次开机非常慢，请耐心等待，开机后需要加载虹膜设备，点击IE浏览器无反应为正常现象，请耐心等待。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: "机房仅可访问内网，所以需要手动输入考试网址，只能使用IE浏览器，输入 mathe.neu.edu.cn 回车键进入考试网址。选择对应的考试科目登陆考试系统，参加考试。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: "部分电脑由于设备原因，无法自动加载虹膜插件，需要手动允许。当打开虹膜验证界面时页面下方会有弹窗提示（可能会被记住密码的提示盖住，先关掉它），请点击允许后重新验证。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: "考试结束后需在前方签到本签到。"
                                    }, {
                                        type: NWComponent.NWTips,
                                        title: "期中考试",
                                        case: "info",
                                        data: "部分课程会有机考期中考试，所占总分比例较大，需要做好准备。 期中考试考试流程与平时考试基本一致，只是不需要签到，只需要在考场记录单签字。"
                                    }
                                ]
                            }
                        ]
                    }, {
                        title: "注意事项",
                        subsections: [
                            {
                                title: undefined,
                                contents: [
                                    {
                                        type: NWComponent.NWDescription,
                                        text: "带鞋套（如果不嫌弃的话可以去垃圾桶翻一下，有很多）、学生证（用于出现突发状况验证身份），草稿纸上不要有任何字迹。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: "如果在考试的过程中，你所使用的电脑出现问题可以换另一台机器继续考试，每次考试并不是强制绑定电脑，所以还请同学们碰到这种情况不要太过惊慌。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: "如果出现突发状况，无法按时参加考试，请在预约人数较少的场次前往考场和助理说明情况，安排备用座。如果考场预约满了，需要等别人考试结束后你才能使用，但是你的答题时间会相应减少，你和前一个人的**答题时间总和为90分钟或100分钟**。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: "每场考试时间固定，请尽量不要迟到，时间结束必须提交试卷（即使你试卷的时间还没结束），所以期中考试请不要迟到，严格一个半小时，迟到一分钟少答一分钟。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: "考场全范围监控覆盖，如果出现作弊现象，该场考试零分。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: "由于设备老旧，可能会出现分辨率过大，需要手动调节，在桌面右键调整分辨率，将分辨率调高会好很多。考卷如出现过大过小，请按下Ctrl键+鼠标滚轮缩放界面。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: "请注意，尽管每场考试都设有备用机位以应对预约满员的情况，但存在一种观点认为无需预约即可直接前往参加考试并使用最后一列的备用机位。然而，这种做法存在风险。在机位紧张的情况下，监考人员可能会要求您提前交卷并离开，以便为其他考生让出机位。因此，建议考生遵循官方的预约流程，以确保能够顺利参加考试。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: "**千万注意考试科目**，如果你在考高数的时候打开了线代考试，你必须答完，一旦进入考试就会开始计时，即使你退出界面，时间到自动提交试卷，所以注意不要选错考试科目。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: "如果你很“幸运”的碰到了错题，比如选项重复、题目不全、选项错误等，恭喜你，期末的时候任课老师会统计这些情况并将分数加回来，你只需要随便选一个然后离场时找监考助理签一下错题记录单（非必要）。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: "考试过程中如出现问题，请联系考场助理解决。"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                contributors: []
            }, {
                title: "推免（保研）",
                last_update: "2024年9月22日",
                name: "RecommendedPostgraduateAdmission",
                description: "目前我们说的保研现在官方用于叫做推免，也就是推荐免试研究生考试，推免的方式有很多种，推免的过程需要准备很多内容，如果大家想要了解保研具体的过程，请大家前往“学院攻略”查询各自学院各自专业相应的保研政策与经验分享，本页面提供保研最基本的信息与相关内容。",
                sections: [
                    {
                        title: "保研简介",
                        subsections: [
                            {
                                title: undefined,
                                contents: [
                                    {
                                        type: NWComponent.NWDescription,
                                        text: "保研叫推免，实际上是一种资格，也就是推荐免试的资格，简单来说就是不用进行考研就可以直接读研，这里有一个概念，就是无论你用什么方式获得推免资格，包括正常的学业成绩、竞赛还是其他方式，你都会获取到推免资格，无论你在推免排名中是第一名还是最后一名都一样，所以如果你想要保研，你只需要努力获得推免资格就可以，但是名校会卡你的学业成绩排名作为门槛，具体内容请查询各个学院保研攻略。"
                                    }
                                ]
                            }
                        ]
                    }, {
                        title: "学业成绩保研",
                        subsections: [
                            {
                                title: undefined,
                                contents: [
                                    {
                                        type: NWComponent.NWDescription,
                                        text: "最常见的保研方式，也就是学校会下发给各个学院保研名额，学院按照自己的名额分配与考核方式分配给各个专业，具体的内容请大家前往“学院攻略”查询各自专业的保研相关内容。"
                                    }
                                ]
                            }
                        ]
                    }, {
                        title: "辅导员保研",
                        subsections: [
                            {
                                title: undefined,
                                contents: [
                                    {
                                        type: NWComponent.NWDescription,
                                        text: "辅导员要求成绩50%，政治面貌为中共党员，承担两年辅导员工作，具体内容等待后续更新。"
                                    }
                                ]
                            }
                        ]
                    }, {
                        title: "支教保研",
                        subsections: [
                            {
                                title: undefined,
                                contents: [
                                    {
                                        type: NWComponent.NWDescription,
                                        text: "支教保研要求符合所在学院推保研绩点成绩排名要求，且有干部任职，包括团支书、班长或校学生会副会长及以上学生干部满1学年，学生社团联合会、学院学生会等校学生会副主席单位部长及以上学生干部满1学年，优先考虑学生党员、获得省级及以上“三好学生”、“优秀党员”等荣誉称号、省级及以上学术科技、文体艺术等比赛三等奖以上。\\ 考核方式为面试，面试后会按照排名排序，保研只能保研至本校，但是可以选择专业，支教时长为1年。各个学院下发文件，并进行面试，往年来说当天会出结果并在第二天体检。在之后进行心理测试、填报名表等环节。\\具体情况需要结合当年情况与红头文件考虑。 目前我们学校的支教地为云南、四川、新疆、江西，支教团每年23人左右，5人来自秦皇岛分校。"
                                    }
                                ]
                            }
                        ]
                    }, {
                        title: '国防科工补偿计划',
                        subsections: [{
                            title: '简介',
                            contents: [
                                {
                                    type: NWComponent.NWDescription,
                                    text: '需要满足推荐基本条件，且符合国防科技大学接收“国防科工单位补偿计划”推免生的要求条件。满足推荐基本条件，且符合国防科技大学接收“国防科工单位补偿计划”推免生的要求条件。'
                                }
                            ]
                        }]
                    }, {
                        title: '创新特长类保研（竞赛保研）',
                        subsections: [
                            {
                                title: '简介',
                                contents: [
                                    {
                                        type: NWComponent.NWDescription,
                                        text: '创新特长类推免，俗称竞赛保研，是一种颇具东大特色的保研形式。\\教育部下发推免名额后，学校会将一部分名额分给创新创业学院，供各学院同学进行申请。若能成功拿到创新特长类推免的名额，则不占所在学院的普通类推免名额，并且与普通类推免一样可以推免外校，适合有丰富竞赛成果、大创成果的同学。'
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: '创新特长类推免主要分为以下几个阶段。'
                                    }, {
                                        type: NWComponent.NWList,
                                        order: true,
                                        data: [
                                            '预报名', '正式报名&成果申报', '资格审核', '综合考核（若不具备资格，那么终止）', '名单公布'
                                        ]
                                    }
                                ]
                            }, {
                                title: '预报名',
                                contents: [{
                                    type: NWComponent.NWDescription,
                                    text: '9月初，创新创业学院发布**《创新创业学院关于开展推荐xx届创新特长类优秀应届本科毕业生免试攻读研究生工作预报名的通知》**，所有有计划参与创新特长类推免的同学可以提交预报名材料。\\如果你具有一定的竞赛成果，那么可以考虑报名。'
                                }, {
                                    type: NWComponent.NWDescription,
                                    text: '**注意**，如有竞赛明确可能在预报名通知与正式报名通知之间公布获奖成绩时，也可以参与预报名。'
                                }, {
                                    type: NWComponent.NWList,
                                    order: false,
                                    data: ['正式报名截止时间前，该竞赛仍未公布成绩，则该竞赛不予认定。', '正式报名截止时间前，该竞赛成绩公布，则以该竞赛实际获奖情况进行资格审核。']
                                }, {
                                    type: NWComponent.NWDescription,
                                    text: '也就是说，如果正式报名截止前，你有希望拿到一个五星级及以上竞赛的一等奖，那么是可以参与预报名（正式报名时会审核获奖情况是否符合要求）。'
                                }, {
                                    type: NWComponent.NWDescription,
                                    text: '同理，如预报名时，学生成绩单GPA未达到专业前50%，但仍有课程成绩未出，且该成绩能够在正式报名截止时间前公布，同时能够有充分可能改变其“是否GPA专业前50%”报名条件的，需由学生所在学院教学办出具详细情况说明，允许其参与预报名。\\类似的，如果在正式报名前有机会进入专业排名前50%，那么也是可以参与的。这两条附加条件旨在鼓励同学们参与预报名。'
                                }, {
                                    type: NWComponent.NWTips,
                                    title: '注意',
                                    case: 'error',
                                    data: '不参加预报名，无法参加正式报名！'
                                }, {
                                    type: NWComponent.NWDescription,
                                    text: '预报名材料按往年情况是由各学院统一报送创院，相关通知一般也都会由相关负责老师在大群中发布，如果有这方面考虑的同学请注意**年级群或者学生群内消息**。\\此外，还可以重点关注创新创业学院网站：[东大创新网](http://cxzx.neu.edu.cn/)，关注网站中的**东大创新网 - 通知公告**，。'
                                }
                                ]
                            }, {
                                title: '正式报名  & 成果申报',
                                contents: [
                                    {
                                        type: NWComponent.NWDescription,
                                        text: '9月上中旬，创新创业学院发布《**创新创业学院关于开展推荐xx届创新特长类优秀应届本科毕业生免试攻读研究生工作的通知**》。\\通常来说，正式报名需要**本人**持申请材料到南湖校区科学馆线下提交材料，并且**逾期不再接受**。'
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: '需要提交的材料根据当年的要求可能有所不同，大致包括：'
                                    }, {
                                        type: NWComponent.NWList,
                                        order: false,
                                        data: ['学生本人签字、学院教学办老师签字、盖章的申请表纸质版原件', '学生本人最新盖章版成绩单纸质版一份', '德育成绩加分证明材料（证书等）纸质版一份', '竞赛（项目）获奖证书复印件一份', '学生本人签字的《推免志愿及承诺书》纸质版一份']
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: '值得注意的是，申请材料中的**第五项“学生本人签字的推免志愿及承诺书”**中明确要求承诺自愿选择创新特长类方式，按照学校规定申请推荐免试攻读研究生资格，选择后不再更改。\\也就是说，当上交材料时，已经**自动放弃了普通类方式的推免资格**。有些学院还会统一开会要求签署自愿放弃普通类推免承诺书。'
                                    }, {
                                        type: NWComponent.NWTips,
                                        case: 'info',
                                        title: '提示',
                                        data: '在后续阶段需要的所有材料，务必在正式报名阶段提交完整。'
                                    }
                                ]
                            },
                            {
                                title: '资格审查',
                                contents: [{
                                    type: NWComponent.NWDescription,
                                    text: '正式报名提交结束后，创新创业学院会对正式报名中提交的所有材料进行审核。\\具体条件包括基本条件以及相关竞赛成果的要求。'
                                }, {
                                    type: NWComponent.NWDescription,
                                    text: '**基本条件要求：**'
                                }, {
                                    type: NWComponent.NWList,
                                    order: false,
                                    data: ['拥护中国共产党的领导，具有高尚的爱国主义情操和集体主义精神，理想信念坚定，社会责任感强，积极向上，身心健康', '勤奋学习，刻苦钻研，成绩优秀，有较强的创新意识、创新能力和专业能力', '学风端正，诚实守信', '品行优良，遵纪守法', '无处分记录（含已解除）', '无不及格和无成绩课程', '国家四级外语考试成绩达到国家规定报考六级要求分数（社会体育指导与管理专业要求达到380 分、音乐表演专业要求达到385 分）']
                                }, {
                                    type: NWComponent.NWDescription,
                                    text: '**竞赛成果要求：**'
                                }, {
                                    type: NWComponent.NWList,
                                    order: false,
                                    data: ['符合学校认定的**国家级（含）以上**的大学生各类科技创新竞赛**一等奖（冠军）的获奖个人或代表队主力队员**，或“国家级大学生创新创业训练计划”**优秀**创新训练项目的**核心成员**', '学习成绩GPA（总平均学分绩点）排名专业前50%（不超过）']
                                }, {
                                    type: NWComponent.NWTips,
                                    title: '提示',
                                    case: 'info',
                                    data: '资格要求两项需要同时满足，并且第一点要求必须是主力队员或个人。'
                                }, {
                                    type: NWComponent.NWDescription,
                                    text: '关于**主力队员**的人数：根据组委会颁发的获奖证书或参赛证明，竞赛团队队员人数为7人及以下取前3名，7人以上取团队总人数前50%且最多不超过7人。'
                                }, {
                                    type: NWComponent.NWDescription,
                                    text: '若在资格审查过程中发现不合任何一项硬性要求，则无法继续参加后续的综合考核，且无法反悔选择普通类推免。\\资格审查后，创新创业学院会公示通过资格审查的名单。'
                                }
                                ]
                            }, {
                                title: '综合考核',
                                contents: [
                                    {
                                        type: NWComponent.NWDescription,
                                        text: '在公示最终前，创新创业学院会组织进行综合考核，根据综合考核成绩和专业成绩（与排名和绩点相关）计算综合排名。综合排名成绩的计算方式为：'
                                    }, {
                                        type: NWComponent.NWEquation,
                                        equation: '\\text{综合排名成绩} = \\text{专业成绩（满分70分）} +\\text{综合考核成绩（满分30分）}'
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: '如出现最终“综合排名成绩”相同的情况，则优先考察相应学生“创新能力”，其次考察“专业成绩”，并以此为依据进行排名。\\接下来，分别介绍专业成绩和综合考核成绩的计算方式。'
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: '**专业成绩**'
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: '由于创新特长类推免是全校范围竞争，创新创业学院为了避免不同学院之间人数、给分等因素差距过大，设计了一套算法来计算专业成绩。'
                                    }, {
                                        type: NWComponent.NWEquation,
                                        equation: '\\text{专业成绩} = M + \\frac{\\text{本人绩点} - \\text{专业第50\\%学生绩点} }{\\text{专业第1学生绩点} - \\text{专业第50\\%学生绩点}} × j'
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: 'M 为成绩基础分，为当年所有参加创新特长生推免考核学生中的绩点成绩的最低分（70 分制）。'
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: 'j 为加权系数，当年参加创新特长生推免考核的学生涉及N个专业，我们假设：'
                                    }, {
                                        type: NWComponent.NWEquation,
                                        equation: 'N个专业分别为： A_1，A_2，……，A_N'
                                    }, {
                                        type: NWComponent.NWEquation,
                                        equation: '每个专业报名人数为： a_i（i=1，2，……，n）'
                                    },
                                    {
                                        type: NWComponent.NWDescription,
                                        text: '参加创新特长生推免考核的学生绩点采用70分制，我们现在以第N个专业为例，那么该专业中：'
                                    }, {
                                        type: NWComponent.NWEquation,
                                        equation: '参加创新特长生推免考核学生的绩点成绩最高分为：P_N'
                                    }, {
                                        type: NWComponent.NWEquation,
                                        equation: '参加创新特长生推免考核学生的绩点成绩最低分为：Q_N'
                                    }, {
                                        type: NWComponent.NWEquation,
                                        equation: '该专业分数的极差为：R_N=P_N-Q_N'
                                    },
                                    {
                                        type: NWComponent.NWDescription,
                                        text: '那么j表示当年所有参加创新特长生推免考核学生专业成绩换算中的一个加权求和的系数，具体公式如下：'
                                    }, {
                                        type: NWComponent.NWEquation,
                                        equation: 'j = \\frac{\\sum_{i=1}^{N}(R_i × a_i)}{\\sum_{i=1}^{N} a_i}'
                                    }
                                    , {
                                        type: NWComponent.NWDescription,
                                        text: '以上“专业成绩计算办法”中的各项绩点及“专业成绩”最终计算结果均为小数点后按四舍五入保留四位小数。'
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: '**综合考核成绩**'
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: '综合考核成绩包括三个部分：'
                                    }, {
                                        type: NWComponent.NWEquation,
                                        equation: '综合考核成绩 = 面试成绩（满分10分）+创新能力成绩（满分15分）+德育成绩（满分5分）'
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: '**面试成绩**主要内容如下：'
                                    }, {
                                        type: NWComponent.NWList,
                                        order: false,
                                        data: ['创新创业学院统一组织面试，并分组进行考核，每组对应5-10名专家考核。', '考核内容主要对学生掌握的知识、学术研究能力、创新创业经历等方面进行评价。', '参考往年经验，面试考核需要准备ppt。ppt内容主要为自己的创新经历和个人介绍等。']
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: '**创新能力成绩**主要内容如下：'
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: '可以提交1~2项创新创业竞赛、项目国家级（含）以上获奖证明。具体计算方式如下：'
                                    }, {
                                        type: NWComponent.NWEquation,
                                        equation: '创新能力成绩 = (a+b - a \\times b) \\times 15'
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: '其中，a、b 为提交的创新创业类竞赛、项目获奖系数（只提交1项证明时，b=0）。具体系数参考下列各表。'
                                    }, {
                                        type: NWComponent.NWTable,
                                        title: '七星级竞赛国家级（国际级）',
                                        data: [
                                            ['奖项', '系数'],
                                            ['金、一等奖及以上', '1'],
                                            ['银、二等奖', '0.6'],
                                            ['铜、三等奖', '0.5']
                                        ]
                                    }, {
                                        type: NWComponent.NWTable,
                                        title: '六星级竞赛国家级（国际级）',
                                        data: [
                                            ['奖项', '系数'],
                                            ['金、一等奖及以上', '0.9'],
                                            ['银、二等奖', '0.5'],
                                            ['铜、三等奖', '0.4']
                                        ]
                                    }, {
                                        type: NWComponent.NWTable,
                                        title: '五星级竞赛国家级（国际级）',
                                        data: [
                                            ['奖项', '系数'],
                                            ['金、一等奖及以上', '0.6'],
                                            ['银、二等奖', '0.4'],
                                            ['铜、三等奖', '0.3']
                                        ]
                                    }, {
                                        type: NWComponent.NWTable,
                                        title: '四星级竞赛国家级（国际级）',
                                        data: [
                                            ['奖项', '系数'],
                                            ['金、一等奖及以上', '0.3'],
                                            ['银、二等奖', '0.2'],
                                            ['铜、三等奖', '0.1']
                                        ]
                                    }, {
                                        type: NWComponent.NWTable,
                                        title: '三星级竞赛国家级',
                                        data: [
                                            ['奖项', '系数'],
                                            ['特等奖', '0.5'],
                                            ['一等奖', '0.3']
                                        ]
                                    }, {
                                        type: NWComponent.NWTable,
                                        title: '国家大学生创新创业训练项目',
                                        data: [
                                            ['奖项', '系数'],
                                            ['优秀', '0.7'],
                                            ['良好', '0.3']
                                        ]
                                    }, {
                                        type: NWComponent.NWTips,
                                        title: '提示',
                                        case: 'info',
                                        data: '特别的，这里的竞赛可以提交以非主力队员身份参赛的获奖证明，但计分时系数减半。'
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: '我们来举个例子，假如凭借优秀大创项目参与创新特长类推免（系数0.7），又额外提交了一个不是主力队员的七星级竞赛的二等奖（系数 0.6 / 2），那么创新能力成绩就是：'
                                    }, {
                                        type: NWComponent.NWEquation,
                                        equation: '分数  = ( 0.7 + (0.6 / 2) - 0.7 \\times (0.6 / 2)) \\times 15 = 0.79 \\times 15 = 11.85'
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: '**德育成绩**主要内容如下：'
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: '德育考察重点基于创新创业教育相关荣誉、校级创新创业校园文化和实践活动奖励进行评价。\\所有具备遴选资格的学生**均可获得**德育**基础分4分**，各项德育加分总和上限为1分。具体加分规则如下：'
                                    }, {
                                        type: NWComponent.NWList,
                                        order: false,
                                        data: ['中国青少年创新奖获得者：基础分+1 分', '学生创新创业“校长奖章”获得者：基础分+0.7 分', '创新创业优秀学生干部获得者：基础分+0.3 分', '创新创业校园文化和实践活动校级一等奖为基础分+0.2、校级二等奖为基础分+0.15、校级三等奖为基础分+0.1']
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: '其中，创新创业校园文化和实践活动主要包括**大学生创意节、大学生科普节、大学生创业节和“责任、立德、成才”素质拓展训练营中的校级活动**。\\校级创新创业校园文化和实践活动的奖励**最多申报3项**。\\同一作品或同一活动**只能取高计算1次，不得重复计算**；校级创新创业校园文化和实践活动申报的作品或活动不与其它（“创新能力成绩”等）申报内容重复计算；“创新创业优秀学生干部”荣誉只能计算1 次。'
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: '如果在创新创业教育过程出现如下情况，将实施相应处罚制度：'
                                    }, {
                                        type: NWComponent.NWList,
                                        order: false,
                                        data: ['在参加创新创业实践活动过程中发生作弊、抄袭等学术不端或造成重大负面影响者，直接取消学生创新特长生推免考核资格', '在创新创业教育过程中造成安全事故者，直接取消学生创新特长生推免考核资格', '在创新创业教育过程中被安全检查通报（未达到安全事故）者，依据后果严重程度，基础分减0.2~1分']
                                    }
                                ]
                            }, {
                                title: '名单公布',
                                contents: [
                                    {
                                        type: NWComponent.NWDescription,
                                        text: '在考核结束后的一段时间内，创新创业学院会在官网公示综合排名名单，此时处于名额范围内的同学就可以稳稳拿到名额了。\\在边缘的同学也不要灰心，按照往年经验，出现过学校其他类别名额剩余返给创新特长类的情形，这样会按照名单排序往后递增。\\最后，祝各位学弟学妹们保研之路顺利！'
                                    }
                                ]
                            }, {
                                title: '东北大学2025届创新特长保研形式分析',
                                contents: [
                                    {
                                        type: NWComponent.NWDescription,
                                        text: '**预报名情况**'
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: '2025年创新特长预报名114人，其中a项竞赛为七星级2人、六星59人、国优13人、五星40人，申请保研名额预估60个。'
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: '**实际报名情况**'
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: '由于实报名59人，退还约12个保研名额，实保研48人。\\其中a项竞赛为七星级2人、六星37人（实际为41人）、国优5人、五星15人（实际为11人，原因：其中三人将六星级竞赛放在B类中，一人更改为双六星级国一）。'
                                    }, {
                                        type: NWComponent.NWImage,
                                        width: 600,
                                        src: '/https://image.neuwiki.top/image/image-20240917154654864.png'
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: '实报名59人的学院分布如下，12个学院中，排名前三的是机械工程与自动化学院、信息科学与工程学院、计算机科学与工程学院，分别为21、8、6，占总体35%、13%、10%。'
                                    }, {
                                        type: NWComponent.NWImage,
                                        width: 600,
                                        src: '/https://image.neuwiki.top/image/image-20240917154728276.png'
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: '各竞赛人数分布如下。'
                                    }, {
                                        type: NWComponent.NWImage,
                                        width: 600,
                                        src: '/https://image.neuwiki.top/image/image-20240917154748231.png'
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: '按照学院分类如下。'
                                    }, {
                                        type: NWComponent.NWImage,
                                        width: 600,
                                        src: '/https://image.neuwiki.top/image/image-20240917154810115.png'
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: '各专业报名等级与竞赛等级分布如下。'
                                    }, {
                                        type: NWComponent.NWImage,
                                        width: 600,
                                        src: '/https://image.neuwiki.top/image/image-20240917154815417.png'
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: '**结果分析**'
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: '未保研11人，其中六星国一3人（其中2人主动放弃名额，另外1人绩点排名44%,面试成绩较低，德育加分0.1）。双五星1人，其他均为双五星以下。'
                                    }, {
                                        type: NWComponent.NWImage,
                                        width: 600,
                                        src: '/https://image.neuwiki.top/image/image-20240917154823190.png'
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: '没有六星国家一等奖保研成功的人中2位为双五星并有0.35、0.5的德育加分。双五星以下保研成功（名额递补）2人。'
                                    }, {
                                        type: NWComponent.NWImage,
                                        width: 600,
                                        src: '/https://image.neuwiki.top/image/image-20240917154827133.png'
                                    }
                                ]
                            }
                        ]
                    }, {
                        title: "工程硕博保研",
                        subsections: [
                            {
                                title: undefined,
                                contents: [{
                                    type: NWComponent.NWDescription,
                                    text: "近几年新增加了一种新的保研方法——工程硕博，目前大多数学校都在逐渐增加工程硕博的名额，未来可能会逐步压缩原本的普通推免。仅以东大软院为例，在20级推免的时候，软院有3个名额（2硕1直博），会让学生们报名，然后筛选到6人，以1：1的比例进入复试。之后通过面试来确定最终的人选。"
                                }]
                            }, {
                                title: '工程硕博简介',
                                contents: [{
                                    type: NWComponent.NWDescription,
                                    text: "学校和企业一起联培，注重实践能力，培养能打工的学生。一般来说，工程硕博都是专硕，在学校和企业都各有一个导师，在研一的时候和正常学生一样，在学校完成所学课程。研二研三的时候会去企业打工，每月可能会有一点微薄薪资，不过不是一直待在企业，而是半工半学。毕业的时候没有就业限制。"
                                }]
                            }, {
                                title: '联培企业',
                                contents: [{
                                    type: NWComponent.NWDescription,
                                    text: "一般来说，企业会和学校的某些学院达成协议，像东大软件是和宝武公司合作。可能其他学院合作的企业不同。像中山大学的部分学院还会跟华为有合作，所以企业不是固定的。另外有些企业让你打工的时候，实际上还是偏向于科研性质的，成果物要以论文形式发布。"
                                }]
                            }, {
                                title: '推免方式',
                                contents: [{
                                    type: NWComponent.NWDescription,
                                    text: "工程硕博推免的时候分两种："
                                }, {
                                    type: NWComponent.NWDescription,
                                    text: "有正常推免资格。即参加学院推免综测成绩排名，根据教务处公布的具有推免资格的学生。像这种学生，在参加预推免的时候，也能报名其他高校的工程硕博。比如2023年复旦大学软院在预推免的时候突然说自己要招工程硕博的学生，报这个项目的人很少，所以如果你奔着复旦的名头去，不是太差的点击就送。"
                                }, {
                                    type: NWComponent.NWDescription,
                                    text: "没有正常推免资格。东大20级学生推免的时候，工程硕博名额和其他推免名额不冲突（包括行政推免、支教保研之类的），是额外补充的名额，但是走这个只能留本校了"
                                }]
                            }, {
                                title: '性价比与适用人群',
                                contents: [{
                                    type: NWComponent.NWDescription,
                                    text: "工程硕博是大势所趋，未来学硕的名额会更加珍贵，专硕的名额会进一步增加。想在学术上有所成就的，建议还是老老实实走学硕。目前工程硕博这个政策刚出来还没多久，前几届都是小白鼠，校企联培说得好听，也可能两边都不重视，另外毕业要求和导师确认制度等等都没有具体的红头文件，一切以口头通知为准。"
                                }, {
                                    type: NWComponent.NWDescription,
                                    text: "本条路适用于： 保研边缘人，没有保研资格但是综合实力还可以，又不想考研，留本校也无所谓; 联培企业说得过去，如果联培企业是阿里腾讯华为，相信自然有更多人愿意去，毕业的时候很有优势; 对学术要求不高; 愿意接受政策更改的风险——毕竟还处于试点阶段，前几届政策朝令夕改不足为奇。"
                                }]
                            }
                        ]

                    }
                ], contributors: [
                    {
                        name: "小明",
                        avatar_url: "https://image.neuwiki.top/image/xiaoming.jpg"
                    }, {
                        name: "Denglin",
                        avatar_url: "https://image.neuwiki.top/image/linke.jpg"
                    }, {
                        name: "逍遥飘雪",
                        avatar_url: "https://image.neuwiki.top/image/xiaoyaopiaoxue.jpg"
                    }
                ]
            }, {
                title: "公共课",
                last_update: "2024年9月22日",
                name: "PublicCourse",
                description: undefined,
                sections: [
                    {
                        title: "高等数学",
                        subsections: [
                            {
                                title: undefined,
                                contents: [
                                    {
                                        type: NWComponent.NWDescription,
                                        text: "高等数学的给分短期内应该不会有太大变化，仍然是平时分+机考+慕课+期末考试的形式，其中期末考试占比50%。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: "慕课部分，有选择题、手写互评、期中期末部分，大家注意，作者当时学习时问过任课老师，选择题部分不算分，算分的只有手写拍照提交互评以及期末考试的部分，当然授课情况可能每年都不相同，所以大家如果对给分情况有问题抓紧时间问老师，一定不要忘记提交和互评，因为这些分数错过就只能错过，不能再补，与其靠期末拿分不如把这些必拿的分拿到。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: "请前往机考指南进行阅读。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: "期末考试为填空题+大题，没有选择题！但一般来说题目都是有一定的套路，或者说是可以有复习角度的，这里建议大家前往文印室或专门经营东北大学真题的书店购买真题，大家平时学习时可以参考其他学校的教材，但是期末考试时要刷东北大学的真题，而且要注意真题是有区分AB卷的，有些真题很混乱，会将数学专业的期末试题混入其中，所以大家在复习时已经要有选择性和甄别垃圾题目的能力，不要在没有意义的地方浪费时间。"
                                    }, {
                                        type: NWComponent.NWTips,
                                        title: "提示",
                                        case: 'info',
                                        data: '大家可能平时会互相比拼机考分数，但实际上高数机考次数较多，所以每次占比很低，95分和100分实际上相差很少，但是期末考试只有大题且分数跟高，很容易就会拉开分数，所以大家如果平时机考分数不高那也不用担心，好好复习期末考试就可以了。'
                                    }
                                ]
                            }
                        ]
                    }
                ],
                contributors: []
            }, {
                title: "竞赛",
                last_update: "2024年11月17日",
                name: "Competition",
                description: '这里给大家介绍了有哪些竞赛、适合什么专业与学院以及参加竞赛要注意的内容',
                sections: [
                    {
                        title: '竞赛时间线',
                        subsections: [
                            {
                                title: '一月',
                                contents: [
                                    {
                                        type: NWComponent.NWCompetition,
                                        competition: {
                                            name: "美国大学生数学建模竞赛",
                                            period: "上旬",
                                            description: "美国大学生数学建模竞赛（MCM/ICM），简称“美赛”，由美国数学及其应用联合会主办，是最高的国际性数学建模竞赛，也是世界范围内最具影响力的数学建模竞赛，一般也指数学建模竞赛。注意要三人组队。",
                                            suitableColleges: ['软件学院', '计算机学院', '信息学院', '理学院'],
                                            tags: ['算法', '大数据', '创新']
                                        }
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: '竞赛内容还在完善，如果大家也有了解可以投稿或者直接联系群主~'
                                    }
                                ]
                            }
                        ]
                    }
                ],
                contributors: []
            },
            {
                title: "选调",
                last_update: "2024年9月22日",
                name: "SelectedAssignment",
                description: undefined,
                sections: [
                    {
                        title: "辽宁省定向选调",
                        subsections: [
                            {
                                title: undefined,
                                contents: [
                                    {
                                        type: NWComponent.NWDescription,
                                        text: "[东北大学基层就业](http://job.neu.edu.cn/news/index/tag/jcjy)"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: "[辽宁省2024年度面向东北大学选调应届优秀大学毕业生公告](http://job.neu.edu.cn/news/index/tag/jcjy)"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: "总体流程：考生报名与学校推荐→资格审查→笔试→面试→面谈→考察与体检→公示→录用"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: ""
                                    }, {
                                        type: NWComponent.NWList,
                                        order: true,
                                        data: ['确定今年辽宁省面向东北大学组织定向选调（会发布选调公告）。', '确认自己是否满足选调条件（见选调公告→选调条件部分）。', '在规定时间内进入报名系统进行注册并填写个人信息，值得注意的内容如下：']
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: "**岗位志愿**：无论是省直岗位志愿还是后续可能出现的市直、区直岗位志愿填写，请根据专业匹配和竞争情况综合考虑自己的意愿，选择在一定程度上大于努力。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: "2024年度辽选需要提供一份自荐材料，请认真书写。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: "请至少提前2天提交报名材料，确保审核通过。如出现审核不通过情况，可结合反馈原因修改材料重新提交材料；如确认材料无误审核仍不通过，可通过公告联系方式与组织部协调。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: "持续关注选调系统，准考证及新的信息会通过系统发布。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: "首先要及时在系统下载面试准考证。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: "面试方式为结构化面试，2024年度东北大学面试有两道题，一题谈对一句讲话的理解，另一题给出处理方案，6分钟思考＋6分钟作答。抽签确定面试顺序，在一教室思考（有纸笔）6分钟，再到另一教室作答6分钟，等待下一考生作答完毕后返回作答教室获取成绩。面试学习可参考《面试的经验》，多记忆多张口说，感受自己与答案语言的魅力。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: "**面试成绩当场出。**"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: "确认进入下一环节后，将会按省直、市直、区直的顺序组织面谈，时间线可能较长，不同单位的工作开展有差异，请耐心等待，正常安排自己的生活。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: "辽选不完全以成绩为依据，还有专业匹配、岗位匹配、来辽意愿等多方面的综合考量。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: "提前总结好内容，比如自我介绍、工作了解、性格爱好、优点缺点、职业规划、来辽意愿等。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: "保持电话畅通，面谈不同单位采取的方式不同，线上线下都有可能。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: "后续环节按照单位要求组织开展即可，考察可能需要自己联系同学和老师，体检通常是单位统一组织。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: "单位联系启动三方协议后，后续环节可以尝试联系导员一起帮忙，谢谢导员。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: "更多辽选信息可以通过“小红书”来做进一步的了解，很多热心的同学在里面分享了自己的经验。"
                                    }
                                ]
                            }
                        ]
                    }
                ], contributors: [
                    {
                        name: "小七陪着你",
                        avatar_url: "https://image.neuwiki.top/image/xiaoqi.jpg"
                    }
                ]

            }
        ]
    }, {
        title: "学院攻略",
        name: "CollegeGuide",
        pages: [
            {
                title: "软件学院",
                last_update: "2024年3月15日",
                name: "Software",
                description: "欢迎大家来到软件学院，软件学院目前共有五个专业，分别是软件工程、信息安全、数字媒体技术、软件工程英语国际班、软件金融特色班。",
                sections: [{
                    title: '分流方向',
                    subsections: [
                        {
                            title: undefined,
                            contents: [{
                                type: NWComponent.NWDescription,
                                text: '软件工程主要培养同学们的软件开发能力，本科前三年，大一学年主要学习数学和专业基础，包括高等数学、C语言、Java等基本课程；大二学年主要学习计算机领域相关课程比如计算机组成原理、计算机网络等，以及软件工程相关知识例如软件需求分析、人机交互的软件工程方法等课程；大三学年进行在分流，目前主要是云计算与人工智能两个方向，并选择相应的选修课。云计算主要学习云计算相关的知识，包括分布式、全栈开发等；人工智能学习人工智能领域的课程包括自然语言处理、人工智能基础等。'
                            }]
                        }
                    ]
                }, {
                    title: '推免',
                    subsections: [
                        {
                            title: undefined,
                            contents: [
                                {
                                    type: NWComponent.NWDescription,
                                    text: '软件学院的学业保研每年大概在16%左右，要求无挂科、通过四级考试，同时要满足下列条件之一：'
                                }, {
                                    type: NWComponent.NWList,
                                    order: false,
                                    data: [
                                        '勤奋学习，刻苦钻研，成绩优秀，学习成绩GPA(总平均学分绩点)排名专业前30%', '符合学校认定的国家级（含）以上的大学生各类科技创新竞赛一等奖（冠军）的获奖个人或代表队主力队员，“国家级大学生创新创业训练计划”优秀项目的核心成员，且学习成绩GPA(总平均学分绩点)排名专业前50%'
                                    ]
                                }, {
                                    type: NWComponent.NWDescription,
                                    text: '满足上述条件均可参加普通推免生综合排名，排名按照如下的计算方法：'
                                }, {
                                    type: NWComponent.NWDescription,
                                    text: '80%学业成绩，也就是GPA转化为百分制并乘80%'
                                }, {
                                    type: NWComponent.NWDescription,
                                    text: '20%综合考核成绩，具体组成如下：'
                                }, {
                                    type: NWComponent.NWList,
                                    order: false,
                                    data: [
                                        '50%知识掌握，往年是英语和专业课，专业课是很简单的算法题，具有编程基础的同学可以轻松拿到满分', '10%学术研究能力，面试', '30%创新能力，在这30%分中，假设满分100分，那么分别有50分科技竞赛，20分大创（必须国家级优秀且核心成员，几乎没有人能够拿到这个加分），论文15分，专利10分，软著5分。', '10%综合素质测评，也就是前三年综测的平均分'
                                    ]
                                }
                            ]
                        }
                    ]
                }],
                contributors: []
            }, {
                title: "机械工程与自动化学院",
                last_update: "2024年11月30日",
                name: "JiXieXueYuan",
                description: '机械工程与自动化学院在高考分两个专业招生：机械类(机械工程、过程装备与控制工程、车辆工程、工业设计)和智能制造工程专业。',
                sections: [
                    {
                        title: '专业介绍',
                        subsections: [{
                            title: '机械工程',
                            contents: [
                                {
                                    type: NWComponent.NWDescription,
                                    text: '机械工程专业自1951年创建以来，已经成为国家特色专业，并通过中国工程教育认证，是卓越工程师教育培养计划的一部分。该专业隶属于机械工程学科，拥有强大的教学力量和先进的实验设备。专业提供学士、硕士、博士学位授予权，并设有博士后流动站。专业发展以学科建设为引领，以教学为核心，科研为支撑，专业建设为依托，课程建设为起点，教学质量为关键。2007年，该专业被评为辽宁省示范性专业；2008年，被评为国家级特色专业；2013年，通过了全国工程教育认证。此外，专业还拥有国家“机械装备虚拟仿真实验教学中心”和8个省部级重点实验室。2017年，被评为辽宁省创新创业改革试点专业；2020年，入选国家级一流本科专业建设点。'
                                }
                            ]
                        }, {
                            title: '工业设计',
                            contents: [
                                {
                                    type: NWComponent.NWDescription,
                                    text: '工业设计专业自1999年经教育部批准设立，并于2000年开始招收学生。2006年，该专业被认定为“辽宁省艺术类工业产品设计人才培养基地”。作为一个综合性学科，它融合了科学、美学、工程、人文和管理等多个领域。主要研究方向包括基础理论研究和前沿设计方法。该专业硕士研究生可获得机械设计及理论学科的工学学位。毕业生因其专业技能而受到社会的高度需求，拥有广阔的就业前景。'
                                }
                            ]
                        }, {
                            title: '过程装备与控制工程',
                            contents: [
                                {
                                    type: NWComponent.NWDescription,
                                    text: '过程装备与控制工程专业起源于1958年创建的“真空技术及设备”专业，具有理工结合和多学科交叉的真空方向专业特色。毕业生具备强大的适应能力，能够在传统工业和尖端科技领域满足需求，并在国内外真空等相关行业和领域获得广泛认可。该专业是国家一流本科专业建设点、国家工程教育认证专业及辽宁省一流本科专业。'
                                }
                            ]
                        }, {
                            title: '车辆工程',
                            contents: [
                                {
                                    type: NWComponent.NWDescription,
                                    text: '车辆工程专业设立于1998年，2008年成为辽宁省重点学科。2009年开始招收本科生，是辽宁省最早具有博士、硕士学位授予权的专业之一。该专业侧重于前沿科学和交叉学科的新理论新技术在车辆工程领域的研究和应用，研究方向包括现代车辆动力学和现代车辆设计技术等。专业构建了特色教学模块，特别注重汽车电子信息技术和新能源汽车技术方向的人才培养。'
                                }
                            ]
                        }, {
                            title: '智能制造工程',
                            contents: [
                                {
                                    type: NWComponent.NWDescription,
                                    text: '智能制造工程专业于2020年获批成立，隶属于机械工程学科。该专业拥有雄厚的教学力量和先进的实验设备，教学理念创新。培养模式以“厚基础、精专业、强能力、重实践、高素质”为核心，旨在培养智能制造工程领域内智能装备、智能工厂和工业应用软件的理论设计、技术开发、科学研究和生产组织管理等方面的专业技术人才。'
                                }
                            ]
                        }]
                    }, {
                        title: '专业分流、转专业与新工科试验班遴选（以2023级为例）',
                        subsections: [
                            {
                                title: undefined,
                                contents: [{
                                    type: NWComponent.NWDescription,
                                    text: '在大一学年结束后，进行专业分流、转专业与新工科试验班选拔工作。'
                                }]
                            }, {
                                title: '专业分流',
                                contents: [{
                                    type: NWComponent.NWDescription,
                                    text: '以机械类专业进入机械工程与自动化学院的学生涉及分流，智能制造专业无需分流，具体分流请参考[机械工程与自动化学院2023级大类招生学生专业分流方案](http://www.me.neu.edu.cn/2024/0731/c3402a266929/page.htm)'
                                }, {
                                    type: NWComponent.NWDescription,
                                    text: '**分流原则**为第一学年结束后，根据学生志愿和学分绩点进行专业分流。\\学生将分流至机械工程、过程装备与控制工程、车辆工程、工业设计四个专业，每个专业有具体的班数和人数范围。\\学生自由申请，学院根据学分绩点排序录取，未按时填报志愿的学生由学院统一调配。'
                                }]
                            }, {
                                title: '转专业',
                                contents: [
                                    {
                                        type: NWComponent.NWDescription,
                                        text: '机械工程与自动化学院各专业均可参与，具体可以参考 [机械工程与自动化学院2023级转专业实施方案](http://www.me.neu.edu.cn/2024/0731/c3402a266930/page.htm)'
                                    }, {
                                        type: NWComponent.NWDescription,
                                        text: '学院严格控制转专业学生比例，具体人数分配至各专业，2023级允许转入转出比例为5%。\\转出机制主要分为学业优秀类（绩点排名）、学科专长类（论文、竞赛、专利等）和学业困难类。'
                                    }, {
                                        type: NWComponent.NWList,
                                        order: false,
                                        data: ['**学业优秀类**:主要学生学年的成绩，具体可以参考文件内容。', '**学科专长类**：主要包括论文（第一作者身份、核心期刊）、竞赛（以团队第一负责人的身份在省级及省级以上科技竞赛获得一等奖以上奖项）、专利（以第一负责人身份获得授权发明专利）', '**学业困难类**：学习该专业有一定困难。']
                                    }, {

                                        type: NWComponent.NWTips,
                                        title: '提示',
                                        case: 'info',
                                        data: '获得转出名额后，仍需获得拟转入学院专业的转入名额，也就是我们俗称的双选，你不仅要确保你能从学院转出，也要确定你想要去的学院同意接收你。'
                                    }
                                ]
                            }, {
                                title: '新工科试验班',
                                contents: [
                                    {
                                        type: NWComponent.NWDescription,
                                        text: '具体实施办法可以参考文件**[机械工程与自动化学院机械工程专业新工科实验班实施办法](http://www.me.neu.edu.cn/2024/0731/c3402a266931/page.htm)**。\\以机械类专业进入机械工程与自动化学院的学生涉及新工科试验班遴选，智能制造专业不参与（可在获得智能制造转专业转出名额并获得机械工程专业转入名额转入机械工程专业后参与遴选）。\\大二专业分流时进行新工科实验班的遴选，大一学习成绩绩点排名前40%的学生可申请，将会从申请的学生中择优遴选25人，组建实验班。\\实验班学生享有推荐免试研究生资格**（推免进入东北大学，通过CET6后可获得直博资格）**、配备导师、专业课程单独授课等特权。\\实验班施行动态管理，每学期末进行淘汰和补选，班级人数控制在25人以内。\\不得主动申请退出班级，否则退班进入普通班级后**不再具有推荐免试研究生资格**。'
                                    }
                                ]
                            }
                        ]
                    }, {
                        title: '推免（以2021级为例）',
                        subsections: [
                            {
                                title: undefined,
                                contents: [{
                                    type: NWComponent.NWDescription,
                                    text: '推免文件可以参考[机械工程与自动化学院推荐 2021 级优秀应届本科毕业生免试攻读研究生工作实施细则](https://image.neuwiki.top/file/da4defb8-d84c-bf01-830f-d07629397c52.pdf)。\\推荐使用[机械学院保研计算器](https://www.momofish.top/app/JXBY/)。整体共分加权平均学生成绩、创新能力、综合素质测评、面试四项。'
                                }, {
                                    type: NWComponent.NWTable,
                                    title: '分数占比',
                                    data: [
                                        ['名称', '占比'],
                                        ['加权平均学生成绩', '80%'],
                                        ['创新能力', '6%'],
                                        ['综合素质测评', '6%'],
                                        ['面试', '8%']
                                    ]
                                }]
                            }, {
                                title: '加权平均学分成绩（80%）',
                                contents: [{
                                    type: NWComponent.NWEquation,
                                    equation: '加权平均学生成绩 = (GPA + 5) \\times 10'
                                }
                                ]
                            }, {
                                title: '创新能力（6%）',
                                contents: [{
                                    type: NWComponent.NWDescription,
                                    text: '主要是根据学业期间的竞赛成果计算。'
                                }, {
                                    type: NWComponent.NWList,
                                    order: false,
                                    data: ['非主力队员成绩按70%计算', '同一赛事获奖按照最高获奖级别计算分值', '各星级竞赛优秀奖参考下一星级竞赛的三等奖赋分', '大学生创新创业训练计划以过程考核与结果考核相结合的方式进行赋分']
                                }
                                ]
                            }, {
                                title: '综合素质测评（6%）',
                                contents: [{
                                    type: NWComponent.NWDescription,
                                    text: '由基础分（25分）、思想品德A（20分）、社会工作B（20分）、文体活动C（15分）、集体建设D（20分）组成，各项分数由三年综合测评平均值确定，但是**其中科研竞赛的25分变成了基础分**。'
                                }
                                ]
                            }, {
                                title: '面试（8%）',
                                contents: [{
                                    type: NWComponent.NWDescription,
                                    text: '由学生掌握的知识和学术研究能力两部分组成，每部分100满分'
                                }
                                ]
                            }, {
                                title: undefined,
                                contents: [{
                                    type: NWComponent.NWDescription,
                                    text: '2021级名额共94个，实验班22个，其余专业72个（保研率14.4%），具体根据分流方向人数比例分配。'
                                }, {
                                    type: NWComponent.NWTable,
                                    title: '保研名额分配情况',
                                    data: [
                                        ['专业', '总人数', '保研人数', '保研率'],
                                        ['新工科试验班', '25', '22', '88%'],
                                        ['机械工程', '236', '34', '14.4%'],
                                        ['车辆工程', '63', '9', '14.2%'],
                                        ['工业设计', '27', '4', '14.8%'],
                                        ['过程控制', '66', '10', '15.1%'],
                                        ['智能制造', '107', '15', '14.0%'],
                                        ['合计', '524', '94', '17.9%'],
                                    ]
                                }]
                            }
                        ]
                    }
                ],
                contributors: [{
                    name: "逍遥飘雪",
                    avatar_url: "https://image.neuwiki.top/image/xiaoyaopiaoxue.jpg"
                }]
            }
        ]
    }
]



// export const getPageByName = (name: string = "DeveloperGreeting"): Page | undefined => {
//     const foundGroup = PAGE_CONFIG.find(group => group.pages.some(page => page.name === name));
//     return foundGroup?.pages.find(page => page.name === name) || undefined;

// }
// export const getPageURLs = (): LinkListItem[] => {
//     // 创建一个数组来存储格式化后的URL
//     const pageURLs: LinkListItem[] = [];
//     // 遍历group中的pages数组
//     PAGE_CONFIG.forEach((item) => {
//         item.pages.forEach((page) => {
//             // 检查page对象是否有title和name属性
//             if (page.title && page.name) {
//                 console.log(page.title);
//                 // 格式化URL并添加到数组中
//                 pageURLs.push({
//                     text: page.title,
//                     link: `https://neuwiki.top/read/${page.name}`
//                 });

//             }
//         });
//     })

//     // 返回包含所有格式化URL的数组
//     return pageURLs;
// }
// export function findAdjacentPageInGroups(currentPageName: string, direction: 'next' | 'prev' = 'prev'): string | 'start' | 'end' {
//     let groups: Group[] = PAGE_CONFIG;

//     // 辅助函数，用于在单个group内查找相邻页面的name
//     function findAdjacentInGroup(group: Group, pageName: string, dir: 'next' | 'prev'): string | 'start' | 'end' {
//         const pageIndex = group.pages.findIndex(page => page.name === pageName);
//         if (pageIndex === -1) return 'end';

//         const pages = group.pages;
//         if (dir === 'next') {
//             if (pageIndex + 1 < pages.length) return pages[pageIndex + 1].name;
//             return 'end';
//         } else {
//             if (pageIndex > 0) return pages[pageIndex - 1].name;
//             return 'start';
//         }
//     }

//     let currentIndex = -1;
//     let currentGroupIndex = -1;

//     // 找到当前页面及其所在组的索引
//     for (let i = 0; i < groups.length; i++) {
//         const group = groups[i];
//         currentIndex = group.pages.findIndex(page => page.name === currentPageName);
//         if (currentIndex !== -1) {
//             currentGroupIndex = i;
//             break;
//         }
//     }

//     // 如果没有找到页面，返回'end'
//     if (currentGroupIndex === -1) return 'end';

//     // 查找当前组内的相邻页面
//     let adjacentPageName = findAdjacentInGroup(groups[currentGroupIndex], currentPageName, direction);

//     // 如果direction是'next'且当前页面是组内最后一个，或者direction是'prev'且当前页面是组内第一个
//     if ((direction === 'next' && currentIndex === groups[currentGroupIndex].pages.length - 1) ||
//         (direction === 'prev' && currentIndex === 0)) {
//         // 检查是否有下一个组或上一个组
//         if (direction === 'next' && currentGroupIndex < groups.length - 1) {
//             // 返回下一个组的第一个页面的name
//             adjacentPageName = groups[currentGroupIndex + 1].pages[0].name;
//         } else if (direction === 'prev' && currentGroupIndex > 0) {
//             // 返回上一个组的最后一个页面的name
//             adjacentPageName = groups[currentGroupIndex - 1].pages[groups[currentGroupIndex - 1].pages.length - 1].name;
//         }
//     }

//     return adjacentPageName;
// }
// /**
//  * 在 Group[] 中搜索所有字符串字段，返回匹配结果及其上下文
//  * @param groups 要搜索的 group 数组
//  * @param keyword 搜索关键词
//  * @returns 匹配结果数组
//  */
// export function searchInGroups(groups: any[], keyword: string) {
//     const results: any[] = [];
//     const regex = new RegExp(keyword, 'i'); // 忽略大小写模糊搜索

//     // 遍历所有 Group
//     groups.forEach(group => {
//         group.pages.forEach((page: any) => {
//             // 搜索 Page 层级
//             searchInPage(page, regex, results);
//         });
//     });

//     return results;
// }

// /**
//  * 搜索 Page
//  */
// function searchInPage(page: any, regex: RegExp, results: any[]) {
//     // 搜索 Page 的 title 和 description
//     searchInString(page.title, 'Page Title', page, regex, results);
//     searchInString(page.description, 'Page Description', page, regex, results);

//     page.sections.forEach((section: any) => {
//         // 搜索 Section
//         searchInString(section.title, 'Section Title', page, regex, results);

//         section.subsections.forEach((subsection: any) => {
//             // 搜索 SubSection
//             searchInString(subsection.title, 'SubSection Title', page, regex, results);

//             subsection.contents.forEach((content: any) => {
//                 searchInContent(content, page, section, subsection, regex, results);
//             });
//         });
//     });
// }

// /**
//  * 搜索 Content
//  */
// function searchInContent(
//     content: any,
//     page: any,
//     section: any,
//     subsection: any,
//     regex: RegExp,
//     results: any[]
// ) {
//     switch (content.type) {
//         case 'NWDescription':
//             searchInString(content.text, 'NWDescription', page, regex, results, section, subsection);
//             break;
//         case 'NWImage':
//             searchInString(content.src, 'NWImage src', page, regex, results, section, subsection);
//             break;
//         case 'NWList':
//             content.data.forEach((item: string) => {
//                 searchInString(item, 'NWList Item', page, regex, results, section, subsection);
//             });
//             break;
//         case 'NWTips':
//             searchInString(content.title, 'NWTips Title', page, regex, results, section, subsection);
//             searchInString(content.data, 'NWTips Data', page, regex, results, section, subsection);
//             break;
//         case 'NWDialogue':
//             searchInString(content.q, 'NWDialogue Question', page, regex, results, section, subsection);
//             searchInString(content.a, 'NWDialogue Answer', page, regex, results, section, subsection);
//             break;
//         case 'NWPersonalIntro':
//             searchInString(content.name, 'NWPersonalIntro Name', page, regex, results, section, subsection);
//             searchInString(content.introduction, 'NWPersonalIntro Introduction', page, regex, results, section, subsection);
//             (content.achievements || []).forEach((achievement: string) => {
//                 searchInString(achievement, 'NWPersonalIntro Achievement', page, regex, results, section, subsection);
//             });
//             break;
//         case 'NWMotto':
//             searchInString(content.message, 'NWMotto Message', page, regex, results, section, subsection);
//             break;
//         case 'NWProblemsRank':
//             content.problems.forEach((problem: any) => {
//                 searchInString(problem.description, 'NWProblemsRank Problem Description', page, regex, results, section, subsection);
//             });
//             break;
//         case 'NWSiteContributors':
//             content.site_sitecontributors.forEach((contributor: any) => {
//                 searchInString(contributor.username, 'NWSiteContributors Username', page, regex, results, section, subsection);
//                 searchInString(contributor.bio, 'NWSiteContributors Bio', page, regex, results, section, subsection);
//             });
//             break;
//         default:
//             break;
//     }
// }

// /**
//  * 搜索字符串并保存结果
//  */
// function searchInString(
//     text: string | undefined,
//     foundInType: string,
//     page: any,
//     regex: RegExp,
//     results: any[],
//     section?: any,
//     subsection?: any
// ) {
//     if (!text) return;

//     const match = text.match(regex);
//     if (match) {
//         const startIdx = Math.max(0, match.index! - 20);
//         const endIdx = Math.min(text.length, match.index! + match[0].length + 20);
//         const snippet = `...${text.slice(startIdx, endIdx)}...`;

//         results.push({
//             pageTitle: page.title,
//             pageName: page.name,
//             sectionTitle: section?.title,
//             subSectionTitle: subsection?.title,
//             foundInType,
//             snippet
//         });
//     }
// }


