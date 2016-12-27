let guid = +new Date();

module.exports = {
	getGUID : function (){
		return ++guid;
	}
}