# 安装指南

本指南将帮助您安装和配置 ai.net实验室的核心项目。

## InfiniteOS 安装

InfiniteOS 是面向云、边、端三侧的统一操作系统，一套系统适用于云端、边缘与端侧。镜像按**硬件架构**区分（如 x86、ARM），请根据您的目标设备选择对应架构的镜像。

### 系统要求（参考）

- **x86 / x86_64**：建议 2 核及以上、4GB 内存、20GB 存储（具体视场景而定）
- **ARM / aarch64**：建议 1 核及以上、2GB 内存、10GB 存储（具体视场景而定）

### 安装步骤

1. 在 [InfiniteOS Releases](https://github.com/ainet-os/InfiniteOS/releases) 中选择与您硬件架构匹配的镜像（如 `infiniteos-x86_64.iso` 或 `infiniteos-aarch64.iso`）。

2. 下载镜像并创建安装介质：

```bash
# 示例：x86_64
wget https://github.com/ainet-os/InfiniteOS/releases/latest/download/infiniteos-x86_64.iso
```

3. 使用工具（如 `dd` 或 Rufus）将 ISO 写入 USB 或刻录为光盘，按安装向导完成安装。

## InfiniteUno 安装

InfiniteUno 提供三个版本：**InfiniteUno CE（社区版）**、**InfiniteUno SaaS（SaaS 版）**、**InfiniteUno EE（企业版）**。以下为社区版 CE 的自建安装方式；SaaS 版与 EE 版请参见官网或商务咨询。

### InfiniteUno CE（社区版）

#### 系统要求

- 已安装 InfiniteOS 或兼容的 Linux 环境
- Docker 与 Docker Compose
- 网络连接

#### 安装步骤

1. 克隆仓库

```bash
git clone https://github.com/ainet-os/InfiniteUno-CE.git
cd infinite-uno-ce
```

2. 配置环境

```bash
cp .env.example .env
# 编辑 .env 文件，配置相关参数
```

3. 启动服务

```bash
docker-compose up -d
```

4. 验证安装

```bash
docker-compose ps
```

## 下一步

安装完成后，请查看 [快速开始指南](/docs/current/quick-start) 了解如何使用。
