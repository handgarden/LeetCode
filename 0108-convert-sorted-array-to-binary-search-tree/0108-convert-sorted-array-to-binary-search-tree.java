
class Solution {
    
    public TreeNode sortedArrayToBST(int[] nums) {
         return createSubArr(nums, 0, nums.length - 1);   
    }
    
    private TreeNode createSubArr(int [] nums, int start, int end){
        if(start > end || start >= nums.length || end >= nums.length || start < 0 || end < 0){
            return null;
        }
        
        if(start == end){
            return new TreeNode(nums[start]);
        }
        
        int pivot = (int) ((start + end) / 2.0);
        
        TreeNode left = createSubArr(nums, start, pivot - 1);
        TreeNode right = createSubArr(nums, pivot + 1, end);
        
        return new TreeNode(nums[pivot], left, right);
        
    }
}