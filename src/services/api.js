import axios from "axios";
import configs from "../helpers/configs";
export const validateEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
export const LogUserIn = (userObj) => {

  localStorage.setItem('user', JSON.stringify(userObj));
  localStorage.setItem('token', userObj.token);
}
export const LogUserOut = () => {
  localStorage.removeItem('user')
  localStorage.removeItem('token');
  window.location.href = "/auth/login";
}
export const getUser = () => {
  const user = localStorage.getItem('user');
  if(user){
    return JSON.parse(user) || {}
  }
  else {
    window.location.href = "/auth/login";
  }
}
export const Register = async (payload) => {
  // {
  //     firstName: "deji",
  //     lastName: "sarumi",
  //     email: "devferanmi@gmail.com",
  //     password: "password",
  //   }
  var data = JSON.stringify(payload);
  var config = {
    method: "post",
    url: `${configs.USER_SERVICE_URL}/auth/register`,
    headers: {
      appKey: configs.USER_SERVICE_KEY,
      "Content-Type": "application/json",
    },
    data: data,
  };
  try {
    const req = await axios(config);
    return {
      success: true,
      ...req.data,
    };
  }  catch (err) {
    handleStatusCode(err?.response?.status);
    return {
      success: false,
      message: err?.response?.data?.message || "Request failed ",
    };
  }
};

export const Login = async (payload) => {
  // {
  //     email: "devferanmi@gmail.com",
  //     password: "password",
  //   }
  var data = JSON.stringify(payload);
  var config = {
    method: "post",
    url: `${configs.USER_SERVICE_URL}/auth/login`,
    headers: {
      appKey: configs.USER_SERVICE_KEY,
      "Content-Type": "application/json",
    },
    data: data,
  };
  try {
    const req = await axios(config);
    return {
      success: true,
      ...req.data,
    };
  }  catch (err) {
    handleStatusCode(err?.response?.status);
    return {
      success: false,
      message: err?.response?.data?.message || "Request failed ",
    };
  }
};
const getTokenFromLocal = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/auth/login";
    return;
  }
  return token;
};
export const CreateEmail = async (payload) => {
  const token = await getTokenFromLocal();
  // {
  //   "userID": "",
  //   "permanent": true,
  //   "emailName": "myownemail"
  // }
  var data = JSON.stringify(payload);
  var config = {
    method: "post",
    url: `${configs.API_BASE_URL}/email/create`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: data,
  };
  try {
    const req = await axios(config);
    return {
      success: true,
      ...req.data,
    };
  }  catch (err) {
    handleStatusCode(err?.response?.status);
    return {
      success: false,
      message: err?.response?.data?.message || "Request failed ",
    };
  }
};
export const handleStatusCode = (statusCode) => {
  if(statusCode === 403){
    window.location.href = "/auth/login";
  }
}

