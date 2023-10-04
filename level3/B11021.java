package level3;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class B11021 {
    public static void main(String args[])throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        StringBuilder sb = new StringBuilder();

        int N = Integer.parseInt(br.readLine());
        int sum = 0;
        for(int i=1; i<=N; i++){
            st = new StringTokenizer(br.readLine(), " ");
            sum = Integer.parseInt(st.nextToken()) + Integer.parseInt(st.nextToken());
            sb.append("Case #" + i + ": " + sum + "\n");
        }

        System.out.println(sb);
    }
}
