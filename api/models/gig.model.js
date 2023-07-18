import mongoose from "mongoose"

const {Schema} = mongoose;

const GigSchema = new Schema({
   userId: {
    type: String,
    required
   },
   title:{
    type: String,
    required: true
   },
   desc:{
    type: String,
    required: true
   },
   totalStars:{
    type: Number,
    default: 0
   },
   StarNumber: {
     type: Number,
     default: 0
   },

   cat: {
    type: String,
    required: true
  },

  price:{
    type: Number,
    required
  },
  cover: {
    type: String,
    required: true
  },

  images : {
    type: [String],
    required: false
  },

    shortTitle: {
     type: Number,
     required: true
   },
   deliveryTime: {
    type: Number,
    required
  },

  revisionNumber: {
    type: Number,
    required
  },

  features: {
    type: [String ],
    required: false
  },
  sales: {
    type: Number,
    default: 0
  }
}, {
    timestamps: true
})


export default mongoose.model("Gig", GigSchema)
