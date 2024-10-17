import { NWTips } from "@/components"
import { NWComponent } from "./enum"


interface NWDescription{
    type:NWComponent.NWDescription,
    data:string
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

interface Contributor{
    name:string,
    src:string,
    qq?:string,
    phone?:string
}
interface NWContributors{
    type:NWComponent.NWContributors,
    contributors:Contributor[]
}
interface NWMotto{
    type:NWComponent.NWMotto,
    message: string,
    author: string
}

export type Content = NWDescription|NWImage|NWList|NWTips|NWContributors|NWPersonalIntro|NWDialogue|NWMotto;

export interface SubSection{
    title:string|undefined,
    contents:Content[]
}

export interface Section {
    title: string|undefined,
    subsections: SubSection[]
}


export interface Page {
    title: string,
    last_update: string,
    name: string,
    description: string|undefined
    sections: Section[],
}
export interface Group {
    title: string,
    name: string,
    pages: Page[]
}