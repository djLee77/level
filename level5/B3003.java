package level5;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class B3003 {
    public static void main(String args[])throws Exception{
        //킹 1개, 퀸 1개, 룩 2개, 비숍 2개, 나이트 2개, 폰 8

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
        StringTokenizer st = new StringTokenizer(br.readLine());

        StringBuilder sb = new StringBuilder();
        int[] chess = {1,1,2,2,2,8};

        for(int i=0; i<chess.length; i++){
            int answer = chess[i] - Integer.parseInt(st.nextToken());
            sb.append(answer + " ");
        }

        System.out.println(sb);
    }
}
