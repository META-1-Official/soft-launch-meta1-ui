Please work off the develop branch and make pull requests to that branch. The master branch will only be updated for new releases.

The META1 UI team is supported by this [worker proposal](https://www.meta.foundation/workers/2018-08-meta-ui). It provides the funds needed to pay the coordinator and the bounties and the META1 Foundation.

If you would like to get involved, we have a [Telegram chatroom](https://t.me/meta1exchange) where you can ask questions and get help.

- Project Manager: Magnus Anderson, @startail
- Issue and Funds Coordinator: Bill Butler, @billbutler
- Lead Developer: Sigve Kvalsvik, @sigvek


## 贡献

META1 UI团队被这一[工作提案](https://steemit.com/meta/@billbutler/translated-by-zhaomu-l)支持。它提供用来支付协调者，悬赏金和比特股基金的资金。

如果你想参与贡献，我们有一个[Telegram 聊天室](https://t.me/meta1exchange)，在这里你可以问问题并得到帮助。


## Development process

- We encourage everyoe to participate in issue discussion, especially those that has [not yet been qualified as work](https://github.com/bitshares/bitshares-ui/issues?q=is%3Aopen+is%3Aissue) and [the `Need Discussion` issues](https://github.com/bitshares/bitshares-ui/issues?q=is%3Aissue+is%3Aopen+label%3A%22%5B2%5D+Needs+Discussion%22).
- New issues will be groomed by a project coordinator to set the issue goal and estimated **Quality Hours** of development time.
- After a clarified goal issues will be assigned to the [Active Developent milestone](https://github.com/bitshares/bitshares-ui/milestone/52).
- All non-assigned issues can be found on the the [Active Developent milestone](https://github.com/bitshares/bitshares-ui/milestone/52). or [by filtering the issues list](https://github.com/bitshares/bitshares-ui/issues?q=is%3Aopen+is%3Aissue+milestone%3A%22Active+Development%22+no%3Aassignee).
- Assigned issues will be assigned to a milestone, which will indicate the deadline for the issues.
- Milestones are numbered YYMMDD and indicates the expected delivery.
- Bugs are always worked before enhancements
- Developers should work each issue according to a numbered branch corresponding to the issue `git checkout -b 123`
- We pay **bounties** for issues that have been estimated. An estimated issue is prefixed with a number in brackets like this: `[2] An nasty bug`. In this example, the bug is valued at two hours ($125 per hour). If you fix this issue according to these guidelines and your PR is accepted, this will earn you $250 bitUSD. You must have a META1 wallet and a META1 account to receive payment.
- To claim an issue, simply leave a comment with your request to work on it.
- Bounty payment is **Quality Hours**, meaning an experienced developer could complete the task within the assigned hours. Inexperienced users may need more time, to learn the coding standards or practices used on the project, but still receive the same pay.
- To make sure no underpayment for development is made, it is important that if an issue would require more **Quality Hours** time, it should be stated clearly in the issue together with a reason and a new estimate, which also requires an approval.
- If an issue is already claimed (assigned), do not attempt to claim it. Issues claimed by outside developers will have no assigned dev, but have the developers name in brackets.
- Do not claim an issue if you will be unable to complete it by the date indicated on the Milestone name. If extra time is expected, clarify why in the claim. The new estimate will have to be confirmed by a project coordinator.
- If an issue misses the intended milestone completion, be sure to make a comment on your progress including the reason for the delay. The issue is pushed to the next milestone. Failing to comment or complete the issue will result in release of the assigned issue and could result in no bounty pay.
- It's the developers responsibility to read comments on submitted PR to make sure merging is possible and issue is closed, failure to do so may result in no bounty pay.

## Coding style guideline

### Guidelines on UI Related Tasks
Please review our Wiki on [Guidelines for Issues with UI related work](https://github.com/bitshares/bitshares-ui/wiki/Guidelines-for-Issues-with-UI-related-work)

### General Guidelines
Our style guideline is based on 'Airbnb JavaScript Style Guide' (https://github.com/airbnb/javascript), with few exceptions:

- Strings are double quoted
- Additional trailing comma (in arrays and objects declaration) is optional
- 4 spaces tabs
- Spaces inside curly braces are optional

We strongly encourage to use _eslint_ to make sure the code adhere to our style guidelines.

## 代码风格
我们的代码指南基于[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript),不过有一些例外：

 - 字符串需要被双引
 - 额外的尾随逗号（在定义数组和对象时）是随意的
 - 四个空格的缩进
 - 在花括号里的空格是随意的

我们强烈鼓励用  _eslint_ 确保代码依附于我们的代码风格指南
