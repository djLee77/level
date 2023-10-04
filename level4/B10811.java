package level4;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class B10811 {
    public static void main(String args[])throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        StringBuilder sb = new StringBuilder();

        st = new StringTokenizer(br.readLine());

        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());

        int[] arr = new int[N];
        int[] arr_tmp = new int[N];

        for(int i=0; i<N; i++){
            arr[i] = i+1;
        }

        for(int x=0; x<M; x++){
            st = new StringTokenizer(br.readLine());
            int i = Integer.parseInt(st.nextToken());
            int j = Integer.parseInt(st.nextToken());
            int range = j-i;
            for(int y = 0; y<=range; y++){
                arr_tmp[i-1+y] = arr[j-1-y];
            }

            for(int y = i-1; y<j; y++){
                arr[y] = arr_tmp[y];
            }
        }

        for(int i=0; i<arr.length; i++){
            sb.append(arr[i]+ " ");
        }

        System.out.println(sb);
    }
}
