#include <iostream>
#include <vector>
#include <list>
using namespace std;

// int main()
// {
//     vector<int> vec = {1, 2, 3, 4, 5};
//     cout << "vec.begin = " << *(vec.begin()) << endl;
//     cout << "vec.end = " << *(vec.end()) << endl;
//     return 0;
// }

// List :- Doubly linked list
// int main()
// {
//     list<int> l;
//     l.push_back(1);
//     l.push_back(2);
//     l.push_front(3);
//     l.push_front(5);
//     l.pop_back();
//     l.pop_front();
//     for (int val : l)
//     {
//         cout << val << " ";
//     }
//     cout << endl;
//     return 0;
// }

int main()
{
    list<int> l = {1, 2, 3, 4, 5};
    for (int val : l)
    {
        cout << val << " ";
    } 
    cout << endl;
    return 0;
}