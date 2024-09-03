import { Service } from '@hvisions/toolkit';
const appName = 'http://171.92.12.20:9000/LiService/cockpit';
class Minescreen extends Service {
  //能源耗量
  async energyConsumption(data) {
    try {
      return await this.get(`${appName}/energyConsumption?year=${data}`);
    } catch (error) {
      throw new Error(error);
    }
  }

  //执行成本
  async executionCost(data) {
    try {
      return await this.get(`${appName}/executionCost?year=${data}`);
    } catch (error) {
      throw new Error(error);
    }
  }

  //综合成本
  async findByYear(data) {
    try {
      return await this.get(`${appName}/findByYear?year=${data}`);
    } catch (error) {
      throw new Error(error);
    }
  }

  //主材耗量
  async mainConsumption(data) {
    try {
      return await this.get(`${appName}/mainConsumption?year=${data}`);
    } catch (error) {
      throw new Error(error);
    }
  }

  //金属平衡
  async metalBalance(data) {
    try {
      return await this.get(`${appName}/metalBalance?year=${data}`);
    } catch (error) {
      throw new Error(error);
    }
  }

  //营收/利润/成本等等
  async otherData(data) {
    try {
      return await this.get(`${appName}/otherData?year=${data}`);
    } catch (error) {
      throw new Error(error);
    }
  }

  //成品产量
  async output(data) {
    try {
      return await this.get(`${appName}/output?year=${data}`);
    } catch (error) {
      throw new Error(error);
    }
  }

  //成品销量
  async sales(data) {
    try {
      return await this.get(`${appName}/sales?year=${data}`);
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default new Minescreen();
