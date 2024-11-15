import axios from 'axios';
export const readApi = {
    getCommit(page_name:string){
        return axios.post('/api/comment/get',{
            pageId:page_name
        },{
            headers: {
                'Content-Type': 'application/json'
              }
        }).then(response=>{
            return response.data.data;
        })
    },
    addCommit(page_name:string,commit_content:string){
        return axios.post('/api/comment/add',{
            pageId:page_name,
            content:commit_content
        },{
            headers: {
                'Content-Type': 'application/json'
              }
        }).then(response=>{
            return response.data.data;
        })
    },
    getAllComment(password:string){
        return axios.post('/api/comment/getAllComment',{
            password:password
        },{
            headers: {
                'Content-Type': 'application/json'
              }
        }).then(response=>{
            return response.data.data;
        })
    },
    changeVisible(password:string,id:number,visible:number){
        return axios.post('/api/comment/changeVisible',{
            password:password,
            commentList:[
                {
                    id:id,
                    visible:visible
                }
            ]
        },{
            headers: {
                'Content-Type': 'application/json'
              }
        }).then(response=>{
            return response.data.data;
        })
    }

}