## 什么是 docker
docker 是一种容器技术
- 运用效果：当同一段代码，在不同的电脑上运行时，运行的结果可能会不同，因为可能电脑的环境不同，当使用同一个容器去运行时，可制造一个相同的环境
- 将其与虚拟机比较：
  容器技术：进程级别（容器其实就相当于一个进程，是隔离开的），硬盘使用一般位 MB，启动为秒级，性能接近原生，系统支持量：单机支持上千个容器
  虚拟机：操作系统级别，硬盘使用一般为 GB，启动为分钟级，性能较弱，系统支持量：一般为几十个

## image 和 container(父与子)
- image 镜像
  运行后产生多个 container 容器，可以 将 image 理解为模板，后续可以产生的 Container 都会继承它，也可以将 image 看作一张系统安装光盘，Container 是它安装出来的系统，一张光盘产生的系统(Container)，可能环境、配置都不一样

## 镜像（dockerhub 中有提供）
镜像就是一个容器的模板，如果需要一个模板去运行一个容器
镜像之间可以相互依赖
- 注册好 docker 账号之后，控制台执行 $docker login 登录
- 使用 通过在控制台中执行 $docker run xxxxx(这里为镜像名，比如hello-world、ubuntu)，如果本地没有该镜像，就会自动从远程下载，下载好之后，在通过 docker run xxxx 去运行
- 进入该镜像 $ docker run -it ubuntu
- 进入后 可以通过 $ ls 去查看镜像的目录，进入 cd /etc , 查看一些
- 退出 $exit
- 执行 $docker container ls -a 查看当前运行的容器（或者使用 docker ps(查看当前运行的容器)，docker ps -a (查看所有容器)）
- $ docker images 查看镜像
- $ docker stop/start xxx(接容器的 id 后者 name) 可以运行或者停止某一个容器

- $ docker rm xxx(接 id) 移除容器，不使用的就可以移除，避免占空间，也有命令可进行批量删除，可以把退出的容器删除掉（自行搜索容器命令 docker container command，以及镜像命令 docker images command）
- $ docker run --name  xxxx(指定一个名字) -d(使其在后天运行) redis(镜像名称), 若没有下载，等下载好之后 在 通过 $ docker run -it redis 去运行该容器
- $ docker run -it redis bash 可进入该容器

## vscode 打开 docker 可以看到 容器 和 镜像情况

## 通过 alias xxx(替代命令) = "xxxxxxxxx(真实命令)"，为了简化操作可以将 命令 通过 替代 进行简化

## 连接容器
- $ docker run -p 6378(映射的端口):6379(容器的端口，不知道可以先普通运行一下去查看原本在哪个端口) --name some-redis -d redis 执行该命令将 容器的端口 映射到其他一个空闲的端口，并将容器运行起来
- docker ps -a 可以查看到 容器的信息 ports 端口 就暴露映射到了 0.0.0.0:6378 的一个端口
- 再通过执行 redis-cli(redis 工具，例如 mongo镜像 该命令就为 mongo) -h localhost -p 6378 进行连接，连接好便可访问该容器并使用，
类似可连接ngnix直接访问 localhost:6378 就可搭起一个 ngnix 服务

## 通过容器去连接另一个容器
- 老旧的方法 --link：（不推荐）
  $ docker run --it --link some-redis:redis(指定一个别名) --rm redis redis-cli -h redis(使用指定好的别名)
  这样就可以到该端口下的这个容器
- 使用 --network：（更新的，推荐）
- $ docker redis --bash, 进入该容器，$ env 访问环境变量

## docker 使用场景
1. 简化配置。
  所有的配置和中间件、软件的安装都是通过镜像去完成的。
  例如，可以快速的通过镜像去起一个 mysql(数据库) 、 redis(缓存系统)服务，不需要去一个一个下载安装配置这些软件。
2. 代码流水线管理(Code Pipeline)
  可进行持续的自动部署 集成(CI/CD)
3. 提高开发效率
4. 隔离应用
  比如 一台正常机器上 只能起一个 mysql 的服务，但是通过容器的隔离作用，可以配置并同时启动不同配置的 mysql 镜像
5. 整合服务器
  将公共的一些服务器整合，打包成一个容器，以满足生产的需求
6. 调试能力
  打点检查机制
  发布版本时，应用不小心崩了，但是在生产环境去修改会存在风险。有镜像之后，可以把这个的环境下的内容配置都复制到本地进行调试。线上库出了问题，可以快速的回退到上一个版本。
7. 多租户环境
  给每一个用户分配一个 容器，底层基于镜像
8. 快速部署

## CI/CD 与 DevOps 概念
- DevOps(Development & Oprations):
  代码 -提交--> 远程仓库 --> CI pipeline(git --> Jenkins --> Docker镜像) --> CD pipeline(部署不同的环境 版本 对应不同的用户)

  远程仓库 -- webhook 通知 --> CIserver(可进行镜像服务，Docker镜像模板用于集成，以及 Compose测试部署) --> CDserver(可进行配置管理) --> 拉取不同的镜像到容器服务，对应到不同的环境(测试环境、预发环境、生产环境)

- 各个步骤对应的框架和工具
  Sourse Code Control源代码管理(git gitlab github) --> Build & Test Automation打包构建、测试自动化(Jenkins GitLab docker maven selenium) --> Release Automation发布自动化(JFrogArtifactory docker Nexus) --> 部署到对应的不同层级，以及产品化(OpenStack / Microsoft Azure / Amazon AWS / 云(阿里云服务，腾讯云服务...))

## partainer.io 工具
使 docker 管理更加方便

