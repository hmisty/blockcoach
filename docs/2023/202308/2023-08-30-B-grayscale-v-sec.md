# 灰度胜诉SEC的细节

今日荐读：8.29教链内参《灰度赢得对SEC的上诉，BTC打破平静迅速突破》。8.30刘教链文章《7nm的传奇》。

---

隔夜比特币发力上行，从26k下方跃至27k上方，一度突破28k。其所受利好刺激，自然是晚间传出的灰度就GBTC信托转换为现货ETF被SEC拒绝一事上诉至DC Circuit（哥伦比亚特区上诉法庭）获得法庭支持。法庭批准了灰度的请求，撤销了SEC的拒绝命令。这相当于是要求SEC重新审查灰度GBTC转为ETF的申请或对其拒绝做出进一步的解释。

教链抽了一点儿时间通读了以下法庭的判决书全文，将其中细节之处摘抄出来，分享给大家。

20230830-B01.png

值得说明的是，判决书说了，不管行政机构的决定是合理的还是无理的，法庭都不会以其判断取代SEC的判断。相反的，法庭只需确保SEC会考虑相关问题，并有效解释他们的决定。

20230830-B02.png

灰度的主要抗辩立足点在于，SEC批准了若干比特币期货ETP（ETF产品），但没有批准一支现货ETP，这是“双标”，是“歧视”，是“区别对待”。而法庭经过分析，基本认可灰度的观点。

20230830-B03.png

20230830-B04.png

法庭分析了SEC拒绝灰度的转换申请的核心原因就是“不能防止欺诈和操纵”。特别地，SEC发现，比特币的特性使得其本身（在链上）就是不能满足防止欺诈的条件，因此，SEC转而要求ETP产品要和一个“足够重大的市场”建立一个“监控共享协议”（surveillance sharing agreement）。在此前贝莱德申请比特币现货ETF的时候，我们就看到他们和coinbase签署了这个协议。

那么，此前通过审批的期货ETP是和哪个市场签的协议呢？芝商所（CME）。芝商所的上级监管部门是CFTC（美国商品期货交易委员会），不是SEC。

但是到了现货ETP这里，没有哪一个合规现货交易平台通过了SEC的“重大市场测试”（significant market test）。

20230830-B05.png

那么，SEC心目中的“重大市场”或者“具有重大规模的市场”到底是什么样子的呢？有两点：

第一，任何一个想操纵该ETP产品价格的人，都必须到这个受监控的市场来交易，才能达到其目的。这一条的意思是说，不能说某个庄家到一个不受美国监管的离岸平台（比如那啥啥CEX吧）上面一顿猛拉猛砸，竟然就撼动了全球价格，然后因为自然搬砖，与这个ETP产品共享监控数据的合规平台上的价格也受到影响了，导致ETP产品的韭菜们被割了。但是，由于庄家是“隔山打牛”，他本身没有在这个受监控的合规平台上留下任何蛛丝马迹，导致SEC想抓他都找不到任何证据。

第二，该ETP产品自身的交易不能成为这个受监控的合规平台上比特币价格的主要影响力量。这一条的意思是说，这个合规平台的深度和流动性应该非常非常大，它的价格应该是和全球市场保持同步，而不能因为上面有个ETP产品在交易，导致合规平台上的价格和全球价格出现差价。这样ETP和监控的意义就都失去了。

灰度向法庭提交的抗辩是：现货和期货价格相关性极高。既然期货ETP能够批准，说明期货ETP是能够找到足够重大的市场（也就是芝商所CME）来满足SEC心目中的监控条件的。那么SEC凭什么觉得现货就不行呢？

法庭反问SEC，为什么灰度持有比特币现货而不是期货，就据此认为CME会因此而失去欺诈操纵监控的效果了呢？

法庭判决：

20230830-B06.png

「为了避免任意性和随意性，行政裁决必须具有连贯性和可预测性，遵循类案同判的基本原则。 纽约证券交易所 Arca 提供了大量证据，证明灰度在相关监管因素上与比特币期货 ETP 相似。 SEC 未能充分解释为什么它批准了两个比特币期货 ETP 上市，但没有批准灰度提议的比特币 ETP。 在缺乏连贯的解释的情况下，这种对类似产品的不同监管处理是非法的。 因此，我们批准灰度的审查请求并撤销 SEC 的命令。

「于是下令。」

