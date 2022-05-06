# Gerrit workflow

## Table of content

1. **_Clone_**
2. **_Add_**
3. **_Commit_**
4. **_Push_**
5. **_Review_**
6. **_Merge_**
7. **_Update_**

## Clone Repo

Use `git clone` command to clone your repository in any directory you want.

```shell
$ git clone "yourRepoUrl"
```

## Add

To stage your code changes, you can use `git add` command.

```shell
$ git add "yourChangedFile"
# e.g
# git add README.md
# Or
# git add .
```

## Commit

Commit your changes with `git commit` command.

```shell
$ git commit -m "commitInfo"
# e.g
# git commit -m [SAW-1342][SAW-1421] docs:[react-native-app] add README file
```

<details>
<summary>Commit Message Header</summary>

```
[<story>][<task>>] <type>(<scope>): <short summary>
                     │       │             │
                     │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
                     │       │
                     │       └─⫸ Commit Scope: TODO
                     │
                     └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|test|chore
```

The `<type>` and `<summary>` fields are mandatory, the `(<scope>)` field is optional.

##### Story

The story key in Jira and it should be surrounded with [].

##### Task

The task key in Jira and it should be surrounded with [].

##### Type

Must be one of the following:

- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci**: Changes to our CI configuration files and scripts (examples: CircleCi, SauceLabs)
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **test**: Adding missing tests or correcting existing tests
- **chore**: Updating grunt tasks etc; no production code change

##### Scope

The scope should be the name of the npm package affected.

##### Summary

Use the summary field to provide a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- no dot (.) at the end

</details>

<details>
<summary>Commit Message Body</summary>
Just as in the summary, use the imperative, present tense: "fix" not "fixed" nor "fixes".

Explain the motivation for the change in the commit message body. This commit message should explain _why_ you are making the change.

</details>

## Push

Push your changes to origin

```shell

$ git push origin HEAD:refs/for/your-branch
# e.g
# git push origin HEAD:refs/for/master
```

## Review

You can start review after pushing your changes.

## Merge

It will merge automatically when `review` passes

## Update

```shell
$ git pull
```

> Without special instructions, all the following commands will be executed in the project root directory.
