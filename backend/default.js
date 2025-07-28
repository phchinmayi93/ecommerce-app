import e from "express";
import { products} from "./constants/data.js";
import Product from "./model/product-schema.js";

const DefaultData = async () => {
  try {
    
    // Insert default products into the database
   await  Product.insertMany(products);
    console.log("Default data imported successfully");

    // You can also log the inserted data if needed
    // console.log("Inserted products:", products);


    
   }
    catch (error) {
      console.error("Error importing default data:", error.message);
    }
 
    
  }


export default DefaultData;