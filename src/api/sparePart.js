import { Service } from '@hvisions/toolkit';
const appName = '/spare-part';
class SparePart extends Service {
  async getSpareToShelve(data) {
    try {
      return await this.post(`${appName}/spareToShelve/getSpareToShelve`, {
        ...data,
        sort: true,
        sortCol: 'id',
        direction: false,
        showNumberZero: false
      });
    } catch (error) {
      throw new Error(error);
    }
  }
  async applySpare(data) {
    try {
      await this.post(`${appName}/apply/applySpare`, data);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getSpareByProcessInstanceId(data) {
    return await this.post(`${appName}/UseListingController/getSpareByProcessInstanceId`, data);
  }

  async getSpareApply(businessKey) {
    return await this.get(`${appName}/ActualUseController/getSpareApply/${businessKey}`);
  }

  async getSpareApplyThrough(data) {
    return await this.post(`${appName}/ActualUseController/getSpareApplyThrough`, data);
  }

  async createActualUseList(data) {
    return await this.post(`${appName}/ActualUseController/createActualUseList`, data);
  }

  /**
   * 根businessKey获取退库清单
   * @params {number} businessKey
   *  @return {Array} 退库清单列表
   */

  async getLubApplyList(businessKey) {
    return await this.get(`/spare-part/ActualUseController/getLubApplyList/${businessKey}`);
  }

  async getSpareApplyList(processInstanceId) {
    return await this.get(`${appName}/ActualUseController/getSpareApplyList/${processInstanceId}`);
  }

  /**
  * 获取已经申请出库的备件
  */

  async getSpareCanUseById(id) {
    try {
      return await this.get(`${appName}/ActualUseController/getSpareCanUse/${id}`);
    } catch (error) {
      throw new Error(error.message)
    }
  }

  /**
  * 备件使用记录
  */

  async getSpareActual(data) {
    try {
      return await this.post(`${appName}/ActualUseController/getSpareActual`, data);
    } catch (error) {
      throw new Error(error.message)
    }
  }

}
export default new SparePart();
