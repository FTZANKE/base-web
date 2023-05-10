import SvgIcon from './SvgIcon.vue'
import { ElMessage, ElMessageBox, ElNotification, ElLoading } from 'element-plus'
import 'element-plus/lib/components/message/style/css'
import 'element-plus/lib/components/message-box/style/css'
import 'element-plus/lib/components/notification/style/css'

export default {
  install(app) {
    app.component('SvgIcon', SvgIcon)
    app.component('ElMessage', ElMessage) // Message 消息提示
    app.component('ElMessageBox', ElMessageBox) // MessageBox 弹框
    app.component('ElNotification', ElNotification) // Notification 通知
    app.component('ElLoading', ElLoading) // Loading 加载
  },
}
