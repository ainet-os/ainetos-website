import useBaseUrl from '@docusaurus/useBaseUrl';
import * as React from 'react';
import { FC } from 'react';

import styles from './Header.module.scss';

const Logo: FC = (): React.ReactElement => {
  return (
    <img
      className={styles['header--imageLogo']}
      src={useBaseUrl('/img/logo.svg')}
      alt="AinetOS Logo"
    />
  );
};

export default Logo;
