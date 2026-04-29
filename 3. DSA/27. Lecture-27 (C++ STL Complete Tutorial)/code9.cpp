#include <iostream>
#include <vector>
#include <list>
#include <deque>
#include <stack>
#include <queue>
#include <map>
#include <unordered_map>
#include <set>
#include <unordered_set>
using namespace std;

int main()
{
    // Sort
    int arr[5] = {3, 5, 1, 8, 2};
    sort(arr, arr + 5);
    for (int val : arr)
    {
        cout << val << " ";
    }
    cout << endl;
    return 0;
}