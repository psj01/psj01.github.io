


var myApp = angular.module("tdlModule",[])
.controller("tdlController", function($scope){
    $scope.message = "To Do List";	
	$scope.newItem = "";
	$scope.newItemDesc = "";
    var items = [
		{itemID:1, itemName:"Milk", itemDesc:"Get milk", itemStatus:"pending", createdDate:"2/7/2017 15:13",completedDate:""},
        {itemID:2, itemName:"Bread", itemDesc:"get Bread", itemStatus:"pending", createdDate:"2/7/2017 15:16",completedDate:""},
        {itemID:3, itemName:"Chicken", itemDesc:"need chicken", itemStatus:"pending", createdDate:"2/8/2017 12:14",completedDate:""}       
    ];
    $scope.items = items;
	
	$scope.addItem = function(){
		
		if($scope.newItem.length==0 || $scope.newItemDesc.length==0)
		{
			$("#msg1").html("Please enter an item name and description.");
			return;
		}
		else{
			$("#msg1").html("");
		}
	
		var date  = new Date();
		date = date.getMonth()+1 + '/' + date.getDate() + '/' + date.getFullYear() + "   " + date.getHours() + ":" + date.getMinutes();
		var newItemX= {itemID:getNxtItemID(), itemName:$scope.newItem,itemDesc:$scope.newItemDesc, itemStatus:"pending", createdDate:date ,completedDate:""}
		$scope.items.push(newItemX);

		$scope.newItem = "";
		$scope.newItemDesc = "";
	};
	
	function getNxtItemID(){
		var max = 0;			
		for(var i=0;i<$scope.items.length;i++)
        {
            if($scope.items[i].itemID>max)
            {
                max = $scope.items[i].itemID;
            }
        }
		return max+1;		
	};
	
	function updateItemIds(){
		for(var i=0;i<$scope.items.length;i++)
		{
			$scope.items[i].itemID = i+1;
		}		
	};
	
	   
    $scope.removeItem = function (x) {
        $scope.items.splice(x, 1);
		updateItemIds();
    }
	
	$scope.updateItem = function (x) {	

		if($scope.items[x].itemStatus == "pending")
		{
			var date  = new Date();
			date = date.getMonth()+1 + '/' + date.getDate() + '/' + date.getFullYear() + "   " + date.getHours() + ":" + date.getMinutes();
			$scope.items[x].itemStatus = "complete";
			$scope.items[x].completedDate = date;			
		}
		else{
			$scope.items[x].itemStatus = "pending";
			$scope.items[x].completedDate = date;
		}
		
    }

}); 
