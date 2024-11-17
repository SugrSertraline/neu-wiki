import { NWComponent } from "@/types/enum";
import type { Group, Page } from "@/types/interface";
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
                                        { description: "创新创业保研、国防科工", urgency: 5 },
                                        { description: "医疗报销等日常", urgency: 2 },
                                        { description: "贡献者功能", urgency: 2 },
                                        { description: "考试真题", urgency: 4 },
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
                                            qq: '2451305814',
                                            wechat: '15714149025',
                                            email: undefined
                                        }, {
                                            username: "aning",
                                            avatar: "/aning.jpg",
                                            contributionType: "网站开发",
                                            contribution: "网站后端开发、部署。",
                                            bio: "软件20级本科生、24级研究生。",
                                            qq: undefined,
                                            wechat: undefined,
                                            email: "aninganing147@gmail.com"
                                        }
                                        , {
                                            username: "好锦鲤",
                                            avatar: "/haojinli.jpg",
                                            contributionType: "内容完善",
                                            contribution: "“校车”相关内容",
                                            bio: "计算机2021级本科，2025级硕士。",
                                            qq: undefined,
                                            wechat: undefined,
                                            email: undefined
                                        }
                                    ]
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
            },{
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
                                    achievements: ['一作ACL2024', '一作ICML2024', '一作TOIS', '投稿NAACL2025','投稿ICLR2025','投稿CVPR2025'],
                                    qq:'1115685184'
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
                                },{
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
                                    '139路为东北大学浑南校区开往东北大学南湖校区，如果你想要去南湖校区但是没有赶上校车，你又恰巧有较多的时间，那么可以来坐139路公交车。139路公交车整点发车，发车间隔一小时，由于是始发站所以在整点后几分钟公交就会到达，所以如果想要乘坐这辆公交只需要整点在小西门等待即可，不需要提前太多时间。139路现时全天绕行中国医大一院浑南院区站，工作日另有6:30 7:30 16:30三班车。139路使用的是**沈阳电子乘车卡**，近期车载刷卡机已更换为雄帝EMP5210C，支持**盛京通电子公交卡**。', '394路公交车每天只有3班，该公交的作用类似于乡村巴士，从陈相镇出发到南塔客运站，发车时间为5:30、8:30、13:30，高德地图能看到位置，建议有需要再去选择该公交，否则不要选择。', 'V109路每天7:00 8:00 17:00自创新路地铁站发往全运五路沈中大街（原全运五路枢纽站），2023年9月27日头班车起自创新一路白塔三街（东软医疗）延伸至此。本线路可用盛京通、全国交通联合 卡、沈阳电子乘车卡（支付宝、微信乘车码），单一票价2元（刷卡1.8元）'
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
                        title: "发车时间",
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
                                    }
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
                                    }
                                ]
                            }]
                    },{
                        title: "注意事项",
                        subsections: [{
                            title: undefined,
                            contents: [
                                {
                                    type:NWComponent.NWList,
                                    order:false,
                                    data:[
                                        '由于刷卡机不联网，因此如果现场给学生卡充值，刷卡机将不能及时收到充值数据。因此余额不足时需借用其他同学学生卡代刷。','不要携带无封口的饮料（如豆浆、奶茶、咖啡等）上车，若在车上打泼将会很难收拾。','预约者不要踩点核销预约记录，若过点则预约记录无法核销，故若仍需上车则参照未预约者刷卡上车。','若乘车人数已达上限，请未能上车的同学改乘其他交通工具。','若有其他情况，请以车管、司机、学生助理的指挥为准。'
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
                                        text: "支教保研要求符合所在学院推保研绩点成绩排名要求，且有干部任职，包括团支书、班长或校学生会副会长及以上学生干部满1学年，学生社团联合会、学院学生会等校学生会副主席单位部长及以上学生干部满1学年，优先考虑学生党员、获得省级及以上“三好学生”、“优秀党员”等荣誉称号、省级及以上学术科技、文体艺术等比赛三等奖以上。 考核方式为面试，面试后会按照排名排序，保研只能保研至本校，但是可以选择专业，支教时长为1年。各个学院下发文件，并进行面试，往年来说当天会出结果并在第二天体检。在之后进行心理测试、填报名表等环节。具体情况需要结合当年情况与红头文件考虑。 目前我们学校的支教地为云南、四川、新疆、江西，支教团每年23人左右，5人来自秦皇岛分校。"
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
            },{
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
                                        type:NWComponent.NWCompetition,
                                        competition:{
                                            name: "美国大学生数学建模竞赛",
                                            period: "上旬",
                                            description: "美国大学生数学建模竞赛（MCM/ICM），简称“美赛”，由美国数学及其应用联合会主办，是最高的国际性数学建模竞赛，也是世界范围内最具影响力的数学建模竞赛，一般也指数学建模竞赛。注意要三人组队。",
                                            suitableColleges: ['软件学院','计算机学院','信息学院','理学院'],
                                            tags: ['算法','大数据','创新']
                                        }
                                    },{
                                        type:NWComponent.NWDescription,
                                        text:'竞赛内容还在完善，如果大家也有了解可以投稿或者直接联系群主~'
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
            }
        ]
    }
]



export const getPageByName = (name: string = "DeveloperGreeting"): Page | undefined => {
    const foundGroup = PAGE_CONFIG.find(group => group.pages.some(page => page.name === name));
    return foundGroup?.pages.find(page => page.name === name) || undefined;

}
export const formatPageURLs = (): string[] => {
    // 创建一个数组来存储格式化后的URL
    const formattedURLs: string[] = [];
    // 遍历group中的pages数组
    PAGE_CONFIG.forEach((item) => {
        item.pages.forEach((page) => {
            // 检查page对象是否有title和name属性
            if (page.title && page.name) {
                console.log(page.title);
                // 格式化URL并添加到数组中
                formattedURLs.push(`${page.title}：https://neuwiki.top/read/${page.name}`);
            }
        });
    })

    // 返回包含所有格式化URL的数组
    return formattedURLs;
}
export function findAdjacentPageInGroups(currentPageName: string, direction: 'next' | 'prev' = 'prev'): string | 'start' | 'end' {
    let groups: Group[] = PAGE_CONFIG;

    // 辅助函数，用于在单个group内查找相邻页面的name
    function findAdjacentInGroup(group: Group, pageName: string, dir: 'next' | 'prev'): string | 'start' | 'end' {
        const pageIndex = group.pages.findIndex(page => page.name === pageName);
        if (pageIndex === -1) return 'end';

        const pages = group.pages;
        if (dir === 'next') {
            if (pageIndex + 1 < pages.length) return pages[pageIndex + 1].name;
            return 'end';
        } else {
            if (pageIndex > 0) return pages[pageIndex - 1].name;
            return 'start';
        }
    }

    let currentIndex = -1;
    let currentGroupIndex = -1;

    // 找到当前页面及其所在组的索引
    for (let i = 0; i < groups.length; i++) {
        const group = groups[i];
        currentIndex = group.pages.findIndex(page => page.name === currentPageName);
        if (currentIndex !== -1) {
            currentGroupIndex = i;
            break;
        }
    }

    // 如果没有找到页面，返回'end'
    if (currentGroupIndex === -1) return 'end';

    // 查找当前组内的相邻页面
    let adjacentPageName = findAdjacentInGroup(groups[currentGroupIndex], currentPageName, direction);

    // 如果direction是'next'且当前页面是组内最后一个，或者direction是'prev'且当前页面是组内第一个
    if ((direction === 'next' && currentIndex === groups[currentGroupIndex].pages.length - 1) ||
        (direction === 'prev' && currentIndex === 0)) {
        // 检查是否有下一个组或上一个组
        if (direction === 'next' && currentGroupIndex < groups.length - 1) {
            // 返回下一个组的第一个页面的name
            adjacentPageName = groups[currentGroupIndex + 1].pages[0].name;
        } else if (direction === 'prev' && currentGroupIndex > 0) {
            // 返回上一个组的最后一个页面的name
            adjacentPageName = groups[currentGroupIndex - 1].pages[groups[currentGroupIndex - 1].pages.length - 1].name;
        }
    }

    return adjacentPageName;
}
/**
 * 在 Group[] 中搜索所有字符串字段，返回匹配结果及其上下文
 * @param groups 要搜索的 group 数组
 * @param keyword 搜索关键词
 * @returns 匹配结果数组
 */
export function searchInGroups(groups: any[], keyword: string) {
    const results: any[] = [];
    const regex = new RegExp(keyword, 'i'); // 忽略大小写模糊搜索
  
    // 遍历所有 Group
    groups.forEach(group => {
      group.pages.forEach((page: any) => {
        // 搜索 Page 层级
        searchInPage(page, regex, results);
      });
    });
  
    return results;
  }
  
  /**
   * 搜索 Page
   */
  function searchInPage(page: any, regex: RegExp, results: any[]) {
    // 搜索 Page 的 title 和 description
    searchInString(page.title, 'Page Title', page, regex, results);
    searchInString(page.description, 'Page Description', page, regex, results);
  
    page.sections.forEach((section: any) => {
      // 搜索 Section
      searchInString(section.title, 'Section Title', page, regex, results);
  
      section.subsections.forEach((subsection: any) => {
        // 搜索 SubSection
        searchInString(subsection.title, 'SubSection Title', page, regex, results);
  
        subsection.contents.forEach((content: any) => {
          searchInContent(content, page, section, subsection, regex, results);
        });
      });
    });
  }
  
  /**
   * 搜索 Content
   */
  function searchInContent(
    content: any,
    page: any,
    section: any,
    subsection: any,
    regex: RegExp,
    results: any[]
  ) {
    switch (content.type) {
      case 'NWDescription':
        searchInString(content.text, 'NWDescription', page, regex, results, section, subsection);
        break;
      case 'NWImage':
        searchInString(content.src, 'NWImage src', page, regex, results, section, subsection);
        break;
      case 'NWList':
        content.data.forEach((item: string) => {
          searchInString(item, 'NWList Item', page, regex, results, section, subsection);
        });
        break;
      case 'NWTips':
        searchInString(content.title, 'NWTips Title', page, regex, results, section, subsection);
        searchInString(content.data, 'NWTips Data', page, regex, results, section, subsection);
        break;
      case 'NWDialogue':
        searchInString(content.q, 'NWDialogue Question', page, regex, results, section, subsection);
        searchInString(content.a, 'NWDialogue Answer', page, regex, results, section, subsection);
        break;
      case 'NWPersonalIntro':
        searchInString(content.name, 'NWPersonalIntro Name', page, regex, results, section, subsection);
        searchInString(content.introduction, 'NWPersonalIntro Introduction', page, regex, results, section, subsection);
        (content.achievements || []).forEach((achievement: string) => {
          searchInString(achievement, 'NWPersonalIntro Achievement', page, regex, results, section, subsection);
        });
        break;
      case 'NWMotto':
        searchInString(content.message, 'NWMotto Message', page, regex, results, section, subsection);
        break;
      case 'NWProblemsRank':
        content.problems.forEach((problem: any) => {
          searchInString(problem.description, 'NWProblemsRank Problem Description', page, regex, results, section, subsection);
        });
        break;
      case 'NWSiteContributors':
        content.site_sitecontributors.forEach((contributor: any) => {
          searchInString(contributor.username, 'NWSiteContributors Username', page, regex, results, section, subsection);
          searchInString(contributor.bio, 'NWSiteContributors Bio', page, regex, results, section, subsection);
        });
        break;
      default:
        break;
    }
  }
  
  /**
   * 搜索字符串并保存结果
   */
  function searchInString(
    text: string | undefined,
    foundInType: string,
    page: any,
    regex: RegExp,
    results: any[],
    section?: any,
    subsection?: any
  ) {
    if (!text) return;
  
    const match = text.match(regex);
    if (match) {
      const startIdx = Math.max(0, match.index! - 20);
      const endIdx = Math.min(text.length, match.index! + match[0].length + 20);
      const snippet = `...${text.slice(startIdx, endIdx)}...`;
  
      results.push({
        pageTitle: page.title,
        pageName:page.name,
        sectionTitle: section?.title,
        subSectionTitle: subsection?.title,
        foundInType,
        snippet
      });
    }
  }
  
  // 使用示例
  const groups = [
    {
      title: 'Group 1',
      pages: [
        {
          title: 'Page 1',
          last_update: '2024-11-16',
          name: 'Introduction',
          description: 'This is a sample page about coding.',
          sections: [
            {
              title: 'Section A',
              subsections: [
                {
                  title: 'SubSection A1',
                  contents: [
                    { type: 'NWDescription', text: 'This is a detailed description about TypeScript.' },
                    { type: 'NWTips', title: 'Tip 1', case: 'info', data: 'Always use type annotations.' }
                  ]
                }
              ]
            }
          ],
          contributors: []
        }
      ]
    }
  ];
  
