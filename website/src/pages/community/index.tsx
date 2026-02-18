import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Community(): React.ReactElement {
  return (
    <Layout
      title="社区"
      description="加入 AinetOS 开源社区，共同推动云边端一体化技术发展">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--12">
            <h1>欢迎加入 AinetOS 社区</h1>
            <p className="margin-vert--lg">
              AinetOS 是一个开放、包容的开源社区，我们欢迎所有对云边端一体化技术感兴趣的朋友加入。
              无论您是开发者、研究者还是用户，都可以在这里找到自己的位置。
            </p>
          </div>
        </div>

        <div className="row margin-vert--lg">
          <div className="col col--4">
            <div className="card" style={{ padding: '1.5rem', height: '100%' }}>
              <h3>参与贡献</h3>
              <p>
                通过代码、文档、测试等方式为项目做出贡献，帮助社区成长。
              </p>
              <Link
                className="button button--primary"
                to="/community/contributing">
                贡献指南 →
              </Link>
            </div>
          </div>
          <div className="col col--4">
            <div className="card" style={{ padding: '1.5rem', height: '100%' }}>
              <h3>行为准则</h3>
              <p>
                了解我们的社区行为准则，共同维护一个友好、包容的社区环境。
              </p>
              <Link
                className="button button--primary"
                to="/community/code-of-conduct">
                查看准则 →
              </Link>
            </div>
          </div>
          <div className="col col--4">
            <div className="card" style={{ padding: '1.5rem', height: '100%' }}>
              <h3>关于我们</h3>
              <p>
                了解 AinetOS 社区的使命、愿景和价值观。
              </p>
              <Link
                className="button button--primary"
                to="/community/about">
                了解更多 →
              </Link>
            </div>
          </div>
        </div>

        <div className="row margin-vert--lg">
          <div className="col col--12">
            <h2>参与方式</h2>
            <div className="row" style={{ marginTop: '1rem' }}>
              <div className="col col--4">
                <h4>💻 代码贡献</h4>
                <p>提交 Pull Request，修复 Bug，添加新功能</p>
              </div>
              <div className="col col--4">
                <h4>📝 文档贡献</h4>
                <p>完善文档，翻译文档，编写教程</p>
              </div>
              <div className="col col--4">
                <h4>🐛 问题反馈</h4>
                <p>报告 Bug，提出改进建议</p>
              </div>
              <div className="col col--4">
                <h4>💬 社区讨论</h4>
                <p>参与讨论，回答问题，分享经验</p>
              </div>
              <div className="col col--4">
                <h4>📢 推广宣传</h4>
                <p>在社交媒体上分享，在会议上演讲</p>
              </div>
              <div className="col col--4">
                <h4>🎓 教育培训</h4>
                <p>组织培训，编写教程，指导新人</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row margin-vert--lg">
          <div className="col col--12">
            <h2>社区资源</h2>
            <ul>
              <li>
                <strong>GitHub</strong>: <a href="https://github.com/ainetos">https://github.com/ainetos</a>
              </li>
              <li>
                <strong>讨论区</strong>: <a href="https://github.com/ainetos/ainetos/discussions">GitHub Discussions</a>
              </li>
              <li>
                <strong>邮件列表</strong>: community@ainetos.org
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}






