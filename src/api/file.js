import { Service } from '@hvisions/toolkit';
import { generate } from 'shortid';

class File extends Service {
  getFileResult(fileId) {
    return this.get(`/file-management/file/downloadFileResult/${fileId}`);
  }

  async uploadFile(file) {
    const filename = generate();
    const data = new FormData();
    data.append('file', file, `${filename}.jpg`);
    return await this.post(`/file-management/file/uploadFile/${filename}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }

  async getVideoUrl(fileId) {
    return await this.get(`/file-management/uploader/getHlsFilePath/${fileId}`);
  }
}

export default new File();
