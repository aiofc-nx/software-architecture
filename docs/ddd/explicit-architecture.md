# Explicit Architecture

明确的架构

## 参考文章

* [Explicit Architecture](https://herbertograca.com/2017/11/16/explicit-architecture-01-ddd-hexagonal-onion-clean-cqrs-how-i-put-it-all-together/)

## 文章结构

* 系统的基本构件（Fundamental blocks of the system）
* 工具（Tools）
* 将工具和交付机制连接到应用核心（Connecting the tools and delivery mechanisms to the Application Core）
  * 端口（Ports）
  * 主适配器或驱动适配器（Primary or Driving Adapters）
  * 次适配器或被驱动适配器（Secondary or Driven Adapters）
  * 控制反转（Inversion of control）
* 应用核心组织（Application Core Organisation）
  * 应用层（Application Layer）
  * 领域层（Domain Layer）
    * 领域服务（Domain Services）
    * 领域模型（Domain Model）
* 组件（Components）
  * 组件解耦（Decoupling the components）
    * 在其他组件中触发逻辑（Triggering logic in other components）
    * 从其他组件获取数据（Getting data from other components）
      * 组件之间共享的数据存储（Data storage shared between components）
      * 每个组件隔离的数据存储（Data storage segregated per component）
* 控制流（Flow of control）

![EIB](https://herbertograca.com/wp-content/uploads/2017/04/fig_7_12_entity_interface_control.jpg)

![Imgur](https://i.imgur.com/Cl21coE.jpeg)

## 系统的基本构件（Fundamental blocks of the system）

* 应用核心（Application Core）
* 领域模型（Domain Model）
* 基础设施（Infrastructure）
