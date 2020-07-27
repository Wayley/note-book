# Git

1. [Git-Bash 使用](#git_bash)
2. [Commands For Git](#git_command)
3. [Gitlab 命令行指引](#gitlab_command)
4. [Git SSH](#git_ssh)
5. [Git 常见问题](#git_faq)

## Git-Bash 使用

<a name="git_bash" id="git_bash">

- 安装 git-bash
- git bash here 工具 生成公、密钥

  > (<font color=red>执行命令中会让输入两次密码，可直接回车;如果输入了密码，那么以后每次 git 操作都会弹出输入密码</font>)

  ```shell
  # 默认会在.ssh目录下生成公钥id_rsa、密钥id_rsa.pub
  $ ssh-keygen -t rsa -C hb_wangzheng@163.com
  or
  # 自定义生成的目录和公钥id_rsa、密钥id_rsa.pub
  $ ssh-keygen -t rsa -C hb_wangzheng@163.com -f ~/.ssh/wz-rsa
  ```

- 将公钥添加到 github 的<font color=red> SSH and GPG keys 中 </font>
- 同步 tortoiseGit 的 SSH(<font color=red> setting -> Network -> SSH (choose ~/Git\usr\bin\ssh.exe) </font> )

## Commands For Git

<a name="git_command" id="git_command">

| 命 令                                                                                                                                          |       其他形式       |              说明              |
| :--------------------------------------------------------------------------------------------------------------------------------------------- | :------------------: | :----------------------------: |
| git branch dev                                                                                                                                 |                      |          创建本地分支          |
| git add xx 命令可以将 xx 文件添加到暂存区，如果有很多改动可以通过 git add -A. <font size=1>[(备注)](#remark1)</font>来一次添加所有改变的文件。 |                      |                                |
| git push origin dev                                                                                                                            |                      |          创建远程分支          |
| git branch -b dev_wz origin/dev                                                                                                                |                      | 创建与远程关联的本地分支并切换 |
| git push origin --delete dev                                                                                                                   |                      |      删除远程的 dev 分支       |
| git remote prune origin                                                                                                                        |                      |  删除远程仓库不存在的本地分支  |
| git remote -v                                                                                                                                  | git remote --verbose |          查看远程仓库          |
| git remote add [shortname][url]                                                                                                                |                      |          添加远程仓库          |
| git remote add origin git@github.com:xxx/xx.git                                                                                                |                      |        本地参考关联远程        |
| git remote rm [remotename]                                                                                                                     |                      |          删除远程仓库          |
| git remote origin set-url [url]                                                                                                                |                      |        修改远程仓库地址        |

<a name="remark1" id="remark1">

> 注意

1. -A. 选项后面还有一个句点。
2. git add -A 表示添加所有内容，
3. git add . 表示添加新文件和编辑过的文件不包括删除的文件;
4. git add -u 表示添加编辑或者删除的文件，不包括新添加的文件

## Gitlab 命令行指引

<a name="gitlab_command" id="gitlab_command">

- git 全局配置

```shell
$ git config --global user.name 'wz'
$ git config --global user.email 'hb_wangzheng@163.com'
```

- 创建新的仓库

```shell
$ git init
$ git add README.md
$ git commit -m 'your remarks of this commit, such as `add README file` or `first init commit` '
$ git remote add origin git@github.com:xxx/xx.git
$ git push -u origin master
```

- 推送现有的文件夹

```shell
$ cd existed_folder
$ git init
$ git remote add origin git@github.com:xxx/xx.git
$ git add .
$ git commit -m 'your remarks of this commit, such as `add README file` or `first init commit` '
$ git push -u origin master
```

- 推送现有的仓库

```shell
$ cd existed_folder
$ git remote rename <old-remote-name> <new-remote-name>
$ git remote add origin git@github.com:xxx/xx.git
$ git push -u origin --all
$ git push -u origin --tags
```

## Git SSH

<a name="git_ssh" id="git_ssh">

> 解决 The authenticity of host '192.168.xxx.xxx (192.168.xxx.xxx)' can't be established.的问题

```shell
$ ssh  -o StrictHostKeyChecking=no  192.168.xxx.xxx　
```

## Git 常见问题

<a name="git_faq" id="git_faq">

### 1.github 用户主页不显示 contributions 记录的问题

|  方法  |                 形式                 |                  说明                  |
| :----: | :----------------------------------: | :------------------------------------: |
| 方法 1 |  将当前 git 的 email 添加到 GitHub   |    [详细说明](#add_email_to_github)    |
| 方法 2 | 修改提交记录中的邮箱为已被关联的邮箱 | [详细说明](#correlate_email_to_github) |

#### 将当前 git 的 email 添加到 GitHub

<a name="add_email_to_github" id="add_email_to_github">

```bash
# 获取当前的user信息
$ git config user.name
$ git config user.email
```

#### 修改提交记录中的邮箱为已被关联的邮箱

<a name="correlate_email_to_github" id="correlate_email_to_github">

- clone 需要修改 commit 记录的 repo, 并进入目录

  ```bash
  $ git clone --bare git@github.com:xxXUser/xxxRepo.git && cd xxxRepo.git
  ```

- 将以下内容的脚本文件(script.sh)添加到 xxxRepo.git 目录下

  ```bash
  #!/bin/sh
  git filter-branch --env-filter
  OLD_EMAIL="OLD_EMAIL" # 旧的Email
  CORRECT_NAME="CORRECT_NAME" # 新的用户名
  CORRECT_EMAIL="CORRECT_EMAIL"# 新的Email
  if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
  then
      export GIT_COMMITTER_NAME="$CORRECT_NAME"
      export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
  fi
  if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
  then
      export GIT_AUTHOR_NAME="$CORRECT_NAME"
      export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
  fi
  ' --tag-name-filter cat -- --branches --tags'

  ```

- 执行上面 script.sh 文件

  > window 下找到 sh.exe(一般在 git 的安装目录下的 bin 目录，eg:C:\Program Files\Git\bin)

  ```bash
  $ ./script.sh
  ```

- 把正确的提交历史 push 到 GitHub 上
  ```bash
  $ git push --force --tags origin 'refs/heads/*'
  ```
