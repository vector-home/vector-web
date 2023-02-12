
let loadingInstance

export default {
  // 消息提示
  msg (content) {
    this.$message.info(content)
  },
  // 错误消息
  msgError (content) {
    this.$message.error(content)
  },
  // 成功消息
  msgSuccess (content) {
    this.$message.success(content)
  },
  // 警告消息
  msgWarning (content) {
    this.$message.warning(content)
  },
  // 弹出提示
  alert (content) {
    this.$messageBox(content, '系统提示')
  },
  // 错误提示
  alertError (content) {
    this.$alert(content, '提示', { type: 'error' })
  },
  // 成功提示
  alertSuccess (content) {
    this.$alert(content, '提示', { type: 'success' })
  },
  // 警告提示
  alertWarning (content) {
    this.$alert(content, '提示', { type: 'warning' })
  },
  // 通知提示
  notify (content) {
    this.$notify.info(content)
  },
  // 错误通知
  notifyError (content) {
    this.$notify.error(content)
  },
  // 成功通知
  notifySuccess (content) {
    this.$notify.success(content)
  },
  // 警告通知
  notifyWarning (content) {
    this.$notify.warning(content)
  },
  // 确认窗体
  confirm (content) {
    return this.$messageBox.confirm(content, '系统提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    })
  },
  // 提交内容
  prompt (content) {
    return this.$messageBox.prompt(content, '系统提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    })
  },
  // 打开遮罩层
  loading (content) {
    loadingInstance = this.$loading({
      lock: true,
      text: content,
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)',
    })
  },
  // 关闭遮罩层
  closeLoading () {
    loadingInstance.close()
  }
}
