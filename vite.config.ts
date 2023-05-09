/** @type {import('vite').UserConfig} */
import { defineConfig, ConfigEnv, loadEnv, UserConfig, PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import WindiCSS from 'vite-plugin-windicss'
import Legacy from '@vitejs/plugin-legacy'

const path = require('path')

// https://cn.vitejs.dev/config/
export default ({ mode }: ConfigEnv) => {
  const root = process.cwd() as string
  const ENV = { ...loadEnv(mode, process.cwd()) } as ImportMetaEnv
  console.log(ENV)
  console.log(`\x1B[31m当前环境：${ENV.VITE_APP_ENV}\x1B[0m`)

  return defineConfig({
    root, // 项目根目录
    base: ENV.VITE_APP_BASE_URL, // 生产环境下的公共路径
    plugins: [
      vue(), // Vue 3 插件
      Components({
        resolvers: [ElementPlusResolver()], // 自动导入的组件解析器
        extensions: ['vue'], // 自动导入的组件文件后缀
        dts: path.resolve(root, 'src/types/global-components.d.ts'), // 自动导入的组件类型声明文件
      }), // 自动导入组件插件
      AutoImport({
        resolvers: [ElementPlusResolver()], // 自动导入的组件解析器
        imports: ['vue', '@vueuse/core', 'vue-router', 'pinia', 'vue-i18n'], // 自动导入的组件
        include: [/\.[tj]sx?$/, /\.vue$/], // 自动导入的组件文件后缀
        dts: path.resolve(root, 'src/types/auto-imports.d.ts'), // 自动导入的组件类型声明文件
        eslintrc: {
          enabled: true, // 是否启用eslint
          filepath: path.resolve(root, 'src/types/.eslintrc-auto-import.json'), // eslint配置文件
          globalsPropValue: true, // 是否启用全局变量
        }, // eslint配置
      }), // 自动导入依赖插件
      createSvgIconsPlugin({
        iconDirs: [path.resolve(root, 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }), // svg图标插件
      VueJsx(), // Vue 3 jsx插件
      VueSetupExtend(), // Vue 3 setup插件
      WindiCSS(), // windicss插件
      Legacy({
        targets: ['defaults', 'not IE 11'],
        renderLegacyChunks: true,
      }),
    ] as (PluginOption | PluginOption[])[], // 自定义插件
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
        'vue': 'vue/dist/vue.esm-bundler.js',
        'vue-router': 'vue-router/dist/vue-router.esm-bundler.js',
      }, // 别名
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/assets/styles/variables.scss";',
        },
      }, // scss全局变量
      devSourcemap: true, // 开发环境下是否生成sourcemap
    },
    json: {
      namedExports: true, // 是否导出json文件
      stringify: true, // 是否转换json文件
    },
    server: {
      host: true,
      port: Number(ENV.VITE_APP_SERVER_PORT),
      open: true,
      strictPort: false,
      proxy: {
        '/api': {
          target: ENV.VITE_APP_BASE_API_URL,
          changeOrigin: true,
          secure: false,
          rewrite: path => path.replace(/^\/api/, ''),
        },
      },
    },
    esbuild: {
      pure: ENV.VITE_APP_DROP_CONSOLE === 'true' ? ['console.log', 'debugger'] : [],
    },
    build: {
      outDir: 'dist', // 构建输出目录
      minify: 'terser', // 构建压缩方式 "terser" | "esbuild"
      terserOptions: {
        compress: {
          drop_console: ENV.VITE_APP_DROP_CONSOLE === 'true', // 是否删除console
          drop_debugger: ENV.VITE_APP_DROP_CONSOLE === 'true', // 是否删除debugger
          passes: 2, // 压缩次数
        },
      }, // 构建压缩配置 (terser)
      sourcemap: false, // 是否生成sourcemap
      assetsInlineLimit: 4096, // 静态资源内联大小
      chunkSizeWarningLimit: 2000, // 代码块大小警告限制 (kb)
      manifest: true, // 是否生成manifest.json
    }, // 构建配置
  }) as UserConfig
}
