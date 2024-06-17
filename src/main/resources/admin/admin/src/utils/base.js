const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot1hme0/",
            name: "springboot1hme0",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot1hme0/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "大学生入学审核系统"
        } 
    }
}
export default base
