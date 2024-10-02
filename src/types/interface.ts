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


export type Content = NWDescription|NWImage|NWList|NWTips|NWContributors;

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