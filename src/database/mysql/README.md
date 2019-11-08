# This is the notes collection for [mysql](./README.md)

## 常见命令

| 操作                                                    |                                                      SQL                                                       | 备注 |
| :------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------: | :--: |
| 启动 mysql 数据库                                       |                                               `mysql -u root -p`                                               |  -   |
| 创建名为 wedding 的数据库                               |                                       `mysql> CREATE DATABASE wedding;`                                        |  -   |
| 列出全部数据库                                          |                                            `mysql> SHOW DATABASES;`                                            |  -   |
| 使修改生效                                              |                                           `musql> FLUSH PRIVILEGES;`                                           |  -   |
| 创建名为 wz 密码为 123123 的用户                        |           `mysql> GRANT USAGE ON *.* TO 'wz'@'localhost' IDENTIFIED BY '123123' WITH GRANT OPTION;`            |      |
| 给指定的 wedding 数据库添加名为 wz 密码为 123123 的用户 | `mysql> GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP ON wedding.* TO 'wz'@'localhost' IDENTIFIED BY '123123'` |  -   |
| 进入 wedding 数据库                                     |                                             `mysql> use wedding;`                                              |  -   |
| 在进入 wedding 数据库下列出所有的表                     |                                              `mysql> SHOW TABLES`                                              |  -   |
