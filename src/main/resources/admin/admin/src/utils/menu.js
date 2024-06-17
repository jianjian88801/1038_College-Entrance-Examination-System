const menu = {
    list() {
        return [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除","入学办理"],"menu":"学生","menuJump":"列表","tableName":"xuesheng"}],"menu":"学生管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"学籍信息","menuJump":"列表","tableName":"xuejixinxi"}],"menu":"学籍信息管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"入学办理","menuJump":"列表","tableName":"ruxuebanli"}],"menu":"入学办理管理"}],"frontMenu":[],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看"],"menu":"学籍信息","menuJump":"列表","tableName":"xuejixinxi"}],"menu":"学籍信息管理"},{"child":[{"buttons":["查看"],"menu":"入学办理","menuJump":"列表","tableName":"ruxuebanli"}],"menu":"入学办理管理"}],"frontMenu":[],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"学生","tableName":"xuesheng"}]
    }
}
export default menu;
