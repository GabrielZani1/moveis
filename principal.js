var banners = ["Os melhores do Brasil!", "Qualidade e preço baixo!"];
var bannerAtual = 0;

function trocaBanner(){
	setInterval(trocaBanner, 1000);
	BannerAtual = (bannerAtual + 1) % 2;
	document.querySelector('h2#mensagem').textContent = banners[bannerAtual];
}

setInterval(trocaBanner, 2000);
