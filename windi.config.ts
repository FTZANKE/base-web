/** @type {import('windicss').Config} */
// https://cn.windicss.org/guide/
import { defineConfig } from 'vite-plugin-windicss'
import { transform } from 'windicss/helpers'

export default defineConfig({
  // 关闭属性选择器
  attributify: false,
  // 预处理器
  extract: {
    include: ['src/**/*.{vue,jsx,tsx}', 'index.html'],
    exclude: ['node_modules/**/*', '.git/**/*'],
  },
  // 别名配置 使用别名时需要加上前缀 *
  alias: {},
  // 白名单
  safelist: [],
  // 快捷方式
  shortcuts: {
    // 1. 通用 flex 布局 direction: row
    ...{
      flex_center_center: 'flex items-center justify-center',
      flex_center_start: 'flex items-center justify-start',
      flex_center_end: 'flex items-center justify-end',
      flex_center_between: 'flex items-center justify-between',
      flex_center_around: 'flex items-center justify-around',
      flex_center_evenly: 'flex items-center justify-evenly',
      flex_start_center: 'flex items-start justify-center',
      flex_start_start: 'flex items-start justify-start',
      flex_start_end: 'flex items-start justify-end',
      flex_start_between: 'flex items-start justify-between',
      flex_start_around: 'flex items-start justify-around',
      flex_start_evenly: 'flex items-start justify-evenly',
      flex_end_center: 'flex items-end justify-center',
      flex_end_start: 'flex items-end justify-start',
      flex_end_end: 'flex items-end justify-end',
      flex_end_between: 'flex items-end justify-between',
      flex_end_around: 'flex items-end justify-around',
      flex_end_evenly: 'flex items-end justify-evenly',
      flex_stretch_center: 'flex items-stretch justify-center',
      flex_stretch_start: 'flex items-stretch justify-start',
      flex_stretch_end: 'flex items-stretch justify-end',
      flex_stretch_between: 'flex items-stretch justify-between',
      flex_stretch_around: 'flex items-stretch justify-around',
      flex_stretch_evenly: 'flex items-stretch justify-evenly',
      flex_baseline_center: 'flex items-baseline justify-center',
      flex_baseline_start: 'flex items-baseline justify-start',
      flex_baseline_end: 'flex items-baseline justify-end',
      flex_baseline_between: 'flex items-baseline justify-between',
      flex_baseline_around: 'flex items-baseline justify-around',
      flex_baseline_evenly: 'flex items-baseline justify-evenly',
    },
    // 2. 通用 flex 布局 direction: column
    ...{
      flex_col_center_center: 'flex flex-col items-center justify-center',
      flex_col_center_start: 'flex flex-col items-center justify-start',
      flex_col_center_end: 'flex flex-col items-center justify-end',
      flex_col_center_between: 'flex flex-col items-center justify-between',
      flex_col_center_around: 'flex flex-col items-center justify-around',
      flex_col_center_evenly: 'flex flex-col items-center justify-evenly',
      flex_col_start_center: 'flex flex-col items-start justify-center',
      flex_col_start_start: 'flex flex-col items-start justify-start',
      flex_col_start_end: 'flex flex-col items-start justify-end',
      flex_col_start_between: 'flex flex-col items-start justify-between',
      flex_col_start_around: 'flex flex-col items-start justify-around',
      flex_col_start_evenly: 'flex flex-col items-start justify-evenly',
      flex_col_end_center: 'flex flex-col items-end justify-center',
      flex_col_end_start: 'flex flex-col items-end justify-start',
      flex_col_end_end: 'flex flex-col items-end justify-end',
      flex_col_end_between: 'flex flex-col items-end justify-between',
      flex_col_end_around: 'flex flex-col items-end justify-around',
      flex_col_end_evenly: 'flex flex-col items-end justify-evenly',
      flex_col_stretch_center: 'flex flex-col items-stretch justify-center',
      flex_col_stretch_start: 'flex flex-col items-stretch justify-start',
      flex_col_stretch_end: 'flex flex-col items-stretch justify-end',
      flex_col_stretch_between: 'flex flex-col items-stretch justify-between',
      flex_col_stretch_around: 'flex flex-col items-stretch justify-around',
      flex_col_stretch_evenly: 'flex flex-col items-stretch justify-evenly',
      flex_col_baseline_center: 'flex flex-col items-baseline justify-center',
      flex_col_baseline_start: 'flex flex-col items-baseline justify-start',
      flex_col_baseline_end: 'flex flex-col items-baseline justify-end',
      flex_col_baseline_between: 'flex flex-col items-baseline justify-between',
      flex_col_baseline_around: 'flex flex-col items-baseline justify-around',
      flex_col_baseline_evenly: 'flex flex-col items-baseline justify-evenly',
    },
  },
  plugins: [
    // 动画插件 https://cn.windicss.org/plugins/community/animations.html#usage
    transform('@windicss/plugin-animations')({
      settings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 1000,
      },
    }),
    // 滚动条插件 https://cn.windicss.org/plugins/community/scrollbar.html#usage
    transform('@windicss/plugin-scrollbar'),
    // ? 插件 https://cn.windicss.org/plugins/community/question-mark.html#usage
    transform('@windicss/plugin-question-mark'),
  ],
})
