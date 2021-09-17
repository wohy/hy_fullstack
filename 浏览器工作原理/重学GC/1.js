console.log(process.memoryUsage());
// {
//   rss: 19,382,272,     // 所有内存占用，包括指令区和堆栈 19M
//   heapTotal: 4,067,328, // 堆 占用的内存，包括用到的和没用到的 4M
//   heapUsed: 2,395,392, // 用到的堆的部分。判断内存泄漏，以 heapUsed 字段为准 2M
//   external: 816,688,   // v8 引擎内部 C++ 对象占用的内存 816K
//   arrayBuffers: 9,386  // 9k
// }





