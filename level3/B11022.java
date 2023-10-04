package level3;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class B11022 {
    public static void main(String args[])throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        StringBuilder sb = new StringBuilder();

        int N = Integer.parseInt(br.readLine());
        int sum = 0;
        int A = 0;
        int B = 0;

        for(int i=1; i<=N; i++){
            st = new StringTokenizer(br.readLine(), " ");
            A = Integer.parseInt(st.nextToken());
            B = Integer.parseInt(st.nextToken());
            sum = A + B;
            sb.append("Case #" + i + ": " + A + " + " + B + " = " + sum + "\n");
        }

        System.out.println(sb);
    }
}

