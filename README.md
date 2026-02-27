# Bera Host - PaaS Platform (Heroku Clone + Render Git URL Deployment)

## Overview
Bera Host is a fully functional Platform-as-a-Service (PaaS) that replicates Heroku's functionality and UI while incorporating Render-style public Git URL deployment. Deploy, manage, and scale applications with zero infrastructure management.

## Architecture

### Core Services
1. **API Server** - REST API for app management, authentication, WebSocket real-time updates
2. **Git Server** - Git push deployments and public Git URL cloning
3. **Build System** - Cloud Native Buildpacks (CNB) integration with real-time build logs
4. **Dyno Manager** - Container lifecycle management with health checks
5. **Routing Mesh** - Load balancing across healthy dynos
6. **Logging System** - Real-time log aggregation and streaming via WebSockets
7. **Metrics System** - Time-series metrics collection and exposure
8. **Release Manager** - Release versioning, tracking, and instant rollback

## Tech Stack
- **Runtime**: Node.js/Express (API), Python (services)
- **Database**: PostgreSQL (metadata), Redis (caching/queues)
- **Logging**: Elasticsearch + Vector
- **Metrics**: Prometheus
- **Container**: Docker/containerd, runc
- **Real-time**: WebSockets (Socket.io)
- **Message Queue**: Redis Streams
- **Git**: libgit2/native git

## Getting Started

### Prerequisites
- Docker & Docker Compose
- Node.js 18+
- PostgreSQL 14+
- Redis 7+
- Elasticsearch 7.9+

### Development Setup
```bash
git clone https://github.com/kingvon-ke/cloud-host.git
cd cloud-host
docker-compose up -d
npm install
npm run dev
```

### API Documentation
- Base URL: http://localhost:3000/api/v1
- WebSocket: ws://localhost:3000/ws
- See /docs for OpenAPI specification

## Features
✓ Git push deployment (git remote add bera...)
✓ GitHub integration with auto-deploy
✓ Public Git URL deployment (https://github.com/user/repo.git)
✓ Dyno scaling and management
✓ Real-time logs and metrics
✓ Config vars (environment variables)
✓ Release management and rollback
✓ Add-ons (PostgreSQL, Redis)
✓ Custom domains and SSL/TLS
✓ Private Spaces (internal networking)
✓ WebSocket real-time updates