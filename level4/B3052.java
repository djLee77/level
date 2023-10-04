package level4;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class B3052 {
    public static void main(String args[])throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int[] arr = new int[10];
        boolean[] chk = new boolean[10];
        int cnt = 0;

        for(int i=0; i<10; i++){
            arr[i] = Integer.parseInt(br.readLine()) % 42;
        }

        for(int i=0; i<10; i++){
            for(int j=i+1; j<10; j++){
                if(arr[i] == arr[j]){
                    chk[j] = true;
                }
            }
        }

        for(int i=0; i<10; i++){
            if(!chk[i]){
                cnt++;
            }
        }

        System.out.println(cnt);
    }
}
