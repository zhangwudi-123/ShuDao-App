import { Service } from '@hvisions/toolkit';
const appName = '/warehouse-service';
class SemiFinishedDelivery extends Service {
  //分页查询接口
  async getByQuery(data) {
    try {
      return await this.post(`${appName}/SemiMaterialOutWarehouseController/getByquery`, {
        ...data,
        direction: false,
        sort: true,
        sortCol: 'id'
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  // 根据备料区查询折弯机
  async getByreadyMaterials(id) {
    try {
      return await this.get(`${appName}/SemiMaterialOutWarehouseController/getByreadyMaterials/${id}`);
    } catch (error) {
      throw new Error(error);
    }
  }

  // 根据收料单号查询订单号
  async getByreceiptNumber(id) {
    try {
      return await this.get(`${appName}/SemiMaterialOutWarehouseController/getByreceiptNumber/${id}`);
    } catch (error) {
      throw new Error(error);
    }
  }

  // 出库
  async outStore(dockingPoint, ids, readyMaterials) {
    try {
      return await this.put(`${appName}/SemiMaterialOutWarehouseController/outStore?dockingPoint=${dockingPoint}&readyMaterials=${readyMaterials}`, ids);
    } catch (error) {
      throw new Error(error);
    }
  }

  //出库
  async returnStore(id, middle, toLocation) {
    try {
      return await this.put(`${appName}/SemiMaterialOutWarehouseController/returnStore?id=${id}&middle=${middle}&toLocation=${toLocation}`);
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default new SemiFinishedDelivery();
