# Nginx

- 启动 nginx

  ```bash
  $ ./nginx
  ```

- 启动 nginx(带配置文件)

  ```bash
  $ ./nginx -c nginx.conf
  ```

- 查看 nginx 进程

  ```bash
  $ ps -ef | grep nginx
  ```

  or

  ```bash
  $ cat nginx.pid
  ```

- 重新载入配置文件

  ```bash
  $ ./nginx -s reload
  ```

- 重启 nginx

  ```bash
  $ ./nginx -s reopen
  ```

- 停止 nginx

  ```bash
  $ ./nginx -s stop
  ```
