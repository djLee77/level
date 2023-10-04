package level3;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class B2439 {
    public static void main(String args[])throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        int N = Integer.parseInt(br.readLine());
        String[] arr = new String[N];

        for(int i=0; i<N; i++){
            arr[i] = " ";
        }

        for(int j=N-1; j>=0; j--){
            arr[j] = "*";
            for(int k=0; k<N; k++){
                sb.append(arr[k]);
            }
            sb.append("\n");
        }

        System.out.println(sb);
    }
}
