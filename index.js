
const puppeteer = require('puppeteer');

process.on('unhandledRejection', err => {
  console.error('🔴 Beklenmeyen Hata:', err);
});

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });

  const page = await browser.newPage();
  console.log("🌐 Discord'a gidiliyor...");
  await page.goto('https://discord.com/login');

  try {
    await page.waitForSelector('input[name="email"]');
    console.log("📝 Giriş bilgileri giriliyor...");
    await page.type('input[name="email"]', 'EMAİLİNİZ');
    await page.type('input[name="password"]', 'ŞİFRENİZ');
    await page.click('button[type="submit"]');
  } catch (err) {
    console.log("❌ Giriş formu bulunamadı:", err.message);
    return;
  }

  try {
    console.log("⏳ Giriş sonrası sayfa bekleniyor...");
    await page.waitForNavigation({ timeout: 15000 });
  } catch (err) {
    console.log("⚠️ Giriş başarılı olmayabilir veya 2FA var. Lütfen kontrol et.");
  }

  console.log("📌 Şimdi butona tıklanacak kanal sayfasına git:");
  console.log("⏱️ 20 saniye bekleniyor...");
  await new Promise(resolve => setTimeout(resolve, 20000));

  const clickButton = async () => {
    try {
      console.log("🖱️ Butonuna tıklandı.");
      await page.$$eval('button', buttons => {
        const target = buttons.find(btn => btn.textContent.includes("BUTON İSMİNİZ BURAYA TIPATIP AYNISINI YAZIN NOT(BUTONDAKI EMOJILERI GIRMENIZE GEREK YOK) "));
        if (target) target.click();
      });
    } catch (err) {
      console.log("❌ Buton bulunamadı:", err.message);
    }
  };

  console.log("🔁 Her 5 saniyede bir butona tıklanacak.");
  setInterval(clickButton, 5000);
})();
