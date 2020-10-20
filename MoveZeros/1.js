/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // var i;
    // var nonZeroElements = [];
    // for(i = 0 ; i < nums.length ; i++){
    //     if(nums[i] !== 0)
    //         nonZeroElements.push(nums[i]);
    // }
    // for( i = 0 ; i < nums.length ; i++){
    //     nums[i] = nonZeroElements[i];
    // }
    //  for(i = nonZeroElements.length ; i < nums.length ; i++){
    //     nums[i] = 0;
    // } 
    
    // var i;
    // for( i = 0 ; i < nums.length ; i++ ){
    //     if(nums[i] == 0){
    //         nums[nums.length] = 0;
    //         delete nums[i];
    //     }
    // } 
    //没有在原数组上操作,不符合题目意思

    // var i,j,p;
    // for( i = 0; i < nums.length-1; i++){
    //     for( j = 0; j < nums.length-i-1; j++){
    //         if(nums[j] == 0){
    //             p = nums[j];
    //             nums[j] = nums[j+1];
    //             nums[j+1] = p;
    //         }
    //     }
    // }  
   

    var k = 0;
    for( var i = 0; i < nums.length; i++ )
        if( nums[i] !== 0){
            nums[k++] = nums[i]; //重新规划nums，将不为0的数往前放
        }
    for( i = k; i< nums.length; i++)
        nums[i] = 0; //在其余位上补0  




};