import { Service } from '@hvisions/toolkit';
const appName = '/materials-master-data';
class materialService extends Service {
  async getMaterial(value, hasBom) {
    try {
      return await this.post(`${appName}/material/getMaterial`, {
        ...value,
        hasBom,
        direction: false,
        sort: true,
        sortCol: 'id'
      });
    } catch (error) {
      throw new Error(error);
    }
  }
  async getMaterialByNameOrCode(value, hasBom) {
    try {
      return await this.post(`${appName}/material/getMaterialByNameOrCode`, {
        keyWord: '',
        ...value,
        hasBom,
        direction: false,
        sort: true,
        sortCol: 'id',
        materialTypes: ['Raw_Material']
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default new materialService();
