export const validateEmail = (email) => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return email.length > 0 && emailRegex.test(email);
};

export const validatePassword = (password) => {
  return password.length >= 6;
};

export const validateConfirmPassword = (password, confirmPassword) => {
  return password === confirmPassword;
};
