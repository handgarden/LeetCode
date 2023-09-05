class Solution {

    /**
     * @param String $a
     * @param String $b
     * @return String
     */
    function addBinary($a, $b) {
        $str1 = strrev($a);
        $str2 = strrev($b);
        
        $remain = 0;
        
        $str1 = str_split($str1);
        $str2 = str_split($str2);
        
        $len = min([count($str1),count($str2)]);
        $result = [];
        for($i = 0; $i<$len;$i++){
            $tmp = (int)$str1[$i] + (int)$str2[$i] + $remain;
            print "i={$i}";
            print "\n";
            print "tmp={$tmp}";
            print "\n";
            $result[$i] = $tmp % 2;
            print "result={$result[$i]}";
            print "\n";
            $remain = max([0, $tmp / 2]);
            $remain = (int) floor($remain);
            print "remain=$remain";
            print "\n";
            
        }
        
        for($i = $len; $i < count($str1); $i++){
            $tmp = (int)$str1[$i] + $remain;
            $result[$i] = $tmp % 2;
            $remain = max([0, $tmp / 2]);
            $remain = (int) floor($remain);
            
        }
        
        print_r($result);
        for($i = $len; $i < count($str2); $i++){
            $tmp = (int)$str2[$i] + $remain;
            $result[$i] = $tmp % 2;
            $remain = max([0, $tmp / 2]);
            $remain = (int) floor($remain);
            
        }
        
        $i = max([count($str1),count($str2)]);
        while($remain > 0){
            $result[$i] = 1;
            $remain /= 2;
            $remain = (int) floor($remain);
            
        }
        print_r($result);
        return strrev(implode($result));
    }
}