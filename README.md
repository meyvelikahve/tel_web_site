!Turkish

Tasarım Dökümanı Klavuzu (Design Document Guideline)

 Giriş (Introduction):

Web sitemizin amacı, 2. el telefon alım-satım işlemlerinde aracılık görevi
görmektir.

 Faaliyet Alanı ve Hedef (Scope & Target):
	
	Sitemiz her geçen gün ulaşımı daha da zorlaşan sıfır telefon alım zorluğu 
  yüzünden insanların 2. el telefonlara yönelmesi ve aradaki aracı 	
  komisyonundan kurtularak direkt olarak telefonun sahibiyle alım-satım 	yapabilmesini hedeflemektedir.


Fonksiyonellik (Functionality): 

Web sitemizde telefon almak için ziyaret edilecekse kullanıcı girişi yapmak gerekmemektedir. Telefonunuzu satılığa çıkarıp ilan ekleyebilmek için kayıt olmanız gerekmektedir. Hesap oluştururken istenilen bilgilerin formda doldurulması gerekmektedir. Sitemiz online alışveriş vaat etmemektedir. İlanda bulunan iletişim bilgileri vasıtasıyla satıcıyla iletişime geçebilmeniz için ortak platform sağlıyoruz. 	

Diyagramlar (Diagrams):
	
css klasörü: Kullanılan css dosyalarının bulunacağı klasör.
images klasörü: Kullanılan resimlerin bulunacağı klasör.
html klasörü: Kullanılan html dosyalarının bulunacağı klasör.
/Config: Yapılandırma dosyalarını içeren klasör 

	/auth.js:  oturum açmayla ilgili işlemler yapılan dosya  

	/passport.js: passport paketinin işlemleri yapılan dosya 

/Models: Gerekli modelleri içeren klasör 

	/phone_model.js: Telefon ilanı için model  

	/user_model.js: Oturum açma için kullanıcı modeli 

/public: Static olarak tanımlanmış klasör 

/css: css dosyalarını içeren klasör 

/images: resimleri içeren klasör 

/routes: Gerekli routeların tanımlandığı klasör 

	/index.js: Ana sayfa route 

	/phone_route: Telefon için get, post işlemlerini içerir 

	/user_route: Kullanıcı için get, post işlemlerini içerir 

/views: Sayfa görsellerini için gerekli .ejs dosyalarını içerir. 

 

.env: Gerekli sabitler saklanır. 

.gitignore: Github a atılmak istenmeyen dosyaları içerir. (.env) 

App.js: Tüm uygulamanın bileştiği ve ayağa kaldırıldı dosyadır. 

		main.css: 
		Genel olarak kullanılan css stillerini içerir.

		navigation_bar.css:
		Sayfaların üst kısımlarında bulunan barın stil özelliklerini içerir.

		user.css:
		Kayıt ve giriş ekranlarında bulunan form özelliklerini içerir.

		create_user.html - login_user.html: 
		Kullanıcının giriş ve kayıt işlemelerini gerçekleştireceği sayfalar

		phone_sell.html - phone_buy.html:
		Telefon alım veya satımını gerçekleştireceği sayfalar

		index.html:
		Web sitemizin ana sayfasıdır.
			


Front-End/Back-End Özellikleri ve Etkileşimi:

Front-end kısmında Html-Css-JavaScript-Ejs kullanılmıştır. Html ile 

oluşturulan sayrafalarımıza Css kullanarak stiller eklenmiş ve JavaScriptle beraber 

kullanıcıyla etkileşime girebilmeye imkan sağlayan dinamik özellikler eklenmiştir. 

Back-end kısmında Node.js ve Mongo Db kullanılmıştır. Bağlandığımız veritabanına 

kayıt olan kullanıcıların ad, soyad, iletişim vs gibi bilgiler tutulacaktır. Aynı zamanda 

sitemizin amacı olan telefon ilanları için telefonun öncelikli olan bilgileri veritabanına 

kaydedilecektir. Dolayısıyla kullanıcı ve telefon özellikleri için iki farklı model 

tasarlanmıştır. Bu bilgiler mongo db güvencesiyle cloud üzerinde güvenle 

Saklanacaktır. 

Uygulama Videosu:
https://youtu.be/vItkBY-MQQA
