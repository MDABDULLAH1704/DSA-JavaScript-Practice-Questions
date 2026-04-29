#include <iostream>
using namespace std;

int main()
{
    // Person can drive or not.
    int age;
    cout << "Enter your age : ";
    cin >> age;
    if (age > 18 && age < 120)
    {
        cout << "You can access driving license because you are adult.";
    }
    else
    {
        cout << "You cannot get driving license because you are kid.";
    }
    return 0;
}