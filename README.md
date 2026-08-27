# Animated Progress Steps

Kullanıcı kayıt akışları, sipariş takibi veya çok adımlı formlarda (multi-step forms) süreci görsel olarak aşamalandıran, CSS animasyonları ile desteklenmiş **Vanilla JavaScript** ilerleme adımı bileşeni.

---

## 📸 Ekran Görüntüsü

<img width="1280" height="720" alt="Screen Recording 2026-08-27 at 10 35 24 79 PM" src="https://github.com/user-attachments/assets/c9a0743e-e9fb-43f7-a8d7-b2a58af59c5c" />



---

## 🚀 Özellikler

* **Dinamik Adım İlerlemesi:** "Next" (İleri) ve "Prev" (Geri) butonları ile adımlar arasında akıcı geçiş.
* **Otomatik Buton Durumu Kontrolü:** İlk adımda "Prev" butonunun, son adımda "Next" butonunun otomatik olarak pasif (`disabled`) hale gelmesi.
* **Akıcı Çizgi Animasyonu:** Adımlar arasındaki bağlantı çizgisinin yüzdesel genişlik (`width %`) hesaplamasıyla animasyonlu olarak dolması.
* **Dinamik Sınıf Yönetimi (`active` Class):** Tamamlanan adımların kenarlık ve numara renklerinin dinamik olarak güncellenmesi.
* **Responsive Tasarım:** Farklı ekran boyutlarına uyum sağlayan esnek Flexbox mimarisi.

---

## 🛠️ Teknolojik Mimari

* **HTML5:** Semantik buton ve kapsayıcı (`container`) yapıları.
* **CSS3:** 
  * `flexbox` ile adımların eşit aralıklarla hizalanması
  * `transition: 0.4s ease` ile çizgi dolgu ve renk değişim animasyonları
  * CSS değişkenleri (`:root`) ile kolay tema yönetimi
* **Vanilla JavaScript (ES6+):** 
  * DOM element seçimi (`querySelectorAll`, `getElementById`)
  * `click` event listener yönetimi
  * Sınır kontrolleri ve durum yönetimi (State)

---

## 📂 Proje Dosya Yapısı

```text
progress-steps/
│
├── assets/
│   └── preview.png       # README ekran görüntüsü
├── index.html            # İlerleme çubuğu ve buton yapıları
├── style.css             # Çizgi genişlikleri, durum renkleri ve animasyonlar
├── script.js             # İndeks takibi, genişlik hesaplama ve aktiflik kontrolü
└── README.md             # Proje dokümantasyonu
