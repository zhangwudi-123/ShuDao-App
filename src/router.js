import Scan from '~/pages/Scan';

import WarehousinManage from '~/pages/WarehousinManage/Home';
import Stocktakin from '~/pages/WarehousinManage/Stocktakin';
import StocktakinDetail from '~/pages/WarehousinManage/Stocktakin/Details';
import AdjustStatus from '~/pages/WarehousinManage/Stocktakin/AdjustStatus';
import LocationSelect from '~/pages/WarehousinManage/Stocktakin/Location';
import Material from '~/pages/WarehousinManage/Stocktakin/Material';
import BatchDetail from '~/pages/WarehousinManage/Stocktakin/BatchDetail';
import PutInStorage from '~/pages/WarehousinManage/PutInStorageManagement/PutInStorage';
import InStorageOperate from '~/pages/WarehousinManage/PutInStorageManagement/InStorageDetail';
import BatchList from '~/pages/WarehousinManage/PutInStorageManagement/BatchList';
import OrderLocation from '~/pages/WarehousinManage/PutInStorageManagement/Location';
import ManualPutInStorage from '~/pages/WarehousinManage/ManualPutInStorage/PutInStorage';
import ManualInStorageOperate from '~/pages/WarehousinManage/ManualPutInStorage/InStorageDetail';
import ManualBatchList from '~/pages/WarehousinManage/ManualPutInStorage/BatchList';
import ManualOrderLocation from '~/pages/WarehousinManage/ManualPutInStorage/Location';
import ManualMaterial from '~/pages/WarehousinManage/ManualPutInStorage/Material';
import Supplier from '~/pages/WarehousinManage/ManualPutInStorage/Supplier';

import YWManualPutInStorage from '~/pages/WarehousinManage/ProductPutInStorage/PutInStorage';
import YWManualInStorageOperate from '~/pages/WarehousinManage/ProductPutInStorage/InStorageDetail';
import YWManualBatchList from '~/pages/WarehousinManage/ProductPutInStorage/BatchList';
import YWManualOrderLocation from '~/pages/WarehousinManage/ProductPutInStorage/Location';
import YWManualMaterial from '~/pages/WarehousinManage/ProductPutInStorage/Material';
import YWSupplier from '~/pages/WarehousinManage/ProductPutInStorage/Supplier';

import RetrievalManagerment from '~/pages/WarehousinManage/RetrievalManagerment/PutInStorage';
import RetrievalOperate from '~/pages/WarehousinManage/RetrievalManagerment/InStorageDetail';
import RetrievalMaterial from '~/pages/WarehousinManage/RetrievalManagerment/Material';
import RetrievalBatchList from '~/pages/WarehousinManage/RetrievalManagerment/BatchList';
import RetrievalLocation from '~/pages/WarehousinManage/RetrievalManagerment/Location';

import ProductRetrievalManagerment from '~/pages/WarehousinManage/ProductRetrieval/PutInStorage';
import ProductRetrievalOperate from '~/pages/WarehousinManage/ProductRetrieval/InStorageDetail';
import ProductRetrievalMaterial from '~/pages/WarehousinManage/ProductRetrieval/Material';
import ProductRetrievalBatchList from '~/pages/WarehousinManage/ProductRetrieval/BatchList';
import ProductRetrievalLocation from '~/pages/WarehousinManage/ProductRetrieval/Location';

import PreparationOrder from '~/pages/PreparationOrder';
import MaterialSearch from '~/pages/PreparationOrder/MaterialSearch';
import YWBatchScan from '~/pages/BatchScan';
import YWPackRecord from '~/pages/PackRecord';
import YWPackRecordDetail from './pages/PackRecord/Detail';


//备料位托盘管理
import MaterialPreparation from './pages/MaterialPreparation/index';

//接驳口托盘管理
import DockingPort from './pages/DockingPort/index';

//托盘管理
import PalletManagement from './pages/PalletManagement/index';

//空托盘入库
import EmptyPalletsWarehousing from './pages/EmptyPalletWarehousing/index';

//空托盘出库
import EmptyPalletDelivery from './pages/EmptyPalletDelivery/index';

//原材料入库收料单
import RawMaterialWarehousing from '~/pages/RawMaterialWarehousing/index';
import RawMaterialWarehousingManual from '~/pages/RawMaterialWarehousing/Manual';

//原材料出库订单管理
import RawMaterialDelivery from '~/pages/RawMaterialDelivery/index';

//半成品入库收料单
import SemiFinishedWarehousing from './pages/SemiFinishedWarehousing/index';

//半成品出库托盘拣选
import SemiFinishedDelivery from './pages/SemiFinishedDelivery/index';  

export default [

  {
    path: '/material-preparation',
    component: MaterialPreparation
  },
  {
    path: '/docking-port',
    component: DockingPort
  },
  {
    path: '/pallet-management',
    component: PalletManagement
  },
  {
    path: '/empty-pallets-warehousing',
    component: EmptyPalletsWarehousing
  },
  {
    path: '/empty-pallets-delivery',
    component: EmptyPalletDelivery
  },
  {
    path: '/raw-material-warehousing',
    component: RawMaterialWarehousing
  },
  {
    path: '/raw-material-warehousing-manual',
    component: RawMaterialWarehousingManual
  },
  {
    path: '/raw-material-delivery',
    component: RawMaterialDelivery
  },
  {
    path: '/semi-finished-warehousing',
    component: SemiFinishedWarehousing
  },
  {
    path: '/semi-finished-delivery',
    component: SemiFinishedDelivery
  },

  {
    path: '/scan',
    component: Scan
  },
  {
    path: '/wareManage',
    component: WarehousinManage //EquipmentManage //StocktakinDetail //WarehousinManage
  },
  {
    path: '/stocktakin',
    component: Stocktakin
  },
  {
    path: '/stocktakinDetail',
    component: StocktakinDetail
  },
  {
    path: '/adjustStatus',
    component: AdjustStatus
  },
  {
    path: '/location',
    component: LocationSelect
  },
  {
    path: '/material',
    component: Material
  },
  {
    path: '/batchDetail',
    component: BatchDetail
  },
  {
    path: '/putInStorage',
    component: PutInStorage
  },
  {
    path: '/inStorage-operate',
    component: InStorageOperate
  },
  {
    path: '/batch-list',
    component: BatchList
  },
  {
    path: '/order-location',
    component: OrderLocation
  },
  {
    path: '/manual-putInStorage',
    component: ManualPutInStorage
  },
  {
    path: '/manual-inStorage-operate',
    component: ManualInStorageOperate
  },
  {
    path: '/manual-batch-list',
    component: ManualBatchList
  },
  {
    path: '/manual-order-location',
    component: ManualOrderLocation
  },
  {
    path: '/manual-material',
    component: ManualMaterial
  },
  {
    path: '/supplier',
    component: Supplier
  },
  {
    path: '/retrieval-managerment',
    component: RetrievalManagerment
  },
  {
    path: '/retrieval-operate',
    component: RetrievalOperate
  },
  {
    path: '/retrieval-material',
    component: RetrievalMaterial
  },
  {
    path: '/retrieval-batch-list',
    component: RetrievalBatchList
  },
  {
    path: '/retrieval-location',
    component: RetrievalLocation
  },

  {
    path: '/yw-retrieval-managerment',
    component: ProductRetrievalManagerment
  },
  {
    path: '/yw-retrieval-operate',
    component: ProductRetrievalOperate
  },
  {
    path: '/yw-retrieval-material',
    component: ProductRetrievalMaterial
  },
  {
    path: '/yw-retrieval-batch-list',
    component: ProductRetrievalBatchList
  },
  {
    path: '/yw-retrieval-location',
    component: ProductRetrievalLocation
  },
  {
    path: '/yw-preparation-order',
    component: PreparationOrder
  },
  { path: '/yw-material-search', component: MaterialSearch },

  {
    path: '/yw-manual-putInStorage',
    component: YWManualPutInStorage
  },
  {
    path: '/yw-manual-inStorage-operate',
    component: YWManualInStorageOperate
  },
  {
    path: '/yw-manual-batch-list',
    component: YWManualBatchList
  },
  {
    path: '/yw-manual-order-location',
    component: YWManualOrderLocation
  },
  {
    path: '/yw-manual-material',
    component: YWManualMaterial
  },
  {
    path: '/yw-supplier',
    component: YWSupplier
  },
  {
    path: '/yw-batch-scan',
    component: YWBatchScan
  },
  {
    path: '/yw-pack-record',
    component: YWPackRecord
  },
  { path: '/yw-pack-record-detail', component: YWPackRecordDetail }
];
