export const validationRules = {
  name: /^[a-zA-Z\s-]{2,}$/,

  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,

  password: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,

  phone: /^\+?[0-9\s-]{10,15}$/,

  pin: /^[0-9]{6}$/,

  city: /^[a-zA-Z\s-]{2,}$/,

  country: /^[a-zA-Z\s-]{2,}$/,
};