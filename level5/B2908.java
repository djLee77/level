package level5;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class B2908 {
    public static void main(String args[])throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        String str1 = st.nextToken();
        String str2 = st.nextToken();

        char[] arr = str1.toCharArray();
        char[] arr_r = new char[arr.length];

        char[] arr2 = str2.toCharArray();
        char[] arr2_r = new char[arr2.length];

        for(int i=0; i<arr.length; i++){
            arr_r[i] = arr[2-i];
            arr2_r[i] = arr2[2-i];
        }

        int num1 = Integer.parseInt(String.valueOf(arr_r));
        int num2 = Integer.parseInt(String.valueOf(arr2_r));

        System.out.println((num1>num2)? num1: num2);
    }
}
