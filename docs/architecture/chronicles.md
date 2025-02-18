# The Software Architecture Chronicles

## 参考文章

* [The Software Architecture Chronicles](https://herbertograca.com/2017/07/03/the-software-architecture-chronicles/)
* [The Software Architecture Chronicles（中文）](https://www.jianshu.com/p/b477b2cc6cfa)

## 内容介绍

《软件架构编年史》主要探讨了软件架构的发展历程，以及在学习过程中开发者可以借鉴的知识。文中提及的主要内容包括：  

1. **学习历史的重要性**：强调从历史中汲取经验，避免重复错误。  

2. **架构及编程语言的演变**：详述了各个时期的软件架构模式（如MVC、MVP等）和编程语言的演变。  

3. **软件架构模式**：  
   * MVC（Model-View-Controller）模式  
   * MVP（Model-View-Presenter）模式  
   * MVVM（Model-View-ViewModel）模式  
   * 领域驱动设计  
   * 端口和适配器架构（六边形架构）  
   * 清晰架构等  

4. **架构风格与设计模式的关系**：对架构风格、架构模式和设计模式进行了比较和讨论。  

5. **个人学习经历**：作者分享了自己的学习过程，以及如何利用这些知识提高自己的开发能力。  

6. **未来讨论的主题**：文中提及将会深入探讨多个与软件架构相关的主题，包括不同的架构风格及其适用场景。  

这种结构希望能帮助开发者在前人知识的基础上不断进步，推动现代软件开发的技术理解和应用。

## 时间线

下面是我在阅读所有这些主题的文章和书籍之后总结的一条软件开发发展的粗略的时间线。我找到的关于确切时间的参考资料都作为链接加入了时间线，拿不准的时间我都加上了"~"，表示"大约"是这个时间。我们还可以在维基百科的[编程范式主页](https://links.jianshu.com/go?to=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FProgramming_paradigm)上找到大量相关的内容。

这里列出的大多数话题都将在这个系列中谈及。

* 20 世纪 50 年代
  * 非结构化编程
  * ~1951 – 汇编
* 20 世纪 60 年代
  * 结构化编程
  * 分层: 用户界面、业务逻辑数据存储都在一层。
  * ~1958 – Algol
* 20 世纪 70 年代
  * 过程式/函数式编程
  * ~1970 – Pascal
  * ~1972 – C
  * ~1979 – MVC 模式(Model-View-Controller)
* 20 世纪 80 年代
  * 面向对象编程 (但其思想在 20 世纪 60 年代晚期已经第一次提出)
  * 分层: 两层，第一层是用户界面，第二层是业务逻辑和数据存储
  * ~1980 – C++
  * CORBA – 通用物件请求代理架构(尽管1991年才推出第一个稳定版，但最早使用可以追溯到 20 世纪 80 年代)
  * ~1986 – Erlang
  * ~1987 – Perl
  * ~1987 – PAC 即 HMVC 模式(Hierarchical Model-View-Controller)
  * ~1988 – LSP(里氏替换原则) (~SOLID)
* 20 世纪 90 年代
  * 分层: 三层，第一层是用户界面，第二层是业务逻辑(以及浏览器作为客户端时的用户界面展现逻辑)，第三层是数据存储
  * ~1991 – 消息总线
  * ~1991 – Python
  * ~1992 – EBI 架构 (Entity-Boundary-Interactor) 即 EBC 或 EIC
  * ~1993 – Ruby
  * ~1995 – Delphi, Java, JavaScript, PHP
  * ~1996 – MVP 模式(Model-View-Presenter)
  * ~1996 – OCP, ISP, DIP (~SOLID), REP, CRP, CCP, ADP
  * ~1997 – SDP, SAP
  * ~1997 – 面向方面编程
  * ~1997 – Web 服务
  * ~1997 – ESB – 企业服务总线 (尽管创造该术语的书籍2004年才出版，但这个概念早已被使用)
* 21 世纪 00 年代
  * ~2002 – SRP (~SOLID)
  * ~2003 – 领域驱动设计
  * ~2005 – MVVM 模式(Model-View-ViewModel)
  * ~2005 – 端口和适配器架构 (六边形架构)
  * ~2006 – CQRS 与 ES (命令查询职责分离与事件溯源)
  * 2008 – 洋葱架构
  * ~2009 – 微服务 (Netflix)
* 21 世纪 10 年代
  * ~2010 – DCI 架构 (Data-Context-Interaction)
  * ~2012 – 整洁架构
  * ~2014 – C4 模型
