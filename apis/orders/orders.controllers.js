const Order = require("../../db/models/Order");

exports.checkout = async (req, res, next) => {
  try {
    // كل ريك يوصلني قاعده اضيف له يوزر
    req.body.user = req.user._id;
    const newOrder = await Order.create(req.body);
    console.log(newOrder);
    res.status(201).json(newOrder);
    // update the product after changing the quantity
    //req.body.items.forEach((item)=>{
    //const foundProduct = await Product.findById(item.product)
    //foundProduct.quantity = foundProduct.quantity - item.quantity
    //const updatedProduct = await Product.findByIdAndUpdate(item.product, foundProduct)
    // )
    // or
    //    req.body.user = req.user._id;
    //req.body.items.forEach(async(item)=>{
    //const updatedProduct = await Product.findByIdAndUpdate(item.product, {$inc:{quantity:-item.quantity},})
  } catch (error) {
    console.log(error);
  }
};
