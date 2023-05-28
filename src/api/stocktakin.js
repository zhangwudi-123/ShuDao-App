import { Service } from '@hvisions/toolkit';

const appName = '/warehouse-service';

class Stocktakin extends Service {
  async getQueryList(data) {
    return await this.post(`${appName}/stockcheck/getPage`,{
      ...data,
      direction:false,
      sort: true,
      sortCol : 'id'
    });
  }

  // 锁库状态 stockcheck/getLockState
  async getLockState() {
    try {
      return await this.get(`${appName}/stockcheck/getLockState`);
    } catch (error) {
      throw new Error(error);
    }
  }
  // 锁库
  async lockStock() {
    try {
      return await this.get(`${appName}/stockcheck/lockStock`);
    } catch (error) {
      throw new Error(error);
    }
  }
  // 关闭 stockcheck/unLockStock
  async unLockStock() {
    try {
      return await this.get(`${appName}/stockcheck/unLockStock`);
    } catch (error) {
      throw new Error(error);
    }
  }
  // stockcheck/create、
  async createStock() {
    try {
      return await this.get(`${appName}/stockcheck/create`);
    } catch (error) {
      throw new Error(error);
    }
  }
  // /stockcheck/getByScId/{scId}
  async getStock(id) {
    try {
      return await this.get(`${appName}/stockcheck/getByScId/${id}`);
    } catch (error) {
      throw new Error(error);
    }
  }
  // 一键导入 /stockcheck/pull
  async imporMaterail(data) {
    try {
      return await this.post(`${appName}/stockcheck/pull`, data);
    } catch (error) {
      throw new Error(error);
    }
  }

  // 选择物料 stockcheck/choose
  async chooseMaterail(data) {
    try {
      return await this.post(`${appName}/stockcheck/choose`, data);
    } catch (error) {
      throw new Error(error);
    }
  }
  // /stockcheck/getLineByMaterial 根据物料信息关键字查询物料
  async getLineByMaterial(data) {
    try {
      return await this.post(`${appName}/stockcheck/getLineByMaterial`, data);
    } catch (error) {
      throw new Error(error);
    }
  }

  // /stockcheck/getDetailByLineId/{lineId}
  async getDetailByLineId(id) {
    try {
        return await this.get(`${appName}/stockcheck/getDetailByLineId/${id}`);
      } catch (error) {
        throw new Error(error);
    }
  }
  // stockcheck/manulUpdateDetail
  async manulUpdateDetail(data) {
    try {
        return await this.post(`${appName}/stockcheck/manulUpdateDetail`, data);
      } catch (error) {
        throw new Error(error);
      }
  }
  // stockcheck/updateDetail 更新行数据
  async updateDetail(data) {
    try {
        return await this.post(`${appName}/stockcheck/updateDetail`, data);
      } catch (error) {
        throw new Error(error);
      }
  }
  async deleteMaterialDetail(id) {
    try {
      await this.delete(`${appName}/stockcheck/deleteDetail/${id}`);
    } catch (error) {
      throw new Error(error);
    }
  }
  // /stockcheck/complete/{scId}
  async changeStatus(id) {
    try {
      await this.put(`${appName}/stockcheck/complete/${id}`);
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAllByQuery() {
    try {
      return await this.post(`${appName}/warehouse/findAllByQuery`, {});
    } catch (error) {
      throw new Error(error);
    }
  }
  async deleteLineById(id) {
    try {
      await this.delete(`${appName}/stockcheck/deleteLineById/${id}`);
    } catch (error) {
      throw new Error(error);
    }
  }
  async getMaterialList(data) {
    return await this.post(`${appName}/stock/getAllByQuery`, {
      ...data,
      direction: false,
      sort: true,
      sortCol: 'id'
    });
  }

  async findMaterialByBatchNum(data) {
    try {
      return await this.post(`${appName}/stockcheck/findMaterialByBatchNum`, data);
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default new Stocktakin();
