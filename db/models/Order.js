const { model, Schema } = require("mongoose");

const OrderSchema = Schema(
  {
    //اهوا المشتري ويوصلني من التوكن
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    items: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: { type: Number, min: 1 },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Order", OrderSchema);
