# For English version, please click [here](https://github.com/JaneLee0324/custom-changelog-angular/blob/main/README_ENG.md).

# 背景
在npm包的开发中，如果能够根据提交信息自动化生成CHANGELOG会是一件很方便的事；同时有利于通过这种自动化操作来规范提交信息的书写和习惯。

[conventional-changelog](https://www.npmjs.com/package/conventional-changelog) 已经实现了上述的这个期望，通过运行其指定的命令就能自动根据已有的提交信息生成CHANGELOG，形如：
```
1.0.0(2021-03-01)
Bug Fixes
 · commit message1(commit message1 short hash)
 · commit message2(commit message2 short hash)
 · commit message3(commit message3 short hash)

Features
 · commit message4(commit message4 short hash)
 · commit message5(commit message5 short hash)
 · commit message6(commit message6 short hash)
```

# 本包用途
`conventional-changelog` 内置了集中预设集（angular / atom / ember / eslint / express / jquery / jshint），都是按照上述的模式生成CHANGELOG，因此CHANGELOG中大致只包含：版本、时间、Bug/Feature等提交类型下的每条提交的信息与hash。
假如希望在CHANGELOG中生成提交人姓名、邮箱等额外的内容，预设集是做不到——因此，本项目就是为了解决生成这些额外的内容的。本项目是在 `conventional-changelog-angular` 预设集的基础进行的满足自定义内容的开发的。

# 使用示例

# 使用说明

# License

# 联系

# 贡献者/鸣谢