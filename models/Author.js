const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthorSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: "First name is required",
    },
    lastName: {
      type: String,
      trim: true,
      required: "Last name is required",
    },
    books: [
      {
        type: Schema.Types.ObjectId,
        ref: "Book",
      },
    ],
  },
  { toJSON: { virtuals: true } }
);


AuthorSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});



const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;
