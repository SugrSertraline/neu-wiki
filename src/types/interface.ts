import { NWComponent } from "./enum"


interface NWDescription{
    type:NWComponent.NWDescription,
    text:string
}
interface NWImage{
    type:NWComponent.NWImage,
    width:number,
    src:string
}
interface NWList{
    type:NWComponent.NWList,
    order:boolean,
    data:string[]
}
interface NWTips{
    type:NWComponent.NWTips,
    title:string,
    case:'default' | 'info' | 'success' | 'warning' | 'error',
    data:string
}

interface NWContributor{
    type:NWComponent.NWContributor,
    username: string,
    avatar: string,
    contributionType: string,
    contribution: string,
    bio: string,
    qq?: string,
    wechat?: string,
    email?: string
}
interface NWDialogue{
    type:NWComponent.NWDialogue,
    q:string,
    a:string
}
interface NWPersonalIntro{
    type:NWComponent.NWPersonalIntro,
    name: string
    avatarUrl: string
    college: string
    grade: string
    major?: string
    graduation: string
    introduction: string
    achievements?: string[]
    qq?: string
    wechat?: string
    github?: string
    email?: string
}

interface NWMotto{
    type:NWComponent.NWMotto,
    message: string,
    author: string
}

export type Content = NWDescription|NWImage|NWList|NWTips|NWPersonalIntro|NWDialogue|NWMotto;

export interface SubSection{
    title:string|undefined,
    contents:Content[]
}

export interface Section {
    title: string|undefined,
    subsections: SubSection[]
}

interface PageContributor{
    name:string,
    avatar_url:string
}
export interface Page {
    title: string,
    last_update: string,
    name: string,
    description: string|undefined
    sections: Section[],
    contributors:PageContributor[]
}
export interface Group {
    title: string,
    name: string,
    pages: Page[]
}