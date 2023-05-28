import React from 'react';
import { Card, CardContent, List, ListItem, Chip } from '@hvisions/f-ui';
import styles from './skeleton.scss';

const skeleton = ({ num = 6, type = 1 }) => {
  switch (+type) {
    case 1:
      return Array(num).fill(num).map((_, index) => (
        <Card key={index} className="skeleton-text skeleton-effect-blink" >
          <CardContent>  
            <List mediaList noHairlinesBetween style={{ height: 130 }}>
              <ListItem
                className={styles.listItemTitle}
                title="aaaaaaaaa"
                subtitle="aaaaaaaaaaaaaaaa"
                after={
                  <>
                    <Chip text="aaaa" />
                    <Chip text="aaaa" />
                  </>
                }
              >
              </ListItem>
              <ListItem title="aaaaaaaaa" after="aaaaaaaaaaaaaaaa" className={styles.listItem} />
              <ListItem title="aaaaaaaaa" after="aaaaaaaaaaaaaaaa" className={styles.listItem} />
            </List>
          </CardContent>
        </Card>
      ));
    case 2:
      return Array(num).fill(num).map((_, index) => (
        <Card key={index} className="skeleton-text skeleton-effect-blink" >
          <CardContent className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.cardItemLeft}>
              <div className="skeleton-block" style={{ marginLeft: 10, width: '30vw', height: '80%' }}></div>
              </div>
              <div className={styles.cardItemRight}>
                <div className={styles.rightItem}>
                  <span style={{ fontWeight: 600 }}>aaaaaaaa</span>
                </div>
                <div className={styles.rightItem}>
                  <span>
                    aaaaaaaaaaaaaa
                  </span>
                </div>
                <div className={styles.rightItem}>
                  <div className={styles.itemInItem}>
                    <span>aaaaaaaa</span>
                  </div>
                  <div className={styles.itemInItem}>
                    <span>aaaaaaaaaaaaaa</span>
                  </div>
                </div>
                <div className={styles.rightItem}>
                  <div className={styles.itemInItem}>
                    <span>aaaaaaa</span>
                  </div>
                  <div className={styles.itemInItem}>
                    <span>aaaaaaaaaaaaaaaa</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ));
    case 3:
      return Array(num).fill(num).map((_, index) => (
        <Card key={index} className="skeleton-text skeleton-effect-blink" >
          <CardContent>  
            <List mediaList noHairlinesBetween style={{ height: 160 }}>
              <ListItem
                className={styles.listItemTitle}
                title="aaaaaaaaa"
                subtitle="aaaaaaaaaaaaaaaa"
                after={
                  <>
                    <Chip text="aaaa" />
                  </>
                }
              >
              </ListItem>
              <ListItem title="aaaaaaaaa" after="aaaaaaaaaaaaaaaa" className={styles.listItem} />
              <ListItem title="aaaaaaaaa" after="aaaaaaaaaaaaaaaa" className={styles.listItem} />
              <ListItem title="aaaaaaaaa" after="aaaaaaaaaaaaaaaa" className={styles.listItem} />
            </List>
          </CardContent>
        </Card>
      ));
    case 4:
      return Array(num).fill(num).map((_, index) => (
        <Card key={index} className="skeleton-text skeleton-effect-blink" >
          <CardContent>  
            <List mediaList noHairlinesBetween style={{ height: 130 }}>
              <ListItem
                className={styles.listItemTitle}
                title="aaaaaaaaa"
                subtitle="aaaaaaaaaaaaaaaa"
                after={
                  <>
                    <input className="skeleton-block" style={{ height: 18, width: 18 }} />
                  </>
                }
              >
              </ListItem>
              <ListItem title="aaaaaaaaa" after="aaaaaaaaaaaaaaaa" className={styles.listItem} />
              <ListItem title="aaaaaaaaa" after="aaaaaaaaaaaaaaaa" className={styles.listItem} />
            </List>
          </CardContent>
        </Card>
      ));
    default:
      return Array(num).fill(num).map((_, index) => (
        <Card key={index} className="skeleton-text skeleton-effect-blink" >
          <CardContent>  
            <List mediaList noHairlinesBetween style={{ height: 130 }}>
              <ListItem
                className={styles.listItemTitle}
                title="aaaaaaaaa"
                subtitle="aaaaaaaaaaaaaaaa"
                after={
                  <>
                    <Chip className="skeleton-text" text="aaaa" />
                    <Chip className="skeleton-text" text="aaaa" />
                  </>
                }
              >
              </ListItem>
              <ListItem title="aaaaaaaaa" after="aaaaaaaaaaaaaaaa" className={styles.listItem} />
              <ListItem title="aaaaaaaaa" after="aaaaaaaaaaaaaaaa" className={styles.listItem} />
            </List>
          </CardContent>
        </Card>
    ));
  };
};

export default skeleton;