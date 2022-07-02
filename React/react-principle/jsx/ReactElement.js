const ReactElement = function (type, key, ref, self, source, owner, props) {
    const element = {
        // REACT_ELEMENT_TYPE是一个常量，用来标识该对象是一个 ReactElement
        $$typeof: REACT_ELEMENT_TYPE,

        // 内置属性赋值
        type,
        key,
        ref,
        props,

        // 记录创造该元素的组件
        _owner: owner,
    }

    if(__DEV__) {
        // 这里是一些针对 __DEV__ 环境下的处理，对于大家理解主要逻辑意义不大，此处我直接省略掉，以免混淆视听
    }

    return element;
}