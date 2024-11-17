import { NWComponent } from "./enum"


interface NWDescription {
    type: NWComponent.NWDescription,
    text: string
}
interface NWImage {
    type: NWComponent.NWImage,
    width: number,
    src: string
}
interface NWList {
    type: NWComponent.NWList,
    order: boolean,
    data: string[]
}
interface NWTips {
    type: NWComponent.NWTips,
    title: string,
    case: 'default' | 'info' | 'success' | 'warning' | 'error',
    data: string
}


interface NWDialogue {
    type: NWComponent.NWDialogue,
    q: string,
    a: string
}
interface NWPersonalIntro {
    type: NWComponent.NWPersonalIntro,
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

interface NWMotto {
    type: NWComponent.NWMotto,
    message: string,
    author: string
}

export interface Problem {
    description: string
    urgency: number
}
interface NWProblemsRank {
    type: NWComponent.NWProblemsRank
    problems: Problem[]
}

export interface SiteContributor {
    username: string,
    avatar: string,
    contributionType: string,
    contribution: string,
    bio: string,
    qq: string|undefined,
    wechat: string|undefined,
    email: string|undefined
}
interface NWSiteContributors{
    type:NWComponent.NWSiteContributors
    site_sitecontributors:SiteContributor[]
}


export interface Competition {
    name: string
    period: '上旬' | '中旬' | '下旬'
    description: string
    suitableColleges: string[]
    tags: string[]
  }

interface NWCompetition{
    type:NWComponent.NWCompetition
    competition:Competition
}



export interface LinkListItem {
    text: string
    link: string
  }

export interface NWLinkList{
    type:NWComponent.NWLinkList,
}
export type Content = NWDescription | NWImage | NWList | NWTips | NWPersonalIntro | NWDialogue | NWProblemsRank | NWMotto|NWSiteContributors|NWCompetition|NWLinkList;

export interface SubSection {
    title: string | undefined,
    contents: Content[]
}

export interface Section {
    title: string | undefined,
    subsections: SubSection[]
}

interface PageContributor {
    name: string,
    avatar_url: string
}
export interface Page {
    title: string,
    last_update: string,
    name: string,
    description: string | undefined
    sections: Section[],
    contributors: PageContributor[]
}
export interface Group {
    title: string,
    name: string,
    pages: Page[]
}