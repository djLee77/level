package level3;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class B15552 {
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static StringBuilder sb = new StringBuilder();
    public static void main(String args[])throws Exception{
        int T = Integer.parseInt(br.readLine());
        int sum = 0;
        StringTokenizer st;
        for(int i=0; i<T; i++){
            st = new StringTokenizer(br.readLine()," ");
			int A = Integer.parseInt(st.nextToken());
			int B = Integer.parseInt(st.nextToken());
            sum = A + B;
            sb.append(sum + "\n");
        }

        System.out.println(sb);
    }   
}
