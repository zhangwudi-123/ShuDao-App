import React from 'react';
import { Card, CardContent, Button } from '@hvisions/f-ui';
import styles from './CardInfo.scss';
import { isEmpty } from 'lodash';
const CardInfo = ({
  f7router,
  title,
  tag = {},
  items = [],
  onHandleClick = () => {},
  className = '',
  buttons
}) => {
  return (
    <div className={`${styles['card-box']} ${className}`}>
      <Card>
        <ul className={styles['card-ul']}>
          <div onClick={onHandleClick}>
            <li style={{ marginBottom: '8px' }}>
              <span className={'ne-card-title'}>{title}</span>

              {!isEmpty(tag) && (
                <span
                  className={'ne-card-tag'}
                  style={{
                    backgroundColor: tag.backgroundColor,
                    float: 'right',
                    color: tag.textColor
                  }}
                >
                  {tag.text}
                </span>
              )}
            </li>
            {items.map((item, index) => (
              <li key={index}>
                <span className={styles['li-next-title']}>{item.title}</span>
                <span className={styles['li-next-content']}>{item.content}</span>
              </li>
            ))}
          </div>
          {!isEmpty(buttons) && <li className={styles['li-button']}>{buttons}</li>}
        </ul>
      </Card>
    </div>
  );
};

export default CardInfo;
