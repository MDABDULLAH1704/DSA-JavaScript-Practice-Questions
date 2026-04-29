#include <iostream>
#include <map>
#include <unordered_map>
using namespace std;

// int main()
// {
//     // map : Sorted order (according to Alphabet)
//     map<string, int> m;
//     m["tv"] = 100;
//     m["laptop"] = 100;
//     m["headphone"] = 50;
//     m["tablet"] = 120;
//     m["watch"] = 50;
//     m.insert({"camera", 25});
//     m.emplace("camera2", 25);
//     m.erase("tv");
//     for (auto p : m)
//     {
//         cout << p.first << " " << p.second << endl;
//     }
//     if (m.find("camera") != m.end())
//     {
//         cout << "found\n";
//     }
//     else
//     {
//         cout << "not found\n";
//     }
//     cout << "count = " << m.count("laptop") << endl;
//     cout << "value = " << m["laptop"] << endl;
//     return 0;
// }

// int main()
// {
//     // multiMap
//     multimap<string, int> m;
//     m.emplace("tv", 100);
//     m.emplace("tv", 100);
//     m.emplace("tv", 100);
//     m.emplace("tv", 100);
//     // m.erase(m.find("tv"));
//     for (auto p : m)
//     {
//         cout << p.first << " " << p.second << endl;
//     }
//     return 0;
// }

int main()
{
    // unordered_map : value cannot arrange (that is randomly)
    unordered_map<string, int> m;
    m.emplace("tv", 100);
    m.emplace("laptop", 100);
    m.emplace("fridge", 100);
    m.emplace("watch", 100);
    m.erase(m.find("tv"));
    for (auto p : m)
    {
        cout << p.first << " " << p.second << endl;
    }
    return 0;
}
