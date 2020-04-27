This is the notes collection of usage in Git( gitLab / gitHub )

## Table of Contents

1. [github 用户主页不显示 contributions 记录的问题](#fix_contributions_do_not_display)

## Contents

### github 用户主页不显示 contributions 记录的问题

#### 解决方法

<a name="fix_contributions_do_not_display" id="fix_contributions_do_not_display">

|  方法  |                 形式                 |                  说明                  |
| :----: | :----------------------------------: | :------------------------------------: |
| 方法 1 |  将当前 git 的 email 添加到 GitHub   |    [详细说明](#add_email_to_github)    |
| 方法 2 | 修改提交记录中的邮箱为已被关联的邮箱 | [详细说明](#correlate_email_to_github) |

#### 备注说明

<a name="fix_contributions_do_not_display" id="fix_contributions_do_not_display">

> 将当前 git 的 email 添加到 GitHub

```bash
# 获取当前的user信息
$ git config user.name
$ git config user.email
```

<a name="correlate_email_to_github" id="correlate_email_to_github">

> 修改提交记录中的邮箱为已被关联的邮箱

- clone 需要修改 commit 记录的 repo, 并进入目录

  ```bash
  #
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
  ' --tag-name-filter cat -- --branches --tags

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
