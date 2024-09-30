import type { Group, Page } from "@/types/interface";

export const PAGE_CONFIG: Group[] = [
    {
        title: '写在前面',
        name: 'Preface',
        pages: [{
            title: '开发者寄语',
            name: 'DeveloperGreeting',
            last_update: '2024年9月22日',
            sections: [
                {
                    contents: [
                        {
                            type: 'Description',
                            data: '测试文字，这是<strong>这是</strong>测试用的'
                        }
                    ]
                }
            ]
        }]
    }, {
        title: '生活出行',
        name: 'DailyLife',
        pages: [
            {
                title: '开发者寄语',
                name: 'DeveloperGreeting2',
                last_update: '2024年9月22日',
                sections: [
                    {
                        contents: [
                            {
                                type: "Description",
                                data: '测试文字，这是<strong>这是</strong>测试用的'
                            }
                        ]
                    }
                ]
            }
        ]
    }

]

export const getPageByName = (name: string = "DeveloperGreeting"): Page|undefined => {
    const foundGroup = PAGE_CONFIG.find(group => group.pages.some(page => page.name === name));
    return foundGroup?.pages.find(page => page.name === name) || undefined;

}