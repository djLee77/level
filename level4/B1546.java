package level4;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class B1546 {
    public static void main(String args[]) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;

        int N = Integer.parseInt(br.readLine());
        float max = 0;
        float sum = 0;
        float[] scores = new float[N];

        st = new StringTokenizer(br.readLine());

        for (int i = 0; i < N; i++) {
            scores[i] = Integer.parseInt(st.nextToken());
            if (scores[i] > max) {
                max = scores[i];
            }
        }

        for (int i = 0; i < N; i++) {
            sum += scores[i] / max * 100;
        }

        float average = sum / N;

        System.out.println(average);
    }
}
