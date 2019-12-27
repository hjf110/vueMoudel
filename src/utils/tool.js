const tool = {
    /**
     * 根据时间的值获取时间
     * @param type 1:年月日 2:年月日时分秒
     * @param e
     * @returns {string}
     */
    getTime(type, e) {
        let date;
        if (type) {
            date = new Date(e);
        } else {
            date = new Date();//现在
        }
        let y = date.getFullYear();
        let M = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
        let d = date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate();
        let h = date.getHours() < 10 ? '0' + (date.getHours()) : date.getHours();
        let m = date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes();
        let s = date.getSeconds() < 10 ? '0' + (date.getSeconds()) : date.getSeconds();
        if (type == 1) return y + '-' + M + '-' + d;
        if (type == 2) return y + '-' + M + '-' + d + ' ' + h + ':' + m + ':' + s + '';


    }
};
export default tool
