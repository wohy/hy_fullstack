# 浮动
浮动会使文本脱离文档流，只针对DOM结构
导致ul没有高度,父容器坍塌

# 清除浮动
1. 在最后一个浮动元素的末尾再加上一个冗余的元素(与浮动元素相同的元素)，再给他设置clear:both通用;或若浮动向左，则clear:left，反之向右clear:right

2. 给父元素增加一个伪类，将它设置为块集元素，并在其中加入clear:both属性

3. BFC
    在父类元素style中加上            
    - 'overflow: hidden;',该属性将该容器声明成了一个BFC容器
    - float:right/left;
    - position:absolute;
    BFC容器自带一个属性可解决父容器坍塌问题

# margin重叠
- 解决：BFC
