import { Service } from '@hvisions/toolkit';
const appName = '/activiti';
class Task extends Service {
  async getHistoryProcessInstance(data) {
    try {
      return await this.post(`${appName}/history/getHistoryProcessInstance`, data);
    } catch (error) {
      throw new Error(error);
    }
  }

  async getHistoryByEquipmentId(data) {
    try {
      return await this.post('/equipment-inspect/inspectStatistical/getHistoryByEquipmentId', data);
    } catch (error) {
      throw new Error(error);
    }
  }

  async getWeeklyTaskRadio(keys) {
    try {
      const data = {};
      data.inspect = await this.post(
        `${appName}/history/getWeeklyTaskRadio?processDefinitionKey=${keys.inspect}`
      );
      data.librication = await this.post(
        `${appName}/history/getWeeklyTaskRadio?processDefinitionKey=${keys.librication}`
      );
      data.maintain = await this.post(
        `${appName}/history/getWeeklyTaskRadio?processDefinitionKey=${keys.maintain}`
      );
      data.service = await this.post(
        `${appName}/history/getWeeklyTaskRadio?processDefinitionKey=${keys.service}`
      );
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getWeeklyTaskRadioByUserId(assigneeId, processDefinitionKeys) {
    try {
      const data = await this.post(`${appName}/history/getWeeklyTaskRadiosByUser`, {
        assigneeId,
        processDefinitionKeys
      });
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getTaskWithVariables(data) {
    return await this.post(`${appName}/task/getTaskWithVariables`, data);
  }

  async getHistoric(data) {
    return await this.post(`${appName}/history/getHistoricTaskInstance`, data);
  }

  async getPriorityName() {
    return await this.get(`${appName}/task/getPriorityName`);
  }

  async getUsers(userName) {
    return await this.post(`/auth/user/getUserPageByName?userName=${userName}`, {
      pageSize: 10000000,
      page: 0
    });
  }

  async setAssignee(data) {
    return await this.put(`${appName}/task/setAssignee`, data);
  }

  async startProcessInstance(data) {
    return await this.post(`${appName}/runtime/startProcessInstance`, data);
  }

  async startTask(data) {
    return await this.put(`${appName}/task/startTask`, data);
  }

  async completeTask(data) {
    return await this.put(`${appName}/task/completeTask`, data);
  }

  async setVariables(data) {
    return await this.put(`${appName}/task/setVariables`, data);
  }
  // 领取任务
  async claimTask(data) {
    return await this.put(`${appName}/task/claim/${data.taskId}/${data.assignee}`);
  }

  getTaskStatusCount(data) {
    return this.post(`${appName}/task/getTaskStatusCount`, data);
  }

  getTaskCount(userId) {
    return this.get(`${appName}/task/getTaskCount?userId=${userId}`);
  }

}

export default new Task();
