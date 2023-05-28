import { Service } from '@hvisions/toolkit';
const appName = '/yongwei-service';
class PackService extends Service {
  //新增投料数据

  async getProductByQuery(data) {
    return await this.post(`${appName}/product/getProductByQuery`, {
      direction: false,
      sort: true,
      sortCol: 'id',
      ...data
    });
  }
  async putWeight(data) {
    return await this.put(
      `${appName}/product/putWeight?materialBatch=${data.materialBatch}&weight=${data.weight}`
    );
  }
}
export default new PackService();
