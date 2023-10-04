package level4;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class B10813 {
    public static void main(String args[])throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        StringTokenizer st = new StringTokenizer(br.readLine());

        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());

        int[] arr = new int[N];
        for(int i=0; i< arr.length; i++) arr[i] = i+1;

        int index1;
        int index2;
        int tmp = 0;

        for(int i=0; i<M; i++){
            st = new StringTokenizer(br.readLine());
            index1 = Integer.parseInt(st.nextToken());
            index2 = Integer.parseInt(st.nextToken());
            tmp = arr[index1-1];
            arr[index1-1] = arr[index2-1];
            arr[index2-1] = tmp;
        }

        for(int i=0; i<arr.length; i++){
            sb.append(arr[i] + " ");
        }

        System.out.println(sb);
    }
}
