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

	Web sitemizde telefonunuzu satılığa çıkarabilmeniz için kayıt olmanız ve giriş	yapmanız gerekmektedir. 
  Hesap oluştururken istenilen bilgilerin formda 	doldurulması gerekmektedir.	

Diyagramlar (Diagrams):
	
css klasörü: Kullanılan css dosyalarının bulunacağı klasör.
images klasörü: Kullanılan resimlerin bulunacağı klasör.
html klasörü: Kullanılan html dosyalarının bulunacağı klasör.

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

Front-end kısmında Html-Css-JavaScript kullanılmıştır. Html ile 
oluşturulan sayrafalarımıza Css kullanarak stiller eklenmiş ve JavaScriptle beraber kullanıcıyla etkileşime girebilmeye imkan sağlayan dinamik özellikler eklenmiştir.

Back-end kısmında Node.js ve Mongo Db kullanılacaktır. Bağlandığımız veritabanına kayıt olan kullanıcıların ad, soyad, iletişim vs gibi bilgiler tutulacaktır. Aynı zamanda sitemizin amacı olan telefon ilanları için telefonun öncelikli olan bilgileri veritabanına kaydedilecektir. Dolayısıyla kullanıcı ve telefon özellikleri için iki farklı model tasarlanacaktır. Bu bilgiler mongo db güvencesiyle cloud üzerinde güvenle saklanacaktır.
