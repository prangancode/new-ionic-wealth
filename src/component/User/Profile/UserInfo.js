import * as Yup from "yup";

class UserInfoModel {
  /**
   * Model properties
   */
  constructor() {
    this.name = "";
    this.email = "";
    this.avatar = "";
  }

  /**
   * Get model instance from json
   */
  fromJson(data = {}) {
    console.log(data);
    let obj = new UserInfoModel();
    if (data?._id !== undefined && data?._id) {
      obj.id = data?._id;
    }
    obj.name = data?.name ?? "";
    obj.email = data?.email ?? "";
    obj.avatar = data?.avatar?.url ?? "";
    console.log(obj);
    return obj;
  }

  /**
   * Get string from model instance
   */
  toString(data = {}) {
    let obj = new UserInfoModel().fromJson(data);
    return JSON.stringify(obj);
  }

  /**
   * Get form data from model instance
   * section for file upload
   */
  toFormData(obj = {}) {
    let data = new FormData();
    console.log(new UserInfoModel().toString(obj));
    data.append("request", new UserInfoModel().toString(obj));
    //data.get("request");
    return data;
  }

  /**
   * Validator schema
   */
  validator() {
    return Yup.object().shape({
      name: Yup.string().required("name is required "),
      email: Yup.string().required("email is required"),
      avatar: Yup.string().required("avatar is required"),
    });
  }
}

export const UserInfo = new UserInfoModel();
