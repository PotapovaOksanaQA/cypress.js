describe('Автотесты на авторизацию', function () {

     
it('1 позитивный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/'); // посещаю сайт 
        cy.get('#mail').type('german@dolnikov.ru'); // ввела  правильный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввела пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка кликабельная 
        cy.get('#loginButton').click(); // нажимаю войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик есть
        })

     it('2 автотест на проверку логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // посещаю сайт 
        cy.get('#forgotEmailButton').click(); //  клик по кнопке "забыли пароль"
        cy.get('#mailForgot').type('german@dolnikov.ru'); // ввела  почту
        cy.get('#restoreEmailButton').click(); // клик кнопка
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверяю текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик есть
        })
            

     it('3 негативный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/'); // посещаю сайт 
        cy.get('#mail').type('german@dolnikov.ru'); // ввела  правильный логин
        cy.get('#pass').type('iLoveqastudio1111'); // ввела  неверный пароль
        cy.get('#loginButton').click(); // нажимаю войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик есть
        })

      it('4 негативный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/'); // посещаю сайт 
        cy.get('#mail').type('ger111111mandolnikov.ru'); // ввела  неправильный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввела  верный пароль
        cy.get('#loginButton').click(); // нажимаю войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверяю текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик есть
        })

      it('5 негативный кейс валидации', function () {
        cy.visit('https://login.qa.studio/'); // посещаю сайт 
        cy.get('#mail').type('germandolnikov.ru'); // ввела  неправильный логин без @
        cy.get('#pass').type('iLoveqastudio1'); // ввела  верный пароль
        cy.get('#loginButton').click(); // нажимаю войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверяю текст
        
        })


      it('6 приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); // посещаю сайт 
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввела   логин 
        cy.get('#pass').type('iLoveqastudio1'); // ввела  верный пароль
        cy.get('#loginButton').click(); // нажимаю войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик есть

})

   })
      
        

describe('Покупка аватара', function () {
   it('e2e тест на покупку нового аватара для тренера', function () {
        cy.visit('https://pokemonbattle.me/');
        cy.get(':nth-child(1) > .auth__input').type('prod@red.ru');
        cy.get('#password').type('123456PROD');
        cy.get('.auth__button').click();
        cy.get('.header__btns > [href="/shop"]').click();
        cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('German Dolnikov');
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.get('.payment__adv').click();
    })
})
