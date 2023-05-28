import { Service } from '@hvisions/toolkit';
const appName = '/equipment-master-data';
const equipment_fault = '/equipment-fault';
class Location extends Service {
  async getEquipmentPageByNameOrCodeAndEquipmentTypeId(data) {
    try {
      return await this.post(`${appName}/equipment/getEquipmentPageByNameOrCodeAndEquipmentTypeId`, data);
    } catch (error) {
      throw new Error(error);
    }
  }

	async getEquipmentByCode(code){
		return await this.get(`${appName}/equipment/getEquipmentByCode/${code}`);
  }

  getEquipmentDtoByQuery = async data => {
    try {
      return await this.post(`${appName}/equipment/getEquipmentDtoByQuery`, {
        ...data,
        direction: false,
        sort: true,
        sortCol: 'id'
      });
    } catch (err) {
      throw new Error(err);
    }
  };



	async getAllEquipment(){
		return await this.get(`${appName}/equipment/getAllEquipment`);
  }

  async getFaultClassesByEquipmentClassId(id = 0) {
    return await this.get(`${equipment_fault}/EmFaultClass/getFaultClassesByEquipmentClassId/${id}`);
  }

  async getChildFaultClass(parentId) {
    return await this.get(`${equipment_fault}/EmFaultClass/getChildFaultClass/${parentId}`);
  }

  async getFaultByFaultClass(data) {
    return await this.post(`${equipment_fault}/EmFault/getFaultByFaultClass`, data);
  }
  async getSolutionByFaultId(id) {
    return await this.post(`${equipment_fault}/EmFaultSolution/getSolutionByFaultId`, { pageSize: 10000000, faultReasonId: id });
  }
  async getFaultReason(id) {
    return await this.post(`${equipment_fault}/EmFaultReason/getFaultReason`, { pageSize: 10000000, faultId: id });
  }
  async getSerialNumber(service) {
    return await this.get(`/spare-part/apply/getSerialNumber/${service}`);
  };
  async getDefaultUser(params) {
    return await this.get(`${equipment_fault}/utils/getDefaultUser`, params);
  }
}
export default new Location();
