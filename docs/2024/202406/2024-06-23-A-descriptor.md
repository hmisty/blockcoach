# 真的假的？Bitcoin Core不支持导入私钥了？

* * *

周末BTC在击穿64k、局部触底后，开始缓慢修复至64k上方。逢跌加仓这种事，说起来简单，真能做到的，也许还是少数。毕竟，抄底被埋这种事太多了，“逢跌加仓”在很多人口中与猛兽无异。

前些天写了两篇介绍手搓BTC冷钱包的文章，一篇是2024.6.12《哪里能买到冷钱包？答案你肯定想不到！》，另一篇是2024.6.14《自己手搓一个比特币私钥地址生成器，不到百行代码，不依赖第三方库！》。

文章得到了比较热烈的反响。其中有读者询问说，最新版本的Bitcoin Core（比特币核心）客户端已经不支持导入私钥了，那么这个手搓的私钥，是不是就没有办法导入到Bitcoin Core使用了呢？

今天，教链就简单解答一下这个问题。

众所周知，Bitcoin Core（比特币核心）是传承自中本聪的一个客户端软件，它主要的功能是作为比特币的节点。它也自带一个钱包的功能。当然，你可以认为这是一个软件钱包。只不过，这个钱包比较“独立自主”，依托于自身的节点下载整个区块链数据来工作，不依赖其他第三方的数据服务。

有一些硬核的玩家会使用这个钱包软件。优点自然是独立验证一切。缺点也很明显，初始化需要一两个星期（取决于你的网络速度）和大几百GB的磁盘，才能把从2009年到现在的全账本数据都下载下来，验证一遍，然后才能正常工作。

一般用户就是为了导入私钥，然后把BTC全部转入交易所去卖掉这个“小小需求”的话，估计恐怕是等不了这么长时间。

教链之所以把“囤BTC”这件事拆分成两步：一、囤币；二、动币。就是为了在第一步实现完全手搓，私钥不依赖也不接触任何软件硬件互联网。至于囤了20年、30年之后才需要动币的时候，再用20年、30年之后的最新、最好的软件导入私钥来操作就可以了。想必20年、30年之后的软件钱包、硬件钱包，可能会比今天的大有进步、大有不同了吧？

拆分之后还有一个好处，那就是动币的环节，其实并不要求必须使用那么硬核的全节点钱包！为什么？因为从导入私钥，到清空地址，转入交易平台，可能只需要十几分钟到半个小时。这是这个私钥触网的最长时间。最长也不超过半个小时。

黑客在清空地址之前，不到半小时内，能够发现并实施盗窃的可能性比较小。时间窗口期很短，他不一定来得及动手。（当然你也可以用冷热钱包分离、两台机器配合操作的办法，进一步杜绝黑客提前在你联网电脑上种植木马监视的可能性。）

为了这个半个小时不到的动币环节，等待一两个星期去同步整条区块链，恐怕也不会是很多人想做的事。

这就是教链在2020.10.20《如何使用私钥保管比特币》中使用轻量级钱包软件electrum来操作“动币”的原因。

至于Bitcoin Core这个“正统”的客户端软件，目前还没有完全实现中本聪在白皮书里说过的所谓SPV（简化支付验证）钱包功能。它再做一些努力的话，实现起来应该不是很困难。实现了SPV功能，那么就可以允许普通用户不必下载、验证和存储全部区块链数据，而只需要下载区块头数据就可以了，这会极大减小用户钱包的数据量，并极大缩短初始同步的时间（几十分钟到几个小时？）。

教链的个人观点是，在Bitcoin Core正式实现SPV功能之前，普通用户“动币”没有必要使用它。

说完这些，我们就可以来看一下，所谓的“Bitcoin Core不能导入私钥了”究竟是个什么问题呢？

从0.17版本开始，Bitcoin Core开始支持一种叫做“输出描述符”（Output Descriptor）的新技术。用这个也是为了更方便地指示，用户在钱包里究竟还要用哪种地址。毕竟，教链说过，私钥就是一个数字，同一个私钥其实可以对应出不同格式的地址，每个地址彼此并不相通。

比如说吧，在2024.6.14《自己手搓一个比特币私钥地址生成器，不到百行代码，不依赖第三方库！》中手搓出来的这个私钥：

5KQ2upQdz2wPfYCT2MfXdgmqZKZtFPDmzm8ubXimR76pYMANUdM

它可以转码成压缩格式私钥：L4CfS8FLEjZ536hXrzD4CvYuKex9CV5Pbwou9QbM3PvgqKzLhMBb

它对应的普通地址是：13cuZK94jvtCBPDoXd86MiiFTyMnQWkCS6 （又叫非压缩格式地址）

它还可以对应一个压缩格式地址是：1D9UhcTvw9vsJ9SjHoAHT1kGcvojWVnfVp

它还可以对应一个隔离见证地址(p2sh格式)是：3EdGz1omVRGPoZqXsiWSg6pGqpQdz1c2Gb

它还可以对应一个隔离见证bech32地址(p2wpkh格式)是：bc1qs5alt3n7jyarufd4j2d0gsd6pa4mgqt6g43lcr

它还可以对应一个taproot地址(bech32m, p2tr格式)是：bc1ptc0q350pdglal7t2zwcefed6yx9tj7jqz8wfsfxmuukyms4lj0cqht8kuk

不知道你是不是已经看晕了。是的，就是这么眼花缭乱。这还只是冰山一角，仅仅是一个私钥，还没有用上助记词等等等呢。

新技术层出不穷。不要盲目追新。完成目标、适合使用的就是最好的。所以，这也是教链仍在使用普通地址的原因之一。

要知道，直到今天，还有大把的钱包软件，还不能很好地兼容bech32地址，更别提taproot地址。

更别提太宽松的助记词标准，不同钱包软件、硬件，都搞了一些“定制”，主打的就是一个不兼容。你抄记了这家的助记词，几年之后软件没了或者升级了，你把助记词导入到新软件或者别家的软件里，发现恢复出来的完全是另外一套地址了！你存放在原来地址里的BTC都找不到了！

教链身边就有朋友遇到过这样的惨痛教训。

其实所有这些高级的新技术，都是在最朴素的私钥-地址基础上套壳。一层、两层、三层…… 套得越多，将来遇到恢复困难的可能性就越大。因为那套的一层层壳，对你这个用户来说，太难悉数掌握，于是就几乎相当于于一个黑盒子。即便开源，又岂是每一个普通小白用户能完全看懂的？

你不是技术专家。回归朴实无华的本质，也许才是永葆快乐的最好办法吧！

说回来，Bitcoin Core客户端软件钱包默认创建描述符钱包而不是原来的旧格式钱包之后，新格式的钱包就不再支持旧的导入私钥指令比如importprivkey之类，而是转而需要通过描述符来进行导入。

首先，通过getdescriptoinfo指令获得描述符的checksum信息：

```
$ bitcoin-cli getdescriptorinfo "pkh(5KQ2upQdz2wPfYCT2MfXdgmqZKZtFPDmzm8ubXimR76pYMANUdM)"
{
  "descriptor": "pkh(04e510bfa12225bbc2044a1847eda44a26e8a842cbf45c11d74ade893e506fc9e209c7c0044c5321ea22edf9dc1d8e45bed3663ed7c637eb564a7dd0a23ca8e45c)#afvrzgrk",
  "checksum": "8rrz94h2",
  "isrange": false,
  "issolvable": true,
  "hasprivatekeys": true
}
```

然后使用importdescriptors指令导入私钥：

```
$ bitcoin-cli importdescriptors '[{"desc":"pkh(5KQ2upQdz2wPfYCT2MfXdgmqZKZtFPDmzm8ubXimR76pYMANUdM)#8rrz94h2","timestamp":"now"}]'
[
  {
    "success": true
  }
]
```

我们用listreceivedbyaddress指令就可以看到刚刚导入的地址：

```
$ bitcoin-cli listreceivedbyaddress 1 true
...
  {
    "address": "13cuZK94jvtCBPDoXd86MiiFTyMnQWkCS6",
    "amount": 0.00000000,
    "confirmations": 0,
    "label": "",
    "txids": [
    ]
  },
...
```

那么，如果我们把同一个私钥，换个描述符来导入，就会得到bech32格式的隔离见证地址：

```
$ bitcoin-cli getdescriptorinfo "wpkh(L4CfS8FLEjZ536hXrzD4CvYuKex9CV5Pbwou9QbM3PvgqKzLhMBb)"
{
  "descriptor": "wpkh(02e510bfa12225bbc2044a1847eda44a26e8a842cbf45c11d74ade893e506fc9e2)#78mhkxqv",
  "checksum": "8ryfeuc2",
  "isrange": false,
  "issolvable": true,
  "hasprivatekeys": true
}

$ bitcoin-cli importdescriptors '[{"desc":"wpkh(L4CfS8FLEjZ536hXrzD4CvYuKex9CV5Pbwou9QbM3PvgqKzLhMBb)#8ryfeuc2","timestamp":"now"}]'
[
  {
    "success": true
  }
]

$ bitcoin-cli listreceivedbyaddress 1 true
...
  {
    "address": "bc1qs5alt3n7jyarufd4j2d0gsd6pa4mgqt6g43lcr",
    "amount": 0.00000000,
    "confirmations": 0,
    "label": "",
    "txids": [
    ]
  }
...
```

好玩吧？

所以说，结论就是，并非Bitcoin Core不支持导入私钥了，而只是你还没掌握怎么玩罢了。
