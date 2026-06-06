import random
from typing import List, Tuple

MIN_NUMBER = 1
MAX_NUMBER = 100
MAX_ITERATIONS = 1000
EXIT_CODE = 0

def generate_random_number(min_val: int = MIN_NUMBER, max_val: int = MAX_NUMBER) -> int:
    return random.randint(min_val, max_val)


def get_user_input(prompt: str = "Введите 0 для выхода: ") -> int:
    while True:
        try:
            value = int(input(prompt))
            return value
        except ValueError:
            print(" Ошибка! Введите целое число.")


def generate_numbers_until_exit() -> List[int]:
    numbers = []
    iteration = 0
    
    while iteration < MAX_ITERATIONS:
        rand_num = generate_random_number()
        print(f" Сгенерировано число: {rand_num}")
        numbers.append(rand_num)
        
        user_input = get_user_input()
        
        if user_input == EXIT_CODE:
            break
            
        iteration += 1
    else:
        print(f" Достигнут лимит генерации ({MAX_ITERATIONS} чисел).")
    
    return numbers


def remove_last_element(numbers: List[int]) -> List[int]:
    if numbers:
        numbers.pop()
    return numbers


def display_statistics(numbers: List[int]) -> None:
    print("\n" + "=" * 50)
    print(" РЕЗУЛЬТАТ:")
    
    if numbers:
        print(f" Числа (кроме последнего): {numbers}")
        print(f" Количество чисел: {len(numbers)}")
        print(f" Максимальное число: {max(numbers)}")
        print(f" Минимальное число: {min(numbers)}")
        print(f" Среднее значение: {sum(numbers) / len(numbers):.2f}")
    else:
        print(" Список пуст. Не было сгенерировано ни одного числа перед вводом 0.")
    
    print("=" * 50)


def main() -> None:
    print("\n ДОБРО ПОЖАЛОВАТЬ В ГЕНЕРАТОР СЛУЧАЙНЫХ ЧИСЕЛ ")
    print(f"Диапазон чисел: от {MIN_NUMBER} до {MAX_NUMBER}")
    print(f"Для выхода введите {EXIT_CODE}\n")
    
    numbers = generate_numbers_until_exit()
    numbers = remove_last_element(numbers)
    display_statistics(numbers)


if __name__ == "__main__":
    main()