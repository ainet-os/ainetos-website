# 安装指南

本指南将帮助您安装和配置 AinetOS 社区的核心项目。

## InfiniteOS 安装

### InfiniteCloudOS

InfiniteCloudOS 是面向云端的操作系统，适用于大规模云计算场景。

#### 系统要求

- CPU: 4 核或以上
- 内存: 8GB 或以上
- 存储: 50GB 或以上
- 网络: 千兆以太网

#### 安装步骤

1. 下载安装镜像

```bash
wget https://github.com/ainetos/infinite-cloud-os/releases/latest/download/infinite-cloud-os.iso
```

2. 创建安装介质并安装

使用工具（如 `dd` 或 `Rufus`）将 ISO 镜像写入 USB 驱动器或 DVD，然后按照安装向导完成安装。

### InfiniteEdgeOS

InfiniteEdgeOS 是面向边缘的操作系统，适用于边缘计算场景。

#### 系统要求

- CPU: 2 核或以上（ARM 或 x86）
- 内存: 4GB 或以上
- 存储: 20GB 或以上

### InfiniteEndOS

InfiniteEndOS 是面向端侧的操作系统，适用于各种端设备。

#### 系统要求

- CPU: 1 核或以上（ARM 或 x86）
- 内存: 2GB 或以上
- 存储: 10GB 或以上

## InfiniteUno CE 安装

InfiniteUno CE 是云边端算力协同平台的社区版。

### 系统要求

- 已安装 InfiniteOS（任一版本）
- Docker 和 Docker Compose
- 网络连接

### 安装步骤

1. 克隆仓库

```bash
git clone https://github.com/ainetos/infinite-uno-ce.git
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

安装完成后，请查看 [快速开始指南](/docs/quick-start) 了解如何使用。






