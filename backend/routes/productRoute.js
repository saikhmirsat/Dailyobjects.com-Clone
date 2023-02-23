const express=require("express")
const { getAllProducts,createProduct, updateProduct, deleteProduct, getProductDetails } = require("../controllers/productControllers")
const { isAutheticatedUser,authorizeRoles} = require("../middleware/auth")

const router=express.Router()

router.route("/products").get(getAllProducts)

router.route("admin/product/new").post(isAutheticatedUser,authorizeRoles("admin"),createProduct)

router.route("admin/product/:id").put(isAutheticatedUser,authorizeRoles("admin"),updateProduct).delete(isAutheticatedUser,authorizeRoles("admin"),deleteProduct)

router.route("/product/:id").get(getProductDetails)


module.exports=router