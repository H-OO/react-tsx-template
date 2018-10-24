/**
 * rem自适应
 * 设备基准宽度375px html字体100px body字体16px
 * 指定body的高度，防止界面压缩导致样式错乱
 */
interface I_Rem {
  init: () => void; // 初始化方法
  setFontSize: () => void; // 设置字体大小
  onresize: () => void; // 监听窗口事件，重新设置字体大小
}

class Rem implements I_Rem {
  public init() {
    this.setFontSize();
    this.onresize();
  }
  public setFontSize() {
    const _doc: Document = window.document;
    const w: number = window.innerWidth;
    // html字体大小动态计算公式
    const htmlFontSize: number = (w / 375) * 100;
    // 设置html标签字体大小
    const html: HTMLElement = _doc.querySelector('html');
    html.style.fontSize = htmlFontSize + 'px';
    // 设置body标签字体大小
    const body: HTMLElement = _doc.querySelector('body');
    body.style.fontSize = '16px'; // body默认16px
  }
  public onresize() {
    interface I_processor {
      timer: any;
      todo: () => void;
      process: () => void;
    }
    const processor: I_processor = {
      // 定时器
      timer: null,
      // 想执行的操作
      todo: () => {
        // console.log('todo...');
        // 重新设置字体大小
        this.setFontSize();
      },
      // 节流：触发方法先清除上一个定时器
      process: () => {
        clearTimeout(processor.timer);
        processor.timer = setTimeout(() => {
          processor.todo();
        }, 100)
      }
    };
    // 监听窗口变化事件
    window.addEventListener('resize', () => {
      processor.process();
    });
  }
}

export default Rem;
