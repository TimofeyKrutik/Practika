#include <iostream>
using namespace std;

int main() {
    int N;
    cout << "Введите размер массива N: ";
    cin >> N;

    // Динамическое выделение памяти под массив
    int* A = new int[N];

    cout << "Введите элементы массива:" << endl;
    for (int i = 0; i < N; i++) {
        cout << "A[" << i << "] = ";
        cin >> A[i];
    }

    int sum = 0;
    int count = 0;

    for (int i = 0; i < N; i++) {
        if (A[i] > 0) {
            sum += A[i];
            count++;
        }
    }

    cout << "\nРезультаты:" << endl;
    cout << "Сумма положительных элементов = " << sum << endl;
    cout << "Количество положительных элементов = " << count << endl;

    delete[] A;
    return 0;
}






