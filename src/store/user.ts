import { defineStore } from 'pinia'
import { ref } from 'vue'

const initState = { token: '', orgid: '', userid: '' }

export const useUserStore = defineStore(
  'user',
  () => {
    const userInfo = ref<IUserInfo>({ ...initState })

    const setUserInfo = (val: IUserInfo) => {
      userInfo.value = val
    }

    const clearUserInfo = () => {
      userInfo.value = { ...initState }
    }
    // 一般没有reset需求，不需要的可以删除
    const reset = () => {
      userInfo.value = { orgid: userInfo.value.orgid, userid: userInfo.value.userid, token: '' }
    }
    // 机构码 和 用户id有一个为空就返回 false
    const isLogined = computed(
      () => !!(userInfo.value.token && userInfo.value.orgid && userInfo.value.userid),
    )

    return {
      userInfo,
      setUserInfo,
      clearUserInfo,
      isLogined,
      reset,
    }
  },
  {
    persist: true,
  },
)
