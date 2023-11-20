# 比特币矿工可以选择高尚吗？

在教链11.5文章《中本聪的新发明：数字稀缺性》中，对BTC产出——或者叫发行——的办法，以及为何通过这种办法产出的BTC具有稀缺性进行了综述。我们从中看到，中本聪运用密码学、热力学以及人性彼此监督来制约人性中作恶的冲动，而引导这种冲动的力量，使之推动比特币系统的运行。其中有一个有趣的小问题，那就是生产BTC的节点，即所谓“矿工”，是否可以选择高尚无私，即提取比规则既定产量较少的BTC数量？

答案是可以。

比如目前区块奖励是6.25个BTC。如果某个矿工节点算出了工作量证明，此时他有权利提取6.25个BTC既定产量并发送给自己的地址，但是他可以选择提取更少，比如提取6个而不是6.25个。那么，其他节点在验证这个区块数据时，会认为这个提取交易（称为coinbase币基交易或铸币交易）是有效的。

那么，该节点未提取的0.25个BTC会怎么样呢？会相当于默默燃烧销毁了。其他节点以及后续区块都不能重新提取这些BTC了。按照中本聪的说法，销毁的BTC相当于减少了BTC的总量，这等价于对所有持有人的“捐赠”。该节点的高尚行为，就是一种对全体BTC持有者大公无私的奉献了。

在著名的比特币科普作者AA (Andreas Antonopoulos）的著作《Mastering Bitcoin》第8章“挖矿与共识”[1] 中这样写道：

> The maximum number of coins mined is the upper limit of possible mining rewards for bitcoin. In practice, a miner may intentionally mine a block taking less than the full reward. Such blocks have already been mined and more may be mined in the future, resulting in a lower total issuance of the currency.

> 挖出的最大币数是比特币可能挖矿奖励的上限。在实际操作中，矿工可能会故意挖出一个低于完整奖励的区块。这种区块已经被挖出来过，未来可能会挖出更多（这种区块），从而导致比特币的总发行量降低。

按照Bitcoin Wiki的说法[2]：

> Miner Underpay
> The algorithm which decides whether a block is valid only checks to verify whether the total amount of the reward exceeds the reward plus available fees. Therefore it is possible for a miner to deliberately choose to underpay himself by any value: not only can this destroy the fees involved, but also the reward itself, which can prevent the total possible bitcoins that can come into existence from reaching its theoretical maximum. This is a form of underpay which the reference implementation recognises as impossible to spend. Some of the other types below are not recognised as officially destroying Bitcoins; it is possible for example to spend the 1BitcoinEaterAddressDontSendf59kuE if a corresponding private key is used (although this would imply that Bitcoin has been broken.)

> 矿工少付自己
> 决定区块是否有效的算法只检查验证奖励总额是否超过奖励加可用费用。因此，矿工有可能故意选择少付自己任何金额：这不仅会销毁所涉及的费用，还会销毁奖励本身，从而使可能出现的比特币总量无法达到理论上的最大值。这种形式的少付比特币在参考实现中被认为是不可花费的。下面的一些其他类型并不被官方认定为销毁比特币；例如，如果使用了相应的私钥，就有可能花掉 1BitcoinEaterAddressDontSendf59kuE （尽管这意味着比特币已被破解）。

硬核用户选择不相信任何第三人的说辞，那么就去直接看参考实现 —— 也就是bitcoin-core的源代码，这是最直接、最真实的事实。关于这部分的代码在bitcoin-core最新版本代码 src/validation.cpp 的2437-2441行[3]：

20231105-B01.png

从比特币源代码可以看出，第2438行显示，如果矿工节点提取量大于blockReward（等于手续费加区块补贴）的费用，就判定为无效。这意味着，如果矿工节点提取量不大于blockReward，那么就是可以通过验证的。从数学逻辑上看，很清楚，不大于的意思是，小于或者等于都是可以的。

其实，算法只规定了提取量的上限，这包含了区块中打包的全部交易所支付的手续费，加上当前区块高度可以增发的BTC数量——称之为区块补贴（第一个区块为50个BTC，每21万个区块减半）。

最后一个问题就是，为什么源码一定会得到大多数人的执行呢？答案是并不会。如果源码违反了大多数人的意志，那么源码中的算法就不会被真正施行。而当前的源码之所以是有效的，正是因为它准确反映了大多数人的心声，代表了大多数人的利益。

参考资料：
- [1] https://www.oreilly.com/library/view/mastering-bitcoin/9781491902639/ch08.html
- [2] https://en.bitcoin.it/wiki/Controlled_supply
- [3] https://github.com/bitcoin/bitcoin/blob/master/src/validation.cpp

