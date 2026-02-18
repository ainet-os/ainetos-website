import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import React from 'react';

import FeatureCard from './FeatureCard';
import styles from './Features.module.scss';

const FEATURES = [
  {
    image: '/img/features/lock.svg',
    title: translate({ message: '云边端一体化' }),
    subtitle: translate({
      message:
        'InfiniteOS 系列操作系统覆盖云、边、端三侧场景，提供统一的算力管理和调度能力，实现云边端算力的无缝协同。',
    }),
  },
  {
    image: '/img/features/link.svg',
    title: translate({ message: 'AI 无处不在' }),
    subtitle: translate({
      message:
        '通过 InfiniteUno 云边端算力协同平台，让 AI 应用能够在云、边、端之间自由流动，实现真正的无处不在的 AI 计算。',
    }),
  },
  {
    image: '/img/features/box.svg',
    title: translate({ message: '统一架构设计' }),
    subtitle: translate({
      message:
        'InfiniteOS 采用统一的架构设计，确保云、边、端三侧操作系统的一致性，提供一致的 API 接口和应用可移植性。',
    }),
  },
  {
    image: '/img/features/override.svg',
    title: translate({ message: '开源开放' }),
    subtitle: translate({
      message:
        'AinetOS 社区秉承开源精神，所有项目代码完全开放，欢迎全球开发者共同参与，推动云边端一体化技术的发展。',
    }),
  },
];

const Features = (): React.ReactElement => {
  const { withBaseUrl } = useBaseUrlUtils();

  return (
    <section className={styles.features}>
      <div className={styles['features--wrap']}>
        {FEATURES.map(({ image, title, subtitle }) => (
          <FeatureCard key={title} image={withBaseUrl(image)} title={title} subtitle={subtitle} />
        ))}
      </div>
      <div className={styles.linkFeatures}>
        <Link to={withBaseUrl('/docs/intro')} className="link-primary">
          <Translate>了解更多特性</Translate>
        </Link>
      </div>
    </section>
  );
};

export default Features;
