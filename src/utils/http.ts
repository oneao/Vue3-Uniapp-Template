import { CustomRequestOptions } from '@/interceptors/request'
import { UniCustomToast } from './uniToast'
import { ResponseStatusEnum } from '@/typings'

const uniCustomToast = UniCustomToast()

export const http = <T>(options: CustomRequestOptions) => {
  // 1. 返回 Promise 对象
  return new Promise<IResData<T>>((resolve, reject) => {
    uni.request({
      ...options,
      dataType: 'json',
      // #ifndef MP-WEIXIN
      responseType: 'json',
      // #endif
      // 响应成功
      success(res) {
        const resData = res.data as IResData<T>
        if (resData.code >= 200 && resData.code < 300) {
          resolve(res.data as IResData<T>)
        } else if (resData.code >= 400 && resData.code <= 500) {
          uniCustomToast.error({
            msg: resData.message || '请求错误',
            duration: 200000,
          })
          const pages = getCurrentPages() // 获取当前页面栈

          switch (resData.code) {
            case ResponseStatusEnum.UNAUTHORIZED:
              if (pages.length > 0) {
                const currentPage = pages[pages.length - 1] // 当前页面对象
                const currentPath = currentPage.route

                if (currentPath !== 'pages-sub/auth/login') {
                  uni.navigateTo({
                    url: '/pages-sub/auth/login',
                  })
                }
              }
          }

          reject(res)
        } else {
          uniCustomToast.error(resData.message || '请求错误')
          reject(res)
        }
      },
      // 响应失败
      fail(err) {
        uni.showToast({
          icon: 'none',
          title: '网络错误，换个网络试试',
        })
        reject(err)
      },
    })
  })
}

/**
 * GET 请求
 * @param url 后台地址
 * @param query 请求query参数
 * @returns
 */
export const httpGet = <T>(url: string, query?: Record<string, any>) => {
  return http<T>({
    url,
    query,
    method: 'GET',
  })
}

/**
 * POST 请求
 * @param url 后台地址
 * @param data 请求body参数
 * @param query 请求query参数，post请求也支持query，很多微信接口都需要
 * @returns
 */
export const httpPost = <T>(
  url: string,
  data?: Record<string, any>,
  query?: Record<string, any>,
) => {
  return http<T>({
    url,
    query,
    data,
    method: 'POST',
  })
}

http.get = httpGet
http.post = httpPost
