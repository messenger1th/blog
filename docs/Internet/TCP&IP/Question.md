## **为什么需要三次握手?**

1. 阻⽌重复历史连接的初始化（主因)
   1. 当旧的SYN报⽂先到达服务端，服务端回⼀个ACK+SYN报⽂ 
   2. 客户端收到后可以根据⾃身的上下⽂，判断这是⼀个历史连接（序列号过期或超时），那么客户端就会发送 RST 报⽂给服务端，表示中⽌这⼀次连接。 
   3. 两次握⼿在收到服务端的响应后开始发⽣数据，不能判断当前连接是否是历史连接。 三次握⼿可以在客户端准备发送第三次报⽂时，客户端因有⾜够的上下⽂来判断当前连接是否是历史连接
2. 同步双⽅的初始序列号 
   1. ⼀来⼀回，才能确保双⽅的初始序列号能被可靠的同步
   2. 两次握⼿只保证了⼀⽅的初始序列号能被对⽅成功接收，没办法保证双⽅的初始序列号都能被确认接收。
3. 避免资源浪费
   1. 两次握⼿会造成消息滞留情况下，服务器重复接受⽆⽤SYN 报⽂，⽽造成重复分配资源.
   2. 只有两次握⼿时，如果客户端的SYN请求连接在⽹络中阻塞，客户端没有收到服务端的ACK报⽂，会重新发送 SYN。 
   3. 由于没有第三次握⼿，服务器不清楚客户端是否收到了⾃⼰发送的建⽴连接的 ACK 确认信号，所以每收到⼀ 个 SYN 就只能先主动建⽴⼀个连接。



**第三次握手Client发送ACK后, 若丢包,  Server没进入ESTABLISHED状态, 而Client发送数据, 会发生什么?**

* Server发送SYN-ACK报文后会进入TCP重传计时, 超时则重发SYN-ACK

* 若此时Client直接发送数据, Server会发送RST报文关闭TCP连接.

**三次握手过程中可以携带数据吗?**

* 其实第三次握手的时候，是可以携带数据的。但是，**第一次、第二次握手不可以携带数据**。

* 为什么这样呢?大家可以想一个问题，假如第一次握手可以携带数据的话，如果有人要恶意攻击服务器，那他每次都在第一次握手中的 SYN 报文中放入大量的数据。因为攻击者根本就不理服务器的接收、发送能力是否正常，然后疯狂着重复发 SYN 报文的话，这会让服务器花费很多时间、内存空间来接收这些报文。

**如果仅采用用两次握手, 只要Server发出ACK到Client接收, 就建立连接?**

* 如果网络拥堵, Client之前发送的失效ACK在网络滞留,后再发送给Server, Server接收到直接进入`ESTABLISHED`, 而此时Client已经`CLOSED`, 白白等待时间, 浪费资源.

**SYN攻击: 伪造不同IP发送SYN报文, 使得Server的半连接队列占满, 避免方式?**

1. 扩大半连接队列
2. 缩短服务端超时重传时间, 使Server尽早丢弃⽆⽤连接.
3. 当半连接队列满时，启动syn cookie,后续连接不进⼊半连接队列，⽽是计算⼀个cookie值，作为请求报⽂序列号发 送给客户端，如果服务端收到客户端确认报⽂，会检查ack包合法性，如果合法直接加⼊到accept队列.



**为什么SYN需要消耗一个序号?**

* [networking - Why does a SYN or FIN bit in a TCP segment consume a byte in the sequence number space? - Stack Overflow](https://stackoverflow.com/questions/2352524/why-does-a-syn-or-fin-bit-in-a-tcp-segment-consume-a-byte-in-the-sequence-number/2399224?r=SearchResults#2399224)

* 原因是 SYN 和 FIN 信号都是需要 acknowledgement 的，也就是你必须回复这个信号，如果它不占有一个字节的话，要如何判断你是回复这个信号还是回复这个信号之前的包呢？

  例如：如果 FIN 信号不占用一个字节，回复 FIN 的 ack 包就可能被误认为是回复之前的数据包被重新发送了一次，第二次挥手无法完成，连接也就无法正常关闭了。



## **为什么需要四次挥手？**

* 这是因为 TCP 不允许连接处于`半打开状态`时就单向传输数据，所以在三次握手建立连接时，服务器会把 ACK 和 SYN 放在一起发给客户端，其中，ACK 用来打开客户端的发送通道，SYN 用来打开服务器的发送通道。这样，原本的四次握手就降为三次握手了。
* 但是当连接处于`半关闭状态`时，TCP 是允许单向传输数据的。为便于理解，我们把先关闭连接的一方叫做主动方，后关闭连接的一方叫做被动方。当主动方关闭连接时，被动方仍然可以在不调用 close 函数的状态下，长时间发送数据，此时连接处于**半关闭状态**。这一特性是 TCP 的`双向通道互相独立所致`，却也使得关闭连接必须通过四次挥手才能做到。
* 第⼀次ACK应答报⽂可以省略，因为下⼀个报⽂段携带了ACK信息，ACK是否出现取决于延迟确认特性。 
* 延迟确认：即接收⽅收到包后，如果暂时没有内容回复给发送⽅，则延迟⼀段时间再确认，假如在这个时间范 围内刚好有数据需要传输，则和确认包⼀起回复。这种也被称为数据捎带。延迟确认只是减轻⽹络负担，未必 可以提升⽹络性能，有些情况下反⽽会影响性能.



**为什么 TIME_WAIT 等待的时间是 2MSL？**

1. MSL是 Maximum Segment Lifetime，报⽂最⼤⽣存时间，它是任何报⽂在⽹络上存在的最⻓时间，超过这 个时间报⽂将被丢弃。
2. 等待MSL两倍：⽹络中可能存在发送⽅的数据包，当这些发送⽅的数据包被接收⽅处理后⼜会向对⽅发送响 应，所以⼀来⼀回需要等待 2 倍的时间。 
3. 2MSL 的时间是从客户端接收到 FIN 后发送 ACK 开始计时的。如果在 TIME-WAIT 时间内，因为客户端的 ACK 没有传输到服务端，客户端⼜接收到了服务端᯿发的 FIN 报⽂，那么 2MSL 时间将重新计时.



**为什么需要 TIME_WAIT 状态？**

1. 防止**已失效的连接请求报文段**出现在新的连接中.客户端在发送完最后一个`ACK 报文`后，再经过时间`2MSL`，就可以使由于网络不通畅产生的滞留报文段失效.
2. 最后一次的ACK丢包, Server未能关闭连接, 继而重发FIN, 正常的新连接可能因此关闭. 所以**TIME_WAIT状态就是用来重发可能丢失的ACK报文**.



**TIME_WAIT 过多有什么危害？**

1. 内存资源占⽤；  
2. 对端⼝资源的占⽤，⼀个 TCP 连接⾄少消耗⼀个本地端⼝；可能无端口剩余, 无法创建新连接.

​	**解决办法**: 打开系统的TIMEWAIT重用和快速回收

* 修改TIME_WAIT连接状态的上限值

- 启动快速回收机制
- 开启复用机制
- 修改短连接为长连接方式
- 由客户端来主动断开连接