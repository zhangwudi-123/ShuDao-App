import { Service } from '@hvisions/toolkit';
const appName = '/spare-part';
class Lub extends Service {
  async getLubToShelve(data) {
    try {
      return await this.post(`${appName}/lubToShelve/getLubToShelve`, data);
    } catch (error) {
      throw new Error(error);
    }
  }
  async applyLub(data) {
    try {
      await this.post(`${appName}/apply/applyLub`, data);
    } catch (error) {
      throw new Error(error);
    }
  }

  async getLubByProcessInstanceId(data) {
    return await this.post(`${appName}/UseListingController/getLubByProcessInstanceId`, data);
  }

  async getLubApply(businessKey) {
    return await this.get(`${appName}/ActualUseController/getLubApply/${businessKey}`);
  }

  async getLubApplyThrough(data) {
    return await this.post(`${appName}/ActualUseController/getLubApplyThrough`, data);
  }

  async getLubCanUse(data) {
    return await this.get(`${appName}/ActualUseController/getLubCanUse/${data}`);
  }

  async getLubActual(data) {
    try {
      return await this.post(`${appName}/ActualUseController/getLubActual`, data);
    } catch (error) {
      throw new Error(error.message)
    }
  }

}
export default new Lub();
