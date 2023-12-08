const Product = require('../models/product');

// get all products
module.exports.Products = function(req, res){
    Product.find({}).then(function(foundProducts){
        res.send(foundProducts);
    });
};


// create new product
module.exports.create = function(req, res){
    const newproduct = new Product({
        name: req.body.name,
        quantity: req.body.quantity
    });
    newproduct.save().then(function(err){
        if(err){
            res.send(err);
        }else{
            res.send("new product added!");
        }
    });
};

// update product's quantity
module.exports.updateQuantity = function(req, res){
    Product.findById(req.params.productID).then(function(found){
        const newQty = parseInt(found.quantity) + parseInt(req.query.number);
        Product.findOneAndUpdate(req.params.productID,{quantity: newQty}).then(function(updatedProduct){
            updatedProduct.quantity=newQty;
            res.send({
                message:"success"
            });
        });
    })
};

// delete product by id
module.exports.delete = function(req, res){
    Product.deleteOne({_id: req.params.productID}).then(function(product){
        res.send({
            message: "product deleted!"
        });
    })
};


