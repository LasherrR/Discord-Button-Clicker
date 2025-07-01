Selam, ben lasher.

# ✨ Neva Development – Discord Oynuyor Sistemi (Rich Presence)

**Neva Development** - Discord Button Click Sistemi, Discord'da herhangi ismi belirlenen butona otomatik kullanılır. 
---

## 🚀 Nasıl Kurulur? (Adım Adım Anlatım)
- Gereksinimler: Windows 10 veya 11
- Puppeteer web browser otomosyonu
- Node.js (v16 veya üzeri)
- Discord uygulaması (açık olmalı)
- Visual Studio Code (tavsiye edilir)


## 🏗️ Nasıl Kullanılır?
- Genellikle sunucu oy butonlarında veya herhangi bir çekiliş drop sunucularında otomatik salisesinde tıklama yapar kaç saniyede bir tıklamayı yapmak için;
```bash
setInterval(clickButton, 5000); → 5 sayısı olan yere sayı koyayarak süreyi arttırabilirsiniz.
```
- E-posta ve kullanıcı şifresini girelim.
```bash
await page.type('input[name="email"]', 'EMAİLİNİZ');
await page.type('input[name="password"]', 'ŞİFRENİZ');
```
- Buton'un ismini ayarlayalım.
```bash
const target = buttons.find(btn => btn.textContent.includes("BUTON İSMİNİZ BURAYA TIPATIP AYNISINI YAZIN NOT(BUTONDAKI EMOJILERI GIRMENIZE GEREK YOK SADECE BUTON İSMİ) "));
```


# 📂 Kurulum
Gerekli Web Tarayıcı Otomosyonlarını Modülleri İndirelim
```bash
npm install puppeteer
```
Başlatalım
```bash
npm install
```


# 🔧 Dosya Yapısı
```
- 📁 discord-gg-altyapi/          → Tüm dosyalar
- 📄 index.js                  → Ana çalıştırılacak dosya
- 📄 package-lock.json         → Çalıştırma komutlarını içerir
- 📄 package.json              → Çalıştırma komutlarını içerir
```


# 💻 Geliştirici
Bu altyapı Neva Development tarafından geliştirilmiştir. Projeyi beğendiyseniz ⭐ vererek destek olabilirsiniz!

# 📜 Lisans
MIT Lisansı – Tamamen açık kaynak ve özelleştirilebilir.

# 📞 İletişim
Projeyle ilgili sorunlar veya öneriler için lütfen [Discord](discord.gg/altyapi) sunucumuza katılın veya bizimle iletişime geçin. (discord.gg/altyapi)


# 🧽 Sık Sorulan Sorular (SSS)
❓ **Neden çalıştıramadım**
✔️ 2FA Doğrulama açıksa browsere girerken şifre ve kullanıcıyı otomatik girecektir, siz sadece 2FA'yı doldursanız yeterli, 20 saniye boyunca birşey girmezseniz sistem uyarı verir ve tekrardan çalıştırmanız gerekecektir.

❓ **Butona basmıyor**
✔️ Girilien butonun kanalına girin butonla koddaki buton ismi aynı olmalıdır.

❓ **Sistem hep açık mı kalmalı?**
✔️ Evet, sistem çalışırken terminal kapanmamalı.
