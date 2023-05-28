import { Service } from '@hvisions/toolkit';
const appName = '/yongwei-service';
class BatchScanService extends Service {
  //新增投料数据

  async scanInStock(data) {
    return await this.post(`${appName}/product/scanInStock`, data);
  }
}
export default new BatchScanService();
