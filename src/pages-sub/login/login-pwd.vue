<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '登录页面',
  },
}
</route>

<template>
  <view class="g3-container">
    <view class="g3-header">
      <view class="g3-header-title">登录</view>
      <view class="g3-header-prompt">欢迎登录！</view>
    </view>
    <view class="g3-content">
      <view class="g3-content-form">
        <view class="g3-content-form-item">
          <view class="label">机构码</view>
          <view>
            <wd-input v-model="formModel.orgid" custom-class="input" use-prefix-slot>
              <template #prefix>
                <view class="i-material-symbols:domain icon" />
              </template>
            </wd-input>
          </view>
        </view>

        <view class="g3-content-form-item">
          <view class="label">账号</view>
          <view>
            <wd-input v-model="formModel.userid" custom-class="input" use-prefix-slot>
              <template #prefix>
                <view class="i-material-symbols:person icon" />
              </template>
            </wd-input>
          </view>
        </view>

        <view class="g3-content-form-item">
          <view class="label">密码</view>
          <view>
            <wd-input
              v-model="formModel.password"
              show-password
              custom-class="input"
              use-prefix-slot
            >
              <template #prefix>
                <view class="i-material-symbols:lock-outline icon" />
              </template>
            </wd-input>
          </view>
          <!-- <view><wd-button type="text">忘记密码？</wd-button></view> -->
        </view>
      </view>
    </view>
    <view class="g3-footer">
      <view>
        <wd-button
          v-if="!actionModel.loginButtonLoading"
          @click="handleLogin()"
          block
          class="login-button"
        >
          <view class="i-carbon:logo-pinterest"></view>
          登录
        </wd-button>
        <wd-button v-else loading block class="login-button">正在登录中，请稍等...</wd-button>
      </view>
      <view class="divider"></view>
      <!-- <view class="register">
          还没有注册？
          <wd-button type="text">注册</wd-button>
        </view> -->
    </view>
  </view>
</template>

<script lang="ts" setup>
import { useToast } from 'wot-design-uni'
import { useUserStore } from '@/store'

const toast = useToast()
const userStore = useUserStore()

// 登录表单对象
const formModel = reactive<{
  orgid: string
  userid: string
  password: string
}>({
  orgid: userStore.userInfo.orgid,
  userid: userStore.userInfo.userid,
  password: '',
})

onLoad(() => {})
const actionModel = reactive<{
  loginButtonLoading: boolean
}>({
  loginButtonLoading: false,
})
function handleLogin() {
  if (formModel.orgid === '') {
    toast.error({
      msg: '机构码不能为空',
    })
    return
  }
  if (formModel.userid === '') {
    toast.error({
      msg: '账号不能为空',
    })
  }

  // actionModel.loginButtonLoading = true
  // loginByCustApi({
  //   orgid: formModel.orgid,
  //   userid: formModel.userid,
  //   password: formModel.password,
  // })
  //   .then((res) => {
  //     if (res.code === 200) {
  //       userStore.setUserInfo({
  //         token: res.data,
  //         orgid: formModel.orgid,
  //         userid: formModel.userid,
  //       })
  //       toast.success({
  //         msg: '登录成功，请稍等...',
  //       })
  //       uni.switchTab({ url: '/pages/index/index' })
  //     }
  //   })
  //   .catch(() => {
  //     actionModel.loginButtonLoading = false
  //   })
}
</script>

<style lang="scss" scoped>
.g3-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2em;
  margin: 0 auto;
  font-family: 'Inter', sans-serif; /* 设置字体为Inter */
}
.g3-header {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  .g3-header-title {
    font-size: 24px;
    font-weight: bold;
    color: #575dfb;
  }
  .g3-header-prompt {
    font-size: 16px;
    color: #666; /* 提示文字颜色稍微调淡 */
  }
}
.g3-content {
  width: 100%; /* 宽度调整为100%，以适应容器大小 */
  .g3-content-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    .g3-content-form-item {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      .label {
        font-size: 14px;
        font-weight: 500;
      }
      ::v-deep .input {
        display: flex;
        align-items: center;
        padding: 0.3rem;
        border: 2px solid #0498e1 !important;
        border-radius: 10px;
        &::after {
          display: none;
        }
        .icon {
          font-size: 20px;
          color: #575dfb;
        }
      }
    }
  }
}
.g3-footer {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%; /* 宽度调整为100% */
  text-align: center;
  ::v-deep .login-button {
    height: 3rem;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 10px;
    .wd-button__text {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      justify-content: center;
    }
  }
  .register {
    font-size: 14px;
    color: #666;
  }
}
</style>
