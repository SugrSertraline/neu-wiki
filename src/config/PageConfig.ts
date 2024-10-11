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
                                src: '/qq_group.png'
                            }]
                    }

                    ]
                }
            ]
        }]
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
                                        data: '对于感冒、发烧等小问题，建议前往校医院进行治疗，这里以浑南校区为例，同学携带校园卡前往浑南校区就诊，经过采血、开药的环节即可，使用校园卡当场报销，价格很便宜。南湖校区西门外为东北大学校医院，可以自行前往。'
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
                                        data: '对于较为严重或者校医院没有足够医疗条件，但还没有严重到需要救护车救助的情况，首先前往校医院开具用于报销的转诊单，在此之后前往附近的三甲医院就诊。南湖校区附近三甲医院较多，浑南校区最近的为苏家屯中心医院，前往时携带学校下发的医疗卡以及电子医保码。校外就诊无法当场报销，学校会以年为单位进行报销，注意辅导员的通知。'
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
                                    data: '大家注意保存好各种收据、发票等内容。每年假期门诊在异地无法报销，住院需要看当地的政策，具体请咨询相关医院的负责人员。'
                                }]
                            }
                        ]
                    },{
                        title: '关键内容贡献者',
                        subsections: [
                            {
                                title: undefined,
                                contents: [{
                                    type:NWComponent.NWContributors,
                                    contributors:[
                                        {
                                            name: "苏璃",
                                            src: "suli.jpg"
                                        }
                                    ]
                                }]
                            }
                        ]
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
                                        data: "校园卡设有两个密码：消费密码和查询密码。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        data: "**查询密码**：登录“校园卡自助服务平台”或者拨打语音挂失电话时使用，其初始密码为持卡人的有效证件（身份证、护照）号码的最后6位（如果身份证最后一位为X，则X视为0）；如果没有登记证件号码，则为“000000”。查询密码可以在“校园卡自助服务平台”上修改。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        data: "**消费密码**：在消费额超过限制时使用，其初始密码为持卡人证件（身份证、护照）号码的后6位（如果身份证最后一位为X，则X视为0）；如果没有登记证件号码，则为“000000”。消费密码可以在圈存机上修改，修改方法为：将校园卡放至圈存机“读卡区”，选择“校卡服务”->“修改密码”，输入原密码及新密码即可。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        data: "为保证校园卡资金的使用安全，请用户及时修改密码。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        data: "有问题可以联系校园卡服务中心为师生使用校园卡提供日常服务，如：办卡、补卡、换卡、挂失、解挂、现金、银联POS机充值等。"
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
                                        data: '如果校园卡丢失，首先挂失校园卡。'
                                    }, {
                                        type: NWComponent.NWList,
                                        order: false,
                                        data: [
                                            '**圈存机自助挂失**：在校园内分布的圈存机上，选择“校卡服务”->“自助挂失”，输入学（工）号和密码，完成挂失操作。', '**网上自助挂失**：登录校园卡自助服务平台，根据网页提示进行挂失操作。', "**自助语音电话挂失**：拨打自助语音服务热线电话024-83690900，按照语音提示进行挂失操作。",
                                        ]
                                    }, {
                                        type: NWComponent.NWDescription,
                                        data: '在连续三次输入错误的消费密码后，校园卡将被锁定，必须本人持校园卡和有效身份证件（身份证、护照）到校园卡服务中心办理解锁。如果挂失完成，请带着身份证、学校下发的中国银行卡进行补卡，其中身份证用于认证身份，银行卡用于支付工本费。'
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
                                        data: "进行校园卡在线充值后，是不能立即同步到校园卡实体卡中，因此需要一个操作让余额同步，这个操作叫做“圈存”。目前浑南校区圈存机地点为一食堂文印室对面、生科楼、一号楼。"
                                    },
                                    {
                                        type: NWComponent.NWList,
                                        order: false,
                                        data: [
                                            "**圈存机充值**：登录“校园卡自助服务平台”，进入“个人信息”的“圈存授权维护”，开通建行卡的“快捷付”功能后，即可到圈存机上选择“金融服务”中的“快捷付”项目，输入相应的信息给校园卡进行充值。", "**网上银行充值**：登录建设银行网上银行，选择“缴费支付”，选择“缴费支付地区和类别”及“选择缴费支付内容（校园一卡通充值）”，网银转账成功后，持校园卡到校内任一台圈存机上选择“领款服务”中的“圈存款项”领款。", "**手机银行充值、建行微信公众号充值**：登录建行手机银行（进入建行微信公众号），选择“悦生活”“生活缴费”中的“IC卡、联名卡充值”，选择缴费地区（辽宁省沈阳市）及缴费单位（东北大学校园卡充值），输入校园卡号和缴费金额，手机银行转账成功后，持校园卡到校内任一台圈存机上选择“领款服务”中的“圈存款项”领款。"
                                        ]
                                    }, {
                                        type: NWComponent.NWDescription,
                                        data: "同时，宿舍内用于打热水的余额与校园卡余额独立，所以需要在圈存机额外圈存，这个叫做小钱包。但目前饮水机应该都已经采用线上扫码支付，小钱包功能已经失效了。但还是要提醒大家小钱包金额在校园卡丢失补办时无法返还，为避免损失，小钱包内总金额最多为10元。小钱包内金额不能再转出他用， 转入小钱包内金额在校园卡丢失后无法退还。"
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
                                        data: "校园卡设置了限额保护，餐限额为30元，日消费限额为50元，超过消费限额时需要输入六位消费密码。可以通过“校园卡自助服务平台”或圈存机修改餐限额和日消费限额。 转入小钱包内金额在校园卡丢失后无法退还。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        data: "圈存机修改方法：将校园卡放至圈存机“读卡区”，选择“校卡服务”->“修改限额”，输入校园卡卡号和密码即可进行修改。转入小钱包内金额在校园卡丢失后无法退还。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        data: "可以通过“校园卡自助服务平台”、圈存机及自助语音服务电话024-83690900查询消费余额及消费明细。"
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
                                        data: "目前，除公共浴池需要使用实体卡片外，其余场所的消费均可使用二维码快捷支付，学校刷卡机支持的二维码有智慧东大e码通、微信支付、支付宝支付三类码。"
                                    }
                                ]
                            },{
                                title: '智慧东大e码通',
                                contents: [{
                                    type: NWComponent.NWDescription,
                                    data: "各大应用市场搜索下载“智慧东大”，使用学号和统一身份认证密码登录，点击下部导航栏中间的“e码通”即可使用e码通二维码支付，支付默认使用校园卡余额。"
                                }]
                            },{
                                title: '微信支付',
                                contents: [{
                                    type: NWComponent.NWDescription,
                                    data: "（绑定方法搬运自[信网办微信企业号绑定说明](https://pass.neu.edu.cn/portal/wechat/help/wechat-help.html)） 使用微信“扫一扫”功能扫描下面的二维码，进入到验证页面后，输入统一身份认证账号和密码，点击验证，完成身份验证。"
                                }, {
                                    type: NWComponent.NWImage,
                                    src: '/card_weixin1.png',
                                    width: 200
                                },
                                {
                                    type: NWComponent.NWDescription,
                                    data: "[微信绑定码链接](https://wp.neu.edu.cn/tp_wp/wp/accountbind)。页面提示“绑定成功”之后，扫描以下的东北大学微信企业号二维码，成为东北大学微信企业号的成员之一。"
                                }, {
                                    type: NWComponent.NWImage,
                                    src: '/card_weixin2.png',
                                    width: 300
                                }, {
                                    type: NWComponent.NWDescription,
                                    data: "进入微信企业号后，可以直接使用微信支付二维码在刷卡机上支付，支付资金渠道以微信显示为准（不使用校园卡余额）。"
                                }]
                            },{
                                title: "支付宝支付",
                                contents: [{
                                    type: NWComponent.NWDescription,
                                    data: "扫描下面的小程序码。"
                                }, {
                                    type: NWComponent.NWImage,
                                    src: '/card_alipay.png',
                                    width: 300
                                },
                                {
                                    type: NWComponent.NWDescription,
                                    data: "进入小程序后点击左上角“校园卡”，输入个人信息后即可完成绑定。注意此处密码为校园卡消费密码，不是统一身份认证密码，默认为身份证后六位，最后一位X以0记。 可以直接使用支付宝的支付二维码在刷卡机上完成支付，支付资金渠道以支付宝显示为准（不使用校园卡余额）。"
                                }]
                            }
                        ]

                    },{
                        title: '关键内容贡献者',
                        subsections: [
                            {
                                title: undefined,
                                contents: [{
                                    type:NWComponent.NWContributors,
                                    contributors:[
                                        {
                                            name: "Techy-Wu",
                                            src: "https://avatars.githubusercontent.com/u/73032687"
                                        },{
                                            name: "苏璃",
                                            src: "suli.jpg"
                                        }
                                    ]
                                }]
                            }
                        ]
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
                                    data: "在宿舍、实验室等地可以直接使用网线连接墙上的网络接口连接网络，普通的为百兆，有四个接口的方形盒子为**1000M网络**，在选择网线时可以尽量选择超五类以上的线缆以充分发挥网络性能。"
                                }]
                            }, {
                                title: '无线连接',
                                contents: [{
                                    type: NWComponent.NWDescription,
                                    data: "在校园内任何地方都可以使用支持的设备连接Wlan无线网络使用校园网。学校提供的Wlan网络有“NEU”“NEU-2.4G”和“NEU-Mobile”，均为WiFi6标准，可以根据需求选择连接。 “NEU”为2.4G/5G双频信号，无密码，可以直接连接使用。访问校外资源（即使为免流资源）需要登录IP控制网关。 “NEU-2.4G”为2.4G单频信号，无密码，可以直接连接使用。访问校外资源（即使为免流资源）需要登录IP控制网关。 “NEU-Mobile”为2.4G/5G双频信号，首次连接需要输入学号和校园网密码，第二次直接连接可以直接使用，全程不需要登录IP控制网关。"
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
                                    data: "在运营商网络或在学校外需要访问校园网内资源时，可以使用VPN连接。对于常用网址，可以直接使用浏览器登录[WebVPN](https://webvpn.neu.edu.cn/)连接；对于WebVPN中没有收录的网站，可以安装OpenVPN等软件进行连接，具体请看信网办[OpenVPN使用手册](http://xwb.neu.edu.cn/2023/0716/c6133a233647/page.htm)"
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
                                    data: "校园网环境下可以在线观看有线电视节目直播，直播网站[HDTV](https://hdtv.neu6.edu.cn/)，观看免流量。"
                                }]
                            }, {
                                title: 'PT下载',
                                contents: [{
                                    type: NWComponent.NWDescription,
                                    data: "PT下载是BT下载的特例，为特定用户才可使用的私有BT下载。CERNET上有很多学校或学生运营的PT服务器，一般限制高校用户才能注册使用，里面资源较公网BT站点更丰富且支持免流下载。常用的PT站点有东北大学[六维空间](http://bt.neu6.edu.cn/)、天津大学[北洋园PT](https://www.tjupt.org/)、西安交通大学[南洋](https://ipv6.njtech.edu.cn/links.html)等，可以凭学校邮箱直接注册使用。使用PT需要遵守站点考核规定，尽量满足上传量/做种时间要求，避免账号停用。"
                                }]
                            }, {
                                title: '免流方法',
                                contents: [{
                                    type: NWComponent.NWDescription,
                                    data: "由于特殊原因，此处仅作技术交流和启发，具体实现请自己动手。内容包括：设置程序下载节点为支持IPv6的节点、使用IPv6服务器转发、伪装DNS服务器，使用53端口转发"
                                }]
                            },
                        ]
                    },{
                        title: '关键内容贡献者',
                        subsections: [
                            {
                                title: undefined,
                                contents: [{
                                    type:NWComponent.NWContributors,
                                    contributors:[
                                        {
                                            name: "Techy-Wu",
                                            src: "https://avatars.githubusercontent.com/u/73032687"
                                        }
                                    ]
                                }]
                            }
                        ]
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
                                data: "公交站位于小西门出口天桥下，目前共有如下公交。"
                            }, {
                                type: NWComponent.NWList,
                                order: false,
                                data: [
                                    '139路为东北大学浑南校区开往东北大学南湖校区，如果你想要去南湖校区但是没有赶上校车，你又恰巧有较多的时间，那么可以来坐139路公交车。139路公交车整点发车，发车间隔一小时，由于是始发站所以在整点后几分钟公交就会到达，所以如果想要乘坐这辆公交只需要整点在小西门等待即可，不需要提前太多时间。139路现时全天绕行中国医大一院浑南院区站，工作日另有6:30 7:30 16:30三班车。139路使用的是**沈阳电子乘车卡**，近期车载刷卡机已更换为雄帝EMP5210C，支持**盛京通电子公交卡**。', '394路公交车每天只有3班，该公交的作用类似于乡村巴士，从陈相镇出发到南塔客运站，发车时间为5:30、8:30、13:30，高德地图能看到位置，建议有需要再去选择该公交，否则不要选择。', 'V109路每天7:00 8:00 17:00自创新路地铁站发往全运五路沈中大街（原全运五路枢纽站），2023年9月27日头班车起自创新一路白塔三街（东软医疗）延伸至此。本线路可用盛京通、全国交通联合 卡、沈阳电子乘车卡（支付宝、微信乘车码），单一票价2元（刷卡1.8元）'
                                ]
                            }, {
                                type: NWComponent.NWDescription,
                                data: '另推荐乘坐灯塔至沈阳的长途客车，具体时刻表可参考微信公众号“灯塔至沈阳客车信息平台”，本线路北行可前往南塔客运站或五爱客运站，南行可前往灯塔市，并可直接衔接转乘前往辽阳的客运班线。本线在四环路以内区段与394路完全重合，可作为394的替代品。'
                            }]
                        },{
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
                        },{
                            title: '有轨电车',
                            contents: [{
                                type: NWComponent.NWDescription,
                                data: '有轨电车站位于交通岗，也就是出西门向北侧（右手边）一直走，在交通岗可以看到三个站点，如图所示。也就是说，一、三号线停靠沈营大街西侧月台，四号线现时为定班车，具体时刻表可参考微信公众号“浑南现代有轨电车”。有轨电车目前不支持部分地区的交通联合卡。如要使用扫码支付，须使用有轨电车自己的乘车码。'
                            }, {
                                type: NWComponent.NWImage,
                                width: 300,
                                src: './Tramway.png'
                            }, {
                                type: NWComponent.NWDescription,
                                data: '其中1号站点为从浑南校区出发的站点，一号线、三号线、四号线均在此乘坐。二、三号站点为从外面回来的站点，如果不知道怎么判断可以看站点等待区的铁轨，行驶方向是靠右侧行驶的。出行的话应该只会选择一号线和四号线。'
                            }, {
                                type: NWComponent.NWList,
                                order: false,
                                data: ['**有轨电车一号线**：经由白塔交通岗前往兴隆大奥莱，主要途经点有沈阳创新天地，也就是全运路万达，如果想要出去吃喝玩乐全运路万达很不错，附近也有龙湖·天街，是另一个商场，也推荐前往。终点是兴隆到来，如果要去万达奥体中心点可以在亿丰广场站下车，如果要去兴隆大奥莱或者做二号线可以在兴隆大奥莱站下车。', '**有轨电车四号线**：前往二十一世纪大厦，主要途经点为科技馆，也就是辽宁省科技馆和博物馆，作者非常推荐大家去辽宁省博物馆参观。如果要去全运路万达，可以在华茂中心站下车，跟随导航很容易找到。最终到达地点为世纪大厦站，可以乘坐地铁，也可以去附近的洗浴元气汤泉玩乐。']
                            }, {
                                type: NWComponent.NWDescription,
                                data: '有轨电车出行需要使用沈阳有轨电车小程序，绑定乘车码，上车刷一次下车刷一次，在快要到达你下车站点时刷就可以。也可以刷交通卡，或者是使用之前推荐的手机NFC功能都可以。'
                            }]
                        },{
                            title: '打车',
                            contents: [{
                                type: NWComponent.NWDescription,
                                data: '这就是简单粗暴的出行方式了，只要有钱就可以打车，但是打车也是有选择的，作者目前使用过滴滴、高德和花小猪，这些平台都有一个特点，就是长时间不用会很便宜，抛去这个因素的话花小猪打车会更便宜。如果是三四个人出门建议就可以打车了，没有必要坐公交，因为人均下来其实并没有贵太多。出门时建议每个人用各自的打车软件先比较价格，然后再打车。'
                            }]
                        },{
                            title: '火车',
                            contents: [{
                                type: NWComponent.NWDescription,
                                data: '这种出行方式适合出远门（指到沈阳北站以及相邻市），大家可以在12306订购相应的火车票，并按照时间到达火车站即可，前往沈阳南站可以乘坐139路公交车、地铁四号线或者打车。这里提示一下，乘坐地铁到达沈阳南站后，可以选择**乘坐无障碍电梯**到达检票平台，会节省很多时间。如果你不想带身份证，在检票时可以在12306搜索临时身份证并刷脸领取，并走人工通道；在检票时用12306的检票码即可。'
                            }]
                        },{
                            title: '乘坐校车中转',
                            contents: [{
                                type: NWComponent.NWDescription,
                                data: '这是一种省钱方便的方式，大家按照校车的预约时间乘坐校车到达南湖校区，并从南湖校区出发即可。'
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
                                data: '实体盛京通卡本科生可办理学生卡（每学年会有组织集中办理），**仅可乘坐公交车**，单一票价空调车为0.8元；研究生只可办理普通卡。如有频繁乘坐公交车的需求，可办理实名制普通月票卡，75元130次，单一票价空调车每次扣一次乘车次数，部分多级票价线路上下车各一次。办理网点可参考微信公众号“盛京通”。实体盛京通卡本科生可办理学生卡（每学年会有组织集中办理），仅可乘坐公交车，单一票价空调车为0.8元；研究生只可办理普通卡。如有频繁乘坐公交车的需求，可办理实名制普通月票卡，75元130次，单一票价空调车每次扣一次乘车次数，部分多级票价线路上下车各一次。办理网点可参考微信公众号“盛京通”。'
                            }, {
                                type: NWComponent.NWDescription,
                                data: '强烈建议出行时优先使用实体卡或NFC卡。NFC卡只要卡片带有“交通联合”字样，在本市公共交通领域均可受理。这里推荐一个网站可查询当前测试记录交通联合互联互通测试记录查询：[交联面条站](https://www.tunionfans.com)'
                            }]
                        }
                    ]
                },{
                    title: '关键内容贡献者',
                    subsections: [
                        {
                            title: undefined,
                            contents: [{
                                type:NWComponent.NWContributors,
                                contributors:[
                                    {
                                        name: "南惊希露",
                                        src: "https://b0.bdstatic.com/0df6c8c7f109aa7b67e7cb15e6f8d025.jpg@h_1280"
                                    }
                                ]
                            }]
                        }
                    ]
                }]
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
                                        data: "大学的成绩由你学过的所有课程的成绩来构成，每门课有自己的学分和成绩。我们以高等数学为例，高等数学的学分是5学分，一般来说**1学分=16学时=16节课**。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        data: "当然这是一般情况，很多课程有额外的实验课、讨论课等内容，可能学分与学时不是1:16的关系。每门课都有自己的学分，学分代表的含义是权重，也就是在计算GPA时的占比。"
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
                                        data: "一般来说成绩有三种给分方式：二分制、五分制、百分制，我们学校采用的是满分5.0的计算方法，如果用百分制来转换，那么：**(成绩=百分制的分数-50)/10**。比如我们高等数学拿了91分，那么转为相应的5.0计算法那就是：**(91-50)/10=4.1**，也就是说我们高数最终的成绩为4.1。而具体给分方式如下。"
                                    }, {
                                        type: NWComponent.NWList,
                                        order: false,
                                        data: [
                                            "**百分制**：顾名思义，一门课的成绩为60-100分（最低分为60是因为，如果低于60就是挂科了），按照刚才的转换公式，也就是最终成绩为1.0~5.0。", "**二分制**：一般出现于0.5学分的课程，例如形势与政策，二分制只有两种情况，即合格和不合格，只要不是极其恶劣就都是合格。而合格是3.0,也就是说这门课只有3.0和挂科两种情况。", "**五分制**：一般出现于人文选修课等课程，五分制为阶梯式给分，分别是优、良、中、合格、不合格五个分段，分别对应着4.5,3.5,2.5,1.5以及挂科，一般来说4.5是比较好的，3.5是大多数人的成绩。"
                                        ]

                                    }, {
                                        type: NWComponent.NWDescription,
                                        data: "我们知道了最终分的计算方法，那么一门课是如何具体给分的呢？这个就取决于任课老师了，我们还是以高等数学为例。比如我修高等数学时，满分100分，共有三个方面的内容：平时分40分，包括20分机考、20分慕课；期中考试10分；期末考试50分。也就是说最终你的高数成绩是这些分数的总和。当然这是高等数学这门课的给分方式，不同的老师也会有不同的给分方式，大家在学习一门课之前最好问清楚给分方式，避免浪费不必要的时间。"
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
                                    data: "我们已经知道了各门课的成绩，GPA实际上就是各门课程按照学分加权求和，比如我们现在学了两门课，分别是5学分的高等数学和4学分的概率论，高等数学我拿到4.4的成绩，概率论我拿到了4.1的成绩，那么我所学习的课程的学分总和为5+4=9学分，按照权重求和，那么就是：**(5/9 * 4.4)+(4/9 * 4.1) = 4.2667**"
                                },
                                {
                                    type: NWComponent.NWDescription,
                                    data: "这就是我的最终GPA,课程越多，也就是按照这个计算方式计算即可。一般来说GPA在4.0以上就是成绩很高了（前提是没有疫情网课等情特殊情况）。GPA相当于你在专业内的排名，无论是专业分流还是保研、综测，GPA都是非常重要的参考之一。如果你想要提升你的GPA，你就可以去选修更多的课，让这门课尽可能的得高分，这样你的GPA就会提高了，也就是我们常说的选给分高的课刷绩点。"
                                }
                            ]
                        }]
                    }
                ]
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
                                        data: "新生第一次考试需要录入身份证信息，所以请 **务必** 携带身份证，如果忘记携带，可以找考场助理说明情况，让其手动录入。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        data: "新生第一次考试需要自己录入虹膜信息，需要打开虹膜录制界面录制虹膜，届时会有考场助理进行指导，每次考试也都需要验证虹膜。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        data: "浑南校区的考试地点为1号楼B509,考试前注意携带鞋套、学生证、身份证。看清楚预约的考试的时间以及座位，提前10分钟到达。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        data: "由于机房电脑老旧，第一次开机非常慢，请耐心等待，开机后需要加载虹膜设备，点击IE浏览器无反应为正常现象，请耐心等待。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        data: "机房仅可访问内网，所以需要手动输入考试网址，只能使用IE浏览器，输入 mathe.neu.edu.cn 回车键进入考试网址。选择对应的考试科目登陆考试系统，参加考试。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        data: "部分电脑由于设备原因，无法自动加载虹膜插件，需要手动允许。当打开虹膜验证界面时页面下方会有弹窗提示（可能会被记住密码的提示盖住，先关掉它），请点击允许后重新验证。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        data: "考试结束后需在前方签到本签到。"
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
                                        data: "带鞋套（如果不嫌弃的话可以去垃圾桶翻一下，有很多）、学生证（用于出现突发状况验证身份），草稿纸上不要有任何字迹。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        data: "如果出现突发状况，无法按时参加考试，请在预约人数较少的场次前往考场和助理说明情况，安排备用座。如果考场预约满了，需要等别人考试结束后你才能使用。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        data: "每场考试时间固定，请尽量不要迟到，时间结束必须提交试卷（即使你试卷的时间还没结束），所以期中考试请不要迟到，严格一个半小时，迟到一分钟少答一分钟。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        data: "考场全范围监控覆盖，如果出现作弊现象，该场考试零分。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        data: "由于设备老旧，可能会出现分辨率过大，需要手动调节，在桌面右键调整分辨率，将分辨率调高会好很多。考卷如出现过大过小，请按下Ctrl键+鼠标滚轮缩放界面。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        data: "**千万注意考试科目**，如果你在考高数的时候打开了线代考试，你必须答完，一旦进入考试就会开始计时，即使你退出界面，时间到自动提交试卷，所以注意不要选错考试科目。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        data: "如果你很“幸运”的碰到了错题，比如选项重复、题目不全、选项错误等，恭喜你，期末的时候任课老师会统计这些情况并将分数加回来，你只需要随便选一个然后离场时找监考助理签一下错题记录单（非必要"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        data: "考试过程中如出现问题，请联系考场助理解决。"
                                    }
                                ]
                            }
                        ]
                    }
                ]
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
                                        data: "保研叫推免，实际上是一种资格，也就是推荐免试的资格，简单来说就是不用进行考研就可以直接读研，这里有一个概念，就是无论你用什么方式获得推免资格，包括正常的学业成绩、竞赛还是其他方式，你都会获取到推免资格，无论你在推免排名中是第一名还是最后一名都一样，所以如果你想要保研，你只需要努力获得推免资格就可以，但是名校会卡你的学业成绩排名作为门槛，具体内容请查询各个学院保研攻略。"
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
                                        data: "最常见的保研方式，也就是学校会下发给各个学院保研名额，学院按照自己的名额分配与考核方式分配给各个专业，具体的内容请大家前往“学院攻略”查询各自专业的保研相关内容。"
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
                                        data: "辅导员要求成绩50%，政治面貌为中共党员，承担两年辅导员工作，具体内容等待后续更新。"
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
                                        data: "支教保研要求符合所在学院推保研绩点成绩排名要求，且有干部任职，包括团支书、班长或校学生会副会长及以上学生干部满1学年，学生社团联合会、学院学生会等校学生会副主席单位部长及以上学生干部满1学年，优先考虑学生党员、获得省级及以上“三好学生”、“优秀党员”等荣誉称号、省级及以上学术科技、文体艺术等比赛三等奖以上。 考核方式为面试，面试后会按照排名排序，保研只能保研至本校，但是可以选择专业，支教时长为1年。各个学院下发文件，并进行面试，往年来说当天会出结果并在第二天体检。在之后进行心理测试、填报名表等环节。具体情况需要结合当年情况与红头文件考虑。 目前我们学校的支教地为云南、四川、新疆、江西，支教团每年23人左右，5人来自秦皇岛分校。"
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
                                    data: "近几年新增加了一种新的保研方法——工程硕博，目前大多数学校都在逐渐增加工程硕博的名额，未来可能会逐步压缩原本的普通推免。仅以东大软院为例，在20级推免的时候，软院有3个名额（2硕1直博），会让学生们报名，然后筛选到6人，以1：1的比例进入复试。之后通过面试来确定最终的人选。"
                                }]
                            }, {
                                title: '工程硕博简介',
                                contents: [{
                                    type: NWComponent.NWDescription,
                                    data: "学校和企业一起联培，注重实践能力，培养能打工的学生。一般来说，工程硕博都是专硕，在学校和企业都各有一个导师，在研一的时候和正常学生一样，在学校完成所学课程。研二研三的时候会去企业打工，每月可能会有一点微薄薪资，不过不是一直待在企业，而是半工半学。毕业的时候没有就业限制。"
                                }]
                            },{
                                title: '联培企业',
                                contents: [{
                                    type: NWComponent.NWDescription,
                                    data: "一般来说，企业会和学校的某些学院达成协议，像东大软件是和宝武公司合作。可能其他学院合作的企业不同。像中山大学的部分学院还会跟华为有合作，所以企业不是固定的。另外有些企业让你打工的时候，实际上还是偏向于科研性质的，成果物要以论文形式发布。"
                                }]
                            },{
                                title: '推免方式',
                                contents: [{
                                    type: NWComponent.NWDescription,
                                    data: "工程硕博推免的时候分两种："
                                }, {
                                    type: NWComponent.NWDescription,
                                    data: "有正常推免资格。即参加学院推免综测成绩排名，根据教务处公布的具有推免资格的学生。像这种学生，在参加预推免的时候，也能报名其他高校的工程硕博。比如2023年复旦大学软院在预推免的时候突然说自己要招工程硕博的学生，报这个项目的人很少，所以如果你奔着复旦的名头去，不是太差的点击就送。"
                                }, {
                                    type: NWComponent.NWDescription,
                                    data: "没有正常推免资格。东大20级学生推免的时候，工程硕博名额和其他推免名额不冲突（包括行政推免、支教保研之类的），是额外补充的名额，但是走这个只能留本校了"
                                }]
                            },{
                                title: '性价比与适用人群',
                                contents: [{
                                    type: NWComponent.NWDescription,
                                    data: "工程硕博是大势所趋，未来学硕的名额会更加珍贵，专硕的名额会进一步增加。想在学术上有所成就的，建议还是老老实实走学硕。目前工程硕博这个政策刚出来还没多久，前几届都是小白鼠，校企联培说得好听，也可能两边都不重视，另外毕业要求和导师确认制度等等都没有具体的红头文件，一切以口头通知为准。"
                                }, {
                                    type: NWComponent.NWDescription,
                                    data: "本条路适用于： 保研边缘人，没有保研资格但是综合实力还可以，又不想考研，留本校也无所谓; 联培企业说得过去，如果联培企业是阿里腾讯华为，相信自然有更多人愿意去，毕业的时候很有优势; 对学术要求不高; 愿意接受政策更改的风险——毕竟还处于试点阶段，前几届政策朝令夕改不足为奇。"
                                }]
                            }
                        ]

                    },{
                        title: '关键内容贡献者',
                        subsections: [
                            {
                                title: undefined,
                                contents: [{
                                    type:NWComponent.NWContributors,
                                    contributors:[
                                        {
                                            name: "小明",
                                            src: "/xiaoming.jpg"
                                        }
                                    ]
                                }]
                            }
                        ]
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
                                        data: "高等数学的给分短期内应该不会有太大变化，仍然是平时分+机考+慕课+期末考试的形式，其中期末考试占比50%。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        data: "慕课部分，有选择题、手写互评、期中期末部分，大家注意，作者当时学习时问过任课老师，选择题部分不算分，算分的只有手写拍照提交互评以及期末考试的部分，当然授课情况可能每年都不相同，所以大家如果对给分情况有问题抓紧时间问老师，一定不要忘记提交和互评，因为这些分数错过就只能错过，不能再补，与其靠期末拿分不如把这些必拿的分拿到。"
                                    }, {

                                        type: NWComponent.NWDescription,
                                        data: "请前往机考指南进行阅读。"
                                    }, {

                                        type: NWComponent.NWDescription,
                                        data: "期末考试为填空题+大题，没有选择题！但一般来说题目都是有一定的套路，或者说是可以有复习角度的，这里建议大家前往文印室或专门经营东北大学真题的书店购买真题，大家平时学习时可以参考其他学校的教材，但是期末考试时要刷东北大学的真题，而且要注意真题是有区分AB卷的，有些真题很混乱，会将数学专业的期末试题混入其中，所以大家在复习时已经要有选择性和甄别垃圾题目的能力，不要在没有意义的地方浪费时间。"
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
                ]
            }, {
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
                                        data: "[东北大学基层就业](http://job.neu.edu.cn/news/index/tag/jcjy)"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        data: "[辽宁省2024年度面向东北大学选调应届优秀大学毕业生公告](http://job.neu.edu.cn/news/index/tag/jcjy)"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        data: "总体流程：考生报名与学校推荐→资格审查→笔试→面试→面谈→考察与体检→公示→录用"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        data: ""
                                    }, {
                                        type: NWComponent.NWList,
                                        order: true,
                                        data: ['确定今年辽宁省面向东北大学组织定向选调（会发布选调公告）。', '确认自己是否满足选调条件（见选调公告→选调条件部分）。', '在规定时间内进入报名系统进行注册并填写个人信息，值得注意的内容如下：']
                                    }, {
                                        type: NWComponent.NWDescription,
                                        data: "**岗位志愿**：无论是省直岗位志愿还是后续可能出现的市直、区直岗位志愿填写，请根据专业匹配和竞争情况综合考虑自己的意愿，选择在一定程度上大于努力。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        data: "2024年度辽选需要提供一份自荐材料，请认真书写。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        data: "请至少提前2天提交报名材料，确保审核通过。如出现审核不通过情况，可结合反馈原因修改材料重新提交材料；如确认材料无误审核仍不通过，可通过公告联系方式与组织部协调。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        data: "持续关注选调系统，准考证及新的信息会通过系统发布。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        data: "首先要及时在系统下载面试准考证。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        data: "面试方式为结构化面试，2024年度东北大学面试有两道题，一题谈对一句讲话的理解，另一题给出处理方案，6分钟思考＋6分钟作答。抽签确定面试顺序，在一教室思考（有纸笔）6分钟，再到另一教室作答6分钟，等待下一考生作答完毕后返回作答教室获取成绩。面试学习可参考《面试的经验》，多记忆多张口说，感受自己与答案语言的魅力。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        data: "**面试成绩当场出。**"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        data: "确认进入下一环节后，将会按省直、市直、区直的顺序组织面谈，时间线可能较长，不同单位的工作开展有差异，请耐心等待，正常安排自己的生活。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        data: "辽选不完全以成绩为依据，还有专业匹配、岗位匹配、来辽意愿等多方面的综合考量。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        data: "提前总结好内容，比如自我介绍、工作了解、性格爱好、优点缺点、职业规划、来辽意愿等。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        data: "保持电话畅通，面谈不同单位采取的方式不同，线上线下都有可能。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        data: "后续环节按照单位要求组织开展即可，考察可能需要自己联系同学和老师，体检通常是单位统一组织。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        data: "单位联系启动三方协议后，后续环节可以尝试联系导员一起帮忙，谢谢导员。"
                                    }, {
                                        type: NWComponent.NWDescription,
                                        data: "更多辽选信息可以通过“小红书”来做进一步的了解，很多热心的同学在里面分享了自己的经验。"
                                    }
                                ]
                            }
                        ]
                    },{
                        title: '关键内容贡献者',
                        subsections: [
                            {
                                title: undefined,
                                contents: [{
                                    type:NWComponent.NWContributors,
                                    contributors:[
                                        {
                                            name: "小明",
                                            src: "/xiaoqi.jpg"
                                        }
                                    ]
                                }]
                            }
                        ]
                    }
                ],

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
                                data: '软件工程主要培养同学们的软件开发能力，本科前三年，大一学年主要学习数学和专业基础，包括高等数学、C语言、Java等基本课程；大二学年主要学习计算机领域相关课程比如计算机组成原理、计算机网络等，以及软件工程相关知识例如软件需求分析、人机交互的软件工程方法等课程；大三学年进行在分流，目前主要是云计算与人工智能两个方向，并选择相应的选修课。云计算主要学习云计算相关的知识，包括分布式、全栈开发等；人工智能学习人工智能领域的课程包括自然语言处理、人工智能基础等。'
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
                                    data: '软件学院的学业保研每年大概在16%左右，要求无挂科、通过四级考试，同时要满足下列条件之一：'
                                }, {
                                    type: NWComponent.NWList,
                                    order: false,
                                    data: [
                                        '勤奋学习，刻苦钻研，成绩优秀，学习成绩GPA(总平均学分绩点)排名专业前30%', '符合学校认定的国家级（含）以上的大学生各类科技创新竞赛一等奖（冠军）的获奖个人或代表队主力队员，“国家级大学生创新创业训练计划”优秀项目的核心成员，且学习成绩GPA(总平均学分绩点)排名专业前50%'
                                    ]
                                }, {
                                    type: NWComponent.NWDescription,
                                    data: '满足上述条件均可参加普通推免生综合排名，排名按照如下的计算方法：'
                                }, {
                                    type: NWComponent.NWDescription,
                                    data: '80%学业成绩，也就是GPA转化为百分制并乘80%'
                                }, {
                                    type: NWComponent.NWDescription,
                                    data: '20%综合考核成绩，具体组成如下：'
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
                }]
            }
        ]
    }
]



export const getPageByName = (name: string = "DeveloperGreeting"): Page | undefined => {
    const foundGroup = PAGE_CONFIG.find(group => group.pages.some(page => page.name === name));
    return foundGroup?.pages.find(page => page.name === name) || undefined;

}