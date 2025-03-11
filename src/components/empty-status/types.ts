export const emptyStatusProps = {
  /**
   * 缺省图片类型，支持传入图片 URL。
   * 类型: string
   * 可选值: search, network, content, collect, comment, halo, message
   * 默认值: 'network'
   */
  mode: {
    type: String as PropType<string>,
    default: 'content', // 默认为 'content' 类型的图片
  },

  /**
   * 图片大小，默认单位为 `px`。
   * 类型: string 或 number 或 ImageSize
   * 默认值: 空字符串
   */
  imageSize: {
    type: [String, Number, Object] as PropType<string | number | { width: number; height: number }>,
    default: '', // 默认无大小限制
  },

  /**
   * 提示文案。
   * 类型: string
   * 默认值: 空字符串
   */
  tip: {
    type: String as PropType<string>,
    default: '', // 默认无提示文案
  },

  /**
   * 图片裁剪、缩放的模式
   * 类型: string
   * 默认值：'aspectFill'
   */
  imageMode: {
    type: String as PropType<string>,
    default: 'aspectFill', // 默认为 'aspectFill'，即保持图片的长宽比例裁剪填充
  },
}
