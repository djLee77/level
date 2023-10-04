package level5;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class B11720 {
    public static void main(String args[])throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        char[] nums = br.readLine().toCharArray();
        int sum = 0;
        
        for(int i=0; i<N; i++){
            sum += Integer.parseInt(String.valueOf(nums[i]));
        }

        System.out.println(sum);
    }
}
