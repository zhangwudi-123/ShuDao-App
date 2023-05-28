import { Service, session } from '@hvisions/toolkit';
const appName = '/auth'
class Menu extends Service {
  async getModule() {
    const u = session.getAuthData();
    try {
      return await this.get(`${appName}/module/getModuleListWithModuleButtonListByUserId/${u.id}?platform=${2}`);
    } catch (error) {
      console.log(error);
    }
  }
}
export default new Menu();
