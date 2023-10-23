package ICPC;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class IC20179 {
    public static void main(String args[])throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int[] arr1 = new int[6];
        int[] arr2 = new int[6];

        String[] str1 = br.readLine().split(" ");
        String[] str2 = br.readLine().split(" ");

        for(int i=0; i<6; i++){
            arr1[i] = Integer.parseInt(str1[i]);
            arr2[i] = Integer.parseInt(str2[i]);
        }
        
        int cnt1 = 0;
        int cnt2 = 0;

        for(int i=0; i<6; i++){
            for(int j=0; j<6; j++){
                if(arr1[i] > arr2[j]){
                    cnt1++;
                }else{
                    cnt2++;
                }
            }
        }

        int t = 36;
        while(t > 1){
            if(cnt1 % t ==0 && cnt2 % t ==0){
                cnt1 = cnt1/t;
                cnt2 = cnt2/t;
            }else{
                t--;
            }
        }

        cnt2 = cnt1 + cnt2;
        System.out.println(cnt1 + "/" + cnt2);
    }
}