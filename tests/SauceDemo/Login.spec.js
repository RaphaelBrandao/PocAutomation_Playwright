const { test, expect } = require('@playwright/test')

test.describe('Login', () => {
    test.beforeEach(async ({ page }) => {
      await test.step('Acessa a homepage saucedemo.com', async () => {
        await page.goto("https://www.saucedemo.com/")
      })
    })
  
    test('Valida a estrutura da página', async ({ page }) => {
        await test.step('Verifica campo username', async () => {
            await expect(page.locator('[data-test="username"]')).toBeVisible()
        })
        await test.step('Verifica campo password', async () => {
            await expect(page.locator('[data-test="password"]')).toBeVisible()
        })
        await test.step('verifica botão login', async () => {
            await expect(page.locator('[data-test="login-button"]')).toBeVisible()
        })
    })
    
    test('Login usuário padrão', async ({ page }) => {
        await test.step('Informa o usuário', async () => {
            await page.locator('[data-test="username"]').fill('standard_user');
        })
        await test.step('Informa a senha', async () => {
            await page.locator('[data-test="password"]').fill('secret_sauce');
        })
        await test.step('Clica no botão Login', async () => {
            await page.locator('[data-test="login-button"]').click();
        })
    })
})