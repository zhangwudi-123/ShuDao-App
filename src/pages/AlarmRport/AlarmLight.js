import alarmImage from '~/asserts/Minescreenimag/an.png';
import light from '~/asserts/Minescreenimag/light.png';
import An from '~/asserts/Minescreenimag/Group 1125.png';
import React, { useState, useEffect } from 'react';
// import warehouseScreenService from '~/api/warehouseScreen';
// import { notification } from '@hvisions/h-ui';
import moment from 'moment';
const AlarmLight = props => {
  //console.log(props);
  const [isWarning, setIsWarning] = useState(false);
  const [isLook, setIsLook] = useState(true);
  // const [warning, setWarning] = useState(props.warning);
  const [warning, setWarning] = useState(1);
  const [datari, setDatari] = useState(null);
  const [datahour, setDatahour] = useState(null);
  const [alarmImage, setAlarmImage] = useState(An); // 初始为正常状态的图片
  // useEffect(() => {
  //   warehouseScreenService
  //     .gettopValue()
  //     .then(res => {
  //       setWarning(res.warning);

  //       // console.log(res);
  //       // setWeekvalue(res.electric)
  //       // setMonthvalue(res.electrictimemonth)
  //       // setYearvalue(res.electricyear);
  //       // setType(res.electrictime);
  //       // setWeek(res.consumptionList.coketime);
  //       // setMouth(res.electrictimemonth);
  //       // setYear(res.electrictimeyear);
  //       // setValue(res.electric);
  //       // // setElect(res.electric);
  //       // setWarning(res.warning);
  //     })
  //     .catch(err => {
  //       notification.warning({
  //         description: err.message
  //       });
  //     });
  // }, []);
  useEffect(() => {
    if (isWarning) {
      setAlarmImage(light);
    } else {
      setAlarmImage(An);
    }
  }, [isWarning]);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setWarning(1);
  //   }, 3000);
  // });
  // 模拟报警状态的变化
  useEffect(() => {
    console.log(warning, '111');
    let interval = null;
    if (warning != null) {
      interval = setInterval(() => {
        setIsWarning(prevState => !prevState); // 切换报警状态
        setIsLook(prevState => !prevState);
        // 切换报警状态
      }, 500); // 每秒切换一次
    }
    return () => clearInterval(interval); // 清除定时器
  }, [warning]);
  useEffect(() => {
    // //console.log(moment(new Date()).format('YYYY/MM/DD'));
    setDatari(moment(new Date()).format('YYYY/MM/DD'));
    setDatahour(moment(new Date()).format('HH:mm'));
  }, []);
  useEffect(() => {
    const timerID = setInterval(
      () => tick(),
      1000 // 更新频率为每秒
    );

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setDatahour(moment(new Date()).format('HH:mm'));
  };
  return <div>{isLook && <img src={alarmImage} alt="Alarm Light" />}</div>;
  //   return <div></div>;
};

export default AlarmLight;
