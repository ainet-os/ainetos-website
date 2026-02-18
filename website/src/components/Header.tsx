import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import cx from 'classnames';
import React from 'react';

import Command from './Command';
import styles from './Header.module.scss';
import Logo from './Logo';

const Header = (): React.ReactElement => {
  return (
    <div className={styles.header}>
      <div className={styles['header--wrap']}>
        <Logo />
        <div className={styles['header--mt-2']}>
          <h1 className={styles['header--title']}>AinetOS</h1>
          <p className={styles['header--subtitle']}>
            <Translate>用开源OS连接云、边、端三侧算力，让AI运行无处不在</Translate>
          </p>
          <iframe
            src={
              'https://ghbtns.com/github-btn.html?user=ainetos&repo=ainetos&type=star&count=true&size=large'
            }
            frameBorder="0"
            scrolling="0"
            width="160px"
            height="30px"
            style={{ marginTop: '8px' }}
          />
          <div className={styles['header--links']}>
            <Link to={useBaseUrl('/projects')} className={cx('link-secondary', 'secondarySpecialButton')}>
              <Translate>探索项目</Translate>
            </Link>
            <Link to={useBaseUrl('/docs/intro')} className="link-primary">
              <Translate>快速开始</Translate>
            </Link>
            <Link
              to={useBaseUrl('/community')}
              className={cx('link-secondary', 'specialButton')}
            >
              <Translate>加入社区</Translate>
            </Link>
          </div>
        </div>
        <div className={styles['header--m-2']}>
          <Command
            command="git clone https://github.com/ainetos/infinite-os.git"
            alt={translate({ message: 'Git command to clone InfiniteOS' })}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
