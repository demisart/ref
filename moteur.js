var item = new Array();


// "Page","Address","","Title of the page","Keyword","Description of the page"



//A
c=0; item[c]=new Array("","","Aa"," a, a ","Aa");

//B
c++; item[c]=new Array("","","Bb"," b, a ","Bb");



page=
"<html><head><title>Results of the search</title></head><body bgcolor='#C3CEF9'><center><a href=''><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAAByCAMAAAC4A3VPAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAnUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN0S+bUAAAAMdFJOUwAQIEBwf5+vv8/f74Fo6LEAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAD3SURBVGhD7drLDoMgEEBRFIvP///eJjpsyhTHoYlpvGeHmXBXVWINAPBd/2rWy1ZWcWsWZSsrkkYkNUdySdm6r2tmmUxJLviSo6xCmPd1TZLJEJbjAkkNSd2PklPMZJuKYtaXbEJSQ9KIpIakkS85dtn5PTbJZNfJocWZlBXPy4ykyW3Jbc7OT+vFrDPZgqSGpBFJzZOS85DJfbNikslh4FRQQVL3v8krP5Ji1pdsQlJD0oik5knJdcn2ZVUx60vy8PpE0uRJySYkNSSNSGpIGvmSV/4YHmUyRl5PVJDU/W/yyidGxawv2YSkhqTR1eQNH6sCeJAQ3jHjBvJpYGTdAAAAAElFTkSuQmCC' style='max-width:100px;width: auto;'/></a><table border=0 cellspacing=10 width=80%>"
;

function search(frm) {
	win=window.open("", "_self");
	win.document.write(page);
	txt = frm.srchval.value.split(" ");
	fnd = new Array(); total=0;
	for (i = 0; i < item.length; i++) {
		fnd[i] = 0; order = new Array(0, 4, 2, 3);
		for (j = 0; j < order.length; j++)
		for (k = 0; k < txt.length; k++)
		if (item[i][order[j]].toLowerCase().indexOf(txt[k]) > -1 && txt[k] != "")
		fnd[i] += (j+1);
	}
	for (i = 0; i < fnd.length; i++) {
		n = 0; w = -1;
		for (j = 0;j < fnd.length; j++)
		if (fnd[j] > n) { n = fnd[j]; w = j; };
		if (w > -1) total += show(w, win, n);
		fnd[w] = 0;
	}
win.document.write("</table><br><font face='meiryo'>Cerca de <b>"+total+"</b> resultados</font><br></body></html>");
win.document.close();
}
function show(which,wind,num) {
	link = item[which][1] + item[which][0]; 
	line = "<tr><td><a href='"+link+"' style='color:black; font-family:Tahoma;font-size: 25px ; text-decoration:none;'>"+item[which][2]+"</a> <br/>";
	line += item[which][4] + "</td></tr>";
	wind.document.write(line);
return 1;
}
