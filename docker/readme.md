## 什么是 docker
docker 是一种容器技术
- 运用效果：当同一段代码，在不同的电脑上运行时，运行的结果可能会不同，因为可能电脑的环境不同，当使用同一个容器去运行时，可制造一个相同的环境
- 将其与虚拟机比较：
  容器技术：进程级别（容器其实就相当于一个进程，是隔离开的），硬盘使用一般位 MB，启动为秒级，性能接近原生，系统支持量：单机支持上千个容器
  虚拟机：操作系统级别，硬盘使用一般为 GB，启动为分钟级，性能较弱，系统支持量：一般为几十个

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