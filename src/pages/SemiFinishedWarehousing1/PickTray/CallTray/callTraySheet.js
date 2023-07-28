import React, { useEffect, useRef, useState } from 'react';
import { BlockTitle, ListInput, List, Icon, Button } from '@hvisions/f-ui';
import { attributeOne, attributeTwo, dockingPoints, sortPositions } from '~/enum/enum';
import styles from './style.scss';

const CallTraySheet = ({
    f7router,
    middle,
    setMiddle,
    toLocation,
    setToLocation,
    callTraySave,
    toLocations,
    middles,
}) => {
    return (
        <>
            <BlockTitle>托盘下架</BlockTitle>
            <List strongIos dividersIos insetIos style={{ padding: '0 16px' }}>
                <ListInput
                    label="中间点"
                    type="select"
                    placeholder="请选择中间点"
                    required
                    validate
                    onChange={(e) => {
                        setMiddle(e.target.value)
                    }}
                    value={middle}
                >
                    <Icon icon="demo-list-icon" slot="media" />
                    {middles.map((value, index) => (
                        <option value={value.value} key={value.id}>
                            {value.name}
                        </option>
                    ))}
                </ListInput>
                <ListInput
                    label="目的地"
                    type="select"
                    placeholder="请选择目的地"
                    required
                    validate
                    onChange={(e) => {
                        setToLocation(e.target.value)
                    }}
                    value={toLocation}
                >
                    <Icon icon="demo-list-icon" slot="media" />
                    {toLocations.map((value, index) => (
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