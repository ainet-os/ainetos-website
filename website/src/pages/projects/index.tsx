import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';

export default function Projects(): React.ReactElement {
  return (
    <Layout
      title="项目"
      description="ai.net实验室的核心项目介绍">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--12">
            <h1>AinetOS 核心项目</h1>
            <p className="margin-vert--lg">
              ai.net实验室致力于构建云边端一体化算力与操作系统技术生态，
              以下是我们的核心开源项目。
            </p>
          </div>
        </div>

        <div className="row margin-vert--lg">
          <div className="col col--6">
            <div className="card" style={{ padding: '2rem', marginBottom: '1rem' }}>
              <h2>InfiniteOS</h2>
              <p>
                面向云、边、端三侧的统一操作系统，一套系统适用多侧场景，镜像按硬件架构（如 x86、ARM）提供不同版本。
              </p>
              <p>
                通过统一架构实现云、边、端算力的无缝连接与协同。
              </p>
              <Link
                className="button button--primary"
                to="/projects/infiniteos">
                了解更多 →
              </Link>
            </div>
          </div>
          <div className="col col--6">
            <div className="card" style={{ padding: '2rem', marginBottom: '1rem' }}>
              <h2>InfiniteUno</h2>
              <p>
                云边端算力协同平台，提供 CE（社区版）、SaaS（SaaS 版）、EE（企业版）三个版本，满足不同场景与规模需求。
              </p>
              <p>
                让 AI 应用在云、边、端之间自由流动，实现无处不在的 AI 计算。
              </p>
              <Link
                className="button button--primary"
                to="/projects/infiniteuno">
                了解更多 →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}






