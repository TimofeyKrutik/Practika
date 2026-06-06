#include <iostream>
using namespace std;

int main() {
    int N;
    cout << "Введите размер массива N: ";
    cin >> N;

    int* A = new int[N];

    cout << "Введите элементы массива:" << endl;
    for (int i = 0; i < N; i++) {
        cout << "A[" << i << "] = ";
        cin >> A[i];
    }

    int B;
    cout << "Введите число B: ";
    cin >> B;

    int count = 0;
    long long product = 1;

    for (int i = 0; i < N; i++) {
        if (A[i] > B) {
            product *= A[i];
            count++;
        }
    }

    // Если нет элементов, больших B, произведение равно 0
    if (count == 0) {
        product = 0;
    }

    cout << "\nРезультаты:" << endl;
    cout << "Количество элементов, больших " << B << " = " << count << endl;
    cout << "Их произведение = " << product << endl;

    delete[] A;
    return 0;
}


