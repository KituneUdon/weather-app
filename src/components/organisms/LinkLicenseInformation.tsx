import { FC } from 'react';
import { Link } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const style = css({
  color: 'grey',
});

const LinkLicenseInformation: FC = () => (
  <Link css={style} to="/license">
    ライセンス情報
  </Link>
);

export default LinkLicenseInformation;
