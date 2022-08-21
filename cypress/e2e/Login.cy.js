/// <reference types="cypress" />
import LoginPage from "../integration/PageObject/LoginPage.js"

describe("Cypress POM Test Suite", function () {

  const login = new LoginPage(); 

  beforeEach (function(){
    cy.fixture('Users').then(credentials => {
      this.credentials = credentials;
    })
  })

it('Usuario exitoso SauceDemo',function () {
    login.navigate()
    login.enterUser(this.credentials.standardUser)
    login.enterPassword(this.credentials.password)
    login.submit()
    login.confirmLogin()
  })

  it('Usuario Bloqueado SauceDemo', function() {
    login.navigate()
    login.enterUser(this.credentials.lockedOutUser)
    login.enterPassword(this.credentials.password)
    login.submit()
    login.confirmError()
  })

  it('Usuario con problema SauceDemo', function()  {
    login.navigate()
    login.enterUser(this.credentials.problemUser)
    login.enterPassword(this.credentials.password)
    login.submit()
    login.confirmLogin()
  })

  it('Usuario con problema de Performance SauceDemo', function()  {
    login.navigate()
    login.enterUser(this.credentials.performanceGlitchser)
    login.enterPassword(this.credentials.password)
    login.submit()
    login.confirmLogin()
  })

})