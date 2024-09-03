import { Service } from '@hvisions/toolkit';

const appName = '/shudaogroup_ydong/Largescreen';
const appName2 = '/shudaogroup_ydong/SyncToGroup';
class Minescreen extends Service {
  //营收饼状图
  async getRevenuePieChart(data) {
    return await this.get(`${appName}/getRevenuePieChart/${data}`);
  }
  //营收柱状图
  async getRevenueHistogram(data) {
    return await this.get(`${appName}/getRevenueHistogram/${data}`);
  }
  //利润饼状图
  async getProfitPieChart(data) {
    return await this.get(`${appName}/getProfitPieChart/${data}`);
  }
  //利润柱状图
  async getProfitHistogram(data) {
    return await this.get(`${appName}/getProfitHistogram/${data}`);
  }
  //完成情况柱状图
  async getFinishHistogram(data) {
    return await this.get(`${appName}/getFinishHistogram/${data}`);
  }
  //市场行情柱状图
  async getProductPrice(data, name) {
    if (name == '磷矿28%') {
      return await this.get(`${appName}/getProductPriceNew/${data}/${name}25`);
    } else {
      return await this.get(`${appName}/getProductPriceNew/${data}/${name}`);
    }
  }
  //库存名字
  async getProductPriceName(data) {
    return await this.get(`${appName}/getProductPriceNameNew/${data}`);
  }
  //库存详情柱状图月
  async getInventoryDetails(data, comname) {
    return await this.get(`${appName}/getInventoryDetails/${data}/${comname}`);
  }
  //库存详情柱状图年
  async getInventoryDetailsByYear(data, comname) {
    return await this.get(`${appName}/getInventoryDetailsByYear/${data}/${comname}`);
  }
  //成本名字
  async getCostProportionName(data) {
    return await this.get(`${appName}/getCostMonthName/${data}`);
  }
  //成本行情柱状图
  async getCostProportion(data, name) {
    return await this.get(`${appName}/getCostMonth/${data}/${name}`);
  }
  //产量柱状图
  async getFinishHistogramYield(data) {
    return await this.get(`${appName}/getFinishHistogramYield/${data}`);
  }
  //市场行情黄林
  async getSalesUnitPriceJc(data, name) {
    return await this.get(`${appName}/getSalesUnitPriceJc/${data}/${name}`);
  }
  //同步库存详情
  async getInventoryDetails2() {
    try {
      return await this.get(`${appName2}/getInventoryDetails`);
    } catch (error) {
      throw new Error(error);
    }
  }
  //同步库存详情
  async getInventoryDetailsCcp() {
    try {
      return await this.get(`${appName2}/getInventoryDetailsCcp`);
    } catch (error) {
      throw new Error(error);
    }
  }
  //同步市场行情
  async getProductPriceHl() {
    try {
      return await this.get(`${appName2}/getProductPriceHl`);
    } catch (error) {
      throw new Error(error);
    }
  }
  //同步库存详情
  async getProductPriceJc() {
    try {
      return await this.get(`${appName2}/getProductPriceJc`);
    } catch (error) {
      throw new Error(error);
    }
  }
  //同步金川销售单价
  async getSalesUnitPriceJc2() {
    try {
      return await this.get(`${appName2}/getSalesUnitPriceJc`);
    } catch (error) {
      throw new Error(error);
    }
  }
  //   async updateList(data) {
  //     return await this.put(`${appName}`, {
  //       ...data,
  //       direction: false,
  //       sort: true,
  //       sortCol: 'id'
  //     });
  //   }
  //   async addpower(data) {
  //     return await this.post(`${appName}`, {
  //       ...data,
  //       direction: false,
  //       sort: true,
  //       sortCol: 'id'
  //     });
  //   }

  //   async deletedata(id) {
  //     return await this.delete(`${appName}/deleted/${id}`);
  //   }

  //   async getselectMap(type){
  //     return await this.post(`${appName}/selectList/${type}`);
  //   }
}
export default new Minescreen();
