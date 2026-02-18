import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';

export default function Projects(): React.ReactElement {
  return (
    <Layout
      title="项目"
      description="AinetOS 开源社区的核心项目介绍">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--12">
            <h1>AinetOS 核心项目</h1>
            <p className="margin-vert--lg">
              AinetOS 社区致力于构建云边端一体化算力与操作系统技术生态，
              以下是我们的核心开源项目。
            </p>
          </div>
        </div>

        <div className="row margin-vert--lg">
          <div className="col col--6">
            <div className="card" style={{ padding: '2rem', marginBottom: '1rem' }}>
              <h2>InfiniteOS</h2>
              <p>
                一套面向云边端一体化场景的操作系统系列，包括 InfiniteCloudOS、InfiniteEdgeOS 和 InfiniteEndOS。
              </p>
              <p>
                通过统一的架构设计，实现云、边、端三侧算力的无缝连接和协同工作。
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
                云边端算力协同平台的社区版（InfiniteUno CE），提供统一的算力管理、调度和协同能力。
              </p>
              <p>
                让 AI 应用在云、边、端之间自由流动，实现真正的无处不在的 AI 计算。
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






