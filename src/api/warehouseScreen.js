import { Service } from '@hvisions/toolkit';
const appName = 'http://175.153.115.145:9000/ledger-services';
class warehouseScreenService extends Service {
  async gettopValue() {
    try {
      return await this.get(`${appName}/Largescreen/gettopValue`);
    } catch (error) {
      throw new Error(error);
    }
  }

  async getMiddleValue() {
    try {
      return await this.get(`${appName}/Largescreen/getMiddleValue`);
    } catch (error) {
      throw new Error(error);
    }
  }

  async getBottomValue() {
    try {
      return await this.get(`${appName}/Largescreen/getBottomValue`);
    } catch (error) {
      throw new Error(error);
    }
  }
  async getTopmiddleValue() {
    try {
      return await this.get(`${appName}/Largescreen/getTopmiddleValue`);
    } catch (error) {
      throw new Error(error);
    }
  }
  async getNewdata() {
    try {
      return await this.post(`${appName}/hvMarketPrice/getNewdata`, {
        department: '销售',
        gods: '黄磷'
      });
    } catch (error) {
      throw new Error(error);
    }
  }
  async getnewData() {
    try {
      return await this.get(`${appName}/FurnaceProduce/getnewData`);
    } catch (error) {
      throw new Error(error);
    }
  }
}
export default new warehouseScreenService();
