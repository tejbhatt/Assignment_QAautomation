import Page from './page';

class LoginPage extends Page {

    get inputEmail() { return $("//input[@type='email']")}
    get inputPassword() { return $("//input[@type='password']")}
    get buttonLogin() { return $("//button[normalize-space()='Login']")}

    get buttonCreateBoard() {return $("//a[normalize-space()='Create a Board']")}
    get headingText() {return $("//h1[normalize-space()='Create a Board']")}

    get sessionNameText() { return $("//input[@placeholder='Session Name']")}
    get btnGreenPlus() { return $("//button[@class='card m-1 p-0 btn align-items-center justify-content-center btn-link border-success empty-card text-success']")}
    get CardTitle() { return $("//input[@placeholder='Required']")}
    get CardDescription() { return $("//textarea[@placeholder='Optional']")}
    get CardAdd() { return $("//button[normalize-space()='Add Card']")}

    get btnRedPlus() { return $("//button[@class='card m-1 p-0 btn align-items-center justify-content-center btn-link border-danger empty-card text-danger']")}

    get thumbsUp() {return $("//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/ul[1]/li[3]/button[1]")}

    get btnDelete() {return $("//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/ul[1]/li[2]/button[1]")}

    get btnConfirm() {return $("//button[normalize-space()='Confirm']")}
    





 
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }



 open() {

super.open('https://sprintboards.io/auth/login');
}
}

export default new LoginPage();