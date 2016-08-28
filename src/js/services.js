//请尝试把BookListCtrl中加载书籍列表数据的部分抽出来作为一个服务
bookListModule.factory('bookListService',['$http',
	function($http){
		var doRequest=function(bookType){
			return $http({
				method:'Get',
				url:'../src/data/books' + bookType + '.json'
			})
		}
		return {
			bookList:function(bookType){
				return doRequest(bookType);
			}
		}
	}
])