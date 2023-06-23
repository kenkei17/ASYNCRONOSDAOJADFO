const mongoose = require("mongoose");
//Schema == model || BLueprint
const movieSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  rating: Number,
  description: String,
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
/* const user ={
    name:"Kenneth",
    isSingle:true,
    phone:{
        name:"Vivo",
        
    }
} */
