---
layout: post
title: "比特币共识机制依赖同步性假设吗？"
date: 2023-05-16 08:00:00 +0800
categories: essay
---

![](/images/ordinal-1835811752116542.png)
原创：刘教链

* * *

近日刘教链公众号连发两文《论比特币和以太坊的“宕机”》、《为什么中本聪不给比特币设计最终性？》，阐述了比特币共识机制的出块间隔时间是概率的、非确定性的，因此比特币的共识也是没有显式最终性，是非确定性的、概率的，只不过这个概率随着区块链的延长而迅速逼近于1。

很多教学和科普类文章会把比特币所用的PoW（工作量证明）共识机制和其他传统共识算法比如PBFT（实用拜占庭容错）放在一起对比。其中常见的一个错误，就是认为比特币PoW共识机制要求对网络做出同步性假设。那么，什么是网络同步性假设呢？

区块链系统作为一个分布式系统，由多个节点计算机通过网络连接起来所组成。由于去中心化的要求，连接彼此的网络必须是互联网，而不能是专线。从根本上讲，互联网是一个异步网络。TCP/IP协议并不能保证互联网数据包绝不延迟或丢失。

从发出数据包到对端收到数据包，如果无法保证在一个时间上限之内必定到达，就称之为异步的（asynchronous）；否则，称之为同步的（synchronous）。每位读者从自身使用互联网的体验来直观感受，也能够轻易猜到，互联网是一个异步网络。

连接品质无法给出确定性的保障，这样的互联网给设计能够在广域网上分布式工作的共识机制带来了巨大的困难和挑战。可以说，从1978到2008的30年时间里，全世界的计算机科学家和分布式系统专家都没能真正攻克这一难题。直到2008年中本聪提出了比特币的构想。

如果严格来讲，其实比特币并不依赖于网络同步性假设。不过这个表述蛮具有迷惑性的。此前研究这一问题的人们，口中所说的“同步”“异步”看起来是在说网络的事儿，如果能颠倒一下思维，就会发现其实是在说时间的事儿。我们改变不了网络状况，但我们可以改变时间本身。

我们禁不住要问了，中本聪是怎么改变时间的呢？答案就是，他为比特币重新定义了时间。区块链就是计时器（钟表），PoW就是发条，出块就是tick（滴答），区块高度就是时间刻度，区块链延伸就是时间的方向。

节点抄报这个时间，全网扩散，PoW计算和生成的困难性又确保了节点们不能轻易推翻这个计时，逆转时间的方向，或者走向歧途。

要偷袭比特币的出块，需要袭击者暗中计算分叉区块，并掌握足够强大的算力。这需要巨大的初始投资成本以及电力消耗成本等高昂的综合成本，使得冒险偷袭变得在经济上不可行。这样一来，PoW就保护了这个计时器的安全、稳定地运行。

有了这样一个内生的时钟，不依赖于外部世界墙上钟表（wall clock），使得比特币系统可以消除对于网络同步性——本质上是节点间外部时钟同步性的要求和假设。也就是说，比特币系统不在乎节点自行报告的时间是什么。它只关心PoW对不对。当然，实际的比特币源代码中，要求节点报告的区块时间戳在一个“适当的”范围之内，而这个范围相当宽泛：最晚不得晚于过去11个区块时间戳的中位数，最早不得比本地时间超前2小时以上。（《上帝掷骰子：比特币史话》第21话“时间扭曲攻击” https://leanpub.com/history-of-bitcoin ）

如果有人非要把参考实现里面的这个限制视为对外部时钟同步性的要求，那么这个同步性要求也不是大家所熟知的区块平均间隔时间——10分钟，而是从大约负一小时到正两小时，(-1h, +2h)。没错，我们允许外部时间差为负数时间，也就是允许出现时间穿越！

在现实的比特币区块链账本上，确实出现过这样的时间穿越现象！在《上帝掷骰子：比特币史话》（https://leanpub.com/history-of-bitcoin ）第22话“耗散结构”中，就介绍了这样一个真实的例子：（见下图）

20230516-01.png
图：比特币链上的时间穿越现象

正是因为比特币设计上诸多逆向思维和突破专业常识的做法，导致学界在很长一段时间内都对比特币的工作原理感到困惑，并否认中本聪共识是一种拜占庭容错算法。

生命体大多具有内生的时钟。我们每个人，经常会体验到有时候时间过得好慢呀，有时候时间过得怎么这么快，就是因为我们体内的时钟比外部世界的墙上时钟走得快了或者慢了。

发明一个内生的计时器，摆脱对外部时钟的依赖，也正是中本聪解题思路的重要基础。因此，在比特币白皮书第3小节，中本聪写道，“我们提出的解决方案从一个时间戳服务器开始”。（《史话》附录B 比特币白皮书刘教链译本）

比特币巧妙利用PoW实现了一个内生的时钟，从而实现了自同步。因此，比特币并不依赖于外部时钟同步性假设，也就不依赖于同步网络假定。只有如此，比特币才能真正做到彻底和完全地去中心化。


延伸阅读：Preethi Kasireddy写了一篇很好的关于分布式共识机制的科普文章 https://www.preethikasireddy.com/post/lets-take-a-crack-at-understanding-distributed-consensus

* * *

(公众号：刘教链。知识星球：公众号回复“星球”)
(免责声明：本文内容均不构成任何投资建议。加密货币为极高风险品种，有随时归零的风险，请谨慎参与，自我负责。)
