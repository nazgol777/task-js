let firstQ = prompt('ведіть ім\'я');

if (firstQ === 'Ім’я') {
    let passwordQ = prompt('введіть пароль')
    if (passwordQ === 'ЛОГОС') {
        alert('Ласкаво просимо!');
    }
    else {
        alert('Пароль невірний');
        console.log('Пароль невірний');
    }
}

else if (firstQ === null) {
    alert('Вхід скасований')
    console.log('Вхід скасований')
}

else {
    alert('Я вас не знаю');
    console.log('Я вас не знаю');
}