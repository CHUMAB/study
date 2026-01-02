const bcrypt = require('bcryptjs');

(async () => {
  const plainText = "letmein";
  const hashedText = await bcrypt.hash(plainText, 10);

  console.log(hashedText);
})();   