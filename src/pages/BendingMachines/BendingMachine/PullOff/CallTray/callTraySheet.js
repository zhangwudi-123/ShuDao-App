import React, { useEffect, useRef, useState } from 'react';
import { BlockTitle, ListInput, List, Icon, Button } from '@hvisions/f-ui';
import { attributeOne, attributeTwo, dockingPoints, sortPositions } from '~/enum/enum';
import styles from './style.scss';
import { onToast, createDialog } from '~/util/home';
import SemiFinishedDeliveryServices from '~/api/SemiFinishedDelivery';

const CallTraySheet = ({
    f7router,
    outSheetClosed,
    item,
    loadData,
    selectValue,
    searchValue,
    modifyData,
}) => {

    const dockingPoints = [
        { id: 1, name: 'J002', value: 'J002', },
        { id: 2, name: 'J003', value: 'J003', },
    ]

    const [readyMaterials, setReadyMaterials] = useState(modifyData.readyMaterials);
    const [dockingPoint, setDockingPoint] = useState('J003');

    const outSave = async() => {
        await SemiFinishedDeliveryServices.updatePrepareArea(dockingPoint, [item.id], readyMaterials)
          .then(res => {
            onToast('出库成功', styles.toastSuccess);
            // loadData(selectValue);
            loadData(searchValue);
            outSheetClosed()
          })
          .catch(err => {
            onToast(err.message, styles.toastError);
          })
      }

    return (
        <>
            <BlockTitle>出库</BlockTitle>
            <List strongIos dividersIos insetIos style={{ padding: '0 16px' }}>
                <ListInput
                    label="备料区"
                    type="text"
                    placeholder="请输入备料区"
                    required
                    validate
                    onChange={(e) => {
                        setReadyMaterials(e.target.value)
                    }}
                    value={readyMaterials}
                >
                   <Icon icon="demo-list-icon" slot="media" />
                </ListInput>
                <ListInput
                    label="接驳口"
                    type="select"
                    placeholder="请输入接驳口"
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
                <Button className={styles['save-btn']} fill round onClick={outSave}>
                    保存
                </Button>
            </List>
        </>
    )
}

export default CallTraySheet;