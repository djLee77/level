#include <iostream>
#include <vector>
#include <string>
#include <limits>
#include <queue>
#include <algorithm>

const int INF = std::numeric_limits<int>::max();

class Vertex {
public:
    std::string name;
    int number;

    Vertex(std::string name, int number) : name(name), number(number) {}
};

class WeightedGraph {
private:
    std::vector<Vertex> vertices;
    std::vector<std::vector<int>> adjacencyMatrix;
    std::vector<std::vector<int>> timeMatrix; // 시간 정보를 위한 인접 행렬

public:
    WeightedGraph(int numVertices) {
        adjacencyMatrix = std::vector<std::vector<int>>(numVertices, std::vector<int>(numVertices, INF));
        timeMatrix = std::vector<std::vector<int>>(numVertices, std::vector<int>(numVertices, INF));
        for (int i = 0; i < numVertices; ++i) {
            adjacencyMatrix[i][i] = 0;
            timeMatrix[i][i] = 0;
        }
    }

    void addVertex(const Vertex &vertex) {
        vertices.push_back(vertex);
    }

    void addEdge(int src, int dest, int weight) {
        adjacencyMatrix[src][dest] = weight;
    }

    void addTimeEdge(int src, int dest, int time) {
        timeMatrix[src][dest] = time;
    }

    std::vector<int> dijkstra(int src, int dest, const std::vector<std::vector<int>>& matrix) {
        int n = vertices.size();
        std::vector<int> dist(n, INF), prev(n, -1);
        std::vector<bool> visited(n, false);

        dist[src] = 0;

        for (int i = 0; i < n; ++i) {
            int closest = -1;
            for (int j = 0; j < n; ++j) {
                if (!visited[j] && (closest == -1 || dist[j] < dist[closest])) {
                    closest = j;
                }
            }

            if (dist[closest] == INF) break;

            visited[closest] = true;

            for (int j = 0; j < n; ++j) {
                int path = dist[closest] + matrix[closest][j];
                if (path < dist[j]) {
                    dist[j] = path;
                    prev[j] = closest;
                }
            }
        }

        std::vector<int> path;
        for (int at = dest; at != -1; at = prev[at]) {
            path.push_back(at);
        }
        std::reverse(path.begin(), path.end());

        if (path.size() == 1 && path[0] == src) {
            path.clear(); // 경로가 없는 경우
        }

        return path;
    }

    // 최단 경로 찾기
    std::vector<int> findShortestPath(int src, int dest) {
        return dijkstra(src, dest, adjacencyMatrix);
    }

    // 최소 시간 경로 찾기
    std::vector<int> findShortestTimePath(int src, int dest) {
        return dijkstra(src, dest, timeMatrix);
    }

    // 경로의 총 비용 계산
    int calculateTotalCost(const std::vector<int>& path) {
        int totalCost = 0;
        for (size_t i = 0; i < path.size() - 1; i++) {
            totalCost += adjacencyMatrix[path[i]][path[i + 1]];
        }
        return totalCost;
    }

    // 경로의 총 시간 계산
    int calculateTotalTime(const std::vector<int>& path) {
        int totalTime = 0;
        for (size_t i = 0; i < path.size() - 1; i++) {
            totalTime += timeMatrix[path[i]][path[i + 1]];
        }
        return totalTime;
    }

    // 경로 출력
    void printPath(const std::vector<int>& path) {
        if (path.empty()) {
            std::cout << "Path not found.\n";
            return;
        }

        std::cout << "Path: ";
        for (size_t i = 0; i < path.size(); i++) {
            std::cout << vertices[path[i]].name;
            if (i < path.size() - 1) std::cout << " -> ";
        }
        std::cout << "\n";
    }
};

int main() {
    WeightedGraph graph(5);
    graph.addVertex(Vertex("Seoul", 0));
    graph.addVertex(Vertex("Busan", 1));
    graph.addVertex(Vertex("Daegu", 2));
    graph.addVertex(Vertex("Gwangju", 3));
    graph.addVertex(Vertex("Daejeon", 4));

    graph.addEdge(0, 1, 10);
    graph.addEdge(1, 2, 20);
    graph.addEdge(2, 3, 30);
    graph.addEdge(3, 4, 40);
    graph.addEdge(0, 4, 100);

    graph.addTimeEdge(0, 1, 5);
    graph.addTimeEdge(1, 2, 10);
    graph.addTimeEdge(2, 3, 15);
    graph.addTimeEdge(3, 4, 20);
    graph.addTimeEdge(0, 4, 50);

    std::vector<int> path = graph.findShortestPath(0, 4);
    graph.printPath(path);
    std::cout << "Total cost: " << graph.calculateTotalCost(path) << std::endl;

    std::vector<int> timePath = graph.findShortestTimePath(0, 4);
    graph.printPath(timePath);
    std::cout << "Total time: " << graph.calculateTotalTime(timePath) << std::endl;

    return 0;
}
