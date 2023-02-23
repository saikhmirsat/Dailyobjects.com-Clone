const express = require("express");
const {
  newOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");
const router = express.Router();
const { isAutheticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/order/new").post(isAutheticatedUser, newOrder);
router.route("/order/:id").get(isAutheticatedUser, getSingleOrder);
router.route("/orders/me").get(isAutheticatedUser, myOrders);
router
  .route("/admin/orders")
  .get(isAutheticatedUser, authorizeRoles("admin"), getAllOrders);
router
  .route("/admin/order/:id")
  .put(isAutheticatedUser, authorizeRoles("admin"), updateOrder)
  .delete(isAutheticatedUser, authorizeRoles("admin"), deleteOrder);

module.exports = router;
