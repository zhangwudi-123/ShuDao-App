import React from 'react';
import classnames from 'classnames';
import styles from './CheckTag.scss';


const isSelected = (
  multiple,
  value,
  currentValue
) => {
  if (multiple) {
    // 多选， 判断 value 中是否包含当前值
    if (typeof value !== 'object') {
      value = [value];
    }
    return value.includes(currentValue);
  }
  // 单选
  return value === currentValue;
};

const CheckTag = ({ multiple = false, options = [], value, onChange }) => {
  const handleSelect = (selectedValue) => () => {
    if (multiple) {
      // 多选， 判断 value 中是否包含当前值，进行添加或删除操作
      if (typeof value !== 'object') {
        value = [value];
      }
      let newValue = value || [];
      newValue = newValue.includes(selectedValue)
        ? newValue.filter(v => v !== selectedValue)
        : newValue.concat(selectedValue);
      return onChange(newValue);
    }

    // 单选
    onChange(selectedValue);
  };
  return (
    <div className={styles.checkTagGroup}>
      {options.map((opt, idx) => (
        <div
          key={idx}
          className={classnames(styles.tag, {
            [styles.active]: isSelected(multiple, value, opt.value)
          })}
          onClick={handleSelect(opt.value)}
        >
          {opt.label}
        </div>
      ))}
      {options.length % 3 === 2 && <div className={classnames(styles.tag, styles.empty)} />}
    </div>
  );
};

export default CheckTag;
