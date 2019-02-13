export default (type = 'GET', url = '', data = {}, async = true) => {
  return new Promise((resolve, reject) => {
    type = type.toUpperCase();
    let ajaxObj;
    if (window.XMLHttpRequest) {
      ajaxObj = new XMLHttpRequest();
    } else {
      ajaxObj = new ActiveXObject();
    }

    if (type === 'GET') {
      let dataStr = '';
      data.keys(data).forEach((item) => {
        dataStr += `${item}=${data[item]}&`;
      });
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
      url = `${url}?${dataStr}`;
      ajaxObj.open(type, url, async);
      ajaxObj.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
      ajaxObj.send();
    } else if (type === 'POST') {
      ajaxObj.open(type, url, async);
      ajaxObj.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
      ajaxObj.send(JSON.stringify(data));
    } else {
      reject('error type');
    }

    ajaxObj.onreadystatechange = () => {
      if (ajaxObj.readyState === 4) {
        if (ajaxObj.status === 200) {
          const respObj = ajaxObj.response;
          if (typeof respObj !== 'object') {
            resolve(JSON.parse(respObj));
          }
        } else {
          reject(ajaxObj);
        }
      }
    };
  });
};
