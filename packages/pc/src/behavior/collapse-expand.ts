import { G6Event, IG6GraphEvent } from '@antv/g6-core';

const DEFAULT_TRIGGER = 'click';
const ALLOW_EVENTS = ['click', 'dblclick'];
export default {
  getDefaultCfg(): object {
    return {
      /**
       * 发生收缩/扩展变化时的回调
       */
      trigger: DEFAULT_TRIGGER,
      onChange() { },
    };
  },
  getEvents(): { [key in G6Event]?: string } {
    let trigger: string;
    // 检测输入是否合法
    if (ALLOW_EVENTS.includes(this.trigger)) {
      ({ trigger } = this);
    } else {
      trigger = DEFAULT_TRIGGER;
      // eslint-disable-next-line no-console
      console.warn("Behavior collapse-expand 的 trigger 参数不合法，请输入 'click' 或 'dblclick'");
    }
    return {
      [`node:${trigger}`]: 'onNodeClick',
      // 支持移动端事件
      touchstart: 'onNodeClick',
    };
  },
  onNodeClick(e: IG6GraphEvent) {
    const { item } = e;
    if (!item) return;

    // 如果节点进行过更新，model 会进行 merge，直接改 model 就不能改布局，所以需要去改源数据
    const sourceData = this.graph.findDataById(item.get('id'));
    if (!sourceData) {
      return;
    }

    const { children } = sourceData;
    // 叶子节点的收缩和展开没有意义
    if (!children || children.length === 0) {
      return;
    }
    const collapsed = !sourceData.collapsed;
    if (!this.shouldBegin(e, collapsed, this)) {
      return;
    }
    sourceData.collapsed = collapsed;
    item.getModel().collapsed = collapsed;
    this.graph.emit('itemcollapsed', { item: e.item, collapsed });
    if (!this.shouldUpdate(e, collapsed, this)) {
      return;
    }
    this.onChange(item, collapsed, this);
    this.graph.layout();
  },
};
