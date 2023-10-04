package level4;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class B2562 {
    public static void main(String args[]) throws Exception {
        int[] arr = new int[9];
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        for (int i = 0; i < arr.length; i++) {
            arr[i] = Integer.parseInt(br.readLine());
        }

        int max = arr[0];
        int max_point = 0;

        for(int i=0; i< arr.length; i++){
            if(arr[i]>max){
                max = arr[i];
                max_point = i;
            }
        }

        max_point += 1;
        System.out.println(max + "\n" + max_point);
    }
}
