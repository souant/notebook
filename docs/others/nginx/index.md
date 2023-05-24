# Nginx

nginx 程序由一个 master 进程来管理多个 worker 进程，一般情况下，worker 进程的数量与服务器上的 CPU 核心数相等

## 常用命令

```shell
Options:
  -?,-h         : this help
  -v            : show version and exit
  -V            : show version and configure options then exit
  -t            : test configuration and exit
  -T            : test configuration, dump it and exit
  -q            : suppress non-error messages during configuration testing
  -s signal     : send signal to a master process: stop, quit, reopen, reload
  -p prefix     : set prefix path (default: NONE)
  -c filename   : set configuration file (default: conf/nginx.conf)
  -g directives : set global directives out of configuration file
```

- `nginx -h`: 查看帮助
- `nginx -v`: 查看 nginx 的版本
- `nginx -V`: 查看版本和 nginx 的配置选项
- `nginx -t`: 测试配置文件的正确性
- `nginx -T`: 测试配置文件，并显示配置文件（这个命令可以快速查看配置文件）
- `nginx -q`: 测试配置文件，但是只显示错误信息
- `nginx -s`: 向主进程发送信号，下面**详细介绍**
- `nginx -p`: 设置前缀路径
- `nginx -c`: 设置配置文件
- `nginx -g`: 从配置文件中设置全局指令

## nginx -s

- `nginx -s stop` 立即停止 nginx 服务
- `nginx -s quit` 平滑停止 nginx 服务
- `nginx -s reopen` 重新打开日志文件，可以用来切割备份日志
- `nginx -s reload` 平滑重启服务，配置重载

## nginx -c

- `nginx -c nginx.conf` 用来加载指定`nginx.conf`配置文件，并启动

## 查看 nginx 服务

### linux

```shell
# ps命令
ps -ax | grep nginx
```

## nginx 日志

```shell
/access.log   # 访问日志
/error.log    # 错误日志
/nginx.pid    # Nginx 服务启动时 所有进程的 id号
```
