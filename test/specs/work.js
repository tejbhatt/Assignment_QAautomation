import Page from "../page objects/page";  
import LoginPage from "../page objects/login.page"; 
import login_data from "../../Test Data/test_data";


describe('Sprint Board Automation', ()=>{


    it('Open Homepage', async ()=> {
        LoginPage.open();
        await browser.pause(5000);     
    })

    it('Login Test', async ()=> {

        await LoginPage.inputEmail.waitForExist({ timeout: 2000 });
        LoginPage.inputEmail.setValue(login_data.userEmail);

        await browser.pause(2000);

        await LoginPage.inputPassword.waitForExist({ timeout: 2000 });
        LoginPage.inputPassword.setValue(login_data.userPassword);

        await browser.pause(1000);
        LoginPage.buttonLogin.click();

        await browser.pause(5000);
    })

    it('Create Board test', async () => {
       

        (await LoginPage.buttonCreateBoard).click();
        await browser.pause(2000)

        await expect(browser).toHaveUrl("https://sprintboards.io/boards/create")
        await expect(LoginPage.headingText).toBeDisplayed();

        (await LoginPage.sessionNameText).setValue(login_data.boardTitle)
        await browser.pause(2000)

        let element = await $("//button[normalize-space()='Create Board']")
        await element.scrollIntoView();
        await element.click();
        await browser.pause(3000);        
    });

    it('Add Card in Green Board', async () => {
 
        (await LoginPage.btnGreenPlus).click();
        await browser.pause(5000);

        (await LoginPage.CardTitle).setValue(login_data.cardTitle);
        await browser.pause(2000);
        (await LoginPage.CardDescription).setValue(login_data.cardDescription);
        await browser.pause(2000);
        (await LoginPage.CardAdd).click();
        await browser.pause(5000);
    });

    it('Add Card in Red Board', async () => {
 
        (await LoginPage.btnRedPlus).click();
        await browser.pause(5000);

        (await LoginPage.CardTitle).setValue(login_data.redCardTtitle);
        (await LoginPage.CardDescription).setValue(login_data.redcardDescription);
        await browser.pause(2000);
       
        (await LoginPage.CardAdd).click();
        await browser.pause(5000);
    });

    it('Thumbsup Click Test', async () => {

        
        (await LoginPage.thumbsUp).click();
        await browser.pause(5000);
        
    });

    it('Delete Click Test', async () => {
 
        (await LoginPage.btnDelete).click();
        await browser.pause(2000);

    });

    it('Confirm Button Click Test', async () => {
 
        await (await LoginPage.btnConfirm).click();
        await browser.pause(3000)
    });


    
})