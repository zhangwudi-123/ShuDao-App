import { Service } from '@hvisions/toolkit';

const appName = '/warehouse-service';

class PDAService extends Service {
  async inPDAStock(params) {
    try {
      return await this.put(`${appName}/pda/inPDAStock?code=${params.code}&id=${params.id}`);
    } catch (error) {
      throw new Error(error);
    }
  }

  async outPDAStock(params) {
    try {
      return await this.put(`${appName}/pda/outPDAStock?code=${params.code}&id=${params.id}`);
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default new PDAService();
