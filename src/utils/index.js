import tool from './tool';

const install = (Vue, options) => {
    Vue.$ValidateUtil = Vue.prototype.$ValidateUtil = tool;
};

export default { install };
