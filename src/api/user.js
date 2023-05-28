import { Service } from '@hvisions/toolkit';

class User extends Service {
  async getUsers(size = 10) {
    const pageInfo = {
      pageSize: size,
      direction: false,
      sort: true,
      sortCol: 'id'
    };
    return await this.post('/auth/user/getUserPageByNameOrAccount', pageInfo);
  }

  findPage = async data => {
    try {
      return await this.post(`/activiti/identity/getGroupByQuery`, {
        ...data,
        direction: false,
        sort: true,
        sortCol: 'id'
      });
    } catch (err) {
      throw new Error(err);
    }
  };
}

export default new User();
