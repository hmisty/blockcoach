---
layout: post
title: "nostr脱白帖：Damus App手把手教程"
date: 2023-02-02 08:00:00 +0800
categories: essay
---

听说过nostr吗？

体验Damus了吗？

还不知道这款web5产品？

你可能要落伍了！

抓紧向下看。👇

最近全球web3社区疯传一个叫做nostr的去中心化社交协议。

从功能上，你可以把nostr理解为去中心化的推特平台，或者去中心化的微博；从名字上，你可以把nostr和BT/电驴这类去中心化下载协议对标。

或者说，nostr就是BT版的微博。这样可能好理解一些了。

就像BT/电驴只是一个所谓的“协议”，或者“网络”，你要想加入这个网络，使用这个协议来下载文件，还需要安装支持BT/电驴协议的客户端软件（App）。

nostr协议也是一样。

所以要使用nostr协议，或者接入nostr的去中心化网络，你还需要一个客户端软件（App）。

爱好者们开发了很多这样的客户端软件。

比如网页版的snort。直接用浏览器打开 https://snort.social 就可以使用了。

图：20230202-snort.png

安卓手机可以到谷歌官方Play商店安装Amethyst这款App。（https://play.google.com/store/apps/details?id=com.vitorpamplona.amethyst&hl=en ）

图：20230202-amethyst.png

而今天我们要手把手进行教程的，是苹果手机官方App Store刚刚上架的Damus App。（https://apps.apple.com/ca/app/damus/id1628663131 ）

这款产品由已经离开推特的推特创始人Jack Dorsey出品，值得体验。

稍微了解Jack Dorsey的朋友都知道，他离开推特后，提出了一个称之为web5的理念。那么体验Damus App，我们就能管窥web5理念究竟是怎么回事。

首先，我们打开苹果手机的官方应用商店App，在搜索栏输入“damus”进行搜索，找到Damus App的安装页面。（注：如果你搜不到，试试换个外区App Store账号）

图：20230202-damus.jpg

下载安装Damus之后，到桌面上找到它，点击打开。

首先映入眼帘的是启动页面。

图：20230202-damus01.jpg

点击下方的Create Account（创建账号）按钮。进入下一步。

图：20230202-damus02.jpg

这一页就是同意一下EULA（用户协议）。滑动到页面下方。

图：20230202-damus03.jpg

点击Accept（接受）按钮。开始创建账号。

图：20230202-damus04.jpg

这一页提示输入Username（用户名）、Display Name（呈现名）、About（关于）。后两个都是可填项。只有用户名是必填项。

用户名和呈现名的区别是这样的：以我的账号为例，用户名是“liujiaolian”（推特上可以@的），呈现名是“刘教链”。

注意下面按钮上方的那个Account ID（账号ID）。这是一个以npub1...开头的字符串。

这就是web5 App和web2 App不同之处了。

web2 App我们通常要用手机号或者email之类的东西来注册账号。而web5我们使用密码学。

一个密码分两半：公开的一半叫做公钥（npub1...），私密的一半叫做私钥（nsec1...）。

公钥就是账号地址，可以告诉别人，以便于别人找到你。

私钥绝对不可以告诉别人，那是你对账号的控制权（对，这里没有人能删你的号）。你可以用私钥登陆App。

小技巧：点击那个公钥字符串的位置，会自动重新生成一个公钥。同时上方的头像图片会自动更换哦，直到自己满意为止。

点击Create（创建）按钮。进入私钥揭示和备份页面。

图：20230202-damus05.jpg

在这一页，首先确认公钥无误。点击旁边的复制图标，把公钥复制粘贴到记事本里，以便于后续分享给别人，让别人关注你。

复制公钥后，在页面下方就会揭示对应的私钥（未截图，为防止泄露）。同样有一个复制图标，点击复制后，粘贴到秘密的、安全的文档里加以妥善备份。

提示：不要把私钥截图存在手机相册里，会被流氓软件偷走！也不要把私钥存在云盘里，会被黑客或者监守自盗者偷走！

保存私钥最安全的办法其实是脱网，也就是拿笔抄在纸上、书本上。

这一步完成之后，就进入了Damus App的主界面。

图：20230202-damus06.jpg

功能很简洁。下方四个tab分别是：首页（信息流），聊天（私信），发现，提醒。

接下来让我们来找到刘教链，并关注。

首先点击底部第三个放大镜图标，打开发现和搜索页面。

图：20230202-damus07.jpg

在上方搜索栏输入刘教链的nostr公钥（账号地址）： npub1dlwqsauewd56dekrnuxh8xukvg7pgeelwp39qah8ts5x28tmf7pqp5tcp3 

图：20230202-damus08.jpg

点击Go to profile npub1...那一行字，进入刘教链的个人页。

图：20230202-damus09.jpg

再次比对一下公钥是否匹配，以确信是真的刘教链，而不是冒充的。

确认后，点击头像右边👉的Follow（关注）按钮，关注刘教链。成功关注后，Follow按钮会反转成Unfollow（取关）。

点击左下角的房子图标，回到首页。

等待信息流刷新后，就能看到刘教链发的推文了。（由于去中心化网络靠自愿设立的中继服务器转发信息，所以刷新会有些小慢，耐心等一会儿）

图：20230202-damus10.jpg

好了。以上就是Damus App的全部教程。

恭喜你，已经成功踏入了web5的世界！

* * *

尾声：至于为什么Jack Dorsey发明web5这个概念，并调侃web5 = web2 + web3，可能是看不惯过去一两年web3歪风越演愈烈的问题吧？

币圈的web3是什么？就拿最典型的web3成功代表A和S来说：web2中心化系统 + 发币上所割韭菜 = web3。这就是目前的web3公式。

Jack Dorsey的web5又是什么？可以说是：类似BT那样的分布式系统（去中心化网络） + 比特币/闪电网络（平台不发币，就用比特币） = web5。

孰高孰低，孰对孰错，时间将会证明。

但是开放的nostr去中心化网络，相比于传统的web2封闭式系统而言，任何客户端、开发者都可以自由接入，互联互通起来，其网络效应和爆发力是惊人的！

不管怎样，可以肯定的是，Damus的上线，极大的降低了nostr的体验门槛，有可能成为nostr普及的一个引爆点。

而nostr和Damus的普及，又必然会拉动比特币闪电网络的应用和发展。

Damus越成功，比特币越受益。

干得漂亮，Jack Dorsey！

希望nostr和Damus的爆红，也能形成一股正能量的示范效应，带动真正的web2/web3/web5创新积极涌现！

* * *

还想进一步学习比特币的知识？推荐《刘教链比特币原理音频课（已连载完结）》（点击此处即可打开学习）。

(公众号/同名推特：刘教链。知识星球：公众号回复“星球”)
(免责声明：本文内容均不构成任何投资建议。加密货币为极高风险品种，有随时归零的风险，请谨慎参与，自我负责。)
