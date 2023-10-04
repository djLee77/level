package level4;

import java.util.Scanner;

public class B10871 {
    public static void main(String args[])throws Exception{
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int X = sc.nextInt();

        int[] arr = new int[N];

        StringBuilder sb = new StringBuilder();

        for(int i=0; i< arr.length; i++){
            arr[i] = sc.nextInt();
        }

        for(int i=0; i<arr.length; i++){
            if(X > arr[i]){
                sb.append(arr[i] + " ");
            }
        }

        System.out.println(sb);
    }
}
