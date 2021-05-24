/*
HeartRailsGeoAPIの出典を記載するためのコンポーネント
文章を記載するだけなのでtemplatesを用意すると管理が複雑になる
そのため、このコンポーネントはpage + atoms(typography)という特殊な構成で作成する
*/
import { FC } from 'react';
import Typography from '../atoms/Typography';

const LicenseInformation: FC = () => (
  <>
    <Typography>HeartRailsGeoAPI</Typography>
    <Typography>
      出典:「位置参照情報」(国土交通省)の加工情報・「HeartRails
      GeoAPI」(HeartRails Inc.)
    </Typography>
  </>
);

export default LicenseInformation;
