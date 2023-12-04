function calculate() {
    // Pobranie wartości z pola input
    var expression = document.getElementById('expression').value;

    try {
        // Użycie funkcji eval() do obliczenia wyniku
        var result = eval(expression);

        // Wyświetlenie wyniku
        document.getElementById('result').innerText = 'Wynik: ' + result;

        // Wyczyszczenie ewentualnego komunikatu o błędzie
        document.getElementById('error-message').innerText = '';
    } catch (error) {
        // Obsługa błędu w przypadku nieprawidłowego wyrażenia
        document.getElementById('result').innerText = 'Wynik: ';
        document.getElementById('error-message').innerText = 'Błąd: ' + error.message;
    }
}
