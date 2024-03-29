---
layout: post
title: "【刘教链比特币原理】1-3 区块链在比特币中发挥的作用"
date: 2023-01-13 08:00:00 +0800
categories: essay
---

付费合集文章前言：

决定我们长期胜率的，永远都是我们建构于内心深处的认知。积累认知的方法，唯有不断地学习。

---

本节课我们继续学习第一章“中本聪发明比特币 互联网开启新纪元”的第三小节“区块链在比特币中发挥的作用”。

## 本章目录：

### 第一章 中本聪发明比特币 互联网开启新纪元
第1节 五分钟告诉你什么是比特币和区块链
第2节 比特币的特点和使用
#### 第3节 区块链在比特币中发挥的作用

## 本节音频：

【音频】

## 学习笔记：

区块链是随比特币而生、为比特币而生的一门技术，具有划时代的意义。区块链是一个不同于以往的、从未有过的记账技术。它的独特性在于，账本不是由某个人、某个中央机构（比如第三方支付平台）来保管，而是存储在每一个人的电脑上（如果你运行比特币全节点的话）。

为什么要人手一份账本呢？

第一就是解决比特币交易的验证问题。比特币白皮书写得明白，主要攻克的就是双花（double spending）问题。点到点发送交易，如何验证付款方没有双花呢？就是要用区块链这个账本。我作为收款方，不信任何人，只信我手里这份账本。账本上显示付款方没双花，那就是没双花。

所以区块链就被比喻成一台高精度验钞机，秒验证收到币的真伪。这一点，可是比纸币（假钞检验和防伪复杂）和黄金（掺假问题屡见不鲜，检验纯度需要专业设备）要强好多倍、方便好多倍，每个人都可以承受检验成本，无需专业设备，有台电脑就行，随时随地可以验证。

第二就是杜绝所谓“单点失效”（Single Point of Failure），也就是管账本的人或者机构被黑，或者监守自盗，或者遭遇不可抗力，导致所有人的财产蒙受损失。和通常的记账会计不同，在我们的法币世界，帐和钱是分离的。会计管账不管钱，出纳管钱不管账。但是在比特币网络上，账和币是一体的。而且这是全球大账本，不像一个公司的会计、出纳管那么点儿钱，比特币这个网络里可是上万亿美元的电子现金，如果整个系统被一个人、一个机构管理，他可以修改账本从中渔利，那么可想而知这是多么巨大的权力！权力导致腐败，这样的系统必然会走向腐化而失去生命力，最终坍塌。

所以，去中心化，其中包含的一层含义就是账本的去中心化保管，是比特币最重要的生命力基石。任何对去中心化的修正主义，都是开历史的倒车，并且一定会被历史的车轮无情碾过，粉身碎骨。

所以，为什么当年比特币核心开发团队抵死扛住大矿工群体要求简单扩大区块大小来对比特币网络进行扩容？就是因为，那种简单粗暴的扩容做法，只会让节点数据量变得巨大，从而削弱个人用户用普通电脑运行全节点、保存全账本的能力，有利于大矿工尤其是矿霸利益集团对于全节点的控制权的夺取和垄断，从而增进其权力！

那么，当把账本交到每个人手上之后，又该如何防止任何一个人私自篡改账本呢？接下去的章节，将会揭开这其中所有的秘密。

## 课外资料：

以下是第一章“中本聪发明比特币 互联网开启新纪元”的补充学习材料，请在本章3节课学习过程中使用。

1. 比特币地址生成器：https://bitaddress.org （英文）
2. 比特币钱包软件Electrum官方网站：https://www.electrum.org/
3. 比特币区块链在线查看工具：https://blockstream.info/ （英文）https://mempool.space/ （中文、英文） 
4. 【扩展阅读】《精通比特币》第5章“钱包”：https://www.8btc.com/books/834/masterbitcoin2cn/_book/ch05.html （中文）

## 课后作业：

以下是第一章“中本聪发明比特币 互联网开启新纪元”的作业。请学完本章之后尝试一下，并把你的答案发到学习群进行分享，和其他学友一起进步。

1. 使用比特币地址生成器，在断网的状态下，生成一个你自己的专属比特币地址。并把私钥抄写在纸上。说说你的地址是什么？
2. 下载安装Electrum钱包，把你的比特币私钥导入。导入后在Electrum中找到你的地址。截图展示一下Electrum中你的地址是否正确导入？
3. 到区块链上查看这个地址1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa的交易历史。找到一笔发生在2019-03-01 19:12:34的交易记录，在该笔交易中，上面这个地址收到了多少比特币？

(公众号：刘教链。知识星球：公众号回复“星球”)
(免责声明：本文内容均不构成任何投资建议。加密货币为极高风险品种，有随时归零的风险，请谨慎参与，自我负责。)
