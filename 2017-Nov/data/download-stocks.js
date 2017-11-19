var stocks = ["GOOG", "MSFT", "FB", "AAPL"];

for (var i =0; i < stocks.length; i++){
	url = "https://query1.finance.yahoo.com/v7/finance/download/" + stocks[i] + "?period1=1497844358&period2=1500436358&interval=1d&events=history&crumb=un5xYDYUOl3"
	window.open(url,"_blank")
	sleep(3000);
}
	

