
比特币再起风波！

今日荐读：9.2教链内参《马斯克收购推特背后鲜为人知的故事》。刘教链Pro《激辩：比特币究竟算不算财产？》。 

---

经历过2017-2018年BCH硬分叉战争的人应当还对当年的血雨腥风心有余悸。当然，对于一战之后进场的大多数人而言，也许不会有感觉。而完整经历那一事件，且在分叉大战中选错边的人们，也许损失的就是全部的身家。

当年，因为对比特币扩容方案存在争议，最终造成了矿工派（主张硬分叉进行物理扩容）和开发派（主张软分叉进行逻辑扩容）的决裂。以吴忌寒为首的矿工派携近半算力出走，另立门户，分叉比特币代码，且复制了比特币的历史区块数据，意图重建一个符合他们设想的新比特币。

历史事实证明，他们失败了。但是当年为了支持他们而抛售掉全部比特币（BTC），置换成新比特币（BCH）的人，亏得血本无归。

六年之后，比特币风波再起。一场新的分叉危机似乎正在迫近。这一次，是否又要掀起如当年一般腥风血雨的争斗吗？是否又会让投资者和用户面临一次用全部身家选边站队的考验呢？

这一次的争议主题，源自于早在2017年和2019年由Paul Sztorc等人提出的BIP-0300（哈希率托管）和BIP-0301（盲挖矿合并）两个比特币改进提案。时至今日，这两个提案仍处于草案状态。但是，推动他们的人已经急不可耐了，推出了称为drivechain（传动链）的项目。通过传动链技术，我们可以把以太坊EVM链变成比特币的侧链或者2层链，也可以运行其他的2层链，而由比特币矿工提供哈希率来保障侧链或2层链的安全性。听起来有些类似于基于比特币1层而建立的某种roll-up，2层链把3-6个月的数据压缩哈希之后回写到1层，驱动1层的资产转移。

这里真正的难点在于，比特币矿工是否有能力验证来自2层链的数据。当然从名字的暗示来看，我们预期矿工不会去验证，那么矿工除了无脑接受数据并固定到区块之外，就做不了什么更多的事。这和目前ordinal这个外挂协议类似，比特币矿工并不处理外挂协议的安全性。与ordinal不同的是，drivechain的提案需要比特币进行soft-fork（软分叉）才能实施，这种对共识层的侵入可能会给用户和市场一种错觉，那就是比特币矿工可以真的保障2层的安全性 —— 而事实上却做不到。这便有可能造成大量虚假的市场宣传和欺诈问题，从而败坏比特币矿工以至于比特币的名声。

比特币开发者Jimmy Song日前在个人推特上发帖谈及此事，言辞激烈。译文如下，供大家参考：

The Case for a Chain Split

链分裂的案例

The debate surrounding drivechains has been heating up, with proponents employing various tactics to garner support. This divisive issue echoes previous disputes in the Bitcoin community, such as the 2017 block size controversy. As such, we should consider what was then the definitive resolution: a chain split.

围绕传动链的争论一直在升温，支持者采用各种策略来获得支持。 这一分歧问题与比特币社区之前的争议相呼应，例如 2017 年的区块大小争议。 因此，我们应该考虑当时的最终解决方案：链分裂。

A significant portion of the Bitcoin community rejects drivechains, effectively blocking its implementation via a soft fork. Bitcoin's voluntary nature makes it resistant to hostile takeovers, despite claims that miners could force the change. Disagree with that last statement? Then let's put that to the test. We can resolve this posturing and propaganda by forking the code.

比特币社区的很大一部分人拒绝传动链，从而有效地阻止了其通过软分叉的实施。 比特币的自愿性质使其能够抵抗恶意收购，尽管有人声称矿工可以强制改变。 不同意最后的说法吗？ 那么我们来测试一下。 我们可以通过分叉代码来解决这种姿态和宣传。

Here's how it would work: Code implementing drivechains would be released. Those who support the proposal can run this code. A transaction that goes against drivechain rules but adheres to pre-drivechain rules will trigger a chain split. Those running the drivechain software wouldn't be doing anything, but nodes that aren't can reject the drivechain chain by using the "invalidateblock" command. The result will be two distinct Bitcoins: one with drivechains and one without.

其工作原理如下：发布实现传动链的代码。 支持该提案的人可以运行此代码。 违反传动链规则但遵守传动链之前规则的交易将触发链分裂。 那些运行传动链软件的节点不会执行任何操作，但不运行传动链软件的节点可以使用“invalidateblock”命令拒绝传动链。 结果将是两种不同的比特币：一种带有传动链，一种没有。

This approach was resolved the conflict we had in August 2017, when Bitcoin Cash split off from Bitcoin. Similarly, proponents and opponents of drivechains can either hold or sell their respective Bitcoins post-split. This would be a real-world test of control and game theory within the network.

这种方法解决了 2017 年 8 月比特币现金与比特币分离时发生的冲突。 同样，传动链的支持者和反对者可以在分割后持有或出售各自的比特币。 这将是对网络内控制论和博弈论的现实测试。

I advocate for this split not just for potential profits, but also because it's a peaceful solution. It would let us see in real time how convicted the drivechain people are. Will drivechain miners support it if it means mining at a loss? A chain split would serve as a critical learning opportunity for the community, providing a clear answer to the ongoing debate. Ultimately, this will strengthen Bitcoin by showing the market how hard it is to change its properties.

我主张这种拆分不仅是为了潜在的利润，还因为这是一个和平的解决方案。 它可以让我们实时看到传动链人员的信念有多强。 如果意味着亏本挖矿，传动链矿工会支持吗？ 链分叉将为社区提供一个重要的学习机会，为正在进行的争论提供明确的答案。 最终，这将通过向市场展示改变其属性有多么困难来增强比特币。

So bring it on! Fork or shut up.

所以上吧！分叉或者闭嘴。


熟悉Jimmy Song的朋友知道，他可能就是那个最适合被扣上比特币最大主义帽子的鹰派开发者之一。他的此番言论一出，大有石破天惊的味道。很多人大惊失色，在他帖子下面评论，指责他这样说话是草率的、不负责任的。有人说，本来就是一个软分叉，为何却要鼓动硬分叉？本来是对于比特币的改良的正常讨论，为何要激烈如此？看众人与Jimmy这一席对话，蓦地竟有些本来只是在二毛家里切磋切磋的比武局为何你大帝竟扬言要放大蘑菇的既视感。呵呵呵。

硬分叉和大蘑菇类似，都是一种战略威慑。战略威慑，讲得是不战而屈人之兵。背后依赖的，是人性里精于经济算计，不会做亏本买卖。高手过招，双方心中默默长考，然后拂袖而去，免去诸多生灵涂炭。水平不够，或者定力不够，那就不得不冲冠一怒，不争馒头争口气，失去了经济算计，怒而兴师，动手比试，那便已然落了下风了。




