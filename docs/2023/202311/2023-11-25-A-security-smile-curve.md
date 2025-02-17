# 区块链安全的“微笑曲线”

最近一个叫做blast的协议迅速爆红，短短几天锁仓接连突破数亿美刀大关。业内开展了一轮针对其安全性的讨论。

教链在11.23内参《blast存在中心化风险》以及11.24内参《牛市的黎明静悄悄》中，对于其中被质疑的风险点以及项目方的辩解，正反两方的观点，都作了一些介绍。

把思维上升一层，到理论层面，我们会发现所谓的区块链安全问题，似乎存在着某些悖论之处。

举个例子，blast采用的是可升级合约。质疑方认为，项目方只要走一下多签就可以任意升级合约代码，从而任意支配用户锁仓的资产。最坏的情况，就是业内所谓的rug pull，即卷款跑路。其中多签的几个匿名地址，blast也承认就是几个工程师，而不是身份公开的权威人物，所以可以认为是很容易合谋的。

但是项目方回应称，可升级合约恰恰是为了安全。在过去的无数惨痛案例中，甚至可以追溯到早年导致以太坊分裂的The DAO事件，就是因为不可升级的合约代码被发现有bug，所有人只能眼看着黑客偷走合约中锁定的资产而束手无策。

无中心控制的智能合约，在链上自主运行，忠实地执行着业务逻辑，不受任何人的干预。这是一种完美的状态。比如像Uniswap的交易合约，就是这样的无控制状态（注：除了fee switch —— 不过，关于治理控制和治理攻击，又是另外一个很大的话题，我不打算在本文再展开详述了）。

所以，对于blast而言，其控制模型是：（用右箭头 -> 表示控制）

项目方 -> 多签人 -> 合约 -> 用户资产

这种模型，说实话，在今天的web3世界里，是极其常见的。本质上，这就是中心化控制，虽然用的是去中心化的区块链技术。

从USDT、USDC这样的稳定币，到Arbitrum、Optimism等各种L2的跨链桥，乃至于大多数公链的节点，追本溯源，其实都是由项目方中心化控制的。

而有趣的是，如果你问他们为什么要实施中心化控制，他们大概无一例外会回答你说，为了一旦出现意外情况，能够快速处理，也就是说，为了安全。

潜台词就是，保持对系统的控制，关键时刻能够人为干预，是安全的；“失控”的系统，万一发生状况无法人为干预，是不安全的。

一旦掌握权力，就难以自愿放弃权力，骨子里其实就是这种对于安全的恐惧。

而悖论偏偏在于，权力本身就是不安全的。独掌权力的人，对其他所有人都是一种不安全。这反过来就会使得独掌权力的人也身陷不安全之中。

项目方固然可以使用手中掌握的控制权对抗可能的bug和黑客，但是，这种超级权力也意味着项目方可以卷款跑路（比如rug pull的无数土狗），或者出于自信或追逐利益而挪用用户资产（比如FTX），或者隐形盗窃（比如偷偷增发，稀释用户资产价值），等等。

去中心化所希望消除的，恰恰就是这种滥用中心化控制权的技术可能性。

回到中本聪所说的，使用对密码学（cryptography）来代替对人的信任（trust）。

比特币系统所追求的目标之一，正是信任的最小化。即，不需要相信任何人，你就可以知道系统的正确性 —— 通过验证密码学证据的正确性。

于是我们就会发现，对于一个系统，在保持较高程度的中心化程度时，如果控制者越可靠，安全性越高；在实现了较高程度的去中心化后，如果没有缺陷，那么可以获得更高的安全性 —— 因为，去中心化把中心化控制者腐败、失误或死亡的风险也给消除了。但是，从中心化开始，向前走一步，安全性不会上升，反而会下降，因为系统失去了人的控制，而其自身又可能出现各种莫测的问题。

这就有了下面教链画的这个区块链安全的“微笑曲线”：

![](/images/2023/20231125-A01.png)

在微笑曲线的左右两端，都可能获得较高程度的安全。在左边，需要确保掌握权力的控制者可靠。在右边，需要确保自动运行的代码可靠。

几乎所有的项目都会从左边起步。而它们在迈向右边的过程中，却极难可以克服中间的“死亡之谷”。这就导致，绝大多数项目，要么实际上是中心化的，但是宣传上号称去中心化，挂羊头卖狗肉，能骗一个是一个；要么就是终其生命周期，也没有完成去中心化；要么就是在尝试去中心化的过程中，遇到了灾难性的安全问题，中道崩殂。真正能够取得真经的项目，不能说完全没有，只能说是几乎为零。

这就是为什么站在最右边的、高度去中心化的比特币如此独特、如此遥遥领先的一个原因。
