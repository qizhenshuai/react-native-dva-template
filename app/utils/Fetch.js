
import RNFetchBlob from 'react-native-fetch-blob'

export async function get(url, successCallBack, failCallBack) {
  try {
    let data = await RNFetchBlob.fetch('GET', url, Header)
    if (data.respInfo.status === 200) {
      return successCallBack(await data.json())
    } else {
      return failCallBack(data.json())
    }
  } catch ( error ) {
    failCallBack(error)
  }
}

export async function post(url, body, successCallBack, failCallBack) {
  
  // Header.body = JSON.stringify(body);
  
  // let Header={
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json',
  //     body:body
  // }
  // RNFetchBlob.config(Request.PostConfig);
  
  // let header = JSON.stringify(Header);
  // header.body = '111';
  
  // console.log(JSON.stringify(body));
  // console.log(header);
  
  try {
    let data = await RNFetchBlob.fetch('POST', url, Header,
      JSON.stringify(body))
    if (data.respInfo.status === 200) {
      return successCallBack(await data.json())
    } else {
      console.log(data)
      return failCallBack(data.json())
    }
  } catch ( error ) {
    console.log(error)
    failCallBack(error)
  }
}

/***
 * @param url       请求网址
 * @param params    请求参数
 * @param method    请求类型z`
 * @param header    请求头
 * @returns {Promise}
 */
export async function fetch({ url, params, method = 'GET', data, headers }) {
  // console.log(url);
  // console.log(params);
  let rt_method = method
  
  let URL = verifyURL(url)
  
  if (params) {
    if (rt_method !== 'GET') {
      postParams.body = JSON.stringify(params)
    } else {
      let keys = Object.keys(params)
      if (keys.length) {
        let args = keys.map(item => {
          return `${item}=${params[item]}`
        })
        URL      = `${URL}?${args.join('&')}`
      }
    }
  }
  
  return new Promise((resolve, reject) => {
    RNFetch.fetch(rt_method, URL, headers, data)
      .then((response) => {
        // console.log(response);
        if (response.respInfo.status === 200) {
          return response.json()
        } else {
          reject(response)
        }
      })
      .then((response) => {
        console.log(response)
        resolve(response)
      })
      .catch((error) => {
        console.log(error)
        reject(error)
      })
  })
}

// 检查url
function verifyURL(url) {
  // 验证url
  let verifyURL
  
  // 判断是否填写了url地址
  if (!url) {
    console.log('url为空')
    return alert('url为空,请填写url')
  } else {
    // 处理网址中的前后两端的空格
    verifyURL = url.replace(/(^s*)|(s*$)/g, '')
    return verifyURL
  }
  
}


