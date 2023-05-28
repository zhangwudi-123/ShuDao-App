import Framework7 from 'framework7/framework7.esm.bundle';
import moment from 'moment';
const successImg = require('./img/success.png');
const errorImg = require('./img/error.png');

/**
* 先简单的判断一下吧, 写的不严谨。
*/

export const notification = (title, msg) => {

  const renderImg = () => {
    const keyWord = ['异常', '失败', '注意'];
    if(keyWord.findIndex(item => title.includes(item)) !== -1) {
      return errorImg;
    }
    return successImg;
  }

  return Framework7.instance.notification.create({
    icon: `<img src='${renderImg()}' alt="img" style="width: 20px" />`,
    title: title,
    text: msg,
    titleRightText: moment().format('HH:mm:ss'),
    closeTimeout: 3000
  });
};
