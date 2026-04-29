#include <iostream>
#include <vector>
#include <deque>
using namespace std;

// deque
// int main()
// {
//     deque<int> d = {1, 2, 3, 4, 5};
//     for (int val : d)
//     {
//         cout << val << " ";
//     }
//     cout << endl;
//     cout << d[2] << endl;
//     return 0;
// }

// pair
int main()
{
    pair<int, int> p = {1, 5};
    pair<string, int> p2 = {"ali", 7};
    cout << "p " << p.first << endl;
    cout << "p " << p.second << endl;
    cout << "p2 " << p2.first << endl;
    cout << "p2 " << p2.second << endl;
    pair<int, pair<char, int>> p3 = {1, {'a', 3}};
    cout << "p3 " << p3.first << endl;
    cout << "p3 " << p3.second.first << endl;
    cout << "p3 " << p3.second.second << endl;
    return 0;
}