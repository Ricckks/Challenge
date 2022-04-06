const {Builder, By, Key} = require ("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");


async function teste () {


let driver = await new Builder().forBrowser ("chrome").build();

    // O Selenium entrará na URL
    await driver.get ("http://automationpractice.com/index.php")

    //Encontrará o campo Sign In e clicará
    await driver.findElement(By.xpath("/html/body/div/div[1]/header/div[2]/div/div/nav/div[1]/a")).click;

//Cenário 1 // Login Invalido

    // Encontra o campo email address, clica e insere algum valor.
    await driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/div[2]/div[2]/form/div/div[1]/input")).sendKeys("Teste", key.Return);
    
    // Encotra o botão Sign in e clica nele.
    await driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/div[2]/div[2]/form/div/p[2]/button/span")).click;



//Cenário 2 // Login em Branco
    
    // Encotra o botão Sign in e clica nele.
    await driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/div[2]/div[2]/form/div/p[2]/button/span")).click;


//Cenário 3 // Login com Sucesso

     // Encontra o campo email address, clica e insere algum valor.
     await driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/div[2]/div[2]/form/div/div[1]/input")).sendKeys("dinho.andradefilho@gmail.com", key.Return);
    
     // Encontra o campo Password e insere uma senha
     await driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/div[2]/div[2]/form/div/div[2]/span/input")).sendKeys("EuamoTI", key.Return);
     
     
     // Encotra o botão Sign in e clica nele.
     await driver.findElement(By.xpath("/html/body/div/div[2]/div/div[3]/div/div[2]/div[2]/form/div/p[2]/button/span")).click;


//Fecha o naveador.
await driver.quit();




}
