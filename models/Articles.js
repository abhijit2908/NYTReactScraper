var mongoose =require('mongoose');

var Schema  = mongoose.Schema;

var articleSchema = new Schema({


	title: {
		type:String,
		required:true

	},

	url: {
		type:String,
		required:true,
		unique: true	

	},

	saved: {
		type:Boolean,
		default:false
	},

	pub_date: {
		type:String,
		required:true
	}

})

var article = mongoose.model("article",articleSchema);

module.exports = article;