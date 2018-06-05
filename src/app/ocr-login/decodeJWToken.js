// const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMTEiLCJleHAiOjE1Mjg3NjMxODZ9.4Qx7UFRk3d9wIVzkOTxdD9kkiYDlY7U0IKC93vj27_8';

function decodeToken(token) {
  const jwt =  require("jsonwebtoken");
  jwt.verify(token, 'secretkey', function (error, decode) {
    if (error) {
      console.log(error.message);
      return;
    }

    console.log(decode);
  });
}

