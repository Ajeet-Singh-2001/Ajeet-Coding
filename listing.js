const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    description: String,
    image: {
        type: String,
        default:
        "https://th.bing.com/th?id=OIP.Vtxy0FjT_EfudI4cQk1kzAHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
        set: (v) =>
        
        v === "https://th.bing.com/th?id=OIP.87rC-vQdkf1I5qv74_2LjwHaHp&w=246&h=253&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
        ? ""
        : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;