import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import React from 'react';

import Divider from './Divider';
import styles from './WhatIsVerdaccio.module.scss';

const WhatIs = (): React.ReactElement => (
  <section className={styles.whatIs}>
    <h1 className={styles['whatIs--title']}>
      <Translate values={{ ainetos: <i>AinetOS</i> }}>{'什么是 {ainetos}？'}</Translate>
    </h1>
    <p className={styles['whatIs--p']}>
      <Translate>
        AinetOS 是一个面向云边端一体化算力与操作系统技术的开源社区。我们的核心理念是用InfiniteOS连接云、边、端三侧算力，让AI运行无处不在。
        AinetOS 社区致力于构建 InfiniteOS 操作系统系列和 InfiniteUno 算力协同平台，实现真正的云边端一体化计算。
      </Translate>
    </p>
    <Link to={useBaseUrl('/docs/intro')} className="link-primary">
      <Translate>深入了解 AinetOS</Translate>
    </Link>
    <Divider />
  </section>
);

export default WhatIs;
