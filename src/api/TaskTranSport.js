import { Service } from '@hvisions/toolkit';

const appName = '/warehouse-service';
//  库区转运  +  上下料  +   链条传动 
class TaskTransport extends Service {
  // 调整任务优先级
  async adjustPriority(id, priority) {
    try {
      return await this.put(`${appName}/tasktransport/adjustPriority?id=${id}&priority=${priority}`);
    } catch (error) {
      throw new Error(error);
    }
  }

  // 回退任务
  async backTask(id) {
    try {
      return await this.put(`${appName}/tasktransport/backTask?id=${id}`);
    } catch (error) {
      throw new Error(error);
    }
  }

  // 继续任务
  async continueTask(id) {
    try {
      return await this.put(`${appName}/tasktransport/continueTask?id=${id}`);
    } catch (error) {
      throw new Error(error);
    }
  }

  // 新增任务
  async createTaskview(data) {
    try {
      return await this.post(`${appName}/tasktransport/create`, data);
    } catch (error) {
      throw new Error(error);
    }
  }

  // 删除任务
  async deleteById(id) {
    try {
      return await this.delete(`${appName}/tasktransport/deleteById/${id}`);
    } catch (error) {
      throw new Error(error);
    }
  }

  // 查询
  async findTaskView(data) {
    try {
      return await this.post(`${appName}/tasktransport/findTaskView`, {
        ...data,
        direction: false,
        sort: true,
        sortCol: 'id'
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  // 完成任务
  async finishTask(id) {
    try {
      return await this.put(`${appName}/tasktransport/finishTask?id=${id}`);
    } catch (error) {
      throw new Error(error);
    }
  }

  // 暂停任务
  async suspendTask(id) {
    try {
      return await this.put(`${appName}/tasktransport/suspendTask?id=${id}`);
    } catch (error) {
      throw new Error(error);
    }
  }

}

export default new TaskTransport();
