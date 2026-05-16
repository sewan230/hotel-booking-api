export const loginUser = async (userData) => {

  // simulate api request
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        user: {
          email: userData.email
        },
        token: "fake-jwt-token"
      });
    }, 2000);
  });
};

// REGISTER
export const registerUser = async (payload) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        user: {
          email: payload.email,
          role: payload.role, 
        },
        token: "fake-jwt-token",
      });
    }, 2000);
  });
};