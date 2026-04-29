#include <iostream>
#include <vector>
using namespace std;

// int main()
// {
//     vector<int> vec;
//     vec.push_back(1);
//     vec.push_back(2);
//     vec.push_back(3);
//     vec.push_back(4);
//     vec.push_back(5);
//     for (int val : vec)
//     {
//         cout << val << " ";
//     }
//     cout << "Size " << vec.size() << endl;
//     cout << "Capacity " << vec.capacity() << endl;
//     return 0;
// }

// int main()
// {
//     vector<int> vec;
//     vec.push_back(1);
//     vec.push_back(2);
//     vec.push_back(3);
//     vec.push_back(4);
//     vec.push_back(5);
//     vec.emplace_back(6);
//     vec.pop_back();
//     for (int val : vec)
//     {
//         cout << val << " ";
//     }
//     cout << endl;
//     cout << "Val at  idx 2 = " << vec[2] << " or " << vec.at(2) << endl;
//     return 0;
// }

int main()
{
    vector<int> vec;
    vec.push_back(1);
    vec.push_back(2);
    vec.push_back(3);
    vec.push_back(4);
    vec.push_back(5);
    vec.emplace_back(6);
    vec.pop_back();
    for (int val : vec)
    {
        cout << val << " ";
    }
    cout << endl;
    cout << "front " << vec.front() << endl;
    cout << "back " << vec.back() << endl;
    return 0;
}