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

  // 完成任务
  async finishRBG(taskCode) {
    try {
      return await this.put(`${appName}/tasktransport/finishRBG?taskCode=${taskCode}`);
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

  async startTask(id) {
    try {
      return await this.put(`${appName}/tasktransport/startTask?id=${id}`);
    } catch (error) {
      throw new Error(error);
    }
  }

  //J002扫码
  async j002Scan(taskCode) {
    try {
      return await this.put(`${appName}/tasktransport/j002Scan?taskCode=${taskCode}`);
    } catch (error) {
      throw new Error(error);
    }
  }

  //J003扫码
  async j003Scan() {
    try {
      return await this.put(`${appName}/tasktransport/j003Scan`);
    } catch (error) {
      throw new Error(error);
    }
  }

  //J002强制通过
  async manualJ002(taskCode) {
    try {
      return await this.put(`${appName}/tasktransport/manualJ002?taskCode=${taskCode}`);
    } catch (error) {
      throw new Error(error);
    }
  }

  //J003强制通过
  async manualJ003() {
    try {
      return await this.put(`${appName}/tasktransport/manualJ003`);
    } catch (error) {
      throw new Error(error);
    }
  }

  // 完成任务
  async finishLnl(taskCode) {
    try {
      return await this.put(`${appName}/tasktransport/finishLnl?taskCode=${taskCode}`);
    } catch (error) {
      throw new Error(error);
    }
  }


  // 手动执行ST2
  async manualSt2(taskCode) {
    try {
      return await this.put(`${appName}/task-management/manualSt2?taskCode=${taskCode}`);
    } catch (error) {
      throw new Error(error);
    }
  }

  // ST3/4手动执行
  async manualStart(id) {
    try {
      return await this.put(`${appName}/task-management/manualStart?id=${id}`);
    } catch (error) {
      throw new Error(error);
    }
  }

  // RBG手动执行
  async manualRbg(id) {
    try {
      return await this.put(`${appName}/task-management/manualRbg?id=${id}`);
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default new TaskTransport();
