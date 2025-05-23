---
layout: post
title: "【刘教链比特币原理】9-2 简化支付验证"
date: 2023-01-21 08:00:00 +0800
categories: essay
---

付费合集文章前言：无

---

本节课我们开始学习第九章“轻量账本压缩百倍 快速支付不到十秒”的第二小节“简化支付验证”。

## 本章目录：

### 第九章 轻量账本压缩百倍 快速支付不到十秒
第1节 区块头和默克尔树
#### 第2节 简化支付验证
第3节 快速支付

## 本节音频：

【音频】

## 学习笔记：

SPV，全称Simplified Payment Verification，简化支付验证。中本聪在比特币白皮书中对SPV技术进行了介绍。通过使用SPV技术，可以把比特币交易组织成默克尔树（merkle tree），然后把默克尔根（merkle root）写入区块头，仅用区块头组成的区块链以及默克尔树就可以完成对于交易存在性的证明，成为默克尔证明（merkle proof）。比如，2048笔交易的数据量为512KB，但是默克尔路径只用11个哈希值即可，仅需352字节。这样尺寸上大大压缩之后，就可以很轻松地把区块链放进轻量级设备中。

比特币的设计要求允许客户端随时离线，当客户端再次上线之后，它需要获得在其离线期间发生了什么事情的证明。中本聪说过，有两种方法让它知道这件事。第一就是展示全账本，证明交易可以一直回溯到该笔比特币的铸币源头，coinbase交易；第二就是展示一段回溯到足够深的区块的历史，证明交易被埋在足够深的区块链高度之下，如果有一半以上的节点（算力）验证了这项交易，那么旧的交易就可以丢弃了。

用户只需要保留区块头，每天大概12K字节，就可以足以用来检查双花。只有需要挖矿产币的人才需要运行全节点。刚开始所有人都会运行节点，但是未来网络带宽需求增加时，就会只有专业设备运行节点。中本聪还测算了一下，如果比特币要达到VISA信用卡的用量，那么每天需要传输的数据量大概是2部DVD，他觉得，一二十年之后，在网络上传输2部DVD应该不是一件很困难的事情。

中本聪是一个实用主义者。他并没有认为比特币永远需要保持每个个人电脑都运行全节点。也就是说，在去中心化这个问题上，中本聪并不是一个原教旨主义者。充斥这个行业的各种迷思，或者向左，激进的认为所有节点都需要是普通电脑，进而攻击比特币算力集中破坏了去中心化，或者向右，认为中本聪的设计不足以支撑高性能的操作，并提出各种新的共识机制，典型的如建立超级节点结构来专营记账服务，从而极大的削弱了去中心化。

事实证明，中本聪的设计是一种巧妙的、有效的均衡，无论是左倾还是右倾，都是一种傲慢无知而危险的错误。

## 课外资料：

以下是第九章“轻量账本压缩百倍 快速支付不到十秒”的补充学习材料，请在本章3节课学习过程中使用。

1. 中本聪《比特币白皮书》第7小节“回收磁盘空间”以及第11小节“简化支付验证”
https://mp.weixin.qq.com/s/7R-THHIoTZfmAFSsQwdcZg （比特币白皮书中文版（刘教链译本））
https://mp.weixin.qq.com/s/U_qkDkAud0Hg4wyWeKAdZw （比特币白皮书英文原版）
2. 默克尔树（Merkle Tree）在线演示工具：https://prathamudeshmukh.github.io/merkle-tree-demo/ （英文）
3. 【扩展阅读】《精通比特币》第9章“区块链”第9.7节“Merkle Tree”以及第9.8节“SPV”：https://www.8btc.com/books/834/masterbitcoin2cn/_book/ch09.html （中文）

## 课后作业：

以下是第九章“轻量账本压缩百倍 快速支付不到十秒”的作业。请学完本章之后尝试一下，并把你的答案发到学习群进行分享，和其他学友一起进步。

1. 使用默克尔树（Merkle Tree）在线演示工具，输入“刘教链比特币原理”作为数据，点击“Construct Tree”按钮构建默克尔树。请问默克尔树根的哈希值是什么？（把这棵树截图和大家分享一下吧！）
2. 请问在比特币区块链上块高度为30万的区块（区块哈希是000000000000000082ccf8f1557c5d40b21edabb18d2d691cfbf87118bac7254）所包含的默克尔树根（Merkle Root）的值是什么？
3. 选择题：有一位朋友向你兜售一种新型的数字货币，他说，比特币具备的全部优良特性（比如彻底的、完全的去中心化）这个新币都具备，同时该新币具有大大超越比特币的性能，主要是交易速度特别高，可以高达每秒钟几万、几十万甚至上百万笔交易（他用了一个你听不太懂的三字母缩写“TPS”），而且他告诉你为该新币站台的专家团包含了诺贝尔奖得主、美国知名教授、以及经常在媒体上露面的资本大咖，现在抓紧购买，上市后一定大涨。请问你的这位朋友是哪种角色的可能性更大：（A）好人；（B）专家；（C）傻子；（D）骗子。


(公众号/同名推特：刘教链。知识星球：公众号回复“星球”)
(免责声明：本文内容均不构成任何投资建议。加密货币为极高风险品种，有随时归零的风险，请谨慎参与，自我负责。)
