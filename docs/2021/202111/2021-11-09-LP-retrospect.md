---
layout: post
title: "杠杆做市策略复盘分析"
date: 2021-11-09 08:00:00 +0800
categories: essay
---

早间，比特币再度上攻，突破前高67k关口，创下历史新高。自10月20号创下67k前高并于次日小幅回调至6万上方盘整以来，比特币用一个月不到的时间走了一个槽型反转，或者说U型反转。很明显的，价格还是摆出一副带着5周均线向上斜冲的架势，引无数多头竞折腰。相比9/24之后仓皇出逃时，如今u对美元已经没有汇率折价了。这反映了资金面上悄然回流的景况。

一直关注和阅读我文章的老读者都知道，我从今年2月28号开始执行DeFi借币做市的策略（回顾3/2文《绝地大反攻》中的记录），简单讲就是在Maker中抵押wBTC借出DAI，换成ETH和USDC到Uniswap中做LP赚取交易手续费，至11月3号撤出了LP并全部偿还了Maker（回顾11/4文《美联储如期taper！但是……》中的记录）。

至于3号撤出的原因，是因为当日ETH突破了4500刀。而我在Uniswap V3中设置的ETH/USDC做市区间上限就是4500。所以，即便我3号不撤LP，拿到今天再撤，也是一样，不会有任何多余的收益。

经过简单的复盘分析，在借币的基础上又加投了25%的场外资金到LP，从3月到10月共8个月，u本位计算收益率大概在45%多一些。为了保持杠杆率在较低的水平，抵押资产较多。以抵押资产价值计算，收益率也就7-10%，小于10%。

如果按照八字诀囤ETH，从几次借币买入的时间点和价位复盘来看，平均成本价大概会在2500刀上下，至4500刀突破做市区间时，收益率在80%以上。

因此，这个复盘的结果也印证了6月29号文章的提问：《LP是傻瓜吗？》

回顾过去这8个月做市期的市场变动情况。3月到5月中，2个半月的走强，以太从1500冲到4000多，没有突破4500。没有撤出LP的我带着LP迎接了519。

519的瀑布对市场进行了激烈的去杠杆，以太深度回调到2000以下。下限提升到2500的LP遭遇了向下击穿。在5月底到7月底，2个月的筑底期，因为不愿意拿一把以太空耗着，于是动用了场外资金补充USDC加上做市收入的USDC重新在低位区间做LP。虽然忍住了没有低位割肉ETH换USDC，但是把高位区间买入的ETH拿到低位区间做市，本身就会在市场反弹时低位卖出，造成事实上的高买低卖。这里就有一个隐性的做市损失。

随后，在7月底到9月初一个月的大反弹中，以太从1700一路绝地反攻，回到了4000。中途我不断地逢涨减仓，卸掉了一小半的杠杆。同时把剩余资金重新在高位区间做LP。这又造成了在低位区间卖出ETH得到的USDC拿到高位区间买入，不过由于终局是向上击穿做市区间，所以这个问题就没有造成实际损失。

紧接着我们迎来了一个小幅回踩测试支撑的9月。以太从4000跳水到3000以下，并一度测试2500的支撑位。我在跌破3000的时候逢跌加仓买入了一些以太，补充了做市资金。但是由于忙于照顾大饼和UNI，以及总想抓2500的以太，导致最后还有一部分资金没有能够成功买入并投入做市。这部分剩余资金一直拿到了最后。

最后一个阶段就是10月份的高歌猛进，从3000下方一路向上，并于11/3终于突破了前高4500刀，也向上击穿了我的做市区间。LP全仓都变成了USDC。

如果单纯对比做市的收益和所谓做波段的收益，那前者确实是不如后者。但是，做市的心态会比较稳，你会感觉到有持续的现金流产生，可以用来偿还债务。当然，我们也看到了，难点在于做市区间的设定。如果被击穿的话，其实也会比较被动一些。而重调整做市区间就会带来隐性的亏损。这就会令人无比纠结。

如果做波段，能够精准地在上述复盘的几个低点买入、高点卖出的话，收益率的确会比做市好很多。只不过，能够做到这么完美的低买高卖的人，又有几个呢？

换个视角，如果从对底仓大饼做收益增强的角度看，这个策略在持有大饼不动的情况下，创造了额外的收益，这也是一个还不错的结果了。

(公众号：刘教链。知识星球：公众号回复“星球”)
(免责声明：本文内容均不构成任何投资建议。加密货币为极高风险品种，有随时归零的风险，请谨慎参与，自我负责。)