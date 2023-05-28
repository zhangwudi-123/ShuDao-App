import { Service } from '@hvisions/toolkit';
const appName = '/yongwei-service';
class PutMaterialService extends Service {
  //新增投料数据
  async createPutMaterial(data) {
    return await this.post(`${appName}/put-material/create`, data);
  }

  //删除
  async deleteSaleLine(id) {
    try {
      return await this.delete(`${appName}/put-material/deleteSaleLine/${id}`);
    } catch (error) {
      throw new Error(error);
    }
  }

  //根据物料查询投入物料剩余数量
  async getLaveMaterial(materialId) {
    try {
      return await this.get(`${appName}/put-material/getLaveMaterial?materialId=${materialId}`);
    } catch (error) {
      throw new Error(error);
    }
  }

  //查询
  async getPutMaterial(data) {
    return await this.post(`${appName}/put-material/getPutMaterial`, {
      ...data,
      direction: false,
      sort: true,
      sortCol: 'id'
    });
  }
}
export default new PutMaterialService();
