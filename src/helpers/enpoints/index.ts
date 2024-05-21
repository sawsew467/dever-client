const prefixAuth: string = "/core";
const prefixBase: string = "/api/v1";
const prefixOther: string = "/api/core";

const prefixApiAuth: string = `/api/core`;

const endpointAuth = {
  SIGN_IN: `${prefixBase}/auth/login/`,
  VERIFY_TOKEN: `${prefixBase}/verifyToken`,
};

const endpointUsersManagement = {
  GET_ALL_USERS: `${prefixBase}/users/`,
  DELETE_USER: `${prefixBase}/users/{id}`,
  EDIT_USER_BY_ID: `${prefixBase}/users/{id}`,
};
const endpointDepartmentManagement = {
  GET_ALL_DEPARTMENTS: `${prefixBase}/department/`,
  DEPARTMENT: `${prefixBase}/department/`,
  DELETE_DEPARTMENT: `${prefixBase}/department/{id}`,
  GET_DEPARTMENT_BY_ID: `${prefixBase}/department/{id}`,
  EDIT_DEPARTMENT_BY_ID: `${prefixBase}/department/{id}`,
};
const endpointPositionManagement = {
  GET_ALL_POSITION: `${prefixBase}/position/`,
  POSITION: `${prefixBase}/position/`,
  DELETE_POSITION: `${prefixBase}/position/{id}`,
  GET_POSITION_BY_ID: `${prefixBase}/position/{id}`,
  EDIT_POSITION_BY_ID: `${prefixBase}/position/{id}`,
};
const endpointMajorManagement = {
  GET_ALL_MAJOR: `${prefixBase}/major/`,
  MAJOR: `${prefixBase}/major/`,
  DELETE_MAJOR: `${prefixBase}/major/{id}`,
  GET_MAJOR_BY_ID: `${prefixBase}/major/{id}`,
  EDIT_MAJOR_BY_ID: `${prefixBase}/major/{id}`,
};
const endpointSocialManagement = {
  GET_ALL_SOCIAL: `${prefixBase}/social/`,
  SOCIAL: `${prefixBase}/social/`,
  DELETE_SOCIAL: `${prefixBase}/social/{id}`,
  GET_SOCIAL_BY_ID: `${prefixBase}/social/{id}`,
  EDIT_SOCIAL_BY_ID: `${prefixBase}/social/{id}`,
};
const endpointImageActivityManagement = {
  GET_ALL_IMAGES: `${prefixBase}/image-activity`,
  DELETE_IMAGE: `${prefixBase}/image-activity/{id}`,
  DELETE_MANY_IMAGE: `${prefixBase}/image-activity/`,
  IMAGE: `${prefixBase}/image-activity`,
};

const endpointOther = {};

export {
  endpointAuth,
  endpointUsersManagement,
  endpointDepartmentManagement,
  endpointOther,
  endpointPositionManagement,
  endpointMajorManagement,
  endpointSocialManagement,
  endpointImageActivityManagement,
};
