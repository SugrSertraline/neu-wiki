import { NWTips } from "@/components"
import { NWComponent } from "./enum"


interface NWDescription{
    subsection?:string,
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

export type Content = NWDescription|NWImage|NWList|NWTips;

export interface Section {
    title: string|undefined,
    contents: Content[]
}
export interface Page {
    title: string,
    last_update: string,
    name: string,
    description?: string
    sections: Section[]
}
export interface Group {
    title: string,
    name: string,
    pages: Page[]
}