---
layout: post
title: "让子弹飞一会儿"
date: 2021-04-05 08:00:00 +0800
categories: essay
---

![](/images/2021/20210405.jpg)

(图片来源于网络)

从3/13比特币突破6万刀，3/16第一次回撤到54000附近，拉升，无法突破6万，然后3/25更大的回撤，回到5万，然后再次反弹，6万仍然久攻不克，只好继续横盘微跌。三月攻势已经在6万的位置停滞了20多天了，6万的位置就仿佛铜墙铁壁一般，怎么都无法攻破。如果说2月底第一次破5万刀我们说中场已来之时（参考2/21文章《牛市已进入中场》[链接]），很多人还不太感受得到什么叫中场的话，那么从那一刻的5万刀至今，时间上已经横跨了3个月份，却仍未能站稳6万刀，这份磨人，和牛市前半场几天功夫就涨1万刀的气势如虹比起来，就简直是要把很多人的耐心给磨没掉了。这种折磨人的磨磨唧唧，腻腻歪歪的感觉，就是中场。

前两天的《自限性和反身性》[链接]一文收到了很多有价值的反馈和探讨。有善于思考的朋友说，以太坊的gas消耗是gas price * gas used (< gas limit)limit，如果以太坊扩容了能够容纳更多的交易量，那么gas price就会下来，这样gas消耗就降低了。因此以太坊的高gas好像不是自限性问题，而是扩容问题。其实比特币2015-2017年遇到的扩容问题也是类似，比特币的价格博弈模型price * vbytes也是第一高价的竞价机制，当突然有大量用户的大量交易需要打包，而区块尺寸有限时，用户要么只能被迫提高出价，要么只能等待和祈祷。比特币的价格博弈模型就是针对交易尺寸和区块大小的，所以最朴素的直觉就是，直接扩大一下区块尺寸，甚至扩大到无限大，不就解决问题了吗？当年所谓的“大区块派”正是抱定这样的一种意识形态与当时的比特币核心开发组，也就是所谓的core，展开了激烈的政治斗争。谈判、撕逼、背叛、污蔑、谩骂、诋毁，人类几千年政治斗争史不乏斗争手段。比特币是幸运的，core取得了胜利。“大区块派”对比特币进行了硬分叉，就是今天的bch。

那么说自限性，比特币自限性几乎没有，而以太坊则很显著，所指的并非是区块打包的竞价模型，而是其本身的价值主张与其价值及其表现形式价格之间的矛盾性。用康德的话说，就是其价值之中的二律背反，也就是价值反对价值。比特币的价值主张是电子黄金、价值存储，其价值并不由其交易频繁度决定，而由其囤币者数量和共识度决定。比特币的价值首先取决于人们想要它，而不是人们想放弃它。也因此，主张比特币应当从支付端切入的观点是完全错误的，这意味着试图让人们更想放弃这个货币。所以，比特币的价值不需要通过大量的交易量来实现。比特币的价值提升也就不需要依赖于交易量。价值提升因表现为价格升高而会抑制交易量，但这不会抑制价值的提升。

反观以太坊，其价值主张是其实用性、实用价值，全球计算机，智能合约平台，去中心化金融和数字资产的载体，那么其价值必须通过生态的大量繁荣来实现。而其生态的大量繁荣，将带来价值的大大提升，并表现为价格的升高，而由于以太坊本身是生态繁荣的燃料（gas），其价格的升高又会抑制对以太坊的使用，从而抑制生态的繁荣，从而表现为价值对价值的反对和自我限制。这是在容量作为控制变量保持相同的情况下进行比较而言的。如果扩容，并不会改变这个内在逻辑的矛盾性。在新的容量水平下，高价格仍然会相比低价格更能抑制生态繁荣。

今天我们继续温习「比特币原理」音频课（“刘教链”公众号菜单可以找到目录和收听入口）第八章“网络同步有延时 账本尺寸不随意”的第3小节“为什么区块不能过大”。（温习笔记08-3）

比特币一个区块的物理尺寸被限定在了1MB，这个尺寸十几年都没有改过。一方面是因为修改它需要对比特币进行硬分叉，另一方面，更重要的是，区块尺寸太大会大大降低比特币网络的安全性，损害其去中心化的特质。中本聪当初设计时对于ecdsa和rsa签名的尺寸大小都“斤斤计较”、“锱铢必较”，没道理他对区块尺寸就是随意设计的。10分钟才出一个块，一个块才1MB，为什么要这么慢、这么小？就是因为中本聪充分考虑了当今全球互联网络的性能和距离，十分钟和1MB能够足够让区块传播到世界各地了。这样才可以确保无论身在何方的比特币节点，都能及时收到最新的区块数据，并充分达成共识后，再开始出下一个区块。

如果出块间隔时间太短，或者区块尺寸太大（导致传播太慢），一个区块还没有广播开来，另一个新区块就又生成了，这就会导致大量的分叉链出现，大大降低比特币网络的安全性。比如以太坊，为了实现其作为区块链计算平台支撑Dapp快速响应的体验，必须缩短出块间隔，提高出块速度和确认速度。它把出块间隔缩短到了15秒钟，显然，大量的分叉就会爆棚，以太坊就不得不设计了所谓“叔块”，兜住这些分叉块，避免算力浪费，不能用于保护网络，降低安全性。为了更好的支持智能合约编程，以太坊被迫放弃了比特币的神来之笔UTXO模型，改为了有状态账本，从而导致了进一步的状态数据爆炸问题，现在已经成为困扰以太坊系统的严重问题之一。

市值第二加密资产、第一山寨币以太坊尚且如此，何况其他形形色色的各类新兴的区块链技术了。可以毫不客气的说，它们的所谓更先进只不过是一种宣传用语和主观意淫，岁月静好只是因为它们并没有真正经历过和比特币以及以太坊同样级别的考验而已。

(公众号：刘教链)
(免责声明：本文内容均不构成任何投资建议。加密货币为极高风险品种，有随时归零的风险，请谨慎参与，自我负责。)
