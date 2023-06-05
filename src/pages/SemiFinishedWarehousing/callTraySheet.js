import React, { useEffect, useRef, useState } from 'react';
import { BlockTitle, ListInput, List, Icon, Button } from '@hvisions/f-ui';
import { attributeOne, attributeTwo, dockingPoints, sortPositions } from '~/enum/enum';
import styles from './style.scss';

const CallTraySheet = ({
    f7router,
    sortPosition,
    setSortPosition,
    dockingPoint,
    setDockingPoint,
    callTraySave,
    pickTrayOpen,
    trayNumber
}) => {
    return (
        <>
            <BlockTitle>{pickTrayOpen?"托盘下架":"空托呼叫"}</BlockTitle>
            <List strongIos dividersIos insetIos style={{ padding: '0 16px' }}>
                {pickTrayOpen&&<h2>
                    托盘号  :   {trayNumber}
                </h2>}
                <ListInput
                    label="分拣位置"
                    type="select"
                    placeholder="请输入分拣位置"
                    required
                    validate
                    onChange={(e) => {
                        setSortPosition(e.target.value)
                    }}
                    value={sortPosition}
                >
                    <Icon icon="demo-list-icon" slot="media" />
                    {sortPositions.map((value, index) => (
                        <option value={value.value} key={value.id}>
                            {value.name}
                        </option>
                    ))}
                </ListInput>
                <ListInput
                    label="接驳点"
                    type="select"
                    placeholder="请输入接驳点"
                    required
                    validate
                    onChange={(e) => {
                        setDockingPoint(e.target.value)
                    }}
                    value={dockingPoint}
                >
                    <Icon icon="demo-list-icon" slot="media" />
                    {dockingPoints.map((value, index) => (
                        <option value={value.value} key={value.id}>
                            {value.name}
                        </option>
                    ))}
                </ListInput>
                <Button className={styles['save-btn']} fill round onClick={callTraySave}>
                    保存
                </Button>
            </List>
        </>
    )
}

export default CallTraySheet;