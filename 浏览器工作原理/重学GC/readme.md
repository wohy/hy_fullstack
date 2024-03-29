# nodeJs 中的内存管理
node 端的内存泄漏问题：
  对于持续运行的服务器进程 Node 服务器端程序，必须及时释放不再用到的内存。否则内存占用会越来越大，轻则影响系统性能，重则导致系统崩溃

# v8 内存管理
所以内存占用(Reesident Set) 
包括了
  {
    代码区域(Code Segment),
    栈(Stack) {存储 本地变量、指针}，
    堆(HeapTotal) {存储 对象、 闭包；又分出了 {heapUsed 即代表使用到的堆}}
  }

## 内存泄漏
  当 heapUsed 使用到的堆占用的空间越来越大时，表示出现了内存泄漏问题

## v8 为何要限制内存大小
  因为 V8 的垃圾收集工作原理导致的，1.4G 内存完全一次垃圾收集需要 1s 以上
  这个暂停时间成为 Stop The World ，在这个期间内，应用的性能和响应能力都会下降

## 打开内存限制
一旦初始化成功，生效后就不能在修改
修改字段：
  1. 执行 node --max-old-space-size = 2000 (单位为 MB，改变最大 老生代 空间大小 为 2000mb，old space执行 MarkSweep 回收)
  2. 执行 node --max-new-space-size = 1024 (单位为 KB，改变最大 新生代 空间大小 为 1024KB，new space执行 scavenge 回收)


# v8 垃圾回收
V8 中的垃圾回收时分代进行的，按存活时间 分为 新生代 和 老生代，不同代的垃圾回收机制也不一样

## 分代
1. 新生代
  年龄小的是新生代，由 From 区域 和 To 区域 两个区域组成
    - 在64位系统中，新生代内存是 32M ，From 区域 和 To 区域各占用 16M
    - 在32位系统中，新生代内存是 16M ，From 区域 和 To 区域各占用 8M

  - 特征：

2. 老生代
  年龄大的是老生代，默认情况下
  - 64 位系统下老生代内存为 1400 M
  - 32 位系统下老生代内存为 700 M


## 回收
  - 新生代回收：
    1. 将 From 区域中的 存活的对象 拷贝到 To 区域中(判断存活的对象时，是一个广度优先遍历的过程，如果一个节点引用了其他节点，则其他节点都会被拷贝到 to 区域中，紧接着遍历其他节点，是否引用了其他数据，该过程定义了两个指针，一个 扫描指针，一个分配指针，指向空的区域空间，扫描指针确定节点引用的数据，分配指针在 TO区域中，给引用计数大于 1 的节点分配空间)，死亡的就保留在 From 区域中
    2. 接着将 From 区域清空，
    3. 完成后，调换 From 和 To 区域，又执行一次步骤一，将 To 中的存活对象 拷贝到 From 区域中
    4. 接着执行 步骤2 将 To 区域清空
    5. 接着又交换 To 和 From 区域

    依此步骤循环

    6. 如果 一个 对象存活时间很长时(即几次回收后都还存在)，该对象就会 升级到老生代中


  - 老生代回收
    1. 标记清除
      标记出 活着的对象，标记完后将 死的对象清除
      - 缺点：会形成内存碎片，由于内存的连续分配，所以过多的内存碎片，导致一些本可以存下的较大数据，将不能存储
    
    2. 标记整理
      标记死亡后，会对对象进行整理，活着的对象往左移动，移动完成后直接清理掉边界外的内存
      不会造成内存碎片

    3. 增量标记
      在 js 执行的过程中，嵌入垃圾回收的标记
      减轻垃圾回收造成的全停顿问题带来的影响

    - 一般的实际使用：
      标记清除 和 标记整理 一起工作，进行过多次标记清除产生了空间碎片后，在嵌入一次标记整理操作
      


  - 判断活的 和 死的
    引擎维护这一整引用表，保存了内存里面所有的资源的应用次数
    当当前值没有被引用时，其子节点(即被其引用的对象) 和 其本身都将会被认为是死的，即将被回收

## 获取当前代码中的全局变量
  通过 控制台 的 memory 来拍快照，之后还可以通过 filter 来追踪某一个对象，可以通过 distance 属性来判断离根对象(即 global 全局)的层级距离