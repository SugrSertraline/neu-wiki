
export interface Content {
    title?: string,
    type: string,
    data: string
}
export interface Section {
    title?: string,
    contents: Content[]
}
export interface Page {
    title: string,
    last_update: string,
    name:string,
    Description?:Content
    sections: Section[]
}
export interface Group{
    title:string,
    name:string,
    pages:Page[]
}