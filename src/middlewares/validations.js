const checkLogin = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password || email.length === 0 || password.length === 0) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  return next();
};

// const checkDisplayName = async (req, res, next) => {
//   const sales = req.body;
//   const hasntProductID = sales
//   .some(({ productId }) => productId === undefined || productId.length === 0); // se true, deu erro
//   if (hasntProductID) {
//     return res.status(400).json({ message: '"productId" is required' });
//   }
//   return next();
// };

// const checkEmail = async (req, res, next) => {
//   const sales = req.body;
//   const hasntProductID = sales
//   .some(({ productId }) => productId === undefined || productId.length === 0); // se true, deu erro
//   if (hasntProductID) {
//     return res.status(400).json({ message: '"productId" is required' });
//   }
//   return next();
// };

// const checkExistence = async (req, res, next) => {
//   const sales = req.body;
//   // const checkUserName = (/*colocar aqui o parâmetro do username*/) => User.findOne({ where: { username } });
  
//   const validIds = await modelSales.checkValidIds();
//   const validIdsNumber = validIds.map((id) => Number(id));

//   const hasProductIdInexistent = sales
//     .every(({ productId }) => validIdsNumber.includes(productId)); // se true, deu certo
  
//   if (!hasProductIdInexistent) {
//     return res.status(404).json({ message: 'Product not found' });
//   }

//   return next();
// };

module.exports = { checkLogin };