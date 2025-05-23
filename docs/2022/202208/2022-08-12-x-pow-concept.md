---
layout: post
title: "工作量证明（PoW）概念"
date: 2022-08-12 23:55:00 +0800
categories: essay
---

工作量证明不应被视为一个神秘的或浪费的系统，而应被视为功能性的、自然的以及对任何通信协议设计具有潜在价值的东西。

文 | Daniel Krawisz. *The Proof-of-Work Concept*. 2013/6/24.

![](/images/2022/20220812-2.jpg)

* * *

**搜索**

比特币网络最不直观的部分可能就是工作量证明的概念了。它以此定义生成一组新交易（“区块”）并添加到分布式交易数据库（“区块链” ）。这个概念源于早期的密码朋克运动[1]的想法，对货币理论来说是新事物，在计算机科学中也感觉有点格格不入。我将要展示的是，生物学为我们提供了理解它所需的最合适的框架。

比特币区块链中的所有区块都附有一小串无意义的数据（称为nonce）。矿机需要寻找正确的无意义字符串，使得整个区块满足某个确定的任意条件。具体来说，要求区块的 SHA-256 哈希有一定数量的前导零[2]。哈希是单向函数，因此没有简单的方法来找到正确的 nonce 或以其他方式来制造一个正确的区块。找到一个好的 nonce 值的唯一已知方法是简单地随机尝试，直到有一个成功。可汗学院提供了工作量证明的可视化解释：

https://www.khanacademy.org/economics-finance-domain/core-finance/money-and-banking/bitcoin/v/bitcoin-proof-of-work

请记住，这个过程是完全任意的。它只是一种额外的复杂性，就像仪式一样，以使区块更难生成。只要计算困难，其实任何别的东西都可以。别的加密货币使用其他哈希算法。数论中没有只有望月新一这样的人才能理解的特殊条件。[3]

![](/images/2022/20220812-3.jpg)

虽然矿机的作用是为区块链做会计（记账），但他们实际做的大部分工作是寻找好的 nonce 值，而不是与记账有关的任何事情。用于寻找 nonce 的能量永远丢失了。正如一些人所认为的那样，能量不会像黄金支撑一张诚实的钞票那样“支撑”比特币的价值。在进入比特币挖矿的巨大算力中，除了一小部分之外的其他所有算力显然是没有目的的。

![](/images/2022/20220812-4.jpg)

当一个人升级他们的矿机时，他们会以更快的速度进行挖矿，从而赚取更多的比特币。但是，当每个人都升级时，挖矿整体上并没有变得更有效率。不管网络怎么努力工作，每十分钟都应该只有一个新区块。相反地，网络更新了难度，以对未来的区块提出更严格的条件。所有矿工都可能会更加努力地工作，但没有一个会更富有。它更像是一片森林，每棵树都试图长得尽可能高，以便比其他树吸收更多的光，最终大部分太阳能都被用来长出又长又枯的树干。

为什么要把每个比特币区块都绑在一个困难的普洛克路斯忒斯之床（Procrustean bed，喻指强求一致的政策或标准）上？对工作量证明概念的正确思考方式是作为一群自利的人——他们中的任何一个人都不从属于任何其他人——的一种建立共识的手段，而反对相当大的拒绝共识的动机。如果每个人都非常诚实和无私的话，比特币或许可以在没有工作量证明的情况下完美运行。如果不是的话，那么就很难达成共识。

在新区块生成之前，可能会有很多付款在网络里四处飘浮，对于这些付款应该去往何处还没有任何客观答案。有些可能是无效的，所以都需要检查。有些可能不包括任何交易费用，因此还必须决定是友善地允许这些搭便车者通过还是忽略它们。最后，可能存在包含两个以上付款的集合，因此并非所有付款都可以同时有效，但其中的某些子集是有效的。例如，一个钱包可能会尝试同时花费两次相同的比特币。在这种情况下，可以任意选择准许哪些付款。

因此，对于给定的付款集合，也许有多个可能的区块可以从中构建，客观上没有一个是最正确的。不一定会就哪种结果更合适达成任何协议，因为不同的可能区块对不同的人有不同的好处。首先，奖励来自于生成包含一批新比特币的区块。这是必要的，因为如果没有它，一开始就不会有任何人有动力去记账；但是有了奖励，每个矿工自然会更偏向于他提议的新区块，而非其他人提议的。

即使不考虑奖励，还有其他更微妙的问题。矿工可能会拒绝验证来自他的敌人的交易，或者他可能在接受何种费用方面或多或少地有些无私。他甚至可能希望通过双花（double spending）来欺骗别人：在这种情况下，他会向受害者付款以换取商品，但只会验证他同时向另一个也是他拥有的钱包支付的另一笔冲突的付款。这将使他的第一笔付款无效，因此他最终会得到一件他没有支付的商品。

有这么多理由想要为自己的目的操纵区块链，矿工们很可能在理论上同意达成共识的必要性，而从未就任何具体的提议达成一致。比特币的解决方案是对协议增加额外的要求，大大增加了背叛的成本。如果区块是通过困难的计算随机生成的，那么一次只会有一个提议的新区块。一旦有一个新区块被提议了，矿工就要选择是继续寻找对自己更有利的替代区块，还是接受新的提议并寻找下一个区块。接受最新区块的每个人都明白，他遵循的是自然共识，如果他足够幸运地生成下一个区块，它可能会因为与他接受上一个区块相同的原因而被接受。另一方面，坚持试图产生更有利的区块是非常冒险的，因为他必须说服足够多的其他矿工同意他，他才可以建立新的共识。

一般规则是，挖出的第一个区块不是自利的，因为没有人可以计划成为第一。一个人只能靠运气成为第一。任何坚持都是可疑的，因为要生成它，矿工必须做出选择，拒绝一个完美的、可能是无私的替代方案。这不是一件容易的事情。[4]

**不利原理**

![](/images/2022/20220812-5.jpg)

生物学中有一个名为“不利原理”的想法阐明了这一过程[5]。它说，当两只动物有合作的动机时，它们必须以可信的方式相互传达良好的意图。为了使撒谎变得不可信，信号必须对信号发送者施加成本，这会使作弊的成本非常高。换句话说，信号本身一定是一个不利条件。

这可以用囚徒困境来理解，这是博弈论中的一个著名思想，适用于大量现象。囚徒困境有两个玩家，每个玩家都有两个选择：合作或背叛。通常，游戏是根据两个囚犯的故事来解释的，他们每个人都可以选择保持沉默或斥责对方。囚徒困境的基本特征是，无论对方的选择如何，每个玩家都最好选择背叛，而当对方合作时背叛的人将获得最大的利益。如果双方都合作而不是都背叛，玩家可能都会更好，但是由于他们无法确保合作，所以他们都会选择背叛。

不利原理解决了囚徒困境的问题，它允许每个玩家都可以选择比游戏提前一步做一些事情，令人信服地消除掉背叛不合作的好处。很难想出如何让不利原理适用于两名囚犯的故事，但假设他们有一段时间同时和检察官在一起，其中一名对博弈论特别了解的囚犯对检察官说，“如果另一个囚犯有罪，那么我也同样有罪。”这个声明对他自己来说是一个明显的代价，因为这消除了他背叛另一名选择合作的囚犯的能力。然后另一名囚犯可以选择重复这一陈述。如果他不这样做，那么他知道第一个囚犯唯一可行的选择就是背叛，但如果他这样做，那么两个囚犯都可以选择合作。这就是不利原理。

不利原理已成功应用于各种生物现象。举一个具体的例子，假设一只猎物注意到捕食者正在跟踪它。如果猎物能够向捕食者传达它不再未注意到的信息，这两种动物都会受益：如果捕猎不再是出其不意的，捕食者可能就不想再进一步捕猎，猎物也就不会被猎杀。然而，猎物可能会开始随机地说：“我看到你了！”即使它没有看到捕食者，也只是为了阻止任何可能碰巧在那里的家伙。只要猎物可能在撒谎，捕食者就不能从表面上接受它的信号，而必须忽略它。[6]

在同一个物种之中，不利原理解释了很多关于动物如何相互竞争以及如何与配偶互动的问题。例如，在鹿之中，拥有最大鹿角的鹿是最强壮和最好的典型，因为任何试图长出更大鹿角的小鹿都将面临着消耗更多能量和营养的风险，这超出了它们的承受能力。因此，二流的鹿最终长出了二流的鹿角，而三流的鹿最终长出了三流的鹿角，以此类推。[7]

在社会物种中，不利原理解释了道德和利他主义。正如一个物种的成员可以通过角或鹿角等不利条件来区示自己的力量和健康，社会物种的成员可以使用利他主义作为一种不利条件来区分彼此。例如，《不利原理》这本书描述了一种名为阿拉伯鸫鹛（Arabian Babbler）的社交鸟类，它们在利他主义方面进行竞争。最强大和最具统治力的鸟类通过花时间守卫鸟群以及喂养雏鸟和低等级的鸟类来展示它们的优势。鸫鹛不喜欢被同级别的其他鸫鹛喂食，因为它们不喜欢感觉低人一等。《不利原理》甚至描述了一个观测结果，其中一只鸟将一条蠕虫喂给另一只鸟，结果同一条蠕虫被直接顶回了自己的喉咙里！[8]

因此，工作量证明不应被视为一个神秘的或浪费的系统，而应被视为功能性的、自然的以及对任何通信协议设计具有潜在价值的东西。如果一个分布式计算机系统归一个人所有，他可以假设他们都会合作，因为他控制着他们的行为。如果情况并非如此，则确实需要不同的计算机来证明它们正在朝着相同的目标努力。不利原理在生物学中的普遍性应该足以让人怀疑一个不对用户强加成本的协议会招致滥用。一个有趣的思考是，互联网有多少问题可以归咎于没有考虑到这一原理。如果在发明电子邮件时就已经理解了工作量证明，那么可能永远都不会出现垃圾邮件问题了。如果互联网协议可以要求客户端请求的工作量证明，我们可能就不必担心分布式拒绝服务（DDOS）攻击。[9]

比特币工作量证明系统可以与鹿角和利他主义相比。生成区块的能力是计算能力的体现，这正是比特币网络帮助验证全部交易所需要的。但这也是一种社区精神的表现，因为同意参加下一个区块的竞赛，表明他们愿意尊重社区的利益，而不是为了一己私利而操纵区块链。这正是那种应当预期的将社区团结在一起的事情。

**比特短信**

工作量证明的最新应用是比特短信（Bitmessage），它是一种匿名的、分布式的、加密的消息协议，有朝一日它可能会和比特币几乎同等重要[10]。它的灵感来自于比特币，但工作方式完全不同。 比特短信协议中没有区块链，因为不需要将所有短信永远存储在数据库中。相反，比特短信要求每个发送短信的人在网络中继之前执行一些工作。这确保了每条短信都是有意义的：没有垃圾短信发送者可以让他的计算机为他发送的每条消息运行一分钟左右。工作量证明是必不可少的，因为依赖于用户捐赠计算的分布式网络无法允许搭便车。它目前处于早期阶段，尚未经过充分研究而被认为是安全的，但它具有作为电子邮件替代品的巨大潜力。

**点点币和权益证明**

如果不讨论点点币（PPCoin），对工作量证明的讨论是不完整的，点点币是仅次于比特币和莱特币的第三大流行加密货币（译注：本文最初发表时）[11]。点点币也使用工作量证明来使背叛无利可图，但成本在矿工之间的分布非常不同：与持有少量点点币且持有时间较短的矿工相比，长期持有大量点点币的矿工对出块的要求要低得多。这意味着人们不会倾向于遵循拥有最强大计算机的人提出的共识，而是会遵循对货币进行最大投资的人。矿工更像是按资历而非实力来分别。当矿工在点点币的区块链中创建一个新区块时，他必须用他的一些旧币进行交易来获得新币——这意味着每个创建了一个区块的人都不太能够创建下一个区块。这个系统被称为权益证明（Proof-of-Stake）。

工作量证明和权益证明在不同情况下具有不同的成本和收益。根据不利原理，产生信号的成本必须与消息的含义相关。权益证明系统展示了对币本身的投资，而工作量证明系统则展示了对底层网络的投资。

因此，如果有一个工作量证明网络和一个权益证明网络具有相同的市值，那么人们会预期工作量证明代币拥有一个更大容量的网络，并且比权益证明网络更具流动性，而权益证明的币将具有更大的价格稳定性。

工作量证明系统通过使其难以一直依赖网络接受他的区块来阻止反社会矿工操纵区块链。相比之下，权益证明系统通过只接受有动机确保商品（货币）绝对值得信赖的矿工的区块来阻止反社会矿工。由于权益证明随着新区块的产生而用完，因此能够挖矿的人会不断更替，专门维护区块链的动力就更少了。

在早期阶段，加密货币网络需要对币本身进行的长期投资以获得信誉和价值，而更大、更成熟的网络更有可能需要网络基础设施的专业化以确保其正常运行。

这是一个学术讨论。支持比特币以外的任何加密货币都会适得其反。普通消费者不会因为不影响他们将其用作货币的晦涩技术细节去选择一种货币而不是另一种。他们更有可能选择被更广泛接受的那个。认为点点币更理性的人对点点币击败比特币的预期不大，但他们可能有机会说服比特币社区在未来的比特币版本中采用权益证明系统。尽管这在理论上是可行的并且可能带来好处，但比特币矿工已经在当前系统中形成了既得利益，因此倾向于反对这种创新。


**参考资料**

1. See Back, A., "Hashcash - A Denial of Service Counter-Measure", 1 Aug 2002, for a description of the proof-of-work concept and its applications by its original inventor. ↩

2. See Nakamoto, S., "Bitcoin: A Peer-to-Peer Electronic Cash System", 2008. ↩

3. A world-class mathematician conjectured for superficial reasons to be the creator of Bitcoin by Ted Nelson. He is known both for purported proof of the abc/Oesterlé-Masser-Szpiro conjecture and for his reluctance to advertise his work or to explain it to anybody. The proof is over 500 pages long and so original that no other mathematician yet fully understands it; if it were true, it would be a much bigger deal than the proof of Fermat's Last Theorem. See his website Mochizuki, S., "Inter-Universal Geometer: Shinichi Mochizuki", 2013.

However, there is no reason to expect the creator of Bitcoin to be a math genius. Bitcoin is a brilliant work of engineering, not of logical deduction. The mathematics required to create it might be found in an introductory cryptography course. Satoshi did not come up with any fundamentally new ideas; he simply put some existing ideas together in an extraordinarily useful new way.

The reclusiveness of the two figures is also superficial. Mochizuki is a typical eccentric asocial mathematician, only just a bit more so. Nakamoto, on the other hand, was secretive about his identity for very good reasons. He was also not asocial: he was very active in the Bitcoin community until he felt that it no longer needed his guidance. ↩

4. Although this has happened once before. On March 13, 2013, a bug in version 0.7 of bitcoin-qt resulted in a conflict with version 0.8. The block chain forked, with each version of the software recognizing a different branch as valid. The community of bitcoin miners settled upon the version 0.7 branch as the one they would recognize even though it was the shorter one. ↩

5. See Zahavi, A., Zahavi, A., The Handicap Principle: A Missing Piece of Darwin's Puzzle, Oxford University Press, 1997 for a delightful presentation of this idea, written by the biologist who originally proposed it. Although this is a popular presentation without mathematics, it is not dumbed-down and it uses sophisticated biological arguments to make its point. The Handicap Principle was originally proposed in 1975, but did not become mainstream until the 90's. ↩

6. Zahavi, Zahavi, 1997, pp. 3-13. ↩

7. Zahavi, Zahavi, 1997, pp. 55-57. ↩

8. Zahavi, Zahavi, 1997, pp. 125-150. ↩

9. Back, 2002. ↩

10. See Warren, J., "Bitmessage: A Peer-to-Peer Message Authentication and Delivery System", 27 Nov 2012. ↩

11. See King, S., Nadal, S., "PPCoin: Peer-to-Peer Crypto-Currency with Proof-of-Stake", 19 Aug 2012. This paper is not well-written and I do not recommend it. ↩

*公众号：刘教链*

<u>*根据央行等部门发布的“关于进一步防范和处置虚拟货币交易炒作风险的通知”，本文内容仅用于信息分享，不对任何经营与投资行为进行推广与背书，请读者严格遵守所在地区法律法规，不参与任何非法金融行为。*</u>
