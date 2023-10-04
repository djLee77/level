package level4;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class B10810 {
    public static void main(String args[])throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
        StringBuilder sb = new StringBuilder();

        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());

        int [] arr = new int[N];

        for(int i=0; i<M; i++){
            st = new StringTokenizer(br.readLine());
            int start = Integer.parseInt(st.nextToken());
            int last = Integer.parseInt(st.nextToken());
            int num = Integer.parseInt(st.nextToken());
            for(int j = start -1 ; j< last; j++){
                arr[j] = num;
            }
        }

        for(int i=0; i<arr.length; i++){
            sb.append(arr[i] + " ");
        }

        System.out.println(sb);
    }
}
