/**
   * 向字符串中插入字符
   * @param str 字符串本身
   * @param flg 插入的字符
   * @param sn 插入位子
   */
function stringInsert(str,flg,sn){
    let newstr="";
    for(let i=0;i<str.length;i+=sn){
        let tmp=str.substring(i, i+sn);
        newstr+=tmp+flg;
    }
    return newstr;
}