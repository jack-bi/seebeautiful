import apiRetry from './apiRetry'
export default {
    post(method, params = {}) {
        let ajaxInfo = new apiRetry.AjaxInfo(method, params);
        return ajaxInfo.send();
    }
}
