# 快速开始

本指南将帮助您快速上手使用 AinetOS 社区的核心项目。

## InfiniteOS 快速开始

### 首次启动

1. 启动系统后，使用默认账户登录
2. 运行系统更新

```bash
sudo apt update && sudo apt upgrade -y
```

3. 配置网络

```bash
sudo nmtui
```

### 基本操作

#### 查看系统信息

```bash
infinite-os info
```

#### 管理服务

```bash
# 查看服务状态
sudo systemctl status infinite-os

# 启动服务
sudo systemctl start infinite-os

# 停止服务
sudo systemctl stop infinite-os
```

## InfiniteUno CE 快速开始

### 启动服务

```bash
cd infinite-uno-ce
docker-compose up -d
```

### 访问 Web UI

打开浏览器访问 `http://localhost:8080`，使用默认账户登录。

### 注册节点

#### 注册云端节点

```bash
infinite-uno register \
  --type cloud \
  --name cloud-node-1 \
  --endpoint https://cloud.example.com \
  --token YOUR_TOKEN
```

#### 注册边缘节点

```bash
infinite-uno register \
  --type edge \
  --name edge-node-1 \
  --endpoint https://edge.example.com \
  --token YOUR_TOKEN
```

### 部署应用

#### 部署 AI 推理服务

```bash
infinite-uno deploy \
  --name ai-inference \
  --image ai-model:latest \
  --replicas 3 \
  --strategy edge-first \
  --resources cpu=2,memory=4Gi
```

## 下一步

- 阅读 [InfiniteOS 文档](/docs/infiniteos/overview)
- 阅读 [InfiniteUno 文档](/docs/infiniteuno/overview)
- 查看 [开发指南](/docs/development/environment)






