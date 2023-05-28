import Framework7 from 'framework7/framework7.esm.bundle';
import moment from 'moment';
export const navigateTo = (path = '/') => {
  Framework7.instance.view.main.router.navigate(path);
};
export const goBack = (path = '/') => {
  let backPath = path;
  if (path == '/wareManage') {
    const tempHistory = Framework7.instance.view.main.router.history;
    const homeIndex = tempHistory.indexOf('/');
    const equipmentManageIndex = tempHistory.indexOf('/wareManage');
    if (equipmentManageIndex >= homeIndex) {
      backPath = path;
    } else {
      backPath = '/';
    }
  }
  Framework7.instance.view.main.router.back(backPath, { force: true });
};

export const onToast = (text, cssClass, icon) => {
  Framework7.instance.view.main.router.app.toast
    .create({
      text,
      icon: icon || moment().format('hh:mm'),
      position: 'top',
      closeTimeout: 2000,
      cssClass: `${cssClass} ne-toast`
    })
    .open();
};
export const createDialog = (title, text, func) => {
  Framework7.instance.view.main.router.app.dialog
    .create({
      title: title,
      text: text,
      buttons: [
        {
          text: '取消'
        },
        {
          text: '确认',
          onClick: func
        }
      ]
    })
    .open();
};

export const createToolTips = (ele, text) => {
  Framework7.instance.view.main.router.app.tooltip.create({
    targetEl: ele,
    text,
    trigger: 'manual'
  });
};
